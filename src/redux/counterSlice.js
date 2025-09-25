import { createSlice } from "@reduxjs/toolkit";
import { all } from "axios";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        allUsers: [],
        counter: 0
    }

})

export default counterSlice.reducer;