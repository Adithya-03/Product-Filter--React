import axios from "axios";

const BASE_URL = 'http://fakestoreapi.com'

export const getAllProducts = async() =>{
    const response = await axios.get(`${BASE_URL}/products`)

    return response.data;

}

export const getAllProductId = async(id) =>{
    const response = await axios.get(`${BASE_URL}/products/${id}`)

    return response

}

export const getProductImage = async(id) =>{
    const response = await axios.get(`${BASE_URL}/products/${id}/image`)

    return response.data;

}