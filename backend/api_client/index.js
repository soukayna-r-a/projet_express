import express from 'express';
import mongoose from 'mongoose'; 
import dotenv from 'dotenv';
import router from './routes/clientRoutes.js';

dotenv.config()
const app = express()
app.use(express.json())

const port = process.env.PORT || 3000

mongoose.connect(process.env.URL_MONGO)
    .then(() => {
        console.log('MongoDB connected');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });


    const server = app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
    
    server.on('error', (error) => {
        console.error('Error starting server:', error.message);
    });
    

    
app.use('/api/v1/client', router);
