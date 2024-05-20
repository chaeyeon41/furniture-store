import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FurnitureCard from "./FurnitureCard";
import palette from '../../style/palette';
import { frntList as initialFrntList } from '../../store/Furniture'

const FrntListContainer = styled.div`
    padding: 0 1rem;
    width: 60%;
    // border: 1px solid gray;
    display: flex;
    flex-direction: column;
    .total-rstr-num {
        font-size: 0.75rem;
        color: ${palette.darygray};
        margin: 1rem;
        text-align: right;
    }
`

const FrntCardList = styled.div`
    height: auth;
    min-height: 480px;
`

const FrntCards = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const PageButton = styled.button`
    margin: 0 5px;
    padding: 5px 10px;
    border: none;
    background-color: ${({ active }) => active ? '#333' : '#ccc'};
    color: ${({ active }) => active ? '#fff' : '#000'};
    cursor: pointer;
`;

const FurnitureListPage = () => {
    const [frntList, setfrntList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;
    const pageCount = Math.ceil(frntList.length / pageSize);
    const currentPageData = frntList.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    useEffect(() => {
        setfrntList(initialFrntList);
    }, []);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    return (
        <div className="common-container centered-flex">
            <FrntListContainer>
                <div className='total-rstr-num'>{`약 ${frntList.length}건`}</div>
                <FrntCardList>
                    <FrntCards>
                        {
                            currentPageData.map((item) => (
                                <FurnitureCard key={item.frnt_id} frntItem={item} />
                            ))
                        }
                    </FrntCards>
                </FrntCardList>
                <div>
                    <Pagination>
                        {[...Array(pageCount)].map((_, index) => (
                            <PageButton key={index} onClick={() => handlePageChange(index + 1)} active={currentPage === index + 1}>
                                {index + 1}
                            </PageButton>
                        ))}
                    </Pagination>
                </div>
            </FrntListContainer>
        </div>
    )
}

export default FurnitureListPage;