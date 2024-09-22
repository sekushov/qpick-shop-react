import './cart.css';

import CartList from '../cartList/CartList';

function Cart ({cartList, onIncrCart, onDecrCart, onRemoveCart}) {
    const getTotalSum = () => {
        let totalSum = 0;
        cartList.forEach(item => {
            totalSum += item.price * item.count;
        });
        return totalSum
    }

    const emptyText = (
        <div className="cart__empty-text">Корзина пуста</div>
    )

    return (
        <div className="cart">
            <div className="cart__title">Корзина</div>
            <div className="cart__content">
                {/* проверяем корзину на пустоту */}
                {cartList.length <= 0 ? emptyText : <CartList cartList={cartList} onIncrCart={onIncrCart} onDecrCart={onDecrCart} onRemoveCart={onRemoveCart}/>}
                <div className="cart__total">
                    <div className="cart__total-info">
                        <div>Итого</div>
                        <div>&#8381; {getTotalSum()}</div>
                    </div>
                    <div className="cart__order">Перейти к оформлению</div>
                </div>
            </div>
        </div>
    )
}

export default Cart