import mussels from '../dishes/mussels.png'
import pork from '../dishes/pork.png'
import shrimps from '../dishes/shrimps.png'
import ceasar from '../dishes/ceasar.png'
import bruschetta from '../dishes/bruschetta.png'

const initialState = {
    menu: [
    {   id: 1,
        img: mussels,
        name: 'Устрицы по рокфеллеровски',
        desc: 'это одно из самых изысканных и самых быстрых и простых в приготовлении блюд. Сложнее купить у нас устрицы, чем их приготовить.',
        price: 2700,
        weight: 500
    },
    {   id: 2,
        img: shrimps,
        name: 'Креветки по-королевски в лимонном соке',
        desc: 'Это блюдо очень вкусное и к тому же низкокалорийное. ',
        price: 1820,
        weight: '7 шт'
    },
    {   id: 3,
        img: pork,
        name: 'Свиные ребрышки на гриле с зеленью',
        desc: 'Деликатесные, слегка острые ребрышки. Имеют незабываемый вкус.',
        price: 1600,
        weight: 750
    },
    {   id: 4,
        img: ceasar,
        name: 'Цезарь с курицей',
        desc: 'Характерной чертой салата «Цезарь с курицей» является присутствие в нем хрустящих пшеничных гренок',
        price: 1000,
        weight: 600
    },
    {   id: 5,
        img: bruschetta,
        name: 'Брускетта с хамоном',
        desc: 'Хлеб, хамон, сливочный сыр, оливковое масло...',
        price: 1000,
        weight: 50
    }],
    cart: []};

 const menuReducer = (state = initialState, action) => {
    
    switch(action.type){
        case 'ADD_TO_CART': 
        return {...state, cart: [...state.cart, action.payload]}
        case 'REMOVE_FROM_CART':
            const cart = state.cart.filter(item => item.id !== action.payload) 
        return {...state, cart: cart}
        default:
            return state;
    }
};


export const addItem = (item) => {
    return {
        type: 'ADD_TO_CART',
        payload: item
    }
}

export const removeItem = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: id
    }
}
export default menuReducer;
