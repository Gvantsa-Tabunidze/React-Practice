import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = 'http://localhost:5000/api/v1'
const API_KEY = 'YXBpS2V5U2VjcmV0'


export const postProducts = createAsyncThunk(
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
            
            const productData = await response.json()
            if(productData) return ThunkAPI.fulfillWithValue(productData.data)
        } catch (error) {
            return ThunkAPI.rejectWithValue('something is going wrong')
    
        }
    }

)