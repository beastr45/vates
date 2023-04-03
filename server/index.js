//usually we use const var = require(var);
//the setting for toggling this is in the package.json
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//this is the connection url to our atlas database

//IMPORTANT
//store this var in a env variable so some dum dum hacker wont get it. 
//const CONNECTION_URL = 'mongodb+srv://bearweston07:TiredGorilla27@cluster0.6rzzqay.mongodb.net/?retryWrites=true&w=majority';
const CONNECTION_URL = 'mongodb://localhost:27017/vates';

//later an app called hiroku will make anv env variable and handle ports for us.
const PORT = process.env.PORT || 5000; 

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log('server running at port:'+PORT)))
  .catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify', false);
