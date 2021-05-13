const User = require('../models/user');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middlewares/catchAsyncErrors');
const sendToken = require('../utils/jwttoken');

//register a user ==> /api/v1/register

exports.registerUser = catchAsyncError(async (req, res, next)=> {

    const {name, email, password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'avatars/greg_vrz9ng',
            url: 'https://res.cloudinary.com/sofast/image/upload/v1620819874/avatars/greg_vrz9ng.jpg'

        }
    })

    sendToken(user, 200, res);

    // const token = user.getJwtToken();



    // res.status(201).json({
    //     sucess:true,
    //     message:"User Registered Successfully!",
    //     token
    // })

})


exports.loginUser = catchAsyncError(async (req, res, next)=> {
    const {email, password } = req.body;

    //checks if email and password is entered by user

    if(!email || !password ){
        return next(new ErrorHandler('please enter email & password' , 400))
    }

    const user = await User.findOne({email}).select('+password')

    if(!user){
        return next(new ErrorHandler('Invalid Email or password', 401));
    }

    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHandler('Invalid password', 401));
    }

    sendToken(user, 200, res);
})

//logout user => /api/v1/logout

exports.logout = catchAsyncError(async (req, res, next)=>{
    res.cookie('token', null , {
        expires : new Date(Date.now()),
        httpOnly : true
    })

    res.status(200).json({
        success: true,
        message: "Successfully loggedout!"
    })
})