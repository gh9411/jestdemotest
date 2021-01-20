const app = require('./app');
const request = require('supertest');


describe('Get /', () => {
    it('hello test', (done) => {
        request(app).get('/api/gets')
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
                done();
            });
    });
});

describe('Post test', () => {
    it('hello test', (done) => {
        request(app).post('/api/posts')
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
                done();
            });
    });
});

describe('Put test', () => {
    it('hello test', (done) => {
        request(app).put('/api/puts')
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
                done();
            });
    });
});

describe('Delete test', () => {
    it('hello test', (done) => {
        request(app).delete('/api/deletes')
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
                done();
            });
    });
});

//Test for Fail
describe('Error /', () => {
    it('hello test', (done) => {
        request(app).get('/api/eerr')
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
                done();
            });
    });
});


// Test for Fail 2
describe('Error /', () => {
    it('hello test', (done) => {
        request(app).get('/api/posts')
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
                done();
            });
    });
});