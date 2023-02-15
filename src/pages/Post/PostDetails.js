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
import { useEffect, useState } from "react";
import axios from "axios";

export default function PostDetails() {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const API_URL = "http://localhost:8000/api/";

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(`${API_URL}posts/${id}`);
        console.log("this is data", response.data);
        setPost(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getPost();
  }, []);
  // const images = posts.images;
  // const firstImage = images?.length ? images[0] : {};
  console.log("it's a post & id", post, id);
  if (!post) {
    return <h4>Loading...</h4>;
  }
  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <div class="card">
            <div class="card-body">
              <h2>{post.title}</h2>
              <Carousel className="inner_img">
                {post.images.map((item) => (
                  <img
                    key={item.id}
                    src={item.image}
                    alt=""
                    className="inner_img"
                  />
                ))}
              </Carousel>
              <h4 class="card-title">{post.description}</h4>
              <h6 class="card-subtitle mb-2 text-muted">{post.condition}</h6>
              <p class="card-text">Pick up in {post.location}</p>
              <p class="card-text">{post.user.name}</p>
              <div class="btn-group">
                <button
                  type="button"
                  className="btn btn-light col-3 me-2 my-2 my-sm-0"
                >
                  Message
                </button>
                <button
                  type="button"
                  className="btn btn-light col-3 me-2 my-2 my-sm-0"
                >
                  5 ❤️'s
                </button>
                <button
                  type="button"
                  className="btn btn-light col-3 me-2 my-2 my-sm-0"
                >
                  Comments
                </button>
              </div>
            </div>
          </div>
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
