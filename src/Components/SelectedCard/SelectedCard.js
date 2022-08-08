import { useDispatch } from 'react-redux';
import { removeItem } from '../../redux/menuReducer';
import './selectedcard.css'


function SelectedCard(props) {

    const dispatch = useDispatch();
    const id = props.id;

    return (

        <div className="selected-card">
            
            <img src={props.img} alt="something went wrong"/>
            <span className="selected-card__title">{props.name}</span>
            <span className="selected-card__price">{props.price} ₽</span>
            <button onClick={() => dispatch(removeItem(id))}  className='selected-card__delete-button'>x</button>
        </div>
    )
}

export default SelectedCard;
