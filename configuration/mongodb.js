const mongoose = require('mongoose');

const connectMongoDB = async() => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`MongoDB connected: ${connect.connection.host}`.cyan);
    } catch (error) {
        console.error(`Error : ${error.message}`.red)
        process.exit(1)
    }
}

module.exports = connectMongoDB