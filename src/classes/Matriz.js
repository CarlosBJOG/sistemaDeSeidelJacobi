
class Matriz {

    buildMatrix2x2(equationOne, equationTwo){
        const matriz = [{x: equationOne.x, y: equationOne.y, k: equationOne.k}, {x: equationTwo.x, y: equationTwo.y, k: equationTwo.k}]
        return matriz;
    }

    buildMatrix3x3(equationOne, equationTwo, equationThree){        
        const matriz = [
                        {x: equationOne.x, y: equationOne.y, z: equationOne.z, k: equationOne.k}, 
                        {x: equationTwo.x, y: equationTwo.y, z: equationTwo.z, k: equationTwo.k},
                        {x: equationThree.x, y: equationThree.y, z: equationThree.z, k: equationThree.k} ];
        return matriz;
    }

}

export default Matriz;
