export interface IAuth {
    email: string;
    password: string;
}

export interface IAuthSlice {
    loading: boolean;
    data:any;
    error:null | string
}
