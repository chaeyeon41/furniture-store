import MyPageLayout from "../../components/user/MyPageLayout";
import MyInfoPage from "./MyInfoPage";

const MyPage = () => {
    return (
        <div className="common-container">
            <MyPageLayout>
                <MyInfoPage />
            </MyPageLayout>
        </div>
    )
}

export default MyPage;