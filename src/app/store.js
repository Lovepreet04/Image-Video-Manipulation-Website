import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userAuthapi } from '../services/userAuthapi'

export const store = configureStore({
  reducer: {

    [userAuthapi.reducerPath]: userAuthapi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAuthapi.middleware),
})

setupListeners(store.dispatch)