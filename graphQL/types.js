import { GraphQLObjectType } from 'graphql';
import user from '../models/userModel.js';
import ToDo from '../models/ToDoModel.js';

const UserType = new GraphQLObjectType ({
    name: "User",
    description: "User type",
    fields: () => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
    })
})
