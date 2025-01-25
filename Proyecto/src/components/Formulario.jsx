import "./Formulario.css"
import { useState } from "react"
export function Formulario({setUser}){
    const [nombre, setNombre]=useState("")
    const [contraseña,setContraseña]=useState("")
    const [error,setError]=useState(false)

    const nombresPermiso = ["Bryan", "Edison", "Erick", "Esteban", "Jonathan"];
  const contraseñaPermiso = "12345";

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (nombre.trim() === "" || contraseña.trim() === "") {
            setError("Por favor, llena todos los campos.");
            return;
          }
      
          if (!nombresPermiso.includes(nombre)) {
            setError("Nombre no permitido");
            return;
          }
      
          if (contraseña !== contraseñaPermiso) {
            setError("Contraseña incorrecta");
            return;
          }
      
          setError("");
          setUser([nombre]);
        };
      

    return(
        <section>
            <h1 className="titulo">ITQ Login</h1>
            <form className="formulario" onSubmit={handleSubmit}>
                <div className="contenedor">
                    <h1 className="nombre">Nombre:</h1>
                <input type="text" placeholder="Nombre Usuario..." value={nombre} onChange={e=>setNombre(e.target.value)}/>
                <h1 className="contraseña">Contraseña:</h1>
                <input type="password" placeholder="Contraseña..." value={contraseña} onChange={e=>setContraseña(e.target.value)}/>
                <button className="botonLogin">Iniciar Sesion</button>
                </div>
            </form>
            {error && <p>Debe llenar los campos</p>}
        </section>
    )
}