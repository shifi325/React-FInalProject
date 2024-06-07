import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts } from "../../features/Product/ProductSlice";
import Product from './Product';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { pink } from '@mui/material/colors';

const ProductList = () => {
  const myUser = useSelector(s => s.users.status);
  let bool = 0;
  
  const arrFromRedux = useSelector(s => s.products.arrProducts);
  const [filter1, setFilter1] = useState([]);
  const statusFetchData = useSelector(s => s.products.status);
  if (myUser === "admin")
    bool = 1;
  let name = "";
  const dispatch = useDispatch();
  let nav = useNavigate();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  useEffect(() => {
    setFilter1(arrFromRedux);
  }, [arrFromRedux]);

  return (
    <Container>
      <Box sx={{ textAlign: 'center', mt: 1}}>
        <TextField
          variant="outlined"
          placeholder="חיפוש לפי שם"
          onChange={(e) => name = e.target.value}
          sx={{ mb: 2, bgcolor: pink[50], '& .MuiOutlinedInput-root': { borderRadius: 4 } }}
        />
        <Button
          variant="contained"
          onClick={() => { setFilter1(arrFromRedux.filter(i => i.name.includes(name))) }}
          sx={{ ml: 2, bgcolor: pink[500], '&:hover': { bgcolor: pink[700] } }}
        >
          סינון לפי שם
        </Button>
        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            onClick={() => { setFilter1(arrFromRedux.slice().sort((a, b) => a.price - b.price)) }}
            sx={{ mr: 2, bgcolor: pink[500], '&:hover': { bgcolor: pink[700] } }}
          >
            סינון לפי מחיר
          </Button>
          <Button
            variant="contained"
            onClick={() => { setFilter1(arrFromRedux) }}
            sx={{ bgcolor: pink[500], '&:hover': { bgcolor: pink[700] } }}
          >
            ביטול סינונים
          </Button>
        </Box>
      </Box>

      {statusFetchData === 'pending' && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {statusFetchData === 'fulfilled' && (
        <Grid container spacing={3} sx={{ mt: 4 }}>
  {filter1.map((item) => (
    <Grid item xs={12} sm={6} md={4} key={item.id} sx={{ mb: 4 }}> {/* הוספת mb: 4 */}
      <Product myProduct={item} />
    </Grid>
  ))}
</Grid>

      )}

      {statusFetchData === 'rejected' && (
        <Box sx={{ mt: 4 }}>
          <Alert severity="error">Failed to load products</Alert>
        </Box>
      )}
    </Container>
  );
}

export default ProductList;
