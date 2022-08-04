import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeAmount } from '../../redux/slices/facts';
import Fact from './Fact';
import { v4 } from 'uuid';

function StarWars() {
  const dispatch = useDispatch();
  const { amount } = useSelector((state) => state.facts);
  const facts = [
    'Прообразом Чубакки стал пес режиссера.',
    'Актерам разрешили подобрать любимый цвет для своих световых мечей.',
    'В фильме «Звездные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину.',
    'Дыхание Дарта Вейдера — это звуки дыхательной маски, подключенной к аквалангу.',
    'Планета Татуин названа в честь реального города в Тунисе – стране, где происходила часть съемок',
  ];

  function handleChange(evt) {
    dispatch(changeAmount(+evt.target.value));
  }

  return (
    <>
      <input type='number' id='facts' min='1' max='5' onChange={handleChange} />
      <ul>
        {facts.map((x, i) => {
          if (i < amount) return <Fact key={v4()} text={x} />;
        })}
      </ul>
    </>
  );
}

export default StarWars;
