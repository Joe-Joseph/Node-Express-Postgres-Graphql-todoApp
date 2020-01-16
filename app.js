import  express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './src/schema/schema';
import '@babel/polyfill';


const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

const PORT = process.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Now app is running on port ${PORT}`);
});

export default app;
