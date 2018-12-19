import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

import Menu from './components/Menu';

const setup = (props={}, state=null) => {
  return shallow(<App {...props} />);
}

describe('App tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders withour errors', () => {
    const appComponent = wrapper.find('[data-test="component-app"]');
    expect(appComponent.length).toBe(1);
  }); 
  test('renders menu element', () => {
    const menuComponent = wrapper.containsMatchingElement(<Menu />);
    expect(menuComponent).toBe(true);
  });
  test('renders puzzle container', () => {
    const puzzleComponent = wrapper.find('[data-test="component-puzzle"]');
    expect(puzzleComponent.length).toBe(1);
  });

})
