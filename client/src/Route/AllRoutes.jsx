import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Article from "../pages/Article";
import ArticleBySlug from "../pages/ArticleBySlug";
import CreateArticle from "../pages/CreateArticle";

const AllRoutes = () => {
    return (
        <Fragment>
            <h1>Routing</h1>
            <div className="App">
                <h1 className='text-red-700 text-3xl text-center'> [ 13, 1 , 1, 8, 5, 14, 15, 15, 18 ] </h1>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/article" element={<Article />} />
                <Route path="/article/:slug" element={<ArticleBySlug />} />
                <Route path="/article/create" element={<CreateArticle />} />
            </Routes>          
        </Fragment>
    )
}

export default AllRoutes;