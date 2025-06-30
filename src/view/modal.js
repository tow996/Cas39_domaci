const createProductNameInput = document.getElementById('create-product-name')
const createProductPriceInput = document.getElementById('create-product-price')
const createProductImageInput = document.getElementById('create-product-image')
const createProductDescriptionInput = document.getElementById('create-product-description')
const createProductInStock = document.getElementById('create-product-in-stock')

const createProductCharKeyInput = document.getElementById('create-product-char-key')
const createProductCharValueInput = document.getElementById('create-product-char-value')
const addBadgeBtn = document.getElementById('add-badge-btn')
const badgeContainer = document.getElementsByClassName('char-badge-container')[0]
const createProductBtn = document.getElementById('create-product-btn')

const resetFormBtn = document.getElementById('reset-form-btn');

const Modal = ()=> {

    const handleAddBadge = (callback)=> {
            const createBadgeElement = (key,value) => {
                const html = `
                        <div class="char-badge" data-key=${key} >
                            <p>${key}:${value}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class='delete-icon-badge'>
                                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/>
                            </svg>
                        </div>
                `
                badgeContainer.insertAdjacentHTML('beforeend', html)
            }
            if(createProductCharKeyInput.value && createProductCharValueInput.value) {
                createBadgeElement(createProductCharKeyInput.value, createProductCharValueInput.value)
                callback(createProductCharKeyInput.value, createProductCharValueInput.value)
                createProductCharKeyInput.value= ''
                createProductCharValueInput.value = ''
            }
        
        }


    const handleDeleteBadge = (event, callback)=> {
    const parentElement = event.target.closest('.char-badge')
            const deleteIconElement = event.target.closest('.delete-icon-badge')    
            if(deleteIconElement) {
                callback(parentElement.dataset.key)
                parentElement.remove()
            }
    }


    const clearInputs = ()=> {
        createProductNameInput.value = ''
        createProductPriceInput.value = ''
        createProductImageInput.value = ''
        createProductDescriptionInput.value = ''
        createProductCharKeyInput.value = ''
        createProductCharValueInput.value = ''
        createProductInStock.checked = false;
    }

    const removeListeners = (formValidation, handleBadge) => {
        const {productName, productPrice, productImageUrl, productDescription, productInStock, handleCreateCard} = formValidation()
        const {addBadge, deleteBadge} = handleBadge()
        createProductNameInput.removeEventListener('blur', productName)
        createProductPriceInput.removeEventListener('blur', productPrice)
        createProductImageInput.removeEventListener('blur', productImageUrl)
        createProductDescriptionInput.removeEventListener('blur', productDescription)
        createProductInStock.removeEventListener('change', productInStock)
        addBadgeBtn.removeEventListener('click',() =>  handleAddBadge(addBadge))
        badgeContainer.removeEventListener('click',(event) => handleDeleteBadge(event, deleteBadge))
        createProductBtn.removeEventListener('click', handleCreateCard)
        resetFormBtn.removeEventListener('click', clearInputs);
    }

    const setupListeners = (formValidation, handleBadge) => {
        const {productName, productPrice, productImageUrl, productDescription, productInStock, handleCreateCard} = formValidation()
        const {addBadge, deleteBadge} = handleBadge()
        createProductNameInput.addEventListener('blur', productName)
        createProductPriceInput.addEventListener('blur', productPrice)
        createProductImageInput.addEventListener('blur', productImageUrl)
        createProductDescriptionInput.addEventListener('blur', productDescription)
        createProductInStock.addEventListener('change', productInStock)
        addBadgeBtn.addEventListener('click', ()=> handleAddBadge(addBadge))
        badgeContainer.addEventListener('click',(event) => handleDeleteBadge(event, deleteBadge))
        createProductBtn.addEventListener('click', handleCreateCard)
        resetFormBtn.addEventListener('click', clearInputs);
    }

    return {
        clearInputs,
        removeListeners,
        setupListeners,
    }
}



export default Modal