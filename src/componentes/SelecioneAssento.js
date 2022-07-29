import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../pages.css';
import Footer from "./Footer";

export default function SelecioneAssento() {
    const [itens, setItens] = useState([]);
    const params = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.idSessao}/seats`);
        
        promise.then((res) => {
            setItens(res.data.seats);
        });
    }, []);


    return (
        <>
        <div className='pagina_selecionar_assento'>
            <p>Selecione o(s) assento(s)</p>
            <div className="listaDeAssentos">
                {itens.seats.map((item)=> 
                <div className="poltrona">
                    <p>{item.name}</p>
                </div>)}
            </div>
        </div>
        <Footer />
        </>
    );

}