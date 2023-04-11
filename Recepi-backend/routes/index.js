var express = require('express');
const { response } = require('../app');
var router = express.Router();
const axios = require('axios').default;

/* GET home page. */
var post = []
router.get('/', async function(req, res, next) {
 
  const list= req.body
  res.send(list)
});


router.post('/list', async function(req, res, next) {
 
  const list= req.body.data
  console.log(list)
  post.push(list)
  res.send(list)
});
module.exports = router;
