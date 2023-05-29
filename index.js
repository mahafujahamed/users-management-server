const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());    // cors middleware
const users = [
    {id:1, name: 'Mahafuj', email: 'mahafuj@gmail.com'},
    {id:2, name: 'Emon', email: 'emon@gmail.com'},
    {id:3, name: 'Rakib', email: 'rakib@gmail.com'}
]


app.get('/', (req, res) => {
    res.send('Uaera Management server is running');
})

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    console.log('post req send');
    res.send('post req send');
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})