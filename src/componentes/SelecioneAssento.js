import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import '../pages.css';


export default function SelecioneAssento({image}) {

    console.log("vermelho");

    const [poltrona, setPoltrona] = useState([]);
    const [assentos, setAssentos] = useState([]);
    const params = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/2/seats`);
        
        promise.then((res) => {
            console.log('RRRR:', res.data)
            setPoltrona(res.data.seats);
            setAssentos(res.data);
        });
    }, []);
    console.log("azul");


    return (
        <>
        <div className='pagina_selecionar_assento'>
            <p>Selecione o(s) assento(s)</p>
            <div className="listaDeAssentos">
                {poltrona.map((poltron) => {
                    return (
                        <div className="poltrona">
                            <p>{poltron.name}</p>
                        </div>
                    )
                })}
            </div>
            <div className="cores">
                    <div className="verde">
                        <h1></h1>
                        <p>Selecionado</p>
                    </div>
                    <div className="cinza">
                        <h1></h1>
                        <p>Disponível</p>
                    </div>
                    <div className="amarelo">
                        <h1></h1>
                        <p>Indisponível</p>
                    </div>
                </div>
            <Footer image={image} assentos={assentos}/>
        </div>
        </>
    );

}