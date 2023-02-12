import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./PostForm.css";
import { useAuth } from "../../context/useAuth";

const PostForm = (props) => {
  const auth = useAuth();
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("title", title);
    formData.append("user_id", auth?.user?.id);
    formData.append("category_list", category);
    formData.append("description", description);
    formData.append("condition", condition);
    formData.append("location", location);

    Array.from(images).forEach((image) => {
      formData.append("uploaded_images", image);
    });

    const API_URL = "http://localhost:8000/api/posts/";

    axios
      .post(API_URL, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/posts");
  };

  const removeSelectedImage = () => {
    setImages();
  };

  return (
    <section
      className="form"
      style={{
        marginTop: 8,
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <form>
        <fieldset>
          <label for="exampleInputEmail1" class="form-label mt-4">
            Title
          </label>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            class="form-control"
            id="title"
            placeholder="Title"
            value={title}
          />
          <label for="exampleInputEmail1" class="form-label mt-4">
            Location
          </label>
          <input
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            type="location"
            class="form-control"
            id="location"
            placeholder="Location"
            value={location}
          />
          <label for="exampleSelect1" class="form-label mt-4">
            Condition
          </label>
          <select
            onChange={(e) => {
              setCondition(e.target.value);
            }}
            multiple=""
            class="form-select"
            id="exampleSelect2"
            value={condition}
          >
            <option value="New">New</option>
            <option value="Lightly Used">Lightly Used</option>
            <option value="Used">Used</option>
            <option value="Heavily Used">Heavily Used</option>
            <option value="Poor">Poor</option>
          </select>
          <label for="exampleTextarea" class="form-label mt-4">
            Description
          </label>
          <textarea
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
            class="form-control"
            id="exampleTextarea"
            rows="3"
          ></textarea>
          <label for="exampleSelect2" class="form-label mt-4">
            Categories
          </label>
          <select
            onChange={(e) => {
              setCategory(
                Array.from(e.target.selectedOptions, (item) => item.value)
              );
            }}
            multiple="true"
            class="form-select"
            id="exampleSelect2"
          >
            <option value="Painting">Painting</option>
            <option value="Ceramics">Ceramics</option>
            <option value="Yarn and Needlework">Yarn and Needlework</option>
            <option value="Illustration and Drawing">
              Illustration and Drawing
            </option>
            <option value="Sculpture">Sculpture</option>
            <option value="Printmaking">Printmaking</option>
            <option value="Photography">Photography</option>
            <option value="Calligraphy">Calligraphy</option>
            <option value="Textiles">Textiles</option>
          </select>
          <div className="image-section">
            {Array.from(images).map((item) => {
              return (
                <img
                  style={{
                    display: "flex",
                    height: 300,
                    objectFit: "scale-down",
                  }}
                  src={item ? URL.createObjectURL(item) : null}
                />
              );
            })}
          </div>
          <input
            multiple
            type="file"
            onChange={(e) => {
              setImages(e.target.files);
            }}
          />
          <button onClick={handleSubmit} class="btn btn-secondary my-2 my-sm-0">
            {" "}
            Submit{" "}
          </button>
        </fieldset>
      </form>
      <Link to="/posts">See All Posts</Link>
    </section>
  );
};

export default PostForm;
