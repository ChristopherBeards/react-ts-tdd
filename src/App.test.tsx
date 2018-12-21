import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

// Test Setup
import '../setupTests';

// Component
import App from './App';
import Heading from './Heading';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the heading', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('h1').text()).toBe('Hello React');
    expect(wrapper.find('.counter label').text()).toBe('Current');
    expect(wrapper.find('.counter span').text()).toBe('0');
  });

  it('updates the state when clicked without shift', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance() as App;
    expect(instance.state.count).toBe(0);
    instance.increment(false);
    expect(instance.state.count).toBe(1);
  })

  it('updates the state when clicked with shift', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance() as App;
    expect(instance.state.count).toBe(0);
    instance.increment(true);
    expect(instance.state.count).toBe(10);
  })
});
