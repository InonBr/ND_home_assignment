const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db/db');

const port = 5000;

app.use(cors());
app.use(express.json());

/**
 * connecting to mongoDB
 * only if connected successfully, we will also run the server.
 */
connectDB().then(() => {
  console.log('🔵 MongoDB connected...');
  app.listen(port, () => {
    console.log(`🟢 App listening at http://localhost:${port}`);
  });
});
