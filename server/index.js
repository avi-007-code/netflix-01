const express = require('express');
const app = express();
require('dotenv').config();

// creating the admin & user routes
const adminRouter = require('./router/adminRoutes');
const userRouter = require('./router/userRoutes');

app.get('/', (req, res) => {
  res.send('Welcome to the Movie API');
});

app.use('/api/admin', adminRouter);
app.use('/api/user', userRouter);

// importing and running the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.DEV_URL}:${process.env.PORT}`);
});
