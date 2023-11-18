import { FC, Reducer, useReducer } from "react";

import LogoImg from '../assets/images/logos_google-icon.svg'
import RegisterImg from '../assets/images/registeration.svg' 
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import authThunk from "../store/auth/auth.thunk";

enum DISPATCH_ACTION  {
	PASSWORD_ACTION = "Password",
	EMAIL_ACTION = "Email",
}


type ACTION = {type:DISPATCH_ACTION.EMAIL_ACTION; payload:string} | {type:DISPATCH_ACTION.PASSWORD_ACTION; payload:string}
type REDUCER_STATE = { email:string; password:string}


const ReducerFunction = (state:REDUCER_STATE, action:ACTION):REDUCER_STATE => {
	switch (action.type) {
		case DISPATCH_ACTION.EMAIL_ACTION:
			return {
				...state,
				email:action.payload
			};
		case DISPATCH_ACTION.PASSWORD_ACTION:
			return {
				...state,
				password:action.payload
			};
	}
}

export const Login:FC = ()  => {
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
	const {authReducer} = useSelector((store:any) => ({
		authReducer: store.authReducer
	}))
	
	const [state, reducerDispatcher] = useReducer(ReducerFunction, {password:'', email:''})

	const loginHandler = (event:any) => {
		event.preventDefault()
		dispatch(authThunk.login({
			email:state.email,
			password:state.password
		}))
	}

	const loginWithGoogleHandler = () => {
		dispatch(authThunk.loginGoogleAuth())
	}

    return (
        <div className='flex flex-col min-h-full flex-1 mx-auto max-w-7xl sm:px-6 lg:px-8'>
			<div className='mt-10'>
				<img src={LogoImg}/>
			</div>
			<div className='flex flex-1'>
				<div className='relative hidden w-0 flex-1 lg:flex justify-center items-center'>
                <img src={RegisterImg}/>
				</div>

				<div className='flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
					<div className='mx-auto w-full max-w-sm lg:w-96'>
						<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]'>
							<div className='bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12'>
								<div className='sm:mx-auto sm:w-full sm:max-w-md'>
									<h2 className='text-center text-title-sm font-bold leading-9 tracking-tight text-gray-900'>
										Login to your account
									</h2>
								</div>

								<div className='mb-4'>
									<div className='mt-4'>
										{/* <a
											href='#'
											className='flex w-full items-center justify-center gap-3 rounded-md px-3 py-1.5 text-body-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F] border border-form-stroke'
										>
											<svg className='h-5 w-5' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'>
												<path
													fillRule='evenodd'
													d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
													clipRule='evenodd'
												/>
											</svg>
											<span className='text-sm font-semibold leading-6'>Continue with google</span>
										</a> */}

										<button
											onClick={loginWithGoogleHandler} 
											className='flex w-full items-center justify-center gap-3.5 rounded-lg border border-form-stroke bg-transparent h-12 hover:bg-opacity-50'
										>
											<span>
												<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
													<g clipPath='url(#clip0_191_13499)'>
														<path
															d='M19.999 10.2217C20.0111 9.53428 19.9387 8.84788 19.7834 8.17737H10.2031V11.8884H15.8266C15.7201 12.5391 15.4804 13.162 15.1219 13.7195C14.7634 14.2771 14.2935 14.7578 13.7405 15.1328L13.7209 15.2571L16.7502 17.5568L16.96 17.5774C18.8873 15.8329 19.9986 13.2661 19.9986 10.2217'
															fill='#4285F4'
														/>
														<path
															d='M10.2055 19.9999C12.9605 19.9999 15.2734 19.111 16.9629 17.5777L13.7429 15.1331C12.8813 15.7221 11.7248 16.1333 10.2055 16.1333C8.91513 16.1259 7.65991 15.7205 6.61791 14.9745C5.57592 14.2286 4.80007 13.1801 4.40044 11.9777L4.28085 11.9877L1.13101 14.3765L1.08984 14.4887C1.93817 16.1456 3.24007 17.5386 4.84997 18.5118C6.45987 19.4851 8.31429 20.0004 10.2059 19.9999'
															fill='#34A853'
														/>
														<path
															d='M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z'
															fill='#FBBC05'
														/>
														<path
															d='M10.2059 3.86663C11.668 3.84438 13.0822 4.37803 14.1515 5.35558L17.0313 2.59996C15.1843 0.901848 12.7383 -0.0298855 10.2059 -3.6784e-05C8.31431 -0.000477834 6.4599 0.514732 4.85001 1.48798C3.24011 2.46124 1.9382 3.85416 1.08984 5.51101L4.38946 8.02225C4.79303 6.82005 5.57145 5.77231 6.61498 5.02675C7.65851 4.28118 8.9145 3.87541 10.2059 3.86663Z'
															fill='#EB4335'
														/>
													</g>
													<defs>
														<clipPath id='clip0_191_13499'>
															<rect width='20' height='20' fill='white' />
														</clipPath>
													</defs>
												</svg>
											</span>
											Continue with google
										</button>
									</div>

									<div className='relative flex justify-center leading-6 mt-4'>
										<span className='px-6'>or</span>
									</div>
								</div>
								<form className='space-y-6' action='#' method='POST'>
									<div>
										<label htmlFor='email' className='sr-only'>
											Email
										</label>
										<input
										onChange={(e) => reducerDispatcher({type:DISPATCH_ACTION.EMAIL_ACTION, payload:e.target.value})}
											type='email'
											name='email'
											id='email'
											className='w-full rounded border border-form-stroke bg-transparent h-12 px-4 outline-none focus:border-primary focus-visible:shadow-none'
											placeholder='Email'
										/>
									</div>

									<div>
										<label htmlFor='password' className='sr-only'>
											Password
										</label>
										<input
											onChange={(e) => reducerDispatcher({type:DISPATCH_ACTION.PASSWORD_ACTION, payload: e.target.value})}
											type='password'
											name='password'
											id='password'
											className='w-full rounded border border-form-stroke bg-transparent h-12 px-4 outline-none focus:border-primary focus-visible:shadow-none'
											placeholder='Password'
										/>
									</div>

									<div>
										<button
											onClick={loginHandler}
											type='submit'
											disabled={authReducer.loading}
											className='flex w-full justify-center items-center rounded-md bg-primary px-3 h-12 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-blue-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
										>
											{!authReducer.loading ? "Login" : "Loading..."}
										</button>
									</div>

									{authReducer.error && <div className="flex flex-col items-center">
										<p className='mt-1 text-center text-sm text-red-800'>
											{authReducer.error}
										</p>
									</div>}

									<div className='flex flex-col items-center'>
										<div className='text-sm leading-6'>
											<a href='#' className='text-primary hover:text-indigo-500'>
												Forgot password?
											</a>
										</div>
										<p className='mt-1 text-center text-sm text-gray-500'>
											Not a member?{' '}
											<a href='#' className='leading-6 text-primary'>
												Sign up
											</a>
										</p>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}