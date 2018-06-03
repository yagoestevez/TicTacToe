import React from 'react';
import './Menu.css';

const Menu = props => {
  const { showMenu, startGame, winner, players } = props;
  const [ human, computer ] = players;

  const buildMenu = () => {
    if (winner === human) {
      return (
        <section id="Menu" className={showMenu ? 'display' : 'display hidden'}>
          <h1 className="title">Congrats! You made it!!</h1>
          <hr />
          <div>
            <p className="menu-text">Wanna try again?</p>
            <button onClick={token => startGame('X')}>X</button>
            <button onClick={token => startGame('O')}>O</button>
          </div>
        </section>
      );
    } else if (winner === computer) {
      return (
        <section id="Menu" className={showMenu ? 'display' : 'display hidden'}>
          <h1 className="title">Oops...Sorry!!</h1>
          <hr />
          <div>
            <p className="menu-text">Want another chance?</p>
            <button onClick={token => startGame('X')}>X</button>
            <button onClick={token => startGame('O')}>O</button>
          </div>
        </section>
      );
    } else if ( winner === 'TIE') {
      return (
        <section id="Menu" className={showMenu ? 'display' : 'display hidden'}>
          <h1 className="title">It was close!</h1>
          <hr />
          <div>
            <p className="menu-text">Wanna do better?</p>
            <button onClick={token => startGame('X')}>X</button>
            <button onClick={token => startGame('O')}>O</button>
          </div>
        </section>
      );
    } else {
      return (
        <section id="Menu" className={showMenu ? 'display' : 'display hidden'}>
          <h1 className="title">Let's play!</h1>
          <hr />
          <div>
            <button onClick={token => startGame('X')}>X</button>
            <button onClick={token => startGame('O')}>O</button>
          </div>
        </section>
      );
    }
  };

  return buildMenu();
};

export default Menu;
