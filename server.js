import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import { connectMongoDB } from './configuration/mongodb.js';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './graphQL/schema.js';
import { authentification } from './middleware/auth.js';

const PORT = process.env.PORT || 8000;

const app = express();
dotenv.config({ path: './env'})
connectMongoDB()

app.use(authentification)

app.get('/', (req, res) => {
    res.json('Go to /graphql')
})

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
    })
)

app.listen(PORT, console.log(`Server is running on port ${PORT}`.yellow))