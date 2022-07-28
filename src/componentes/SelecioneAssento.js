import axios from "axios";
import { useState, useEffect } from "react";
import '../pages.css';

export default function SelecioneAssento() {
    const [itens, setItens] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        
        promise.then((res) => {
            setItens(res.data);
        });
    }, []);


    return (
        <div className='pagina_selecionar_assento invisivel'>
            <p>Selecione o(s) assento(s)</p>
            <div className="listaDeAssentos">
                {itens.map((item)=> 
                <div className="poltrona">
                    <p>{item.name}</p>
                </div>)}
                <div className="rodape">
                </div>
            </div>
        </div>
    );

}