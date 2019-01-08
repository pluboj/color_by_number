import React, { Component } from 'react';

class Cell extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAnswered: false,
        }
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick = () => {
        const val1 = this.props.val1;
        const val2 = this.props.val2;
        const sum = val1 + val2;

        this.setState({ isAnswered: true });
    }

    render () {
        const { val1, val2 } = this.props;
        
        const btn_style = {
            margin: '0',
            borderRadius: '0px'
        }
        const filled = {
            backgroundColor: 'blue',
            margin: '0',
            borderRadius: '0px',
            cursor: 'not-allowed'
        }
        
        
        return (
            <div 
                className="ui button" 
                style={this.state.isAnswered ? filled : btn_style} 
                onClick={this.onButtonClick}
            >
                {val1} + {val2}
            </div>
        );
    }
}

export default Cell;
