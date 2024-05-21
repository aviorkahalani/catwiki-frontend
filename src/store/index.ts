import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { catApi } from './cat'

export const store = configureStore({
  reducer: {
    [catApi.reducerPath]: catApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(catApi.middleware),
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export { useFetchCatBreedsQuery } from './cat'
