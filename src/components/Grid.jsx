import React from 'react';
import './Grid.css';

const Grid = props => {
  const animate= i => ( props.didGameStart ? `line animate${i}` : `line` );
  return (
    <svg id="Grid" viewBox="0 0 180 180">
      <g>
        <path className={animate(1)} d="M 0,60 H 180" />
        <path className={animate(2)} d="M 180,120 H 0" />
        <path className={animate(3)} d="M 60,180 V 0" />
        <path className={animate(4)} d="M 120,0 V 180" />
      </g>
    </svg>
  );
};

export default Grid;
