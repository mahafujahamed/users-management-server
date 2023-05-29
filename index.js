const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());    // cors middleware
app.use(express.json());    // body parser middleware
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
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})