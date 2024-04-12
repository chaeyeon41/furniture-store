import React, { useState, useEffect } from "react";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

const LoginForm = () => {

    return (
        <div className="auth-form-container">
            <form
                className="auth-form"
                action="http://localhost:8080/login"
                method="POST"
            >
                <div className="input-form">
                    <PersonIcon className="icons" />
                    <input
                        name="username"
                        type="text"
                        required
                        placeholder="아이디"
                    />
                </div>
                <div className="input-form">
                    <LockIcon className="icons" />
                    <input
                        name="password"
                        type="password"
                        required
                        placeholder="비밀번호"
                    />
                </div>
                <button type="submit" className="auth-button">
                    로그인
                </button>
            </form>
        </div>
    )
}

export default LoginForm;