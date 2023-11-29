const axios = require('axios');

const datosEncuesta = {
    // ... datos de la encuesta
};

axios.post('http://127.0.0.1:5000/api/send_form_data', datosEncuesta)
    .then(response => {
        console.log('Respuesta del servidor:', response.data);
        // Aquí puedes manejar la respuesta del servidor
    })
    .catch(error => {
        console.error('Error al enviar la encuesta:', error);
    });
