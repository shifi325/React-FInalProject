import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Password } from '@mui/icons-material';
import { postUser} from '../../features//User/UserSlice';

const SignIn = () => {
    const [user, setUser] = useState({ tz:" ",name:" ", password:" " ,telephone:" ",address:""});
    const arrU = useSelector(x => x.users.arrUser);
    const currentUser = useSelector(u => u.users.currentUser);
    const dispatch = useDispatch();
    const nav=useNavigate()
const defaultTheme = createTheme();

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors, dirtyFields, isValid },
    } = useForm({ mode: 'onBlur' });

    const onSubmit = (data) => {

        dispatch(postUser({tz:data.tz, name:data.name, password:data.password, telephone:data.telephone,address:data.address}))
        console.log("add user")
        console.log(currentUser)
         nav('/navbar')
        // כאן תוכל להוסיף את הלוגיקה שלך לטיפול בהגשת הטופס
        // לדוג', שליחת המידע לשרת או עדכון המצב באפליקציה
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
          Sign In
        </Typography>
<Box sx={{ maxWidth: 400, margin: 'auto', padding: 3, boxShadow: 3 }}>
<Typography variant="h5" component="h2" gutterBottom>
</Typography>         
            <form onSubmit={handleSubmit(onSubmit)}>
                <>
                    <TextField
                        id="filled-basic"
                        label="tz:"
                        variant="outlined"
                        fullWidth
                        margin="normal"                        onChange={(e) => setUser({ tz: e.target.value, name:user.name, password: user.password, telephone:user.telephone ,address:user.address})}
                        {...register("tz", { required: "field is required", pattern: /^\d{9}$/ })}
                    />
                    {errors.tz && <p>The id number is incorrect</p>}
                    {dirtyFields.tz && <p>✔️</p>}
                </>
                <>
                    <TextField
                        id="filled-basic"
                        label="name:"
                        variant="outlined"
                        fullWidth
                        margin="normal"                        onChange={(e) => setUser({ tz: user.tz, name:e.target.value, password: user.password, telephone:user.telephone,address:user.address})}
                        {...register("name", { required: "field is required"})}
                    />
                    {errors.name?.type === 'required' && <p>{errors.name.message}</p>}
                    {dirtyFields.name && <p>✔️</p>}
                </>
                <>
                    <TextField
                        id="filled-basic"
                        label="password:"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"                        onChange={(e) => setUser({ tz:user.tz,name:user.name, password:e.target.value, telephone:user.telephone,address:user.address})}
                        {...register("password",{required: "field is required"})}
                    />
                   {errors.password?.type === 'required' && <p>{errors.password.message}</p>}
                    {dirtyFields.password && <p>✔️</p>}
                </>
                <>
                    <TextField
                        id="filled-basic"
                        label="telephone:"
                        type="telephone"
                        variant="outlined"
                        fullWidth
                        margin="normal"                        onChange={(e) => setUser({ tz: user.tz,name:user.name, password: user.password, telephone:e.target.value,address:user.address})}
                        {...register("telephone", {
                            required: 'enter a phone number',
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: 'the phone number is incorrect',
                            },
                        })}
                    />
                    {errors.telephone && <p>{errors.telephone.message}</p>}
                    {dirtyFields.telephone && <p>✔️</p>}
                </>
                <>
                    <TextField
                              variant="outlined"
                              fullWidth
                              margin="normal"
                        id="filled-basic"
                        label="address:"
                        onChange={(e) => setUser({ tz: user.tz, name:user.name, password: user.password, telephone:user.telephone,address:e.target.value})}
                        {...register("address", { required: "field is required"})}
                    />
                    {errors.address?.type === 'required' && <p>{errors.address.message}</p>}
                    {dirtyFields.name && <p>✔️</p>}
                </>
               
                <Button
              color='inherit'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,bgcolor:'lightpink' }}
            >
              Sign In
            </Button> 
                       </form>
            </Box>            </Box>

        
    );
}

export default SignIn;

// import * as React from 'react';
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
// import { useSelector, useDispatch } from 'react-redux'
// import { useNavigate } from "react-router-dom";
// import {postUser} from '../../features/User/UserSlice';
// import { Password } from '@mui/icons-material';
// const defaultTheme = createTheme();

// export default function SignIn() {

//   let dis= useDispatch()

//   let userAdd={
//       tz:"",
//       name:"",
//       Password:"",
//       telephone:"",
//       city:"",
//       street:"",
//       houseNumber:""
//   }
  
//       const add=(e)=>{
//           e.preventDefault()// מבטל ברירת מחדל 
//           dis(postUser(userAdd))
//       }
//   return (
// <ThemeProvider theme={defaultTheme} onSubmit={handleSubmit(onSubmit)}>
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
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign Up
//           </Typography>
//           <Box component="form" noValidate 
//            sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="tz"
//                   required
//                   fullWidth
//                   id="tz"
//                   label=" tz"
//                   autoFocus
//                   onChange={(e) => setUser({ tz: e.target.value, name:user.name, password: user.password, telephone:user.telephone ,city:user.city,street:user.street,houseNumber:user.houseNumber})}
//                   {...register("tz", { required: "field is required", pattern: /^\d{9}$/ })}
//                   InputLabelProps={{
//                     style: { color: 'black' }, // Inline style for label
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="name"
//                   required
//                   fullWidth
//                   id="name"
//                   label=" name"
//                   autoFocus
//                   onChange={(e) => setUser({ tz: user.tz, name:e.target.value, password: user.password, telephone:user.telephone ,city:user.city,street:user.street,houseNumber:user.houseNumber})}
//                 {...register("name", { required: "field is required", pattern: /^[A-Za-z]+$/i })}
//                   InputLabelProps={{
//                     style: { color: 'black' }, // Inline style for label
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                    onChange={(e) => setUser({ tz:user.tz,name:user.name, password:e.target.value, telephone:user.telephone ,city:user.city,street:user.street,houseNumber:user.houseNumber})}
//                          {...register("password",{required: "field is required"})}
//                   InputLabelProps={{
//                     style: { color: 'black' }, // Inline style for label
//                   }}
                  
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="telephone"
//                   label="telephone"
//                   type="telephone"
//                   id="telephone"
//                   autoComplete="new-telephone"
//                   onChange={(e) => setUser({ tz: user.tz,name:user.name, password: user.password, telephone:e.target.value ,city:user.city,street:user.street,houseNumber:user.houseNumber})}
//                                            {...register("telephone", {
//                                                required: 'enter a phone number',
//                                                pattern: {
//                                                    value: /^[0-9]{10}$/,
//                                                    message: 'the phone number is incorrect',
//                                                },
//                                            })}
//                   InputLabelProps={{
//                     style: { color: 'black' }, // Inline style for label
//                   }}
                  
//                 />
//               </Grid>

//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="city"
//                   label="city"
//                   type="city"
//                   id="city"
//                   autoComplete="new-city"
//                   onChange={(e) => setUser({ tz: user.tz, name:user.name, password: user.password, telephone:user.telephone ,city:e.target.value,street:user.street,houseNumber:user.houseNumber})}
//                 {...register("name", { required: "field is required", pattern: /^[A-Za-z]+$/i })}
//                   InputLabelProps={{
//                     style: { color: 'black' }, // Inline style for label
//                   }}
                  
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="street"
//                   label="street"
//                   type="street"
//                   id="street"
//                   autoComplete="new-street"
//                   onChange={(e) => setUser({ tz: user.tz, name:user.name, password: user.password, telephone:user.telephone ,city:user.city,street:e.target.value,houseNumber:user.houseNumber})}
//                 {...register("name", { required: "field is required", pattern: /^[A-Za-z]+$/i })}
//                   InputLabelProps={{
//                     style: { color: 'black' }, // Inline style for label
//                   }}
                  
//                 />
//               </Grid>

//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="houseNumber"
//                   label="houseNumber"
//                   type="houseNumber"
//                   id="houseNumber"
//                   autoComplete="new-houseNumber"
//                   onChange={(e) => setUser({ tz: user.tz,name:user.name, password: user.password, telephone:user.telephone ,city:user.city,street:user.street,houseNumber:e.target.value})}
//                                            {...register("telephone", {
//                                                required: 'enter a phone number',
//                                                pattern: {
//                                                    value: /^[0-9]$/,
//                                                    message: 'the number number is incorrect',
//                                                },
//                                            })}
//                   InputLabelProps={{
//                     style: { color: 'black' }, // Inline style for label
//                   }}
                  
//                 />
//               </Grid>
//             </Grid>
//             <Button
//             color='inherit'
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2, bgcolor:'lightpink' }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link  href="\login" style={{ color: 'pink' ,textDecoration:'none'}} >
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// }
// export default SignIn;

