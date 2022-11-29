import { NavLink } from "react-router-dom";

const Header = () => {
    const active = "text-black"
    const classes = " text-stone-500 text-sm font-medium uppercase"
    return (
        <header className='bg-stone-100 py-12'>
            <nav className='center'>
                <ul className='flex justify-center gap-8'>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? active + classes
                                    : classes}
                            to={"/"}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? active + classes
                                    : classes}
                            to='/article'
                        >
                            Article
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header