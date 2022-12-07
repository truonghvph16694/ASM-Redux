import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICategory } from "../interfaces/categories";
export const categoryApi = createApi({
    reducerPath: "cateroyApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    tagTypes: ["Category"],
    endpoints: (builder) => ({
        getCategories: builder.query<ICategory[], void>({
            query: () => "/categories",
            providesTags: ["Category"],
        }),
        getCategory: builder.query<ICategory, void>({
            query: (id: void) => ({
                url: `/categories/${id}`,
                method: "GET",
            }),
            providesTags: ['Category']
        }),
        addCategory: builder.mutation<ICategory, Omit<ICategory, "id">>({
            query: (category) => ({
                url: "/categories",
                method: "POST",
                body: category,
            }),
            invalidatesTags: ["Category"],
        }),
        editCategory: builder.mutation<ICategory, ICategory>({
            query: (category) => ({
                url: `categories/${category.id}`,
                method: 'PUT',
                body: category,
            }),
            invalidatesTags: ['Category'],
        }),
        removeCategory: builder.mutation<ICategory, ICategory>({
            query: (id) => ({
                url: `categories/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Category'],
        }),
        // upload: builder.mutation<ICategory, ICategory>({

        // })
    })
});
export const { useGetCategoriesQuery,
    useGetCategoryQuery,
    useAddCategoryMutation,
    useEditCategoryMutation,
    useRemoveCategoryMutation } = categoryApi;