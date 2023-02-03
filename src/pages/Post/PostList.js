import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import PostListItem from "./PostListItem";
import { HeadphonesBatteryOutlined } from "@mui/icons-material";

const API_URL = "http://localhost:8000/api/posts/";

// useEffect(() => {
//   axios.get(API_URL).then((response) => {
//     console.log(response.data);
//   });
// }, []);

export default function PostList(props) {
  const posts = props.posts.map((post) => {
    return (
      <ul className="PostTitles">
        <PostListItem
          key={post.id}
          id={post.id}
          title={post.title}
          user={post.user}
          image={post.image}
          description={post.description}
          condition={post.condition}
          location={post.location}
          date={post.date}
          likes={post.likes}
          reserved={post.reserved}
          category={post.category}
        />
      </ul>
    );
  });
  return (
    <div className="App">
      <h3 className="PostHeading">All:</h3>
      <ul className="Posts-Box">{posts}</ul>
    </div>
  );
}

// return (
//   <>
//     <section className="section">
//       <PostListItem posts={posts} />
//       {/* <ul className="posts_list">{postElements}</ul> */}
//       <Outlet />
//     </section>
//     <Navbar />
//   </>
// );
// }
// export default PostList;
