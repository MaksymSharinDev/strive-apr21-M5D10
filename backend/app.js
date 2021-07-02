
import express from 'express'
import dotenv from 'dotenv'

import router from "./routes/index.js";


// Initialize
const app = express();
dotenv.config()

  // Use 'api' as base url
router.use(express.json());

const domainUrl = process.env.NODE_ENV === 'production' ? 'https://localhost:5000' : 'http://localhost:5000';

// Routes
app.use('/api', router);


const HOST = process.env.HOST || 'localhost';

app.listen(5000, HOST, () => {
  console.log('Server listening on port 5000');
});

