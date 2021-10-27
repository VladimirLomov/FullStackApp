import React from 'react'
import {useDispatch} from "react-redux"
import {uploadAvatar,deleteAvatar} from "../../actions/user"

const Profile =() => {
const dispatch = useDispatch()

function changeHandler(e){
    const file = e.target.files[0] 
    dispatch(uploadAvatar(file))
}

    return (
        <div>
            <button onClick={()=>dispatch(deleteAvatar())}>Удалить аватар</button>
            <input accept="image/*" onChange={e=> changeHandler(e)} type='file' placeholder="загрузить аватар" />   
        </div>
    )
}

export default Profile