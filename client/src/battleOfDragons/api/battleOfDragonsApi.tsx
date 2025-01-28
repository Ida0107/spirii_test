import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IBattleResult, IDragon } from '../interfaces';

export const battleOfDragonsApi = createApi({
    reducerPath: 'battle',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/"}),
    endpoints: (builder) => ({
        getDragons: builder.query<IDragon[], void>({
            query: () => ({
                url: `/dragons`,
                method: 'GET',
            }),
        }),
        fightDragons: builder.query<IBattleResult, {dragonOneId: string; dragonTwoId: string}>({
            query: ({dragonOneId, dragonTwoId}) => ({
                url: `/battle/fight-dragons?dragonOneId=${dragonOneId}&dragonTwoId=${dragonTwoId}`,
                method: 'GET',
            }),
        }),
    }),
});

export const {
    useGetDragonsQuery,
    useLazyFightDragonsQuery
} = battleOfDragonsApi;
