import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import axios from 'axios';
import { useSelector } from "react-redux";

const SettingPage = () => {

    const navigate = useNavigate();


    const [password, setPassword] = useState();
    const [checkPassword, setCheckPassword] = useState();
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const loginData = useSelector(state =>
        state.loginData
    )

    const handleUpdateInfo = async () => {
        try {

            if (password === checkPassword) {
                const response = await axios.put("http://localhost:8080/member/pw", {
                    username: loginData.user.username,
                    password: password,
                });
                alert("회원님의 정보가 수정되었습니다.");
                navigate('/')
            } else {
                alert("비밀번호가 다릅니다.")
            }
        } catch (error) {
            console.log(error);
        }
    };

    const onClickDeleteAccount = async () => {
        try {
            const response = await axios.delete(`http://localhost:8080/member/${loginData.user.username}`);
            console.log(response.data);
            alert("회원 탈퇴 처리가 완료되었습니다.");
            window.location.href = '/'
        } catch (error) {
            console.log(error);
            alert("회원 탈퇴 처리 중 오류가 발생했습니다.");
        }
    }

    return (
        <div className="auth-form" style={{ border: 'none', margin: '0 auto' }}>
            <div className="input-form">
                <LockIcon className="icons" />
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="새 비밀번호"
                    required
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                {showPassword ?
                    <VisibilityOutlinedIcon
                        className="icons"
                        onClick={toggleShowPassword}
                        style={{ color: "#FFD93D" }}
                    /> :
                    <VisibilityOffOutlinedIcon className="icons" onClick={toggleShowPassword} />
                }
            </div>
            <div className="input-form">
                <LockIcon className="icons" />
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="새 비밀번호 확인"
                    required
                    onChange={(e) => {
                        setCheckPassword(e.target.value)
                    }}
                />
                {showPassword ?
                    <VisibilityOutlinedIcon
                        className="icons"
                        onClick={toggleShowPassword}
                        style={{ color: "#FFD93D" }}
                    /> :
                    <VisibilityOffOutlinedIcon className="icons" onClick={toggleShowPassword} />
                }
            </div>

            <div className="auth-button" onClick={handleUpdateInfo}>
                수정하기
            </div>
            <div className="withdrawal-btn" onClick={onClickDeleteAccount}>
                탈퇴하기
            </div>
        </div>
    )
}

export default SettingPage;
