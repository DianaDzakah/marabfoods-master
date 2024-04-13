import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, Grid, Button } from '@mui/material';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const mockProducts = [
      {
        id: 1,
        name: 'Sweet Apple',
        description: 'Delicious sweet apple',
        price: 20,
        image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 3,
        name: 'Green Pepper',
        description: 'Fresh green pepper',
        price: 10,
        image: 'https://images.unsplash.com/photo-1585159079680-8dec029b76ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3dlZXQlMjBwZXBwZXJ8ZW58MHx8MHx8fDA%3D',
      },
      {
        id: 4,
        name: 'Sweet Pepper',
        description: 'Colorful sweet pepper',
        price: 10,
        image: 'https://images.unsplash.com/photo-1469053713174-e64e64779a7a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ];

    setProducts(mockProducts);
  }, []);

  const addToCart = (product) => {
    // Implement your addToCart logic here
    console.log(`Product ${product.id} added to cart`);
  };

  return (
    <Container>
       <Typography variant="h4" gutterBottom style={{ textAlign: 'center', fontFamily: 'Pacifico, cursive', color: '#000000' }}>
        Products
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />

              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  GHC {product.price.toFixed(2)}
                </Typography>
                <Button variant="contained" style={{ backgroundColor: '#FFA000', color: '#FFFFFF' }} onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsPage;
