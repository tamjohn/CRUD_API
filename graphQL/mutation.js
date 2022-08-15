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
        const token = createLoginToken(User)
        return token
    },
}

export const loginUser = {
    type: GraphQLString,
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


