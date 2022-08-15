import { GraphQLBoolean, GraphQLString } from 'graphql';
import ToDo from '../models/ToDoModel.js';
import user from '../models/userModel.js';
import { createLoginToken } from '../util/authorization.js';
import { ToDoType } from './types.js';


export const registerUser = {
    type: GraphQLString,
    description: "Registering a new user",
    args: {
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve (parent, args) {
        const { username, password } = args
        const User = new user({username, password})
        await User.save()
        const token = createLoginToken(User)
        return token
    },
}

export const loginUser = {
    type: GraphQLString,
    description: "User login",
    args: {
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve (parent, args) {
        const User = await user.findOne({username: args.username}).select('+password')
        if (!user || args.password !== User.password) {
            throw new Error("Invalid credentials")
        }
        const token = createLoginToken(User)
        return token
    },
}

export const addToDo = {
    type: ToDoType,
    description: "Create a new ToDo",
    args: {
        ToDo: {type: GraphQLString},
        active: {type: GraphQLBoolean},
        priority: {type: GraphQLString},
    },
    resolve (parent, args, { verifiedUser }) {
        if (!verifiedUser) {
            throw new Error("Not Authorized to add a To-do")
        }

        const toDo = new ToDo ({
            userID: verifiedUser._id,
            ToDo: args.ToDo,
            active: args.active,
            priority: args.priority,
        })

        return toDo.save()
    },
}

export const updateToDo = {
    type: ToDoType,
    description: "Update a To-do item",
    args: {
        id: { type: GraphQLString },
        ToDo: { type: GraphQLString },
        active: {type: GraphQLBoolean},
        priority: {type: GraphQLString},
    },
    async resolve(parent, args, { verifiedUser }) {
        if (!verifiedUser) {
            throw new Error("Not Authorized to update this To-do item")
        }

        const toDoUpdate = await ToDo.findOneAndUpdate(
            {
                _id: args.id,
                userID: verifiedUser._id,
            },
            {
                ToDo: args.ToDo,
                active: args.active,
                priority: args.priority,
            },
            {
                new: true,
                runValidators: true,
            }
        )

        if(!toDoUpdate) {
            throw new Error ("No To-do with the given ID was found for this user")
        }

        return toDoUpdate
    },
}
