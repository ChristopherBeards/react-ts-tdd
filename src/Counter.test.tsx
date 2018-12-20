import * as React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

import '../setupTests';


describe('<Counter />', () => {
  it('should render a counter', () => {
    const wrapper = shallow(<Counter/>);
    expect(wrapper.find('.counter label').text())
        .toBe('Count');
  });
})