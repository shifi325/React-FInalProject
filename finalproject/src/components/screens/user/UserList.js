import axios from 'axios';
import { useEffect } from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsers } from '../../features/User/UserSlice';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';

const pinkTheme = createTheme({
  palette: {
    primary: {
      main: '#e91e63', // Pink color
    },
    secondary: {
      main: '#f8bbd0', // Light pink color
    },
    background: {
      default: '#fce4ec', // Very light pink color
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#f8bbd0', // Light pink background for the cards
          color: '#880e4f', // Dark pink color for text
        },
      },
    },
  },
});

export default function OrderList() {
  const arrFromRedux = useSelector((state) => state.users.arrUsers);
  const dispatch = useDispatch();
  console.log(arrFromRedux);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <ThemeProvider theme={pinkTheme}>
      <Box sx={{ backgroundColor: pinkTheme.palette.background.default, padding: 4, minHeight: '100vh' }}>
        <Typography variant="h4" align="center" color="primary" gutterBottom>
          All Users
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {arrFromRedux.length && arrFromRedux.map(item => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Card sx={{
                height: '100%',
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                backgroundColor: pinkTheme.palette.background.default,
                border: '1px solid #e91e63'
              }}>
                <CardHeader
                  avatar={
                    <Avatar
                      alt={item.name}
                      src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                      sx={{ bgcolor: pinkTheme.palette.primary.main }}
                    />
                  }
                  title={
                    <Typography variant="h6" sx={{ color: '#880e4f' }}>
                      {item.name}
                    </Typography>
                  }
                  subheader={
                    <Typography variant="body2" color="text.secondary">
                      {item.address}
                    </Typography>
                  }
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {item.email}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
