import React from "react";
import styled from "styled-components";
import MyPageLayout from "../../components/user/MyPageLayout";
import PurchaseCard from "../../components/historys/purchase/PurchaseCard";
import { frntList } from "../../store/Furniture";
const HistoryContainer = styled.div`
    width: 50%;
`;

const PurchaseHistoryPage = () => {
    return (
        <div className="common-container">
            <MyPageLayout>
                <HistoryContainer style={{ margin: '20px auto' }}>
                    <PurchaseCard />
                </HistoryContainer>
            </MyPageLayout>
        </div>
    )
}

export default PurchaseHistoryPage;