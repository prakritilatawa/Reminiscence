import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

const CONNECTION_URL = 'mongodb+srv://Prakriti:9914453222@cluster0.opx9b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then( () => console.log('MongoDB connected'))
    .catch((error) => console.log(error.message));


app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, ( ) => {console.log('Server running on port: $(PORT)')} )



