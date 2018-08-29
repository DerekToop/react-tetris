import * as React  from 'react';
import                 './App.css';

import LeftFrame from './components/LeftFrame/LeftFrame';
import logo        from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <div className="mainFrame">
          <LeftFrame />

          <div className="rightfrm">
            <div id="nextBlock" />
            <p className="plaintxt">
              Level:  <span id="speed" className="label">1</span>&nbsp;&nbsp;&nbsp;
              Scores: <span id="score" className="label">0</span>
            </p>
            <button id="startBtn" className="frmButton" >Start</button>
            <button id="testBtn" className="frmButton" >Test</button>
            <button id="stopBtn" className="frmButton" >Stop</button>

            <div className='tab-box'>
              <div id="tab-nav" className="tab-nav">
                <span className="tab-menu   selected" id="tm1"><a href="#"  >Setup</a></span>
                <span className="tab-menu unselected" id="tm2"><a href="#"  >About</a></span>
              </div>

              <div className="tab-content  show" id="tc1"><br />
                <p id="cfgView">
                  Background   <select id="bgSelect" /> <br /> <br />
                  Block Type   &nbsp;&nbsp;<select id="iconSelect" /> <br /> <br />
                  Speed Level  <select id="speedSelect" />
                  <div id="imgBlockIcon" />
                </p>
              </div>
              <div className="tab-content  hide" id="tc2">
                <p id="aboutView">
                  <br/>
                  <span><b><br/><br/>
                  Just for FUN!!!<br/><br/>
                  Enjoy Yourself!<br/><br/>
                  <br/><br/><br/>
                  </b></span>
                </p>
              </div>
            </div>
            
            <br />
            <div className="plaintxt">
              <p>Tetris - Based on JavaScript<br /><br />
              Author: <a href="mailto:syfool@hotmail.com">syfool</a></p>
            </div>
          </div>
        </div>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Tetris</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
