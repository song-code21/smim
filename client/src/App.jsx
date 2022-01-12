import React from "react";
import Intro from "./pages/Intro";
import MainPage from "./pages/mainPage";
import SignupPage from "./pages/signupPage";
import PostsPage from "./pages/PostsPage";
import PostVeiw from "./pages/PostVeiw";
import PostCreate from "./pages/PostCreate";
import PostEdit from "./pages/postEdit";
import MyPage from "./pages/myPage";
import LoadingPage from "./pages/loadingPage";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/intro" element={<Intro loginId={loginId} />} />
        <Route path="/signup" element={<SignupPage loginId={loginId} />} />
        <Route path="/" element={<MainPage loginId={loginId} />} />
        <Route path="/posts" element={<PostsPage loginId={loginId} />} />
        <Route
          path="/posts/view/:id"
          element={<PostVeiw loginId={loginId} />}
        />
        <Route
          path="/posts/create"
          element={<PostCreate loginId={loginId} />}
        />
        <Route path="/posts/edit" element={<PostEdit loginId={loginId} />} />
        <Route path="/my" element={<MyPage loginId={loginId} />} />
        <Route path="/loading" element={<LoadingPage loginId={loginId} />} />
        <Route path="/notfound" element={<NotFound loginId={loginId} />} />
      </Routes>
    </>
  );
}

export default App;
