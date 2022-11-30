import { useState } from "react";
import { Fragment } from "react";
import { BASE_URL } from "../utils/constant";

const CreateArticle = () => {

    const initialArticleState = {
        title: "", description: "", content: "", author: ""
    }

    const [article, setArticle] = useState(initialArticleState);
    console.log(article)

    const handleChangeValue = ({ target }) => {
        const { name, value } = target;
        setArticle({ ...article, [name]: value })
        console.log(name, value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(article);
        const { title, description, content, author } = article
        const res = await fetch(BASE_URL + "article", {
             method: "POSt", 
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify({ title, description, content, author })
             });
        const data = await res.json()
        console.log(data)
    }


    return (

        <Fragment>
            <diV className="bg-green-400">
                <h1>Form</h1>
                <input type="text" name="title" value={article.title} onChange={(e) => handleChangeValue(e)} placeholder="j" />
                <input type="text" name="description" value={article.description} onChange={(e) => handleChangeValue(e)} />
                <input type="text" name="content" value={article.content} onChange={(e) => handleChangeValue(e)} />
                <input type="text" name="author" value={article.author} onChange={(e) => handleChangeValue(e)} />
                <button className="bg-red-300" type="submit" onClick={(e) => handleSubmit(e)}>sub</button>
            </diV>
        </Fragment>

    )
}

export default CreateArticle;