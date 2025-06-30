import { createProduct, fetchData } from "./api.js"
import { filterData, sortData } from "./operations.js"

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
        filterData ,
        createProduct,
        fetchData,
        sortData,
        newProductItem
    }
}

export default Model