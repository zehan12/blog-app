const router = require("express").Router();
const { errorMessage, successMessage, status } = require("../helpers/status");
const Article = require("../models/Article");
const Comment = require("../models/Comment");

const wrapAsync = fn => (req, res, next) => fn(req, res, next).catch(next);

router.get("/", wrapAsync(getArticle));

async function getArticle(req, res, next) {
    try {
        // console.log(req.query)
        console.log("not here")
        const article = await Article.find({});
        successMessage.articles = article.reverse()
        return res.status(status.success).json(successMessage)
    } catch (err) {
        errorMessage.error = err.message
        return res.status(status.bad).json({ errorMessage });
    }
}

router.post("/", wrapAsync(createArticle));

async function createArticle(req, res, next) {
    try {
        let { title, description, content, tagList, author } = req.body;
        console.log(req.body)
        const quote = ["'", '"', "`"]
        if (quote.includes(title.charAt(0)), quote.includes(title.at(-1))) {
            title = title.substr(1, title.length - 2)
            if ( !title ) {
                console.log("enter a valid title")
            }
            if ( title.trim().length === 0 ) {
                console.log("Enter title with some character")
            } 
        }

        if (!title || !description || !content) {
            errorMessage.error = "title, description and content field cannot be empty"
            return res.status(status.bad).json({ error: errorMessage })
        }

        if (!author) {
            errorMessage.error = "Author name not found"
            return res.status(status.notfound).json({ error: errorMessage })
        }
        if (tagList) {
            console.log(tagList)
            tagList = tagList.split(/(?:,| )+/).filter((x, i, a) => a
                .indexOf(x) === i && x
                .trim().length !== 0)
                .map((e) => e.trim());
            console.log(tagList)
        }
        const createArticle = await Article.create({ title, description, content, tagList, author });
        return res.status(status.success).json(createArticle)
    } catch (err) {
        errorMessage.error = err.message
        return res.status(status.bad).json({ errorMessage });
    }
}


// get article
const getArticleBySlug = async (req, res, next) => {
    try {
        const { slug } = req.params;
        const article = await Article.findOne({ slug: slug })
            .populate('commentId').exec()
        if (!article) {
            errorMessage.error = "Article not found";
            return res.status(status.notfound).json({ error: errorMessage })
        } else {
            successMessage.article = article
            return res.status(status.success).json(successMessage)
        }
    } catch (err) {
        errorMessage.error = err.message;
        return res.status(status.bad).json(errorMessage)
    }
}
router.get("/:slug", wrapAsync(getArticleBySlug));




// delete article

const deleteArticle = async (req, res, next) => {
    console.log(req.method)
    try {
        const { slug } = req.params;
        const article = await Article.findOneAndDelete({ slug });
        if (article) {
            if (article.commentId.length > 1) {
                const comment = await Comment.deleteMany({ articleId: article.id });
                successMessage = "Article Deleted"
                return res.status(status.success).json(successMessage);
            } else {
                successMessage = "Article Deleted with comments"
                return res.status(status.success).json(successMessage);
            }
        } else {
            errorMessage.error = "Article not found"
            return res.status(status.bad).json(errorMessage);
        }
    } catch (err) {
        errorMessage.error = err.message;
        return res.status(status.bad).json(errorMessage);
    }
}

router.delete("/:slug", wrapAsync(deleteArticle));




module.exports = router;
