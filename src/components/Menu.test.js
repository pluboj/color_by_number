import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

const setup = () => {
    return shallow(<Menu />);
}
let wrapper;

beforeEach(() => {
    wrapper = setup();
});

test('renders without issues', () => {
    const component = wrapper.find('[data-test="component-menu"]');
    expect(component.length).toBe(1);
}); 
test('contains four `div.item` elements', () => {
    const items = wrapper.find('div.item');
    expect(items.length).toBe(4);
})
test('first menu item is `Addition`', () => {
    const additionElement = wrapper.find('.header').first();
    expect(additionElement.text()).toContain('Addition');
});
test('menu items contain `Subtraction`', () => {
    const subtractionElement = wrapper.find('div.header[children="Subtraction"]');
    expect(subtractionElement.length).toBe(1);
});
test('menu items contain `Multiplication`', () => {
    const multiplicationElement = wrapper.find('div.header[children="Multiplication"]');
    expect(multiplicationElement.length).toBe(1);
});
test('menu items contain `Division`', () => {
    const divisionElement = wrapper.find('div.header[children="Division"]');
    expect(divisionElement.length).toBe(1);
});
