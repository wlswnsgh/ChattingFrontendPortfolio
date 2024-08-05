// 채팅 페이지
import React from 'react';
import styled from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";

const Header = styled.header`
    width: 100%;
    height: 80px;
    background-color: #50B498;
    display: flex;
    justify-content: space-between;

.chatting {
    display: flex;
    align-items: center;
    font-size: 30px;
    padding-left: 20px;
    font-weight: bold;
}

.userinfo{
    display: flex;
    align-items: center;
    font-size: 27px;
    padding-right: 20px;
}

.user{
    padding-left: 8px;
    font-size: 18px;
}

`;

const Chattingmap = styled.div`
    background-color: #DEF9C4;
    width: 100%;
    height: 78vh;
`;

const ChattingInput = styled.input`
    width: 100%;
    height: 9vh;
    background-color: #9CDBA6;
    font-size: 16px;
    border: none;
`;

function Main() {
    return (
        <>
            <Header>
                <p className='chatting'>Chatting</p>

                <div className='userinfo'>
                    <FaRegUserCircle />
                    <p className='user'>진준호님</p>
                </div>
            </Header>
            <Chattingmap>

            </Chattingmap>
            <ChattingInput />
        </>
    );
}

export default Main;