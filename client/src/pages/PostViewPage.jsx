import React from 'react';
import PostView from "../components/PostView/PostView";
import NavBar from '../components/common/NavBar';

export default function PostVeiw() {
  return(
    <>
      <NavBar/>
      <div>
        <PostView/>
      </div>
    </>
  );
}
