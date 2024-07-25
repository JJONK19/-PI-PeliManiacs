/* -------------------------------------------------------------------------- */
/*                      Catalogo con funcion de busqueda                      */
/* -------------------------------------------------------------------------- */

//import Item from "./Items/Item";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import peliculasData from "../../test/pelis.json"
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';

function Catalog() {

    const [peliculas, setPeliculas] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPeliculas, setFilteredPeliculas] = useState([]);


    useEffect(() => {
        // Parsear y establecer los datos del JSON
        setPeliculas(peliculasData);
        setFilteredPeliculas(peliculasData);
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
                    <Card key={pelicula.id} className="pelicula-card bg-dark text-white">
                        <Card.Img variant="top" src={pelicula.imagen} />
                        <Card.Body className='cardBody'>
                            <Card.Title>{pelicula.nombre}</Card.Title>
                            <Card.Text>{pelicula.descripcion}</Card.Text>
                            <Button variant="black text-white">Ver reseñas</Button>
                        </Card.Body>
                    </Card>




                ))}
            </div>
        </>
    )
}

export default Catalog;