import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';


const app = express();
const morganType = ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]'

app.use(morgan(morganType))
app.use(helmet())
app.use(cors())

app.get("/health", (request, response) => {
    response
        .status(200)
        .json({
            status: "ok",
            timestamp: new Date().toISOString()
        })
})

app.use((request, response)=>
    response
        .status(404)
        .json(
            {error: "Not found"})    
    )


export default app
