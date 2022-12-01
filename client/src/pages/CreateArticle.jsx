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
            <div className="bg-red-300 flex">
                <div className="bg-green-400 lg:w-2/4 w-full">
                    <form className="lg:h-3/4">
                        <div class="bg-indigo-50 my-4 md:px-20 pt-6">
                            <div class=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
                                <h1 class="text-center text-2xl font-bold text-gray-500 mb-10">ADD POST</h1>
                                <div class="space-y-4">
                                    <div>
                                        <label for="title" class="text-lx font-serif">Title</label>
                                        <br />
                                        <input
                                            type="text" placeholder="title" id="title"
                                            name="title" value={article.title} onChange={(e) => handleChangeValue(e)}
                                            class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
                                    </div>
                                    <div>
                                        <label for="email" class="text-lx font-serif">Description</label>
                                        <br />
                                        <input type="text"
                                            name="description" value={article.description} onChange={(e) => handleChangeValue(e)}
                                            placeholder="Enter description of article" id="email" class="ml-2 outline-none py-2  px-2 text-md border-2 rounded-md" />
                                    </div>
                                    <div>
                                        <label for="description" class="block mb-2 text-lg font-serif">content</label>
                                        <textarea id="description"
                                        name="content" value={article.content} onChange={(e) => handleChangeValue(e)} 
                                        cols="30" rows="10" placeholder="write content of the post.." class="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"></textarea>
                                    </div>
                                    <div>
                                        <label for="name" class="text-lx font-serif">Author</label>
                                        <br />
                                        <input type="text" placeholder="name" id="name" class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
                                    </div>

                                    <button class=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">ADD POST</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    {/* <h1>Form</h1>
                    <input type="text" name="title" value={article.title} onChange={(e) => handleChangeValue(e)} placeholder="j" />
                    <input type="text" name="description" value={article.description} onChange={(e) => handleChangeValue(e)} />
                    <input type="text" name="content" value={article.content} onChange={(e) => handleChangeValue(e)} />
                    <input type="text" name="author" value={article.author} onChange={(e) => handleChangeValue(e)} />
                    <button className="bg-red-300" type="submit" onClick={(e) => handleSubmit(e)}>sub</button> */}
                </div>
                <div
                    style={{ backgroundImage: `url(https://i.postimg.cc/SQZTLL23/aurora-borealis-northern-lights-night-5k-6000x3973-1680.jpg)` }}
                    className="bg-purple-200 lg:w-min-full lg:w-2/4 hidden lg:block">
                    <div className="mx-0 my-3">
                        <p className="text-white">{article.title.length}</p>
                        <h1 className="text-white m-10 font-serif font-600" style={{ fontSize: `${(article.title.length > 73 ? 22 : 40)}px` }}>{article.title.slice(0) || "title of  the post"}</h1>
                        <h3>{article.description || "Description of Post" }</h3>
                        <p>{article.content || "Content of Post"}</p>
                    </div>
                </div>

            </div>

        </Fragment>

    )
}

export default CreateArticle;