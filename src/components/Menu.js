import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div className="ui vertical menu" data-test="component-menu">
                <div className="item">
                    <div className="header">Addition</div>
                    <div className="menu">
                    <a href="/" className="item active">0 - 10</a>
                    <a href="/" className="item">11 - 20</a>
                    </div>
                </div>
                <div className="item">
                    <div className="header">Subtraction</div>
                    <div className="menu">
                    <a href="/" className="item">0 - 10</a>
                    <a href="/" className="item">11 - 20</a>
                    </div>
                </div>
                <div className="item">
                    <div className="header">Multiplication</div>
                </div>
                <div className="item">
                    <div className="header">Division</div>
                </div>
            </div>
        )
    }
}

export default Menu;
