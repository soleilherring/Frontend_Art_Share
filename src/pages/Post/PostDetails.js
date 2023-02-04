import React from "react";
import { useParams, Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import "./Board.css";
// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Paper";
import Carousel from "react-material-ui-carousel";

export default function PostDetails({ posts }) {
  const { id } = useParams();
  // const images = posts.images;
  // const firstImage = images?.length ? images[0] : {};
  const post = posts.find((post) => post.id.toString() === id);
  console.log("it's a post", post);
  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <div className="img_carousel">
              <Carousel>
                {post.images.map((item) => (
                  <img src={item.image} alt="" />
                ))}
              </Carousel>
              <h3>{post.title}</h3>
            </div>
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
