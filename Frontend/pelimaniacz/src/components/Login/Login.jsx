import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Button, Form } from 'react-bootstrap';

function Login() {
    const [usuarios, setUsuarios] = useState([]);
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

        const user = usuarios.find(u => u.username === username && u.password === password);

        if (user) {
            sessionStorage.setItem('user', JSON.stringify(user));
            Swal.fire({
                title: 'Éxito',
                text: 'Inicio de sesión exitoso',
                icon: 'success',
            }).then(() => {
                navigate('/'); // Redirige a la página principal
            });
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Nombre de usuario o contraseña incorrectos',
                icon: 'error',
            });
            console.log(usuarios)
        }
    };

    return (

        <div className="container-fluid bg-main d-flex justify-content-center align-content-center">
            <Form onSubmit={handleSubmit} className="loginContainer bg-light my-4">
                <h2 className="text-center mb-4">Iniciar sesión</h2>
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
                    Iniciar sesión
                </Button>
            </Form>
        </div>
    );
}

export default Login;
