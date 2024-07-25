import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://imgs.search.brave.com/hdHuAbAmJc1dLCzRz28TpIOrsCT-xeGyCVxyQIfkyhE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bWFydmVsLmNvbS9j/b250ZW50LzF4L2Rw/M18xc2h0X2RpZ2l0/YWxfc3JnYl9rYV9z/d29yZHNfdjVfcmVz/aXplZC5qcGc" />
            <Card.Body>
                <Card.Title>Deadpool vs Wolverine</Card.Title>
                <Card.Text>
                    Tercera entrega de la saga Deadpool, ahora integrada en el Universo 
                    Cinematográfico de Marvel (MCU) pero manteniendo su enfoque para adultos, 
                    con calificación R. En septiembre de 2022 se confirmó la aparición de Hugh Jackman 
                    como Wolverine, por primera vez desde Logan.
                </Card.Text>
                <Button variant="primary">Ver reseñas</Button>
            </Card.Body>
        </Card>
    );
}

export default Item;