const http = require('http');
const express = require('express');
const sequalize = require('./config/sequalize');
const pool = require('./config/dbconfig');
const routes = require('./routes/index');
const Book = require('./models/book');

const app = express();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

const port = process.env.PORT || 8080;

const forceSync = process.env.FORCE_SYNC === "true";

const checkSequalizeDbConnection = async () => {
  try {
    await sequalize.sync({ force: forceSync});
    
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Unable to synchronized the database:", error);
  }
};

const checkDbConnection = async () => {
  try {
    await pool.connect();
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

app.use('/', routes);

const startServer = async () => {
  await checkSequalizeDbConnection();
  await checkDbConnection();

  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
};

startServer();