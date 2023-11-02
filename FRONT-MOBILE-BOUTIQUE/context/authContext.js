import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// URL
import { URL } from "../constants/api";

// Créez un contexte d'authentification.
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // État pour suivre si l'authentification est en cours.
  const [isLoading, setLoading] = useState(false);
  // État pour stocker les informations de l'utilisateur connecté.
  const [user, setUser] = useState(null);

  // Fonction pour gérer l'authentification de l'utilisateur.
  const login = async (dataForm) => {
    setLoading(true); // Définissez isLoading à true pendant l'authentification.
    try {
      // Effectuez une requête POST vers l'URL d'authentification avec les données de l'user
      const { data, status } = await axios.post(URL.AUTH_SIGN, dataForm);

      if (status === 200) {
        setUser(data)
        // Stockez les données de l'utilisateur dans AsyncStorage (localStorage) pour une utilisation utltérieure/
        await AsyncStorage.setItem("user", JSON.stringify(data));

        // isLoading à false apres une authentification réuissie.
        setLoading(false);
      }
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  };

  const logout = () => {
    setLoading(true);
    setUser(null);
    AsyncStorage.removeItem("user");
    setLoading(false);
  };

  // Fonction pour vérifier si un utilisateur est déjà connecté.
  const isLoggedIn = async () => {
    try {
      // Mettez isLoading à true
      setLoading(true);

      // Récupérez les données de l'utilisateur depuis le localStorage.
      let user = await AsyncStorage.getItem("user");

      // Mettez à jour l'état de l'utilisateur avec les données récupérées.
      setUser(JSON.parse(user));

      // Mettez isLoading à false après la vérification.
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  // Utilisez useEffect pour appeler la fonction isLoggedIn lors du montage du composant.
  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, isLoading, user }}>
      {children}
    </AuthContext.Provider>
  );
};
