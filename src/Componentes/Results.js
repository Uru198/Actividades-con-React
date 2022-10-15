import React from "react";

const Results = (props) => {
    const {firstName, lastName, email, password, confirmpassword} = props.data;

    return (
        <div>
            <h2>Resultados</h2>
            <p>Nombre: {firstName}</p>
            <p>Apellido: {lastName}</p>
            <p>correo: {email}</p>
            <p>Contraseña: {password}</p>
            <p>confirmpassword: {confirmpassword}</p>
        </div>
    )
}

export default Results;