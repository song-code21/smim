import React, { useState, useRef, useEffect, forwardRef } from 'react';
import styled from 'styled-components';
import CommentDropDown from './CommentDropDown';
// import moreIcon from '../../asset/icon/icon-more.svg';
import heartFill from '../../asset/icon/icon-heart-fill.svg';
import heartLine from '../../asset/icon/icon-heart-line.svg';

const CommentItemBox = styled.div`
  margin-bottom: 26px;
  display: flex;
  position: relative;
`;

const ProfileImg = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 2px solid #091d3e;
  margin-right: 11px;
`;

// const CommentDropDownBtn = styled.button`
//   width: 24px;
//   height: 24px;
//   margin-left: 10px;
//   background: url(${moreIcon});
// `;

const CommentContent = styled.div`
  width: 707px;
`;

const CommentText = styled.p`
  margin: 0;
  margin-bottom: 12px;
`;

const CommentEtc = styled.div`
  display: flex;
  align-items: center;
`;

const CommentDate = styled.span`
  margin-right: 12px;
  font-size: 14px;
`;

const CommentReBtn = styled.button`
  margin-right: 12px;
  font-size: 14px;
  font-weight: 600;
`;

const CommentLike = styled.button`
  width: 20px;
  height: 20px;
  background: url(${(props) => (props.like ? `${heartFill}` : `${heartLine}`)});
  background-position: center;
  background-size: contain;
`;

export default function CommentItem() {
  const dropDownEl = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [like, setLike] = useState(false);

  const ref = useRef();

  const handleLikeBtnClick = () => {
    setLike(!like);
  };

  const handleModalShow = () => {
    setIsVisible(!isVisible);
  };

  const CommentDropDownBtn = forwardRef((props, ref) => (
    <button ref={ref} onClick={handleModalShow}></button>
  ));
  CommentDropDownBtn.displayName = 'Button';

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isVisible && ref.current && !ref.current.contains(e.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isVisible]);

  return (
    <>
      <CommentItemBox>
        {isVisible && <CommentDropDown ref={dropDownEl} />}
        <ProfileImg />
        <CommentContent>
          <CommentText>
            <strong>도기석</strong> 아버지에게 드릴 선물을 고민하고
            있습니다.닝러니ㅏㅇ러ㅣㄴ아ㅓ린아ㅓ린아ㅓ린아ㅓ린아ㅓ리ㅏㄴ어리ㅏㄴ어리ㅐㅈ댜ㅓ개ㅑㅈ덕;ㅣㅏ젇기;ㅏㅈ덕;ㅣㅏㅈ덜;ㅣㅏㅈ덜;ㅣ
          </CommentText>
          <CommentEtc>
            <CommentDate>2일</CommentDate>
            <CommentReBtn>답글 달기</CommentReBtn>
            <CommentLike onClick={handleLikeBtnClick} like={like} />
          </CommentEtc>
        </CommentContent>
        <CommentDropDownBtn />
      </CommentItemBox>
    </>
  );
}
