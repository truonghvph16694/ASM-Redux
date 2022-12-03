import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <div>
            <header>
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 pt-12">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a href="#" className="flex items-center">
                            <img src="data:image/png;base64,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" className="mr-3 h-12 sm:h-16" alt="Flowbite Logo" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Hoàng Trường Shop</span>
                        </a>
                        <div className="flex items-center lg:order-2">
                            <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>
                            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get started</a>
                            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Company</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>


            <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script>
        </div >
    )
}

export default Header