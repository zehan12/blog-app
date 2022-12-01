import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

import Example from "../components/CommentBox"

const { Fragment } = require("react");


const ArticleBySlug = () => {
    const location = useLocation();
    const [article, setArticle] = useState({})

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
                {
                    [1, 2, 3].map((v) => (
                        <div class="w-96 border-slate-700 h-auto my-6 mx-auto">
                            <div class="bg-white  px-5 py-3.5 rounded-lg shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear">
                               
                                <div class="flex items-center mt-2 rounded-lg px-1 py-1 cursor-pointer">
                                    <div class="relative flex flex-shrink-0 items-end">
                                        <img class="h-16 w-16 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv_WleTXRMGNwkbnNY7mIJ1laEhl6zW3Q3Ai4OBcUkcATF5WdAJba0Q1uPJKxaG9MXY-4&usqp=CAU"/>
                                            <span class="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-white"></span>
                                    </div>
                                    <div class="ml-3">
                                        <span class="font-semibold tracking-tight text-xs">John Doe</span>
                                        <span class="text-xs leading-none opacity-50">reacted to your comment:</span>
                                        <p class="text-xs leading-4 pt-2 italic opacity-70">"This is the comment..."</p>
                                        <span class="text-[10px] text-blue-500 font-medium leading-4 opacity-75">a few seconds ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Fragment>
    )
}

export default ArticleBySlug;