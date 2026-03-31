import menu from '../assets/pedidos.svg'
import  '../styles/solution.css'

interface CardProps {
    titulo: string;
    paragrafo: string;
}


export default function Card({ titulo, paragrafo }: CardProps) {
    return (
        <div className="card">
            <span>
                <img src={menu} alt="pedido" width={64} height={64} />
            </span>
            <div  className="divteste">
                <h3>
                    {titulo}
                </h3>
                <p>
                    {paragrafo}
                </p>
                <hr />
            </div>
        </div>
    )
}