import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState } from "react";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const API_URL = "http://localhost:8000/api/";

  const seeAllMyPosts = () => {
    console.log("in see all my posts");
    axios
      .get(`${API_URL}posts?user=${auth.user.id}`)
      .then((response) => {
        // this is an array
        setUserInfo(response.data);
        console.log("all data", response.data);
        console.log("one data", response.data[0]);
        console.log("one data", response.data[0].title);
      })
      .catch((error) => console.log(error));
  };

  // const loggedInPosts = userInfo.map((post) => {
  //   return (
  //     <div className="App">
  //       <h3 className="BoardHeading">My Posts:</h3>
  //       <ul className="Boards-Box">{post.title}</ul>
  //     </div>
  //   );
  // });

  // return <h4>{loggedInPosts}</h4>;
  return (
    <section className="section">
      <h4>{auth.user ? `Welcome, ${auth.user.name} ${auth.user.id}` : ""}</h4>
      {/* <h2>{userInfo[0].title}</h2> */}
      {/* <h3>
        This is the user info array:{" "}
        {userInfo.map((post) => {
          return <p>{post.user.name}</p>;
        })}
      </h3> */}
      {auth.user && (
        <button onClick={() => seeAllMyPosts()}>See all my posts</button>
      )}
      {userInfo && (
        <div>
          This is the user info array:{" "}
          {userInfo.map((post) => {
            return <p>{post.title}</p>;
          })}
        </div>
      )}
    </section>
  );
};
export default Dashboard;

// export default function PostList(props) {
//   const posts = props.posts.map((post) => {
//     return (
//       <ul className="PostTitles">
//         <PostListItem
//           key={post.id}
//           id={post.id}
//           title={post.title}
//           user={post.user}
//           images={post.images}
//           description={post.description}
//           condition={post.condition}
//           location={post.location}
//           date={post.date}
//           likes={post.likes}
//           reserved={post.reserved}
//           category={post.category}
//           onClickPost={props.onClickPost}
//           onHandleUpdate={props.onHandleUpdate}
//           onDelete={props.onDelete}
//         />
//       </ul>
//     );
//   });
//   return (
//     <>
//       {/* <Navbar /> */}
//       <div className="App">
//         <ul className="Posts-Box">{posts}</ul>
//         {/* <Outlet /> */}
//       </div>
//     </>
//   );
// }
