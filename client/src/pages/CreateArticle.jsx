import { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ErrorBox from "../components/common/ErrorBox";
import Loader from "../components/common/Loader";
import { BASE_URL } from "../utils/constant";


const CreateArticle = () => {

    const Navigate = useNavigate()
    const Location = useLocation()

  

    const initialArticleState = {
        title: "", description: "", content: "", author: "", tags: ""
    }

    const [article, setArticle] = useState(initialArticleState);
    const [apiError, setApiError] = useState("");
    const [errors, setErrors] = useState({});
    const [ isLoading, setLoading ] = useState(false);

    const getArticleBySlug = async ( slug ) => {
        const res = await fetch(BASE_URL+`article/${slug}`);
        const data = await res.json();
        setArticle({...data.article,tags:data.article.tagList.join(" ")})
    }

    useEffect(()=>{
        getArticleBySlug(Location.pathname.split("/")[3])
    },[])
    console.log(article)

    const handleChangeValue = ({ target }) => {
        const { name, value } = target;
        switch (name) {
            case 'title':
                var specials = /[^A-Za-z 0-9]/g;
                errors.title =
                    value.length < 1
                        ? 'Enter title' :
                        (specials.test(value[0]) || specials.test(value.at(-1)))
                            ? "no special charater in title"
                            : '';
                break;
            case 'description':
                errors.description = value.length < 1 ? "Description field can not be empty" : ""
                break;
            case 'content':
                errors.content = value.length < 1 ? "Content field can not be empty" : ""
                break;
            case 'author':
                errors.author = value.length < 1 ? "Author field can not be empty" : ""

            default:
                break;
        }
        setArticle({ ...article, [name]: value })
        console.log(name, value)
    }


    const handleSubmit = async (e) => {
        try {
        e.preventDefault();
        setLoading(true)
        console.log(article);
        const { title, description, content, author, tags } = article
        const tagList = tags
        const res = await fetch(BASE_URL + "article", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description, content, author, tagList })
        });
        const data = await res.json()
        if (data.error) setApiError(data.error.error)
        setLoading(false)
        setArticle(initialArticleState);
        console.log(res)
        if ( res.status === 200 ) return Navigate('/article')
        } catch ( error ) {
            setApiError(error.message)
            setLoading(false)
        } finally {
            setLoading(false)
            setArticle(initialArticleState);
        }
    }


    return (

        <Fragment>
            <h1>Here</h1>
            <div className="bg-red-300 flex">
                <div className="bg-white lg:w-2/4 w-full">
                    <form onSubmit={(e) => handleSubmit(e)} 
                    className="lg:h-3/4"
                    >
                        <div class="bg-white my-4 md:px-20 pt-6">
                            <div class=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
                                <h1 class="text-center text-2xl font-bold text-gray-700 mb-7">ADD POST</h1>

                                {apiError && <ErrorBox errorMessgae={apiError} />}

                                <div class="space-y-4">
                                    <div>
                                        <label for="title" class="text-lx font-serif">Title</label>
                                        <br />
                                        <input
                                            type="text" placeholder="title" id="title"
                                            name="title" value={article.title} onChange={(e) => handleChangeValue(e)}
                                            class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
                                    </div>
                                    <div className="text-rose-700">{errors && errors.title}</div>
                                    <div>
                                        <label for="email" class="text-lx font-serif">Description</label>
                                        <br />
                                        <input type="text"
                                            name="description" value={article.description} onChange={(e) => handleChangeValue(e)}
                                            placeholder="Enter description of article" id="email" class="ml-2 outline-none py-2  px-2 text-md border-2 rounded-md" />
                                    </div>
                                    <div className="text-rose-700">{errors && errors.description}</div>
                                    <div>
                                        <label for="description" class="block mb-2 text-lg font-serif">content</label>
                                        <textarea id="content"
                                            name="content" value={article.content} onChange={(e) => handleChangeValue(e)}
                                            cols="30" rows="10" placeholder="write content of the post.." class="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"></textarea>
                                    </div>
                                    <div className="text-rose-700">{errors && errors.content}</div>

                                    <div>
                                        <label for="name" class="text-lx font-serif">Tags</label>
                                        <br />
                                        <input
                                            name="tags" value={article.tags} onChange={(e) => handleChangeValue(e)}
                                            type="text" placeholder="Enter the Tags"
                                            id="name" class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
                                    </div>
                                    <div className="text-rose-700">{errors && errors.tagList}</div>

                                    <div>
                                        <label for="name" class="text-lx font-serif">Author</label>
                                        <br />
                                        <input
                                            name="author" value={article.author} onChange={(e) => handleChangeValue(e)}
                                            type="text" placeholder="Enter Author Name" id="name"
                                            class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
                                    </div>
                                    <div className="text-rose-700">{errors && errors.author}</div>

        {
            isLoading ? <button className="px-6 py-2 flex 
            gap-4 mx-auto align-middle rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600 ">Loading <Loader /> </button> :
                                    <button class=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">ADD POST</button>
        }
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div
                    // style={{ backgroundImage: `url(https://i.postimg.cc/SQZTLL23/aurora-borealis-northern-lights-night-5k-6000x3973-1680.jpg)` }}
                    className="bg-purple-900
                    opacity-100 lg:w-min-full lg:w-2/4 hidden lg:block">
                    <div className="mx-0 my-3">
                        <h1 className="text-white m-10 font-serif font-600" style={{ fontSize: `${(article.title.length > 73 ? 22 : 40)}px` }}>{article.title.slice(0) || "title of  the post"}</h1>
                        <div className="text-white m-10 font-serif font-600">
                           written by  { article.author || "Author" }
                        </div>
                        <h3
                        className="text-white text-3xl
                        m-10 font-serif font-600">{ article.description && article.description.slice(0,300)+"..."|| "Description of Post"}</h3>
                        <p className="text-white m-10 font-serif font-600 text-xl">{ 
                        (article.content &&
                        article.content.slice(0,800)+". . .") || "Content of Post"
                        }</p>
                        <div className="flex 
                        text-white m-10 font-serif font-600
                        flex-row justify-start gap-6">
                            {article.tags && article.tags.split(/(?:,| )+/).filter((x, i, a) => a
                                .indexOf(x) === i && x
                                    .trim().length !== 0)
                                .map((e) => e.trim()).map((v) => (<p>{v}</p>)) || "Enter your Tags" }
                        </div>
                    </div>

                </div>

            </div>

        </Fragment>

    )
}

export default CreateArticle;