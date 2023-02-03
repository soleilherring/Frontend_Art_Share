import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import PostListItem from "./PostListItem";

const API_URL = "http://localhost:8000/api/posts/";

// useEffect(() => {
//   axios.get(API_URL).then((response) => {
//     console.log(response.data);
//   });
// }, []);

const getAllPosts = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getOnePost = async (post_id) => {
  try {
    const response = await axios.get(`API_URL/${post_id}/`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

function PostList() {
  const [postsData, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState({
    title: "",
    user: "",
    image: "",
    description: "",
    condition: "",
    location: "",
    date: "",
    likes: "",
    reserved: "",
    category: "",
  });

  const refreshPosts = async () => {
    try {
      const posts = await getAllPosts();
      setPosts(posts);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    refreshPosts();
  }, []);

  const selectPost = (post) => {
    setSelectedPost(post);
  };

  const postElements = postsData.map((post) => {
    return (
      <li>
        {/* <PostListItem post={post} onPostSelect={selectPost}></PostListItem> */}
      </li>
    );
  });

  // const boardsElements = boardsData.map((board) => {
  //   return (
  //     <li>
  //       <Board board={board} onBoardSelect={selectBoard}></Board>
  //     </li>
  //   );
  // });
  //   const posts = props.posts.map((post) => {
  //     return (
  //       <ul className="PostTitles">
  //         <PostDetails
  //           key={post.id}
  //           id={post.id}
  //           title={post.title}
  //           user={post.user}
  //           image={post.image}
  //           description={post.description}
  //           condition={post.condition}
  //           location={post.location}
  //           date={post.date}
  //           likes={post.likes}
  //           reserved={post.reserved}
  //           category={post.category}
  //         />
  //       </ul>
  //     );
  //   });
  //   return (
  //     <div className="App">
  //       <h3 className="PostHeading">All:</h3>
  //       <ul className="Posts-Box">{posts}</ul>
  //     </div>
  //   );
  // };

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

  return (
    <>
      <section className="section">
        <PostListItem posts={postsData} />
        <p>{postElements}</p>
        {/* <h2>PostList</h2> */}
        <Outlet />
      </section>
      <Navbar />
    </>
  );
}
export default PostList;
