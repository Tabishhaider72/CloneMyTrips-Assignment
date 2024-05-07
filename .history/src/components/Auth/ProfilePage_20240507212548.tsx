// src/components/Auth/ProfilePage.tsx

import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';

const ProfilePage: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name');
  const email = searchParams.get('email');

  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 8, textAlign: 'center' }}>
        <Typography variant="h4">Profile</Typography>
        {name && <Typography variant="body1">Name: {name}</Typography>}
        {email && <Typography variant="body1">Email: {email}</Typography>}
      </Box>
    </Container>
  );
};

export default ProfilePage;
