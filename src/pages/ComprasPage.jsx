import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card'

export const ComprasPage = () => {
  
  const [productos, setProductos] = useState([])
  
    const fetchProductos = async() =>{
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProductos(data)
    }

    useEffect(() => {
        fetchProductos()
    }, [])
    

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
