<<<<<<< HEAD
const express = require('express');
=======
const express = require('express');
>>>>>>> upstream/master
const app = express();
const router = express.Router();

const path = __dirname + '/views/';

<<<<<<< HEAD
const port = 8080;
=======
const port = 8080;
>>>>>>> upstream/master

router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/',function(req,res){
  res.sendFile(path + 'index.html');
});

router.get('/sharks',function(req,res){
  res.sendFile(path + 'sharks.html');
});

app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})
