import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { signin } from '../api/auth'


type FormInputs = {
    name: string
    email: string
    password: string | number
}


const Signin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const navigate = useNavigate()


    const onSubmit: SubmitHandler<FormInputs> = async (data: any) => {
        const { data: user } = await signin(data);
        localStorage.setItem('user', JSON.stringify(user))
        navigate('/admin')
    }



    return (
        // <div classNameName="w-screen mt-40 flex justify-center items-center bg-white">
        //     <div classNameName="p-10 border-[1px] -mt-10 border-slate-200 rounded-md flex flex-col items-center space-y-3">
        //         <div classNameName="py-8">
        //             <img width={30} classNameName="-mt-10" src="https://www.tailwind-kit.com/icons/rocket.svg" />
        //         </div>
        //         <form action='' onSubmit={handleSubmit(onSubmit)}>
        //             <input classNameName="p-3 border-[1px] border-slate-500 rounded-sm w-80" {...register('email', { required: true })} placeholder="E-Mail " required /><br />
        //             {(errors.email) && <span classNameName='text-red-500'>Fields is required</span>}<br />

        //             <div classNameName="flex flex-col space-y-1 py-4">
        //                 <input type='password' classNameName="p-3 border-[1px] border-slate-500 rounded-sm w-80" {...register('password', { required: true })} placeholder="Password" />
        //                 {errors.password && <span classNameName='text-red-500'>Fields is required</span>}<br />

        //                 <p classNameName="font-bold text-[#0070ba]">Forgot password?</p>
        //             </div>
        //             <div classNameName="flex flex-col space-y-5 w-full">
        //                 <button classNameName="w-full bg-[#0070ba] rounded-3xl p-1 text-white font-bold transition duration-200 hover:bg-[#003087]">Log in</button>
        //                 <div classNameName="flex items-center justify-center border-t-[1px] border-t-slate-300 w-full relative">
        //                     <div classNameName="-mt-1 font-bod bg-white px-5 absolute">Or</div>
        //                 </div>
        //             </div>
        //         </form>
        //         <button classNameName="w-full border-blue-900 hover:border-[#003087] hover:border-[2px] border-[1px] rounded-3xl p-1 text-[#0070ba] font-bold transition duration-200"><Link to='/signup'>Sign Up</Link></button>
        //     </div>
        // </div>
        <div className="bg-no-repeat bg-cover bg-center relative bgi"><div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>
            <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                    <img src="https://scontent.fhan3-5.fna.fbcdn.net/v/t1.6435-9/94036243_2899534036805595_1800758643365249024_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7rSsNzjF8wkAX_AL98w&_nc_ht=scontent.fhan3-5.fna&oh=00_AfBOd8de0L6tUQNviOjCIQ6FgRGcm7hNW6S_C98KPo582g&oe=63B2747F" className="w-32 h-32" alt="Flowbite Logo" />

                    <div className="self-start hidden lg:flex flex-col  text-white mt-8 text">
                        <h1 className=" font-bold text-3xl">Hi ? Welcome
                            <br /> <br /><h2 className='text-red-500 font-bold text-5xl ml-8'>Hoàng Trường Shop </h2></h1>
                        <p className="pr-3">Lorem ipsum is placeholder text commonly used in the graphic, print,
                            and publishing industries for previewing layouts and visual mockups</p>
                    </div>
                </div>

                <div className="flex justify-center self-center  z-10">
                    <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
                        <div className="mb-4">
                            <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
                            <p className="text-gray-500">Please sign in to your account.</p>
                        </div>
                        <form action='' onSubmit={handleSubmit(onSubmit)}>
                            <div className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                                    <input className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" {...register('email', { required: true })} type="" placeholder="mail@gmail.com" />
                                    {(errors.email) && <span className='text-red-500'>Bạn chưa nhập Email!!</span>}<br />
                                </div>
                                <div className="space-y-2">
                                    <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                        Password
                                    </label>
                                    <input className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" {...register('password', { required: true })} type="password" placeholder="Enter your password" />
                                    {errors.password && <span className='text-red-500'>Bạn chưa nhập Password</span>}<br />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                                        <label className="ml-2 block text-sm text-gray-800">
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="text-sm">
                                        <a href="#" className="text-green-400 hover:text-green-500">
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                        Sign in
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div className="pt-5 text-center text-gray-400 text-xs">
                            <span>
                                Copyright © 2021-2022
                                <a href="https://codepen.io/uidesignhub" rel="" target="_blank" title="Ajimon" className="text-green hover:text-green-500 ">AJI</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Signin