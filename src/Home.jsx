import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "#f4f6f8",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          marginBottom: "20px",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        Products
      </Typography>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card
              sx={{
                maxWidth: 345,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
            
              <CardMedia
                component="img"
                height="200"
                image={product.thumbnail} 
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: "10px" }}>
                  {product.description.substring(0, 100)}...
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    console.log(`Navigating to /ProductDetails/${product.id}`);
                    navigate(`/ProductDetails/${product.id}`);
                  }}
                >
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
