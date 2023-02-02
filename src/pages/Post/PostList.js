import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import PostListItem from "./PostListItem";

const API_URL = "http://localhost:8000/api/posts/";

function PostList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(API_URL).then((response) => {
      console.log(response.data);
    });
  }, []);

  // const convertFromApi = (apiPosts) => {
  //   const {
  //     title,
  //     image,
  //     description,
  //     condition,
  //     location,
  //     date,
  //     likes,
  //     reserved,
  //     category,
  //   } = apiPosts;
  //   const newPost = {
  //     title,
  //     image,
  //     description,
  //     condition,
  //     location,
  //     date,
  //     likes,
  //     reserved,
  //     category,
  //   };
  //   return newPost;
  // };

  // const getAllPosts = async () => {
  //   try {
  //     const response = await axios.get(API_URL);
  //     console.log(response.data);
  //     return response.data.map(convertFromApi);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // const emptyPost = {
  //   id: 0,
  //   title: "",
  //   image: "",
  //   description: "",
  //   condition: "",
  //   location: "",
  //   date: "",
  //   likes: 0,
  //   reserved: "",
  //   category: "",
  // };

  // function PostList() {
  //   const [posts, setPosts] = useState([]);
  //   const [selectedPost, setSelectedPost] = useState(emptyPost);

  //   const refreshPosts = async () => {
  //     try {
  //       const posts = await getAllPosts();
  //       setPosts(posts);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };

  //   useEffect(() => {
  //     refreshPosts();
  //   }, []);

  //   const clickToSelectPost = (id) => {
  //     console.log("this function is running!");
  //     for (const post of posts) {
  //       console.log(post, id);
  //       if (post.id === id) {
  //         setPosts(post);
  //       }
  //     }
  //   };

  //   const addPosts = (newPost) => {
  //     axios
  //       .post(API_URL, newPost)
  //       .then((response) => {
  //         const newPostList = [...posts];
  //         newPostList.push(response.data.post);
  //         setPosts(newPostList);
  //       })
  //       .catch((error) => {
  //         console.log("Error:", error);
  //         alert("Couldn't create a new board. Try again!");
  //       });
  //   };

  // const deleteOnePost = (id) => {
  //   axios
  //     .delete(`API_URL/${id}`)
  //     .then((response) => {
  //       const newPost= posts.filter((oldPost) => {
  //         return oldPost.id !== post.id;
  //       });
  //       setBoardData(newBoardData);
  //       setSelectedBoard(emptyBoard);
  //     })
  //     .catch((error) => {
  //       console.log("Error:", error);
  //       alert("Couldn't delete board. Try again!");
  //     });
  // };
  return (
    <>
      <Navbar />
      <section className="section">
        <PostListItem posts={posts} />
        {/* <h2>PostList</h2> */}
        <Outlet />
      </section>
    </>
  );
}
export default PostList;
