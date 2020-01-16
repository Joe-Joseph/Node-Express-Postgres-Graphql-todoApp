import { expect } from 'chai';
import request from 'supertest';
import app from '../../app';

describe('Tasks resolver', () => {
    it('Should return tasks', (done) => {
        request(app).post('/graphql')
            .send({query: '{ tasks{ id name completed }}'})
            .expect(200)
            .end((err, res) => {
                expect(res.body.data.tasks).to.be.an('array');
                done();
            })
    });

    it('Should add task', (done) => {
        request(app).post('/graphql')
            .send({query: 'mutation{ createTask(name: "Learn Pyhthon", completed: false ){id name completed}}'})
            .expect(200)
            .end((err, res) => {
                expect(res.body.data.createTask).to.have.property('name');
                expect(res.body.data.createTask).to.have.property('completed');
                done();
            })
    })
})