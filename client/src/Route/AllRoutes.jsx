import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Article from "../pages/Article";
import ArticleBySlug from "../pages/ArticleBySlug";
import CreateArticle from "../pages/CreateArticle";

const AllRoutes = () => {
    return (
        <Fragment>
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