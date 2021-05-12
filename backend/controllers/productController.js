const Product = require('../models/product');

const ErrorHandler = require('../utils/errorHandler');

const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

const APIFeatures = require('../utils/apiFeatures');



//create new product  => /api/v1/products/new

exports.newProducts = catchAsyncErrors (async(req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
})

exports.getProducts = catchAsyncErrors (async (req, res, next)=> {
    
    const count = await Product.countDocuments();
    const resPerPage = 4;
    const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().pagination(resPerPage)

    const product = await apiFeatures.query;

    
    res.status(200).json({
        success:true,
        totalProduts : count,
        count : product.length,
        product
    })
})

//get single product details => /api/v1/product/:id

exports.getSingleProduct = catchAsyncErrors (async (req, res, next) => {
    const prod = await Product.findById(req.params.id);
    if(!prod){
        return next(new ErrorHandler('product not found', 404));
    }

    res.status(200).json({
        success: true,
        prod
    })
})

//update product details => /api/v1/admin/product/:id
exports.updateProduct = catchAsyncErrors (async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler('product not found', 404));
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify:false
        
    });
    res.status(200).json({
        success: true,
        message : 'product updated'
    });
})

//delete product => /api/v1/admin/product/:id


exports.deleteProduct = catchAsyncErrors (async(req, res, next)=> {
    let product = Product.findById(req.params.id);

    if(!product){
          return next(new ErrorHandler('product not found', 404));
    }else{

    await product.deleteOne();

    res.status(200).json({
        success:true,
        message : "Product Deleted!"
    })

    }

    
})
