const categoryController = {};
const Category = require('../model/Category');

/* ------------------------------------------------------- */
categoryController.getCategories = async (req, res) => {
    const categories = await Category.find();
    res.json(categories) 
};

/* ------------------------------------------------------- */
categoryController.createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const newCategory = new Category({
            name
        });
        await newCategory.save();
        res.json({newCategory, message: 'Category Saved'}) 
    } catch (error) {
        res.json({message: 'Change name of category'}) 
    }

};

/* ------------------------------------------------------- */
categoryController.getCategory = async (req, res) => {
    const category = await Category.findById(req.params.id);
    res.json(category) 
};

/* ------------------------------------------------------- */
categoryController.updateCategory = async (req, res) => {
    const { name } = req.body;
    await Category.findOneAndUpdate(req.params.id, {
        name
    });
    res.json({Category, message: 'Category Update'})
};

/* ------------------------------------------------------- */
categoryController.deleteCategory = async (req, res) => {
    await Category.findOneAndDelete(req.params.id);
    res.json({Category, message: 'Category Remove'})
};

module.exports = categoryController;