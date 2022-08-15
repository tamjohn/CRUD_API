import ToDo from "../models/ToDoModel";
import asyncHandler from 'express-async-handler';


modules.export = {
    addToDo: async ( args, { ToDo }) => {
        return await ToDo.create ({
            ToDo: args.ToDo,
            active: args.active
        })
    }
} 


