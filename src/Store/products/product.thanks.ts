import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = 'http://localhost:5000/api/v1'
const API_KEY = 'YXBpS2V5U2VjcmV0'

// 1. Define form data type (input)
interface ProductFormData {
  name: string;
}

// 2. Define response data type (output)
export interface Product {
  id: string;
  name: string;
}

// 3. Create the thunk with full typings
export const postProducts = createAsyncThunk<Product, ProductFormData, { rejectValue: string | null}>(

    '/products/POST',
    async (formData, ThunkAPI)=>{
        try {
            const payload = {
                data:[formData]
            }
            const response = await fetch(`${BASE_URL}/resource/products`, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json',
                    'x-bypass-token': API_KEY,
                },
                  body: JSON.stringify(payload),

            })
                if (!response.ok) {
                return ThunkAPI.rejectWithValue('Failed to post product');
                }
                        
            const productData = await response.json()
            if(productData && productData.data) {
                return ThunkAPI.fulfillWithValue(productData.data as Product)}
            else{
                return ThunkAPI.rejectWithValue('Invalid response structure');
                }
            } catch (error) {
                return ThunkAPI.rejectWithValue('something is going wrong')
        
            }
        }

    )