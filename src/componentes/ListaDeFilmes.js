import axios from "axios";
import { useState, useEffect } from "react";
import '../pages.css';

export default function ListaDeFilmes() {
    const [itens, setItens] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        
        promise.then((res) => {
            setItens(res.data);
        });
    }, []);

    return (
        <div className="pagina_selecionar_filmes invisivel">
            <p>Selecione o filme</p>
            <div className="listaDeFilmes">
                {itens.map((item)=> 
                    <div className="filme">
                        <img key={item.id} src={item.posterURL}/>
                    </div>
                )}
            </div>
        </div>
    );

}