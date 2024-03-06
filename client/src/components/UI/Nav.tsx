import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between sm:px-12 py-4 bg-white shadow sm:items-baseline w-full">
            <div className="flex gap-5 text-xl p-2">
                <Link to="/shop">Shop</Link>
                <Link to="/cart">Shopping Cart</Link>
            </div>
        </nav>
    )
}

export default Nav;