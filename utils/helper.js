const truncateSource = (data, limit = 10) => {
    const stringToArr = data.split(' ')
    return stringToArr.slice(0, limit).join(' ')
}


const debounce = (callback, delay) => {
    let timeoutID;
    return function (){
        if(timeoutID){
            clearTimeout(timeoutID)
        }
        timeoutID = setTimeout(()=> {
            callback()
        }, delay)
    }
}


export  {truncateSource, debounce}
