const app = require('./app');
const connectDatabse = require('./config/database');

const dotenv = require('dotenv');

//setting config 

dotenv.config({path: 'backend/config/config.env'});


//connecting to database

connectDatabse();
app.listen(process.env.PORT, () => {
    console.log(`server started on PORT : ${process.env.PORT} in ${process.env.NODE_ENV} mode`);

});