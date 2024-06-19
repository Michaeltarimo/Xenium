const express = require('express');
const axios = require('axios');
const cors = require('cors');
const NodeCache = require('node-cache');

const app = express();
const port = 3008; // Change this to the port you want to use
const cache = new NodeCache({ stdTTL: 60 * 10 }); // Cache for 10 minutes

app.use(cors());

app.get('/api/coingecko', async (req, res) => {
  const cachedData = cache.get('conversionRates');
  if (cachedData) {
    return res.json(cachedData);
  }

  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=pulsechain,hex,pulsex,pulsex-incentive-token&vs_currencies=usd');
    cache.set('conversionRates', response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from CoinGecko:', error);
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running on http://localhost:${port}`);
});
