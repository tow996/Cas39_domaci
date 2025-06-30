import { createProduct, fetchData } from "./api.js"
import { operations, operate } from "./operations.js"

const Model = ()=> {
    const newProductItem = {
        name: null,
        price: 0,
        image: null,
        description: null,
        in_stock:false,
        characteristics: {}
    }

    return {
        fetchData,
        createProduct,
        newProductItem,
        operate,
        operations
    }
}

export default Model