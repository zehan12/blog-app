import { Fragment } from "react"
import ArticleCard from "./ArticleCard"

const ArticleSection = ( { articles, handleDelete } ) => {
    return(
        <Fragment>
            <div className="mx-40 my-10">
            {    articles?.map((article) => (<ArticleCard
                    key={article.slug}
                    title={article.title}
                    content={article.content}
                    tags={article.tagList}
                    author={article.author}
                    slug={article.slug}
                    handleDelete={handleDelete}
                    comment={article.commentId.length}
                />))
            }
            </div>
        </Fragment>
    )
}

export default ArticleSection;