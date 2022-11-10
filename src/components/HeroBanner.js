import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';
import Exercises from './Exercises';
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px'},
      ml: {sm: '50px'}
    }} position='relative' p='20px' >
      <Typography color={"#FF2625"} fontWeight="600" fontSize={"26px"}>
        Fitness Club
      </Typography>

      <Typography fontWeight={700}
      sx={{ fontSize: { lg: '44px', xs: '40px'}
      }} 
      mb="0px" mt="10px">
        Sweet, Smile <br/> and Repeat 
      </Typography>

      <Typography fontSize={22} lineHeight='35px' mb={2}>
       <br/>
        Check out the most effective exercises
      </Typography>

      <Typography fontWeight={600}
      color="#FF2625"
      sx={{opacity: 0.1,
           display: {lg: 'block', xs: 'none'}
           }}
           fontSize="200px">
        Exercise
      </Typography>

      <Button variant="contained" color='error' href='#exercises'
      sx={{ backgroundColor: '#FF2625', 
      padding: '10px'}}>
        Explore Exercises
      </Button>

      <img src={HeroBannerImage} alt="banner" className='hero-banner-img' />
    </Box>
  );
}

export default HeroBanner