import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../Redux/redux';
import Item from './Item';
import OrderModal from './OrderModal';

function Menu() {
  const menu = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const [modalOn, setModalOn] = useState(false);
  const [modalMenu, setModalMenu] = useState(null);

  if (!menu) return <div style={{ textAlign: 'center', margin: '80px' }}>메뉴 정보가 없어요!</div>;

  const categorys = Object.keys(menu);

  const handleAddToCart = (menuItem) => {
    dispatch(
      addToCart({
        id: menuItem.id,
        options: {}, // 선택한 옵션을 여기에 추가 가능
        quantity: 1,
      })
    );
  };

  return (
    <>
      {categorys.map((category) => (
        <section key={category}>
          <h2>{category}</h2>
          <ul className="menu">
            {menu[category].map((item) => (
              <Item
                key={item.id}
                item={item}
                clickHandler={() => {
                  setModalMenu(item);
                  setModalOn(true);
                }}
              />
            ))}
          </ul>
        </section>
      ))}
      {modalOn && (
        <OrderModal
          modalMenu={modalMenu}
          setModalOn={setModalOn}
          onAddToCart={handleAddToCart}
        />
      )}
    </>
  );
}

export default Menu;
