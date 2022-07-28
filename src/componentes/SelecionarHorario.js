import axios from "axios";
import { useState, useEffect } from "react";
import '../pages.css';

export default function SelecionarHorario () {
    const [selecionar, setSelecionar] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies/1/showtimes");
        
        promise.then((res) => {
            setSelecionar(res.data.days);
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
                                        <>
                                            <p>{item.name}</p>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                )}
                <div className="rodape">
                </div>
            </div>
        </div>
    );
}