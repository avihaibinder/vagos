import React from 'react';
import { 
  Box, 
  Grid as UnstableGrid2, 
  Paper, 
  Avatar, 
  Typography, 
  Container,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  ListItemIcon
} from '@mui/material';
import {
  Person as PersonIcon,
  Settings as SettingsIcon,
  Timeline as TimelineIcon,
  Logout as LogoutIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import RespirationBall from '../components/RespirationBall';

const Index = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear all authentication data
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    // Redirect to login page
    navigate('/login');
  };

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Main Container */}
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <UnstableGrid2 container spacing={3}>
          {/* User Profile Section */}
          <UnstableGrid2 item xs={12} md={3}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                <Avatar
                  sx={{ width: 100, height: 100, mb: 2, bgcolor: 'primary.main' }}
                >
                  {user.name?.[0]}
                </Avatar>
                <Typography variant="h6">{user.name}</Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>@{user.username}</Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <TimelineIcon />
                  </ListItemIcon>
                  <ListItemText primary="My Progress" />
                </ListItem>
                <Divider sx={{ my: 1 }} />
                <ListItem>
                  <Button
                    fullWidth
                    variant="outlined"
                    color="error"
                    startIcon={<LogoutIcon />}
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </ListItem>
              </List>
            </Paper>
          </UnstableGrid2>

          {/* Main Content Area */}
          <UnstableGrid2 item xs={12} md={6}>
            {/* Blog Feed */}
            <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>Latest Updates</Typography>
              <UnstableGrid2 container spacing={2}>
                {[1, 2, 3].map((blog) => (
                  <UnstableGrid2 item xs={12} key={blog}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6">Blog Title {blog}</Typography>
                        <Typography variant="body2" color="textSecondary">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                      </CardContent>
                    </Card>
                  </UnstableGrid2>
                ))}
              </UnstableGrid2>
            </Paper>
          </UnstableGrid2>

          {/* Respiration Menu */}
          <UnstableGrid2 item xs={12} md={3}>
            <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>Respiration Exercise</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <RespirationBall />
              </Box>
              <List>
                <ListItem>
                  <ListItemText 
                    primary="Daily Goal" 
                    secondary="5 minutes completed"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Weekly Progress" 
                    secondary="3/7 days"
                  />
                </ListItem>
              </List>
            </Paper>
          </UnstableGrid2>
        </UnstableGrid2>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: 'primary.main',
          color: 'white'
        }}
      >
        <Container maxWidth="xl">
          <UnstableGrid2 container spacing={3}>
            <UnstableGrid2 item xs={12} sm={4}>
              <Typography variant="h6">About Us</Typography>
              <Typography variant="body2">
                Helping you achieve mindfulness through breathing exercises.
              </Typography>
            </UnstableGrid2>
            <UnstableGrid2 item xs={12} sm={4}>
              <Typography variant="h6">Quick Links</Typography>
              <Typography variant="body2">Home</Typography>
              <Typography variant="body2">Exercises</Typography>
              <Typography variant="body2">Contact</Typography>
            </UnstableGrid2>
            <UnstableGrid2 item xs={12} sm={4}>
              <Typography variant="h6">Contact</Typography>
              <Typography variant="body2">Email: support@example.com</Typography>
              <Typography variant="body2">Phone: (555) 123-4567</Typography>
            </UnstableGrid2>
          </UnstableGrid2>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;