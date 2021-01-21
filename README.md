## 환경 세팅

---

Nodejs : 6.14.10

npm : v10.23.1

## JEST 실습

---

```bash
mkdir jesttest
cd jesttest
npm init
npm install --save express, jest, supertest
```

package.json

```json
...
"scripts": {
    "test": "jest"
  },
...
```

app.js

```jsx
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('index');
    res.json({
        success: true,
    });
});

app.get('/api/gets', (req, res) => {
    res.send('get test Complete');
    res.json({
        success: true,
    });
});

app.post('/api/posts', (req, res) => {
    res.send('post test Complete');
    res.json({
        success: true,
    });
});

app.put('/api/puts', (req, res) => {
    res.send('put test Complete');
    res.json({
        success: true,
    });
});

app.delete('/api/deletes', (req, res) => {
    res.send('delete test Complete');
    res.json({
        success: true,
    });
});

app.listen(port, () => {
    console.log(`server is listening at ${port}`);
});

module.exports = app;
```

test.js

```jsx
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
```

Result : 

```bash
$ npm test

> jesttest@1.0.0 test C:\jesttest
> jest

  console.log
    server is listening at 3000

      at Server.Object.<anonymous>.app.listen (app.js:41:13)

 FAIL  ./test.js
  Get /
    √ hello test (116 ms)
  Post test
    √ hello test (5 ms)
  Put test
    √ hello test (5 ms)
  Delete test
    √ hello test (3 ms)
  Error /
    × hello test (8 ms)
    × hello test (4 ms)

  ● Error / › hello test

    TypeError: [err.toString(...),savedStack,"----",badStack].flat is 
not a function

      at node_modules/supertest/lib/test.js:83:66
      at Test.Object.<anonymous>.Test._assertFunction (node_modules/supertest/lib/test.js:307:11)
      at Test.Object.<anonymous>.Test.assert (node_modules/supertest/lib/test.js:197:21)
      at Server.localAssert (node_modules/supertest/lib/test.js:155:12)

  ● Error / › hello test

    TypeError: [err.toString(...),savedStack,"----",badStack].flat is 
not a function

      at node_modules/supertest/lib/test.js:83:66
      at Test.Object.<anonymous>.Test._assertFunction (node_modules/supertest/lib/test.js:307:11)
      at Test.Object.<anonymous>.Test.assert (node_modules/supertest/lib/test.js:197:21)
      at Server.localAssert (node_modules/supertest/lib/test.js:155:12)

Test Suites: 1 failed, 1 total
Tests:       2 failed, 4 passed, 6 total
Snapshots:   0 total
Time:        14.383 s
Ran all test suites.
Jest did not exit one second after the test run has completed.

This usually means that there are asynchronous operations that weren't stopped in your tests. Consider running Jest with `--detectOpenHandles` to troubleshoot this issue.
```

### 

# What is JEST?

---

- 자바 스크립스 테스트 프레임워크 by facebook.Inc
- Unit test Libaray
- 마지막 파일 이름이 .test.js / .spec.js 가 아니라면 실행되지 않음

# JEST APIs

---

### describe()

여러개의 test() 코드를 하나의 작업 단위로 묶어 줌

### test()

하나의 테스트 케이스를 의미 == **it()**

### toBe()

예상 결과값

### beforeEach()

각 테스트 코드 돌기 전 수행할 로직

반복 작업에 적합

### Q.

$ jest
bash: jest: command not found 명령어 안먹힘

 

Reference

[https://joshua1988.github.io/vue-camp/testing/jest-testing.html#jest-api](https://joshua1988.github.io/vue-camp/testing/jest-testing.html#jest-api)

[https://www.rithmschool.com/courses/intermediate-node-express/api-tests-with-jest](https://www.rithmschool.com/courses/intermediate-node-express/api-tests-with-jest)


v0.2
it<->make 호환 테스트
test.js -> app.test.js dir name 변경
jest.config.js 추가 = 파일 junit report export
