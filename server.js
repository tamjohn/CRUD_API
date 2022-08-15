import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import * as path from 'path';
import connectMongoDB from './configuration/mongodb.js';
import { graphqlHTTP } from 'express-graphql';
import schema from './graphQL/schema.js';
import { createLoginToken } from './util/authorization.js';
import { authenticate } from './middleware/auth.js';


const PORT = process.env.PORT || 8000;
dotenv.config({ path: './env'})

connectMongoDB()
const app = express();

app.use(authenticate)

app.get('/', (req, res) => {
    res.json({ msg: 'Go to /graphql'})
})

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    })
)

app.listen(PORT, console.log(`Server is running on port ${PORT}`.yellow))