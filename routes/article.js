const router = require("express").Router();
const { errorMessage, successMessage, status } = require("../helpers/status");
const Article = require("../models/Article");

const wrapAsync = fn => (req, res, next) => fn(req, res, next).catch(next);

router.get("/",wrapAsync(getArticle));

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
        return res.status(status.bad).json({ error: errorMessage });
    }
}



module.exports = router;
