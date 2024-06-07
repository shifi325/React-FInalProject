import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleIcon from '@mui/icons-material/People';
import ProductList from '../screens/products/ProductList';
import { logout } from '../features/User/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [activeButton, setActiveButton] = useState('');
    const dispatch = useDispatch();
    const userStatus = useSelector(store => store.users.status);
    const navigate = useNavigate();

    const handleButtonClick = (button) => {
        if (button === 'logout') {
            navigate('/navbar')
            dispatch(logout());
        } else {
            if (button === 'login') navigate('/login');
            else if (button === 'cart') navigate('/ShoppingCart')
            else if (button === 'products') navigate('/navbar')
        else if(button==='orders')navigate('/OrderList')
            else if(button==='users')navigate('/UserList')
                else if(button==='addP')navigate('/AddProduct')

            }
        setActiveButton(button);
    };
    const renderButtons = () => {
      switch (userStatus) {
          case 'guest':
              return (
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                      <h1>guest</h1>
                      <IconButton
                          sx={iconButtonSx('login')}
                          onClick={() => handleButtonClick('login')}
                      >
                          <AccountCircleIcon />
                      </IconButton>
                      <IconButton
                          sx={iconButtonSx('cart')}
                          onClick={() => handleButtonClick('cart')}
                      >
                          <ShoppingCartIcon />
                      </IconButton>
                  </Box>
              );
          case 'customer':
              return (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                     <h1>customer</h1>

                                     <IconButton
                          sx={iconButtonSx('logout')}
                          onClick={() => handleButtonClick('logout')}
                      >
                          <LogoutIcon />
                      </IconButton>
                      <IconButton
                          sx={iconButtonSx('cart')}
                          onClick={() => handleButtonClick('cart')}
                      >
                          <ShoppingCartIcon />
                      </IconButton>
                      <IconButton
                          sx={iconButtonSx('orders')}
                          onClick={() => handleButtonClick('orders')}
                      >
                          <AssignmentIcon />
                      </IconButton>
                  </Box>
              );
          case 'admin':
              return (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                      <h1>admin</h1>

                      <IconButton
                          sx={iconButtonSx('logout')}
                          onClick={() => handleButtonClick('logout')}
                      >
                          <LogoutIcon />
                      </IconButton>
                      <IconButton
                          sx={iconButtonSx('orders')}
                          onClick={() => handleButtonClick('orders')}
                      >
                          <AssignmentIcon />
                      </IconButton>
                      <IconButton
                          sx={iconButtonSx('users')}
                          onClick={() => handleButtonClick('users')}
                      >
                          <PeopleIcon />
                      </IconButton>

                      <IconButton
                          sx={iconButtonSx('Add')}
                          onClick={() => handleButtonClick('addP')}
                      >
                          <AddIcon />
                      </IconButton>
                  </Box>
              );

          default:
              return null;
      }
  };
  const iconButtonSx = (button) => ({
      color: activeButton === button ? 'black' : 'inherit',
      mx: 1,
  });

  const typographySx = (button) => ({
      cursor: 'pointer',
      color: activeButton === button ? 'black' : 'inherit',
      mx: 1,
  });

  return (
    <div>
      <AppBar position="static" sx={{ borderRadius: 0, backgroundColor: 'pink' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {renderButtons()}
              </Box>
              <Box sx={{ position: 'absolute', right: '0%', transform: 'translateX(-50%)', paddingTop: '4px', marginTop: '4px' }}>
                  <img
                src="https://www.minene.net/static/version1714531758/frontend/Betanet/minene/he_IL/images/svg/logo.svg"
                alt="Logo"
                      style={{ height: 40 }}
                  />
              </Box>

          </Toolbar>
      </AppBar>   
    <ProductList></ProductList>
    </div>
  );
};

export default Navbar;