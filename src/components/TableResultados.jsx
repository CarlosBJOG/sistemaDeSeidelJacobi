
export const TableResultados = ({datos}) => {


    return (
        <>
            <table className="table table-striped ">
            <thead className="table-primary">
                <tr>
                <th scope="col">#</th>
                <th scope="col">X</th>
                <th scope="col">Y</th>
                {
                    (datos[0].zAux) && <th scope="col">Z</th>
                }
                
                </tr>
            </thead>
            <tbody>

                {
                    datos.map( (value, i) => (
                        <tr key={ i+2 }>
                            <th scope="row">{i}</th>
                            <td>{value.xAux}</td>
                            <td>{value.yAux}</td>
                            {
                                (value.zAux) && <td>{value.zAux}</td>
                            }
                            
                        </tr>
                    ))
                }

              
        
            </tbody>
            </table>
        </>
    )
}
