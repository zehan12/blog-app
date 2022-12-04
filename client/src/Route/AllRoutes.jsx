import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Article from "../pages/Article";
import ArticleBySlug from "../pages/ArticleBySlug";
import ArticleEditor from "../pages/ArticleEditor";

const AllRoutes = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/article" element={<Article />} />
                <Route path="/article/:slug" element={<ArticleBySlug />} />
                <Route path="/article/editor" exact element={<ArticleEditor />} />
                <Route path="/article/editor/:slug" element={<ArticleEditor />} />
            </Routes>          
        </Fragment>
    )
}

export default AllRoutes;