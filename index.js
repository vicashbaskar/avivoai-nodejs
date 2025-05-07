import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import responses from './controllers/ResponseController.js';
import routes from './routes/index.js';
dotenv.config();

const app = express();

// CORS configuration
const corsOptions = {
    origin: '*',
    credentials: true,
    exposedHeaders: ['xauthtoken', 'refresh_token', 'subscription_key', 'authorization', 'content-type']
};
app.use(cors(corsOptions));

// Body parser configuration
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// Common headers for all responses
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*')
    next();
});

// Middleware and routes 
//app.use(MiddleWare.verify); --- for Token validation 
app.use('/ping', (req, res) => {
    res.send(responses.get(200, 'Ok', { "status": "Health is ok" }));
});
app.use('/', routes);

// 404 handler
app.use((err, req, res, next) => {
    const status = err.response ? err.response.status : err.status;
    const error = err.response ? err.response.data.errors : err.error;
    res.status(status || 400).json({
        success: false,
        message: err.message || 'An error occurred.',
        errors: error || [],
    });
});

app.use(function (req, res) {
    console.log("Invalid Request");
    res.send(responses.get(404, "Invalid Request!", null));
});

//server Listener
app.set('port', process.env.PORT);

app.listen(app.get('port'), function () {
    console.log('Starting ' + process.env.HOST_NAME + ' @ ' + process.env.PORT);
    console.log('Waiting for Request...');
});




