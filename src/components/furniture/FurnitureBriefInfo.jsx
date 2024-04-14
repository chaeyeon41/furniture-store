import React, { useState } from "react";
import styled from "styled-components";
import palette from "../../style/palette";
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const FrntBriefInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 1rem;
    width: 60%;
    font-size: 1.1rem;

    & > div {
        margin-bottom: 0.8rem;
    }
`;

const FrntName = styled.div`
    font-family: 'Gmarket Sans Bold';
    font-size: 2rem;
`

const FrntInfos = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;


const FavoriteButton = styled.div`
    background-color: #ffffff;
    border: 1px solid ${palette.gray};
    border-radius: 50%;
    width: 3.2rem;
    height: 3.2rem;
    box-shadow: 2px 1px 2px ${palette.gray};

    &:hover {
        background-color: ${palette.lightgray};
        cursor: pointer;
    }

    .favorite-count {
        font-size: 0.7rem;
    }
`;

const FrntInfo = styled.div`
    display: flex;
    align-items: center;
`;

const FrntInfoTitle = styled.div`
    width: 5rem;
    color: ${palette.hoverYellow};
`


const StyledPlaceIcon = styled(PlaceIcon)`
    color: ${palette.hoverYellow};
    margin-bottom: 1px;
`;


const StyledBookmarkBorderIcon = styled(BookmarkBorderIcon)`
    color: ${palette.hoverYellow};
    margin-bottom: -8px;
`;

const StyledBookmarkIcon = styled(BookmarkIcon)`
    color: ${palette.hoverYellow};
    margin-bottom: -8px;
`;


const FurnitureBriefInfo = ({ frntInfo }) => {
    // const [rstrInfo, setRstrInfo] = useState(rstrInfo);
    const [isFavoriate, setIsFavoriate] = useState(true);

    // useEffect(() => {
    //     setRstrInfo(rstrInfo);
    // }, [])

    const toggleFavorite = () => {
        setIsFavoriate(!isFavoriate);
    }

    return (
        <FrntBriefInfoContainer>
            <FrntName>{frntInfo.frnt_title}</FrntName>
            <FrntInfo>
                <FrntInfoTitle>판매자</FrntInfoTitle>
                <div>{frntInfo.frnt_seller}</div>
            </FrntInfo>
            <FrntInfo>
                <FrntInfoTitle>가격</FrntInfoTitle>
                <div>{frntInfo.frnt_price}</div>
            </FrntInfo>
            <FrntInfo>
                <FrntInfoTitle>주소</FrntInfoTitle>
                <div>
                    <div>{frntInfo.frnt_address}</div>
                    <div>{frntInfo.frnt_detail_Address}</div>
                </div>
            </FrntInfo>
            <FrntInfos style={{ justifyContent: 'flex-end' }}>
                <FavoriteButton className='centered-flex' onClick={toggleFavorite}>
                    <div>
                        {
                            isFavoriate ?
                                <StyledBookmarkIcon style={{ fontSize: '2.2rem' }} /> :
                                <StyledBookmarkBorderIcon style={{ fontSize: '2.2rem' }} />
                        }
                    </div>
                    <div className='favorite-count'>{10}</div>
                </FavoriteButton>
            </FrntInfos>
        </FrntBriefInfoContainer>
    )
}

export default FurnitureBriefInfo;