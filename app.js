import express from "express";
//setup del server
const app = express();
const port = process.env.PORT || 3300;

//routes
app.get('/', (req,res)=> {
    res.send('Homepage')
})

//start del server
app.listen(port, ()=> console.log(`Server started at http://localhost:${port}`));