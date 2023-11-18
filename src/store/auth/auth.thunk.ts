import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuth } from "../../interface/auth.interface";

import { auth } from "../../global/config/firebase";
import { GoogleAuthProvider, UserCredential, signInWithEmailAndPassword, signInWithPopup, OAuthCredential, User } from "firebase/auth";

class AuthThunk {
    public login = createAsyncThunk('login', async(data:IAuth, {rejectWithValue}) => {
        try {
            const {email, password} = data
            const user:UserCredential = await signInWithEmailAndPassword(auth, email, password)
            console.log("@@@ user", user)
            return user.user
        } catch (error:any) {
            let err =  {
                code: error.code,
                message: error.message
            }
            return rejectWithValue(err)
        }
    })

    public loginGoogleAuth = createAsyncThunk('loginGoogle', async(undefined, {rejectWithValue}) => {
        try {
            const provider = new GoogleAuthProvider()
            signInWithPopup(auth, provider)
            .then((result) => {
                const credential:OAuthCredential | null = GoogleAuthProvider.credentialFromResult(result)
                if(!credential) {
                    throw new Error(`Invalid credential ${credential}`)
                }
                
                const token:string | undefined = credential.accessToken;
                const user:User = result.user
                console.log(token, user)
                return {
                    token,
                    user
                }
            })
            .catch((error) => {
                throw new Error(error)
            })
        } catch (error:any) {
            let err =  {
                code: error.code,
                message: error.message
            }
            console.log("Error: Google oauth2.Error", err)
            return rejectWithValue(err)
        }
    })
    public signup = createAsyncThunk('signup', async() => {})
    public signupGoogleAuth = createAsyncThunk('signupGoogle', async() => {})
}

export default new AuthThunk