import CartWidget from "../CartWidget/CartWidget"
import logo from './assets/logo.png'

const NavBar = () => {
    return (
        <nav>
            <h3>Buenos Aires</h3>
            <img src={logo} alt="logo"/>
            <div>
                <button>Alfajores</button>
                <button>Medialunas</button>
                <button>Tortas</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar