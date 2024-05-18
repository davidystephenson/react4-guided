import { configureStore } from "@reduxjs/toolkit";

import {
  userLoginReducer,
  userLogoutReducer,
} from "./reducers/userReducers";
import { listProductsReducer, fetchProductDetailsReducer } from "./reducers/productReducers";

const reducer = {
  login: userLoginReducer,
  logout: userLogoutReducer,
  listProducts: listProductsReducer,
  productDetails: fetchProductDetailsReducer
};

const userInfoFromLocalStorage = sessionStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const localProductsList = localStorage.getItem('productsList')
const productsList = localProductsList
  ? JSON.parse(localProductsList)
  : []

const preloadedState = {
  login: { userInfo: userInfoFromLocalStorage },
  listProducts: {
    loading: false,
    products: productsList
  },
  productDetails: {
    loading: false,
    product: {}
  }
};

const store = configureStore({
  reducer,
  preloadedState
});

export default store