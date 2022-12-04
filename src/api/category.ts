import { ICategory } from '../interfaces/categories';
import category from '../slice/category';
import instance from './instance';

export const getCategories = async (): Promise<ICategory[]> => {
    return await instance.get('/categories');
}
export const getCategory = async (id: number): Promise<ICategory> => {
    return await instance.get(`/categories/${id}`);
}
export const addCategory = async (category: ICategory) => {
    return await instance.post('/categories', category);
}
export const removeCategory = async (id: number) => {
    return await instance.delete(`/categories/${id}`);
}
export const updateCategory = async (category: ICategory) => {
    return await instance.put(`/categories/${category.id}`, category);
}
export const upload = (data : any) =>{
    return   fetch("https://api.cloudinary.com/v1_1/dufcivzn4/image/upload", {
        method: "post",
        body: data,
    }).then((resp) => resp.json())
}
export const searchFullText = (keyword:any) => {
    const url = `/search?q=${keyword}`
    return instance.post(url)
}
