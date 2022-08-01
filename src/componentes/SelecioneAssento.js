import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import '../pages.css';
import { Link } from "react-router-dom";

export default function SelecioneAssento({image, setImage, date, setDate}) {

    console.log("vermelho");

    const [poltrona, setPoltrona] = useState([]);
    const params = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.idSessao}/seats`);
        
        promise.then((res) => {

            console.log('RRRR:', res.data)
            setPoltrona(res.data.seats);
            setDate([{'weekday': res.data.day.weekday, 'horario': res.data.name}]);
            setImage(res.data.movie)
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
            <div className="formulario">
                <form>
                    <label for="formName">Nome do comprador:</label>
                    <input id="formName" type="text" placeholder="Digite seu nome..."/>
                    <label for="formCPF">CPF do comprador:</label>
                    <input id="formCPF" type="text" placeholder="Digite seu CPF..."/>
                </form>
            </div>
            <Link to={`/sucesso/`} >
            <button>Reservar assento(s)</button>
            </Link>
        </div>
        <Footer image={image} date={date}/>
        </>
    );

}