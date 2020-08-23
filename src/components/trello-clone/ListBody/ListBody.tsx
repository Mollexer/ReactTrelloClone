import React from 'react';
import ListCard from '../ListCard/ListCard';

interface Props {
  removeCard(id: number): void;
  cards: any;
}

const ListBody: React.FC<Props> = ({ removeCard, cards }) => {
  return (
    <ul className="list-body">
      {cards.map((card: any) => (
        <ListCard removeCard={removeCard} card={card} />
      ))}
    </ul>
  );
};

export default ListBody;
