import { truncateSource } from "../../utils/helper.js"

const main = document.querySelector('main')
const searchInput = document.getElementsByTagName('input')[0]
const openModalBtn = document.getElementById('product-modal-btn')
const sortInput = document.getElementById('sort-price')

const Home = ()=> {
    const createCard = (productData)=> {
        const getSpecificAttr = (dataAttr) => {
            let template = ''
            for(const [key, value] of Object.entries(dataAttr)){
                template += `<p>${key}: ${value}</p>`
            }
            return template
        }
        const html = `
            <article class='product-card' >
                <img src='${productData.image}' alt='${productData.name}'/>
                <h2>${productData.name}</h2>
                <p>${productData.price} &euro;</p>
                <p>${truncateSource(productData.description)}...</p>
                <p>In Stock: ${productData.in_stock ? 'Yes' : 'No'}</p>
                ${productData.characteristics ? getSpecificAttr(productData.characteristics) : '<p>No additional information.</p>'}
            </article>
        `
        main.insertAdjacentHTML('beforeend', html)
    }
    
    const renderContent = (products) => {
        main.innerHTML = ''
        products.forEach(product => createCard(product))
    }

    const applySearchInputListener = (handler) => {
        searchInput.addEventListener('input', handler)
    }

    const applyOpenModalListener = (handler)=> {
        openModalBtn.addEventListener('click', handler)
    }

    const applySortInputListener = (handler) => {
        sortInput.addEventListener('change', handler)
    }

    return {
        renderContent,
        applySearchInputListener,
        searchInput,
        applyOpenModalListener,
        sortInput,
        applySortInputListener
    }
}



export default Home;