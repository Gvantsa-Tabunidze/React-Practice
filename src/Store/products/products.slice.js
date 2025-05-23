import { createSlice } from "@reduxjs/toolkit"
import { postProducts } from "./product.thanks"

const initialState = {
    products: [],
    loading: false,
}


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder 
        .addCase(postProducts.pending, (state)=>{
            state.loading = true
        })
        .addCase(postProducts.fulfilled, (state,action)=>{
            state.loading = false,
            state.products.push(action.payload)
        })
        .addCase(postProducts.rejected, (state,action)=>{
            state.loading = false,
            state.error = action.payload
        })
     
    }
})

export default productsSlice.reducer