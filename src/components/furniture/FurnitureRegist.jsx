import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import palette from "../../style/palette";
import "../../style/authForm.css";
import axios from "axios";

const FurnitureRegistContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 3rem 1rem;
    display: flex;
`

const ImageInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 0.9rem;
    width: 30%;
    height: 18rem;
`

const ImageInput = styled.input`
  display: none; // input은 보이지 않도록 설정
`;

const Label = styled.label`
  display: inline-block;
  width: 100%;
  height: 100%;
  background: url('src/assets/icon-add-photo.svg') no-repeat;
  background-position: center;
  border: 2px solid ${palette.hoverYellow};
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
  }
`;

const InputContainer = styled.div`
    width: 30%;
    margin-left: 1rem;
    font-size: 0.9rem;
`

const Inputs = styled.div`
    margin: 1rem 0;
`;

const Input = styled.input`
    margin: 0.2rem 0;
    width: 100%;
    height: 1.4rem;
`

const Textarea = styled.textarea`
    margin: 0.2rem 0;
    width: 100%;
    height: 4.2rem;
`

const FurnitureRegist = () => {
    const navigate = useNavigate();

    const [postImg, setPostImg] = useState([]); // 이미지 파일 자체의 파일
    const [previewImg, setPreviewImg] = useState([]); // 이미지 파일의 url을 담는 상태

    const [product, setProduct] = useState();
    const [info, setInfo] = useState();
    const [price, setPrice] = useState();
    const [address, setAddress] = useState();

    const handleFileUpLoad = (e) => {
        let fileArr = e.target.files; // input에 업로드한 파일들을 fileArr 변수에 담는다.
        if (fileArr.length === 0) {
            alert("사진이 선택되지 않았습니다.");
            return; // 함수를 여기서 종료합니다.
        }
        setPostImg(Array.from(fileArr)); // 업로드한 files를 배열로 만들고, state를 업데이트한다.

        let fileRead = new FileReader();
        fileRead.onload = () => {
            setPreviewImg(fileRead.result);
        };
        fileRead.readAsDataURL(fileArr[0]);
    }

    const onClickRegist = async () => {
        try {
            const response = await axios.post("http://localhost:8080/member", {
                product: product,
                info: info,
                price: price,
                address: address,

            });
            console.log(response.data);
            navigate('/furniture');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <FurnitureRegistContainer>
            <ImageInputContainer>
                <div>상품 이미지 추가</div>
                <Label htmlFor="fileUpload"> {/* htmlFor과 input id를 매치시켜 클릭 이벤트 연동 */}
                    <ImageInput
                        id="fileUpload" // Label과 연동하기 위한 id 설정
                        accept=".png, .jpeg, .jpg"
                        type="file"
                        onChange={handleFileUpLoad}
                    />
                    <div style={{ marginTop: '1rem' }}>이곳을 클릭하여 이미지를 추가해보세요!</div>
                    <img src={previewImg} alt={previewImg} />

                </Label>
            </ImageInputContainer>
            <InputContainer>
                <Inputs>
                    <div>상품명</div>
                    <Input
                        type="text"
                        value={product}
                        required
                        onChange={(e) => setProduct(e.target.value)}
                    />
                </Inputs>
                <Inputs>
                    <div>정보</div>
                    <Textarea

                    />
                </Inputs>
                <Inputs>
                    <div>가격</div>
                    <Input
                        type="number"
                        value={price}
                        required
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </Inputs>
                <Inputs>
                    <div>거래주소</div>
                    <Input
                        type="text"
                        value={address}
                        required
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Inputs>
                <div
                    className="auth-button"
                    onClick={onClickRegist}
                >
                    등록
                </div>
            </InputContainer>
        </FurnitureRegistContainer>
    )
}

export default FurnitureRegist;