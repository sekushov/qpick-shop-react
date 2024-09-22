import {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './app.css';

import Header from '../header/Header';
import GoodsList from '../goodsList/GoodsList';
import Cart from '../cart/Cart';
import Footer from '../footer/Footer';

function App() {
    const [goods, setGoods] = useState([]);
    const [cartList, setCartList] = useState([]);
    const favouritesList = ['example', 'example'];

    // получение товаров
    useEffect(() => {
        (async () => {
            const response = fetch("./resources/data.json")
                .then(response => response.json())
                .catch(() => console.log('Сбой загрузки данных из файла'));
            setGoods(await response);
        })()
    }, []);

    const onAddToCart = ({id, count, img, title, price}) => {
        let overlap = false;
        const newList = cartList.map(cartItem => {
            // проверка на совпадение товара в корзине
            if (cartItem.id === id) {
                cartItem.count += count;
                overlap = true;
            }
            return cartItem
        });

        if (overlap) {
            setCartList(newList)
        } else {
            setCartList(cartList => [...cartList, {id, count, img, title, price}]);
        }
    }

    const onIncrCart = (id) => {
        setCartList(cartList.map(item => {
            if (item.id === id) item.count++
            return item
        }))
    }
    const onDecrCart = (id) => {
        setCartList(cartList.map(item => {
            if (item.id === id) item.count--
            return item
        }));
        setCartList(cartList.filter(item => {
            return item.count > 0
        }))
    }
    const onRemoveCart = (id) => {
        setCartList(cartList.filter(item => {
            return item.id !== id
        }))
    }

    // счетчик товаров
    const countCartList = () => {
        let count = 0;
        cartList.forEach(item => {
            count += item.count
        });
        return count
    }


    return (
        <Router>
            <div className="app">
                <div className="container">
                    <Header cartCount={countCartList()} favouritesCount={favouritesList.length}/>
                    <Routes>
                        <Route path="/" element={<GoodsList goods={goods} onAddToCart={onAddToCart} />} />
                        <Route path="/cart" element={<Cart cartList={cartList} onIncrCart={onIncrCart} onDecrCart={onDecrCart} onRemoveCart={onRemoveCart}/>} />
                    </Routes>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
