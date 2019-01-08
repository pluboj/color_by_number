import React, { Component } from 'react';
import Cell from './Cell';

const data = [
    [[1,4],[5,6],[1,0],[2,4],[5,2]],
    [[1,8],[0,6],[1,9],[3,4],[5,2]],
    [[4,4],[5,6],[1,9],[2,4],[7,2]]
];

class PuzzleGrid extends Component {
    
    createGrid = () => {
        const rows =[]; 

        for ( let r = 0; r < data.length; r++ ) {
            const row = data[r].map((btn, index) => 
                // <div className="ui button" key={`btn_`+index}>{btn[0]} + {btn[1]}</div>
                <Cell 
                    key={`btn_`+index}
                    val1={btn[0]}
                    val2={btn[1]}>
                </Cell>
            );
            rows.push(<div className="row" key={`row_`+r}>{ row }</div>);
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
