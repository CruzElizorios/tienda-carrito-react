import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
export const CarritoPage = () => {

    const { listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

    const sumarTotal = () =>{
        return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2)
    }
    const impresion = () =>{
        if(listaCompras.length > 1){
            return print()
        }
    }


    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaCompras.map(item => (
                            <tr key={item.id}>
                                <th>{item.title}</th>
                                <td>{item.price}</td>
                                <td>
                                    <button
                                        className="btn btn-outline-primary"
                                        onClick={ () => disminuirCantidad(item.id)}>
                                        <RemoveCircleIcon />
                                    </button>
                                    <button
                                        className="btn btn-warning">
                                        {item.cantidad}
                                    </button>
                                    <button 
                                        className="btn btn-outline-primary" 
                                        onClick={() => aumentarCantidad(item.id) }>
                                            <AddCircleIcon />
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => eliminarCompra(item.id)}
                                    >eliminar
                                    </button>
                                </td>
                            </tr>
                        ))
                    }

                    <th>Total: </th>
                    <td></td>
                    <td>${sumarTotal()}</td>
                    <td></td>
                </tbody>
            </table>
            <div>
                <button 
                    className='btn btn-success' 
                    onClick={impresion}
                    disabled={listaCompras <1}
                    >COMPRAR
                </button>
            </div>
        </>
    )
}
