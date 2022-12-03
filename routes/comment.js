const router = require("express").Router({mergeParams:true});
const Article = require("../models/Article");
const Comment  = require("../models/Comment");
const wrapAsync = require("../utils/wrapAsync")

router.get('/',wrapAsync( getAllComments ));

async function  getAllComments( req, res, next ) {
    try {
        const { slug } = req.params
        const article = await Article.find({slug:slug})
        console.log("this")
        res.status(200).json({article})
    } catch ( err ) {
        console.log(err)
    }
}


router.post("/", wrapAsync( createComment ))

async function  createComment( req, res, next ) {
    try {
        const { slug } = req.params
        console.log(req.body)
        const { content, author } = req.body
        const article = await Article.findOne({slug:slug})
        console.log(article,"founded")
        if ( article ) {
        const articleId = article.id;
        const comment = await Comment.create({ content, author, articleId });
        await Article.findByIdAndUpdate(articleId, {$push: {commentId: comment._id}} )
        res.json({comment});
        } else {
            console.log("article not found")
            res.json("not fond")
        }
    } catch ( err ) {
        console.log(err)
    }
}



module.exports = router;