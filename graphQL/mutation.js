import { GraphQLString } from 'graphql';
import user from '../models/userModel.js';
import { createLoginToken } from '../util/authorization.js';


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
        const token = createLoginToken(user)
        return token
    },

}


