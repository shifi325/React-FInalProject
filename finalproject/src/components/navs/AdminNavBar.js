// import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import LogoutIcon from '@mui/icons-material/Logout';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import PeopleIcon from '@mui/icons-material/People';
// import { logout } from '../features/User/UserSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// const AdminNavBAr = () => {
//     const [activeButton, setActiveButton] = useState('');
//     const dispatch = useDispatch();
//     const userStatus = useSelector(store => store.users.status);
//     const navigate = useNavigate();

//     const handleButtonClick = (button) => {
//       console.log(userStatus)

//         if (button === 'logout') {
//             navigate('/ProductList')
//             dispatch(logout());
//         } else {
//             if (button === 'login') navigate('/login');
//             else if (button === 'cart') navigate('/ShopCart')
//             else if (button === 'products') navigate('/ProductList')
//         else if(button==='orders')navigate('/OrderLst')
//             else if(button==='users')navigate('/UserList')

//         }
//         setActiveButton(button);
//     };

//     const renderButtons = () => {
//         switch (userStatus) {
//             case 'guest':
//                 return (
                
//                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                       <h1>guest</h1>
//                         <IconButton
//                             sx={iconButtonSx('login')}
//                             onClick={() => handleButtonClick('login')}
//                         >
//                             <AccountCircleIcon />
//                         </IconButton>
//                         <IconButton
//                             sx={iconButtonSx('cart')}
//                             onClick={() => handleButtonClick('cart')}
//                         >
//                             <ShoppingCartIcon />
//                         </IconButton>
//                     </Box>
//                 );
//             case 'customer':
//                 return (
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                         <h1>customer</h1>
//                         <IconButton
//                             sx={iconButtonSx('logout')}
//                             onClick={() => handleButtonClick('logout')}
//                         >
//                             <LogoutIcon />
//                         </IconButton>
//                         <IconButton
//                             sx={iconButtonSx('cart')}
//                             onClick={() => handleButtonClick('cart')}
//                         >
//                             <ShoppingCartIcon />
//                         </IconButton>
//                         <IconButton
//                             sx={iconButtonSx('orders')}
//                             onClick={() => handleButtonClick('orders')}
//                         >
//                             <AssignmentIcon />
//                         </IconButton>
//                     </Box>
//                 );
//             case 'admin':
//                 return (
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                   <h1>admin</h1>
//                         <IconButton
//                             sx={iconButtonSx('logout')}
//                             onClick={() => handleButtonClick('logout')}
//                         >
//                             <LogoutIcon />
//                         </IconButton>
//                         <IconButton
//                             sx={iconButtonSx('orders')}
//                             onClick={() => handleButtonClick('orders')}
//                         >
//                             <AssignmentIcon />
//                         </IconButton>
//                         <IconButton
//                             sx={iconButtonSx('users')}
//                             onClick={() => handleButtonClick('users')}
//                         >
//                             <PeopleIcon />
//                         </IconButton>
//                     </Box>
//                 );

//             default:
//                 return null;
//         }
//     };
//     const iconButtonSx = (button) => ({
//         color: activeButton === button ? 'black' : 'inherit',
//         mx: 1,
//     });

//     const typographySx = (button) => ({
//         cursor: 'pointer',
//         color: activeButton === button ? 'black' : 'inherit',
//         mx: 1,
//     });

//     return (
      
//         <AppBar position="static" sx={{ borderRadius: 0, backgroundColor: '#0066CC' }}>

//             <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
//                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                     {renderButtons()}
//                 </Box>
//                 <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', paddingTop: '4px', marginTop: '4px' }}>
//                     <img
//                         src="https://upload.wikimedia.org/wikipedia/commons/1/17/Playmobil_logo_1991.svg"
//                         alt="Logo"
//                         style={{ height: 60 }}
//                     />
//                 </Box>
//                 <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
//                     <Typography
//                         variant="h6"
//                         sx={typographySx('products')}
//                         onClick={() => handleButtonClick('products')}
//                     >
//                         Products
//                     </Typography>
//                 </Box>
//             </Toolbar>
//         </AppBar>
//     );
// };

// export default AdminNavBAr;




import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import ProductList from '../screens/products/ProductList';
import LogIn from '../screens/user/LogIn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch } from 'react-redux';
import { logout } from '../features/User/UserSlice';



const pages = ['ProductList', 'orders','UserList'];


function AdminNavBar() {
  const dispatch = useDispatch();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  let nav=useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);

  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const usrLogin=()=>{
dispatch(logout())
    nav('/guest');
  }

  const ShopCart=()=>{
    nav('/ShopCart');
  }

  return (
    <div className='main1'>
    <AppBar position="relative" >
      <Container maxWidth="xl"  sx={{backgroundColor:"lightpink"}}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img 
                src="https://www.minene.net/static/version1714531758/frontend/Betanet/minene/he_IL/images/svg/logo.svg"
                alt="logo"
                loading="lazy"
                width={80}
            />
            
          </Typography>
   

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              
            </Menu>
            
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img 
                src="https://www.minene.net/static/version1714531758/frontend/Betanet/minene/he_IL/images/svg/logo.svg"

                alt="logo"
                loading="lazy"
                width={100}
            />
           
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
            {pages.map((page) => (
              <Button
                key={page}
                // onClick={prdLst}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
<h3>manager</h3>


          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Log Out">
              <IconButton onClick={usrLogin} sx={{ p: 0,width:50,height:50}}
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"              
              >
                <AccountCircle />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {pages.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <ProductList></ProductList>
    </div>
  );
}
export default AdminNavBar;





