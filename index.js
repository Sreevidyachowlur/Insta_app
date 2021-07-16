const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());


// app.post('/',(req,res)=>{
// console.log( req.body);
// res.send('success');
// })

require('./db');

app.use('/users', require('./controller/user-controller'));
app.use('/auth', require('./controller/auth-controller'));


app.listen(3000, () => {
console.log('listening the port 3000 ')
})





