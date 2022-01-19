import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FormBox } from './EmailForm';

const SocialFormBox = styled(FormBox)`
  height: 75%;
  justify-content: center;
  border-left: 1px solid rgba(12, 12, 12, .3);
`;

const NaverLink = styled(Link)`
  width: 80%;
  height: 50px;
  background-color: green;
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

const GoogleLink = styled(NaverLink)`
  background-color: white;
  color: black;
  border: 1px solid black;
`;

function SocialForm () {
  return (
    <SocialFormBox>
      <NaverLink to="/"> Naver </NaverLink>
      <GoogleLink to="/"> Google </GoogleLink>
    </SocialFormBox>
  );
}

export default SocialForm;