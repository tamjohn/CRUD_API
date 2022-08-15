import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { registerUser, loginUser, addToDo } from "./mutation.js";
import { users, User } from './query.js'

const QueryType = new GraphQLObjectType ({
    name: "QueryType",
    description: "Queries",
    fields: { users, User },
})

const MutationType = new GraphQLObjectType ({
    name: "MutationType",
    description: "Mutations",
    fields: { registerUser, loginUser, addToDo },
})

const schema = new GraphQLSchema ({
    query: QueryType,
    mutation: MutationType,
})

export default schema;
