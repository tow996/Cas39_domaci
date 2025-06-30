const operations = {
    keyword: '',
    sort: ''
}

const filterData = (data)=> {
    return data.filter(product => product.name.toLowerCase().includes(operations.keyword))
}

const sortData = (data) => {
    if(operations.sort === 'unordered') {
        return data;
    }
    if(operations.sort === 'ascending') {
        return data.sort((a, b) => a.price - b.price);
    }
    if(operations.sort === 'descending') {
        return data.sort((a, b) => b.price - a.price);
    }
}

const operate = (data) => {
    if(operations.keyword) {
        data = filterData(data)
    }
    if(operations.sort) {
        data = sortData(data)
    }
    return data;
}

export {operate, operations}