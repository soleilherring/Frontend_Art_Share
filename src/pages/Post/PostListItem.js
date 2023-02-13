import React from "react";
import { Link, Outlet, redirect } from "react-router-dom";

// $$$$$$$$$$$$$$$$ working version $$$$$$$$$$$$

// export default function PostList(props) {
//   const images = props.images;
//   // console.log(props);
//   // ? is optional chaining
//   const firstImage = images?.length ? images[0] : {};

//   return (
//     <div>
//       {" "}
//       {props.title}
//       {props.description}
//       {props.location}
//       {props.likes}
//       <button
//         onClick={() => {
//           props.onClickPost(props.id);
//         }}
//       >
//         Details{" "}
//       </button>
//       {/* look into ?? nullish coalesce */}
//       <img src={firstImage?.image ?? ""}></img>
//     </div>
//   );
// }
// react router dom link or useNavigation hook, then call url
// link with page fragment ~link to and get id to naviaget to details, may have to use context or loader(not props, using context)

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import reserved from "../../images/reserved.png";
import available from "../../images/available.png";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function PostListItem(props) {
  const images = props.images;
  const firstImage = images?.length ? images[0] : {};

  const reservedImage = props.reserved ? (
    <img style={{ height: 40 }} src={reserved} />
  ) : (
    <img style={{ height: 40 }} src={available} />
  );

  return (
    <article className="post-list-item">
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid container spacing={4}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img
                alt="complex"
                src={
                  firstImage?.image ??
                  "https://res.cloudinary.com/dyzttpr3i/image/upload/v1/media/images/pencil_rhtkx2"
                }
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="div"
                  fontWeight={600}
                >
                  {props.title}
                </Typography>
                {/* <Typography variant="body2" gutterBottom>
                  {props.condition}
                </Typography> */}
                <Typography variant="body2" color="text.secondary">
                  by: {props.user.name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  {props.location}
                </Typography>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  {props.date}
                  {/* {props.date().toLocaleDateString()} */}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                <Link
                  className="btn"

                  to={`${props.id}`}
                >
                  More
                </Link>
                <span>{reservedImage}</span>
                {/* <Link to={$props.id} onClick={props.onClickPost()}></Link>
                <Link to="/" onClick={() => prop.onclick()}></Link> */}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </article>
  );
}
