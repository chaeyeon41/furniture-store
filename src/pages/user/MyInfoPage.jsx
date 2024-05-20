import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import LockIcon from '@mui/icons-material/Lock';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Modal } from 'antd';
import DaumPost from "../../components/DaumPost";
import axios from 'axios';
import { useSelector } from "react-redux";

const MyInfoPage = () => {

    const navigate = useNavigate();

    const [phoneNum, setPhoneNum] = useState(useSelector(state => state.loginData.user.phone));
    const [address, setAddress] = useState(useSelector(state => state.loginData.user.address));
    const [detailAddress, setDetailAddress] = useState(useSelector(state => state.loginData.user.detatil_address));

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [daumPostKey, setDaumPostKey] = useState(0);

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

    const loginData = useSelector(state =>
        state.loginData
    )

    // setTimeout(() => {
    //     console.log(`로그인 데이터 : ${loginData.user.username}`);
    // }, 1000);

    const handleUpdateInfo = async () => {
        try {
            const response = await axios.put("http://localhost:8080/member", {
                username: loginData.user.username,
                user_phone: phoneNum,
                user_address: address,
                user_detail_address: detailAddress,
            });
            alert("회원님의 정보가 수정되었습니다.");
            window.location.href = '/'
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="auth-form" style={{ border: 'none', margin: '0 auto' }}>
            <div className="input-form">
                <PhoneIcon className="icons" />
                <InputMask
                    mask="999-9999-9999"
                    placeholderChar=" "
                    defaultValue={loginData.user.phone}
                    required
                    onChange={(e) => setPhoneNum(e.target.value.replace(/\D/g, ''))}
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
                    required
                    placeholder="주소"
                    onChange={(e) => setAddress(e.target.value)}

                />
            </div>
            <Modal title="주소 검색" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <DaumPost key={daumPostKey} setAddress={setAddress} setIsModalVisible={setIsModalVisible} />
            </Modal>
            <div className="input-form" style={{ marginTop: '0px', borderRadius: '0 0 15px 15px' }}>
                <input
                    type="text"
                    defaultValue={loginData.user.detail_address}
                    required
                    placeholder="상세주소"
                    onChange={(e) => setDetailAddress(e.target.value)}
                />
            </div>
            <div className="auth-button" onClick={handleUpdateInfo}>
                수정하기
            </div>
        </div>
    )
}

export default MyInfoPage;
