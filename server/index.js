import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Book } from './model/bookModel.js';
import bookRouter from './routes/bookRoutes.js';
import cors from 'cors'
const app = express();
app.use(cors(
    {
        origin:'http://localhost:5173',
        methods: ['GET', 'DELETE','POST','PUT'],
        allowedHeaders:['Content-Type']
    }
))
app.use(express.json());
app.use('/books',bookRouter)
mongoose.connect(mongoDBURL).then(() => {
    app.listen(PORT, () => {
        console.log('app listening on 5555')
    })
    console.log('app connected to DB')
}).catch((error) => {
    console.log(error)
})