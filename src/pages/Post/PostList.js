import { Outlet } from "react-router-dom";
import Navbar from "../StyledNavbar";
import { useState, useEffect } from "react";
import axios from "axios";
import PostListItem from "./PostListItem";
import { HeadphonesBatteryOutlined } from "@mui/icons-material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const API_URL = "http://localhost:8000/api/";

export default function PostList(props) {
  const [postsData, setPosts] = useState([]);
  const [alignment, setAlignment] = useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const getAllPosts = async (id = null) => {
    try {
      let endpoint = `${API_URL}posts/`;
      if (id) {
        endpoint += `?category=${id}`;
      }
      const response = await axios.get(endpoint);
      console.log("this is data", response.data);
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  const handleFilter = (id) => {
    getAllPosts(id);
  };

  // useEffect(() => {
  //   const getAllPosts = async () => {
  //     try {
  //       const response = await axios.get(`${API_URL}posts/`);
  //       console.log("this is data", response.data);
  //       setPosts(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getAllPosts();
  // }, []);

  // const handleFilter = (id) => {
  //   axios
  //     .get(`http://127.0.0.1:8000/api/posts?category=${id}`)
  //     .then((res) => {
  //       setPosts(res.data);
  //     })
  //     .catch((error) => {
  //       alert("Something went wrong");
  //     });
  // };
  // const filterCategory = (category) => {
  //   const updatedItems = postsData.filter((curElem) => {
  //     console.log("inside filterCategory");
  //     console.log("inside filterCategory", curElem.category);
  //     return curElem.category === category;
  //   });

  //   setPosts(updatedItems);
  // };
  const posts = postsData.map((post) => {
    return (
      <>
        <ul key={post.id} className="PostTitles">
          <PostListItem
            id={post.id}
            title={post.title}
            user={post.user}
            images={post.images}
            description={post.description}
            condition={post.condition}
            location={post.location}
            date={post.date}
            likes={post.likes}
            reserved={post.reserved}
            category={post.category}
            onClickPost={props.onClickPost}
            onHandleUpdate={props.onHandleUpdate}
            onDelete={props.onDelete}
          />
        </ul>
      </>
    );
  });
  return (
    <>
      {/* <Navbar /> */}
      <div className="App">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > *": {
              m: 1,
            },
          }}
        >
          {/* <ButtonGroup
            vcolor="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            // aria-label="Platform"
            ariant="outlined"
            aria-label="outlined button group"
          >
            <Button
              style={{ textTransform: "none" }}
              onClick={() => getAllPosts()}
            >
              All
            </Button>
            <Button
              style={{ textTransform: "none" }}
              onClick={() => handleFilter(1)}
            >
              Painting
            </Button>
            <Button
              style={{ textTransform: "none" }}
              onClick={() => handleFilter(2)}
            >
              Ceramics
            </Button>
            <Button
              style={{ textTransform: "none" }}
              onClick={() => handleFilter(3)}
            >
              Yarn and Needlework
            </Button>
            <Button
              style={{ textTransform: "none" }}
              onClick={() => handleFilter(4)}
            >
              Illustration and Drawing
            </Button>
            <Button
              style={{ textTransform: "none" }}
              onClick={() => handleFilter(5)}
            >
              {" "}
              Sculpture
            </Button>
            <Button
              style={{ textTransform: "none" }}
              onClick={() => handleFilter(6)}
            >
              Printmaking
            </Button>
            <Button
              style={{ textTransform: "none" }}
              onClick={() => handleFilter(7)}
            >
              Photography
            </Button>
            <Button
              style={{ textTransform: "none" }}
              onClick={() => handleFilter(8)}
            >
              Calligraphy
            </Button>
            <Button
              style={{ textTransform: "none" }}
              onClick={() => handleFilter(9)}
            >
              {" "}
              Textiles
            </Button>
          </ButtonGroup> */}
        </Box>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton
            style={{ textTransform: "none" }}
            onClick={() => getAllPosts()}
            value="all"
          >
            All
          </ToggleButton>
          <ToggleButton
            style={{ textTransform: "none" }}
            onClick={() => handleFilter(1)}
            value="Painting"
          >
            Painting
          </ToggleButton>
          <ToggleButton
            style={{ textTransform: "none" }}
            onClick={() => handleFilter(2)}
            value="Ceramics"
          >
            Ceramics
          </ToggleButton>
          <ToggleButton
            style={{ textTransform: "none" }}
            onClick={() => handleFilter(3)}
            value="Yarn and Needlework"
          >
            Yarn and Needlework
          </ToggleButton>
          <ToggleButton
            style={{ textTransform: "none" }}
            onClick={() => handleFilter(4)}
            value="Illustration and Drawing"
          >
            Illustration and Drawing
          </ToggleButton>
          <ToggleButton
            style={{ textTransform: "none" }}
            onClick={() => handleFilter(5)}
            value="Sculpture"
          >
            Sculpture
          </ToggleButton>
          <ToggleButton
            style={{ textTransform: "none" }}
            onClick={() => handleFilter(6)}
            value="Printmaking"
          >
            Printmaking
          </ToggleButton>
          <ToggleButton
            style={{ textTransform: "none" }}
            onClick={() => handleFilter(7)}
            value="Photography"
          >
            Photography
          </ToggleButton>
          <ToggleButton
            style={{ textTransform: "none" }}
            onClick={() => handleFilter(8)}
            value="Calligraphy"
          >
            Calligraphy
          </ToggleButton>
          <ToggleButton
            style={{ textTransform: "none" }}
            onClick={() => handleFilter(9)}
            value="Textiles"
          >
            Textiles
          </ToggleButton>
        </ToggleButtonGroup>

        {/* OLDDDD */}

        {/* <div
          class="btn-group"
          role="group"
          aria-label="Button group with nested dropdown"
        >
          <button type="button" class="btn btn-primary">
            All
          </button>
          <div class="btn-group" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              class="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            ></button>
            <div
              class="dropdown-menu"
              aria-labelledby="btnGroupDrop1"
              // style={{''}}
            >
              <a class="dropdown-item" href="#">
                Painting
              </a>
              <a class="dropdown-item" href="#">
                Ceramics
              </a>
              <a class="dropdown-item" href="#">
                Yarn and Needlework
              </a>
              <a class="dropdown-item" href="#">
                Illustration and Drawing
              </a>
              <a class="dropdown-item" href="#">
                Sculpture
              </a>
              <a class="dropdown-item" href="#">
                Printmaking
              </a>
              <a class="dropdown-item" href="#">
                Photography
              </a>
              <a class="dropdown-item" href="#">
                Calligraphy
              </a>
              <a class="dropdown-item" href="#">
                Textiles
              </a>
            </div>
          </div>
        </div> */}
        <li className="Posts-Box">{posts}</li>
        {/* <Outlet /> */}
      </div>
    </>
  );
}

// return (
//   <>
//     <section className="section">
//       <PostListItem posts={posts} />
//       {/* <ul className="posts_list">{postElements}</ul> */}
//
//     </section>
//     <Navbar />
//   </>
// );
// }
// export default PostList;
