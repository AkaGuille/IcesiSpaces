// Importar la biblioteca de JavaScript de Firebase
import firebase from "firebase";
import { getDatabase } from "firebase/database";
const database = getDatabase();

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getDatabase, ref, onValue } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyB9Wgnf0K10N7DyU-VZ6dLLAjEAZgRivDA",
  authDomain: "icesi-spaces.firebaseapp.com",
  databaseURL: "https://icesi-spaces-default-rtdb.firebaseio.com",
  projectId: "icesi-spaces",
  storageBucket: "icesi-spaces.appspot.com",
  messagingSenderId: "817011980131",
  appId: "1:817011980131:web:537770dfdcae36eebc8556",
  measurementId: "G-VKFFZFY800"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Obtener la referencia a la base de datos
const db = firebase.database();

const melanie = ref(db, 'database_people');
onValue(melanie, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});

// Subir los datos de los espacios de estudio


for (const space of spaces) {
  // Subir la información del espacio de estudio
  db.ref("/spaces/" + space.name).set(space);
}