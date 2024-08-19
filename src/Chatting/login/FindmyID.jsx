import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.form`
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

const Id_form = styled.form`
    position: absolute;
    width: 30rem;
    height: 55vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4%;
    border: 1.7px solid #e1e3e5; // 1px solid #e1e3e5

.id_pw { 
    display: flex;
    justify-content: center;
    text-align: center;
} 

.id {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f6f7;
    border-radius: 15px 0 0 0; // 15px 5px 5px 5px
    width: 50%;
    height: 50px;
}

.pw {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f6f7;
    border-radius: 0 15px 0 0; // 5px 15px 5px 5px
    width: 50%;
    height: 50px;
}

.MemberInformationPhone {
    padding-top: 2%;
}

.MemberInformationEmail {
    padding-top: 1%;
}

.radio_1 {
    width: 10px;
    transform: translateY(3.7px);
}

.MemberInformationPhone_1 {
    font-size: 10px;
    font-weight: bold;
}

.radio_2 {
    width: 10px;
    transform: translateY(3.7px);
}

.MemberInformationPhone_2 {
    font-size: 10px;
    font-weight: bold;
}
`;

function FindmyID() {
    const navigate = useNavigate();
    
    return (
        <Container>
            <p 
            className='chat'
            onClick={() => navigate('/')}>Chatting</p>
            <Id_form>
                <form className='id_pw'>
                    <div className='id'>아이디 찾기</div>
                    <div className='pw'>비밀번호 찾기</div>
                </form>
                <form className='MemberInformationPhone'>
                    <input type='radio'className='radio_1' />
                    <label className='MemberInformationPhone_1'>회원정보에 등록한 휴대전화로 인증</label>
                    <form>
                        <label className='name'>이름</label>
                        <input type='text' className='input_name'/>
                        <br/>
                        <label className='phone'>휴대전화</label>
                        <input type='text' className='input_phone'/>
                        <button className='verification_number'>인증번호</button>
                        <br />
                        <input type="text" placeholder='인증번호 입력'/>
                    </form>
                </form>
                <form className='MemberInformationEmail'>
                    <input type='radio' className='radio_2'/>
                    <label className='MemberInformationPhone_2'>본인확인 이메일로 인증</label>
                </form>
            </Id_form>
        </Container>
    );
}

export default FindmyID;