import * as React from 'react';
import './PowerButton.css';

interface IPowerButtonProps {
  isPlaying: boolean;
}
interface IPowerButtonState {}

class PowerButton extends React.Component<IPowerButtonProps, IPowerButtonState> {

  constructor(props: IPowerButtonProps, state: IPowerButtonState) {
    super(props, state);
    
  }

  public render() {
    let btnType = this.props.isPlaying ? "btn-danger" : "btn-primary";
    let btnClass = `btn btn-sm ${btnType}`;
    let btnText = this.props.isPlaying ? "Stop" : "Start";

    return (
      <button type="button" id="startBtn" className={btnClass} >
        {btnText}
      </button>
    );
  }
}

export default PowerButton;
