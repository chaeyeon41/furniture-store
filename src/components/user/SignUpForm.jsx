import React, { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Modal, Button } from 'antd';
import DaumPost from "../DaumPost";
import axios from "axios";

const SignUpForm = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [address, setAddress] = useState('');
    const [detailAddress, setDetailAddress] = useState('');


    const [showPassword, setShowPassword] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [daumPostKey, setDaumPostKey] = useState(0);

    const onClickSignUp = () => {
        axios.post('http://localhost:8080/member', {
            user_id: id,
            user_pw: password,
            user_name: name,
            user_phone: phoneNum,
            user_address: address,
            user_detail_address: detailAddress,
        })
            .then((response) => {
                console.log(response.data);
                alert("가구사구에 회원가입을 축하합니다!");
            })
            .catch((error) => console.log(error));
    }

    const showModal = () => {
        setIsModalVisible(true);
        setDaumPostKey(prevKey => prevKey + 1);
    }

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const onChange = (e, key) => {
        let value = e.target.value;
        if (key === 'id') {
            setId(value);
        } else if (key === 'password') {
            setPassword(value);
        } else if (key === 'name') {
            setName(value);
        } else if (key === 'phoneNum') {
            value = value.replace(/\D/g, '');
            setPhoneNum(value);
        } else if (key === 'address') {
            setAddress(value);
        } else if (key === 'detailAddress') {
            setDetailAddress(value);
        }
    };

    return (
        <div className="auth-form-container">
            <div className="auth-form">
                <div className="input-form">
                    <PersonIcon className="icons" />
                    <input
                        type="text"
                        value={id}
                        placeholder="아이디"
                        onChange={(e) => onChange(e, 'id')}
                    />
                </div>
                <div className="input-form">
                    <LockIcon className="icons" />
                    <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        placeholder="비밀번호"
                        onChange={(e) => onChange(e, 'password')}
                    />
                    {
                        showPassword ?
                            <VisibilityOutlinedIcon
                                className="icons"
                                onClick={toggleShowPassword}
                                style={{ color: "#FFD93D" }}
                            />
                            :
                            <VisibilityOffOutlinedIcon className="icons" onClick={toggleShowPassword} />
                    }
                </div>
                <div className="input-form">
                    <PersonIcon className="icons" />
                    <input
                        type="text"
                        value={name}
                        placeholder="이름"
                        onChange={(e) => onChange(e, 'name')}
                    />
                </div>
                <div className="input-form">
                    <PhoneIcon className="icons" />
                    <InputMask
                        mask="999-9999-9999"
                        placeholderChar=" "
                        value={phoneNum}
                        onChange={(e) => onChange(e, 'phoneNum')}
                    >
                        {() => <input type="text" placeholder="전화번호" />}
                    </InputMask>
                </div>
                <div
                    className="input-form"
                    style={{ marginBottom: '0px', borderRadius: '15px 15px 0 0' }}
                    onClick={showModal}
                >
                    <PlaceIcon className="icons" />
                    <input
                        type="text"
                        className="address-form"
                        value={address}
                        placeholder="주소"
                        readOnly
                    />
                </div>
                <div className="input-form" style={{ marginTop: '0px', borderRadius: '0 0 15px 15px' }}>
                    <input
                        type="text"
                        value={detailAddress}
                        placeholder="상세주소"
                        onChange={(e) => onChange(e, 'detailAddress')}
                    />
                </div>
                <Modal title="주소 검색" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <DaumPost key={daumPostKey} setAddress={setAddress} setIsModalVisible={setIsModalVisible} />
                </Modal>
                <div
                    className="auth-button"
                    onClick={onClickSignUp}
                >
                    회원가입
                </div>
            </div>
        </div>
    );
}

export default SignUpForm;
