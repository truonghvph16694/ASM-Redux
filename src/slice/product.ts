import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getProducts, getProduct } from '../api/product';
import { IProduct } from '../interfaces/product';

export const fetchProducts = createAsyncThunk("products/fetchProducts", getProducts);
export const fetchProduct = createAsyncThunk("products/fetchProduct", async (id: number) => {
    // console.log('id', id)
    const products = await getProduct(id);
    return products;
});


const initialState: { value: IProduct[] } = {
    value: []
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
            state.value = action.payload;
        })
    }
});


export default productSlice.reducer;