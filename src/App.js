import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import './App.css';
import './style/authForm.css';
import MainPage from "./pages/main/MainPage";
import LoginPage from "./pages/user/LoginPage";
import SignUpPage from "./pages/user/SignUpPage";
import MyPage from "./pages/user/MyPage";
import PurchaseHistoryPage from "./pages/historys/PurchaseHistoryPage";
import SalesHistoryPage from "./pages/historys/SalesHistoryPage";
import Header from "./components/main/Header";
function App() {
  return (
    <div className="App" style={{ fontFamily: 'Gmarket Sans Medium' }}>
      <Helmet>
        <title>가구사구</title>
      </Helmet>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/history/purchase" element={<PurchaseHistoryPage />} />
        <Route path="/history/sales" element={<SalesHistoryPage />} />
      </Routes>
    </div>
  );
}

export default App;