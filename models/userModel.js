import mongoose from 'mongoose';

const userModel = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    }
})

const user = mongoose.model('user', userModel);

export default user;

