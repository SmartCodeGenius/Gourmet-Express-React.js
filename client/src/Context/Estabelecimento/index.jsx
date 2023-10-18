import { useState } from "react";
import { createContext } from "react";

export const EstabelecimentoContext = createContext();

export const EstabelecimentoProvider = ({ children }) => {
    const [inputs, setInputs] = useState({
        nome: '',
        endereco: '',
        descricao: ''
    });

    const [estabelecimentos, setEstabelecimentos] = useState([]);

    const { nome, endereco, descricao } = inputs;

    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name] : e.target.value});
    }

    const onSubmitForm = async(e) => {
        e.preventDefault();

        try {
            const body = { nome, endereco, descricao };

            const response = await fetch('http://localhost:5000/estabelecimento/registro', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            });

            const parseRes  = await response.json();

            setEstabelecimentos(parseRes)

            window.location.href = '/estabelecimentos';

        } catch (err) {
            console.error(err.message);
        }
    }

    return(
        <EstabelecimentoContext.Provider value={{ inputs, onChange, onSubmitForm }}>
            { children }
        </EstabelecimentoContext.Provider>
    )
}