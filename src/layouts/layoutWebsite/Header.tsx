import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { searchFullText } from '../../api/product';

type Props = {}

const HeaderWebsite = (props: Props) => {
    const [showMenu, setShowMenu] = useState(false);
    const [showMenuSm, setShowMenuSm] = useState(false);
    const [search, setSearch] = useState(false);
    const [show, setShow] = useState(false);
    const [keyword, setKeyWord] = useState('');
    const changeKeyword = (key: any) => {
        setKeyWord(key.target.value)
        console.log(keyword);
    }
    const Navigate = useNavigate()
    const changePage = (e: any) => {
        e.preventDefault();
        Navigate(`/product?_expand=role&q=${keyword}`)
    }

    return (
        <div className="bg-pink-50">
            <div className="2xl:container 2xl:mx-auto md:py-5 lg:px-20 md:px-6 p-4">
                <div className="flex items-center justify-between">
                    <div className="lg:w-3/12">
                        <div className="w-7/12 hidden lg:flex items-center space-x-3 border-b border-gray-200 pb-2">
                            <div>
                                {/* <svg className="fill-stroke text-gray-600 dark:text-white" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19.0004 19.0004L14.6504 14.6504" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg> */}

                            </div>
                            <form onSubmit={changePage}>
                                {/* <input type="text" onChange={changeKeyword} placeholder="Search for products" className="bg-transparent text-sm text-gray-600 focus:outline-none" /> */}

                                <input type="text" onChange={changeKeyword} placeholder=" Search For Product" name="text" className="inputsearch"></input>
                            </form>
                        </div>
                        <button onClick={() => setShowMenu(true)} aria-label="Open Menu" className="text-gray-800 dark:text-white hidden md:block lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-800 rounded">
                            <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 18L4 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18 6L4 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button onClick={() => setSearch(true)} aria-label="Search Menu" className="text-gray-800 dark:text-white md:hidden focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5">
                            <svg className="fill-stroke" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18.9984 19.0004L14.6484 14.6504" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="lg:w-6/12 flex flex-col justify-center items-center space-y-3.5">
                        <div aria-label="Luxiwood. Logo" role="img" className="cursor-pointer">
                            <a href="#" className="flex items-center">
                                <img src="https://scontent.fhan3-5.fna.fbcdn.net/v/t1.6435-9/94036243_2899534036805595_1800758643365249024_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7rSsNzjF8wkAX_AL98w&_nc_ht=scontent.fhan3-5.fna&oh=00_AfBOd8de0L6tUQNviOjCIQ6FgRGcm7hNW6S_C98KPo582g&oe=63B2747F" className="mr-3 h-12 sm:h-16" alt="Flowbite Logo" />
                                <span className="self-center text-xl font-semibold whitespace-nowrap text-red-500 font-serif">Hoàng Trường Shop</span>
                            </a>
                            {/* <svg className="fill-stroke text-gray-800 dark:text-white" width={146} height={26} viewBox="0 0 146 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M37.376 17.336H45.728V20H34.064V4.16H37.376V17.336ZM52.154 20.24C51.354 20.24 50.634 20.096 49.994 19.808C49.354 19.52 48.842 19.064 48.458 18.44C48.09 17.816 47.906 16.992 47.906 15.968V8H51.194V15.176C51.194 16.104 51.386 16.752 51.77 17.12C52.154 17.472 52.706 17.648 53.426 17.648C54.114 17.648 54.722 17.4 55.25 16.904C55.794 16.392 56.066 15.576 56.066 14.456V8H59.354V20H56.426L56.306 17.912C55.906 18.696 55.354 19.28 54.65 19.664C53.946 20.048 53.114 20.24 52.154 20.24ZM65.4779 8L67.9979 12.176L70.5419 8H74.2619L70.0139 13.928L74.3339 20H70.5179L67.8539 15.656L65.1419 20H61.4219L65.8379 13.928L61.6379 8H65.4779ZM78.134 6.272C76.774 6.272 76.094 5.688 76.094 4.52C76.094 3.336 76.774 2.744 78.134 2.744C79.494 2.744 80.174 3.336 80.174 4.52C80.174 5.688 79.494 6.272 78.134 6.272ZM79.766 8V20H76.478V8H79.766ZM98.7314 8H102.235L98.3954 20H94.6034L91.9874 11.84L89.4674 20H85.6754L81.8354 8H85.3394L87.7394 17.192L90.4034 8H93.6674L96.3554 17.192L98.7314 8ZM109.419 7.76C110.619 7.76 111.683 8.008 112.611 8.504C113.539 9 114.259 9.712 114.771 10.64C115.299 11.568 115.563 12.688 115.563 14C115.563 15.312 115.299 16.432 114.771 17.36C114.259 18.288 113.539 19 112.611 19.496C111.683 19.992 110.619 20.24 109.419 20.24C108.203 20.24 107.131 19.992 106.203 19.496C105.291 19 104.571 18.288 104.043 17.36C103.531 16.432 103.275 15.312 103.275 14C103.275 12.688 103.531 11.568 104.043 10.64C104.571 9.712 105.291 9 106.203 8.504C107.131 8.008 108.203 7.76 109.419 7.76ZM109.419 10.208C108.523 10.208 107.819 10.528 107.307 11.168C106.811 11.792 106.563 12.736 106.563 14C106.563 15.264 106.811 16.216 107.307 16.856C107.819 17.48 108.523 17.792 109.419 17.792C110.299 17.792 110.987 17.48 111.483 16.856C111.995 16.216 112.251 15.264 112.251 14C112.251 12.736 111.995 11.792 111.483 11.168C110.987 10.528 110.299 10.208 109.419 10.208ZM123.786 7.76C124.986 7.76 126.05 8.008 126.978 8.504C127.906 9 128.626 9.712 129.138 10.64C129.666 11.568 129.93 12.688 129.93 14C129.93 15.312 129.666 16.432 129.138 17.36C128.626 18.288 127.906 19 126.978 19.496C126.05 19.992 124.986 20.24 123.786 20.24C122.57 20.24 121.498 19.992 120.57 19.496C119.658 19 118.938 18.288 118.41 17.36C117.898 16.432 117.642 15.312 117.642 14C117.642 12.688 117.898 11.568 118.41 10.64C118.938 9.712 119.658 9 120.57 8.504C121.498 8.008 122.57 7.76 123.786 7.76ZM123.786 10.208C122.89 10.208 122.186 10.528 121.674 11.168C121.178 11.792 120.93 12.736 120.93 14C120.93 15.264 121.178 16.216 121.674 16.856C122.186 17.48 122.89 17.792 123.786 17.792C124.666 17.792 125.354 17.48 125.85 16.856C126.362 16.216 126.618 15.264 126.618 14C126.618 12.736 126.362 11.792 125.85 11.168C125.354 10.528 124.666 10.208 123.786 10.208ZM137.217 20.24C136.225 20.24 135.337 19.992 134.553 19.496C133.785 19 133.177 18.296 132.729 17.384C132.297 16.456 132.081 15.336 132.081 14.024C132.081 12.696 132.313 11.568 132.777 10.64C133.241 9.696 133.865 8.984 134.649 8.504C135.449 8.008 136.345 7.76 137.337 7.76C138.201 7.76 138.945 7.968 139.569 8.384C140.193 8.8 140.665 9.352 140.985 10.04V2.744H144.273V20H141.321L141.177 17.672C140.841 18.472 140.321 19.104 139.617 19.568C138.913 20.016 138.113 20.24 137.217 20.24ZM138.177 17.72C139.025 17.72 139.705 17.392 140.217 16.736C140.729 16.064 140.985 15.12 140.985 13.904C140.985 12.752 140.729 11.864 140.217 11.24C139.721 10.6 139.057 10.28 138.225 10.28C137.329 10.28 136.625 10.6 136.113 11.24C135.617 11.864 135.369 12.784 135.369 14C135.369 15.216 135.617 16.144 136.113 16.784C136.609 17.408 137.297 17.72 138.177 17.72Z"
                                    fill="currentColor"
                                />
                                <path d="M2.25 21.5V16.25C2.25235 15.4551 2.56917 14.6934 3.13128 14.1313C3.69338 13.5692 4.45507 13.2523 5.25 13.25H18.75C19.5449 13.2523 20.3066 13.5692 20.8687 14.1313C21.4308 14.6934 21.7477 15.4551 21.75 16.25V21.5M18 13.25H4.5V8.375C4.50148 7.87818 4.6995 7.40212 5.05081 7.05081C5.40212 6.6995 5.87818 6.50148 6.375 6.5H17.625C18.1218 6.50148 18.5979 6.6995 18.9492 7.05081C19.3005 7.40212 19.4985 7.87818 19.5 8.375V13.25H18Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                <path
                                    d="M12 13.25V12.5C12.0011 12.1025 12.1595 11.7216 12.4406 11.4406C12.7216 11.1595 13.1025 11.0011 13.5 11H17.25C17.6475 11.0011 18.0284 11.1595 18.3094 11.4406C18.5905 11.7216 18.7489 12.1025 18.75 12.5V13.25M2.25 21.5V21.125C2.25087 20.8269 2.36967 20.5413 2.58046 20.3305C2.79125 20.1197 3.0769 20.0009 3.375 20H20.625C20.9231 20.0009 21.2087 20.1197 21.4195 20.3305C21.6303 20.5413 21.7491 20.8269 21.75 21.125V21.5H2.25ZM5.25 13.25V12.5C5.25111 12.1025 5.40951 11.7216 5.69057 11.4406C5.97163 11.1595 6.35252 11.0011 6.75 11H10.5C10.8975 11.0011 11.2784 11.1595 11.5594 11.4406C11.8405 11.7216 11.9989 12.1025 12 12.5V13.25H5.25Z"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg> */}
                        </div>
                        <div className="hidden lg:block">
                            <ul className="flex items-center space-x-10 ">
                                <li>
                                    <Link to="/">
                                        <a className="dark:text-white dark:hover:text-gray-300 text-base text-red-600 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                            Home
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="product">
                                        <a href="javascript:void(0)" className="dark:text-white dark:hover:text-gray-300 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                            Product
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="categories">
                                        <a className="dark:text-white dark:hover:text-gray-300 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                            Category
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <a className="dark:text-white dark:hover:text-gray-300 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="dark:text-white dark:hover:text-gray-300 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        Contact us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="lg:w-3/12 flex justify-end items-center space-x-4">
                        <div id="js-preloader" className="js-preloader">
                            <div className="preloader-inner">
                                <span className="dot"></span>
                                <div className="dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="buttonn btn-shine">
                            <span className='font-bold text-xl'><Link to={"signin"}>Login</Link></span>
                        </button>
                    </div>

                    <style>
                        {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
                    </style>
                    {/* <button onClick={() => setShowMenuSm(true)} aria-label="open menu" className="text-gray-800 dark:text-white md:hidden focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5">
                        <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button> */}
                </div>
            </div>
            {/* <div id="md-menu" className={`${showMenu ? "md:block" : ""} hidden lg:hidden absolute z-10 inset-0 h-screen w-full dark:bg-gray-800 bg-gray-800 bg-opacity-70 dark:bg-opacity-70`}>
                <div className="relative w-full h-screen">
                    <div className="absolute inset-0 w-1/2 bg-white dark:bg-gray-900 p-6 justify-center">
                        <div className="flex items-center justify-between border-b pb-4 border-gray-200 dark:border-gray-700">
                            <div className="flex items-center space-x-3 mx-2">
                                <div>
                                    <svg className="fill-stroke text-gray-800 dark:text-white" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M18.9984 19.0004L14.6484 14.6504" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <input type="text" placeholder="Search for products" className="text-sm text-gray-600 dark:text-gray-300 focus:outline-none bg-transparent" />
                            </div>
                            <button onClick={() => setShowMenu(false)} aria-label="close menu" className="focus:outline-none focus:ring-2 focus:ring-gray-800">
                                <svg className="fill-stroke text-gray-800 dark:text-white" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4 4L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-8">
                            <ul className="flex flex-col space-y-8">
                                <li className="flex items-center justify-between">
                                    <a href="javascript:void(0)" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        Home
                                    </a>
                                    <button className="fill-stroke text-black dark:text-white" aria-label="show options">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 6L8 10L4 6" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </li>
                                <li className="flex items-center justify-between">
                                    <a href="javascript:void(0)" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        Catalog
                                    </a>
                                    <button className="fill-stroke text-black dark:text-white" aria-label="show options">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 6L8 10L4 6" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </li>
                                <li className="flex items-center justify-between">
                                    <a href="javascript:void(0)" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        Pages
                                    </a>
                                    <button className="fill-stroke text-black dark:text-white" aria-label="show options">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 6L8 10L4 6" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </li>
                                <li className="flex items-center justify-between">
                                    <a href="javascript:void(0)" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        Blog
                                    </a>
                                    <button className="fill-stroke text-black dark:text-white" aria-label="show options">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 6L8 10L4 6" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </li>
                                <li className="flex items-center justify-between">
                                    <a href="javascript:void(0)" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        Contact us
                                    </a>
                                    <button className="fill-stroke text-black dark:text-white" aria-label="show options">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 6L8 10L4 6" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* Search menu */}
            {/* <div id="mobile-search-menu" className={`${search ? "flex" : "hidden"} md:hidden absolute inset-0 z-10 flex-col w-full h-screen bg-white dark:bg-gray-900 pt-4`}>
                <div className="w-full">
                    <div className="flex items-center justify-between border-b border-gray-200 pb-3 mx-4">
                        <div className="flex items-center space-x-3 mx-2">
                            <div>
                                <svg className="fill-stroke text-gray-800 dark:text-white" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18.9984 19.0004L14.6484 14.6504" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <input type="text" placeholder="Search for products" className="text-sm text-gray-600 focus:outline-none bg-transparent" />
                        </div>
                        <button aria-label="close menu" onClick={() => setSearch(false)} className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                            <svg className="fill-stroke" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 5L5 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5 5L15 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="mt-8 mx-4">
                    <h2 className="text-sm text-gray-600 dark:text-gray-300 uppercase">Suggestions</h2>
                    <ul className="mt-6 flex flex-col space-y-6">
                        <li className="flex items-center justify-between">
                            <a href="javascript:void(0)" className="text-sm text-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                Bags
                            </a>
                        </li>
                        <li className="flex items-center justify-between">
                            <a href="javascript:void(0)" className="text-sm text-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                Shoes
                            </a>
                        </li>
                        <li className="flex items-center justify-between">
                            <a href="javascript:void(0)" className="text-sm text-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                Capes
                            </a>
                        </li>
                        <li className="flex items-center justify-between">
                            <a href="javascript:void(0)" className="text-sm text-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                Coats
                            </a>
                        </li>
                        <li className="flex items-center justify-between">
                            <a href="javascript:void(0)" className="text-sm text-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                Denim 2021
                            </a>
                        </li>
                        <li className="flex items-center justify-between">
                            <a href="javascript:void(0)" className="text-sm text-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                Leather shoe collection 2021
                            </a>
                        </li>
                        <li className="flex items-center justify-between">
                            <a href="javascript:void(0)" className="text-sm text-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                Active wear
                            </a>
                        </li>
                        <li className="flex items-center justify-between">
                            <a href="javascript:void(0)" className="text-sm text-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                Sweat suits
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-full h-full flex items-end">
                    <ul className="bg-gray-50 dark:bg-gray-800 py-10 px-4 flex flex-col space-y-8 w-full">
                        <li>
                            <a className="flex items-center space-x-2 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline" href="javascript:void(0)">
                                <div>
                                    <svg className="fill-stroke" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.33333 1L1 5V19C1 19.5304 1.23413 20.0391 1.65087 20.4142C2.06762 20.7893 2.63285 21 3.22222 21H18.7778C19.3671 21 19.9324 20.7893 20.3491 20.4142C20.7659 20.0391 21 19.5304 21 19V5L17.6667 1H4.33333Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M1 5H21" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15.4436 9C15.4436 10.0609 14.9753 11.0783 14.1418 11.8284C13.3083 12.5786 12.1779 13 10.9991 13C9.82039 13 8.68993 12.5786 7.85643 11.8284C7.02294 11.0783 6.55469 10.0609 6.55469 9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className="text-base">Cart</p>
                            </a>
                        </li>
                        <li>
                            <a className="flex items-center space-x-2 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline" href="javascript:void(0)">
                                <div>
                                    <svg className="fill-stroke" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M17.3651 3.84172C16.9395 3.41589 16.4342 3.0781 15.8779 2.84763C15.3217 2.61716 14.7255 2.49854 14.1235 2.49854C13.5214 2.49854 12.9252 2.61716 12.369 2.84763C11.8128 3.0781 11.3074 3.41589 10.8818 3.84172L9.99847 4.72506L9.11514 3.84172C8.25539 2.98198 7.08933 2.49898 5.87347 2.49898C4.65761 2.49898 3.49155 2.98198 2.6318 3.84172C1.77206 4.70147 1.28906 5.86753 1.28906 7.08339C1.28906 8.29925 1.77206 9.46531 2.6318 10.3251L3.51514 11.2084L9.99847 17.6917L16.4818 11.2084L17.3651 10.3251C17.791 9.89943 18.1288 9.39407 18.3592 8.83785C18.5897 8.28164 18.7083 7.68546 18.7083 7.08339C18.7083 6.48132 18.5897 5.88514 18.3592 5.32893C18.1288 4.77271 17.791 4.26735 17.3651 3.84172V3.84172Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <p className="text-base">Wishlist</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div> */}
            {/* Main Menu */}
            {/* <div id="mobile-menu" className={`${showMenuSm ? "flex" : "hidden"} md:hidden absolute inset-0 z-10 flex-col w-full h-screen bg-white pt-4`}>
                <div className="w-full">
                    <div className="flex items-center justify-between border-b border-gray-200 pb-4 mx-4">
                        <div />
                        <div>
                            <p className="text-base font-semibold text-gray-800">Menu</p>
                        </div>
                        <button aria-label="close menu" onClick={() => setShowMenuSm(false)} className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                            <svg className="fill-stroke" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 5L5 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5 5L15 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div> */}
            {/* <div className="mt-6 mx-4">
                    <ul className="flex flex-col space-y-8">
                        <li className="flex items-center justify-between">
                            <a href="javascript:void(0)" className="text-base text-gray-800 focus:outline-none dark:text-white focus:ring-2 focus:ring-gray-800 hover:underline">
                                Home
                            </a>
                            <button className="focus:outline-none focus:ring-2 text-black dark:text-white focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5">
                                <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 6L8 10L4 6" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </li>
                        <li className="flex items-center justify-between">
                            <a href="javascript:void(0)" className="text-base text-gray-800 focus:outline-none dark:text-white focus:ring-2 focus:ring-gray-800 hover:underline">
                                Catalog
                            </a>
                            <button className="focus:outline-none focus:ring-2 text-black dark:text-white focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5">
                                <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 6L8 10L4 6" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </li>
                        <li className="flex items-center justify-between">
                            <a href="javascript:void(0)" className="text-base text-gray-800 focus:outline-none dark:text-white focus:ring-2 focus:ring-gray-800 hover:underline">
                                Pages
                            </a>
                            <button className="focus:outline-none focus:ring-2 text-black dark:text-white focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5">
                                <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 6L8 10L4 6" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </li>
                        <li className="flex items-center justify-between">
                            <a href="javascript:void(0)" className="text-base text-gray-800 focus:outline-none dark:text-white focus:ring-2 focus:ring-gray-800 hover:underline">
                                Blog
                            </a>
                            <button className="focus:outline-none focus:ring-2 text-black dark:text-white focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5">
                                <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 6L8 10L4 6" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </li>
                        <li className="flex items-center justify-between">
                            <a href="javascript:void(0)" className="text-base text-gray-800 focus:outline-none dark:text-white focus:ring-2 focus:ring-gray-800 hover:underline">
                                Contact us
                            </a>
                            <button className="focus:outline-none focus:ring-2 text-black dark:text-white focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5">
                                <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 6L8 10L4 6" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div> */}
            {/* <div className="w-full h-full flex items-end">
                    <ul className="bg-gray-50 dark:bg-gray-800 py-10 px-4 flex flex-col space-y-8 w-full">
                        <li>
                            <a className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline" href="javascript:void(0)">
                                <div>
                                    <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.33333 1L1 5V19C1 19.5304 1.23413 20.0391 1.65087 20.4142C2.06762 20.7893 2.63285 21 3.22222 21H18.7778C19.3671 21 19.9324 20.7893 20.3491 20.4142C20.7659 20.0391 21 19.5304 21 19V5L17.6667 1H4.33333Z" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M1 5H21" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15.4436 9C15.4436 10.0609 14.9753 11.0783 14.1418 11.8284C13.3083 12.5786 12.1779 13 10.9991 13C9.82039 13 8.68993 12.5786 7.85643 11.8284C7.02294 11.0783 6.55469 10.0609 6.55469 9" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className="text-base text-gray-800">Cart</p>
                            </a>
                        </li>
                        <li>
                            <a className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline" href="javascript:void(0)">
                                <div>
                                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M17.3651 3.84172C16.9395 3.41589 16.4342 3.0781 15.8779 2.84763C15.3217 2.61716 14.7255 2.49854 14.1235 2.49854C13.5214 2.49854 12.9252 2.61716 12.369 2.84763C11.8128 3.0781 11.3074 3.41589 10.8818 3.84172L9.99847 4.72506L9.11514 3.84172C8.25539 2.98198 7.08933 2.49898 5.87347 2.49898C4.65761 2.49898 3.49155 2.98198 2.6318 3.84172C1.77206 4.70147 1.28906 5.86753 1.28906 7.08339C1.28906 8.29925 1.77206 9.46531 2.6318 10.3251L3.51514 11.2084L9.99847 17.6917L16.4818 11.2084L17.3651 10.3251C17.791 9.89943 18.1288 9.39407 18.3592 8.83785C18.5897 8.28164 18.7083 7.68546 18.7083 7.08339C18.7083 6.48132 18.5897 5.88514 18.3592 5.32893C18.1288 4.77271 17.791 4.26735 17.3651 3.84172V3.84172Z"
                                            stroke="#1F2937"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <p className="text-base text-gray-800">Wishlist</p>
                            </a>
                        </li>
                    </ul>
                </div> */}
            {/* </div> */}
        </div >
    )
}

export default HeaderWebsite