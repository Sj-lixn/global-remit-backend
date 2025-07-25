const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const testRoutes = require('./routes/test');
app.use('/api', testRoutes);
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Backend server is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
