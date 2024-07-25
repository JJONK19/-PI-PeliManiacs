from flask import Flask
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

if __name__ == '__main__':
    app.run(host='0.0.0.0')