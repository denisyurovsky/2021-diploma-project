import './cart.css'
import SelectedCard from "../SelectedCard/SelectedCard";
import React from "react";
import {useSelector} from 'react-redux'

function Cart () {

    let Selectedcards = useSelector((state) => state.menuReducer.cart)

    let totalPrice = Selectedcards.reduce((price, item)=> {
        price = price + item.price;

        return price;
    }, 0);

    
    return (
        <div className="cart-wrapper">
            <span className="cart__title">Корзина с выбранными товарами</span>
            <div className="wrapper-selected-cards">
                {
                        Selectedcards.map((element) => {
                        return <SelectedCard id = {element.id}
                                     key = {element.id}
                                     name = {element.name}
                                     price = {element.price}
                                     img = {element.img}
                        /> 
                })
                }
            </div>
            <hr/>
            <div className="cart__total">
                <span className="cart__price-title">ЗАКАЗ НА СУММУ: </span>
                <span className='cart__price'>{totalPrice} ₽</span>
                <button className='cart__confirm-button'>Оформить заказ</button>
            </div>
        </div>
    )
}

export default Cart;