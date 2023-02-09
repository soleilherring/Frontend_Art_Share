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
// import API_URL from "../constants/index";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

export default function SignUpForm(props) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("location", location);

    axios
      .post(`http://localhost:8000/api/users/`, formData)
      .then((response) => {
        props.onUpdateUserID(response.data.id);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("posts");
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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  value={location}
                  id="location"
                  label="location"
                  name="location"
                  autoComplete="location"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
// import { Form, redirect, useActionData } from "react-router-dom";

// export default function SignUpForm() {
//   return (
//     <div className="form">
//       <Form method="post" action="/pages/signupform">
//         <label>
//           <span>Email:</span>
//           <input type="email" name="email" required />
//         </label>
//         <label>
//           <span>Name:</span>
//           <input type="name" name="name" required />
//         </label>
//         <label>
//           <span>Location:</span>
//           <input type="location" name="location" required />
//         </label>
//         <button>Submit</button>

//         {data && data.error && <p>{data.error}</p>}
//       </Form>
//     </div>
//   );
// }

// export const contactAction = async ({ request }) => {
//   const data = await request.formData();

//   const submission = {
//     email: data.get("email"),
//     message: data.get("message"),
//   };

//   console.log(submission);

//   // send your post request

//   if (submission.message.length < 10) {
//     return { error: "Message must be over 10 chars long." };
//   }

//   // redirect the user
//   return redirect("/");
// };
