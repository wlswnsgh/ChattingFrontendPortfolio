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
    background-color: #f5f6f7; // 이 부분
    border-radius: 15px 0 0 0; // 15px 5px 5px 5px
    width: 50%;
    height: 50px;
    font-weight: bold;
}

.pw {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f6f7;
    border-radius: 0 15px 0 0; // 5px 15px 5px 5px
    width: 50%;
    height: 50px;
    font-weight: bold;
}

.MemberInformationPhone {
    padding-top: 2%;
}

.radio_1 {
    width: 10px;
    transform: translateY(3.7px);
}

.MemberInformationPhone_1 {
    font-size: 10px;
    font-weight: bold;
}

.name_phone_verificationnumber {
    padding: 15px 0 0 5px;
}

.name {
    font-size: 12px;
    font-weight: bold;
}

.input_name {
    transform: translateX(3rem);
}

.phone {
    font-size: 12px;
    font-weight: bold;
}

.input_phone {
    transform: translateX(1.5rem);
}

.verification_number{
    width: 75px;
    height: 3.5vh;
    transform: translateX(1.8rem);
}

.verification {
    transform: translateX(4.5rem);
}

.MemberInformationEmail {
    padding-top: 1%;
}

.radio_2 {
    width: 10px;
    transform: translateY(3.7px);
}

.MemberInformationPhone_2 {
    font-size: 10px;
    font-weight: bold;
}

.name_phone_verificationnumber2 {
    padding: 15px 0 0 5px;
}

.name2 {
    font-size: 12px;
    font-weight: bold;
}

.email {
    font-size: 12px;
    font-weight: bold;
}

.input_name2 {
    transform: translateX(3rem);
}

.input_email {
    transform: translateX(2.2rem);
}

.verification_number2 {
    width: 75px;
    height: 3.5vh;
    transform: translateX(2.6rem);
}

.verification2 {
    transform: translateX(4.5rem);
}
`;

const ButtonStyle = styled.button`
    width: 70px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: #50B498;
    transform: translate(13.6rem, 21vh);
`;

function FindmyID() {
    const navigate = useNavigate();

    const [memberInformationphone, setMemberInformationPhone] = useState(true); // 휴대전화 인증
    const [memberInformationemail, setMemberInformationEmail] = useState(false); // 이메일 인증
    const [authenticationcode_1, setAuthenticationcode_1] = useState(false); //인증번호
    const [authenticationcode_2, setAuthenticationcode_2] = useState(false); //인증번호
    
    const [name_1, setName_1] = useState('');
    const [name_2, setName_2] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [verificationcode_1, setVerificationCode_1] = useState('');
    const [verificationcode_2, setVerificationCode_2] = useState('');

    const handleInformationphone = () => {
        setMemberInformationPhone(true);
        setMemberInformationEmail(false);
    };

    const handleInformationemail = () => {
        setMemberInformationPhone(false);
        setMemberInformationEmail(true);
    };

    const handleauthenticationcode_1 = () => {
        if (phone.trim() === '') {
            alert('휴대전화 번호를 입력하세요.');
        } else {
            setAuthenticationcode_1(true);
        }
    };

    const handleauthenticationcode_2 = () => {
        if (email.trim() === '') {
            alert('이메일을 입력해주세요');
        } else {
            setAuthenticationcode_2(true);
        }
    };                                                     

    const handleSubmit = (e) => {
        e.preventDefault();

        if (memberInformationphone && phone.trim() === '') {
            alert('휴대전화 번호를 입력하세요.');
        } else if (memberInformationphone && name_1.trim() === '') {
            alert('이름을 입력하세요.');
        } else if (memberInformationphone && authenticationcode_1 && verificationcode_1.trim() === '') {
            alert('인증번호를 입력해주세요');   
        } else if (memberInformationemail && email.trim() === '') {
            alert('이메일을 입력해주세요');
        } else if (memberInformationemail && name_2.trim() === '') {
            alert('이름을 입력하세요.');
        } else if (memberInformationemail && authenticationcode_2 && verificationcode_2.trim() === '') {
            alert('인증번호를 입력해주세요');
        } else {
            if (memberInformationphone) {
                console.log('휴대전화 인증으로 진행합니다.');
            } else if (memberInformationemail) {
                console.log('이메일 인증으로 진행합니다.');
            }
        }
    };

    return (
        <Container>
            <p 
                className='chat'
                onClick={() => navigate('/')}
            >Chatting</p>
            <Id_form onSubmit={handleSubmit}>
                <div className='id_pw'>
                    <div className='id'>아이디 찾기</div>
                    <div className='pw' onClick={() => navigate('/PASSWORD')}>비밀번호 찾기</div>
                </div>
                <div className='MemberInformationPhone'>
                    <input type='radio' className='radio_1' id='1' name="myRadio" onClick={() => handleInformationphone()} checked={memberInformationphone} />
                    <label className='MemberInformationPhone_1' for="1" onClick={() => handleInformationphone()}>회원정보에 등록한 휴대전화로 인증</label>
                    {memberInformationphone && <div className='name_phone_verificationnumber'>
                        <label className='name'>이름</label>
                        <input type='text' className='input_name' value={name_1} onChange={(e) => setName_1(e.target.value)} />
                        <br/>
                        <label className='phone'>휴대전화</label>
                        <input type='text' className='input_phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        <button type = 'button' className='verification_number' onClick={() => handleauthenticationcode_1()}>인증번호</button>
                        <br />
                        {authenticationcode_1 && <input type="text" placeholder='인증번호 입력' className='verification' value={verificationcode_1} onChange={(e) => setVerificationCode_1(e.target.value)}/>}
                    </div>}
                </div>
                <div className='MemberInformationEmail'>
                    <input type='radio' className='radio_2' id='2' name="myRadio" onClick={() => handleInformationemail()} checked={memberInformationemail}/>
                    <label className='MemberInformationPhone_2' for="2" onClick={() => handleInformationemail()}>본인확인 이메일로 인증</label>
                    {memberInformationemail && <div className='name_phone_verificationnumber2'>
                        <label className='name2'>이름</label>
                        <input type='text' className='input_name2' value={name_2} onChange={(e) => setName_2(e.target.value)}/>
                        <br/>
                        <label className='email'>이메일</label>
                        <input type='email' className='input_email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <button type = 'button' className='verification_number2' onClick={() => handleauthenticationcode_2()}>인증번호</button>
                        <br />
                        {authenticationcode_2 && <input type="text" placeholder='인증번호 입력' className='verification2' value={verificationcode_2} onChange={(e) => setVerificationCode_2(e.target.value)}/>}
                    </div>}
                </div>
                <ButtonStyle type='submit'>다음</ButtonStyle>
            </Id_form>    
        </Container>
    );
}

export default FindmyID;