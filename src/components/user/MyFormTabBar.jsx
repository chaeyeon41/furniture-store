import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import "../../style/palette";
import palette from '../../style/palette';

const menuItemList = [
    {
        title: '내 정보',
        path: '/mypage'
    },
    {
        title: '구매이력',
        path: '/history/purchase'
    },
    {
        title: '판매이력',
        path: '/history/sales'
    },
    {
        title: '찜',
        path: '/favorite'
    }
];

const TabsContainer = styled.div`
    margin-top: 3rem;
    width: 100%;
`;

const TabsHeader = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 0.2rem solid ${palette.mainYellow};
`;

const TabItem = styled.div`
    font-size: 1.1rem;
    cursor: pointer;
    padding: 0.7rem;
    color: ${(props) => (!props.isActive ? `black` : `${palette.hoverYellow}`)};

    &:hover {
        color: ${palette.hoverYellow};
    }
    `

const MyFormTabBar = () => {

    const navigate = useNavigate();
    const [tabValue, setTabValue] = useState(0);

    const handleChange = (index, path) => {
        setTabValue(index);
        navigate(path);
    }

    return (
        <TabsContainer>
            <TabsHeader>
                {
                    menuItemList.map((item, index) => (
                        <TabItem
                            key={index}
                            isActive={tabValue === index}
                            onClick={() => handleChange(index, item.path)}
                        >{item.title}</TabItem>
                    ))
                }
            </TabsHeader>
        </TabsContainer>
    )
}

export default MyFormTabBar;