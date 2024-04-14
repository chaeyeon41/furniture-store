import FurnitureDetail from "../../components/furniture/FurnitureDetail";
import { useLocation } from 'react-router-dom';
import palette from "../../style/palette.js"

const FurnitureDetailPage = () => {

    const location = useLocation();
    const { frntItem } = location.state;

    return (
        <div className="common-container">
            <FurnitureDetail frntItem={frntItem} />
            <div style={{
                borderTop: '1px solid black',
                borderColor: `${palette.hoverYellow}`,
                padding: '20px',
                lineHeight: '2rem',
            }}>
                {frntItem.frnt_info}
            </div>
        </div>
    )
}

export default FurnitureDetailPage;