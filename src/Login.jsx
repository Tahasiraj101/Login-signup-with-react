import React from "react";
import { Formik, Form } from "formik";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    Email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    Password: Yup.string().required("Password is required"),
  });

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", padding: 3 }}>
      <Typography variant="h4" gutterBottom align="center">
        Login
      </Typography>
      <Formik
        initialValues={{
          Email: "",
          Password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // Retrieve stored signup data from localStorage
          const storedData = JSON.parse(localStorage.getItem("formData"));

          if (storedData?.Email === values.Email && storedData?.Password === values.Password) {
            alert(`Welcome back, ${storedData.Firstname}!`);
            navigate("/dashboard"); // Redirect to the dashboard
          } else {
            alert("Invalid email or password. Please try again.");
          }
        }}
      >
        {(formik) => (
          <Form>
            <TextField
              id="Email"
              label="Email"
              name="Email"
              value={formik.values.Email}
              onChange={formik.handleChange}
              error={formik.touched.Email && Boolean(formik.errors.Email)}
              helperText={formik.touched.Email && formik.errors.Email}
              fullWidth
              margin="normal"
            />
            <TextField
              id="Password"
              label="Password"
              name="Password"
              value={formik.values.Password}
              onChange={formik.handleChange}
              error={formik.touched.Password && Boolean(formik.errors.Password)}
              helperText={formik.touched.Password && formik.errors.Password}
              type="password"
              fullWidth
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Login;
