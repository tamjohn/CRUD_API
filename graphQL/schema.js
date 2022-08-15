import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { registerUser, loginUser } from "./mutation.js";
import { users } from './query.js'

const QueryType = new GraphQLObjectType ({
    name: "QueryType",
    description: "Queries",
    fields: { users }
})

const MutationType = new GraphQLObjectType ({
    name: "MutationType",
    description: "Mutations",
    fields: { registerUser, loginUser }
})

const schema = new GraphQLSchema ({
    query: QueryType,
    mutation: MutationType
})

export default schema;
