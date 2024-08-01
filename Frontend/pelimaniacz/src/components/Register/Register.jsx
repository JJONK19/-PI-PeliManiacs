import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Button, Form } from 'react-bootstrap';

function Register() {
    const [usuarios, setUsuarios] = useState([]);
    const [nombre, setNombre] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook para la navegación

    useEffect(() => {
        fetch('http://127.0.0.1:5000/getUsuario')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Problema de red');
                }
                return response.json();
            })
            .then(data => setUsuarios(data))
            .catch(error => {
                Swal.fire({
                    title: 'Error',
                    text: error.message,
                    icon: 'error',
                });
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            nombre: nombre,
            usermane: username,
            password_user: password,
        };

        fetch('http://127.0.0.1:5000/createUsuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en el registro');
                }
                return response.json();
            })
            .then(() => {
                Swal.fire({
                    title: 'Éxito',
                    text: 'Registro exitoso',
                    icon: 'success',
                }).then(() => {
                    console.log(usuarios) // Redirige a la página principal
                });
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error',
                    text: error.message,
                    icon: 'error',
                });
            });
    };

    return (
        <div className="d-flex justify-content-center align-items-center container-fluid bg-main">
            <Form onSubmit={handleSubmit} className="loginContainer bg-light my-4">
                <h2 className="text-center mb-4">Registrarse</h2>
                <Form.Group controlId="formNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Introduce tu nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formUsername">
                    <Form.Label>Nombre de usuario</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Introduce tu nombre de usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Introduce tu contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3 w-100">
                    Registrarse
                </Button>
            </Form>
        </div>
    );
}

export default Register;
