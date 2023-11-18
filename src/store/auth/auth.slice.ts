import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import AuthThunk from "./auth.thunk";
import { ACTION_ERROR, IAuthSlice } from "../../interface/auth.interface";
import { showErrorMessage } from "../../global/util/error/auth.response";

const initialState:IAuthSlice = {
    loading:false,
    data:null,
    error:null
}



const authSlice = createSlice({
    initialState,
    name:'auth',
    reducers:{},
    extraReducers:(builder) => {
        // login 
        builder.addCase(AuthThunk.login.pending, (state, action:PayloadAction<any, any>) => {
            return {
                ...state,
                loading:true
            }
        })
        builder.addCase(AuthThunk.login.rejected, (state, action:PayloadAction<any>) => {
            console.log("rejected", action)
            const refinedError:string = showErrorMessage(action.payload.code) // refined user error message
            return {
                ...state,
                error:refinedError,
                loading:false
            }
        })
        builder.addCase(AuthThunk.login.fulfilled, (state, action) => {
            console.log("fulfilled", action)
            return {
                ...state,
                error:null,
                loading:false,
            }
        })

        // login via google oauth
        builder.addCase(AuthThunk.loginGoogleAuth.pending, (state, action:PayloadAction<any, any>) => {
            return {
                ...state,
                loading:true
            }
        })
        builder.addCase(AuthThunk.loginGoogleAuth.rejected, (state, action:PayloadAction<any>) => {
            console.log("rejected", action)
            //const refinedError:string = showErrorMessage(action.payload.code) // refined user error message
            return {
                ...state,
                ///error:refinedError,
                loading:false
            }
        })
        builder.addCase(AuthThunk.loginGoogleAuth.fulfilled, (state, action) => {
            console.log("fulfilled", action)
            return {
                ...state,
                error:null,
                loading:false,
            }
        })
    }
})


export const authReducer = authSlice.reducer