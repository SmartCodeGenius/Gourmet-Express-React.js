import { createContext, useState } from "react";

export const EstabelecimentoContext = createContext();

export const EstabelecimentoProvider = ({ children }) => {
    const [id, setId] = useState('');
    const [estabelecimentoMode, setEstabelecimentoMode] = useState(false);

    const idDefinido = (boolean) => {
        setId(boolean);
    }

    const dentroDoEstabelecimento = (boolean) => {
        setEstabelecimentoMode(boolean);
    }

    return (
        <EstabelecimentoContext.Provider value={{ estabelecimentoMode, dentroDoEstabelecimento, id, idDefinido }}>
            { children }
        </EstabelecimentoContext.Provider>
    )
}