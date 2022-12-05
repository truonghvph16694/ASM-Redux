import React from 'react'
import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../../apiSlice/product';



const Homepage = () => {
    const { data: products = [], isLoading, error } = useGetProductsQuery();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;
    return (
        <div>



            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-5 text-center sm:text-right sm:ml-auto">
                        <h1 className="text-4xl font-bold sm:text-5xl pl-16 text-red-500 font-mono">
                            Mừng 3 năm

                            <span className="hidden sm:block text-xl text-amber-500 font-extrabold ">
                                Chuỗi hoạt động thay lời chi ân<br />
                                trân thành!
                            </span>
                        </h1>

                        <a className="inline-flex text-white items-center px-6 py-3 font-medium " href="https://twitter.com/sahilnetic">
                            {/* <svg fill="white" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" /></svg> */}
                            &nbsp;

                            <button className="btn">THAM GIA NGAY!</button>
                        </a>
                    </div>
                </div>
                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-2 h-full ">

                    <img className="pl-24 w-8/12" src="https://im.uniqlo.com/global-cms/spa/res056c7602f08f357e79cf74cb50f34162fr.jpg" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-2/4 w-48" src="https://im.uniqlo.com/global-cms/spa/res958c7c361654a6e0e5b4eeeae7bc0ad8fr.jpg" />

                <img className="sm:w-2/4 w-48" src="https://im.uniqlo.com/global-cms/spa/resb62ba4a9fc3b78600c9bf3adcb57429ffr.jpg" />
            </div>


            <h1 className="text-center text-2xl sm:text-4xl py-10 font-medium">SẢN PHẨM NỔI BẬT</h1>
            <div className=" grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-3 text-center mx-6 sm:mx-48 gap-x-10 gap-y-5 my-10">
                {products.map((product: any) => (
                    <div className="card border border-2 shadow-lg rounded-lg py-10">
                        <Link to={`product/detail/${product.id}`}>
                            <div className=" col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center" key={product.id}>

                                <div className="bg-white rounded-xl mt-5">
                                    <img
                                        src={product.image}
                                        className="h-40 rounded-md"
                                        alt=""
                                    />
                                </div>
                                <div className="bg-transparent shadow-lg rounded-lg mt-4 w-64">
                                    <div className="py-5 ">
                                        <span className="font-bold text-gray-800 text-xl"> {product.name} </span>
                                        <div className="flex items-center justify-between">
                                            <div className="text-sm text-gray-600 font-light">
                                                M-L-XL
                                            </div>
                                            <div className="text-2xl text-red-600 font-bold">
                                                {product.price}₫
                                            </div>

                                        </div>

                                    </div>

                                </div>
                                {/* <br /> */}
                                <div className="mt-2 mb-2">
                                    <button className="btnn w-29">Add To Cart</button>
                                </div>
                            </div>
                        </Link>

                    </div>
                ))}
            </div>
            {/* <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-2/4 w-48" src="https://im.uniqlo.com/global-cms/spa/resb62ba4a9fc3b78600c9bf3adcb57429ffr.jpg" />
            </div> */}
            <div className="grid  place-items-center sm:mt-20">

                <img className="sm:w-2/4 w-48" src="https://im.uniqlo.com/global-cms/spa/res93aab1f5090ca22e9e9d7ae27974532bfr.jpg" />
                <h2 className='p-4 font-bold'>1. UTme!</h2>
                <img className="sm:w-2/4 w-48" src="https://im.uniqlo.com/global-cms/spa/resb18aaf3dd0ee9b870190d2839a5052d4fr.jpg" />
                <h2 className='font-bold p-4'>  2. Tham Gia Minigame</h2>
                <img className="sm:w-2/4 w-48" src="https://im.uniqlo.com/global-cms/spa/resa13830107bbd440f463da8ed03620a7efr.jpg" />
                <img className="sm:w-2/4 w-48" src="https://im.uniqlo.com/global-cms/spa/resd6a10b87d6bf2839ea11d66a44644f0efr.jpg" />
                <img className="sm:w-2/4 w-48" src="https://im.uniqlo.com/global-cms/spa/resc3f67f04ac0f824661d3d9e42c739bb8fr.jpg" />
                <br />
                <br />
                <hr className='w-3/4 border outline border-red-500 ' />
                <img className="sm:w-1/4 w-48 pt-16" src="https://im.uniqlo.com/global-cms/spa/res0ec76a805f415af4e61a4588c48a9b7efr.jpg" />
            </div>

            <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="sahilnetic" data-description="Support me on Buy me a coffee!" data-message="" data-color="#FFDD00" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
        </div >
    )
}

export default Homepage
