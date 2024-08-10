import React from 'react'
import './Items.css'
import { addToCartAction, decreaseQuantityAction, increaseQuantityAction, removeFromCartAction } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
export const Items = ({product}) => {

    const { pathname } = useLocation();
	const isInCart = pathname.includes('cart');
    const dispatch = useDispatch()

    const addToCart = (product) => {
        dispatch(addToCartAction(product))
    }
    const removeFromCart = () => {
	dispatch(removeFromCartAction(product))
	}

    const increaseQuantity = () => {
	    dispatch(increaseQuantityAction(product))
		}
			const decreaseQuantity = () => {
	    dispatch(decreaseQuantityAction(product))
	}

return (
    <div className='item'>
        <img src={product.image} alt='' />
        <p>{product.name}</p>
        <div className="item-prices">
            <div className="item-price-old">
                ${product.new_price}
            </div>
            <div className="item-price-new">
                ${product.old_price}
            </div>
            <button onClick={() => addToCart(product)} className=' bg-blue-400 p-2 text-white rounded-lg' >Add to cart</button>
            {isInCart && (
                <div>
                    <button className=' bg-red-400 p-2 text-white rounded-lg' onClick={removeFromCart}>
                        Delete
                    </button>
                </div>
			)}
        </div>
        <div>
            {isInCart && (
                <div className=' flex gap-3 justify-evenly mt-3' >
                <div className=' flex gap-3 justify-center ' >
                    <button className=' bg-red-400 p-2 text-white rounded-lg' onClick={ product.quantity === 1 ? removeFromCart : decreaseQuantity}>
                        -
                    </button>
                    <button className=' bg-green-400 p-2 text-white rounded-lg' onClick={increaseQuantity}>
                        +
                    </button>
                </div>
                    <span className=' bg-blue-400 p-2 flex items-center justify-center text-white rounded-lg' >({product.quantity})</span>
                </div>
            )}
        </div>
    </div>
)
}
