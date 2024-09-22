import {Link} from 'react-router-dom';

import './footer.css'

import Logo from '../logo/Logo';

function Footer () {
    return (
        <footer className="footer">
            <Logo />
            <nav className="footer__menu">
                <ul>
                    <li className="footer__menu-item">Избранное</li>
                    <li className="footer__menu-item"><Link to="/cart">Корзина</Link></li>
                    <li className="footer__menu-item">Контакты</li>
                </ul>
            </nav>
            <div className="footer__params">
                Условия сервиса
                <div className="footer__lang-block">
                    <img src="./resources/img/lang.svg" alt="language" className="footer__lang-ico" />
                    <div className="footer__lang-item">Каз</div>
                    <div className="footer__lang-item footer__lang-item__active">Рус</div>
                    <div className="footer__lang-item">Eng</div>
                </div>
            </div>
            <div className="footer__social">
                <a href="https://vk.me/sekushov" target="_blanc"><img src="./resources/img/vk.svg" alt="vk" className="footer__social-icon" /></a>
                <a href="https://t.me/IIIlIIIIIllIIl" target="_blanc"><img src="./resources/img/tg.svg" alt="tg" className="footer__social-icon" /></a>
                <a href="https://wa.me/79373286046" target="_blanc"><img src="./resources/img/wa.svg" alt="wa" className="footer__social-icon" /></a>
            </div>
        </footer>
    )
}

export default Footer