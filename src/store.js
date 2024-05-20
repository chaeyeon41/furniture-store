import { configureStore } from '@reduxjs/toolkit'
import loginData from './pages/user/loginDataSlice';

export default configureStore({
    reducer: {
        loginData: loginData.reducer,
    },
});