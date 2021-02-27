var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

router.get('/stock', async function(req, res, next) {
  const stockQuote = {};
  const response = await fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo');
  const resultStocks = await response.json();
  stockQuote.symbol = resultStocks['Global Quote']['01. symbol'];
  stockQuote.price =  resultStocks['Global Quote']['05. price'];
  stockQuote.volume =  resultStocks['Global Quote']['06. volume'];
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(stockQuote));
});

module.exports = router;
