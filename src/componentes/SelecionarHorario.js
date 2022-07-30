import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../pages.css';
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function SelecionarHorario () {
    const [selecionar, setSelecionar] = useState([]);
    const [image, setImage] = useState([]);
    const params = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.idFilme}/showtimes`);
        
        promise.then((res) => {
            setSelecionar(res.data.days);
            setImage(res.data)
        });
    }, []);

    return (
        <div className="pagina_selecionar_horario ">
            <p>Selecione o horário</p>
            <div className="listaDeHorarios">
                {selecionar.map((seleciona ) => {
                    return (
                        <div className="date">
                            <p>{`${seleciona.weekday} - ${seleciona.date}`}</p>
                            <div className="hora">
                                {seleciona.showtimes.map((item) => {
                                    return (
                                        <Link to={`/assentos/${item.id}`} key={item.id}>
                                            <p>{item.name}</p>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                )}
                <Footer image={image}/>
            </div>
        </div>
    );
}