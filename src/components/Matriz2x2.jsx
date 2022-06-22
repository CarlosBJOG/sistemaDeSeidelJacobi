import { useState } from 'react';
import Matrices2x2 from '../classes/Matrices2x2';
import Matriz from '../classes/Matriz';
import { buildResultados } from '../helpers/Ecuaciones';
import { useForm } from '../hooks/useForm';
import { TableResultados } from './TableResultados';


export const Matriz2x2 = () => {

    const [table, setTable] = useState(false);
    const [buttonSeidel] = useState(false);

    const [datosTable, setDatosTable] = useState([]);

    const [valuesForm, handleInputChange, reset] = useForm({
        x1: '',
        y1: '',
        k1: '',
        x2: '',
        y2: '',
        k2: ''
    })

    const {x1, y1, k1, x2, y2, k2} = valuesForm;

    const handleJacobi = () => {
        
        if(Number(x1) <= Number(y1)  || Number(y2) <= Number(x2) ){
            alert('El sistema de ecuaciones no cumple con los requisitos, esto podria consumir muchos recursos del dispositivo');
        }else{

            const equationOne = {x: Number(x1), y: Number(y1), k: Number(k1)};
            const equationTwo = {x: Number(x2), y: Number(y2), k: Number(k2)};
    
            let matriz = new Matriz();
            matriz = matriz.buildMatrix2x2(equationOne, equationTwo);
    
            const matrices = new Matrices2x2(matriz);
    
            const resultados = buildResultados(1, 1, matrices);

            setDatosTable(resultados);
            setTable(true);
        }

    }


    const handleReset = () => {
        reset();
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
                                name='x1'
                                autoComplete='off'
                                value={x1}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="col">
                            <input 
                                type="text" 
                                className="form-control form-size" 
                                placeholder="Y" 
                                autoComplete='off'

                                name='y1'
                                value={y1}
                                onChange={handleInputChange}
                            />
                        </div>

                        =
                        <div className="col">
                            <input 
                                type="text" 
                                className="form-control form-size" 
                                placeholder="K" 
                                autoComplete='off'

                                name='k1'
                                onChange={ handleInputChange }
                                value={k1}
                            />
                        </div>
                    </div>

                <div className="row">Ecuación 2</div>

                    <div className="row mt-3">

                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control form-size" 
                            placeholder="X" 
                            name='x2'
                            value={x2}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control form-size" 
                            placeholder="Y" 
                            name='y2'
                            value={y2}
                            onChange={handleInputChange}
                        />
                    </div>

                    =
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control form-size" 
                            placeholder="K" 
                            name='k2'
                            onChange={ handleInputChange }
                            value={k2}
                        />
                    </div>
                </div>


                <div className="row mt-5">
                    <div className="col">
                        {
                            (buttonSeidel)&&   
                                <button
                                    className="btn btn-secondary"  
                                    type="button"  
                                    onClick={ handleSeidel }
                            
                                >Seidel</button>
                        }
                      
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
