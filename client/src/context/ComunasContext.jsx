import React, { createContext, useContext, useEffect, useState } from "react";
import { ENDPOINT } from '../config/endpoints'
import useHttp from "../hooks/useHttp";

export const ComunasContext = createContext(null)

const ComunasProvider = ({ children }) => {
    const {request} = useHttp()
    const [comunaList, setComunaList] = useState([])
    const [region, setRegion] = useState(null);
    const [comuna, setComuna] = useState(null);

    const fetchAllComunas = async () => {
        try {
            const data = await request(`${ENDPOINT.listComuna}`, "GET");
            setComunaList(data.data.comunas || []);
        } catch (err) {
            console.error("Error fetching comunas:", err);
        }
    };

    useEffect(() => {
        fetchAllComunas();
    }, []);

    return (
        <ComunasContext.Provider value={{ comunaList, region, setRegion, comuna, setComuna}}>
            {children}
        </ComunasContext.Provider>
    )
}

export const useComuna = () => {
    const context = useContext(ComunasContext);

    if (!context) {
        throw new Error("useComuna debe ser usado dentro de un ComunasProvider");
    }
    return context;
}

export default ComunasProvider