from flask import Flask, request, jsonify  # Import Flask module
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Ruta para recibir datos desde el frontend
@app.route('/api/send_form_data', methods=['POST'])
def recibir_encuesta():
    datos_encuesta = request.get_json()
    print('Datos de la encuesta recibidos:', datos_encuesta)
    # Crossover logic

    # packaging the response
    resultado = {'recomendacion': 'algo'}

    # Send response back to front
    return jsonify(resultado), 200

if __name__ == '__main__':
    app.run(debug=True)