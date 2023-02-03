import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
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

const API_URL = "http://localhost:8000/api/";

const getAllPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}posts/`);
    console.log("this is data", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

function App() {
  // claire help
  // useEffect(() => {
  //   axios.get(API_URL).then((response) => {
  //     console.log(response.data);
  //   });
  // }, []);

  const refreshPosts = async () => {
    try {
      const posts = await getAllPosts();
      console.log("this will set all posts");
      setPosts(posts);
    } catch (error) {
      console.log(error);
    }
  };

  const [usersData, setUsers] = useState([]);
  const [reviewsData, setReviews] = useState([]);
  const [categoriesData, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  const [postsData, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState({
    id: null,
    title: "",
    user: "",
    image: [],
    description: "",
    condition: "",
    location: "",
    date: "",
    likes: "",
    reserved: null,
    category: [],
  });

  useEffect(() => {
    refreshPosts();
  }, []);

  // make function that takes selected post based on id passed to it and will navigate to postdetail
  // onclick to find post, setselected post, then it will redirect to post detail.
  // post list, iterate through post list item, which click on post item component, store id in state --> navigate

  const clickToSelectPost = (id) => {
    for (const post of postsData) {
      console.log(post.id);
      if (post.id === id) {
        console.log(post.id);
        setSelectedPost(post);
      }
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(`${API_URL}${id}/`)
      .then(() => {
        const newPost = postsData.filter((p) => {
          return p.id !== id;
        });
        setPosts(newPost);
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };

  const handleUpdate = async (id, value) => {
    return axios
      .patch(`${API_URL}${id}/`, value)
      .then((res) => {
        const { data } = res;
        const newPost = postsData.map((p) => {
          if (p.id === id) {
            return data;
          }
          return p;
        });
        setPosts(newPost);
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} /> */}
        {/* <Route path="*" element={<Error />} /> */}
        <Route
          path="posts"
          element={
            <PostList posts={postsData} onClickPost={clickToSelectPost} />
          }
        />
        {/* <Route path="chat" element={<Chat />} /> */}
        <Route
          path="posts/:id"
          element={
            <PostDetails
              selectedPost={selectedPost}
              onClickPost={clickToSelectPost}
            />
          }
        />
        {/* <Route path="postform" element={<PostForm />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
