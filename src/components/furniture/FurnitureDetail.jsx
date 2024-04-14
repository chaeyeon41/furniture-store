import React from 'react';
import styled from 'styled-components';
import FurnitureBriefInfo from './FurnitureBriefInfo';
import palette from '../../style/palette';
const ImageContainer = styled.div`
  width: 35%;
  padding: 0 2rem;
  position: relative;
  `;

const ImageWrapper = styled.div`
  margin: 0 auto;
  max-width: 90%;   
  height: auto;
  min-height: 300px;
  border-radius: 20px;
  `;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: contain;
`;

const FurnitureDetail = ({ frntItem }) => {
    return (
        <>
            <div
                style={{ fontFamily: 'Gmarket Sans Medium', marginTop: '2rem' }}
            >
                <div style={{ display: 'flex' }}>
                    <ImageContainer className='centered-flex'>
                        <ImageWrapper>
                            <Img src={frntItem.frnt_img} alt={frntItem.frnt_title} />
                        </ImageWrapper>
                    </ImageContainer>
                    <FurnitureBriefInfo frntInfo={frntItem} />
                </div>
            </div>
        </>
    )
}

export default FurnitureDetail;