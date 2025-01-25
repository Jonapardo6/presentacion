import "./Home.css"


export function Home({ user, setUser, image }) {
    const handleLogout = () => {
        setUser([])
    }
    return (
            <section>
                <header>
                <nav>
                    <ul>
                        <li>
                            <a href="#Home">Inicio</a>
                        </li>
                        <li>
                            <a href="#Home">Nosotros</a>
                        </li>
                        <li>
                            <a href="#Home">Presentacion</a>
                        </li>
                        <li>
                        <button className="boton1" onClick={handleLogout}>Cerrar Sesion</button>
                        </li>
                    </ul>
                </nav>
                </header>

                <div className="usuario">
                    <h1 className="Principal1">¡Hola</h1>
                    <h1 className="Principal2">{user}!</h1>
                </div>
            </section>
    )
}