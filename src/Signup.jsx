import React from "react";
import { Formik, Form } from "formik";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Signup = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        Firstname: Yup.string()
            .required("First name is required")
            .matches(/^[A-Za-z]+$/, "Only alphabetic characters are allowed"),
        Lastname: Yup.string()
            .required("Last name is required")
            .matches(/^[A-Za-z]+$/, "Only alphabetic characters are allowed"),
        Email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        Password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters"),
    });

    return (
        <Box sx={{ maxWidth: 400, margin: "auto", padding: 3, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h4" gutterBottom align="center">
                Signup
            </Typography>
            <Formik
                initialValues={{
                    Firstname: '',
                    Lastname: '',
                    Email: '',
                    Password: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    // Store signup data in localStorage
                    localStorage.setItem("formData", JSON.stringify(values));
                    navigate("/login"); // Redirect to the login page
                }}
            >
                {(formik) => (
                    <Form>
                        <TextField
                            id="Firstname"
                            label="First Name"
                            name="Firstname"
                            value={formik.values.Firstname}
                            onChange={formik.handleChange}
                            error={formik.touched.Firstname && Boolean(formik.errors.Firstname)}
                            helperText={formik.touched.Firstname && formik.errors.Firstname}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            id="Lastname"
                            label="Last Name"
                            name="Lastname"
                            value={formik.values.Lastname}
                            onChange={formik.handleChange}
                            error={formik.touched.Lastname && Boolean(formik.errors.Lastname)}
                            helperText={formik.touched.Lastname && formik.errors.Lastname}
                            fullWidth
                            margin="normal"
                        />
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
                            Signup
                        </Button>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

export default Signup;
