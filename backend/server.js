const app = require('./app');
const connectDatabse = require('./config/database');

const dotenv = require('dotenv');

//handled uncaught exception

process.on('uncaughtException' , err => {
    console.log(`ERROR : ${err.message}`);
    console.log('Shutting down the server due to uncaughtException');

    server.close(()=>{
        process.exit(1);
    })
})

//setting config 

dotenv.config({path: 'backend/config/config.env'});


//connecting to database

connectDatabse();
const server = app.listen(process.env.PORT, () => {
    console.log(`server started on PORT : ${process.env.PORT} in ${process.env.NODE_ENV} mode`);

});


process.on('unhandledRejection', err => {
    console.log(`ERROR : ${err.message}`);
    console.log('Shutting down the server due to unhandledRejection');

    server.close(()=>{
        process.exit(1);
    })
})