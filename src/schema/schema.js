import graphql, {
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLList
} from 'graphql';

import model from '../models';

const {tasks} = model

const TaskType = new GraphQLObjectType({
    name: 'Task',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        completed: { type: GraphQLBoolean }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        task: {
            type: TaskType,
            args: { id: { type: GraphQLInt }},
            resolve(parent, args) {
                return tasks.findByPk(args.id)
            }
        },

        tasks: {
            type: new GraphQLList(TaskType),
            resolve(parent, args) {
                return tasks.findAll({})
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createTask: {
            type: TaskType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString)},
                completed: { type: new GraphQLNonNull(GraphQLBoolean)}
            },
            resolve(parent, args){
                let task = {
                    name: args.name,
                    completed: args.completed
                }   
                return tasks.create(task);
            }
    }
}})

export default new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})

