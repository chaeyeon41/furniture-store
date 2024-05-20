import React from 'react';
import styled from 'styled-components';
import palette from '../../../style/palette';

const Container = styled.div`
    display: flex;
    width: 100%;
    max-width: 500px;
    // min-height: 90px; // 이 부분 수정
    border: 0.1rem solid ${palette.hoverYellow};
    border-radius: 15px;
    margin: 10px 0;
    padding: 3%;
    font-size: 0.8rem;

    &>div 
    {
        margin: 0 2%;
    }
`

const ImgInfo = styled.div`
    border-radius: 5px;
    width: 20%;
    min-width: 100px;

    &>img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }
`

const TextInfo = styled.div`
    display: flex;
    flex-direction: row;
    padding: 5px;
`

const InfoTitle = styled.div`
    width: 70px;
    color: ${palette.hoverYellow};
`

const InfoContent = styled.div`
    width: 100%;

`
const purchaseHistoryInfo = [
    {
        title: '상품명',
        content: `의자`,
    },
    {
        title: '판매자',
        content: '홍길동',
    },
    {
        title: '거래주소',
        content: '경북 구미시 산호대로29길 7-17 다이소 구미옥계점',
    },
    {
        title: '가격',
        content: '19,200원',
    },
    {
        title: '구매일시',
        content: '2024-04-17',
    }
]

const PurchaseCard = () => {
    return (
        <Container>
            <ImgInfo className='centered-flex'>
                <img src="/img/의자.jpg" alt="상품 이미지" />
            </ImgInfo>
            <div>
                {
                    purchaseHistoryInfo.map((info) => (
                        <TextInfo>
                            <InfoTitle>{info.title}</InfoTitle>
                            <InfoContent>{info.content}</InfoContent>
                        </TextInfo>
                    ))
                }
            </div>
        </Container>
    )
}

export default PurchaseCard;