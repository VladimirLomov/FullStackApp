import { useState } from "react";
import { registration } from "../../actions/user";
import Input from "../../utils/input/Input";
import "./registration.css"

function Registration() {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

    return (
      <div className = "login">
          <div className="login__header">Регистрация</div>
          <Input value={email} setValue = {setEmail} type="text" placeholder="Введите email"/>     
          <Input value ={password} setValue= {setPassword} type="password" placeholder="Введите пароль"/>     
         
          <button className="login__btn" onClick={()=>registration(email,password)}>Зарегистрироваться</button>     
         
      </div>
    );
  }
  
  export default Registration;
  