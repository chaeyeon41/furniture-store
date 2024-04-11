import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const HeaderContainer = styled.header`
    background: #F6EAC2;
    color: Black;
    padding: 0.8rem 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;

    .main-icon:hover {
        cursor: pointer;
    }
`

const MenuList2 = styled.div`
    display: flex;
    gap: 10px;
    font-size: 0.8rem;
`

const MenuItem2 = styled(Link)`
    border-bottom: ${props => props.currentPath === props.to ? '2px solid black' : 'none'};    
    padding-bottom: ${props => props.currentPath === props.to ? '2px' : 'none'};  
`

const StyledMenuItemText = styled.div`
    font-family: 'Gmarket Sans Medium';
    font-size: 0.8rem;
`;

const Header = () => {

    const [isLogin, setIsLogin] = useState(true);
    const location = useLocation();
    const navigate = useNavigate(); // useNavigate 훅 사용


    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleNavigate = (path) => {
        navigate(path);
        handleClose();
    };

    return (
        <HeaderContainer>
            <h2 className="main-icon">
                <Link to={'/'} style={{ textDecoration: 'none', color: "black" }}>가구사구</Link>
            </h2>
            {
                isLogin ? (
                    <div>
                        <IconButton
                            // size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => handleNavigate('/mypage')}>
                                <StyledMenuItemText>마이페이지</StyledMenuItemText>
                            </MenuItem>
                            <MenuItem onClick={() => handleNavigate('/cart')}>
                                <StyledMenuItemText>장바구니</StyledMenuItemText>
                            </MenuItem>
                            <MenuItem>
                                <StyledMenuItemText>로그아웃</StyledMenuItemText>
                            </MenuItem>
                        </Menu>
                    </div>
                ) : (
                    <MenuList2>
                        <MenuItem2
                            to={'/login'}
                            className="link"
                            currentPath={location.pathname}
                        >로그인</MenuItem2>
                        <MenuItem2
                            to={'/signup'}
                            className="link"
                            currentPath={location.pathname}
                        >회원가입</MenuItem2>
                    </MenuList2>
                )
            }
        </HeaderContainer >
    )
}

export default Header;