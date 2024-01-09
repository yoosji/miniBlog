// 4.CommentListItem
// =>리액트문법, styled문법
// =>함수형 컴포넌트

import React from "react";
import styled from "styled-components";

const Wrapper=styled.div`
width:calc(100% - 35px);
padding: 8px 16px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
border:1px solid gray;
border-radius:5px;
cursor:pointer;
background:yellow;
:hover{
  background:lightgray;
}
`
// =>div 태그에 추가 선택자 사용

const ContenText=styled.p`
  font-size:16px;
  white-space:pre-wrap;
`;
// white-space:pre-wrap
// =>원본 텍스트를 그대로 표현
// =>줄바꿈 인식

// =>함수형 컴포넌트
// =>글의 댓글영역
function CommentListItem(props){
//=>컴포넌트의 상위 매개변수로 comment을 전달
const {comment}=props;
// =>사용자가 작성한 댓글 내용이 보이는 영역
// =>글을 클릭 할 필요 없음 클릭이 없음
return(
  <Wrapper>
    <ContenText>
      {comment.content}
      {/* =>props로 받은 comment 객체*/}
    </ContenText>
  </Wrapper>
);

}
export default CommentListItem;
