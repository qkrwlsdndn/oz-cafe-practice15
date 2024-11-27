import React, { useEffect } from 'react';
import './App.scss';
import data from './assets/data';
import Header from './components/Header';
import Menu from './components/Menu';
import Cart from './components/Cart';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/redux';
import { setMenu } from './Redux/redux';

function App() {
  useEffect(() => {
    // 초기 메뉴 데이터를 Redux Store에 설정
    store.dispatch(setMenu(data.menu));
  }, []);

  return (
    <Provider store={store}>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
    </Provider>
  );
}

export default App;
