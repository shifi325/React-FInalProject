import * as React from 'react';
import { fetchAllOrders,getOrderById } from '../../features/Order/OrderSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import Order from './Order'

export default function OrderList() {
    const userStatus = useSelector(state => state.users.status);
    const userTzz=useSelector(s=>s.users.currentUser)
  const allOrders = useSelector(state => state.orders.arrOrders);
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchAllOrders());
  }, [dispatch]);
  const filterArrOrders = userStatus === 'customer' ? allOrders.filter(order => order.userName === userTzz.name) : allOrders;

  console.log(filterArrOrders)

  console.log(userTzz)
  return (
    <Container>
      <Grid container spacing={2}>

        {filterArrOrders.map(order => (
          <Grid item key={order.id} xs={12} sm={6} md={4}>
            <Order order={order} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
