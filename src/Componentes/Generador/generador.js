import React, {useState} from "react";


const Generador = (props) =>{
    const {point, setPoint} = props;
    const  [validar, setValidar] = useState('')
    const [point2, setPoint2] = useState('');

    const onChange = (e) =>{
        setPoint2(e.target.value)
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        if(point2.length < 2){
            setValidar("Debe tener mas de dos caracteres")
        }else{
        setValidar('');
        setPoint([...point, {shore: point2, completed:false}]);
        setPoint2("")};
    }

    return (
        <div>{validar !== ''?
        <p className="para">{validar}</p>:""}
        <form className="form1"onSubmit={onSubmit}>
        <input className="input1" type="text" placeholder="Agrega algo" onChange={onChange} value={point2}></input>
        <input className="input2" type="submit" value="Agregar"></input>
        </form>
        </div>
    )

}
export default Generador;