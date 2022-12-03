import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BASE_URL } from "../utils/constant";


import CommentBox from "../components/CommentBox"
import Loader from "../components/common/Loader";
import ArticlePost from "../components/ArticlePost";
import CommentCard from "../components/CommentCard";

const { Fragment } = require("react");


const ArticleBySlug = () => {
    const location = useLocation();
    const [article, setArticle] = useState({})

    console.log(location)

    const getArticleBySlug = async (slug) => {
        const res = await fetch(BASE_URL + `article/${slug}`);
        const data = await res.json();
        setArticle(data.article)
        console.log(data, "data")
    }

    const handleComment = async (comment) => {
        const { slug } = article;
        const { content, author } = comment
        const res = await fetch(BASE_URL + `article/${slug}/comment`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content, author })
        })
        const data = res.json();
        getArticleBySlug(slug);
    }

    useEffect(() => {
        getArticleBySlug(location.pathname.split("/")[2])
    }, [])

    return (
        <Fragment>
            {
                article ?
                    <ArticlePost
                        title={article.title}
                        description={article.description}
                        content={article.content}
                        tagList={article.tagList}
                        author={article.author}
                        createdAt={article.createdAt}
                        slug={article.slug}
                    />
                    : <Loader />
            }
            <div className="w-1/3 mx-auto">
                <CommentBox handleComment={handleComment} />
                {
                    typeof article.commentId === "object" &&
                        article?.commentId.length != 0 ?
                        article.commentId.map((comment) => (
                            <CommentCard
                                author={comment.author}
                                content={comment.content} />

                        )) : ""
                }

            </div>
        </Fragment>
    )
}

export default ArticleBySlug;