import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  it('should have the `th` "test"', () => {
    const wrapper = shallow(
      <App />
    );
    expect(
      wrapper.contains(<th>test</th>)
    ).toBe(true);
  });
})
