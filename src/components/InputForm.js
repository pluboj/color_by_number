import React, { Component } from 'react';

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange = (e) => {
        const answer = e.target.value;
        if ( Number(answer) === Number(this.props.val1) + Number(this.props.val2) ) {
            this.props.onChange(() => {
                return true;
            });
        }
    }
    render () {
        const {val1, val2} = this.props;
       
        return (
            <div className="ui form" style={{width: '72px'}}>
                <div className="field">
                    <input 
                        type="text" 
                        style={{borderRadius: '0'}} 
                        placeholder={`${val1} + ${val2}`}
                        onChange={this.onInputChange}
                    />
                </div>
            </div>
        );
    }
}

export default InputForm;
