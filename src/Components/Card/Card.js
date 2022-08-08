import './card.css'
import React from "react";
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/menuReducer';
import { v4 as uuidv4 } from 'uuid';


function Card (props) {

    //useCallback

    const dispatch = useDispatch();

    let item = {
        id: uuidv4(),
        img: props.img,
        name: props.name,
        price: props.price
    }
    return (
        <div className="card">
            <img className='card__img' src={props.img} alt="Было название, но убежало"/>
            <span className="card__title">{props.name}</span>
            <p className="card__description">
                {props.desc}
            </p>
            <div className="card__pricing">
                <span className="card__price">{props.price} ₽</span>
                <span className="card__weight">/ {props.weight} г.</span>
                <button onClick = {() => dispatch(addItem(item))} className='card__add-button'>+</button>
            </div>
        </div>
    )
}


export default Card;