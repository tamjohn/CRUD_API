const mongoose = require('mongoose');

const toDoModel = new mongoose.Schema({
    ToDo: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    },
    id: {
        type: Number,
        default: Math.random() * 1000
    }
})

const Todo = mongoose.model('Todo', toDoModel)

module.exports = Todo