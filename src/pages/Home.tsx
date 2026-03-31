import '../styles/Header.css'
import '../styles/hero.css'
import '../styles/solution.css'
import '../styles/testimonials.css'
import '../styles/pricing.css'
import '../styles/contact.css'
import '../styles/footer.css'
import Logo from "../assets/marlisaboreslogo.svg"
import { useState } from 'react'
import Button from '../components/Button.tsx'
import cucas from "../assets/images/cucas.jpg"
import paes from "../assets/images/paes.jpg"
import bolos from "../assets/images/bolos.jpg"
import Menu from "../assets/menu.svg"
import Close from "../assets/close.svg"
import Card from '../components/Cards.tsx'
import CarouselCard from '../components/CarouselCard.tsx'
import ProfileImageOne from "../assets/images/perfilum.webp"
import ProfileImageTwo from "../assets/images/perfildois.webp"
import ProfileImageTree from "../assets/images/perfiltres.webp"
import RedesSociais from "../assets/redessociais.svg"

export default function Home() {

    const [showMobileMenu, setShowMobileMenu] = useState(false); 

    return (
        <>
            <header className="container py-sm">
                <nav className='flex items-center justify-between'>
                    <img src={Logo} alt="Logo Marli Sabores" width={200} height={120} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li><a href="#">Home</a></li>
                            <li><a href="#solution">Soluções</a></li>
                            <li><a href="#testimonials">Depoimentos</a></li>
                            <li><a href="#pricing">Produtos</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#solution">Soluções</a></li>
                                        <li><a href="#testimonials">Depoimentos</a></li>
                                        <li><a href="#pricing">Produtos</a></li>
                                        <li><a href="#contact">Contato</a></li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>
                </nav>
            </header>
            
            <section id="hero">
                <div className="container content">
                    <p className="desktop-only">Olá</p>
                    <h1>Comida de mãe direto no seu apê, é só pedir que entregamos para você!</h1>
                    <p>Já pensou em matar a saudade daquela comida caseira? O melhor de tudo, nossas receitas são 100% saudáveis.</p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>

            <section id='solution' className='container'>
                <header>
                    <span>
                        <h2>Nossas Soluções</h2>
                        <span className="desktop-only">
                            <h2 className='solution-h2'>
                                Conheça as soluções que oferecemos para facilitar sua vida
                            </h2>
                        </span>
                    </span>
                    <p>
                        Oferecemos uma variedade de opções de refeições caseiras, preparadas com ingredientes frescos e saudáveis, entregues diretamente na sua porta. <strong>MarliSabores</strong>
                    </p>
                </header>
                <section className="even-columns">
                    <Card imagem={Menu} titulo='Ingredientes Selecionados' paragrafo='Nada de massa industrializada. Aqui usamos frutas frescas, farinha de qualidade e aquele toque caseiro que você ama.' />
                    <Card imagem={Menu} titulo='Pedido fácil e Rápido' paragrafo='Vendas sob encomenda e entregas sem cobrança de frete' />
                    <Card imagem={Menu} titulo='Sabor com Preço Justo' paragrafo='O sabor caseiro autêntico das receitas de família, com preço justo.' />
                </section>
            </section>

            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">Conselho de quem conhece</p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>Quem já pediu sabe da qualidade das nossas receitas, acompanhe abaixo os testemunhos de quem já comprou e aprovou.</p>
                </header>

                <section className="carousel">
                    <div className="carousel-content">
                        <CarouselCard name='Lázaro Ramos' title='Ator' testimonial='A cuca de doce de leite com coco é uma delícia, é perfeita para um café da tarde de domingo.' rating={5} profileImage={ProfileImageOne} />
                        <CarouselCard name='Lionel Messi' title='Jogador de Futebol' testimonial='Encomendei uma cuca de abacaxi com coco, é simplesmente dos deuses!' rating={5} profileImage={ProfileImageTwo} />
                        <CarouselCard name='Cristiano Ronaldo' title='Jogador de Futebol' testimonial='A Cuca é muito boa, macia e saborosa. A dona Marli tem o dom, até os mais exigentes aprovaram. É a melhor!!! SIIIIUUUU!!!!!!!' rating={5} profileImage={ProfileImageTree} />
                    </div>

                    <div className="carousel-content">
                        <CarouselCard name='Lázaro Ramos' title='Ator' testimonial='A cuca de doce de leite com coco é uma delícia, é perfeita para um café da tarde de domingo.' rating={5} profileImage={ProfileImageOne} />
                        <CarouselCard name='Lionel Messi' title='Jogador de Futebol' testimonial='Encomendei uma cuca de abacaxi com coco, é simplesmente dos deuses!' rating={5} profileImage={ProfileImageTwo} />
                        <CarouselCard name='Cristiano Ronaldo' title='Jogador de Futebol' testimonial='A Cuca é muito boa, macia e saborosa. É sensacional! SIIIIUUUU!!!!!!!' rating={5} profileImage={ProfileImageTree} />
                    </div>
                </section>
            </section>

            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Conheça nossos produtos</p>
                    <h2>Nosso Cardápio</h2>
                </header>

                <section className="menu-gallery-row">
                    
                    <div className="menu-card">
                        <img src={cucas} alt="Cardápio de Cucas" />
                        <div className="btn-wrapper-center">
                            <Button text="Pedir agora" />
                        </div>
                    </div>

                    <div className="menu-card">
                        <img src={paes} alt="Cardápio de Pães" />
                        <div className="btn-wrapper-center">
                            <Button text="Pedir agora" />
                        </div>
                    </div>

                    <div className="menu-card">
                        <img src={bolos} alt="Cardápio de Bolos" />
                        <div className="btn-wrapper-center">
                            <Button text="Pedir agora" />
                        </div>
                    </div>

                </section>
            </section>

            <section id="contact" className="container">
                <header>
                    <p>Envie sua dúvida</p>
                    <h2>Entre em contato</h2>
                    <p>Entre em contato, estamos dispostos a tirar qualquer dúvida, seja sobre o seu pedido. Estamos à disposição para responder!</p>
                </header>

                <form>
                    <input type="email" placeholder="Seu melhor Email" />
                    <textarea placeholder="Motivo do contato. Ex: Poderia fazer alguma encomenda especifica?" />
                    <div className="btn-wrapper">
                        <Button text="Enviar" />
                    </div>
                </form>
            </section>

            <footer id="footer">
                <div className="container footer-content">
                    <div className="logo-column">
                        <img src={Logo} alt="Logo" width={280} height={120} />
                        <div className="social-links">
                            <a href="#"><img src={RedesSociais} alt="Redes Sociais" height={24} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="links-column">
                            <h3>Empresa</h3>
                            <ul>
                                <li><a href="#">Sobre nós</a></li>
                                <li><a href="#">Faça parte do time</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div className="links-column">
                            <h3>Funcionalidades</h3>
                            <ul>
                                <li><a href="#">Marketing</a></li>
                                <li><a href="#">Análise de dados</a></li>
                                <li><a href="#">Boot discord</a></li>
                            </ul>
                        </div>
                        <div className="links-column">
                            <h3>Recursos</h3>
                            <ul>
                                <li><a href="#">iOS & Android</a></li>
                                <li><a href="#">Teste a Demo</a></li>
                                <li><a href="#">Clientes</a></li>
                                <li><a href="#">API</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bar">
                    <p>Feito para resgatar aquela lembrança da infância ©2025</p>
                </div>
            </footer>
        </>
    )
}