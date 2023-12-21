const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

const mainRouter = require('./routes/mainRouter');
const authRouter = require('./routes/authRouter');

require('dotenv').config();
const PORT = process.env.PORT || 8000;

// plugins
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// plugins

//routes
app.use('/', mainRouter);
app.use('/auth', authRouter);

// app.use('/auth', authRouter);
//routes

server.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
