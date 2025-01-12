import React, { useState } from "react";
import { TextField, Button, Typography, Alert, Box } from "@mui/material";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from "./Context/Context";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(GlobalContext);


  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f6f8",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          width: "400px",
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          sx={{ marginBottom: "20px", fontWeight: "bold", textAlign: "center" }}
        >
          Login
        </Typography>

        {/* Display alert if there's an error */}
        {alertOpen && (
          <Alert
            severity="error"
            onClose={() => setAlertOpen(false)}
            sx={{ marginBottom: "20px" }}
          >
            {errorMessage}
          </Alert>
        )}

        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            axios
              .post("https://dummyjson.com/auth/login", {
                username: values.username,
                password: values.password,
              })
              .then((response) => {
                if (response?.data?.accessToken) {
                  localStorage.setItem("userToken", response.data.accessToken);
                  dispatch({ type: "USER_LOGIN", payload: response.data.user });
                  navigate("/home");
                }
              })
              .catch((error) => {
                console.error("Error during login:", error);
                setErrorMessage(
                  error?.response?.data?.message || "Failed to login"
                );
                setAlertOpen(true);
              });
          }}
        >
          {({ touched, errors }) => (
            <Form>
              <Field
                as={TextField}
                label="Username"
                name="username"
                fullWidth
                margin="normal"
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
              />
              <Field
                as={TextField}
                label="Password"
                name="password"
                type="password"
                fullWidth
                margin="normal"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: "20px", padding: "10px" }}
                onClick={() => {navigate(`/home`);
                }}
              >
                Login
              </Button>
              
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Login;
