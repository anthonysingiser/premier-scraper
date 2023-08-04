const express = require('express');
const request = require('request-promise');

const app = express();
const PORT = process.env.PORT || 5000;

const apiKey = ;
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Premier Scraper API')
})

//GET list of top scorers
app.get('/goals', async(req, res) => {
    try {
        const response = await request(`${baseUrl}&url=https://www.premierleague.com/stats/top/players/goals`)

        res.json(JSON.parse(response))
    
    } catch (error) {
        res.json(error)
    }
})

app.listen(PORT, () => console.log(`Server running on ${PORT}`));