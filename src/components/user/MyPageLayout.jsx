import MyFormTabBar from "./MyFormTabBar";

const MyPageLayout = ({ children }) => (
    <>
        <MyFormTabBar />
        <main>{children}</main>
    </>
);

export default MyPageLayout;