import './goodsItem.css'

function GoodsItem({id, img, title, price, pricePrev, rate, onAddToCart}) {
    return(
        <div className="goods-item">
            <div className="goods-item__img-wrapper">
                <img src={img} alt={title} className="goods-item__img" />
            </div>
            <div className="goods-item__prop-group">
                <div className="goods-item__title">{title}</div>
                <div className="goods-item__price-wrapper">
                    <div className="goods-item__price">{price} &#8381;</div>
                    <div className="goods-item__price-prev">{pricePrev ? pricePrev + "₽" : ''}</div>
                </div>
            </div>
            <div className="goods-item__prop-group">
                <div className="goods-item__rate">
                    <img src="./resources/img/star.svg" alt="rating" className="goods-item__rate-icon" />
                    <div className="goods-item__rate-value">{rate}</div>
                </div>
                <button className="goods-item__btn" onClick={() => onAddToCart({id, count: 1, img, title, price})}>Купить</button>
            </div>

        </div>
    )
}

export default GoodsItem