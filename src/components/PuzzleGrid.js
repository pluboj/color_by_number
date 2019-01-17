import React, { Component } from 'react';
import Cell from './Cell';

const data = [
    [
        {"n1":2, "n2":4, "color":"red"},
        {"n1":1, "n2":4, "color":"blue"},
        {"n1":5, "n2":4, "color":"red"},
        {"n1":0, "n2":4, "color":"black"},
        {"n1":3, "n2":4, "color":"red"}
    ],
    [
        {"n1":2, "n2":0, "color":"red"},
        {"n1":2, "n2":8, "color":"green"},
        {"n1":2, "n2":5, "color":"red"},
        {"n1":2, "n2":7, "color":"yellow"},
        {"n1":2, "n2":1, "color":"red"}
    ],
    [
        {"n1":2, "n2":4, "color":"white"},
        {"n1":2, "n2":4, "color":"blue"},
        {"n1":2, "n2":4, "color":"blue"},
        {"n1":2, "n2":4, "color":"red"},
        {"n1":2, "n2":4, "color":"red"}
    ],
];

class PuzzleGrid extends Component {
    
    createGrid = () => {
        const rows =[]; 

        for ( let r = 0; r < data.length; r++ ) {
            const row = data[r].map((btn, index) => 
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
