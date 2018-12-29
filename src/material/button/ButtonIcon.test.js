import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ButtonIcon from './ButtonIcon';

configure({ adapter: new Adapter() });

test('className adds classes', () => {
    const buttonIcon = mount(<ButtonIcon className="test-icon" />).childAt(0);
    expect(buttonIcon.hasClass('mdc-button__icon')).toBe(true);
    expect(buttonIcon.hasClass('test-icon')).toBe(true);
});