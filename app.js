import express from "express";
import diveSitesRouter from './routers/diveSitesRouter.js'
//setup del server
const app = express();
const port = process.env.PORT || 3306;

//middlewares
app.use(express.json());


//routes
app.get('/', (req,res)=> {
    res.send('Homepage')
})
app.use('/diveSites', diveSitesRouter)

//start del server
app.listen(port, ()=> console.log(`Server started at http://localhost:${port}`));