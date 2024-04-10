import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
const HeaderContainer = styled.header`
    background: #F6EAC2;
    color: Black;
    padding: 20px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;

    .main-icon:hover {
        cursor: pointer;
    }
`

const MenuList = styled.div`
    display: flex;
    gap: 10px;
    font-size: 0.8rem;
`

const MenuItem = styled(Link)`
    border-bottom: ${props => props.currentPath === props.to ? '2px solid black' : 'none'};    
    padding-bottom: ${props => props.currentPath === props.to ? '2px' : 'none'};  
`

const Header = () => {

    const [isLogin, setIsLogin] = useState(false);
    const location = useLocation();

    return (
        <HeaderContainer>
            <h2 className="main-icon">
                <Link to={'/'} style={{ textDecoration: 'none', color: "black" }}>가구사구</Link>
            </h2>
            {/* <nav>
                <ul>
                    <li>마이페이지</li>
                    <li>로그인</li>
                    <li>회원가입</li>
                </ul>
            </nav> */}
            {
                isLogin ? (
                    <MenuList>
                        <MenuItem to={'/'} className="link" currentPath={location.pathname}>장바구니</MenuItem>
                        <MenuItem to={'/mypage'} className="link" currentPath={location.pathname}>마이페이지</MenuItem>
                    </MenuList>
                ) : (
                    <MenuList>
                        <MenuItem to={'/login'} className="link" currentPath={location.pathname}>로그인</MenuItem>
                        <MenuItem to={'/signup'} className="link" currentPath={location.pathname}>회원가입</MenuItem>
                    </MenuList>
                )
            }
        </HeaderContainer >
    )
}

export default Header;