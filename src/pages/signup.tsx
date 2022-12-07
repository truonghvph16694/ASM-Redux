import { message } from 'antd'
import { SubmitHandler, useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { signup } from '../api/auth'
type signinProps = {}

type formInput = {
    name: string,
    email: string,
    password: string,
    role: number
}


const Signup = (props: signinProps) => {
    const { register, handleSubmit, formState: { errors }, } = useForm<formInput>()
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<formInput> = (data: any) => {
        signup(data);
        // Api Signup nhận cái data
        message.info("Đăng Kí Thành Công!!");
        navigate('/signin')
        // Sau khi đăng kí xong nó nhảy về trang đăng nhập
    }

    return (


        <div className="bg-no-repeat bg-cover bg-center relative bgi"><div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>
            <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                    <img src="https://scontent.fhan3-5.fna.fbcdn.net/v/t1.6435-9/94036243_2899534036805595_1800758643365249024_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7rSsNzjF8wkAX_AL98w&_nc_ht=scontent.fhan3-5.fna&oh=00_AfBOd8de0L6tUQNviOjCIQ6FgRGcm7hNW6S_C98KPo582g&oe=63B2747F" className="w-32 h-32" alt="Flowbite Logo" />

                    <div className="self-start hidden lg:flex flex-col  text-white mt-8 text">
                        <h1 className=" font-bold text-3xl">Hi ? Welcome
                            <br /> <br /><h2 className='text-red-500 font-bold text-5xl ml-8'>Hoàng Trường Shop❤️ </h2></h1>
                        <p className="pr-3">Lorem ipsum is placeholder text commonly used in the graphic, print,
                            and publishing industries for previewing layouts and visual mockups</p>
                    </div>
                </div>

                <div className="flex justify-center self-center  z-10">
                    <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
                        <div className="mb-4">
                            <h3 className="font-semibold text-2xl text-gray-800">Sign Up </h3>
                            <p className="text-gray-500">Please sign in to your account.</p>
                        </div>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 tracking-wide">UserName</label>
                                    <input className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" role="input" {...register('name', { required: true })} type="" placeholder="UserName" />
                                    {(errors.name) && <span className='text-red-500'>Bạn chưa nhập Email!!</span>}<br />
                                </div>
                                <div className="space-y-2 hidden">
                                    <input className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" value="0" {...register('role', { required: true })} type="" placeholder="mail@gmail.com" hidden />
                                    {/* {(errors.role) && <span className='text-red-500'>Bạn chưa nhập Email!!</span>}<br /> */}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                                    <input className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" role="input" {...register('email', { required: true })} type="" placeholder="mail@gmail.com" />
                                    {(errors.email) && <span className='text-red-500'>Bạn chưa nhập Email!!</span>}<br />
                                </div>

                                <div className="space-y-2">
                                    <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                        Password
                                    </label>
                                    <input className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" role="input" {...register('password', { required: true })} type="password" placeholder="Enter your password" />
                                    {errors.password && <span className='text-red-500'>Bạn chưa nhập Password</span>}<br />
                                </div>
                                <div className="flex items-center justify-between">

                                    <div className="text-sm">
                                        <a href="#" className="text-green-400 hover:text-green-500">
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <button role="button" className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                        Sign up
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

export default Signup