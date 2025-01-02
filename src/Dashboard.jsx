import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("formData"); // Clear user data on logout
    navigate("/login");
  };

  return (
    <Box sx={{ p: 3, maxWidth: 600, margin: "auto", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Your Dashboard
      </Typography>
      <Typography variant="body1" gutterBottom>
        You are now logged in! Explore your dashboard to view your personal data and settings.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Dashboard;
