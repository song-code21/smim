import React from 'react';
import Intro from './pages/Intro';
import MainPage from './pages/MainPage';
import SignupPage from './pages/SignupPage';
import PostsPage from './pages/PostsPage';
import PostView from './pages/PostViewPage';
import PostCreate from './pages/PostCreate';
import PostEdit from './pages/PostEdit';
import MyPage from './pages/MyPage';
import LoadingPage from './pages/LoadingPage';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/common/NavBar';

function App({ loginId }) {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/intro' element={<Intro loginId={loginId} />} />
        <Route path='/signup' element={<SignupPage loginId={loginId} />} />
        <Route path='/' element={<MainPage loginId={loginId} />} />
        <Route path='/10generation' element={<PostsPage loginId={loginId} />} />
        <Route path='/20generation' element={<PostsPage loginId={loginId} />} />
        <Route path='/30generation' element={<PostsPage loginId={loginId} />} />
        <Route path='/40generation' element={<PostsPage loginId={loginId} />} />
        <Route path='/50generation' element={<PostsPage loginId={loginId} />} />
        <Route path='/60generation' element={<PostsPage loginId={loginId} />} />
        <Route path='/posts/:id' element={<PostView loginId={loginId} />} />
        <Route path='/posts/:id' element={<PostView loginId={loginId} />} />
        <Route path='/posts/:id' element={<PostView loginId={loginId} />} />
        <Route path='/posts/:id' element={<PostView loginId={loginId} />} />
        <Route path='/posts/:id' element={<PostView loginId={loginId} />} />
        <Route path='/posts/:id' element={<PostView loginId={loginId} />} />
        <Route path='/posts/create' element={<PostCreate loginId={loginId} />} />
        <Route path='/posts/edit' element={<PostEdit loginId={loginId} />} />
        <Route path='/my' element={<MyPage loginId={loginId} />} />
        <Route path='/loading' element={<LoadingPage loginId={loginId} />} />
        <Route path='/notfound' element={<NotFound loginId={loginId} />} />
      </Routes>
    </>
  );
}

export default App;
