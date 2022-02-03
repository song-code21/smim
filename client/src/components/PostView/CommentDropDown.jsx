import React from 'react';
import styled from 'styled-components';

export default function DropDown() {
  const handleCommentEdit = () => {};
  const handleCommentDel = () => {};
  return (
    <DropDownBox>
      <button onClick={handleCommentEdit}>수정</button>
      <button onClick={handleCommentDel}>삭제</button>
    </DropDownBox>
  );
}

const DropDownBox = styled.div`
  width: 76px;
  height: 50px;
  position: absolute;
  z-index: 2;
`;
