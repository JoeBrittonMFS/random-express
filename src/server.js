const express = require('express');
const app = express();
const path = require('path');
const public_directory = path.join(__dirname, '../public/');
const port = process.env.PORT || "8000";



app.use(express.json()); // Any incomming JSON data will be parsed so we can use it as JS.
app.use(express.static(public_directory)); 



app.get('/index.html', (req, res) => {
    
});
app.post('/index.html', (req, res) => {
    res.send( { data: req.body } );
})




app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})