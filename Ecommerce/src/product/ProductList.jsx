import React from 'react'
import { Items } from '../Components/Items/Items'

const ProductList = ({products}) => {
  return (
    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3' >
      {products.map((product, i) => {
        return <Items key={i} product={product} />
      })}
    </div>
  )
}

export default ProductList