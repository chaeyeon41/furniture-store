import "../../style/authForm.css";
import Header from "../../components/main/Header";
import LoginForm from "../../components/user/LoginForm";

const LoginPage = () => {
    return (
        <div className="common-container">
            <Header />
            <LoginForm />
        </div>
    )
}

export default LoginPage;