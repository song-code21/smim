import React from 'react';
import styled from 'styled-components';

export default function PostComment() {
  return (
    <>
      <CommentContainer>
        <CommentH2>답변하기</CommentH2>
        <CommentInputBox>
          <CommentInput type='text' placeholder='답변을 기다립니다.' />
        </CommentInputBox>
        <div className='comment-box'>
          <CommentProfile>
            <ProfileImg />
            <span>도기석</span>
          </CommentProfile>
          <p className='comment-text'>
            아버지에게 드릴 선물을 고민하고
            있습니다.닝러니ㅏㅇ러ㅣㄴ아ㅓ린아ㅓ린아ㅓ린아ㅓ린아ㅓ리ㅏㄴ어리ㅏㄴ어리ㅐㅈ댜ㅓ개ㅑㅈ덕;ㅣㅏ젇기;ㅏㅈ덕;ㅣㅏㅈ덜;ㅣㅏㅈ덜;ㅣ
          </p>
          <span className='comment-date'>2022.01.09</span>
        </div>
      </CommentContainer>
    </>
  );
}

const CommentContainer = styled.div`
  width: 794px;
  height: 59px;
  margin: 0 auto;
`;

const CommentH2 = styled.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  margin-bottom: 16px;
  &::after {
    width: 70px;
    height: 2px;
    background: #000000;
    display: block;
    content: '';
    margin-top: 9px;
  }
`;

const CommentInputBox = styled.div`
  width: 794px;
  height: 59px;
  border: 1px solid #c4c4c4;
  padding: 5px;
  margin-bottom: 25px;
`;

const CommentInput = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
  font-size: 13px;
`;

const CommentProfile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 2px solid #091d3e;
  margin-right: 11px;
`;
