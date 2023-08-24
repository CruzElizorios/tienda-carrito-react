import Badge from '@mui/material/Badge';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';

const NavBar = () => {

    const { listaCompras } = useContext(CarritoContext)

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">SuperTienda</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">compras</NavLink>
                        </li>
                    </ul>
                </div>
                <NavLink to="/carrito">
                    <Badge badgeContent={listaCompras.length} color="success">
                        <ShoppingCart color="action" />
                    </Badge>
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar