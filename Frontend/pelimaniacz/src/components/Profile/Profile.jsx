import { useEffect, useState } from "react";

function Profile() {
    // Obtener el usuario desde sessionStorage
    const [user, setUser] = useState({});

    useEffect(() => {
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <div className="container-fluid bg-main d-flex justify-content-center align-content-center">
            {user ? (
                <div className="loginContainer bg-light my-4">
                    <h2>Perfil del Usuario</h2>
                    <p><strong>ID:</strong> {user.idUser}</p>
                    <p><strong>Nombre:</strong> {user.nombre}</p>
                    <p><strong>Nombre de Usuario:</strong> {user.username}</p>
                </div>
            ) : (
                <p className="vh-100">No hay usuario en sesión.</p>
            )}
        </div>
    );
}

export default Profile;
