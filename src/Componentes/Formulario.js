import React from 'react';

const Formulario = (props) => {

   const {inputs, setInputs} = props;

   const onChange = (e) => {
    setInputs({
        ...inputs,[e.target.name]: e.target.value
    });
   };
    
    return(
        <form>
            <div className="form-group">
                <label htmlFor='firstName'>Nombre:</label>
                <input className="form-control" name='firstName' onChange={onChange}  type="text"/>
              
            </div>
            <div className="form-group">
                <label htmlFor='lastName'>Apellido:</label>
                <input className="form-control" name='lastName' onChange={onChange} type="text" />
            </div>
            <div className="form-group">
                <label htmlFor='email'>Email:</label>
                <input className="form-control" name='email' onChange={onChange} type="text" />
            </div>
            <div className="form-group">
                <label htmlFor='password'>password:</label>
                <input className="form-control" name='password'  onChange={onChange} type="password" />
            </div>
            <div className="form-group">
                <label htmlFor='confirmpassword'>confirmpassword:</label>
                <input className="form-control" name='confirmpassword'  onChange={onChange} type="password" />
            </div>
            <input type="submit" className="btn btn-success" value="Crear Usuario" />


        </form>
    )
}

export default Formulario;