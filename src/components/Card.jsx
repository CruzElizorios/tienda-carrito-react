import { useState } from 'react'
import '../styles/card.css'
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const Card = ({ imagen, titulo, descripcion, precio }) => {
    
    const [agregar, setAgregar] = useState(false)
    
    const clickAgregar = () => {
        setAgregar(true)
    }
    const clickquitar = () => {
        setAgregar(false)
    }

    return (
        <>
            <div className="card tarjeta" style={{width: '15rem'}}>
                <img src={imagen} className="card-img-top" alt={titulo}/>
                    <div className="card-body">
                        <h5 className="card-title">{titulo}</h5>
                        <p className="card-text">{descripcion}</p>
                        <div className="card-body d-flex justify-content-evenly align-items-center">
                            <span className="card-text" >${precio} </span>

                            {
                                agregar
                                ? <button type='button' className="btn btn-danger" onClick={clickquitar}> <DeleteIcon/> </button> 
                                : <button type='button' className="btn btn-success" onClick={clickAgregar}> <AddShoppingCartIcon/> </button>
                            }

                        </div>
                    </div>
            </div>
        </>
    )
}
