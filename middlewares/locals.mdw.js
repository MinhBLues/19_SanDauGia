categoryModel = require('../models/category.model')

module.exports = async(req, res, next) => {
    if (req.session.isAuthenticated)
        res.locals.isAuthenticated = true;
    else res.locals.isAuthenticated = false;
    res.locals.categories = await categoryModel.all();
    next();
}