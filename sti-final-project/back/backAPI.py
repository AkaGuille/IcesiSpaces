from flask import Flask, request, jsonify
from flask_cors import CORS
import firebase_admin
from firebase_admin import credentials, db
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)
CORS(app)

# Initialize Firebase with project credentials
cred = credentials.Certificate('icesi-spaces-firebase-adminsdk-z0bds-cc2b709bb4.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://icesi-spaces-default-rtdb.firebaseio.com/'
})

# Get Firebase database reference 
db_ref = db.reference()


# Get data from root: "database_people"
db_people_ref = db.reference('database_people')

# Get data from root:  "database_spaces"
db_spaces_ref = db.reference('database_spaces')

# Variables with people and spaces data
data_people = db_people_ref.get()
data_spaces = db_spaces_ref.get()

# Set users and spaces for recomendation
if data_people:
    usuarios = {str(i): user_data for i, user_data in enumerate(data_people)} if data_people else {}
else:
    usuarios = {}

if data_spaces:
    if data_spaces:
      elementos = {
        str(i): {k: v for k, v in space.items() if k not in ['name', 'image', 'description']}
        for i, space in enumerate(data_spaces)
    }
else:
    elementos = {}

# Función para obtener recomendaciones para un usuario específico
def obtener_recomendaciones(usuario, usuarios, espacios):
    recomendaciones = {}
    for espacio in espacios:
        # Verificar si el usuario no ha visitado el espacio
        if espacio not in usuario:
            similitud = cosine_similarity([list(usuario.values())], [list(espacios[espacio].values())])[0][0]
            recomendaciones[espacio] = similitud
    return sorted(recomendaciones.items(), key=lambda x: x[1], reverse=True)

# Usuario para el que deseamos hacer recomendaciones
usuario_a_recomendar = '0'  # Puedes cambiar esto al usuario que desees

# Obtener recomendaciones para el usuario
recomendaciones = obtener_recomendaciones(usuarios[usuario_a_recomendar], usuarios, elementos)

# Mostrar las recomendaciones
print(f'Recomendaciones para el Usuario {usuario_a_recomendar}: {recomendaciones}')


# Route for getting recomendations
@app.route('/api/recommendations', methods=['POST'])
def recommend_spaces():
    
    data = request.get_json()

    if not data or 'user_preferences' not in data:
        return jsonify({'error': 'User preferences are required in the request'}), 400
    
    user_preferences = data['user_preferences']

    # Obtener el tamaño actual de usuarios
    tamano_usuarios_anterior = len(usuarios)

    # Obtener el último número usado y aumentarlo en 1
    ultimo_numero_usado = tamano_usuarios_anterior if tamano_usuarios_anterior > 0 else 0
    nuevo_numero_usuario = ultimo_numero_usado + 1

    # Crear un nuevo usuario en la base de datos con el nuevo número como clave
    new_user_ref = db_people_ref.child(str(nuevo_numero_usuario))
    new_user_ref.set(user_preferences)

    # Obtener recomendaciones para el usuario recién creado
    recommendations = obtener_recomendaciones(usuarios[str(0)], usuarios, elementos)
    
    return jsonify({'user_id': str(nuevo_numero_usuario), 'recommendations': recommendations}), 200
    


if __name__ == '__main__':
    app.run(debug=True)
