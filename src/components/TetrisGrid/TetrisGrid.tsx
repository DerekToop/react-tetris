import * as React from 'react';
import './TetrisGrid.css';
import BlockShape from '../BlockShape/BlockShape';


class TetrisGrid extends React.Component {
  public render() {
    return (
      <div className="TetrisGrid" >
        <BlockShape type={1} />
      </div>
    );
  }
}

export default TetrisGrid;
