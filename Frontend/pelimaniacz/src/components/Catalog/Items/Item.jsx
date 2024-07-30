import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

function Item() {

    const [peliculas, setPeliculas] = useState([]);


    useEffect(() => {
        // Llamada a la API para obtener los nombres de los archivos
        fetch(`http://127.0.0.1:5000/getPeliculas`)
            .then(response => {
                if (!response.ok) {
                    Swal.fire({
                        title: 'Error',
                        text: 'Problema de red',
                        icon: 'error'
                    })
                }
                return response.json();
            })
            .then(data => (setPeliculas(data))
            )
            .catch(error => {
                Swal.fire({
                    title: 'Error',
                    text: error,
                    icon: 'error'
                })
            });
    }, []);
    const { id } = useParams();
    const pelicula = peliculas.find(pelicula => pelicula.id === parseInt(id));

    if (!pelicula) {
        return <div>Película no encontrada</div>;
    }

    return (
        <section className='item'>
            <div className='container bg-white my-4 py-2'>
                <div className='top'>
                    <img src={pelicula.imagen} alt={pelicula.nombre} className='pe-4' />
                    <div className='title'>
                        <h1>{pelicula.nombre}</h1>
                        <hr />
                        <h6>Genero: {pelicula.genero}</h6>
                        <hr />
                        <h4>Descripcion:</h4>
                        <h5>{pelicula.descripcion}</h5>
                    </div>
                </div>
            </div>
            <div className='promo my-4'>
                <img src="https://imgs.search.brave.com/8YIfnQjfO0xxg2rJ2Ud6RW16mQJbuuh9Ia_Eskx39gw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by92/aWV3LTNkLWNpbmVt/YS1maWxtLXJlZWxf/MjMtMjE1MTA2OTQ3/MC5qcGc_c2l6ZT02/MjYmZXh0PWpwZw" alt="add" />
                <div className='text-white px-4'>
                    <h2>Descuento Maniaco</h2>
                    <p>Ingresa el codigo <strong>ManiacZ</strong> en tu plataforma de peliculas para recibir un 30% de descuento.</p>
                </div>
            </div>
        </section>
    );
}

export default Item;