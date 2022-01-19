import React from 'react';
import styled from 'styled-components';
import EmailForm from './EmailForm';
import SocialForm from './SocialForm';

const LoginBox = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
`;

function LoginForm () {
  return (
    <LoginBox>
      <EmailForm />
      <SocialForm />
    </LoginBox>
  );
}

export default LoginForm;