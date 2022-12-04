import { Fragment, useEffect, useState } from "react"
import Banner from "../components/common/Banner";
import ArticleCard from "../components/ArticleCard"
import { BASE_URL } from "../utils/constant";
import ArticleSection from "../components/ArticleSection";

const Article = () => {

    const [ articles, setArticles ] = useState([])
    const getArticle = async ( ) => {
        const res  = await fetch(BASE_URL+"article");
        const data = await res.json();
        console.log(data)
        setArticles(data.articles)
    }

    const handleDelete = async ( slug ) => {
        const res = await fetch(BASE_URL+`article/${slug}`,{
            method:"DELETE"
        })
        const data = await res.json();
        console.log(data)
        getArticle()
    }

    useEffect(()=> {
        getArticle();
    },[])


    return (
        <Fragment>
            <Banner />
            {
                articles.length !== 0 ?
            <ArticleSection 
            articles={articles}
            handleDelete={handleDelete}

             /> : <div className="text-center">
             <h1 className="mx-auto text-3xl my-10 font-sans">No Article created Yet!!</h1>
             </div>
            }

        </Fragment>
    )
}

export default Article;