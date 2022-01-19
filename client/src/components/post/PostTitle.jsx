import React from 'react'
import styled from 'styled-components'


// PostTitle onChange할 때마다 focus를 잃는 현상 때문에 밖에 배치
const TitleWrap = styled.div`
  margin-top: 30px;
`;

const TitleInput = styled.input`
  width: 500px;
  height: 40px;
  border: 2px solid
    ${({ palette, theme }) => (palette ? theme.color[palette] : theme.color['black'])};
  border-radius: 3px;
  @media screen and (max-width: 550px) {
    width: 400px;
  }
`;


function PostTitle(props) {

  const { titlehandler, postTitle } = props;
  

    return (
      <TitleWrap>
        <TitleInput
          value={postTitle}
          placeholder='제목'
          palette='yellow'
          onChange={titlehandler}
        />
      </TitleWrap>
    );
}

export default PostTitle
