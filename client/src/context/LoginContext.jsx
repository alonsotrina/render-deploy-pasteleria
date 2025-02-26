import React, { createContext, useEffect, useState } from "react";
import { useStorage } from '../hooks/useStorage';
import { ENDPOINT } from '../config/endpoints'
import useIsOpen from "../hooks/useIsOpen";

export const LoginContext = createContext(null);
const initialStateToken = localStorage.getItem("USER_SESSION") || null;

const initialState = {
    id: null,
    email: '',
    token: null,
    role: 'user',
    msg: '',
    showMsg: false,
};

const LoginProvider = ({ children }) => {
    const { state, toggle:openModal } = useIsOpen()
    const { handleSetStorageSession, handleGetStorageSession, handleRemoveStorageSession, decrypted } = useStorage();
    const [session, setSession] = useState(initialState);
    const [perfil, setPerfil] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    console.log('session.comtext',session)
    console.log('perfil',perfil )
      
    useEffect(() => {
        if (session.token) {
            handleProfile(session.token)
        }
    }, [session.token]);


    const handleSession = async (email, password) => {
        try {
            const response = await fetch(`${ENDPOINT.login}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.log('errorData.error', errorData)
                setSession({
                    msg: errorData.message,
                    showMsg: true
                })
                return
            }

            const data = await response.json();

            setSession({
                token: data.data,
                msg: 'Registro exitoso',
                showMsg: false
            })

            handleSetStorageSession(data)

            // Cerrar modal inicar sesión 
            openModal('modalOpen')

            return data;
        }
        catch (error) {
            setSession({
                email: '',
                token: initialStateToken,
                msg: `Error: ${error.message || "Problema de conexión"}`,
                showMsg: true
            })
        }
    };

    useEffect(() => {
        setIsLoading(true);
        handleGetStorageSession();
    }, []);

    useEffect(() => {
        if (decrypted) {
          try {
            const parsedSession = JSON.parse(decrypted);
            setSession(parsedSession);
          } catch (error) {
            console.error("Error al parsear la sesión desencriptada:", error);
          }
        }
        setIsLoading(false);
      }, [decrypted]);

    const logout = () => {
        setSession(initialState)
        handleRemoveStorageSession()
        setPerfil(null)
    };

    const handleRegister = async (values) => {
        const { nombre, apellido, telefono, comuna_id, direccion, email, password, rol = 2  } = values 

        try {
            const response = await fetch(`${ENDPOINT.register}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nombre, apellido, telefono, comuna_id, direccion, email, password, rol_id: 2 }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setSession((prevAuth) => ({
                    ...prevAuth,
                    msg: errorData.error || "Error al registrar el usuario",
                    showMsg: true,
                }));
                return
            }

            const data = await response.json();

            setSession({
                msg: 'Usuario registrado con exito.',
                showMsg: true
            })

            return data;
        }
        catch (error) {
            setSession({
                msg: `Error: ${error.message || "Problema de conexión"}`,
                showMsg: true
            })
        }
    };

    const handleProfile = async (token) => {
        try {
            const response = await fetch(`${ENDPOINT.userProfile}`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
          
            if (!response.ok) {
                const errorData = await response.json();
                console.log('errorData', errorData)
                setSession((prevAuth) => ({
                    ...prevAuth,
                    msg: errorData.description || "Error desconocido al obtener el perfil",
                    showMsg: true,
                }));
                return
            }

            const data = await response.json();
            setPerfil(data.data);
            
            return data;
        }
        catch (error) {
            setSession((prevAuth) => ({
                ...prevAuth,
                msg: `Error: ${error.message || "al traer los datos del perfil"}`,
                showMsg: true,
            }));
        }
    };

    return (
        <LoginContext.Provider value={{ state, openModal, session, isLoading, handleSession, handleRegister, perfil, handleProfile, logout }}>
            {children}
        </LoginContext.Provider>
    );
};

export default LoginProvider;
