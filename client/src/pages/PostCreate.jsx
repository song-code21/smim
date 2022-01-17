import React from "react";
import { ColorBtn } from "../styles/common/buttons";
import { SrOnlyH1 } from "../styles/common";
import styled from "styled-components";
import Posteditor from "../components/posteditor";

export default function PostCreate() {

  const PostCreateContainer = styled.div` 
    width: 1200px;
    height: 3000px;
    display: flex;
    flex-direction: column;

  `;

  const PostCreateBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;

  const AgeSelection = styled.select`

  `

  const PostCreateBottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;

  const LeftBtn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;


  const RightBtn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;


  return (
    <PostCreateContainer>
      <SrOnlyH1> 질문하기 </SrOnlyH1>
      <PostCreateBody>
        <input placeholder="제목을 입력해 주세요" />
        <AgeSelection>
          <option>10대</option>
          <option>20대</option>
          <option>30대</option>
          <option>40대</option>
          <option>50대</option>
          <option>60대 이상</option>
        </AgeSelection>
        <input placeholder="태그" />
        <Posteditor/>
      </PostCreateBody>
      <PostCreateBottom>
        <LeftBtn>
          <ColorBtn palette={"yellow"}>임시저장</ColorBtn>
          <ColorBtn palette={"yellow"}>불러오기</ColorBtn>
        </LeftBtn>
        <RightBtn>
          <ColorBtn palette={"yellow"}>취소</ColorBtn>
          <ColorBtn palette={"yellow"}>등록</ColorBtn>
        </RightBtn>
      </PostCreateBottom>
    </PostCreateContainer>
  );
}
