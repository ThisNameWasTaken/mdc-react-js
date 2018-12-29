import React from 'react';
import { mount, configure } from 'enzyme';
import Button from '.';
import Adapter from 'enzyme-adapter-react-16';
import { MDCRipple } from '@material/ripple';

configure({ adapter: new Adapter() });

jest.mock('@material/ripple', () => ({ MDCRipple: jest.fn() }));

beforeEach(jest.resetAllMocks);

test('className adds classes', () => {
    const button = mount(<Button className="lorem ipsum" />).childAt(0);
    expect(button.hasClass('mdc-button')).toBe(true);
    expect(button.hasClass('lorem')).toBe(true);
    expect(button.hasClass('ipsum')).toBe(true);
});

test('renders a raised button', () => {
    const button = mount(<Button raised />).childAt(0);
    expect(button.hasClass('mdc-button--raised')).toBe(true);
});

test('renders a unelevated button', () => {
    const button = mount(<Button unelevated />).childAt(0);
    expect(button.hasClass('mdc-button--unelevated')).toBe(true);
});

test('renders an outlined button', () => {
    const button = mount(<Button outlined />).childAt(0);
    expect(button.hasClass('mdc-button--outlined')).toBe(true);
});

test('renders a dense button', () => {
    const button = mount(<Button dense />).childAt(0);
    expect(button.hasClass('mdc-button--dense')).toBe(true);
});

test('renders a button tag', () => {
    const button = mount(<Button />).childAt(0);
    expect(button.type()).toBe('button');
});

test('renders an anchor tag when a href prop is passed', () => {
    const button = mount(<Button href='https://google.com' />).childAt(0);
    expect(button.type()).toBe('a');
});

test('renders icon', () => {
    const button = mount(<Button icon={<i className="test-icon" />} />).childAt(0);
    expect(button.find('.test-icon').hasClass('mdc-button__icon')).toBe(true);
});

test('does not render an icon if an icon prop is not passed', () => {
    const button = mount(<Button />).childAt(0);
    expect(button.exists('.mdc-button__icon')).toBe(false);
});

test('renders ripples', () => {
    mount(<Button />);
    expect(MDCRipple).toHaveBeenCalled();
});

test('does not render ripples if a noRipple prop is passed', () => {
    mount(<Button noRipple />);
    expect(MDCRipple).not.toHaveBeenCalled();
});