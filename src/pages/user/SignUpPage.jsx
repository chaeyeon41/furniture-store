import "../../style/authForm.css";
import Header from "../../components/main/Header";
import SignUpForm from "../../components/user/SignUpForm";

const SignUpPage = () => {
    return (
        <div className="common-container">
            <Header />
            <SignUpForm />
        </div>
    )
}

export default SignUpPage;