import './goodsList.css';

import GoodsItem from '../goodsItem/GoodsItem';

function GoodsList({goods, onAddToCart}) {
    const elements = goods.map((category, i) => {
        const items = category.data.map((item, j) => {
            return <GoodsItem key={i + '-' + j} id={i + '-' + j} img={item.img} title={item.title} price={item.price} pricePrev={item.price_prev} rate={item.rate} onAddToCart={onAddToCart}/>
        });
        return (
            <div key={i} className="goods-list__category-block">
                <div className="goods-list__category-title">{category.category}</div>
                <div className="goods-list__items">{items}</div>
            </div>
        )
        }
    )

    return (
        <div className="goodsList">
            {elements}
        </div>
    )
}

export default GoodsList