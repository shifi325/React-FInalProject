import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import productSlice from '../features/Product/ProductSlice';
import ordersSlice from '../features/Order/OrderSlice';

import userSlice from '../features/User/UserSlice';


export const store = configureStore({
reducer:{
    products:productSlice,
    orders: ordersSlice,
    users: userSlice}
}
);
