import { authApi } from './../apiSlice/apiAuth';

import { configureStore, ThunkAction, Action, combineReducers, createSlice } from '@reduxjs/toolkit';
import { productApi } from '../apiSlice/product';
import authReducer from '../slice/auth'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { categoryApi } from '../apiSlice/category';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
}

const rootReducer = combineReducers({
    auth: authReducer,
    [productApi.reducerPath]: productApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const UserSlice = createSlice({
    name: "user",
    initialState: {
      isAuthenticated: false,
      user: null
    },
    reducers: {
      login: (state:any) => {
        state.user = state.user;
        state.isAuthenticated = true;
        console.log("LOGIN", state);
      },
      logout: (state :any ) => {
        state.user = null;
        state.isAuthenticated = false;
      }
    }
  });
export const store = configureStore({
    reducer: 
    {
        persistedReducer,
        authApi: authApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        // [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(productApi.middleware , categoryApi.middleware),
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export default persistStore(store)