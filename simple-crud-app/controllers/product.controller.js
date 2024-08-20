const Product = require('../models/product.model')

const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.send(products)
  }
  catch(error) {
    res.status(500).send("there was an error",error)
  }
}

const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    res.send(product)
  }
  catch(error) {
    res.status(500).send("there was an error",error)
  }
}

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.send(product)
  }
  catch(error) {
    res.status(500).send("there was an error",error)
  }
}

const updateProduct = async (req,res)=> {
  try{
    const {id} = req.params
    const product = await Product.findByIdAndUpdate(id,req.body)
    if(!product) {
      return res.status(404).send('product not found')
    }
    const updatedProduct = await Product.findById(id)
    res.send(updatedProduct)
  }
  catch(error) {
    res.status(500).send("there was an error",error)
  }
}

  const deleteProduct = async (req,res)=> {
  try{
    const {id} = req.params
    const product = await Product.findByIdAndDelete(id)
    if(!product) {
      return res.status(404).send('product not found')
  }
}
  catch(error) {
    res.status(500).send("there was an error",error)
  }
}


module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
}