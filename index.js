const connectDB = require('./db/connect');
const express = require('express');
const app = express();
const port = 5000;
const taskRouter = require('./routes/tasks');

app.use(express.json());

app.use('/api/tasks', taskRouter);

(async function start() {
  try {
    await connectDB()
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  } catch(err) {
    console.log(err)
  }
})()

