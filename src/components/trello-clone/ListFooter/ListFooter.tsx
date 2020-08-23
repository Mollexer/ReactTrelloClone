import React, { useState } from 'react';
import buttonIcon from './../../../assets/img/plusIcon.svg';

interface Props {
  addCard(title: string): void;
}

const ListFooter: React.FC<Props> = ({ addCard }) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [title, setTitle] = useState('');

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
    if (e.key === 'Enter' && title.trim()) {
      addCard(title);
      setTitle('');
    }
  };

  const confirmHandler = () => {
    if (title.trim()) {
      addCard(title);
      setTitle('');
    }
  };

  const cancelHandler = () => {
    setFocus(!focus);
    setTitle('');
  };

  return (
    <div className="list-footer">
      {focus ? (
        <>
          <textarea
            className="list-footer__input"
            placeholder="Enter a title fot this card"
            autoFocus={true}
            onChange={changeHandler}
            onKeyPress={keyPressHandler}
            value={title}
          />
          <div className="controls">
            <div className="list-footer__confirm" onClick={confirmHandler}>
              <p>Add Card</p>
            </div>
            <div className="list-footer__cancel" onClick={cancelHandler}>
              <img src={buttonIcon} />
            </div>
          </div>
        </>
      ) : (
        <div className="list-footer__button" onClick={() => setFocus(!focus)}>
          <img className="list-footer__icon" src={buttonIcon} />
          <p>Add Card</p>
        </div>
      )}
    </div>
  );
};

export default ListFooter;
