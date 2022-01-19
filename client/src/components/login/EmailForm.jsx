import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ColorBtn } from '../../styles/common/buttons';

export const FormBox = styled.form`
  width: 50%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  box-sizing: border-box;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
  align-self: flex-start;
  padding: 0 0 0 15px;
`;

const Input = styled.input`
  all: unset;
  width: 90%;
  height: 12%;
  border: 1px solid rgba(12, 12, 12, .4);
  border-radius: 5px;
  padding-left: 10px;
  margin-bottom: -5px;
`;

const FindIdPwd = styled.span`
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  align-self: flex-end;
  padding-right: 20px;
`;

const SignBox = styled.div`
  align-self: flex-end;
  padding-right: 20px;
`;

const SignText = styled.span`
  font-size: 14px;
  color: ${({theme}) => theme.color.gray};
`;

const SignLink = styled(Link)`
  font-size: 16px;
  color: ${({theme}) => theme.color.black};
  font-weight: bold;
`;

const LoginBtn = styled(ColorBtn)`
  width: 100px;
  height: 30px;
  background-color: #FFC306;
  font-weight: bold;
  align-self: flex-end;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  margin: 20px 20px 0 0;
`;

const ValidCheck = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: red;
  align-self: flex-end;
  padding-right: 20px;
`;

function EmailForm () {
  return (
    <FormBox>
      <Label> 이메일 </Label>
      <Input type="email" placeholder='아이디를 입력하세요.'/>
      <ValidCheck> 아이디를 다시 확인해주세요. </ValidCheck>
      <Label> 비밀번호 </Label>
      <Input type="password" placeholder='비밀번호를 입력하세요.'/>
      <ValidCheck> 비밀번호가 올바르지 않습니다. </ValidCheck>
      <FindIdPwd> 혹시 아이디와 비밀번호를 잊어버리셨나요? </FindIdPwd>
      <SignBox>
        <SignText> 아직 회원이 아니신가요? </SignText>
        <SignLink to="/signup"> 회원가입 </SignLink>
      </SignBox>
      <LoginBtn> 로그인 </LoginBtn>
    </FormBox>
  );
}

export default EmailForm;