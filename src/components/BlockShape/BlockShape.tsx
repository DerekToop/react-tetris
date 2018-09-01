import * as React from 'react';
import { $core } from '../../common/Core';
import BlockUnit from '../BlockUnit/BlockUnit';
import './BlockShape.css';

interface IBlockShapeOptions {
  left?: number;
  top?: number;
  icon?: number;
  color?: number;
  type?: number;
  angle?: number;
  width?: number;
  blocks?: [];
}
interface IBlockShapeProps extends IBlockShapeOptions { }
interface IBlockShapeState extends IBlockShapeOptions { }

class BlockShape extends React.Component<IBlockShapeProps, IBlockShapeState> {
  readonly blockWidth = 28;
  constructor(props: IBlockShapeProps, state: IBlockShapeState) {
    super(props, state)

    this.state = {
      left: this.props.left || 0,
      top: this.props.top || 0,
      width: 0,
      icon: this.props.icon || 0,
      color: this.props.color || 0,
      angle: this.props.angle || 0,
      type: this.props.type || 0,
    };
  }

  public render() {
    var type = this.state.type || 0;
    var angle = this.state.angle || 0;
    var shape = $core.Shapes[type][angle];
    var binstr = $core.hex2binstr(shape.toString(), 16);

		var unitArray = [binstr.substr(0,4),
						binstr.substr(4,4),
						binstr.substr(8,4),
            binstr.substr(12,4)];
            
    var blocks: Array<any> = [];
    for (var i = 0; i < 4 ; i++ )
		{
			let blockLeft: number = (this.state.left as number) + i * this.blockWidth;
			for ( var j = 0; j < 4 ; j++ )
			{
				let blockTop: number = (this.state.top as number) + j * this.blockWidth;
				if (unitArray[i].substr(j,1) == "1")
				{
          blocks.push(<BlockUnit key={`${i}-${j}`} 
                top={blockTop} left={blockLeft} 
                width={this.blockWidth} 
                icon={this.state.icon as number}
                color={this.state.color as number}
              />);
				}
			}
    }

    return (
      <div className="BlockShape">
        {blocks}
      </div>
    );
  }
}

export default BlockShape;
