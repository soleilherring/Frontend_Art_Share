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
import "./PostDetails.css";

export default function PostDetails({ posts }) {
  const { id } = useParams();
  // const images = posts.images;
  // const firstImage = images?.length ? images[0] : {};
  const post = posts.find((post) => post.id.toString() === id);
  console.log("it's a post & id", post, id);
  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <div className="img_carousel">
              <div class="card">
                <div class="card-body">
                  <Carousel className="inner_img">
                    {post.images.map((item) => (
                      <img src={item.image} alt="" className="inner_img" />
                    ))}
                  </Carousel>
                  <h4 class="card-title">{post.title}</h4>
                  <h6 class="card-subtitle mb-2 text-muted">
                    {post.user.name}
                  </h6>
                  <p class="card-text">{post.description}</p>
                  <a href="#" class="card-link">
                    Message
                  </a>
                  <a href="#" class="card-link">
                    Likes
                  </a>
                </div>
              </div>
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
