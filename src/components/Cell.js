import React, { Component } from 'react';
import InputForm from './InputForm';

class Cell extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAnswered: false,
            showInput: false,
        }
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onButtonClick = () => {
        this.setState({ showInput: true });
    }
    onChange = () => { 
        this.setState({ 
            isAnswered: true,
            showInput: false,
        }); 
    }

    render () {
        const { val1, val2, c } = this.props;
        
        const btn_style = {
            margin: '0',
            borderRadius: '0px'
        }
        const filled = {
            backgroundColor: c,
            color: c,
            margin: '0',
            borderRadius: '0px',
            cursor: 'not-allowed'
        }
        
        if ( this.state.showInput ) {
            return (
                <InputForm 
                    val1={val1}
                    val2={val2}
                    onChange={this.onChange}
                />
            );
        } else {
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
}

export default Cell;
