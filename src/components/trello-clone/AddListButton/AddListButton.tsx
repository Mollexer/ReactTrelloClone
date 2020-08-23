import React, { useState } from 'react';
import buttonIcon from './../../../assets/img/plusIcon.svg';

interface Props {
  addList(title: string): void;
}

const AddListButton: React.FC<Props> = ({ addList }) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !title.trim()) {
      setFocus(!focus);
    }
    if (e.key === 'Enter' && title.trim()) {
      setTitle('');
      addList(title);
    }
  };

  const confirmHandler = () => {
    if (title.trim()) {
      setTitle('');
      addList(title);
    }
  };

  const cancelHandler = () => {
    setTitle('');
    setFocus(!focus);
  };

  return (
    <div className="add-list">
      {focus ? (
        <>
          <input
            className="add-list__input"
            placeholder="Enter a title fot this list"
            autoFocus={true}
            onChange={changeHandler}
            onKeyPress={keyPressHandler}
            value={title}
          />
          <div className="controls">
            <div className="add-list__confirm" onClick={confirmHandler}>
              Add List
            </div>
            <div className="add-list__cancel" onClick={cancelHandler}>
              <img src={buttonIcon} />
            </div>
          </div>
        </>
      ) : (
        <div className="add-list__button" onClick={() => setFocus(!false)}>
          <p className="add-list__title">
            <img className="add-list__icon" src={buttonIcon} />
            Add List
          </p>
        </div>
      )}
    </div>
  );
};

export default AddListButton;
