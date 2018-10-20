const express = require('express')
const app = express();


app.get('/', function(req, res){
    res.send('Hello World')
    res.end();
})

app.listen(3000, function(){
    console.log('Listening to port 3000, Created by me by the way');
})