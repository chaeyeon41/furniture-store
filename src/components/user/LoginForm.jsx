import React, { useState, useEffect } from "react";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

const LoginForm = () => {

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="auth-form-container">
            <div className="auth-form">
                <div className="input-form">
                    <PersonIcon className="icons" />
                    <input
                        type="text"
                        key={'id'}
                        placeholder="아이디"
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>
                <div className="input-form">
                    <LockIcon className="icons" />
                    <input
                        type="password"
                        placeholder="비밀번호"
                        key={'password'}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="auth-button">
                    로그인
                </div>
            </div>
        </div>
    )
}

export default LoginForm;