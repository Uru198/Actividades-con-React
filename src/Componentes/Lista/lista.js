import React, {useState} from "react";


const Lista = (props) =>{

    
    const {point, setPoint} = props;

    const deletes = (e, num) =>{
        e.preventDefault();
        const result = point.filter((points, index) => index !== num );
        console.log(result);
        setPoint(result)

    }
    
    const chequear = (num) =>{
        const tarea = {...point[num]};
        tarea.completed = !tarea.completed;
        setPoint([...point.slice(0,num),tarea].concat(point.slice(num+1)))
    }

    


    return (
            <div className="mean">
                <ol>
                {
                point.map((points, num)=>{
                return <form className="form1 form2"><li key={num}>{num+1}. <span style={{ textDecoration: points.completed && 'line-through' }}
                >{points.shore}</span></li>
                <input type="checkbox" checked={points.completed} onClick={()=>chequear(num)}></input>
                <input className="input3" type="button" onClick={(e)=> deletes(e, num)} value="Delete"/>
                </form>}) 
                }
                </ol>
            </div>
    )

}
export default Lista;