import * as React from 'react';
import './NextShape.css';
import BlockShape from '../BlockShape/BlockShape';
import { $core } from '../../common/Core';


class NextShape extends BlockShape {
  readonly offsetsX = [
		[24+28, 10, 24+28, 10],	// Bar: (H, V, H, V)
		[10+28, 28, 10+28, 28],   // Z: (H, V, H, V)
		[10+28, 28, 10+28, 28],   // S: (H, V, H, V)
		[10+28, 28, 10+28, 28],   // T: (donw, left, up, right)
		[10+28, 28, 10+28, 28],   // L: (90, 180, 270, 0) -- clockwise rotation 
		[10+28, 28, 10+28, 28],   // J: (90, 180, 270, 0) -- clockwise rotation 
		[10+28, 10+28, 10+28, 10+28],    // □ 
	];

	readonly offsetsY = [
		[10, 24, 10, 24],	// Bar: (H, V, H, V)
		[28, 10, 28, 10],   // Z: (H, V, H, V)
		[28, 10, 28, 10],   // S: (H, V, H, V)
		[28, 10+28, 28, 10+28],   // T: (donw, left, up, right)
		[28, 10+28, 28, 10+28],   // L: (90, 180, 270, 0) -- clockwise rotation 
		[28, 10+28, 28, 10+28],   // J: (90, 180, 270, 0) -- clockwise rotation 
		[10, 10, 10, 10],    // □ 
  ];
  

  public render() {
    let colorId = Math.floor(7 * Math.random()); // colorId决定X坐标
    let shapeId = Math.floor(7 * Math.random());
    let angleId = Math.floor(4 * Math.random());

    // Step 2: 将图形定位在方框中央
    let offsetX = this.offsetsX[shapeId][angleId];		// unitLeft
    let offsetY = this.offsetsY[shapeId][angleId];		// unitTop
  
    return (
      <BlockShape icon={$core.DefaultIconId} color={colorId}
            type={shapeId} angle={angleId} 
            width={28} top={offsetY} left={offsetX}/>
    );
  }
}

export default NextShape;
