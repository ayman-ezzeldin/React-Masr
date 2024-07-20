import { Link, useNavigate , useParams, useLocation } from 'react-router-dom'
import PRODUCTS from '../data.js'

const SingleProduct = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const prod = PRODUCTS.find(product => product.id == id)
  console.log(prod);

  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>Product Details</h1>
            </div>
            
          </div>
        </div>
      </div>
      <div className="container content">
        <div className="row">
          <div className="col-lg-5">
            <img src={prod.image} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-7">
            <h2>{prod.name}</h2>
            <p className="price"><strong> {prod.price} </strong></p>
            <p> {prod.details} </p>

            <br />

            <Link to={'/products'} className='btn btn-primary'> Back </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SingleProduct