import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist';
import rootReducer from './modules/rootReducer';

const persistConfig = {
    key: 'world_cup_2022_growdev',
    storage,
    whitelist: ['teams', 'matches']
}

const persistedReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({ reducer: persistedReducers });
export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;