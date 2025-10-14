import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA21n9vM9N7eOh8OslR9wm5D108Ca2SFJs",
  authDomain: "apploginsenha-45332.firebaseapp.com",
  projectId: "apploginsenha-45332",
  storageBucket: "apploginsenha-45332.firebasestorage.app",
  messagingSenderId: "45482146459",
  appId: "1:45482146459:web:d645d0bd3ed79efe65643e"
};
{/*Iniciando o firebase */}
const app = initializeApp(firebaseConfig);
{/* Fazendo a autenticacao do banco com os dados de login e senha */}
const auth = getAuth(app);
{/* puxando os dados do perfil do banco */}
const db = getFirestore(app);
{/* Exportando os objetos */}
export {auth, db};