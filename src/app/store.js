import { configureStore , getDefaultMiddleware} from '@reduxjs/toolkit';
import blogReducer from '../features/blogs/blogSlice';

export const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
  middleware: getDefaultMiddleware({ 
    serializableCheck: false,
  }),
});
