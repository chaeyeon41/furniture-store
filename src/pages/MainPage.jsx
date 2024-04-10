import { useEffect, useState } from "react";
import Header from "../components/main/Header";
import axios from 'axios';

const MainPage = () => {
    const [message, setMessage] = useState();

    useEffect(() => {
        axios
            .get('http://localhost:8080/member')
            .then((response) => {
                console.log(response.data);
                setMessage(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="common-container">
            <Header />
            <div style={{ height: '1000px' }}>
                <h1>{message}</h1>
            </div>
        </div>
    )
}

export default MainPage;