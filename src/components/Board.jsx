import React from 'react';
import Square from './Square';

const Board = props => {
  const { play, gameBoard, winner, winningSeq } = props;

  const buildSquares = i => {
    return (
      <td>
        <Square
          index={i}
          play={play}
          board={gameBoard}
          winner={winner}
          winningSeq={winningSeq}
        />
      </td>
    );
  };

  return (
    <table>
      <tbody>
        <tr>
          {buildSquares(0)}
          {buildSquares(1)}
          {buildSquares(2)}
        </tr>
        <tr>
          {buildSquares(3)}
          {buildSquares(4)}
          {buildSquares(5)}
        </tr>
        <tr>
          {buildSquares(6)}
          {buildSquares(7)}
          {buildSquares(8)}
        </tr>
      </tbody>
    </table>
  );
};

export default Board;
