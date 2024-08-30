import React from 'react';
import DashboardLayout from "@/components/DashboardLayout";
import Grid from '@mui/material/Grid2';
import {
  Card, CardContent, Typography, Button, Avatar, Divider,
  LinearProgress, Box, List, ListItem, ListItemText,
  ListItemAvatar, IconButton
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Profile() {
  return (
    <DashboardLayout>
      <Grid container spacing={3}>
        {/* Profile Card */}
        <Grid item xs={12} sm={6} md={4}> {/* Use sm and md to control the layout on different screen sizes */}
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center">
                <Avatar alt="Christina Barber" src="/path/to/avatar.jpg" />
                <Box ml={2}>
                  <Typography variant="h6">Christina Barber</Typography>
                  <Typography variant="body2" color="textSecondary">Plano, TX</Typography>
                </Box>
              </Box>
              <Typography variant="body2" mt={2}>
                I like sweets and podcasts and comedy and books. That's who I am, summed up. Can't go anywhere without a good book in my backpack.
              </Typography>
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Typography variant="body2">Followers: 11</Typography>
                <Typography variant="body2">Read this year: 25</Typography>
                <Typography variant="body2">Badges: 2</Typography>
              </Box>
              <Box mt={2}>
                <Button variant="contained" color="primary">Follow</Button>
                <Button variant="outlined" color="primary" sx={{ ml: 2 }}>Message</Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Books Overall */}
        <Grid item xs={12} sm={6} md={8}> {/* Ensuring this also respects sm and md layouts */}
          <Card>
            <CardContent>
              <Typography variant="h6">Books Overall</Typography>
              <Divider />
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Box>
                  <Typography variant="body2">Already read</Typography>
                  <Typography variant="h6">156 books</Typography>
                </Box>
                <Box>
                  <Typography variant="body2">In progress</Typography>
                  <Typography variant="h6">15 books</Typography>
                </Box>
                <Box>
                  <Typography variant="body2">Want to read</Typography>
                  <Typography variant="h6">230 books</Typography>
                </Box>
                <Box>
                  <Typography variant="body2">Won't finish</Typography>
                  <Typography variant="h6">5 books</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>


        {/* Currently Reading */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h6">Currently reading</Typography>
                <Button variant="text">View all</Button>
              </Box>
              <Divider />
              <Box display="flex" mt={2}>
                <img src="/path/to/book-cover.jpg" alt="Book cover" style={{ width: 60, height: 90 }} />
                <Box ml={2}>
                  <Typography variant="body1">Love and Other Flights Delays</Typography>
                  <Typography variant="body2" color="textSecondary">Denise Williams</Typography>
                  <LinearProgress variant="determinate" value={50} sx={{ mt: 2 }} />
                  <Button variant="contained" size="small" color="primary" sx={{ mt: 1 }}>In progress</Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Current Challenges */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h6">Current challenges</Typography>
                <Button variant="text">View all</Button>
              </Box>
              <Divider />
              <Box mt={2}>
                <Typography variant="body1">Genre Explorer</Typography>
                <LinearProgress variant="determinate" value={20} />
                <Box display="flex" justifyContent="space-between" mt={1}>
                  <Button variant="outlined" size="small">All ages</Button>
                  <Button variant="outlined" size="small">Beginner</Button>
                  <Button variant="outlined" size="small">All genres</Button>
                </Box>
                <Typography variant="body2" color="textSecondary" mt={2}>Days left: 124</Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>Details</Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Latest Reviews */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h6">Latest reviews</Typography>
                <Button variant="text">21 ratings</Button>
              </Box>
              <Divider />
              <List>

                <ListItem
                  secondaryAction={
                    <IconButton edge="end">
                      <MoreVertIcon />
                    </IconButton>
                  }>
                  <ListItemAvatar>
                    <Avatar>
                      <img src="/path/to/book-cover.jpg" alt="Book cover" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Love and Other Flights Delays"
                    secondary="Denise Williams"
                  />
                </ListItem>

                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemText primary="Book Status" secondary="In progress" />
                  <Box display="flex" alignItems="center">
                    {[...Array(5)].map((_, index) => (
                      <StarIcon key={index} />
                    ))}
                  </Box>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </DashboardLayout>
  );
}
