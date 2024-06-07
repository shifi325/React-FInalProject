import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { useState } from "react";

function Order({ order = {} }) {
  const { userName, address, cart = [] } = order;
  const [TotalPrice, setTotalPrice] = useState(0);

  return (
    <Card sx={{
      maxWidth: 345,
      margin: 2,
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      backgroundColor: '#FCE4EC', // Light pink background
      border: '1px solid #E91E63' // Pink border
    }}>
      <CardContent>
        <Typography variant="h6" component="div" sx={{ color: '#E91E63' }}>
          {userName || "Unknown User"}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Address: {address || "No address provided"}
        </Typography>

        {cart.length > 0 ? (
          cart.flat().map((item, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
              <CardMedia
                component="img"
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: '8px',
                  marginRight: 2,
                  objectFit: 'cover' // Ensures the image fits well
                }}
                image={item.p.imgUrl}
                alt={item.p.name}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: 'calc(100% - 120px)' }}>
                <Typography component="div" variant="h6" sx={{ color: '#AD1457' }}>
                  {item.p.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.p.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Quantity: {item.quantity}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: {item.p.price} ₪
                </Typography>
              </Box>
            </Box>
          ))
        ) : (
          <Typography variant="body2" color="text.secondary">
            No items in cart
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default Order;
