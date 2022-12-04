import { Link } from "react-router-dom";
const ArticleCard = ({ title, content, tags, author, slug, handleDelete, comment }) => {
    return (
        <article class="rounded-xl bg-white p-6 sm:p-8">
            <div class="flex items-start">
                {/* <div
                    class="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
                    aria-hidden="true"
                > */}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv_WleTXRMGNwkbnNY7mIJ1laEhl6zW3Q3Ai4OBcUkcATF5WdAJba0Q1uPJKxaG9MXY-4&usqp=CAU" alt="profile" />
                {/* </div> */}

                <div class="sm:ml-8">
                    {
                        tags?.map((tag) => (
                            <strong
                                class="rounded border mr-3 border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white"
                            >
                                {tag}
                            </strong>

                        ))
                    }
                    <Link to={`/article/${slug}`}>

                        <h3 class="mt-4 text-xl font-medium sm:text-xl">
                            <a href="" class="hover:underline"> {title?.slice(0, 100) + "..."} </a>
                        </h3>

                    </Link>

                    <p class="mt-1 text-sm text-gray-700">
                        {content}
                    </p>

                    <div class="mt-4 sm:flex sm:items-center sm:gap-2">
                        <div class="flex items-center text-gray-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                />
                            </svg>
                            <p class="ml-1 text-xs">{comment} comments</p>
                        </div>

                        <span class="hidden sm:block" aria-hidden="true">&middot;</span>

                        <p class="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                            Posted by  <a href="" class="underline hover:text-gray-700">{author}</a>
                        </p>

                        <p onClick={() => handleDelete(slug)} >Delete</p>


                        <Link to={`/article/${slug}`}>
                        <button 
                        type="button" class="w-20 h-19 p-1  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-xs font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                            Read More
                        </button>
                        </Link>


                    </div>
                </div>
            </div>
        </article>


    )
}

export default ArticleCard;