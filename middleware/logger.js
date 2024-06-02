
//show up the url using middleware in response
const logger = (req,res,next) => {
    req.myUrl = `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`;
    console.log('Middleware Ran!');
    next();
};

module.exports = logger;
