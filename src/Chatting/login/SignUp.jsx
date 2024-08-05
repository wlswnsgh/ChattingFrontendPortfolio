// 회원가입 페이지
import React, { useState } from 'react';
import styled from 'styled-components';

import { CiUser, CiLock, CiMail, CiCalendar } from "react-icons/ci";
import { MdOutlinePersonPinCircle } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

/*   
    닉네임
    
    아이디
    비밀번호
    이메일: 이메일로 토큰을 받아와서 임시비밀번호 설정
    
    이름
    생년월일
    나라선택 예시 +82한국
    휴대폰 회사 SKT,KT,LGU+, 알뜰폰 <= 고려
    전화번호
*/

const SignUpForm = styled.form`
    position: absolute;
    padding: 10px;
    max-width: 600px;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

h2{
     font-size: 35px;
     font-weight: bold;
     color: #50B498;
     cursor: pointer;
     transform: translateX(2.5rem);
   }
`; 

const InputForm = styled.form`
    margin-top: 10%;

.DivNickname{
    border-radius: 8px 8px 0 0;
}

.DivEmail{
    border-radius: 0 0 8px 8px;
}

.name{
    border-radius: 8px 8px 0 0;
}

.phone{
    border-radius: 0 0 8px 8px;
}
`;


const InputDivStyle = styled.div`
    width: 500px;
    height: 40px;
    font-size: 18px;
    border: 1px solid #c5ccd2;
    transform: translateX(2.5rem);

.material-symbols-outlined{
    font-size: 37px;
    font-weight: 100;
    color: #c5ccd2;
}

.gender{
    height: 40px;
    display: flex;
    justify-content: center;
    justify-content: space-around;
    align-items: center;

}

.man{
    border-radius: 5px;
    width: 235px;
    text-align: center;
    border: 1px solid #c5ccd2;
    color: #c6c6c6;
    cursor: pointer;
}

.girls{
    border-radius: 5px;
    width: 235px;
    text-align: center;
    border: 1px solid #c5ccd2;
    color: #c6c6c6;
    cursor: pointer;
}

.man.clicked, .girls.clicked {
    border-color: #50B498;
    color: black;
}

${(props) => props.click && `
    border: 2px solid #50B498;
`}
`;

const InputStyle = styled.input`
    width: 458px;
    height: 38px;
    transform: translateY(-14px);
    border: none;
    border-radius: 5px;
    background: transparent;

    &::placeholder{
      font-size: 16px;
    }

    &:focus {
        outline: none; // 기본적으로 나타나는 테두리 제거
        background: transparent; // 배경을 투명으로 설정
    }
`;

const AuthenticationRequest = styled.button`
    width: 500px;
    height: 40px;
    line-height: 40px;
    background-color: #50B498;
    border: none;
    border-radius: 5px;
    transform: translate(2.5rem, 20vh);
`;

function SignUp() {
    const navigate = useNavigate();

    const [nicknameClick, setNicknameClick] = useState(''); // 닉네임
    const [idClicked, setIdClicked] = useState(''); // 아이디
    const [passwordClick, setPasswordClick] = useState(''); // 비밀번호
    const [emailClick, setEmailClick] = useState(''); // 이메일
    const [nameClick, setNameClick] = useState(''); // 이름
    const [ymdClick, setymdClick] = useState(''); // 생년월일
    const [phoneClick, setPhoneClick] = useState(''); // 전화번호
    const [manClick, setManClick] = useState(''); // 성별 선택(남)
    const [girlsClick, setgirlsClick] = useState(''); // 성별 선택(여)
    const [phone, setPhone] = useState(''); // 전화번호(하이픈) 추가

    const NicknameClick = () => {
        setNicknameClick(true); // 닉네임
        setIdClicked(false); // 아이디
        setPasswordClick(false); // 비밀번호
        setEmailClick(false); // 이메일
        setNameClick(false); // 이름
        setymdClick(false); // 생년월일
        setPhoneClick(false); // 전화번호
    };

    const IdClick = () => {
        setNicknameClick(false); // 닉네임
        setIdClicked(true); // 아이디
        setPasswordClick(false); // 비밀번호
        setEmailClick(false); // 이메일
        setNameClick(false); // 이름
        setymdClick(false); // 생년월일
        setPhoneClick(false); // 전화번호
    };

    const PasswordClick = () => {
        setNicknameClick(false); // 닉네임
        setIdClicked(false); // 아이디
        setPasswordClick(true); // 비밀번호
        setEmailClick(false); // 이메일
        setNameClick(false); // 이름
        setymdClick(false); // 생년월일
        setPhoneClick(false); // 전화번호
    };

    const EmailClick = () => {
        setNicknameClick(false); // 닉네임
        setIdClicked(false); // 아이디
        setPasswordClick(false); // 비밀번호
        setEmailClick(true); // 이메일
        setNameClick(false); // 이름
        setymdClick(false); // 생년월일
        setPhoneClick(false); // 전화번호
    };

    const NameClick = () => {
        setNicknameClick(false); // 닉네임
        setIdClicked(false); // 아이디
        setPasswordClick(false); // 비밀번호
        setEmailClick(false); // 이메일
        setNameClick(true); // 이름
        setymdClick(false); // 생년월일
        setPhoneClick(false); // 전화번호
    };

    const YmdClick = () => {
        setNicknameClick(false); // 닉네임
        setIdClicked(false); // 아이디
        setPasswordClick(false); // 비밀번호
        setEmailClick(false); // 이메일
        setNameClick(false); // 이름
        setymdClick(true); // 생년월일
        setPhoneClick(false); // 전화번호
    };

    const PhoneClick = () => {
        setNicknameClick(false); // 닉네임
        setIdClicked(false); // 아이디
        setPasswordClick(false); // 비밀번호
        setEmailClick(false); // 이메일
        setNameClick(false); // 이름
        setymdClick(false); // 생년월일
        setPhoneClick(true); // 전화번호
    };

    const GenderClick = (gender) => {
        if (gender === 'man') {
            setManClick(true); // 성별 (남)
            setgirlsClick(false); // 성별 (여)
        } else if(gender === 'girls'){
            setManClick(false); // 성별 (여)
            setgirlsClick(true); // 성별 (남)
        }
    };

    const Phonenumber = (e) => {
            // 정규표현식
            // / ... /: 정규표현식의 시작과 끝을 의미한다.
            // [ ... ]: 문자 클래스를 의미하며 패턴 안에서 일치시키고자 하는 문자 집합을 지정
            // ^: 문자 클래스 안에 부정을 의미한다.
            // \d: 숫자를 나타내는 특수한 문자메타이다. 0-9까지 모든 숫자와 일치
            // g 플래그: 전역검색을 수행하라는 의미이다. 문자열 안에서 패턴과 일치하는 모든 부분을 찾는다.
            // /[^\d]/g: 문자열에서 숫자가 아닌 모든 문자를 찾아낸다.

            // 입력 값에서 숫자만 남기고 나머지 문자 제거
            let input = e.target.value.replace(/[^\d]/g, '');

            // 전화번호에 하이픈 삽입
            // 1. input.length > 3 && input.length <= 7 input이 3보다 크고 7이하일때
            // 2. input = `${input.slice(0, 3)}-${input.slice(3)}` 예)"01012345678" 010-1234 생성
            // 3. else if (input.length > 7) input이 7보다 클 때
            // 4. input = `${input.slice(0, 3)}-${input.slice(3, 7)}-${input.slice(7)}` "01012345678" 010-1234-5678 생성
            if (input.length > 3 && input.length <= 7) {
                input = `${input.slice(0, 3)}-${input.slice(3)}`;
            } else if (input.length > 7) {
                input = `${input.slice(0, 3)}-${input.slice(3, 7)}-${input.slice(7)}`;
            }
    
            // State 업데이트
            setPhone(input);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('닉네임:', nicknameClick);

        if (nicknameClick.trim() === '') {
            alert('닉네임을 입력하세요');
        }

    };

    return (
        <SignUpForm onSubmit={handleSubmit}>
            <h2 onClick={() => navigate('/')}>Chatting</h2>

            <InputForm>
                <InputDivStyle className='DivNickname' click={nicknameClick} >
                    {/* 닉네임 */}
                    <MdOutlinePersonPinCircle size={38} color='#c5ccd2'/>
                    <InputStyle 
                        type="text" 
                        placeholder='닉네임' 
                        onChange={(e) => setNicknameClick(e.target.value)}
                        onClick={() => NicknameClick()}/>
                </InputDivStyle>

                <InputDivStyle click={idClicked}> 
                    {/* 아이디 */}
                    <CiUser size={38} color='#c5ccd2'/>
                    <InputStyle 
                        type="text" 
                        placeholder='아이디' 
                        onClick={() => IdClick()}/>
                </InputDivStyle>

                <InputDivStyle click={passwordClick}>
                    {/* 비밀번호 */}
                    <CiLock size={38} color='#c5ccd2'/>
                    <InputStyle 
                    type="password" 
                    placeholder='비밀번호' 
                    onClick={() => PasswordClick()} />
                </InputDivStyle>

                <InputDivStyle className='DivEmail' click={emailClick}>
                    {/* 이메일 */}
                    <CiMail size={38} color='#c5ccd2'/>
                    <InputStyle 
                        type="email" 
                        placeholder='이메일주소 (비밀번호 찾기 등 본인 확인용)' 
                        onClick={() => EmailClick()}
                    />
                </InputDivStyle>
            </InputForm>
            
            <InputForm>
                <InputDivStyle className='name' click={nameClick} >
                    {/* 이름 */}
                    <CiUser size={38} color='#c5ccd2'/>
                    <InputStyle 
                        type="text" 
                        placeholder='이름' 
                        onClick={() => NameClick()}/>
                </InputDivStyle>

                <InputDivStyle click={ymdClick}>
                    {/* 생년월일 */}
                    <CiCalendar size={38} color='#c5ccd2'/>
                    <InputStyle 
                        type="text" 
                        placeholder='생년월일 8자리' 
                        onClick={() => YmdClick()}/>
                </InputDivStyle>

                <InputDivStyle>
                    {/* 성별선택 */}
                    {/* 동작기능 설명
                        1. GenderClick('man')클릭 시 
                        2. setgirlsClick(false)가 되고 setManClick(true)동작되며 
                        3. classname을 man으로 지정한 후 삼항연산자를 준 manClick이 동작되며 
                            manClick.clicked클래스로 바뀐 후 색깔이 바뀐다. */}
                    <form className='gender'>
                        <span 
                            className={`man ${manClick ? 'clicked' : ''}`} 
                            onClick={() => GenderClick('man')}
                        >남자</span>
                     {/* 동작기능 설명
                        1. GenderClick('girls')클릭 시 
                        2. setManClick(false)가 되고 setgirlsClick(true)동작되며
                        3. classname을 girls으로 지정한 후 삼항연산자를 준 girlsClick이 동작되며
                           girlsClick.clicked클래스로 바뀐 후 색깔이 바뀐다. */}
                        <span 
                            className={`girls ${girlsClick ? 'clicked' : ''}`} 
                            onClick={() => GenderClick('girls')}
                        >여자</span>
                    </form>
                </InputDivStyle>

                {/* <InputDivStyle> */}
                    {/* 나라선택 예시 +82한국 */}
                    {/* <span class="material-symbols-outlined">language</span> */}
                {/* </InputDivStyle> */}

                <InputDivStyle className='phone' click={phoneClick}>
                    {/* 전화번호 */}
                    <IoPhonePortraitOutline size={38} color='#c5ccd2'/>
                    <InputStyle 
                        type="tel"
                        maxLength={13} 
                        placeholder='휴대전화번호'
                        value={phone}
                        onChange={Phonenumber}
                        onClick={() => PhoneClick()}/>
                </InputDivStyle>
            </InputForm> 

            <AuthenticationRequest type='submit'>
                인증 요청
            </AuthenticationRequest>           
        </SignUpForm>
    );
}

export default SignUp;