import { Button, Form, Input } from 'antd';
import { SubmitHandler, useForm } from "react-hook-form";
import { Navigate, useNavigate } from 'react-router-dom';
import { upload } from '../api/product';
import { useAddProductMutation } from "../apiSlice/product";
import { IProduct } from "../interfaces/product";



const ProductAdd = () => {
    const [addProduct] = useAddProductMutation();
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IProduct>();
    const onSubmit: SubmitHandler<IProduct> = async (products: IProduct) => {

        try {
            const formData = new FormData()
            formData.append("file", products.image[0]);
            formData.append("upload_preset", "s44cgkqu");
            formData.append("cloud_name", "dufcivzn4");
            const image = await upload(formData)
            console.log(image);

            addProduct({ ...products, image: image.url });
            navigate("/admin/products");
        } catch (error) {

        }
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Tên Sản Phẩm</label><br />
                <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' {...register("name", { required: true })} />
                {errors.name && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <label htmlFor="">Giá</label><br />
                <input type="number" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' {...register("price", { required: true })} />
                {errors.price && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <label htmlFor="">Ảnh</label><br />
                <input type="file" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' {...register("image", { required: true })} />
                {errors.price && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <label htmlFor="">Số Lượng</label><br />
                <input type="number" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' {...register("quantity", { required: true })} />
                {errors.quantity && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <label htmlFor="">Mô tả</label><br />
                <input type="string" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' {...register("description", { required: true })} />
                {errors.description && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Submit</button>
            </form>
            <hr />
        </div>
    );
};

export default ProductAdd;
