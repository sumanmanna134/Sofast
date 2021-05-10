const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Enter product name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']
    },

    price: {
        type:Number,
        required: [true, 'Please Enter product price'],
        maxLength: [5, 'product price cannot exceed 5 characters'],
        default: 0.0

    },

    description: {
        type:String,
        required: [true, 'Please Enter product Description'],
    },

    ratings: {
        type:Number,
        default:0,
    
    },

    images: [
        {
            public_id:{
                type: String,
                required: true,

            },
            url: {
                type: String,
                required: true,
                
            }
        }
    ],

    category:{
        type: String,
        required: [true, 'Please Select category for the product'],
        enum:{
            values: [
                'Electronics',
                'Cameras',
                'laptop',
                'Accessories',
                'Headphones',
                'Books',
                'Clothes/Shoes',
                'Sports',
                'Outdoor',
                'Home'
            ],
            message: 'Please select correct category for product'
        }
    },

    seller: {
        type: String,
        required: [true, 'Please enter product seller']
    },

    stock: {
        type:Number,
        required: [true, 'Please Enter product Stock'],
        maxLength: [5, 'product price cannot exceed 5 characters'],
        default: 0

    },

    numOfReviews:{
        type: Number,
        default: 0

    },
    reviews: [
        {
            name:{
                type: String,
                required: true,

            },
            rating:{
                type: Number,
                required: true 
            },
            comment:{
                type: String,
                required: true


            }
        }
    ],
    createdAt: {
        type: Date,
        default:Date.now
    }

})

module.exports = mongoose.model('Products', productSchema);