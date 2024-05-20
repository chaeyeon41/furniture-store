import MyPageLayout from "../../components/user/MyPageLayout";
import SettingPage from "./SettingPage";

const MySettingPage = () => {
    return (
        <div className="common-container">
            <MyPageLayout>
                <SettingPage />
            </MyPageLayout>
        </div>
    )
}

export default MySettingPage;
