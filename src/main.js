import { debounce, truncateSource} from "../utils/helper.js"
import { fetchData } from "./model/api.js"
import { setupListeners } from "./view/modal.js"



// const main = document.querySelector('main')
const searchInput = document.getElementsByTagName('input')[0]

// const createCard = (productData)=> {
//     const getSpecificAttr = (dataAttr) => {
//         let template = ''
//         for(const [key, value] of Object.entries(dataAttr)){
//             template += `<p>${key}: ${value}</p>`
//         }
//         return template
//     }
//     const html = `
//         <article class='product-card' >
//             <img src='${productData.image}' alt='${productData.name}'/>
//             <h2>${productData.name}</h2>
//             <p>${productData.price} &euro;</p>
//             <p>${truncateSource(productData.description)}...</p>
//             ${productData.characteristics ? getSpecificAttr(productData.characteristics) : '<p>No additional information.</p>'}
//         </article>
//     `
//     main.insertAdjacentHTML('beforeend', html)
// }

// const renderContent = (products) => {
//     main.innerHTML = ''
//     products = filterData(products)
//     products.forEach(product => createCard(product))
// }


// const filterData = (products)=> {
//     const searchValue = searchInput.value.toLowerCase()
//     return products.filter(product => product.name.toLowerCase().includes(searchValue))
// }

const searchInputLogic = () => fetchData(renderContent)

document.addEventListener('DOMContentLoaded', ()=> {
    fetchData(renderContent)
    const debounceSreach = debounce(searchInputLogic, 500)
    searchInput.addEventListener('input', ()=> {
        debounceSreach()
    })
    setupListeners()
})

