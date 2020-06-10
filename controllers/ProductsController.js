const viewPath = ('products');
const Product = require('../models/product');

exports.show = async (req, res) => {

  //take a single item from database using id
  //and pass the data to a show page
  try {
    const item = await Product.findById(req.params.id)
    res.render(`${viewPath}/show`, {
      pageTitle: "Show Product",
      item
    })

  } catch (error) {
    console.log(error)
  }

};

exports.new = (req, res) => {
  res.render(`${viewPath}/new`, {
    pageTitle: 'New Product'
  });
};


exports.create = async (req, res) => {

  //destruction for a simple validation
  const { name, description, price } = req.body

  //if one of fields left empty prevent the form from being submitted
  if (!name || !description || !price) {
    return res.redirect("/products/new")
  }

  //after passing validation

  try {
    const newProduct = await Product.create(req.body)
    res.redirect(`/products/${newProduct.id}`)
  } catch (error) {
    console.log(error)
  }

};