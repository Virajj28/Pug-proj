const express = require("express")
const path = require ("path")
const app = express();
const port = 80;

//Express specific 
app.use('/static',express.static('static')) //fpr serving static files

//Pug specific
app.set("view engine","pug") //set the template engine as pug
app.set('views',path.join(__dirname, 'views')) //set the views directory

//Endpoints
app.get("/", (req,res) => {
    const con = "This the beginning of file"
    const params = {'title':'You can do it!',"content": con}
    res.status(200).render('index.pug',params);
})

//Start port
app.listen(port, () => {
    console.log(`running on port ${port}`);
})