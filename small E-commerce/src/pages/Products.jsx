import { Link } from 'react-router-dom'
import PRODUCTS from '../data.js'

const Products = () => {

  return (
    <main>
      
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>Products</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container content">
        <div className="row products-row">
          {PRODUCTS.map(product => {
            return (
              <div className="image"> 
                <img src={product.image} alt="" />
                <h4>{product.name}</h4>
                <p> {product.details} </p>
                <div className="d-flex align-items-center justify-content-between">
                  <span> Price : <strong> {product.price} </strong> </span>
                  <Link to={`/products/${product.id}`} className='btn btn-primary' > Details </Link>
                </div>
               </div>
            )
          })}
        </div>
      </div>

    </main>
  )
}

export default Products