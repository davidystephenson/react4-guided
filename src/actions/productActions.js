import { GET_ALL_PRODUCTS_API } from "../constants/backend"
import {
  PRODUCT_LIST_START,
  PRODUCT_LIST_FINISH,
  PRODUCT_DETAILS_START,
  PRODUCT_DETAILS_FINISH
} from '../constants/productActionConstants'
import axios from 'axios'

export const listProducts = () => async (dispatch) => {
  dispatch({ type: PRODUCT_LIST_START })

  const response = await axios.get(GET_ALL_PRODUCTS_API)
  console.log('response', response)
  const productsList = JSON.stringify(response.data.data)
  localStorage.setItem('productsList', productsList)
  dispatch({
    type: PRODUCT_LIST_FINISH,
    payload: response.data.data
  })
}

export const fetchProductDetails = (productId) => async (dispatch) => {
  dispatch({ type: PRODUCT_DETAILS_START })

  const url = `${GET_ALL_PRODUCTS_API}/${productId}`
  const response = await axios.get(url)
  dispatch({
    type: PRODUCT_DETAILS_FINISH,
    payload: response.data.data
  })
}
