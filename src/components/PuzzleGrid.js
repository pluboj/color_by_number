import React, { Component } from 'react';
import Cell from './Cell';
import Addto10 from '../data/add0to10.json';

class PuzzleGrid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }
    }
    
    componentDidMount() {
        this.setState({ data: Addto10 });
    }
    
    createGrid = () => {
        const rows =[]; 

        for ( let r = 0; r < this.state.data.length; r++ ) {
            const row = this.state.data[r].map((btn, index) => 
                <Cell 
                    key={`btn_`+index}
                    val1={btn.n1}
                    val2={btn.n2}
                    c={btn.color}>
                </Cell>
            );
            rows.push(<div className="row" style={{paddingBottom: '0', paddingTop: '0'}} key={`row_`+r}>{ row }</div>);
        }

        return rows;  
    };

    render() {
        return (
            <div className="ui grid" data-test="puzzle-container">
                { this.createGrid() }
            </div>
        )
    }
}

export default PuzzleGrid;
