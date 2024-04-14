import React from "react";
import styled from 'styled-components';
import palette from '../../style/palette';
import { useNavigate } from "react-router-dom";
const FrntCardContainer = styled.div`
    margin: 0.3rem;
    padding: 0.5rem;
    width: 10.6rem;
    border-radius: 10px;
    background-color: ${palette.mainYellow};
`

const ImgContainer = styled.div`
    width: 100%;
    height: 10rem;
    overflow: hidden;
    border-radius: 10px;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const FrntInfo = styled.div`
    display: flex;
    &.title {    
        padding: 0.5rem 0;
        font-family: 'Gmarket Sans Bold';
        justify-content: center;
        font-size: 1rem;
    }

    &.info {
        justify-content: space-between;
        display: flex;
        font-size: 0.75rem;
    }
`;


const FurnitureCard = ({ frntItem }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/furniture/${frntItem.frnt_id}`, { state: { frntItem } })
    }

    return (
        <FrntCardContainer onClick={handleClick}>
            <ImgContainer>
                <Img src={frntItem.frnt_img} alt={'이미지'} />
            </ImgContainer>
            <FrntInfo className='title'>
                {frntItem.frnt_title}
            </FrntInfo>
            <FrntInfo className='info'>
                <div>{`'${frntItem.frnt_seller}' 님의 상품`}</div>
                <div>{`${frntItem.frnt_price}원`}</div>
            </FrntInfo>
        </FrntCardContainer>
    )
}

export default FurnitureCard;