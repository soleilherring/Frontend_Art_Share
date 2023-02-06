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
import PostForm from "./pages/Post/PostForm";
import axios from "axios";
import "bootswatch/dist/minty/bootstrap.min.css";

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
  const getAllUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}users/`);
      console.log("this is user data", response.data);
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };
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
    images: [],
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

  useEffect(() => {
    getAllUsers();
  }, []);

  // make function that takes selected post based on id passed to it and will navigate to postdetail
  // onclick to find post, setselected post, then it will redirect to post detail.
  // post list, iterate through post list item, which click on post item component, store id in state --> navigate

  const clickToSelectPost = (id) => {
    for (const post of postsData) {
      console.log(post.id);
      if (post.id === id) {
        console.log("this is the post id", post.id);
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
  // add a post to the post list
  const handleAddPost = (newPost) => {
    axios
      .post(`${API_URL}posts/`, newPost)
      .then((response) => {
        const newPostList = [...postsData];
        newPostList.push(response.data);
        setPosts(newPostList);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Couldn't create a new post. Try again!");
      });
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="signin" element={<SignIn users={usersData} />} /> */}
        {/* <Route path="signup" element={<SignUp />} />  */}
        <Route path="*" element={<Error />} />
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
              posts={postsData}
              selectedPost={selectedPost}
              onClickPost={clickToSelectPost}
            />
          }
        />
        <Route
          path="postform"
          element={<PostForm onAddPost={handleAddPost} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
