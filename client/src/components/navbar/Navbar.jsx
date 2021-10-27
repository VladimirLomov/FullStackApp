import "./navbar.css"
import {NavLink} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../../reducers/userReducer";
import { useState } from "react";
import { getFiles, searchFiles } from "../../actions/file";
import { showLoader } from "../../reducers/appReducer";
import avatarLogo from '../../assets/login.png'
import {API_URL} from "../../config"

function Navbar() {
  const isAuth = useSelector(state=> state.user.isAuth)
  const currentDir = useSelector(state=> state.files.currentDir)
  const currentUser = useSelector(state=> state.user.currentUser)
  const dispatch = useDispatch()
  const [searchName, setSearchName] = useState('')
  const [searchTimeout, setSearchTimeout] = useState(false)
  const avatar = currentUser.avatar ? `${API_URL+currentUser.avatar}`: avatarLogo
  
  function searchChangeHandler(e) {
    setSearchName(e.target.value)
    if(searchTimeout !== false) {
      clearTimeout(searchTimeout)
    }

    dispatch(showLoader())
    if(e.target.value !== ''){ setSearchTimeout(setTimeout((value)=>{
      dispatch(searchFiles(value))
    },500,e.target.value))
  } else {
    dispatch(getFiles(currentDir))
  }
    
  }
  return (
    <div className = "navbar">
      <div className = "container">
        <div className="navbar__header" > Облачное хранилище</div>
        {isAuth && <input
        value = { searchName}
        onChange={ (e) => searchChangeHandler(e)}
        className='navbar__search'  type="text" placeholder="название файла..." />  }
       
        {!isAuth && <div className="navbar__registration" ><NavLink to="/registration">Регистрация</NavLink> </div>}
        {!isAuth && <div className="navbar__login " > <NavLink to="/login">Войти</NavLink> </div>}
       
        {isAuth && <NavLink to ='/profile'><img className="navbar__avatar" src={avatar} alt="" /></NavLink> }
        {isAuth && <div className="navbar__login-exit " onClick={()=>dispatch(logout())} >Выход </div>}
    </div>
    </div>
  );
}

export default Navbar;
