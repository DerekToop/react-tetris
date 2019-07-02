import * as React from 'react';
import './BlockUnit.css';
import { $core } from '../../common/Core';

interface IBlockUnitOptions {
  top: number;
  left: number;
  width: number;
  icon: number;
  color: number;
}

interface IBlockUnitProps extends IBlockUnitOptions { }
interface IBlockUnitState extends IBlockUnitOptions { 

}

class BlockUnit extends React.Component<IBlockUnitProps, IBlockUnitState> {

  constructor(props: IBlockUnitProps, state: IBlockUnitState) {
    super(props, state);

    this.state = this.props;
  }

  public getStyle()
  {
    var bgX = 0 - this.state.color * this.state.width;
    var bgY = 0 - this.state.icon * this.state.width;
    return {
      top: `${this.state.top}px`,
      left: `${this.state.left}px`,
      backgroundPosition: `${bgX}px ${bgY}px`
     };
  }

  public occupyCell() {
    var x = Math.floor(this.state.left/this.state.width);
    var y = Math.floor(this.state.top/this.state.width);
    var cellVal = this.state.color;
    
    //debugInfo("Block(left=" + this.left + "|top=" + this.top+ " occupies " + x + "," + y);
    $core.Cells[y][x] = cellVal;
  }

  public render() {
    return (
      <div className="BlockUnit" style={this.getStyle()} />
    );
  }
}

export default BlockUnit;
