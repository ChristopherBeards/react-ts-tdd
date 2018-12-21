import * as React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

import '../setupTests';

describe('<Counter />', () => {
  it('should render a counter', () => {
    const handler = jest.fn();
    const wrapper = shallow(<Counter onCounterIncrease={handler} />);
    expect(wrapper.find('.counter label').text()).toBe('Count');
  });

  it('should render a Counter with a custom label', () => {
    const handler = jest.fn();
    const wrapper = shallow(
      <Counter onCounterIncrease={handler} label={'Current'} />
    );
    expect(wrapper.find('.counter label').text()).toBe('Current');
  });

  it('should call the handler on click', () => {
    const handler = jest.fn();
    const wrapper = shallow(<Counter onCounterIncrease={handler} />);
    wrapper.find('.counter').simulate('click', { shiftKey: false });
    expect(handler).toBeCalledWith(false);
  });
});
