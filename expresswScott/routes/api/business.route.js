const express = require('express')


const router = express.Router();
//const url = "https://api.worldtradingdata.com/api/v1/stock?symbol=SNAP,TWTR,VOD.L&api_token=9eLj71kTKY1GKMStdknrBQBJBuphat2OX3qCcWez25RaSuZLoMUkpAEKJUQl"

router.get('/', (request, response) => {
    //fetch(url).then( data => console.log(data));
    response.send('DIS bE BIDNESS');
});
//router.post('');

module.exports = router;