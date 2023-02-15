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
import reserved from "../images/reserved.png";
import available from "../images/available.png";
import Grid from "@mui/material/Grid";

export default function Dashboard() {
  const [userInfo, setUserInfo] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const API_URL = "http://localhost:8000/api/";

  const handleDelete = (id) => {
    axios
      .delete(`${API_URL}posts/${id}/`)
      .then(() => {
        const newInfo = userInfo.filter((p) => {
          return p.id !== id;
        });
        setUserInfo(newInfo);
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };

  const handleUpdate = async (id, value) => {
    return axios
      .patch(`${API_URL}posts/${id}/`, value)
      .then((res) => {
        const { data } = res;
        const newInfo = userInfo.map((p) => {
          if (p.id === id) {
            return data;
          }
          return p;
        });
        setUserInfo(newInfo);
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };

  const seeAllMyPosts = () => {
    console.log("in see all my posts");
    axios
      .get(`${API_URL}posts?user=${auth.user.id}`)
      .then((response) => {
        // this is an array
        setUserInfo(response.data);
        // console.log("all data", response.data);
        // console.log("one data", response.data[0]);
        // console.log("one data", response.data[0].title);
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="section">
      <h4>{auth.user ? `Welcome, ${auth.user.name}` : ""}</h4>
      <div>
        {auth.user && (
          <button
            className="btn btn-light my-2 my-sm-0"
            onClick={() => seeAllMyPosts()}
          >
            See all my posts
          </button>
        )}
        {userInfo && (
          <div>
            {userInfo.map((post) => {
              const reservedImage = post.reserved ? (
                <img
                  key={post.id}
                  alt="reserved icon"
                  style={{ height: 40 }}
                  src={reserved}
                />
              ) : (
                <img
                  key={post.id}
                  alt="avialable icon"
                  style={{ height: 40 }}
                  src={available}
                />
              );
              return (
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Card
                    sx={{
                      // p: 2,
                      margin: "auto",
                      maxWidth: 300,
                      flexGrow: 1,
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                    }}
                  >
                    <CardMedia
                      sx={{ height: 200 }}
                      image={post.images[0].image}
                      title="post image"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {post.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {post.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      {/* <Button size="small">Reserved</Button> */}
                      <Button
                        size="small"
                        onClick={() => {
                          handleUpdate(post.id, { reserved: !post.reserved });
                        }}
                      >
                        {reservedImage}
                      </Button>
                      <Button
                        size="small"
                        onClick={() => {
                          handleDelete(post.id);
                        }}
                      >
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

// const Dashboard = () => {
//   const [userInfo, setUserInfo] = useState("");
//   const auth = useAuth();
//   const navigate = useNavigate();
//   const API_URL = "http://localhost:8000/api/";

//   const seeAllMyPosts = () => {
//     console.log("in see all my posts");
//     axios
//       .get(`${API_URL}posts?user=${auth.user.id}`)
//       .then((response) => {
//         // this is an array
//         setUserInfo(response.data);
//         console.log("all data", response.data);
//         console.log("one data", response.data[0]);
//         console.log("one data", response.data[0].title);
//       })
//       .catch((error) => console.log(error));
//   };

//   // const loggedInPosts = userInfo.map((post) => {
//   //   return (
//   //     <div className="App">
//   //       <h3 className="BoardHeading">My Posts:</h3>
//   //       <ul className="Boards-Box">{post.title}</ul>
//   //     </div>
//   //   );
//   // });

//   // return <h4>{loggedInPosts}</h4>;
//   return (
//     <section className="section">
//       <h4>{auth.user ? `Welcome, ${auth.user.name} ${auth.user.id}` : ""}</h4>
//       {/* <h2>{userInfo[0].title}</h2> */}
//       {/* <h3>
//         This is the user info array:{" "}
//         {userInfo.map((post) => {
//           return <p>{post.user.name}</p>;
//         })}
//       </h3> */}
//       {auth.user && (
//         <button onClick={() => seeAllMyPosts()}>See all my posts</button>
//       )}
//       {userInfo && (
//         <div>
//           This is the user info array:{" "}
//           {userInfo.map((post) => {
//             return <p>{post.title}</p>;
//           })}
//         </div>
//       )}
//     </section>
//   );
// };
// export default Dashboard;

// ######### reference ############

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
