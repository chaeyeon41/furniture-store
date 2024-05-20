import { createSlice } from '@reduxjs/toolkit';

const loginData = createSlice({
    name: 'loginData',
    initialState: {
        user: {}, // 사용자 정보를 저장할 객체
    },
    reducers: {
        // 로그인 데이터 설정
        setLoginData: (state, action) => {
            state.user = action.payload; // 전체 사용자 데이터를 저장
        },

    },
});

export const { setLoginData } = loginData.actions;
export default loginData;