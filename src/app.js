import  express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema/schema';
import '@babel/polyfill';


const app = express();

app.use('/', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Now app is running on port ${PORT}`);
});

export default app;
