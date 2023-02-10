import { Outlet } from "react-router-dom";
import Navbar from "../StyledNavbar";
import { useState, useEffect } from "react";
import axios from "axios";
import PostListItem from "./PostListItem";
import { HeadphonesBatteryOutlined } from "@mui/icons-material";

const API_URL = "http://localhost:8000/api/";

export default function PostList(props) {
  const [postsData, setPosts] = useState([]);
  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const response = await axios.get(`${API_URL}posts/`);
        console.log("this is data", response.data);
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getAllPosts();
  }, []);

  const posts = postsData.map((post) => {
    return (
      <ul key={post.id} className="PostTitles">
        <PostListItem
          id={post.id}
          title={post.title}
          user={post.user}
          images={post.images}
          description={post.description}
          condition={post.condition}
          location={post.location}
          date={post.date}
          likes={post.likes}
          reserved={post.reserved}
          category={post.category}
          onClickPost={props.onClickPost}
          onHandleUpdate={props.onHandleUpdate}
          onDelete={props.onDelete}
        />
      </ul>
    );
  });
  return (
    <>
      {/* <Navbar /> */}
      <div className="App">
        <ul className="Posts-Box">{posts}</ul>
        {/* <Outlet /> */}
      </div>
    </>
  );
}

// return (
//   <>
//     <section className="section">
//       <PostListItem posts={posts} />
//       {/* <ul className="posts_list">{postElements}</ul> */}
//
//     </section>
//     <Navbar />
//   </>
// );
// }
// export default PostList;
