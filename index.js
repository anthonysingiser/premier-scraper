const express = require('express');
const request = require('request-promise');

const app = express();
const PORT = process.env.PORT || 5000;

const apiKey = 'd430619e463f055ba38497f3131328ec';
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Premier Amazon Scraper API')
})

//GET product details 
app.get('/products/:productId', async(req, res) => {
    const { productId } = req.params;

    try {
        const response = await request(`${baseUrl}&url=https://www.amazon.com/dp/${productId}`)

        res.json(JSON.parse(response))

    } catch (error) {
        res.json(error)
    }
})

//GET product reviews 
app.get('/products/:productId/reviews', async(req, res) => {
    const { productId } = req.params;

    try {
        const response = await request(`${baseUrl}&url=https://www.amazon.com/product-reviews/${productId}`)

        res.json(JSON.parse(response))

    } catch (error) {
        res.json(error)
    }
})
app.listen(PORT, () => console.log(`Server running on ${PORT}`));