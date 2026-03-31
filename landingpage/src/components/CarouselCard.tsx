import Star from "../assets/Star.svg"
import StarOuter from "../assets/StarOuter.svg"
import '../styles/testimonials.css'

interface ICarouselCardProps {
    testimonial: string;
    name: string;
    title: string;
    rating: number;
    profileImage: any;
}

export default function CarouselCard(props: ICarouselCardProps) {
    return (

        <div className="carousel-card">
            <img src={props.profileImage} alt="Imagem perfil cliente" />
            
            
            <span className="names">
                <p className="name-text">{props.name}</p>
                <p className="title-text">{props.title}</p>
            </span>
            
            <span className="testimony">
                <p>
                    {props.testimonial}
                </p>
            </span>
            <span className="rating">
                {Array(props.rating).fill(0).map((_, index) => (
                    <img key={index} src={Star} alt="ícone estrela" width={22} height={20} />
                ))}
                {Array(5 - props.rating).fill(0).map((_, index) => (
                    <img key={index} src={StarOuter} alt="ícone estrela sem fundo" width={20} height={22} />
                ))}
            </span>
        </div>
    )
}

