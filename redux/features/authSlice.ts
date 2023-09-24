import { createSlice } from '@reduxjs/toolkit'

interface AuthState{
    isAuthenticate: boolean;
    isLoading: boolean;
}
const initialState = {
    isAuthenticate: false,
    isLoading: true,
} as AuthState;

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers:{
        setAuth: state =>{
            state.isAuthenticate=true;
        },
        logout: state =>{
            state.isAuthenticate=false;
        },
        finishIntialLoad: state =>{
            state.isLoading=false;
        }

    }
});

export const {setAuth, logout, finishIntialLoad} = authSlice.actions;
export default authSlice.reducer;
