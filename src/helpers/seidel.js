const despejarX = ( y = 0, z = 0, equationOne) => {
    // const xInicial = `${equationOne.k} - ${equationOne.y * x} - ${equationOne.z}*z / ${equationOne.x}`;
    const xInicial = (equationOne.k - (equationOne.y * y) - (equationOne.z * z))/ equationOne.x;

    return xInicial;

}

const despejarY = (x = 0, z = 0, equationTwo) => {

    const yInicial = (equationTwo.k - (equationTwo.z * z) - (equationTwo.x * x))/ equationTwo.y;

    return yInicial;
}

const despejarZ = (x = 0, y = 0, equationThree) => {

    const zInicial = (equationThree.k - (equationThree.x * x) - (equationThree.y * y))/ equationThree.z;

    return zInicial;
}


export {despejarX, despejarY, despejarZ};