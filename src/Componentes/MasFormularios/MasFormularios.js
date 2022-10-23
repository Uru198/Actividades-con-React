import React, {useState} from 'react';

const MasFormularios = () => {

    //Creando una variable por cada campo de mi formulario
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const [hizoSubmit, setHizoSubmit] = useState(false);
    
    const crearUsuario = e => {
        e.preventDefault(); //Prevenimos el comportamiento normal del submit de un formulario
        const nuevoUsuario = {firstName, lastName, email, password, confirmpassword}; //Creando un objeto/diccionario con todas las variables que creamos previamente
        /*const nuevoUsuario = {nombre:firstName, apellido:lastName, edad:age};*/
        console.log("Nuevo registro:", nuevoUsuario);

        setFirstName("");
        setLastName("");
        setemail("");
        setpassword("");
        setconfirmpassword("");
        setHizoSubmit(true);

    }

    const mensaje = () => {
        if(!hizoSubmit) {
            return "Por favor ingresa todos tus datos";
        } else{
            return "¡Gracias por ingresar tus datos!";
        }
    }
    
    return(
        <form onSubmit={crearUsuario}>
            <div className="form-group">
                <label>Nombre:</label>
                <input className="form-control" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                
                {
                    firstName.length < 2  ? 
                        firstName === "" ?
                            <p>EL campo es obligatorio</p> :
                        <p>El nombre debe tener al menos 2 caracteres</p> :
                        null
                }
            </div>
            <div className="form-group">
                <label>Apellido:</label>
                <input className="form-control" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                {
                    lastName.length < 2  ? 
                        lastName === "" ?
                            <p>EL campo es obligatorio</p> :
                        <p>El apellido debe tener al menos 2 caracteres</p> :
                        null
                }
            </div>
            <div className="form-group">
                <label>correo:</label>
                <input className="form-control" onChange={(e) => setemail(e.target.value)} value={email} />
                {
                    email.length < 5  ? 
                        email === "" ?
                            <p>EL campo es obligatorio</p> :
                        <p>El correo debe tener al menos 5 caracteres</p> :
                        null
                }
            </div>
            <div className="form-group">
                <label>Contraseña:</label>
                <input className="form-control" type="password" onChange={(e) => setpassword(e.target.value)} value={password} />
                {
                    password.length < 8 ? 
                            password === "" ?
                            <p>El campo es obligatorio</p> :
                        <p>La Contraseña debe tener al menos 8 caracteres</p> :
                        null
                }
                
            </div>
            <div className="form-group">
                <label>Confirmar Contraseña:</label>
                <input className="form-control" type="password" onChange={(e) => setconfirmpassword(e.target.value)} value={confirmpassword} />
                {
                    confirmpassword !== password? 
                        confirmpassword !== password?
                            confirmpassword === "" ?
                            <p>El campo es obligatorio</p> :
                            <p>las Contraseñas deben coincidir</p> :
                            <p>Las Contraseñas no coinciden</p> :
                        null
                        
                        
                }
            </div>
            <input type="submit" className="btn btn-success" value="Crear Usuario" />

            {mensaje()}

        </form>
    )
}

export default MasFormularios;