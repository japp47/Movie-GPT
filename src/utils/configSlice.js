import { createSlice } from "@reduxjs/toolkit";


const configStyle = createSlice({
    name : "config",
    initialState:{
        lang: "en",
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload;
        }
    }
})
export const { changeLanguage } = configStyle.actions;
export default configStyle.reducer;