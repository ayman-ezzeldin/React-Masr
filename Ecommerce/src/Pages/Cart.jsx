import React from 'react'
import { useSelector } from 'react-redux'
import ProductList from '../product/ProductList'

const Cart = () => {
  const cartTotalData = useSelector((state) => state.cartTotal)
  const cartData = useSelector((state) => state.cart)
  return (
    <div>
			<h1 style={{ textAlign: 'center', fontSize: '35px', color: '#e74c3c' }}>
				Cart
			</h1>
			<h4
				style={{
					textAlign: 'center',
					fontSize: '25px',
					color: '#60a5fa',
					margin: 0,
				}}
			>
				{' '}
				total: {cartTotalData}
			</h4>
      <ProductList products={cartData} />
		</div>
  )
}

export default Cart