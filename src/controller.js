import { debounce } from "../utils/helper.js";
import Model from "./model/model.js";
import View from "./view/view.js";



const Controller = ()=> {
    const model = Model()
    const view = View()
    const {renderContent, applySearchInputListener,searchInput , applyOpenModalListener, sortInput, applySortInputListener} = view.HomePage()
    const {clearInputs, removeListeners, setupListeners} = view.Modal()

    const operateDataLogic = () => model.fetchData(renderContent, (data) => model.operate(data));

    const searchInputLogic = () => { 
        model.operations.keyword = searchInput.value;
        console.log(model.operations)
        return operateDataLogic();
    }

    const sortInputLogic = () => {
        model.operations.sort = sortInput.value;
        return operateDataLogic();
    }

    const handleBadge = ()=> {
        const addBadge = (key,value)=> {
            model.newProductItem.characteristics[key] = value
        }
        const deleteBadge = (key)=> {
            delete model.newProductItem.characteristics[key]      
        }
        return {
            addBadge,
            deleteBadge
        }
    }
    const formValidation = ()=> {
        const productName = (event) => {
            const productNameValue = event.target.value.trim() 
            if(!productNameValue) {
                console.error('Please fill the name field.')
                return
            }
            model.newProductItem.name = productNameValue
        }
        const productPrice = (event)=> {
            const productPriceValue  = Number(event.target.value)
            if(!productPriceValue) {
                console.error('The price cannot be empty or 0.')
                return
            }
            if(productPriceValue < 1 || productPriceValue > 10000){
                console.error('Price must range between 1 and 10000.')
                return
            }
            model.newProductItem.price = productPriceValue
        }
        const productImageUrl = (event) => {
            const productImageUrlValue = event.target.value.toLowerCase().trim()

            if(!productImageUrlValue){
                console.error('Please fill the image url field.')
                return
            }
            if(!((productImageUrlValue.startsWith('www.') ||
                productImageUrlValue.startsWith('http://') ||
                productImageUrlValue.startsWith('https://'))
                &&
                (productImageUrlValue.endsWith('.jpg') ||
                productImageUrlValue.endsWith('.png') ||
                productImageUrlValue.endsWith('.jpeg')))){
                    console.error('Image url wrong format.')
                    return
                }
                model.newProductItem.image = productImageUrlValue
        }
        const productDescription = (event)=> {
            const productDescriptionValue = event.target.value.trim()

            if(!productDescriptionValue){
                console.error('Please fill the description field.')
                return
            }
            if(productDescriptionValue.length > 100) {
                console.error('Description cannot be above 100 characters.')
                return
            }
            model.newProductItem.description = productDescriptionValue
        }

        const productInStock = (event) => {
            model.newProductItem.in_stock = event.target.checked;
        }

        const handleCreateCard = ()=> {
            console.log(model.newProductItem);
            if (model.newProductItem.name && model.newProductItem.price && model.newProductItem.image && model.newProductItem.description) {
                if(Object.keys(model.newProductItem.characteristics).length === 0) {
                    model.newProductItem.characteristics = null
                }
                model.createProduct(model.newProductItem)
            } else {
                console.error('Product is missing some information.')
            }
        }
        
        
        return {
            handleCreateCard,
            productName,
            productPrice,
            productImageUrl,
            productDescription,
            productInStock
        }
    }

    const attachHandlers = () => {
            const debounceSearch = debounce(searchInputLogic , 500)
            applySearchInputListener(debounceSearch)
            applySortInputListener(sortInputLogic)
            applyOpenModalListener(()=> {
                clearInputs()
                removeListeners(formValidation, handleBadge)
                setupListeners(formValidation, handleBadge)
            })

    }


    const initApp = ()=> {
        model.fetchData(renderContent)
        attachHandlers()
    }
    return {
        initApp,
    }
}



const controller = Controller()
controller.initApp()