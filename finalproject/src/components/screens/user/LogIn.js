import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button,Avatar, Typography, Box,Link } from '@mui/material';
import {useNavigate} from 'react-router-dom'
import { login,admin } from '../../features/User/UserSlice';

const LogIn = () => {
    let nav = useNavigate()
  const dispatch = useDispatch();
  const myUser=useSelector(s=>s.users.currentUser)
  const [formData, setFormData] = useState({ tz: '', name: '', password: '', telephone: '' ,address:''});
  const { loading, error } = useSelector((state) => state.users);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      const result = await dispatch(login({ tz: formData.tz, password: formData.password }));
      if(formData.tz=='325770659'&&formData.password=='325770659')
        dispatch(admin())  
    // else 
    // if(result.meta.requestStatus === 'fulfilled'){
            nav('/navbar')
      // }   
      // else
      //    nav('/signin')

    
  };
  


  return (
 
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'lightpink' }}>
                {/* <LockOutlinedIcon /> */}
              </Avatar>
              <Typography component="h1" variant="h5" >
                Log In
              </Typography>
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 3, boxShadow: 3 }}>
      <Typography variant="h5" component="h2" gutterBottom>
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="ID Number"
          variant="outlined"
          fullWidth
          name="tz"
          value={formData.tz}
          onChange={handleInputChange}
          margin="normal"
          required
        />
    
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button
        disabled={loading === 'loading'}
              color='inherit'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,bgcolor:'lightpink' }}
            >
              Sign In
            </Button>

      </form>
                       <Link href="\signIn" style={{ color: 'pink' ,textDecoration:'none'}}                >
                   {"Don't have an account? Sign Up"}
                 </Link>
    </Box>             </Box>

  );
};

export default LogIn;

// import React,{useState} from 'react';
// import { useForm } from 'react-hook-form';

// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { getUserById, login,setCurrentUser } from '../../features/User/UserSlice'
// import { useSelector, useDispatch, Provider } from 'react-redux'
// import { useNavigate } from "react-router-dom";
// import { colors } from '@mui/material';
// import { lightGreen, pink } from '@mui/material/colors';


//   // TODO remove, this demo shouldn't need to reset the theme.
  
//   const defaultTheme = createTheme();
// export default function LogIn() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [user, setUser] = useState({ tz: "", password: "" });
//   const arrFromRedux = useSelector(state => state.users.arrUsers)

//     let myUser=useSelector(s=>s.users.currentUser)
//     const dis = useDispatch();
//     let nav = useNavigate()

//     const onSubmit = (event) => {
//         // event.preventDefault();
//         // const data = new FormData(event.currentTarget);
//         dis(login({ tz: event.tz, password: event.password }))
//         // console.log(response.requestStatus==='fulfilled')
//         if(myUser!=null)
//         nav('/usernav');
//       else
//       nav('signin')
//       };
//       return (<>
//        <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'lightpink' }}>
//             {/* <LockOutlinedIcon /> */}
//           </Avatar>
//           <Typography component="h1" variant="h5" >
//             Log In
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
//             <TextField
//               bgcolor="lightpink"
//               margin="normal"
//               required
//               fullWidth
//               id=" tz"
//               label=" tz"
//               name="  tz"
//               autoComplete=" tz"
//               onChange={(e) => setUser({  tz: e.target.value, password: user.password })}

//               autoFocus
//               InputLabelProps={{
//                 style: { color: 'black' }, // Inline style for label
//               }}
//             />
//             <TextField  
//               InputLabelProps={{
//                 style: { color: 'black' }, // Inline style for label
                
//               }}
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               onChange={(e) => setUser({  tz: user. tz, password: e.target.value })}

//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="default" />}
//               label="Remember me"
//             />
//             <Button
//               color='inherit'
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2,bgcolor:'lightpink' }}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item  >
//                 <Link href="\signIn" style={{ color: 'pink' ,textDecoration:'none'}}                >
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
  
//  </> )
// }

 