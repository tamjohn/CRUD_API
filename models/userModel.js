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

export const user = mongoose.model('user', userModel);



