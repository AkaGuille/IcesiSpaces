from flask import Flask, request, jsonify
from flask_cors import CORS
import firebase_admin
from firebase_admin import credentials, db
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)
CORS(app)

# Datos de ejemplo (usuarios y elementos)
usuarios = {
    'Usuario1': {
      "crowdedness": 2,
      "noise": 4,
      "lighting": 8,
      "cold_temperature": 2,
      "hot_temperature": 1,
      "comfort": 3,
      "services": 1,
      "electrical_outlets": 9
    },
    'Usuario2': {
        "crowdedness": 8,
        "noise": 9,
        "lighting": 7,
        "cold_temperature": 5,
        "hot_temperature": 1,
        "comfort": 5,
        "services": 5,
        "electrical_outlets": 1
      },
    'Monk': {
        "crowdedness": 3,
        "noise": 1,
        "lighting": 1,
        "cold_temperature": 1,
        "hot_temperature": 1,
        "comfort": 7,
        "services": 5,
        "electrical_outlets": 1
      }
    # Agrega más usuarios si es necesario
}

elementos = {
    'space 1': {
      "crowdedness": 3,
      "noise": 2,
      "lighting": 5,
      "cold_temperature": 4,
      "hot_temperature": 6,
      "comfort": 4,
      "services": 2,
      "electrical_outlets": 5
    },
    'space 2': {
      "crowdedness": 8,
      "noise": 3,
      "lighting": 8,
      "cold_temperature": 8,
      "hot_temperature": 2,
      "comfort": 8,
      "services": 8,
      "electrical_outlets": 10
    },
    'space 3': {
      "crowdedness": 8,
      "noise": 7,
      "lighting": 7,
      "cold_temperature": 3,
      "hot_temperature": 7,
      "comfort": 7,
      "services": 10,
      "electrical_outlets": 7
    },
    # Agrega más elementos si es necesario
}

# Función para obtener recomendaciones para un usuario específico
def obtener_recomendaciones(usuario, usuarios, elementos):
    recomendaciones = {}
    for pelicula in elementos:
        # Verificar si el usuario no ha visto la película
        if pelicula not in usuario:
            similitud = cosine_similarity([list(usuario.values())], [list(elementos[pelicula].values())])[0][0]
            recomendaciones[pelicula] = similitud
    return sorted(recomendaciones.items(), key=lambda x: x[1], reverse=True)

# Usuario para el que deseamos hacer recomendaciones
usuario_a_recomendar = 'Usuario1'

# Obtener recomendaciones para el usuario
recomendaciones = obtener_recomendaciones(usuarios[usuario_a_recomendar], usuarios, elementos)

# Mostrar las recomendaciones
print(f'Recomendaciones para {usuario_a_recomendar}: {recomendaciones}')


# Ruta para obtener recomendaciones
@app.route('/api/recommendations', methods=['POST'])
def recommend_movies():
    data = request.get_json()
    
    if 'user' not in data:
        return jsonify({'error': 'User data is required'}), 400
    
    user_data = data['user']
    
    if user_data not in usuarios:
        return jsonify({'error': 'User not found'}), 404

    recommendations = obtener_recomendaciones(usuarios[user_data], usuarios, elementos)
    return jsonify({'user': user_data, 'recommendations': recommendations})

if __name__ == '__main__':
    app.run(debug=True)
