import mongoose from 'mongoose';

const toDoModel = new mongoose.Schema({
    ToDo: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    TimeAdded: {
        timestamps: true
    }
})

const Todo = mongoose.model('Todo', toDoModel)

export default Todo;