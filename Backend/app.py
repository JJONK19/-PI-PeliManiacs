from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text
import os

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'postgresql://postgres:postgres@db/peliculas')
db = SQLAlchemy(app)

@app.route('/')
def hello():
    try:
        result = db.session.execute(text('SELECT 1')).fetchone()
        if result[0] == 1:
            return "Conexión a la base de datos exitosa!"
    except Exception as e:
        return f"Error de conexión a la base de datos: {str(e)}"
    return "Algo salió mal"

@app.route('/getUsuario', methods=['GET'])
def get_usuarios():
    try:
        conn = db.engine.raw_connection()
        cur = conn.cursor()
        cur.execute('SELECT id, username, nombre, password_user FROM Usuario ORDER BY id')
        usuarios = cur.fetchall()
        cur.close()
        conn.close()
        usuarios_list = [{'idUser': usuario[0], 'username': usuario[1], 'nombre': usuario[2], 'password': usuario[3]} for usuario in usuarios]
        return jsonify(usuarios_list)
    except Exception as e:
        return f"Error al obtener los usuarios: {str(e)}", 500

@app.route('/createUsuario', methods=['POST'])
def create_usuario():
    data = request.json
    username = data['username']
    nombre = data['nombre']
    password_user = data['password_user']
    try:
        conn = db.engine.raw_connection()
        cur = conn.cursor()
        cur.execute('INSERT INTO Usuario (username, nombre, password_user) VALUES (%s, %s, %s) RETURNING id', 
                    (username, nombre, password_user))
        usuario_id = cur.fetchone()[0]
        conn.commit()
        cur.close()
        conn.close()
        return jsonify({'id': usuario_id, 'username': username, 'nombre': nombre}), 201
    except Exception as e:
        return f"Error al crear el usuario: {str(e)}", 500

@app.route('/getPeliculas', methods=['GET'])
def get_peliculas():
    try:
        conn = db.engine.raw_connection()
        cur = conn.cursor()
        cur.execute('''
            SELECT 
                p.id, 
                p.nombre, 
                p.descripcion, 
                g.nombre AS genero, 
                p.foto,
                dp.ID_Usuario
            FROM Pelicula p
            LEFT JOIN Genero g ON p.ID_Genero = g.id
            LEFT JOIN Detalle_Pelicula dp ON p.id = dp.ID_Pelicula
            ORDER BY p.id
        ''')
        rows = cur.fetchall()
        cur.close()
        conn.close()

        peliculas_list = []
        for row in rows:
            pelicula = {
                'id': row[0],
                'nombre': row[1],
                'descripcion': row[2],
                'genero': row[3],
                'imagen': row[4],
                'idUser': row[5]
            }
            peliculas_list.append(pelicula)

        return jsonify(peliculas_list)
    except Exception as e:
        return f"Error al obtener las películas: {str(e)}", 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
