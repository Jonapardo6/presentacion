import "./Home.css";

import bryan from "../img/bryan.jpg";
import edison from "../img/edison.jpg";
import erick from "../img/erick.jpg";
import jonathann from "../img/jonathann.jpg";
import Esteban from "../img/esteban.jpg";

export function Home({ user, setUser }) {
    const handleLogout = () => {
        setUser([]);
    };

    const images = [
        { 
            src: bryan, 
            alt: "Bryan Justin Antamba Enriquez", 
            description: "Nombre: Bryan Justin Antamba Enriquez\nEdad: 21 años\nCarrera: Desarrollo de Software\nDescripción: Me gusta la tecnología y el deporte." 
        },
        { 
            src: edison, 
            alt: "Edison Jhosue Proaño Peñafiel", 
            description: "Nombre: Edison Jhosue Proaño Peñafiel\nEdad: 29 años\nCarrera: Desarrollo de Software\nDescripción: Programador aspirante a Junior, versátil dentro de cualquier campo y amante de Zell." 
        },
        { 
            src: erick, 
            alt: "Erick Santiago Mejía Hernández", 
            description: "Nombre: Erick Santiago Mejía Hernández\nEdad: 19 años\nCarrera: Desarrollo de Software\nDescripción: Me gusta la tecnología, jugar videojuegos y escuchar música." 
        },
        { 
            src: jonathann, 
            alt: "Jonathan Jair Pardo Gomez", 
            description: "Nombre: Jonathan Jair Pardo Gomez\nEdad: 19 años\nCarrera: Desarrollo de Software\nDescripción: Me gustan mucho los videojuegos y aspiro a viajar por muchos países." 
        },
        { 
            src: Esteban, 
            alt: "Esteban Alejandro Sánchez Plaza", 
            description: "Nombre: Esteban Alejandro Sánchez Plaza\nEdad: 19 años\nCarrera: Desarrollo de Software\nDescripción: Asociativo, colaborativo, me gusta escuchar música." 
        }
    ];

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
                            <a href="#Home">Presentación</a>
                        </li>
                        <li>
                            <button className="boton1" onClick={handleLogout}>
                                Cerrar Sesión
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>

            <div className="usuario">
                <h1 className="Principal1">¡Hola</h1>
                <h1 className="Principal2">{user}!</h1>
            </div>

            <div className="gallery">
                {images.map((image, index) => (
                    <div className="gallery-item" key={index}>
                        <img src={image.src} alt={image.alt} className="gallery-image" />
                        <pre className="gallery-description">{image.description}</pre> {/* Uso de <pre> para formato en líneas */}
                    </div>
                ))}
            </div>
        </section>
    );
}
