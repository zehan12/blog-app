import { NavLink } from "react-router-dom";

const Header = () => {
    const classes = " text-stone-500 text-sm font-medium uppercase"
    return (
        <header className='bg-stone-100 py-12'>
            <nav className='center'>
                <ul className='flex justify-center gap-8'>
                    <li>
                        <NavLink
                            style={({isActive})=>  isActive ? {color:"red"} : {}}
                            className=" text-stone-500 text-sm font-medium uppercase"
                            to={"/"}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        style={({isActive})=>  isActive ? {color:"red"} : {}}
                            className=" text-stone-500 text-sm font-medium uppercase"
                            end
                            to={'/article'}
                            >
                            Article
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                         style={({isActive})=>  isActive ? {color:"red"} : {}}
                         className=" text-stone-500 text-sm font-medium uppercase"
                         to={'/article/editor'}
                         >
                         Create
                    

                        </NavLink>
                        
                    </li>
                </ul>
            </nav>
       </header>
    )
}

export default Header