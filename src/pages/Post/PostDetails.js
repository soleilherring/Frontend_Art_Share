import React from "react";
import { useParams, Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import "./Board.css";
// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import ButtonBase from "@mui/material/ButtonBase";

// const Img = styled("img")({
//   margin: "auto",
//   display: "block",
//   maxWidth: "100%",
//   maxHeight: "100%",
// });
export default function PostDetails({ posts }) {
  const { id } = useParams();
  const images = posts.images;
  const firstImage = images?.length ? images[0] : {};
  console.log(id);
  const post = posts.find((post) => post.id.toString() === id);
  console.log(post);
  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.date}</p>
            <p className="postBody">{post.title}</p>
            <p
              className="postImage"
              src={
                firstImage?.image ??
                "https://res.cloudinary.com/dyzttpr3i/image/upload/v1/media/images/pencil_rhtkx2"
              }
            ></p>
            <Link to={`/edit/${post.id}`}>
              <button className="editButton">Edit Post</button>
            </Link>
            {/* <button className="deleteButton" onClick={() => handleDelete(post.id)}> */}
            Delete Post
          </>
        )}
        {!post && (
          <>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
              <Link to="/">Visit Our Homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
}
