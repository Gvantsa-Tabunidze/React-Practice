import { createSlice } from "@reduxjs/toolkit"
import { postProducts, type Product } from "./product.thanks"


interface ProductsState{
    products: Product[],
    loading: false | true,
    error: string | null
}

const initialState: ProductsState = {
    products: [],
    loading: false,
    error: null
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder 
        .addCase(postProducts.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(postProducts.fulfilled, (state,action)=>{
            state.loading = false;
            state.products.push(action.payload)
        })
        .addCase(postProducts.rejected, (state,action)=>{
            state.loading = false,
            state.error = action.payload ?? 'Unknown error'
        })
     
    }
})

export default productsSlice.reducer