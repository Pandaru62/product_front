import { NavLink } from "react-router-dom"

export default function Navbar() {

    return (
        <div>
            <h1>ACC Product Spa</h1>
            <div>
                <NavLink to="/">
                    Home
                </NavLink>
            </div>
        </div>
    )
}