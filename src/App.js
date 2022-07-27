import axios from "axios";
import { useState, useEffect } from "react";
import './pages.css';


function ListaDeFilmes() {
    const [itens, setItens] = useState([]);

    useEffect(() => {
        const promessa = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        
        promessa.then((res) => {
            setItens(res.data);
        });
    }, []);

    return (
        <>
            <div className="listaDeFilmes">
                {itens.map((item )=> 
                    <div className="filme">
                        <img src={item.posterURL}/>
                    </div>)}
            </div>
        </>
    );

}


export default function App() {

    return (
        <>
            <div className="barraTopo">
                <h1>CINEFLEX</h1>
            </div>
            <div className="pagina_selecionar_filmes">
                <p>Selecione o filme</p>
                <ListaDeFilmes />
            </div>
        </>
    );
}