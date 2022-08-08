import "../../Components/Authorization/authorization.css"
import React, { useState } from "react";
import {useNavigate} from "react-router";



function Authorization(props) {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validEmailPassword = (email, password) => {
        if (email === localStorage.getItem('email') && password === localStorage.getItem('password')) {
            return () => navigate('/menu', {replace: true})
        }
    }

    return (
        <div className="authorization-wrapper">
            <div className="authorization-form">
                <div className="authorization-form__wrapper">
                    <h1 className="authorization-form__title">ВХОД</h1>
                    <input onChange={event => setEmail(event.target.value)} placeholder="E-mail" className="authorization-form__email-input" />
                    <input onChange={event => setPassword(event.target.value)}  type="password" placeholder="Пароль" className="authorization-form__password-input" />
                    <button onClick={validEmailPassword(email, password)} className="authorization-form__login-button">Войти</button>
                </div>
            </div>
        </div>
    );
  }
  
  export default Authorization;