import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

const setup = (props = {}) => {
    return shallow(<Menu {...props} />);
}

test('renders without issues', () => {
    const wrapper = setup();
    const component = wrapper.find('[data-test="component-menu"]');
    expect(component.length).toBe(1);
}); 

