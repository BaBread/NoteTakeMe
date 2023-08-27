const express = require('express');
const path = require('path');
const fs = require('fs')
const html_routes = require('./routes/html-routes');
const api_routes = require('./routes/api-routes');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static("public"));
app.use('/api', api_routes);
app.use('/', html_routes);

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
});

