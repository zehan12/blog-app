const  router = require("express").Router();

router.get( "/", ( req, res ) => {
    console.log(req.method)
    res.json({method:req.method});
} )

module.exports = router;
