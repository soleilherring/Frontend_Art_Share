import React from "react";
// import PropTypes from "prop-types";
// import "./PostList.css";
import PostDetails from "./PostDetails";

const PostListItem = (props) => {
  const posts = props.posts.map((post) => {
    return (
      <ul className="PostTitles">
        <PostDetails
          key={post.id}
          id={post.id}
          title={post.title}
          user={post.user}
          image={post.image}
          description={post.description}
          condition={post.condition}
          location={post.location}
          date={post.date}
          likes={post.likes}
          reserved={post.reserved}
          category={post.category}
          // key={post?.id}
          // id={post?.id}
          // title={post?.id}
          // user={post?.id}
          // image={post?.id}
          // description={post?.id}
          // condition={post?.id}
          // location={post?.id}
          // date={post?.id}
          // likes={post?.id}
          // reserved={post?.id}
          // category={post?.id}
          // onClickPost={Post?.id}
        />
      </ul>
    );
  });
  return (
    <div className="App">
      <h3 className="PostHeading">All:</h3>
      <ul className="Posts-Box">{posts}</ul>
    </div>
  );
};

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
export default PostListItem;
