import pkg from 'graphql';
import { UserType } from '../graphQL/types.js'
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

