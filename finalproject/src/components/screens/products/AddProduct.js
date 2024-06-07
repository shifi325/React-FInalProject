
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
import { Description, Password } from '@mui/icons-material';
import { postUser} from '../../features//User/UserSlice';
import { postProduct } from "../../features/Product/ProductSlice";

const AddProduct = () => {
    const [product, setProduct] = useState({name:" ", description:" " ,price:" ",imgUrl:""});
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

        dispatch(postProduct({name:data.name, description:data.description, price:data.price,imgUrl:data.imgUrl}))
        console.log("add product")
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
          Add Product
        </Typography>
<Box sx={{ maxWidth: 400, margin: 'auto', padding: 3, boxShadow: 3 }}>
<Typography variant="h5" component="h2" gutterBottom>
</Typography>         
            <form onSubmit={handleSubmit(onSubmit)}>

                <>
                    <TextField
                        id="filled-basic"
                        label="name:"
                        variant="outlined"
                        fullWidth
                        margin="normal"                        onChange={(e) => setProduct({ name:e.target.value, description: product.description, price:product.price,imgUrl:product.imgUrl})}
                        {...register("name", { required: "field is required" })}
                    />
                    {errors.name?.type === 'required' && <p>{errors.name.message}</p>}
                    {dirtyFields.name && <p>✔️</p>}
                </>
                <>
                    <TextField
                        id="filled-basic"
                        label="description:"
                        type="description"
                        variant="outlined"
                        fullWidth
                        margin="normal"                        onChange={(e) => setProduct({ name:product.name, description:e.target.value, price:product.price,imgUrl:product.imgUrl})}
                        {...register("description",{required: "field is required"})}
                    />
                   {errors.password?.type === 'required' }
                    {dirtyFields.password && <p>✔️</p>}
                </>
                <>
                    <TextField
                        id="filled-basic"
                        label="price:"
                        type="price"
                        variant="outlined"
                        fullWidth
                        margin="normal"                        onChange={(e) => setProduct({ name:product.name, description: product.description, price:e.target.value,imgUrl:product.imgUrl})}
                        {...register("price", {
                            required: 'enter a price ',
    
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
                        label="imgUrl:"
                        onChange={(e) => setProduct({ name:product.name, description: product.description, price:product.price,imgUrl:e.target.value})}
                        {...register("imgUrl", { required: "field is required"})}
                    />
                    {dirtyFields.name && <p>✔️</p>}
                </>
               
                <Button
              color='inherit'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,bgcolor:'lightpink' }}
            >
              Add
            </Button> 
                       </form>
            </Box>            </Box>

        
    );
}

export default AddProduct;












// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useForm } from 'react-hook-form';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useState, useEffect } from "react";
// import { postProduct, getProductById, putProduct } from "../../features/Product/ProductSlice";

// const defaultTheme = createTheme();

// export default function AddProduct() {
//   const { id } = useParams();
//   const product = useSelector((state) => state.products.currentproduct);
//   const dispatch = useDispatch();
//   let nav = useNavigate();
//   const add = id ? false : true
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     price: '',
//     imgUrl: '',

//   });



//   useEffect(() => {
//     if (id) {
//       dispatch(getProductById(id));
//     }
//   }, [id, dispatch]);

//   useEffect(() => {
//     if (!add && product) {
//       setFormData({
//         name: product.name || '',
//         description: product.description || '',
//         price: product.price || '',
//         imgUrl: product.imgUrl || '',

//       });
//     }
//   }, [product]);

//   const {
//     register,
//     handleSubmit,
//     getValues,
//     formState: { errors, dirtyFields, isValid },
//   } = useForm({ mode: 'onBlur' });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const onSubmit = (event) => {
//     event.preventDefault();
//     if (product) {
//       dispatch(putProduct({ id, newProduct: formData }));
//     } else {
//       dispatch(postProduct(formData));
//     }
//     nav('/ProductList');
//   };

//   const buttonName = product ? 'Update' : 'Add';
//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Grid container component="main" sx={{ height: '50vh', width: '60vw', marginLeft: '20vw' }}>
//         <CssBaseline />
//         <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             backgroundImage: `url(${!add && product ? product.imgUrl : 'https://gregcafe.co.il/wp-content/uploads/2023/03/%D7%92%D7%91%D7%A2%D7%AA-%D7%A9%D7%9E%D7%95%D7%90%D7%9C-1.jpg'})`,
//             backgroundRepeat: 'no-repeat',
//             backgroundColor: (t) =>
//               t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Typography component="h1" variant="h5">
//               {buttonName} Product
//             </Typography>
//             <Box component="form" onSubmit={(e) => handleSubmit(onSubmit(e))} sx={{ mt: 1 }}>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="name"
//                 label="Name"
//                 name="name"
//                 autoComplete="name"
//                 value={add ? '' : formData.name}
//                 onChange={handleChange}
//                 autoFocus
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="description"
//                 label="Description"
//                 name="description"
//                 autoComplete="description"
//                 value={add ? '' : formData.description}
//                 onChange={handleChange}
//               />

//               <TextField
//                 margin="normal"
//                 type='number'
//                 required
//                 fullWidth
//                 id="price"
//                 label="Price"
//                 name="price"
//                 autoComplete="price"
//                 value={add ? '' : formData.price}
//                 onChange={handleChange}

//               />


//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="imgUrl"
//                 label="Image URL"
//                 name="imgUrl"
//                 autoComplete="imgUrl"
//                 value={add ? '' : formData.imgUrl}
//                 onChange={handleChange}

//               />
        
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}

//               >
//                 {buttonName}
//               </Button>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }