const FIREBASE_AUTH_ERROR_RESPONSE = {
    INVALID_LOGIN_CREDENTIALS:"auth/invalid-login-credentials"
}


export const showErrorMessage = (message:string):string => {
    switch (message.toLocaleUpperCase()) {
        case FIREBASE_AUTH_ERROR_RESPONSE.INVALID_LOGIN_CREDENTIALS.toUpperCase():
            return "Invalid login credentials"
        default:
            return "Error in Authenticating account, try again later"
    }
}