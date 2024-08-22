// https://simplecaptcha.sourceforge.net/ 자동방지입력 사이트
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    width: 35rem;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;

.chat {
    display: inline-block;
    font-size: 35px;
    font-weight: bold;
    color: #50B498;
    cursor: pointer;
    margin-left: 25px;
    transform: translateX(0.6rem);
}
`;

const Password_form = styled.form`
    position: absolute;
    width: 30rem;
    height: 60vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 4%;
    border: 1.7px solid #e1e3e5; // 1px solid #e1e3e5

.chat_id {
    transform: translate(17%, 35%);
    font-weight: bold;
}

.automatic {
    transform: translate(17%, 2.5vh);
    font-weight: bold;
}

.automaticImg {
    transform: translate(17%, 0.8vh);
    font-size: 13px;
    color: darkgrey;
}
`;

const Form_div = styled.div`
    padding: 8% 0 0 0;
`;

const Pw_input = styled.input`
    width: 20rem;
    height: 30px;
    transform: translateX(25%);
    border: 1px solid #e1e3e5;
`;

const ButtonStyle = styled.button`
    width: 70px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: #50B498;
    transform: translate(13.6rem, 18vh);
`;

function Password() {
    const navigate = useNavigate();

    const [pawd_1, setPawd_1] = useState('');
    const [pawd_2, setPawd_2] = useState('');
    const [submitpwd, setSubmitpwd] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/')
    };

    return (
        <Container>
            <p 
            className='chat'
            onClick={() => navigate('/')}
            >Chatting</p>

            <Password_form onSubmit={handleSubmit}>
                <Form_div>
                    <p className='chat_id'>아이디 : jjh123</p>
                    <Pw_input type='password' placeholder='새 비밀번호' value={pawd_1} onChange={(e) => setPawd_1(e.target.value)}/>
                    <Pw_input type='password' style={{marginTop: '8px'}} placeholder='새 비밀번호 확인' value={pawd_2} onChange={(e) => setPawd_2(e.target.value)}/>

                    <p className='automatic'>자동입력 방지</p>
                    <p className='automaticImg'>아래에 보이는 이미지 대로 입력하세요.</p>
                    {/* 백엔드로 이미지 받아오기 */}
                    <Pw_input type='text' value={submitpwd} onChange={(e) => setSubmitpwd(e.target.value)} />
                </Form_div>

                <ButtonStyle type='submit'>확인</ButtonStyle>
            </Password_form>
        </Container>
    );
}

export default Password;