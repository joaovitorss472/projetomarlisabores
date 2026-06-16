import '../styles/solution.css'

interface CardProps {
    titulo: string;
    paragrafo: string;
    imagem: string; 
}

export default function Card({ titulo, paragrafo, imagem }: CardProps) {
    return (
        <div className="card">
            <span className="card-image-wrapper">
                <img src={imagem} alt={`Imagem de ${titulo}`} className="produto-img" width={64} height={64} />
            </span>
            <div className="divteste">
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