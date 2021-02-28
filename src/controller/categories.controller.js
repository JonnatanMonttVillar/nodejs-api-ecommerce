const categoryController = {};

categoryController.getProducts = (req, res) => res.json({message: 'Get Categories'});
categoryController.createProduct = (req, res) => res.json({message: 'Category Saved'});

categoryController.getProduct = (req, res) => res.json({message: 'Get Category'});
categoryController.updateProduct = (req, res) => res.json({message: 'Category Update'});
categoryController.deleteProduct = (req, res) => res.json({message: 'Category Remove'});

module.exports = categoryController;