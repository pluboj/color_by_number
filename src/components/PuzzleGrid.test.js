import React from 'react';
import { shallow } from 'enzyme';
import PuzzleGrid from './PuzzleGrid';
import Cell from './Cell';

const setup = () => {
    return shallow(<PuzzleGrid />);
};

let wrapper;
beforeEach(() => {
    wrapper = setup();
});

test('renders without issue', () => {
    const container = wrapper.find('[data-test="puzzle-container"]');
    expect(container.length).toBe(1);
}); 
test('contains 3 `div.row` elements', () => {
    const rows = wrapper.find('div.row');
    expect(rows.length).toBe(3);
});
test('first row has 5 button cells', () => {
    const row = wrapper.find('div.row').first();
    const buttons = row.find(Cell);
    expect(buttons.length).toBe(5);
})
