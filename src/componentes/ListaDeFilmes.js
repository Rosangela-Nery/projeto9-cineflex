import axios from "axios";
import { useState, useEffect } from "react";
import '../pages.css';
import { Link } from "react-router-dom";

export default function ListaDeFilmes() {
    const [itens, setItens] = useState([]);


    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");
        
        promise.then((res) => {
            setItens(res.data);
        });
    }, []);


    return (
        <div className="pagina_selecionar_filmes">
            <p>Selecione o filme</p>
            <div className="listaDeFilmes">
                {itens.map((item)=> 
                    <Link to={`/sessoes/${item.id}`} key={item.id}>
                        <div className="filme">
                            <img src={item.posterURL} alt={item.title} id={item.id}/>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );

}