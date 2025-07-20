import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    profile: null,
    isLoading: false,
    isError: null
}


export const fetchedProfile = createAsyncThunk("fetchedProfile", async() => {
    const response = await axios.get("https://api.github.com/users/Noman-Asghar")

    return response.data
})

const profileSlice = createSlice({
    name: "profile",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchedProfile.pending, (state) => {
               state.isLoading = true
        })
        .addCase(fetchedProfile.fulfilled, (state, action) => {
                 state.isLoading = false
                 state.profile = action.payload
        })
        .addCase(fetchedProfile.rejected, (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        })
    }
})


export default profileSlice.reducer