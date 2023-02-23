import './App.css';
import {useCallback, useEffect, useState} from "react";
import {Routes, Route, Link, useNavigate, Outlet, Router, BrowserRouter} from 'react-router-dom'
import Board from './component/Board.js'
import Post from './component/Post.js'
import Main from './component/Main.js'
import Write from './component/Write.js'
import SignUp from "./SignUp";
import Login from "./component/Login";
import Test from "./component/Test";


function App() {

    const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
    const [refreshToken, setRefreshToken] = useState(localStorage.getItem("refreshToken"));
    const [accessTokenExpiresIn, setAccessTokenExpiresIn] = useState(localStorage.getItem("accessTokenExpiresIn"));


    useEffect(() => {
        const updateTokens = () => {
            setAccessToken(localStorage.getItem('accessToken'));
            setRefreshToken(localStorage.getItem('refreshToken'));
            setAccessTokenExpiresIn(localStorage.getItem("accessTokenExpiresIn"));
        }

        window.addEventListener('storage', updateTokens);

        console.log('1 accessToken='+accessToken);
        console.log('1 refreshToken='+refreshToken);
        console.log('1 accessTokenExpiresIn='+accessTokenExpiresIn);

        return () => {
            window.removeEventListener('storage', updateTokens);
        };
    }, [accessToken, refreshToken, accessTokenExpiresIn]);




    // useEffect(() => {
    //     console.log('login check')
    //
    //
    //     //  JSON 형식으로 변환하여 Request Header 에 토큰정보를 담아 보냄
    //         axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
    //         axios.post('http://localhost:8080/auth/reissue',
    //            {
    //                  accessToken: accessToken,
    //                  refreshToken: refreshToken
    //
    //             })
    //             .then(res => {
    //             })
    //             .catch(error => {
    //                 console.log(error.response.data.message)
    //             })
    //
    // },[accessToken,refreshToken])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main></Main>}></Route>
                <Route path="/board/:pages" element={<Board></Board>}></Route>
                <Route path="/board/:pages/:pno" element={<Post></Post>}></Route>
                <Route path="/board" element={<Write></Write>}></Route>
                <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
                <Route path="/test" element={<Test></Test>}></Route>
                <Route path="/login" element={<Login accessToken={accessToken} refreshToken={refreshToken} setAccessToken={setAccessToken} setRefreshToken={setRefreshToken}></Login>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
