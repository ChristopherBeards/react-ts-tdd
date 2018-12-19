import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// Test Setup 
import '../setupTests';

// Component
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the heading', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toBe('Hello World!');
  });
})
