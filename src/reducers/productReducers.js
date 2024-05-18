import { PRODUCT_DETAILS_FINISH, PRODUCT_DETAILS_START, PRODUCT_LIST_FINISH, PRODUCT_LIST_START } from "../constants/productActionConstants"

export const listProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_START: {
      const newState = {
        ...state,
        loading: true
      }
      return newState
    }
    case PRODUCT_LIST_FINISH: {
      const newState = {
        ...state,
        loading: false,
        products: action.payload
      }
      return newState
    }
    default: {
      return state
    }
  }
}

export const fetchProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_START: {
      const newState = { ...state, loading: true }
      return newState
    }
    case PRODUCT_DETAILS_FINISH: {
      const newState = { ...state, loading: false, product: action.payload }
      return newState
    }
    default: {
      return state
    }
  }
}