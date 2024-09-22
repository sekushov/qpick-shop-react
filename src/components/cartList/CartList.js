import './cartList.css';

import CartItem from '../cartItem/CartItem';

function CartList ({cartList, onIncrCart, onDecrCart, onRemoveCart}) {
    const elements = cartList.map(item => {
        return (
            <CartItem key={item.id} data={item} onIncrCart={onIncrCart} onDecrCart={onDecrCart} onRemoveCart={onRemoveCart}/>
        )
    });

    return (
        <div className="cart-list">
            {elements}
        </div>
    )
}

export default CartList