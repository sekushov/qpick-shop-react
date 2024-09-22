import {Link} from 'react-router-dom';
import './countIcon.css';

function CountIcon({title, count}) {
    const url = "%PUBLIC_URL%/" + title;
    const params = {};
    // eslint-disable-next-line default-case
    switch (title) {
        case "favourites": {
            params.img = "./resources/img/favourite.svg";
            break
        } case "cart": {
            params.img = "./resources/img/cart.svg";
            break
    }
}
    return (
        <div className='countIcon'>
            <Link to={url}>
                <img src={params.img} alt={title} className="countIcon__icon" />
                <div className="countIcon__notice">
                    <span>{count}</span>
                </div>
            </Link>
        </div>
    )
}

export default CountIcon