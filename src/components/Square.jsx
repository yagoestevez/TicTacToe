import React from 'react';
import './Square.css';

const Square = props => {
  const { index, play, board, winner, winningSeq } = props;

  const xClasses = i => {
    return [
      board[index] === 'X' ? `cross${i}-shown` : `cross`,
      winner === 'X' && winningSeq.indexOf(index) !== -1 ? `xWon${i}` : '',
      'clickable'
    ].join(' ');
  }
  const oClasses = () => {
    return [
      board[index] === 'O' ? 'circle-shown' : 'circle',
      winner === 'O' && winningSeq.indexOf(index) !== -1 ? 'oWon' : '',
      'clickable'
    ].join(' ');
  }

  return (
    <svg viewBox="0 0 120 120" onClick={() => play(index)}>
      {/* THE X TOKEN SPLIT INTO TWO PATHS */}
      <g>
        <path
          id={`cross1${index}`}
          className={xClasses(1)}
          d="M 20,100 L 100,20"
        />
        <path
          id={`cross2${index}`}
          className={xClasses(2)}
          d="M 100,100 L 20,20"
        />
      </g>
      {/* THE O TOKEN */}
      <circle
        id={`circle${index}`}
        className={oClasses()}
        r={42}
        cy={60}
        cx={60}
        fill="transparent"
        strokeWidth={6}
      />
    </svg>
  );
};

export default Square;
