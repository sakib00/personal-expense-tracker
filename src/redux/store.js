import { configureStore } from '@reduxjs/toolkit';
import entryReducer from './entrySlice';

export default configureStore({
    reducer: { entry: entryReducer },
});
