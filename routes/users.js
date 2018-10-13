let express = require('express');
let router = express.Router();

/* GET users listing. */
router.route('/')
  .get((req, res, next) => {
    res.send('respond with a user resource');
  })
  .post((req, res) => {
    res.send('Got a POST request at /users')
  })
  .put((req, res) => {
    res.send('Got a PUT request at /users')
  })
  .delete((req, res) => {
    res.send('Got a DELETE request at /users')
  })

module.exports = router;
