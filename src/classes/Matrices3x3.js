
import nerdamer from "nerdamer/all.min";

class Matrices3x3 {

    #Dnegativeb = [];
    #lPlusU;
    #DmultiLmasU;

    constructor( matriz = Object ){
        this.matriz = matriz;
        this.buildMatrices();
    }
    
    buildMatrizDNegative(){
        nerdamer.setVar('D', `matrix([${ (1/this.matriz[0].x) }, ${0}, ${0} ], [${0}, ${ (1/this.matriz[1].y) }, ${0}], [${0}, ${0}, ${ (1/this.matriz[2].z) }]  ) `);
    }

    buildMatrizb(){
        nerdamer.setVar('b', `matrix([ ${this.matriz[0].k} ], [ ${this.matriz[1].k} ], [ ${this.matriz[2].k} ])`);
    }

    buildMatrizDnegativePorB(){
        this.#Dnegativeb = nerdamer('D*b').symbol;
        nerdamer.setVar('Z', `${this.#Dnegativeb}`);
    }

    buildMatrizL(){
        nerdamer.setVar( 'L', `matrix([0, 0, 0], [ ${-1*(this.matriz[1].x)}, 0, 0], [ ${-1*(this.matriz[2].x)}, ${-1*(this.matriz[2].y)}, 0])` ); 
    }

    buildMatrizU(){
        nerdamer.setVar( 'U', `matrix([0, ${-1*(this.matriz[0].y)}, ${-1*(this.matriz[0].z)}], [ 0, 0, ${-1*(this.matriz[1].z)} ], [0, 0, 0])` );
    }

    buildLplusU(){
        this.#lPlusU = nerdamer('L+U');
        nerdamer.setVar('B', `${this.#lPlusU}`);
    }

    buildDnegativePorLmasU(){
        this.#DmultiLmasU = nerdamer('D*B');
        nerdamer.setVar('C', `${this.#DmultiLmasU}`);
    }

    buildResultado(x= 0, y= 0, z = 0){

        nerdamer.setVar( 'X', `matrix( [${x}], [${y}], [${z}] )`); 

        const matrizResultado = nerdamer('C*X+Z').symbol.elements.toString();
        const matrizTemp = matrizResultado.split(',');
        const matrizAux = [ Number( eval(matrizTemp[0]).toFixed(6) ), Number( eval(matrizTemp[1]).toFixed(6) ), Number( eval(matrizTemp[2]).toFixed(6) ) ];
        
        return matrizAux;
    }

    buildMatrices(){
        
        this.buildMatrizDNegative();
        this.buildMatrizb(); 
        this.buildMatrizDnegativePorB();
        this.buildMatrizL();
        this.buildMatrizU();
        this.buildLplusU();
        this.buildDnegativePorLmasU();
    }


}

export default Matrices3x3;


