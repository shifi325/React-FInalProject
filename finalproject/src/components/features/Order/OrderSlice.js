import { createSlice, nanoid ,createAsyncThunk } from '@reduxjs/toolkit'
import { getOrders,getOrderByIdA,postOrderA,deleteOrderA } from './OrderApi'

const initialState = {
    arrOrders: [],
    currentOrder:null,
    status: "idle",
    cart:[],
    price:0 ,
    finalPrice:0

}

export const fetchAllOrders = createAsyncThunk(
    'order/fetchAllOrders',
    async (thunkAPI) => {
        const res = await getOrders()
        return res
    },
)

export const getOrderById = createAsyncThunk(
    'order/getOrderById',
    async (id,thunkAPI) => {
        const res = await getOrderByIdA(id)
        return res
    },
)

export const postOrder = createAsyncThunk(
    'order/postOrder',
    async (newOrder,thunkAPI) => {
        const res = await postOrderA(newOrder)
        return res
    },
)

export const deleteOrder = createAsyncThunk(
    'order/deleteOrder',
    async (id,thunkAPI) => {
        const res = await deleteOrderA(id)
        return res
    },
)



export const OrderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addToShoppingCart: (state, action) => {
            const existingProduct = state.cart.find(item => item.p.id === action.payload.p.id);
            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity
            } else {
                state.cart = [...state.cart, action.payload]
            }
            state.price += action.payload.quantity * action.payload.p.price

        },
        emptyCart: (state, action) => { 
            state.cart=[]
            state.price=0
        },
        removeFromShoppingCart: (state, action) => {
            const productToRemove = state.cart.find(item => item.p.id === action.payload.p.id);
            if (productToRemove) {
                state.cart = state.cart.filter(item => item !== productToRemove);
                state.price -= productToRemove.quantity * productToRemove.p.price;
            }

    }},
    
    extraReducers: (builder) => {
        builder
        .addCase(fetchAllOrders.fulfilled, (state, { payload }) => {
            state.arrOrders = payload
            state.status = "fullfilled"
        })
        // You can chain calls, or have separate `builder.addCase()` lines each time
        .addCase(fetchAllOrders.pending, (state, action) => {
            state.status = "pending"
        })
        .addCase(fetchAllOrders.rejected, (state, action) => {
            state.status = "rejected"
        })
        .addCase(postOrder.fulfilled, (state, {payload}) => {
            state.currentOrder = payload
            state.status = "fullfilled"
            console.log(state.currentOrder)
        })

    },
})


// export const {  updateProduct } = OrderSlice.actions
export const { addToShoppingCart,emptyCart ,removeFromShoppingCart} = OrderSlice.actions

export default OrderSlice.reducer