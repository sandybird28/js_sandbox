import React from 'react';
import WrapInEmoji from './emoji';
import './timer.css';


export default class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            time: 0,
            disabled: {
                start: false,
                pause: true,
                stop: true,
            }
        }
    }
    start() {
        this.setState({
            time: this.state.time + 1,
            disabled:{
                start: true,
                pause: false,
                stop: false,
            }
        })
    }
    pause() {      
        clearInterval(this.tId);

        this.setState({
            disabled:{
                start: false,
                pause: true,
                stop: false,
            }
        });
    }

    stop() {
        clearInterval(this.tId);
        this.setState({
            time: 0,
            disabled:{
                start: false,
                pause: true,
                stop: true,
            }
        })

    }
        


    render() {
        return(
            <div className="timer">
                <WrapInEmoji> {this.state.time} </WrapInEmoji>
                <div className="btns">
                    <button className="btn" disabled={this.state.disabled.start} onClick={()=>{this.tId = setInterval(this.start.bind(this),1000)}}>start</button>
                    <button className="btn" disabled={this.state.disabled.pause} onClick={this.pause.bind(this)}>pause</button>
                    <button className="btn" disabled={this.state.disabled.stop} onClick={this.stop.bind(this)}>stop</button>
                </div>
            </div>
        );
    }
}