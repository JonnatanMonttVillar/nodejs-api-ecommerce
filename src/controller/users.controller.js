const userController = {};
const User = require('../model/User');

/* userController */
userController.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users) 
};

/* ------------------------------------------------------- */
userController.createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({
                username, email, password 
        });
        await newUser.save();
        res.json({newUser, message: 'User Saved'}) 
    } catch (error) {
        res.json({message: 'Change email of user'}) 
    }

};

/* ------------------------------------------------------- */
userController.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user) 
};

/* ------------------------------------------------------- */
userController.updateUser = async (req, res) => {
    const { username, email, password  } = req.body;
    await User.findOneAndUpdate(req.params.id, {
            username, email, password 
    });
    res.json({User, message: 'User Update'})
};

/* ------------------------------------------------------- */
userController.deleteUser = async (req, res) => {
    await User.findOneAndDelete(req.params.id);
    res.json({User, message: 'User Remove'})
};

module.exports = userController;