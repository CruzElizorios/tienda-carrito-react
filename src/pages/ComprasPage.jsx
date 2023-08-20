
import { useContext } from 'react'
import { Card } from '../components/Card'
import { ProductosContext } from '../context/ProductosContext'

export const ComprasPage = () => {

    const { productos } = useContext ( ProductosContext)


    return (
        <div>
            <h1>The best products on the planet</h1>
            <section className='sectionCompras'>
                {productos.map(producto => (
                    <Card
                        key={producto.id}
                        imagen={producto.image}
                        titulo={producto.title}
                        descripcion={producto.description}
                        precio={producto.price}>
                    </Card>
                ))}
            </section>
        </div>
    )
}
