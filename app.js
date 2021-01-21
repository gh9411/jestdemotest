const express = require('express');
const app = express();
const port = 3030;

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