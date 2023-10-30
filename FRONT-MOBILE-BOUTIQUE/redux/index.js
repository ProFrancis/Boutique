import { configureStore } from "@reduxjs/toolkit";

// SLICES
import ProductSlice from './product.slice'

export default configureStore({
  reducer: {
    products: ProductSlice
  }
})