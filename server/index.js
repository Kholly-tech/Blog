require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 4000;
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
// const corsConfig = require('./App/Config/corsConfig');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const { readdirSync } = require('fs');
const { resSender } = require('./App/Helpers/resSender');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(helmet());
// app.use(cors(corsConfig))
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/temp/'
}));

// Routes
app.get('/api/',(req, res) => {
    res.send('Welcom to Blog Api');
});

readdirSync('./App/Routes').map((r) => 
    app.use('/api/', require(`./App/Routes/${r}`))
);

// // Handle unknown routes
app.use((req, res, next) => {
    resSender(res, 404, 'Route not found', 'error');
})

// Database Connection
let dbUri;
if(process.env.NODE_ENV === 'production') {
    dbUri = process.env.MONGODB_URI
} else {
    dbUri = process.env.MONGODB_URI_LOCAL
}
mongoose.connect(dbUri).then(() => {
    console.log('Connected to MongoDB');
    server.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
}).catch((err) => {
    console.log('DB COnnection Error: ',err);
});

module.exports = app;
