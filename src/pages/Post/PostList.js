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
import reserved from "../../images/reserved.png";
import available from "../../images/available.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const API_URL = "http://localhost:8000/api/";

export default function PostList(props) {
  const [postsData, setPosts] = useState([]);
  const [category, setCategory] = useState("all");
  const [reserved, setReserved] = useState(false);

  const handleFilter = (category, reserved) => {
    getAllPosts(category, reserved);
  };

  const handleCategoryChange = (event, category) => {
    if (category !== null) {
      setCategory(category);
    }
    handleFilter(category, reserved);
  };

  const handleResChange = (event) => {
    const newReserved = event.target.value;
    setReserved(newReserved);
    handleFilter(category, newReserved);
  };

  const getAllPosts = async (category = null, reserved = null) => {
    try {
      let endpoint = `${API_URL}`;
      if (category) {
        endpoint += `posts?category=${category}`;
      }
      if (reserved !== null) {
        const reservedVal = reserved ? "true" : "false";
        if (category) {
          endpoint += `&reserved=${reservedVal}`;
        } else {
          endpoint += `?reserved=${reservedVal}`;
        }
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
    const reservedImage = post.reserved ? (
      <img style={{ height: 40 }} src={reserved} />
    ) : (
      <img style={{ height: 40 }} src={available} />
    );
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
        ></Box>
        <ToggleButtonGroup
          color="primary"
          value={category}
          exclusive
          onChange={handleCategoryChange}
          aria-label="Platform"
        >
          <ToggleButton
            style={{ textTransform: "none" }}
            onClick={() => getAllPosts()}
            value=""
          >
            All
          </ToggleButton>
          <ToggleButton
            style={{ textTransform: "none" }}
            // onClick={() => handleFilter(1)}
            value="1"
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
        {/* ################################## */}
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Filter</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={reserved}
              label="Age"
              onChange={handleResChange}
            >
              <MenuItem value={false}>Available</MenuItem>
              <MenuItem value={true}>Reserved</MenuItem>{" "}
            </Select>
          </FormControl>
        </Box>
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
