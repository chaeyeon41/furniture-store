import React from "react";
import styled from "styled-components";
import MyPageLayout from "../../components/user/MyPageLayout";
import SalesCard from "../../components/historys/sales/SalesCard";

const HistoryContainer = styled.div`
    width: 50%;
`;

const SalesHistoryPage = () => {
    return (
        <div className="common-container">
            <MyPageLayout style={{ margin: '0 auto' }}>
                <HistoryContainer style={{ margin: '20px auto' }}>
                    <SalesCard />
                </HistoryContainer>
            </MyPageLayout>
        </div>
    )
}

export default SalesHistoryPage;