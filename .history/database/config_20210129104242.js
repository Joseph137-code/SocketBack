const mongoose = require("mongoose");

const dbConnection = async( ) => {
    try {

        await mongoose.connect(process.env.DN_CNN_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log("Conectado BD");
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {dbConnection }