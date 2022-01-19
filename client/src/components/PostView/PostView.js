import React from 'react';

export default function PostView() {
  return (
      <div className="post">
        <div className="postPost">
          <h2>포스트</h2>
        </div>
        <div className="postComment">
          <h2>답변하기</h2>
          <input type="text" placeholder="답변을 기다립니다."/>
          <div className="comment-box">
            <div className="comment-profile">
              <img />
              <span>도기석</span>
            </div>
            <p className="comment-text">
              홍콩에 있는 친구 안녕! 여기서 처음 써보는 편지야. 나는 스톡홀름에 사는 17살 학생이야.
              겹치는 관심사가 너무 많아서 깜짝 놀랐어! 여행 좋아해? 스웨덴에 와 본 적 있니? 언젠가 홍콩에 가보고 싶어. 어떤 외국어를 할 수 잇어? 답장 기다릴게!
            </p>
            <span className="comment-date">2022.01.09</span>
          </div>
        </div>
      </div>
  );
}
