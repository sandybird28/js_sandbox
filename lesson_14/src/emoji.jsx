import React from 'react';

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
        <span onClick = {this.onClick.bind(this)} style={{cursor: 'pointer'}}>
            {this.state.emoji}
        </span>
    )}
}


export default class WrapInEmoji extends React.Component {
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