import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        // Vaciar el sessionStorage
        sessionStorage.removeItem('user');

        // Redirigir a la página principal
        navigate('/');
    }, []);

    return null;
}

export default Logout;
