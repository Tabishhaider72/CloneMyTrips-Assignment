import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const ProfilePage: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 8, textAlign: 'center' }}>
        <Typography variant="h4">Profile Page</Typography>
        <Typography variant="body1">Welcome to your profile page!</Typography>
      </Box>
    </Container>
  );
};

export default ProfilePage;
