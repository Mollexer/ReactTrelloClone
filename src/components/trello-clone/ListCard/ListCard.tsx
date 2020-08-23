import React from 'react';

interface Props {
  removeCard(id: number): void;
  card: any;
}

const ListCard: React.FC<Props> = ({ removeCard, card }) => {
  return (
    <li className="card" onClick={() => removeCard(card.id)}>
      {card.cardTitle}
    </li>
  );
};

export default ListCard;
