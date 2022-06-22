import { despejarX, despejarY, despejarZ } from "./seidel";

export const buildResultados = (x = 1, y = 1, matrices) => {
    //creacion de bucle
    let  xAux, yAux;
    const valores2x2 = [];

    let contador = 1;

    while (true) {
        xAux = x;
        yAux = y;

        [x, y] = matrices.buildResultado(xAux, yAux);
        
        valores2x2.push({xAux, yAux});
        
        if(contador === 1){
            if(x === 1){
                continue;
            }
        }
        
 
        if (x === xAux && y === yAux) {
            return valores2x2;
        }
 
        

        if (contador > 1000) {
           return valores2x2
            
        }

        contador++;
    }

}


export const buildResultados3x3 = (x = 1, y = 1, z = 1, matrices) => {

    let xAux, yAux, zAux;
    const valores3x3 = [];
    let contador = 1;
    
    while (true) {
        xAux = x;
        yAux = y;
        zAux = z;
    
        [x, y, z] = matrices.buildResultado(xAux, yAux, zAux);
        
        valores3x3.push({xAux, yAux, zAux});
        
        if (x === xAux && y === yAux && z === zAux) {
            return valores3x3;
        }

        if (contador > 1000) {
            return valores3x3
             
         }
        contador++;

    }
    
}

export const buildResultadosSeidel = (equationOne, equationTwo, equationThree) => {
    let x = 0, y = 0, z = 0, xAux, yAux, zAux;

    let i = 0;
    
    let valores3x3 = []
    while (true) {
        xAux = x;
        yAux = y;
        zAux = z;
    
        xAux = Number( despejarX(y, z, equationOne).toFixed(5) );
        yAux = Number( despejarY(x, z, equationTwo).toFixed(5) );
        zAux = Number( despejarZ(x, y, equationThree).toFixed(5) );
        
        if(x === xAux){
            return valores3x3;
        }

        if(i > 1000){
            return valores3x3;
        }
        valores3x3.push({xAux, yAux, zAux});

        x = xAux;
        y = yAux;
        z = zAux;
        i++;
    
    }
}



