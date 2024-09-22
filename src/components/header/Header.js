import './header.css'

import Logo from '../logo/Logo';
import CountIcon from '../countIcon/CountIcon';

function Header({cartCount, favouritesCount}) {
    return (
        <header className="header">
            <Logo />
            <div className="header__info">
                <CountIcon count={favouritesCount} title="favourites"/>
                <CountIcon count={cartCount} title="cart"/>
            </div>
            
        </header>
    )
}


export default Header