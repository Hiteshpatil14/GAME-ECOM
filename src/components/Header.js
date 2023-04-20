import { BsCartCheck } from "react-icons/bs"
import { TbDeviceGamepad2 } from "react-icons/tb"
import "./Header.css"
import { useContext } from 'react'
import { Cartcontext } from '../App'
import { NavLink } from "react-router-dom"

const Header = () => {
    
    const {cart}=useContext(Cartcontext)
    console.log(cart)
    return (
        <nav className="navbar">
            <section>
                <TbDeviceGamepad2 style={{ fontSize: "3rem" }} /><NavLink to="/"><span className="logotext">10xGames</span></NavLink>
            </section>
            <section>
                <span className="logotext">{cart.length}</span><NavLink to="/checkout"><BsCartCheck style={{ fontSize: "3rem",color:"aliceblue" }} /></NavLink>
            </section>


        </nav>
    )
}
export default Header