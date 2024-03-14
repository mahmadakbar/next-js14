import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '@store/reducers'
import storage from 'redux-persist/lib/storage'

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

const persistConfig = {
  key: 'redux',
  storage: storage,
  whitelist: [],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

// store data
export const setItem = (key: string, value: any) => {
  let dataStorage: any
  if (typeof window !== 'undefined') {
    dataStorage = localStorage.setItem(key, JSON.stringify(value))
  }

  return dataStorage
}

// get data
export const getItem = (key: string) => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key)
  }
}
