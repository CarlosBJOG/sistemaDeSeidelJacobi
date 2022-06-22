import { useState } from "react";
import { Matriz2x2 } from "./components/Matriz2x2"
import { Matriz3x3 } from "./components/Matriz3x3"

export const EcuacionesApp = () => {

    const [stateMAtrix2x2, setStateMAtrix2x2] = useState(false);
    const [stateMAtrix3x3, setStateMAtrix3x3] = useState(false);

    const handleMatrix2x2 = (e) => {
        e.preventDefault();
        setStateMAtrix2x2(true);
        setStateMAtrix3x3(false);
    }

    const handleMatrix3x3 = (e) => {
        e.preventDefault();
        setStateMAtrix3x3(true);
        setStateMAtrix2x2(false);
    }

    return (
        <>
            <div className="container m-3">
                <div className="row justify-content-md-center">
                    
                    <div className="col-sm-12 col-lg-6">
                        <h1 className="mb-3 text-center">Jacobi y Seidel</h1>
                        <h5 className="m-3">Programa para la solución de sistemas de ecuaciones de 2x2 y 3x3.</h5>
                    </div>

                </div>

                <div className="row">
                    <div className="col-sm-12 col-lg-6">
                        <label> Selecciona el tamaño de la matriz</label>
                    
                    </div>

                    <div className="col-sm-12 col-lg-6 mt-2">
                        <button 
                            className="btn btn-primary"
                            onClick={ handleMatrix2x2 }
                        >Matriz 2x2</button>
                        <button 
                            className="btn btn-warning ml-3"
                            onClick={ handleMatrix3x3 }
                        >Matriz 3x3</button>

                    </div>
                </div>

            
                {

                    (stateMAtrix3x3) && <Matriz3x3 />

                }

                { 
                    (stateMAtrix2x2) && <Matriz2x2 />
                }

            </div>
            

            <footer className="bg-secondary p-5 text-white">
               <h6> Designed By Carlos, Salma, Edwin, Juan, Daniel @2022</h6>
            </footer>

        </>
    )
}
