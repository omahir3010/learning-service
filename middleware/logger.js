
//show up the url using middleware in response
//middleware are mainly use to track the req/res cycle or to execute something on API Request
//Authentication for API, logging and Error Logging.

const logger = (req,res,next) => {
    req.myUrl = `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`;
    console.log('Middleware Ran!');
    next();
};

module.exports = logger;
