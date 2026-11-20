import express from "express";
import diveSitesRouter from './routers/diveSitesRouter.js'
import notFound from "./middlewares/notFound.js";
import errorsHandler from "./middlewares/errorsHandler.js";
//setup del server
const app = express();
const port = process.env.PORT || 3001;

//middlewares
app.use(express.json());

//routes
app.get('/', (req,res)=> {
    res.send('Homepage')
})
app.use('/diveSites', diveSitesRouter)

//middlewares gestione errori
app.use(notFound);
app.use(errorsHandler);

//start del server
app.listen(port, ()=> console.log(`Server started at http://localhost:${port}`));