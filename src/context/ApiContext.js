import { createContext, useEffect, useState } from "react";
import { myAxios } from "../api/myAxios";
import { useContext } from "react";

export const ApiContext=createContext();

export const ApiProvider=({children})=>{
    const [tevekenysegLista, setTevekenysegLista]=useState([]);

    const getLista = async (vegpont, callBack) =>{
        const {data} = await myAxios.get(vegpont);
        callBack(data);
    };

    const postAdat = async ({ ...adat }, vegpont)=>{
        try {
            await myAxios.post(vegpont, adat);
            getLista("api/tevekenyseg", setTevekenysegLista);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getLista("api/tevekenysegek", setTevekenysegLista);
    }, []);

    return (
        <ApiContext.Provider value={{tevekenysegLista, postAdat}}>
            {children}
        </ApiContext.Provider>
    )
}

export default function useApiContext(){
    return useContext(ApiContext);
}