import { Link } from "react-router-dom";

const HeroSection = ( ) => {
    return(
        <section>
	<div className="dark:bg-violet-400">
		<div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">Blog App</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">create your own blogs</p>
			<div className="flex flex-wrap justify-center">
			<Link to="/article" >	<button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50">Get started</button> </Link>
			<Link >	<button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900">create</button> </Link>
			</div>
		</div>
	</div>
	<img src="https://source.unsplash.com/random/900x900" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500 object-cover" />
</section>
    )
}

export default HeroSection;