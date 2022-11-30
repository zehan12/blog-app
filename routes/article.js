const router = require("express").Router();
const { errorMessage, successMessage, status } = require("../helpers/status");
const Article = require("../models/Article");

const wrapAsync = fn => (req, res, next) => fn(req, res, next).catch(next);

router.get("/", wrapAsync(getArticle));

async function getArticle(req, res, next) {
    try {
        const article = await Article.find();
        successMessage.articles = article
        return res.status(status.success).json(successMessage)
    } catch (err) {
        errorMessage.error = err.message
        return res.status(status.bad).json({ errorMessage });
    }
}

router.post("/", wrapAsync(createArticle));

async function createArticle(req, res, next) {
    console.log(req.body)
    try {
        let { title, description, content, tagList, author } = req.body;
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
            tagList = tagList.split(",")
            console.log(tagList)
        }
        const createArticle = await Article.create({ title, description, content, tagList, author });
        return res.status(status.success).json(createArticle)
    } catch (err) {
        errorMessage.error = err.message
        return res.status(status.bad).json({ errorMessage });
    }
}

router.get("/:slug", wrapAsync(getArticleBySlug));

async function getArticleBySlug(req, res, next) {
    try {
        const { slug } = req.params;
        const article = await Article.findOne({ slug:slug })
        if (!article) {
            errorMessage.error = "Article not found";
           return res.status(status.notfound).json({error: errorMessage})
        } else {
            successMessage.article = article
           return res.status(status.success).json(successMessage)
        }
    } catch (err) {
        errorMessage.error = err.message;
        return res.status(status.bad).json(errorMessage)
    }
}


module.exports = router;
