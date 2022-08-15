import pkg from 'graphql';
import { UserType, ToDoType } from '../graphQL/types.js'
import ToDo from '../models/ToDoModel.js';
import user from '../models/userModel.js';
const { GraphQLList, GraphQLID } = pkg;

export const users = { 
    type: new GraphQLList(UserType),
    description: 'Retrive a list of all users',
    resolve(parent, args) {
        return user.find()
    }
}

export const User = {
    type: UserType,
    description: 'Retrives one user',
    args: { id: { type: GraphQLID }},
    resolve (parent, args) {
        return user.findById(args.id)
    },
}

export const toDos = {
    type: new GraphQLList(ToDoType),
    description: 'Retrieve all To-do items',
    resolve() {
        return ToDo.find()
    },
}

export const toDo = {
    type: ToDoType,
    description: 'Retrive a single To-do',
    args: {
        id: { type: GraphQLID } },
    resolve (_, args) {
        return ToDo.findById(args.id)
    },

}
