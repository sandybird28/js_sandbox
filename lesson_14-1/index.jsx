import React from 'react';
import ReactDOM from 'react-dom';

class Emoji extends React.Component {
    constructor(props) {
        super(props);
        this.defaultEmoji = props.defaultEmoji;
        this.emojis = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '🥰', '😗', '😙', '😚', '🙂', '🤗', '🤩', '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '😛', '😜', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '🙁', '😖', '🥵', '😞', '😟', '🥶', '😤', '🥴', '😢', '😭', '😦', '😧', '🥳', '😨', '😩', '🤯', '😬', '😰', '😱', '😳', '🤪', '😵', '😡', '🥺', '😠', '🤬', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '😇', '🤠', '🤥', '🤫', '🤭', '🧐', '🤓', '😈', '👿', '🤡', '👹', '👺', '👽', '👾', '🤖', '💩', '🙊'];
        this.state = {
            emoji: this.defaultEmoji
                   ? this.defaultEmoji
                   : this.randomEmoji()
        }
    }

    randomEmoji(){
        return(
            this.emojis[~~(Math.random()*(this.emojis.length-1))]
        );
    }
    onClick(){
        this.setState({emoji: this.randomEmoji()
        });
    }

    render() {
        return(
        <span onClick = {this.onClick.bind(this)}>
            {this.state.emoji}
        </span>
        )}
}


class WrapInEmoji extends React.Component {
    constructor(props) {
        super(props);
        this.defaultEmoji = props.defaultEmoji;
    }

    render() {
        return (
        <div>
            <Emoji defaultEmoji={this.defaultEmoji} />
            {this.props.children}
            <Emoji defaultEmoji={this.defaultEmoji}/>
        </div>
    )}
}

class Timer extends React.Component {
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
                <WrapInEmoji>{this.state.time}</WrapInEmoji>
                <div className="btns">
                    <button className="btn" disabled={this.state.disabled.start} onClick={()=>{this.tId = setInterval(this.start.bind(this),1000)}}>start</button>
                    <button className="btn" disabled={this.state.disabled.pause} onClick={this.pause.bind(this)}>pause</button>
                    <button className="btn" disabled={this.state.disabled.stop} onClick={this.stop.bind(this)}>stop</button>
                </div>
            </div>
        );
    }
}

// Все созданные компоненты должны быть отображены на странице
// Каждый компонент должен быть создан в своем файле


ReactDOM.render(
    <Timer />,
    document.getElementById('root'),
)