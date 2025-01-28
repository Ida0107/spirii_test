import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const battleOfDragonsApi = createApi({
    reducerPath: 'battle',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/"}),
    endpoints: (builder) => ({
        getDragons: builder.query<any, void>({
            query: () => ({
                url: `/dragons`,
                method: 'GET',
            }),
        }),
    }),
});

export const {
    useGetDragonsQuery,
} = battleOfDragonsApi;
