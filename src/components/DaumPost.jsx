import React from "react";
import DaumPostCode from "react-daum-postcode";

const DaumPost = (props) => {

    const complete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        props.setAddress(fullAddress);
        props.setIsModalVisible(false);
    }

    return (
        <div>
            <DaumPostCode
                className="postmodal"
                autoClose
                onComplete={complete}
            />
        </div>
    )
}

export default DaumPost;