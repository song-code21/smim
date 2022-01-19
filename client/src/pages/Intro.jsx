import React from 'react';
import styled from 'styled-components';

const IntroCtn = styled.div`
  width: 100vw;
  background-color: magenta;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IntroSection = styled.section`
  min-width: 1080px;
  height: 100vh;
  background-color: yellow;
  border-bottom: 1px solid magenta;
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IntroImg = styled.div`
  background-color: green;
  width: 500px;
  height: 500px;
`;
const IntroDesc = styled.div`
  background-color: red;
  margin-top: ${({ marginTop }) => marginTop || 'none'};
  margin-bottom: ${({ marginBottom }) => marginBottom || 'none'};
  margin-left: ${({ marginLeft }) => marginLeft || 'none'};
  margin-right: ${({ marginRight }) => marginRight || 'none'};
`;
const Title = styled.h1``;
const SubText = styled.p``;

export default function Intro() {
  return (
    <IntroCtn>
      <IntroSection>
        <Content>
          <IntroImg />
          <IntroDesc>
            <Title>세대간 궁금했던 이야기를 질문해보세요</Title>
            <SubText></SubText>
          </IntroDesc>
        </Content>
      </IntroSection>
      <IntroSection>
        <Content>
          <IntroDesc>
            <Title>세대간 궁금했던 이야기를 질문해보세요</Title>
            <SubText></SubText>
          </IntroDesc>
          <IntroImg />
        </Content>
      </IntroSection>
      <IntroSection>
        <Content>
          <IntroImg />
          <IntroDesc>
            <Title>세대간 궁금했던 이야기를 질문해보세요</Title>
            <SubText></SubText>
          </IntroDesc>
        </Content>
      </IntroSection>
    </IntroCtn>
  );
}
