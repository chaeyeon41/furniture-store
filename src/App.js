import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./App.css";
import "./style/authForm.css";
import MainPage from "./pages/main/MainPage";
import LoginPage from "./pages/user/LoginPage";
import SignUpPage from "./pages/user/SignUpPage";
import MyPage from "./pages/user/MyPage";
import PurchaseHistoryPage from "./pages/historys/PurchaseHistoryPage";
import SalesHistoryPage from "./pages/historys/SalesHistoryPage";
import FurnitureRegistPage from "./pages/furniture/FurnitureRegistPage";
import FurnitureListPage from "./pages/furniture/FurnitureListPage";
import FurnitureDetailPage from "./pages/furniture/FurnitureDetailPage";

import Header from "./components/main/Header";
import MySettingPage from "./pages/user/MySettingPage";

function App() {
  return (
    <div className="App" style={{ fontFamily: "Gmarket Sans Medium" }}>
      <Helmet>
        <title>가구사구</title>
      </Helmet>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/setting" element={<MySettingPage />} />
        // 구매이력 조회 페이지
        <Route path="/history/purchase" element={<PurchaseHistoryPage />} />
        // 판매이력 조회 페이지
        <Route path="/history/sales" element={<SalesHistoryPage />} />
        // 가구 목록 페이지
        <Route path="/furniture" element={<FurnitureListPage />} />
        // 가구 상세 페이지
        <Route path={`/furniture/:frnt_id`} element={<FurnitureDetailPage />} />
        // 가구 등록 페이지
        <Route path="/furniture/regist" element={<FurnitureRegistPage />} />
      </Routes>
    </div>
  );
}

export default App;
