import { configureStore, Store } from '@reduxjs/toolkit';
import { battleOfDragonsApi } from '../battleOfDragons/api/battleOfDragonsApi';


export const rootReducer = () => {
    return {
        [battleOfDragonsApi.reducerPath]: battleOfDragonsApi.reducer,
    };
};

export const customMiddleware = [
    battleOfDragonsApi.middleware
];

export function createStore(): Store<any> {
    const store = configureStore({
        reducer: rootReducer(),
        devTools: process.env.NODE_ENV !== 'production',
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: process.env.NODE_ENV === 'development',
                immutableCheck: false,
            }).concat(customMiddleware),
    });

    return store;
}
