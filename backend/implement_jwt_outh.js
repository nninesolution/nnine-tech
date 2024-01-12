const express = require('express');
const bodyParser = require('body-parser');
const { generateToken, verifyToken } = require('./auth');

const app = express();

app.use(bodyParser.json());

// Sample user data (replace this with your user authentication logic)
const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' },
];

// Login route to generate JWT token
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Replace this with your actual user authentication logic
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        const token = generateToken(user);
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Protected route that requires authentication
app.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'Protected route accessed', user: req.user });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

