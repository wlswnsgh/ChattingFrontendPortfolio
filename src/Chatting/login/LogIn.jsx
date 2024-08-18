// 로그인 페이지
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Signup = styled.form`
    position: absolute; // 가장 가까운 부모 요소를 기준
    max-width: 390px; 
    width: 100%;
    padding: 10px;
    top: 50%; // 높이의 절반
    left: 50%; // 넓이의 절반
    transform: translate(-50%,-50%); // 해당 요소의 높이, 넓이의 절반만큼 돌아가기

.chat {
        font-size: 50px;
        text-align: center;
        font-weight: bold;
        color: #50B498;
        cursor: pointer;
      }

.id {   
        width: 350px;
        height: 50px;
        border: 1px solid #c5ccd2;
        border-radius: 8px 8px 0 0;
        transform: translate(1.8rem);
    }  

.pwd {
        width: 350px;
        height: 50px;
        border: 1px solid #c5ccd2;
        border-radius: 0 0 8px 8px;
        transform: translate(1.8rem);
     }

.btn {
        cursor: pointer;
        width: 355px;
        height: 40px;
        margin-top: 10px;
        border: 1px solid #c5ccd2;
        border-radius: 8px;
        background-color: #73BBA3;
        transform: translate(1.8rem);
     }
`;

const UlStyle = styled.ul`
    list-style-type: none;
    text-align: center;
    
li {    
        cursor: pointer;
        padding-right: 12px;
        display: inline;
        color: #888;
   }

li::before {
    content: '|';
    width: 1px;
    height: 12px;
    margin: 0 10px 0 0;
    background-color: #e5e5e5;
}

li:first-child:before {
    display: none;
}
`;



function LogIn() {
    const navigate = useNavigate();

    const handleRefresh = () => {
        navigate(0); // 0을 넣으면 URL를 새로고침을 할 수 있다.
        // window.location.reload(); // 페이지 자체를 새로고침 한다.
    }

    return (
        <Signup>
            <p className='chat' onClick={() => handleRefresh()}>Chatting</p>
            <input type='text' className='id' placeholder='아이디' />
            <input type='password' className='pwd' placeholder='비밀번호'/>
            <button className='btn'>로그인</button>
            <UlStyle>
                <li onClick={() => navigate('SignUp')}>회원가입</li>
                <li>아이디 찾기</li>
                <li>비밀번호 찾기</li>
            </UlStyle>
        </Signup>
    );
}

export default LogIn;