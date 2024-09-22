import './cartItem.css';

function CartItem ({data, onIncrCart, onDecrCart, onRemoveCart}) {
    const {id, img, title, price, count} = data;
    return (
        <div className="cart-item">
            <div className="cart-item__img-wrapper">
                <img src={img} alt={title} className="cart-item__img" />
            </div>
            <div className="cart-item__title-price">
                <div className="cart-item__title">{title}</div>
                <div className="cart-item__price">{price} &#8381;</div>
            </div>
            <div className="cart-item__count">
                <div className="cart-item__count-change" onClick={() => onDecrCart(id)}>-</div>
                <div className="cart-item__count-num">{count}</div>
                <div className="cart-item__count-change" onClick={() => onIncrCart(id)}>+</div>
            </div>
            <div className="cart-item__total-sum">{price * count} &#8381;</div>
            <img src="./resources/img/delete.svg" alt="remove" className="cart-item__delete" onClick={() => onRemoveCart(id)} />
        </div>
    )
}

export default CartItem