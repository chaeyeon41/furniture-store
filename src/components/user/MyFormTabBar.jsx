import { useReducer } from 'react';
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

const SET_TAB = 'SET_TAB' // 액션 타입 정의

const reducer = (state, action) => { // 리듀서 함수
    switch (action.type) {
        case SET_TAB:
            return {
                ...state,
                tabValue: action.index
            }
        default:
            return state;
    }
}

const MyFormTabBar = () => {

    const navigate = useNavigate();

    const [state, dispatch] = useReducer(reducer, { tabValue: 0 });

    const handleChange = (index, path) => {
        navigate(path);
        dispatch({ type: SET_TAB, index });
    }

    return (
        <TabsContainer>
            <TabsHeader>
                {
                    menuItemList.map((item, index) => (
                        <TabItem
                            key={index}
                            isActive={state.tabValue === index}
                            onClick={() => handleChange(index, item.path)}
                        >{item.title}</TabItem>
                    ))
                }
            </TabsHeader>
        </TabsContainer>
    )
}

export default MyFormTabBar;