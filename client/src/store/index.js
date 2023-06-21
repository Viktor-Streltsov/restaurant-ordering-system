import {configureStore} from "@reduxjs/toolkit"
import userReducer from './slices/userSlice'
import preloaderReducer from './slices/preloaderSlice'
import allReducer from './slices/allSlice'


export const store = configureStore({
    reducer: {
        userReducer,
        preloaderReducer,
        allReducer
    }
})