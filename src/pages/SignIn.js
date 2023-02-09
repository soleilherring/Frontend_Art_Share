import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useState, useRef, useContext, useEffect } from "react";
import AuthContext from "../context/useAuth";
import { useAuth } from "../context/useAuth";
import { setItemInLocalStorage } from "../useLocalStorage";
import { getItemFromLocalStorage } from "../useLocalStorage";
import { useNavigate, useRoutes } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

// export default function SignIn(props) {
// const { setUser } = useContext(AuthContext);
// const { login } = useAuth();
export default function SignIn() {
  const navigate = useNavigate();
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      email: input.email,
      password: input.password,
      name: input.name,
    };

    axios
      .post(`http://localhost:8000/api/login/`, user)
      .then((response) => {
        console.log(response.data);
        window.localStorage.setItem(
          "user",
          JSON.stringify({ ...response.data })
        );
      })
      .catch((error) => console.log(error));

    // const loggedInUser = getItemFromLocalStorage("user");

    // const loggedInUser = JSON.parse(window.localStorage.getItem("user"));
    // console.log(loggedInUser);
    // if (
    //   input.email === loggedInUser.email &&
    //   input.password === loggedInUser.password &&
    //   input.name === loggedInUser.name
    // ) {
    //   navigate("/");
    // } else {
    //   alert("wrong email or password");
    // }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={changeInput}
              value={input.email}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={changeInput}
              value={input.password}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={changeInput}
              value={input.name}
              name="name"
              label="Name"
              type="name"
              id="name"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="signupform" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
