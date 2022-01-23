import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FormBox } from './EmailForm';

const SocialFormBox = styled(FormBox)`
  height: 65%;
  justify-content: center;
  gap: 30px;
  border: none;
`;

const KaKaoLink = styled(Link)`
  width: 80%;
  height: 50px;
  background-color: ${({theme}) => theme.color.yellow};
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    text-decoration: underline;
    font-size: 21.5px;
  }
`;

const GoogleLink = styled(KaKaoLink)`
  background-color: white;
  color: black;
  border: 1px solid black;
`;

function SocialForm () {
  return (
    <SocialFormBox>
      <KaKaoLink to="/"> Naver </KaKaoLink>
      <GoogleLink to="/"> Google </GoogleLink>
      <KaKaoLink to="/"> Facebook </KaKaoLink>
      <KaKaoLink to="/"> Facebook </KaKaoLink>
    </SocialFormBox>
  );
}

export default SocialForm;