import mongoose from 'mongoose';

const toDoModel = new mongoose.Schema(
{
    ToDo: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    }
});

export const ToDo = mongoose.model('ToDo', toDoModel);

