import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const ArticlePost = ( { title, tagList, author, description, content, createdAt, slug } ) => {
    return(
        <article className="max-w-4xl px-6 py-24 mx-auto space-y-16 text-black">
        <div className="w-full mx-auto space-y-4">
            
            <h1 className="text-5xl font-bold leading-none">{title}</h1>
            <div className="flex flex-wrap space-x-2 text-sm dark:text-gray-400">
                {
                    tagList &&
                    tagList.map((tag)=>(
                        <a rel="noopener noreferrer" href="#" className="p-1 hover:underline text-green-700">#{tag}</a>
                    ))
                }
            </div>
            <p className="text-sm dark:text-gray-900">by
                <a href="#" target="_blank" rel="noopener noreferrer" className="mx-3 hover:underline dark:text-violet-400">
                    <span>{author}</span>
                </a>  on  
                <Moment className="ml-3" format='MMMM Do YYYY'>{createdAt}</Moment>

            </p>
        </div>
        <div className="text-3xl font-serif font-500 ">{description} </div>
        <div className="dark:text-gray-900">
            <p className="text-2xl leading-loose">{content}</p>
        </div>
        <div className="flex gap-9 hover:text-purple-500">
            <Link to={`/article/editor/${slug}`}>Edit this Article</Link>
        </div>
    </article>
    )
}

export default ArticlePost;