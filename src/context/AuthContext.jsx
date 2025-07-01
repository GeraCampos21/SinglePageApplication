import { createContext, useState, useEffect, useContext } from "react";
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import Swal from "sweetalert2";


export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [homeInicio, setHomeInicio] = useState(false);
  const [loading, setLoading] = useState(true); //  para evitar redirección antes de saber si está logueado

  useEffect(() => {
    const logueado = localStorage.getItem("logueado");
    if (logueado === "true") {
      setIsAuthenticated(true);
      setHomeInicio(true);
    }
    setLoading(false); //  ya cargó
  }, []);
  //Esto es del formulario para crear cuenta
  async function saveForm(data) {

    try {
      // Guarda los datos en la colección "usuarios"
      await addDoc(collection(db, 'usuarios'), data);


    } catch (error) {
      console.error('Error al guardar datos:', error);
    }

  }


  //esto es del loginPage, para loguearse
  async function loginPass({ email, password }) {
    try {
      const querySnapshot = await getDocs(collection(db, 'usuarios'));
      // Buscar usuario con correo y password iguales
      const usuarioEncontrado = querySnapshot.docs.find((doc) => {
        const datos = doc.data();
        return datos.email === email && datos.password === password;
      });

      if (usuarioEncontrado) {
        setIsAuthenticated(true);
        setHomeInicio(true);
        localStorage.setItem("logueado", "true"); // GUARDAR SESIÓN
        Swal.fire({
          title: "welcome to Kodigo Music",
          imageUrl: 'https://www.shutterstock.com/image-photo/latvian-police-man-directing-traffic-260nw-711870832.jpg',
          imageWidth: 150,
          imageHeight: 150,
          draggable: true,
          background: '#1F1F1F',
          color: "#fff",
          confirmButtonColor: "#3f5f95",
        });
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error al buscar usuario:', error);
    }
  }

  function logout() {
    setIsAuthenticated(false);
    setHomeInicio(false);
    localStorage.removeItem("logueado"); // quitar del storage
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, saveForm, loginPass, homeInicio, loading, logout }}>
      {children}
    </AuthContext.Provider>

  );

}

export const UserAuth = () => {
  return useContext(AuthContext)
}