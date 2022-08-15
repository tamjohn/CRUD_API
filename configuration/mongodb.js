import mongoose from 'mongoose';

const connectMongoDB = async() => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`MongoDB connected: ${connect.connection.host}`.cyan);
    } catch (error) {
        console.error(`Error : ${error.message}`.red)
        process.exit(1)
    }
}

export default connectMongoDB;