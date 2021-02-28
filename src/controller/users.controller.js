const userController = {};

userController.getUsers = (req, res) => res.json({message: 'Get Users'});
userController.createUser = (req, res) => res.json({message: 'User Saved'});

/*userController.getUser = (req, res) => res.json({message: 'Get User'});
userController.updateUser = (req, res) => res.json({message: 'User Update'});*/

userController.deleteUser = (req, res) => res.json({message: 'User Remove'});

module.exports = userController;