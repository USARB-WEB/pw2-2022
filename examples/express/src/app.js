const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (request, response) => {
    response.send('Main page')
})

app.get('/countries', (request, response) => {
    response.header("Content-Type", "application/json");
    response.send([
        {
            id: 1,
            name: "Moldova",
            code: "MD",
            flag: null,
            area: 1400000,
            population: 2890321
        }
    ])
})

app.post('/countries', (request, response) => {
    const country = request.body;
    country.id = 1; 
    response.json(country);
})

app.patch('/countries/:id', (request, response) => {
    const country = request.body;
    country.id = request.params.id;
    response.json(country);
})

app.delete('/countries/:id', (request, response) => {
    response.json({});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})