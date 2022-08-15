import { GraphQLSchema, GraphQLObjectType } from "graphql";

const QueryType = new GraphQLObjectType ({
    name: "QueryType",
    description: "Queries",
    fields: {}
})

const MutationType = new GraphQLObjectType ({
    name: "MutationType",
    description: "Mutations",
    fields: {}
})

const schema = new GraphQLSchema ({
    query: QueryType,
    mutation: MutationType
})

export default schema;
