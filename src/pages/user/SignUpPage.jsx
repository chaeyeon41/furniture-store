import "../../style/authForm.css";
import Header from "../../components/main/Header";
import SignUpForm from "../../components/user/SignUpForm";

const SignUpPage = () => {
    return (
        <div>
            <Header />
            <div className="common-container">
                <SignUpForm />
            </div>
        </div>
    )
}

export default SignUpPage;