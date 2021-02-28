const productController = {};

productController.getProducts = (req, res) => res.json({message: 'Get Products'});
productController.createProduct = (req, res) => res.json({message: 'Product Saved'});

productController.getProduct = (req, res) => res.json({message: 'Get Product'});
productController.updateProduct = (req, res) => res.json({message: 'Product Update'});
productController.deleteProduct = (req, res) => res.json({message: 'Product Remove'});

module.exports = productController;