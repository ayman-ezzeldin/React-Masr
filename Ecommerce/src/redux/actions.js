
export const addToCartAction = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product
    }
}


export const removeFromCartAction = (product) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: product
    }
}
export const increaseQuantityAction = (product) => {
    return {
        type: 'INCREASE_QUANTITY',
        payload: product
    }
}
export const decreaseQuantityAction = (product) => {
    return {
        type: 'DECREASE_QUANTITY',
        payload: product
    }
}
