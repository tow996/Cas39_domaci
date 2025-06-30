const filterData = (data, keyword)=> {
    return data.filter(product => product.name.toLowerCase().includes(keyword))
}

const sortData = (data, howToSort) => {
    if(howToSort === 'unordrered') {
        return data;
    }
    if(howToSort === 'ascending') {
        return data.sort((a, b) => a.price - b.price);
    }
    if(howToSort === 'descending') {
        return data.sort((a, b) => b.price - a.price);
    }
}

export {filterData, sortData}