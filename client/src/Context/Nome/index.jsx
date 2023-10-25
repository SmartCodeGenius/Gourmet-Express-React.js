import { createContext, useState } from "react";

export const GetNomeContext = createContext();

export const GetNomeProvider = ({ children }) => {
    const [nome, setNome] = useState('');

    async function getNome() {
      try {
        const response = await fetch('http://localhost:5000/dashboard', {
          method: 'GET',
          headers: { token: localStorage.token }
        });
  
        const parseRes = await response.json();
  
        setNome(parseRes.nome_usuario);
  
      } catch (err) {
        console.error(err.message);
      }
    }

    return(
        <GetNomeContext.Provider value={{ nome, getNome }}>
            { children }
        </GetNomeContext.Provider>
    )
}