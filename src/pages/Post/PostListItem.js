import React from "react";
// import PropTypes from "prop-types";
// import "./PostList.css";
// import PostDetails from "./PostDetails";
// import * as React from 'react';
// import { styled } from "@mui/material/styles";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import ButtonBase from "@mui/material/ButtonBase";

// ###########third version ##############
// import { redirect } from "react-router-dom";
// import Link from "react-router-dom";
// import { styled } from "@mui/material/styles";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import ButtonBase from "@mui/material/ButtonBase";

export default function PostList(props) {
  const images = props.images;
  console.log(props);
  // ? is optional chaining
  const firstImage = images?.length ? images[0] : {};

  return (
    <div>
      {" "}
      {props.title}
      {props.description}
      {props.location}
      {props.likes}
      <button
        onClick={() => {
          props.onClickPost(props.id);
        }}
      >
        Details{" "}
      </button>
      {/* look into ?? nullish coalesce */}
      <img alt="image of item" src={firstImage?.image ?? ""} />
    </div>
  );
}
// react router dom link or useNavigation hook, then call url
// link with page fragment ~link to and get id to naviaget to details, may have to use context or loader(not props, using context)
