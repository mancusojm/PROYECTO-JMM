import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Buenos Aires</h3>
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