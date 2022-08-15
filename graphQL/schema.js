import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { registerUser, loginUser, addToDo, updateToDo } from "./mutation.js";
import { users, User, toDos, toDo } from './query.js'

const QueryType = new GraphQLObjectType ({
    name: "QueryType",
    description: "Queries",
    fields: { users, User, toDos, toDo },
})

const MutationType = new GraphQLObjectType ({
    name: "MutationType",
    description: "Mutations",
    fields: { registerUser, loginUser, addToDo, updateToDo },
})

const schema = new GraphQLSchema ({
    query: QueryType,
    mutation: MutationType,
})

export default schema;
