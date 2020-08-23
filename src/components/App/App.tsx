import React, { useState } from 'react';
import List from '../trello-clone/List/List';
import AddListButton from '../trello-clone/AddListButton/AddListButton';
import { IList } from '../../interfaces';

const App: React.FC = () => {
  const [lists, setLists] = useState<IList[]>([]);

  const addList = (title: string) => {
    const newList: IList = {
      listTitle: title,
      cards: [],
      id: Date.now(),
    };
    setLists((prev) => [...prev, newList]);
  };

  const removeList = (id: number) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  return (
    <div className="app" onDoubleClick={() => console.log(lists)}>
      <div className="wrapper">
        {lists.map((list) => (
          <List removeList={removeList} list={list} />
        ))}
        <AddListButton addList={addList} />
      </div>
    </div>
  );
};

export default App;
