import React from "react";
// import PropTypes from "prop-types";
// import "./PostList.css";
import PostDetails from "./PostDetails";
// import * as React from 'react';
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

export default function PostListItem(props) {
  const posts = props.posts.map((post) => {
    return (
      <ul className="PostTitles">
        <PostDetails
          key={post.id}
          id={post.id}
          title={post.title}
          user={post.user}
          image={post.images}
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
      <h2 className="PostHeading">All Posts</h2>
      <ul className="Posts-Box">{posts}</ul>
    </div>
  );
}
//     const posts = props.posts.map((post) => {
//       return (
//         <Paper
//           sx={{
//             p: 2,
//             margin: "auto",
//             maxWidth: 500,
//             flexGrow: 1,
//             backgroundColor: (theme) =>
//               theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//           }}
//         >
//           <Grid container spacing={2}>
//             <Grid item>
//               <ButtonBase sx={{ width: 128, height: 128 }}>
//                 <Img
//                   alt="complex"
//                   src="https://res.cloudinary.com/dyzttpr3i/image/upload/v1/media/images/paints_yyuwsq"
//                 />
//               </ButtonBase>
//             </Grid>
//             <Grid item xs={12} sm container>
//               <Grid item xs container direction="column" spacing={2}>
//                 <Grid item xs>
//                   <Typography gutterBottom variant="subtitle1" component="div">
//                     Standard license
//                   </Typography>
//                   <Typography variant="body2" gutterBottom>
//                     Full resolution 1920x1080 • JPEG
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     ID: 1030114
//                   </Typography>
//                 </Grid>
//                 <Grid item>
//                   <Typography sx={{ cursor: "pointer" }} variant="body2">
//                     Remove
//                   </Typography>
//                 </Grid>
//               </Grid>
//               <Grid item>
//                 <Typography variant="subtitle1" component="div">
//                   $19.00
//                 </Typography>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Paper>
//     );
// }
// const PostListItem = (props) => {
//   const posts = props.posts.map((post) => {
//     return (
//       <ul className="PostTitles">
//         <PostDetails
//           key={post.id}
//           id={post.id}
//           title={post.title}
//           user={post.user}
//           image={post.images}
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

// PostListItem.propTypes = {
//   Posts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       owner: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//     })
//   ),
//   onClickPost: PropTypes.func.isRequired,
// };
// export default PostListItem;
