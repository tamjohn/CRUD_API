import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { registerUser } from "./mutation.js";

const QueryType = new GraphQLObjectType ({
    name: "QueryType",
    description: "Queries",
    fields: {}
})

const MutationType = new GraphQLObjectType ({
    name: "MutationType",
    description: "Mutations",
    fields: { registerUser }
})

const schema = new GraphQLSchema ({
    query: QueryType,
    mutation: MutationType
})

export default schema;
