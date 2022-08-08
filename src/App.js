import React, {useEffect, useState} from 'react';
import './App.css';
import Authorization from './Components/Authorization/authorization';
import Menu from "./Components/Menu/menu";
import Cart from "./Components/Cart/Cart";
import {Route, Routes, useNavigate} from "react-router";
import { Provider } from 'react-redux';
import store from './redux/store';

localStorage.setItem('email', 'admin');
localStorage.setItem('password', 'admin');


function App() {

  let navigate = useNavigate();
  return (
    <Provider store={store}>
        <Routes >
          <Route path='/' element={<Authorization />}/>
          <Route path='/menu'element={<Menu />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route
            path="*"
            element={
              <main style={{ textAlign: 'center' }}>
                <p>There's nothing here! <button onClick={() => navigate('/', {replace: true})}>Обратно</button></p>
              </main>}/>
            <Route
                path="/game"
                element={ <Game /> }/>
        </Routes>
    </Provider>
  );
}

function Game() {

    const [catPic, setCatPic] = useState('');

    function getCatPic() {
        fetch("https://api.thecatapi.com/v1/images/search")
            .then((response) => {
                return response.json();
            })
            .then((body) => {
                setCatPic(body[0].url);
            })
    }

    useEffect(() => {
        getCatPic();
    }, []);

    return (
        <div>
            <img style={{width: '500px', height: '500px'}} src={catPic} alt=""/>
            <button onClick={() => getCatPic()}>get cat pic</button>
        </div>
    )
}

export default App;
