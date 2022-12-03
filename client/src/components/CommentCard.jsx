const CommentCard = ({ content, author }) => {
    return (
        <div class="w-96 border-slate-700 h-auto my-6 mx-auto">
            <div class="bg-white  px-5 py-3.5 rounded-lg shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear">
                <div className="flex justify-end m-0 p-0">x</div>

                <div class="flex items-center mt-2 rounded-lg px-1 py-1 cursor-pointer">
                    <div class="relative flex flex-shrink-0 items-end">
                        <img class="h-16 w-16 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv_WleTXRMGNwkbnNY7mIJ1laEhl6zW3Q3Ai4OBcUkcATF5WdAJba0Q1uPJKxaG9MXY-4&usqp=CAU" />
                        <span class="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-white"></span>
                    </div>
                    <div class="ml-3">
                        <span class="font-semibold tracking-tight text-xs">{author}</span>
                        <span class="text-xs leading-none opacity-50 ml-3"> reacted to your comment:</span>
                        <p class="text-xs leading-4 pt-2 italic opacity-70">"{content}"</p>
                        {/* <span class="text-[10px] text-blue-500 font-medium leading-4 opacity-75"><Moment className="ml-3" format='MMMM Do YYYY'>{}</Moment></span> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentCard