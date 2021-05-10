const Product = require('../models/product');

//create new product  => /api/v1/products/new

exports.newProducts = async(req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
}

exports.getProducts = async (req, res, next)=> {

    const product = await Product.find()

    
    res.status(200).json({
        success:true,
        totalProds : product.length,
        product
    })
}

//get single product details => /api/v1/product/:id

exports.getSingleProduct = async (req, res, next) => {
    const prod = await Product.findById(req.params.id);
    if(!prod){
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        });
    }

    res.status(200).json({
        success: true,
        prod
    })
}

exports.updateProduct = async (req, res, next) => {
    let product = await Product.findbyId(req.params.id);
    if(!product){
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        });
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify:false
        
    });
    res.send(200).json({
        success: true,
        message : 'product updated'
    });
}

