import { GraphQLObjectType } from 'graphql';
import user from '../models/userModel.js';
import ToDo from '../models/ToDoModel.js';

const UserType = new GraphQLObjectType ({
    name: "User",
    description: "User type",
    fields: () => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
    }),
})

const ToDoType = new GraphQLObjectType ({
    name: "ToDo",
    description: "ToDo type",
    fields: () => ({
        id: { type: GraphQLID },
        ToDo: { type: GraphQLString },
        active: { type: GraphQLBoolean },
        priority: { type: GraphQLString },
        userID: {
            type: GraphQLString,
            resolve(parent, args) {
                return user.findById(parent.userID)
            },
        },
    }),
})