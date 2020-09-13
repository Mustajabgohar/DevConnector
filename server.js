const express = require('express');
const app = express();

//Get Database
const connectDb = require('./config/db.js');

//Connect Database
connectDb();

app.get('/', (req, res) => {
  res.send('API Running');
});

// Use Routes here
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server running'));
