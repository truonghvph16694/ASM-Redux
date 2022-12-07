import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { upload } from '../api/category';
import { useEditCategoryMutation } from '../apiSlice/category';
import { useAppDispatch } from '../app/hook';
import { ICategory } from '../interfaces/categories';
import { fetchCategory } from '../slice/category';

type Props = {}

const CategoryEdit = (props: Props) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ICategory>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const [editCategory] = useEditCategoryMutation();
    const onSubmit: SubmitHandler<ICategory> = async (categories: ICategory) => {
        try {
            const formData = new FormData()
            formData.append("file", categories.image[0]);
            formData.append("upload_preset", "s44cgkqu");
            formData.append("cloud_name", "dufcivzn4");
            const image = await upload(formData)
            console.log(image);

            editCategory({ ...categories, image: image.url })
            navigate("/admin/categories")
        } catch (error) {

        }

    };
    useEffect(() => {
        (async () => {
            const { payload: categories } = await dispatch(fetchCategory(id as any));
            reset(categories as ICategory);
        })();
    }, [id]);
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Tên Sản Phẩm</label><br />
                <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' {...register("name", { required: true })} />
                {errors.name && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <label htmlFor="">Ảnh</label><br />
                <input type="file" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' {...register("image", { required: true })} />
                {errors.image && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Submit</button>
            </form>
        </div>
    )
}

export default CategoryEdit