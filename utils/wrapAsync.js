module.exports =  wrapAsync = ( fn ) => (req, res, next) => fn(req, res, next).catch(next);
