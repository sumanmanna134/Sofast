// checks if user is authenticated or not

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require('jsonwebtoken');
const User = require("../models/user");

exports.isAuthenticatedUser = catchAsyncErrors(async (req,res, next)=>{
    const {token} = req.cookies

    if(!token){
        return next(ErrorHandler('Login first to access this resource.', 401))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
})