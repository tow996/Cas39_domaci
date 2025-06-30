const BASE_URL = 'http://localhost:3000/products'
// prosledjena funkcija u operations parametru, koja dolazi iz kontrolera
// (data)=> model.filterData(data, searchInput.value )
async function fetchData(callback, operations){
    try{
        const result = await fetch(BASE_URL)
        let resultData = await result.json()
        if(operations){
            resultData = operations(resultData) 
        }
        
        callback(resultData)
    }catch(error){
        console.error(error);    
    }
}


async function createProduct(product){
    try{
        const result = await fetch(BASE_URL, {
            method: 'POST',
            headers : {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        const data = await result.json()

    }catch(err){
        console.error(err)
    }
}

export {fetchData, createProduct}