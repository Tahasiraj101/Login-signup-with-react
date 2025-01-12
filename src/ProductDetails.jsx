import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Card, CardMedia, CardContent, CircularProgress } from "@mui/material";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress /> {/* Loading spinner */}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#f4f6f8",
        minHeight: "100vh",
      }}
    >
      <Card
        sx={{
          maxWidth: 600,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Product Image */}
        <CardMedia
          component="img"
          height="400"
          image={product.thumbnail} // Displaying product thumbnail
          alt={product.title}
        />

        {/* Product Details */}
        <CardContent>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            {product.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ marginBottom: "10px" }}>
            {product.description}
          </Typography>
          <Typography variant="h6" color="primary">
            Price: ${product.price}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductDetails;
