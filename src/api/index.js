import axios from 'axios'

const BaseUrl = 'https://fakestoreapi.com'

export const ProductsApi = axios.create({ baseURL: BaseUrl })
