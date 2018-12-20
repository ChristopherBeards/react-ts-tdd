import * as React from 'react';
import { shallow } from 'enzyme';
import Heading from './Heading';

import '../setupTests';

it('renders the heading', () => {
    const wrapper = shallow(<Heading recipient={'React'} />);
    expect(wrapper.find('h1').text()).toBe('Hello React');
});