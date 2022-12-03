const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String, require: true
    },
    author: {
        type: String, require: true
    },
    articleId: { type: Schema.Types.ObjectId, ref: "Article", required: true },

})

module.exports = mongoose.model("Comment", commentSchema);