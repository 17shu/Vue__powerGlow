const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const useRoutes = require('./routes/data');

app.use(cors());
app.use(bodyParser.json());
app.use('/api/data',useRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(` server running on ${PORT}`);
});