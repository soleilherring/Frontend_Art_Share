import React from "react";
// import PropTypes from "prop-types";
// import "./Board.css";

const PostDetails = (props) => {
  return <div onClick={() => props.onClickBoard(props.id)}>{props.title}</div>;
  // {/* <h2>PostDetails</h2> */})
};

// PostDetails.propTypes = {
//   id: PropTypes.number.isRequired,
//   owner: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   onClickBoard: PropTypes.func,
//   selectedBoard: PropTypes.object,
// };

export default PostDetails;
