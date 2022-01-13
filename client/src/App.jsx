import React from "react";
import Intro from './pages/Intro';
import MainPage from "./pages/MainPage";
import SignupPage from "./pages/SignupPage";
import PostsPage from "./pages/PostsPage";
import PostVeiw from "./pages/PostVeiw";
import PostCreate from "./pages/PostCreate";
import PostEdit from "./pages/PostEdit";
import MyPage from "./pages/MyPage";
import LoadingPage from "./pages/LoadingPage";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/common/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route
          path="/posts/view/:id"
          element={<PostVeiw />}
        />
        <Route
          path="/posts/create"
          element={<PostCreate />}
        />
        <Route path="/posts/edit" element={<PostEdit />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
