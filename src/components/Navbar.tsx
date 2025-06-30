import { NavLink } from "react-router-dom"

export default function Navbar() {

    return (
        <div className="flex">
            <h1 className='text-3xl text-red-300'>ACC Product Spa</h1>
            <div className="card">
                <NavLink to="/">
                    Home
                </NavLink>
            </div>
        </div>
    )
}