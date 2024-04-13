// Hero.jsx

import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import background1 from '../../assets/images/background_7.jpg';
import background2 from '../../assets/images/farmers.png';


const Hero = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...sliderSettings}>
      <Box
        key={1}
        sx={{
          backgroundImage: `url(${background1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '70px 0',
          height: '100vh',
        }}
      >
        <Container>
          <Typography variant="h2" gutterBottom>
            Welcome to{' '}
            <span style={{ fontFamily: 'Pacifico, cursive', color: '#FFA000' }}>
              MarabFoods
            </span>
          </Typography>
          <Typography variant="h5" color="inherit" paragraph>
            Connecting farmers and buyers for a sustainable future.
          </Typography>
          <Button variant="contained" color="primary" size="large" style={{ marginTop: '20px' }}>
            Explore Products
          </Button>
        </Container>
      </Box>

      <Box
        key={2}
        sx={{
          backgroundImage: `url(${background2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '80px 0',
          height: '100vh',
        }}
      >
        <Container>
          <Typography
            variant="h1"
            gutterBottom
            style={{
              fontFamily: 'Pacifico, cursive',
              color: '#2E7D32',
              fontSize: '4em',
              textAlign: 'center',
              position: 'absolute',
            }}
          >
            Akwaaba!
          </Typography>
          <Typography
            variant="h4"
            style={{
              fontFamily: 'Playfair Display, serif',
              color: '#FFA000',
              fontWeight: 'bold',
              marginBottom: '20px',
            }}
          ></Typography>
        </Container>
      </Box>
    </Slider>
  );
};

export default Hero;
