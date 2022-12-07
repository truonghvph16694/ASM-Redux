import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProduct } from '../api/product';
import { ICategory } from '../interfaces/categories';
import { IProduct } from '../interfaces/product';
import { getCategories, getCategory } from './../api/category';

export const fetchCategories = createAsyncThunk("categories/fetchCategories", getCategories);
export const fetchCategory = createAsyncThunk("category/fetchCategory", async (id: number) => {
    // console.log('id', id)
    const categories = await getCategory(id);
    return categories;
});


const initialState: { value: ICategory[] } = {
    value: []
}

const CategoriesSlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action: PayloadAction<ICategory[]>) => {
            state.value = action.payload;
        })
    }
});


export default CategoriesSlice.reducer;