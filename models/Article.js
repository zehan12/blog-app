const mongoose = require("mongoose"), 
Schema = mongoose.Schema;

var articleSchema = new Schema( {
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, require: true },
    commentId: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    tagList: [ { type: String } ],
    author: { type: String, required: true },
    clap: { type : Number, default: 0 },
    slug: { type: String, unique: true }
} , { timestamps: true } );


function generateUID() {
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = Date.now()
    firstPart = ("000" + firstPart.toString(36)).slice(-1);
    secondPart = ("000" + secondPart.toString(36)).slice(-2);
    return firstPart + secondPart;
}

articleSchema.pre('save', async function(next){
    console.log(this)
    if ( this.title.length > 13 ) {
        this.slug = this.title.slice(0,13).split(" ").join("-")+"-"+generateUID();
    } else {
        this.slug = this.title.split(" ").join("-")+"-"+generateUID();   
    }
    next();
})


module.exports = mongoose.model( "Article", articleSchema  );