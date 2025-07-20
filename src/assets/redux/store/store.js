import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/prouductSlice"
import gitHubReducer from "../slices/githubSlice"
import cardReducer from "../slices/cardSlice"

export const store = configureStore({
    reducer:{
        products: productReducer,
        profile: gitHubReducer,
        cards: cardReducer
    }
})