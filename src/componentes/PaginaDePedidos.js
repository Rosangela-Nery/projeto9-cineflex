import { Link } from 'react-router-dom';
import '../pages.css';

export default function PaginaDePedidos({cpf, name, image, date}) {
    
    console.log("werr :", image)
    // useEffect(() => {
    //     const promise = axios.post(`https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many`);
        
    //     promise.then((res) => {
    //     });
    // }, []);

    return (
        <div className='paginaDeSucesso'>
            <div className='notificacaoDoPedido'>
                Pedido feito com sucesso!
            </div>
            <div className='notaDoPedido'>
                <div className='filmeESessao'>
                    <h1>Filme e sessão</h1>
                    <p>{image.title}</p>
                    <p>{`${date[0].weekday} - ${date[0].horario}`}</p>
                </div>
                <div className='filmeESessao'>
                    <h1>Ingressos</h1>
                    <p>Assento 15</p>
                    <p>Assento 16</p>
                </div>
                <div className='filmeESessao'>
                    <h1>Comprador</h1>
                    <p>Nome: {name}</p>
                    <p>CPF: {cpf}</p>
                </div>
            </div>
            <Link to={`/`}>
                <button>Voltar pra Home</button>
            </Link>
        </div>
    );
}