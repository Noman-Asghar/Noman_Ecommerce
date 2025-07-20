import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

 const initialState = {
    products: null,
    singleProduct:null,
    isLoading: false,
    isError: null
 }

 export const fetchedProducts = createAsyncThunk("fetchedProducts", async () => {
    const response = await axios.get("https://fakestoreapi.com/products")

    return response.data;
 })

 export const fetchProuductById = createAsyncThunk("fetchProuductById", async(id) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    return response.data
 } )

 export const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers:(builder) => {
        builder
        .addCase(fetchedProducts.pending, (state) => {
            state.isLoading = true
        })
        .addCase(fetchedProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.products = action.payload
        })
        .addCase(fetchedProducts.rejected, (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        })
         .addCase(fetchProuductById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchProuductById.fulfilled, (state, action) => {
        state.singleProduct = action.payload
        state.isLoading = false
      })
      .addCase(fetchProuductById.rejected, (state) => {
        state.isLoading = false
        state.isError = true
      })
    }
 })


 export default productsSlice.reducer