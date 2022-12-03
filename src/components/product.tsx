import { DeleteOutlined, EditTwoTone } from "@ant-design/icons";
import { Button, message, Popconfirm } from "antd";
import { useGetProductsQuery, useRemoveProductMutation } from "../apiSlice/product";
import { IProduct } from "../interfaces/product";
import { Link } from "react-router-dom";
const Product = () => {
    const { data: products = [], isLoading, error } = useGetProductsQuery();
    // console.log(products);

    const [removeProduct] = useRemoveProductMutation();
    // const getData = () => {
    // return products.map((product) => ({
    //     key: product.id,
    //     name: product.name,
    //     price: product.price,
    //     quantity: product.quantity,
    // }));
    // };

    const removeItem = (id: any) => {
        // console.log(id);
        removeProduct(id);
        message.info("Xoá Sản Phẩm Thành Công!!!");
    };
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;
    return (
        <div className="mt-2 ">
            <table className="w-full mx-auto table-auto">
                <thead className="justify-between">
                    <tr className="bg-green-600">
                        <th className="px-16 py-2">
                            <span className="text-gray-100 font-semibold">Image</span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-gray-100 font-semibold">Tên Sản Phẩm</span>
                        </th>

                        <th className="px-16 py-2">
                            <span className="text-gray-100 font-semibold">Giá</span>
                        </th>

                        <th className="px-16 py-2">
                            <span className="text-gray-100 font-semibold">Số Lượng</span>
                        </th>

                        <th className="px-16 py-2">
                            <span className="text-gray-100 font-semibold">Mô tả</span>
                        </th>

                        <th className="px-16 py-2">
                            <span className="text-gray-100 font-semibold">Action</span>
                        </th>
                    </tr>
                </thead>

                <tbody className="bg-gray-200">
                    {products.map((product: any) => (
                        <tr className="bg-white border-b-2 border-gray-200" key={product.id}>
                            <td>
                                <div >{product.name}</div>
                            </td>
                            <td className="px-16 py-2 flex flex-row items-center">
                                <img
                                    className="h-24 w-24  "
                                    src={product.image}
                                    alt=""
                                />
                            </td>


                            <td className="px-16 py-2">
                                <span >{product.price}</span>
                            </td>
                            <td className="px-16 py-2">
                                <span>{product.quantity}</span>
                            </td>
                            <td className="px-16 py-2">
                                <span>{product.description}</span>
                            </td>

                            <td className="px-16 py-2">
                                <button className="w-10 h-10"> <Link to={`${product.id}/update`}><EditTwoTone /> </Link> </button>
                                <a>
                                    <Popconfirm
                                        placement="top"
                                        title="Bạn có chắc chắn muốn xóa không?"
                                        onConfirm={() => removeItem(product.id)}
                                        okText="Đồng Ý"
                                        cancelText="Cancel"
                                    >
                                        <Button type="primary" danger>
                                            <DeleteOutlined />
                                        </Button>
                                    </Popconfirm></a>

                                {/* <span className="text-yellow-500 flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-700 mx-2"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-red-700"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </span> */}
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};

export default Product;
