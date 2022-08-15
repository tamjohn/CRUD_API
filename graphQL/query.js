import pkg from 'graphql';
import { UserType } from '../graphQL/types.js'
import user from '../models/userModel.js';
const { GraphQLList, GraphQLID } = pkg;

export const users = { 
    type: new GraphQLList(UserType),
    resolve(parent, args) {
        return user.find()
    }
}