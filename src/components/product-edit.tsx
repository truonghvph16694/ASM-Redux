import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEditProductMutation, useGetProductQuery } from "../apiSlice/product";
import { useAppDispatch } from "../app/hook";
import { IProduct } from "../interfaces/product";


type Props = {};

const ProductEdit = (props: Props) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IProduct>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { id } = useParams();
    // console.log(id);
    const [editProduct] = useEditProductMutation();
    const { data: products, isLoading, error } = useGetProductQuery(parseInt(id as string));
    // console.log(products);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;
    useEffect(() => {
        reset(products);
    }, [products]);


    const onSubmit: SubmitHandler<IProduct> = (data: any) => {
        try {
            editProduct(data)
            navigate("/admin/products")
        } catch (error) {

        }
    };
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name", { required: true })} />
                {errors.name && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <input type="number" {...register("price", { required: true })} />
                {errors.price && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <input type="number" {...register("quantity", { required: true })} />
                {errors.quantity && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default ProductEdit;
