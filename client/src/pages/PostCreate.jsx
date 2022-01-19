import React, { useState } from "react";
import styled from "styled-components";
import PostTargetAge from "../components/post/PostTargetAge";
import Posteditor from "../components/post/posteditor";
import PostTitle from "../components/post/PostTitle";
import PostBottomBtn from "../components/post/PostBottomBtn"
import PostTag from "../components/post/PostTag";

// PostTitle, PostTargetAge가 onChange할 때마다 focus를 잃는 현상 때문에 밖에 배치
  const PostCreateContainer = styled.div`
    width: 1200px;
    height: 80vh;
    margin-top: 15vh;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
  `;

export default function PostCreate() {


  const [postTitle, setPostTitle] = useState("")
  const [postAge, setPostAge] = useState('');
  const [postContent, setPostContent] = useState('');


  const titlehandler = (e) => {
    setPostTitle(e.target.value)
  }
  
  const agehandler = (e) => {
    setPostAge(e.target.value);
  }

  const contenthandler = (e) => {
    setPostContent(e.target.value);
  }

  const body = { postTitle, postAge, postContent };

  console.log(body)
  

  const PostHeader = styled.div`
    position: relative;
    width: 140px;
    font-size: 35px;
    border-bottom: 2px solid
      ${({ palette, theme }) => (palette ? theme.color[palette] : theme.color['black'])};
    @media screen and (max-width: 550px) {
      font-size: 25px;
      width: 100px;
      left: 150px;
    }
  `;


  return (
    <PostCreateContainer>
      <PostHeader> 질문하기 </PostHeader>
      <PostTitle titlehandler={titlehandler} postTitle={postTitle} />
      <PostTargetAge agehandler={agehandler} />
      <PostTag/>
      <Posteditor contenthandler={contenthandler} />
      <PostBottomBtn />
    </PostCreateContainer>
  );
}
