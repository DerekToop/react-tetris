import * as React from 'react';
import './LeftFrame.css';

import GameOver from '../GameOver/GameOver';
import TetrisGrid  from '../TetrisGrid/TetrisGrid';
import TetrisStage from '../TetrisStage/TetrisStage';

class LeftFrame extends React.Component {
  public render() {
    return (
      <div className="LeftFrame">
        <TetrisGrid />
        <TetrisStage />
        <GameOver />
      </div>
    );
  }
}

export default LeftFrame;
