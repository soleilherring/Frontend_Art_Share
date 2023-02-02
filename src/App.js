import "./App.css";
import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostList from "./pages/Post/PostList";
import SignIn from "./pages/SignIn";
import PostDetails from "./pages/Post/PostDetails";
import Home from "./pages/HomePage/Home";
import Error from "./pages/Error";
import Chat from "./pages/HomePage/Chat";
import SignUp from "./components/SignupForm";
import PostForm from "./components/SignupForm";
import axios from "axios";

const API_URL = "http://localhost:8000/api/posts/";

function App() {
  //   useEffect(() => {
  //     axios.get(API_URL).then((response) => {
  //       console.log(response.data);
  //     });
  //   }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        {/* <Route path="signup" element={<SignUp />} /> */}
        <Route path="*" element={<Error />} />
        <Route path="posts" element={<PostList />} />
        <Route path="chat" element={<Chat />} />
        <Route path="posts/:post_id" element={<PostDetails />} />
        {/* <Route path="postform" element={<PostForm />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
