
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';


// import postRoutes from './routes/posts.js';
import investmentRouter from "./routes/investment.js";

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(express.json());

app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

// app.use('/posts', postRoutes);
app.use('/', investmentRouter);


const connection_url="mongodb+srv://investment:investment@cluster0.fi9xj7y.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT|| 5000;

mongoose.connect(connection_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));


