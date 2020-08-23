import React, { useState } from 'react';
import buttonIcon from './../../../assets/img/plusIcon.svg';

interface Props {
  removeList(id: number): void;
  list: any;
}
const ListHeader: React.FC<Props> = ({ list, removeList }) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(list.listTitle);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      list.listTitle = title;
      setFocus(!focus);
    }
  };

  const blurHandler = () => {
    list.listTitle = title;
    setFocus(!focus);
  };

  return (
    <div className="list-header">
      {focus ? (
        <input
          className="list-header__input"
          autoFocus={true}
          onBlur={blurHandler}
          onChange={changeHandler}
          onKeyPress={keyPressHandler}
          value={title}
        />
      ) : (
        <h2 className="list-header__title" onClick={() => setFocus(!focus)}>
          {list.listTitle}
        </h2>
      )}
      <div className="list-header__button" onClick={() => removeList(list.id)}>
        <img className="list-header__icon" src={buttonIcon} />
      </div>
    </div>
  );
};

export default ListHeader;
