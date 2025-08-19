import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    user:{
        login: "",
        password: "",
    },
    scores: {
        score: 0,
    }

}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeLogin (state, action:PayloadAction<string>) {
            state.user.login = action.payload;
        }
    }
})

export const {changeLogin} = userSlice.actions;
export default userSlice.reducer;