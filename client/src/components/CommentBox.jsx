import { Fragment, useState } from 'react'


const CommentBox = ({handleComment}) => {
  const [ comment, setComment ] = useState({});
  const [ error, setError ] = useState("");

  const handleChange = ( { target } ) => {
    const { name, value } = target;
    if ( name === "author" &&  value.length == 0 ) {
      setError("please enter author name to proceed")
    }  
    setComment({...comment, [name]:value});
  }

  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <img
          className="inline-block h-10 w-10 rounded-full"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <div className="min-w-0 flex-1">
          <div className="border-b border-gray-200 focus-within:border-indigo-600">
            <label htmlFor="comment" className="sr-only">
              Add your comment
            </label>
            <textarea
              rows={3}
              name="content"
              onChange={(e)=>handleChange(e)}
              value={comment.content}
              id="comment"
              className="border-transparent focus:border-transparent focus:ring-0 block w-full resize-none border-0 border-b  p-0 pb-2   sm:text-sm"
              placeholder="Add your comment..."
              defaultValue={''}
            />
          </div>
          <div className="flex justify-between pt-2">
            <div className="flex items-center space-x-5">
              <div className="flow-root">
              </div>
              <div className="flow-root">
              <p>author</p>
              <input
              onChange={(e)=>handleChange(e)}
              name="author"
              placeholder={error || "author name"}
               className='border-b-2 border-gray-300' type="text" value={comment.author}/>
              </div>
            </div>
         
            <div className="flex-shrink-0">
              <button
              onClick={()=>handleComment(comment)}
                type="submit" disabled={error ? true : false }
                className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Post
              </button>
            </div>
          </div>
          
      </div>
    </div>
  )
}

export default CommentBox;