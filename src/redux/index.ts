import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./slice/langSlice";
import themeReducer from "./slice/themeSlice";


export const store = configureStore({
    reducer: {
        theme: themeReducer,
        lang: langReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch