import React from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import LoginHeader from './LoginHeader';

const LoginOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(12, 12, 12, 0.2);
  position: relative;
`;

const LoginBox = styled.section`
  width: 60%;
  height: 70%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 5px;
`;

function LoginSection () {
  return (
    <LoginOverlay>
      <LoginBox>
        <LoginHeader />
        <LoginForm />
      </LoginBox>
    </LoginOverlay>
  );
}

export default LoginSection;