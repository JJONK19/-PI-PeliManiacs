/* -------------------------------------------------------------------------- */
/*                      Catalogo con funcion de busqueda                      */
/* -------------------------------------------------------------------------- */

//import Item from "./Items/Item";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';

function Catalog() {

    const [peliculas, setPeliculas] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPeliculas, setFilteredPeliculas] = useState([]);
    const user = JSON.parse(sessionStorage.getItem('user'));
    console.log("user" + user)

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
            .then(data => (setPeliculas(data),
                setFilteredPeliculas(data))
            )
            .catch(error => {
                Swal.fire({
                    title: 'Error',
                    text: error,
                    icon: 'error'
                })
            });
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchClick = () => {
        const filtered = peliculas.filter(pelicula =>
            pelicula.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPeliculas(filtered);
    };

    return (
        <>
            <Form className="busqueda py-4">
                <Form.Control
                    type="search"
                    placeholder="Ingresa el nombre de la pelicula"
                    className="me-2 search"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <Button variant="success" className="searchBtn" onClick={handleSearchClick}>Buscar</Button>
            </Form>
            <div className="catalog">
                {filteredPeliculas.map(pelicula => (
                    <Link key={pelicula.id} to={`/details/${pelicula.id}`} className='no-underline'>
                        <Card className="pelicula-card bg-dark text-white">
                            <Card.Img variant="top" src={pelicula.imagen} />
                            <Card.Body className='cardBody'>
                                <Card.Title className='fs-4'>{pelicula.nombre}</Card.Title>
                                <Card.Text className='fs-6'>{pelicula.genero}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>



                ))}
            </div>
        </>
    )
}

export default Catalog;