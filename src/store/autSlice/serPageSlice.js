import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    product: {},
}
   
export const userPageSlice = createSlice({
    name: 'userPage',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(getProductById.pending, (state) =>{
        })
        builder.addCase(getProductById.fulfilled, (state, action) => {
            state.product = action.payload
        })
        builder.addCase(getProductById.rejected, (state, action) =>{
        })
    },
})

export const getProductById = createAsyncThunk(
    'innerPage',
    async (id)=>{
      console.log("QWERTYUIO");
      try {
        const response = await fetch(`http://43.204.218.113/api/v1/user-page/product/${id}/`)
        console.log(response);
        
      } catch (error) {
        
      }
    }
)