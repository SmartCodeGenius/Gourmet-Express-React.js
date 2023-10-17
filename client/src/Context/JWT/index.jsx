import { useContext } from "react";
import { createContext, useState } from "react";
import { AuthContext } from "../Auth";

export const JWTContext = createContext();

export const JWTProvider = ({ children }) => {
    const { setAuth } = useContext(AuthContext);

    const [inputs, setInputs] = useState({
        email: '',
        senha: ''
      });
    
      const { email, senha } = inputs;
    
      const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name] : e.target.value });
      }
    
      const onSubmitForm = async(e) => {
        e.preventDefault();
    
        try {
    
          const body = { email, senha };
          
          const response = await fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
          });
    
          const parseRes = await response.json();
    
          if(parseRes === 'Senha ou Email incorreto') {
            return alert('Senha ou Email incorreto!');
          }
    
          localStorage.setItem('token', parseRes.token);
          setAuth(true);
    
          window.location.href = '/estabelecimentos';
        } catch (err) {
          console.error(err.message);
          setAuth(false);
        }
      }

    return(
        <JWTContext.Provider value={{ inputs, onChange, onSubmitForm, email, senha }}>
            { children }
        </JWTContext.Provider>
    );
}