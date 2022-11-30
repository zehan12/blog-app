import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

import Example  from "../components/CommentBox"

const { Fragment } = require("react");


const ArticleBySlug = () => {
    const location = useLocation();
    const [ article, setArticle ] = useState({})

    console.log(location)

    const getArticleBySlug = async (slug) => {
        const res = await fetch(BASE_URL + `article/${slug}`);
        const data = await res.json();
        setArticle(data.article)
        console.log(article)
        
        
    }

    useEffect(() => {
        getArticleBySlug(location.pathname.split("/")[2])
    }, [])

    return (
        <Fragment>
            <h1>Article By Slug Page</h1>
            <article className="max-w-4xl px-6 py-24 mx-auto space-y-16 text-black">
                <div className="w-full mx-auto space-y-4">
                    <h1 className="text-5xl font-bold leading-none">{article.title}</h1>
                    <div className="flex flex-wrap space-x-2 text-sm dark:text-gray-400">
                        <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">#MambaUI</a>
                        <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">#TailwindCSS</a>
                        <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">#Angular</a>
                    </div>
                    <p className="text-sm dark:text-gray-900">by
                        <a href="#" target="_blank" rel="noopener noreferrer" className="mx-3 hover:underline dark:text-violet-400">
                            <span>Leroy Jenkins</span>
                        </a>on
                        <time datetime="2021-02-12 15:34:18-0200">Feb 12th 2021</time>
                    </p>
                </div>
                <div className="dark:text-gray-900">
                    <p className="text-2xl leading-loose">{article.content}</p>
                </div> 
            
            </article>
            <div className="w-1/3 mx-auto">
                <Example />
            </div>
        </Fragment>
    )
}

export default ArticleBySlug;