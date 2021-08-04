import React, { useState } from "react";
import { Link } from "react-router-dom";

const initial_usuario = {
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
};
const NuevaCuenta = () => {
    //State para iniciar sesión
    const [usuario, setUsuario] = useState(initial_usuario);

    //destructurar de usuario
    const { nombre, email, password, confirmar } = usuario;

    //funcion que se encarga de actualizar el usuario
    const onChangee = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        });
    };

    //cuando el usuario quiera iniciar sesión
    const onSubmitt = (e) => {
        //prevengo el comportamineto por defecto de mi formulario
        e.preventDefault();

        //Validar que no haya campos vacios

        //password minimo de 6 caracteres

        //los dos passwords son iguales

        //Pasarlo al action
    };
    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crea una cuenta</h1>
                <form onSubmit={onSubmitt}>
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="ingresa tu nombre"
                            onChange={onChangee}
                            value={nombre}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="ingresa tu email"
                            onChange={onChangee}
                            value={email}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="ingresa tu password"
                            onChange={onChangee}
                            value={password}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirma password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Confirma password"
                            onChange={onChangee}
                            value={confirmar}
                        />
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesión"
                        />
                    </div>
                </form>
                <Link to={"/"} className="enlace-cuenta">
                    Iniciar sesión
                </Link>
            </div>
        </div>
    );
};

export default NuevaCuenta;
