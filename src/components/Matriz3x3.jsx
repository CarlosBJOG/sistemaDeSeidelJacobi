import { useState } from "react";
import Matrices3x3 from "../classes/Matrices3x3";
import Matriz from "../classes/Matriz";
import { buildResultados3x3, buildResultadosSeidel } from "../helpers/Ecuaciones";
import { useForm } from "../hooks/useForm";
import { TableResultados } from "./TableResultados";

export const Matriz3x3 = () => {

    const [table, setTable] = useState(false);
    const [datosTable, setDatosTable] = useState([]);

    const [valuesForm, handleInputChange, reset] = useForm({
        x1: '',
        y1: '',
        z1: '',
        k1: '',

        x2: '',
        y2: '',
        z2: '',
        k2: '',

        x3: '',
        y3: '',
        z3: '',
        k3: ''
    })

    const {x1, y1, z1, k1, x2, y2, z2, k2, x3, y3, z3, k3} = valuesForm;

    const handleJacobi = () => {

        if(Math.abs(Number(x1)) <= Math.abs(Number(y1)) || Math.abs(Number(x1)) <= Math.abs(Number(z1))
         || Math.abs(Number(y2)) <= Math.abs(Number(x2)) || Math.abs(Number(y2)) <= Math.abs(Number(z2))
         || Math.abs(Number(z3)) <= Math.abs(Number(x3)) || Math.abs(Number(z3)) <= Math.abs(Number(y3)) ){

            alert('El sistema de ecuaciones no cumple con los requisitos, esto podria consumir muchos recursos del dispositivo');
        }else{

            const equationOne = {x: Number(x1), y: Number(y1), z: Number(z1), k: Number(k1)};
            const equationTwo = {x: Number(x2), y: Number(y2), z: Number(z2), k: Number(k2)};
            const equationThree = {x: Number(x3), y: Number(y3), z: Number(z3), k: Number(k3)};

    
            let matriz = new Matriz();
            matriz = matriz.buildMatrix3x3(equationOne, equationTwo, equationThree);
    
            const matrices = new Matrices3x3(matriz);
    
            const resultados = buildResultados3x3(1, 1, 1, matrices);
            setDatosTable(resultados);
            setTable(true);
        }

    }


    const handleSeidel = () => {
        if(Number(x1) === 0 || Number(x1) === '' || Number(y2) === 0 || Number(y2) === '' 
        || Number(z3) === 0 || Number(z3) === '' ){

           alert('El sistema de ecuaciones no cumple con los requisitos, esto podria causar una indeterminacion');
       
        }else{

            const equationOne = {x: Number(x1), y: Number(y1), z: Number(z1), k: Number(k1)};
            const equationTwo = {x: Number(x2), y: Number(y2), z: Number(z2), k: Number(k2)};
            const equationThree = {x: Number(x3), y: Number(y3), z: Number(z3), k: Number(k3)};

            const resp = buildResultadosSeidel(equationOne, equationTwo, equationThree);

            setDatosTable(resp);
            setTable(true);

       }
        
    }

    const handleReset = () => {
        reset();
        setTable(false);

    }


    return (
        <>  
          
                <div className="row mt-4">

                    <div className="col">
                        <h5>Ingresa los coeficientes de las variables</h5>
                    </div>
                </div>

                <div className="row mt-3">Ecuación 1</div>

                <div className="row mt-3">


                <div className="col">
                    <input 
                        type="text" 
                        className="form-control form-size" 
                        placeholder="X"
                        name="x1"
                        value={x1}
                        onChange={handleInputChange}
                         
                    />
                </div>
                <div className="col">
                    <input 
                        type="text" 
                        className="form-control form-size" 
                        placeholder="Y"
                        name="y1"
                        value={y1}
                        onChange={handleInputChange}
                         
                    />
                </div>

                <div className="col">
                    <input 
                        type="text" 
                        className="form-control form-size" 
                        placeholder="Z"
                        name="z1"
                        value={z1}
                        onChange={handleInputChange}
                         
                    />
                </div>
                =
                <div className="col">
                    <input 
                        type="text" 
                        className="form-control form-size" 
                        placeholder="K"
                        name="k1"
                        value={k1}
                        onChange={handleInputChange}
                         
                    />
                </div>
                </div>

                <div className="row">Ecuación 2</div>

                <div className="row mt-3">


                <div className="col">
                    <input type="text" className="form-control form-size" placeholder="X" name="x2" value={x2} onChange={handleInputChange}/>
                </div>
                <div className="col">
                    <input type="text" className="form-control form-size" placeholder="Y" name="y2" value={y2} onChange={handleInputChange}/>
                </div>

                <div className="col">
                    <input type="text" className="form-control form-size" placeholder="Z" name="z2" value={z2} onChange={handleInputChange}/>
                </div>
                =
                <div className="col">
                    <input type="text" className="form-control form-size" placeholder="K" name="k2" value={k2} onChange={handleInputChange}/>
                </div>
                </div>

                <div className="row">Ecuación 3</div>

                <div className="row mt-3">


                    <div className="col">
                        <input type="text" className="form-control form-size" placeholder="X" name="x3" value={x3} onChange={handleInputChange}/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control form-size" placeholder="Y" name="y3" value={y3} onChange={handleInputChange}/>
                    </div>

                    <div className="col">
                        <input type="text" className="form-control form-size" placeholder="Z" name="z3" value={z3} onChange={handleInputChange}/>
                    </div>
                    =
                    <div className="col">
                        <input type="text" className="form-control form-size" placeholder="K" name="k3" value={k3} onChange={handleInputChange}/>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col">
                        <button
                            className="btn btn-secondary"  
                            type="button"
                            onClick={handleSeidel}  
                        >Seidel</button>

                        <button 
                            className="btn btn-success ml-3"
                            type="button"  
                            onClick={ handleJacobi }
                        >Jacobi</button>

                        <button 
                            className="btn btn-danger ml-3"
                            type="button"  
                            onClick={ handleReset }
                        >Limpiar</button>

                    </div>
                </div>

                {
                    (table) &&   <div className="row mt-3 mr-3">
                                        <TableResultados datos={datosTable}/>
                                </div>
                }

 

        </>
    )
}
