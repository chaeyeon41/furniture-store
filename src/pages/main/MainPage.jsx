import { useEffect, useState } from "react";
import Header from "../../components/main/Header";
import axios from 'axios';

const MainPage = () => {
    // const [message, setMessage] = useState();

    // useEffect(() => {
    //     axios
    //         .get('http://localhost:8080/member')
    //         .then((response) => {
    //             console.log(response.data);
    //             setMessage(response.data);
    //         })
    //         .catch((error) => console.log(error));
    // }, []);

    return (
        <div>
            <Header />
            <div className="common-container">

            </div>
        </div>
    )
}

export default MainPage;