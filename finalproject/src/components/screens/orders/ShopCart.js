import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import { emptyCart, removeFromShoppingCart } from '../../features/Order/OrderSlice'
import { useNavigate } from "react-router-dom";
const ShopCart=(props)=> {

    const small = props.show
    const [order, setOrder] = useState(useSelector(c => c.orders.cart))
    const [sum, setSum] = useState(useSelector(c => c.orders.price))
    const cartArr = useSelector((state) => state.orders.cart);
    const user=useSelector(c=>c.users.currentUser)
    const userS=useSelector(c=>c.users.status)
console.log(cartArr)
    const dis = useDispatch()
    const nav=useNavigate()

    const del = (p) => {
        dis(removeFromShoppingCart(p))
        setOrder(order.filter(item => item !== p));
    }

    const leave = () => {
        dis(emptyCart());
        nav('/navbar')

    }
    const payment=()=>{
        if(userS=='customer')
        nav('/payment');
        else{
            alert('you have to sign in')
          nav('/login')}
    }
    return (<div className="warrp" >
        <h2>Shopping Cart</h2>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">price</TableCell>
                        {small == 'false' && <TableCell align="center">available</TableCell>}
                        <TableCell align="center">quantity</TableCell>
                        {small == 'false' && <TableCell align="center">available</TableCell>}
                        <TableCell align="center">product</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {order?.map((row) => (
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="center">{row.p.price }*{row.quantity}={row.p.price*row.quantity}</TableCell>
                            {small == 'false' && <TableCell align="center">{row.p.quantity >= row.p.quantity ? 'true' : 'false'}</TableCell>}
                            <TableCell align="center">{row.quantity}</TableCell>
                            {small == 'false' && <TableCell align="center">{row.p.description}</TableCell>}
                            <TableCell align="center"><Avatar src={row.p.imgUrl} /></TableCell>
                            {small == 'false' && <IconButton aria-label="delete" onClick={() => { del(row) }}><DeleteIcon /></IconButton>}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <h1> Total Price: {sum} ₪</h1>
        <div class="ui buttons">
                <button onClick={leave} class="ui button">Cancel</button>
                <div class="or"></div>
                <button onClick= { payment} class="ui positive button">Save</button>
            </div>
        </div>);
}

export default ShopCart