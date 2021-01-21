const app = require('./app');
const request = require('supertest');
const { TestScheduler } = require('jest');



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

// Change it->test
// describe('Get /', () => {
//     test('hello Test', async (done) => {
//         const response = await request(app)
//         .get('/').send({
//           testparam: null,
//         })
//         .expect(200)
//       })
// });


describe('Post test', () => {
    test('hello test', (done) => {
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

// //Test for Fail
// describe('Error /', () => {
//     it('hello test', (done) => {
//         request(app).get('/api/eerr')
//             .expect(200)
//             .end((err, res) => {
//                 if (err) throw err;
//                 done();
//             });
//     });
// });


// // Test for Fail 2
// describe('Error /', () => {
//     it('hello test', (done) => {
//         request(app).get('/api/posts')
//             .expect(200)
//             .end((err, res) => {
//                 if (err) throw err;
//                 done();
//             });
//     });
// });




/** 
 * test(name, fn, timeout)
 * Also under the alias: it(name, fn, timeout)
 * https://jestjs.io/docs/en/api#testname-fn-timeout
 */