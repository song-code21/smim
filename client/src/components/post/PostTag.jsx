import React from 'react'
import styled from 'styled-components';


const TagWrap = styled.div`
  margin-top: 30px;
`;

const TagInput = styled.input`
  width: 500px;
  height: 40px;
  border: 2px solid
    ${({ palette, theme }) => (palette ? theme.color[palette] : theme.color['black'])};
  border-radius: 3px;
  @media screen and (max-width: 550px) {
    width: 400px;
  }
`;




function PostTag() {




  return (
    <TagWrap>
      <TagInput placeholder='관련된 태그를 입력하세요' palette='yellow' />
    </TagWrap>
  );
}

export default PostTag
