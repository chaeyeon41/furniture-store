import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import './App.css';
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/user/LoginPage";
import SignUpPage from "./pages/user/SignUpPage";

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Gmarket Sans Medium' }}>
      <Helmet>
        <title>가구사구</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
