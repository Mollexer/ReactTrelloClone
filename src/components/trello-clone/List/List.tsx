import React, { useState } from 'react';
import ListHeader from '../ListHeader/ListHeader';
import ListBody from '../ListBody/ListBody';
import ListFooter from '../ListFooter/ListFooter';
import { ICard } from '../../../interfaces';

interface Props {
  removeList(id: number): void;
  list: any;
}

const List: React.FC<Props> = ({ list, removeList }) => {
  const [cards, setCards] = useState<ICard[]>([]);
  list.cards = cards;

  const addCard = (title: string) => {
    const newCard: ICard = {
      cardTitle: title,
      id: Date.now(),
    };
    setCards((prev) => [...prev, newCard]);
  };

  const removeCard = (id: number) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <div className="list">
      <ListHeader removeList={removeList} list={list} />
      <ListBody removeCard={removeCard} cards={cards} />
      <ListFooter addCard={addCard} />
    </div>
  );
};

export default List;
