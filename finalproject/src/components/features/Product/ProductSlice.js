import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    arrProducts: [],
    currentProduct: null,
    status: "idle",
    postStatus: "idle"
};

export const fetchAllProducts = createAsyncThunk(
    'product/fetchAllProducts',
    async () => {
        const res = await axios.get('http://localhost:4000/product');
        return res.data;
    }
);

export const getProductById = createAsyncThunk(
    'product/getProductById',
    async (id) => {
        const res = await axios.get(`http://localhost:4000/product/${id}`);
        return res.data;
    }
);

export const postProduct = createAsyncThunk(
    'product/postProduct',
    async (dataProduct) => {
        const res = await axios.post('http://localhost:4000/product', dataProduct);
        return res.data;
    }
);

export const putProduct = createAsyncThunk(
    'product/putProduct',
    async (product) => {
        const res = await axios.put(`http://localhost:4000/product/${product.id}`, product);
        return res.data;
    }
);

export const deleteProduct = createAsyncThunk(
    'product/deleteProduct',
    async (id) => {
        const res = await axios.delete(`http://localhost:4000/product/${id}`);
        return id;
    }
);

export const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        deleteProduct: (state, action) => {
            state.arrProducts = state.arrProducts.filter(x => x.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProducts.fulfilled, (state, { payload }) => {
                state.arrProducts = payload;
                state.status = "fulfilled";
            })
            .addCase(fetchAllProducts.pending, (state) => {
                state.status = "pending";
            })
            .addCase(fetchAllProducts.rejected, (state) => {
                state.status = "rejected";
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.arrProducts = state.arrProducts.filter(x => x.id !== action.payload);
            })
            .addCase(putProduct.fulfilled, (state, action) => {
                let index = state.arrProducts.findIndex(x => x.id === action.payload.id);
                if (index !== -1) {
                    state.arrProducts[index] = action.payload;
                }
            });
    }
});

export default ProductSlice.reducer;
