import { createContext, useState } from "react";

export const EstabelecimentoContext = createContext();

export const EstabelecimentoProvider = ({ children }) => {
    const [id_estabelecimento, setId_estabelecimento] = useState('');
    const [estabelecimentoMode, setEstabelecimentoMode] = useState(false);

    const idDefinido = (boolean) => {
        setId_estabelecimento(boolean);
    }

    const dentroDoEstabelecimento = (boolean) => {
        setEstabelecimentoMode(boolean);
    }

    return (
        <EstabelecimentoContext.Provider value={{ estabelecimentoMode, dentroDoEstabelecimento, id_estabelecimento, idDefinido }}>
            { children }
        </EstabelecimentoContext.Provider>
    )
}