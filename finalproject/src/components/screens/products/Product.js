import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { deleteProduct } from '../../features/Product/ProductSlice';
import { addToShoppingCart } from '../../features/Order/OrderSlice';
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

export default function Product(props) {
  let p = props.myProduct;
  const userStatus = useSelector(store => store.users.status);
  const [quantity, setQuantity] = useState(1);
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  let nav = useNavigate();

  const addToCart = () => {
    dispatch(addToShoppingCart({ p, quantity }));
    setShowCart(true);
    setTimeout(() => {
      setShowCart(false);
    }, 5000);
  };

  useEffect(() => {
    if (showCart) {
      const timer = setTimeout(() => {
        setShowCart(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showCart]);

  const handleMoreDetails = () => {
    nav('/productToAdd', { state: { p } });
  };

  const handleDel = (id) => {
    dispatch(deleteProduct(id))
      .unwrap()
      .then(() => {
        alert("Product deleted successfully");
      })
      .catch((error) => {
        console.error("Failed to delete the product: ", error);
        alert("Failed to delete the product");
      });
  };

  const handleEdit = () => {
    nav('/UpdateProduct/', { state: { p } });
  };

  return (
    <ThemeProvider theme={pinkTheme}>
      <Box sx={{  padding:3, minHeight: '80vh' }}>
        <Card sx={{ width: '120%', maxWidth: 250, borderRadius: '12px', boxShadow: '0 4px 8px rgba(0,0,0,0)', border: '1px solid #e91e63' }}>
          <CardHeader title={p.description} />
          <CardMedia component="img" height='100%' image={p.imgUrl} />
          <CardContent>
            {userStatus === 'admin' ? (
              <div>
                <IconButton onClick={handleEdit}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDel(p.id)}>
                  <DeleteForeverIcon />
                </IconButton>
              </div>
            ) : (
              <button onClick={handleMoreDetails}>More Details</button>
            )}
          </CardContent>
          <ImageListItemBar
            sx={{
              border: '2px solid pink', // Add a pink border
              borderTop: 0,
              backgroundColor: pinkTheme.palette.secondary.main, // Light pink background for the bar
              color: '#880e4f', // Dark pink color for text
            }}
            position="below"
            title={p.name}
            subtitle={"₪" + p.price}
          />
        </Card>
      </Box>
    </ThemeProvider>
  );
}
