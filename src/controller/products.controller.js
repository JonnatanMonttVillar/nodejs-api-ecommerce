const productController = {};
const Product = require('../model/Product');

/* ------------------------------------------------------- */
productController.getProducts = async (req, res) => {
    const categories = await Product.find();
    res.json(categories) 
};

/* ------------------------------------------------------- */
productController.createProduct = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const newProduct = new Product({
                name, description, price
        });
        await newProduct.save();
        res.json({newProduct, message: 'Product Saved'}) 
    } catch (error) {
        res.json({message: 'Change name of product'}) 
    }

};

/* ------------------------------------------------------- */
productController.getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product) 
};

/* ------------------------------------------------------- */
productController.updateProduct= async (req, res) => {
    const { name, description, price } = req.body;
    await Product.findOneAndUpdate(req.params.id, {
            name, description, price
    });
    res.json({Product, message: 'Product Update'})
};

/* ------------------------------------------------------- */
productController.deleteProduct = async (req, res) => {
    await Product.findOneAndDelete(req.params.id);
    res.json({Product, message: 'Product Remove'})
};


module.exports = productController;