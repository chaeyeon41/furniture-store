import "../../style/authForm.css";
import Header from "../../components/main/Header";
import LoginForm from "../../components/user/LoginForm";

const LoginPage = () => {
    return (
        <div>
            <Header />
            <div className="common-container">
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginPage;