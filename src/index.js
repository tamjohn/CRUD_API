import express from 'express';
import colors from 'colors';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import connectMongoDB from '../configuration/mongodb.js';
import typeDefs from '../graphQL/schema.js';
import resolvers from '../graphQL/query.js';
import ToDo from '../models/ToDoModel.js';

const PORT = process.env.PORT || 8000;

const app = express();

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: () => {
        return { ToDo };
    }
});

await server.start();

server.applyMiddleware({ app, path: '/api' });

app.get('/', (req, res) => res.send('Hello World'));

app.listen(PORT, console.log(`Server is running on port ${PORT}`.yellow))

dotenv.config({ path: './env'})
connectMongoDB()

/*
const typDefs = gql`
    type ToDo {
        _id: ID
        ToDo: String
        active: Boolean
    }
    type Query {
        ToDo: [ToDo!]!,
    }
    type Mutation {
        addToDo(ToDo: String, active: Boolean): ToDo
    }
`;

export default typDefs;

import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import * as path from 'path';
import connectMongoDB from './configuration/mongodb.js';
import ToDoRoute from './routes/ToDoRoute.js';

const PORT = process.env.PORT || 8000;

dotenv.config({ path: './env'})
connectMongoDB()

const app = express();
app.use(express.json());

if(process.env.MODE === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/toDoItem', ToDoRoute)

app.get('/', (req, res) => {
    res.send('CRUD API is running')
})

app.listen(PORT, console.log(`Server is running on port ${PORT}`.yellow))


*/