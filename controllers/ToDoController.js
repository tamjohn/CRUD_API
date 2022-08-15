import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler';
import Todo from './models/ToDoModel.js';

/**
 * @desc Creating ToDoItem
 * @route /api/toDoItem
 * @access Public
 */
exports.createTodoItem = asyncHandler(async (req,res) => {
    const {toDoItem, active} = req.body
    const todo = await Todo.create({toDoItem, active});
    res.status(201).json({
        success: true,
        data: todo,
        message: 'To-do item has been successfully created'
    })
})

/**
 * @desc Updating ToDoItem
 * @route /api/toDoItem/id
 * @access Public
 */
 exports.updateTodoItem = asyncHandler(async (req,res) => {
    const {toDoItem, active} = req.body
    const findToDo = await Todo.findOne({ id : req.params.id})
    if (findToDo) {
        findToDo.toDoItem = toDoItem;
        findToDo.active = active;
        await findToDo.save();
        const updatedToDoItem = await findToDo.save();
        res.status(200).json({
            success: true,
            data: updatedToDoItem,
            message: 'To-do item has been successfully updated'
    })
    } else {
        res.status(401).json({
            success: false,
            data: null,
            message: 'To-do item was not found'
        })
    }
})

/**
 * @desc Deleting ToDoItem
 * @route /api/toDoItem/id
 * @access Public
 */
 exports.deleteTodoItem = asyncHandler(async (req,res) => {
    const findToDo = await Todo.findOne({ id : req.params.id})
    if (findToDo) {
        await findToDo.remove();
        res.status(200).json({
            success: true,
            message: 'To-do item has been successfully deleted'
    })
    } else {
        res.status(401).json({
            success: false,
            data: null,
            message: 'To-do item was not found'
        })
    }
})

/**
 * @desc Get ToDoItem
 * @route /api/toDoItem/id
 * @access Public
 */
 exports.getToDoItem = asyncHandler(async (req, res) => {
    const findToDo = await Todo.findOne({ _id : req.params.id})
    if (findToDo) {
        res.status(200).json({
            success: true,
            data:findToDo,
            message: 'To-do item has been successfully retrieved'
        })
    } else {
        res.status(401).json({
            success: false,
            data: null,
            message: 'To-do item was not found'
        })
    }
})

/**
 * @desc Get all ToDoItems
 * @route /api/toDoItem
 * @access Public
 */
 exports.getAllToDoItems = asyncHandler(async (req, res) => {
    const allToDoItems = await Todo.find({})
    if(allToDoItems){
        res.status(200).json({
            success: true,
            data:allToDoItems,
            message: 'All to-do items have been successfully deleted'
        })
    }else{
        res.status(401).json({
            success: false,
            data: null,
            message: 'To-do item were not found'
        })
    }
})
