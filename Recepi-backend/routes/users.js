var express = require('express');
var router = express.Router();
 
/* GET users listing. */
router.get('/', function(req, res, next) {
  var axios = require('axios');
  var data = JSON.stringify({
    "collection": "Recipe regions",
    "database": "Recipe",
    "dataSource": "Cluster0",
    "projection": {
        "_id": "63e4f47527da6b55271ab4d35"
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-tptrj/endpoint/data/beta/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'Q8ridpcPwHF49rO5jjp2dLTEKgDfz8daW84o6GmXN9o7AZeOa5YNE73RB1Tx0NDt',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
});

module.exports = router;
