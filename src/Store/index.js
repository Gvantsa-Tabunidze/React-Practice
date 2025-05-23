import { combineReducers, configureStore } from "@reduxjs/toolkit"
import themeReducer from './Theme/themeSlice'
import productsReducer from './products/products.slice'

const rootReducer = combineReducers({
    theme:themeReducer, //it's exported by the default themeSlice reducer
    products: productsReducer
})

export const store = configureStore({
    reducer:rootReducer,
    devTools:true
})