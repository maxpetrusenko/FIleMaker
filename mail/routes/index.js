var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express123' });
// });

router.get('/', function(req, res) {
  res.render('index', {
    title: 'My App!',
    age: 33
  })

  router.post('/', function(req, res) {
    console.log(req.query)
  })

})


module.exports = router;
 