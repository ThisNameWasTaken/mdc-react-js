import React, { Component, createRef, cloneElement } from 'react';
import { string, bool, node } from 'prop-types';
import classnames from 'classnames';
import { MDCRipple } from '@material/ripple';
import '@material/button/mdc-button.scss';

export default class Button extends Component {
  static propTypes = {
    className: string,
    raised: bool,
    unelevated: bool,
    outlined: bool,
    dense: bool,
    noRipple: bool,
    icon: node,
    href: string
  };

  static defaultProps = {
    className: undefined,
    raised: false,
    unelevated: false,
    outlined: false,
    dense: false,
    noRipple: false,
    icon: undefined,
    href: undefined
  };

  constructor(props) {
    super(props);

    const {
      className,
      raised,
      unelevated,
      outlined,
      dense,
      icon,
    } = props;

    this.classNames = classnames('mdc-button', className, {
      'mdc-button--raised': raised,
      'mdc-button--unelevated': unelevated,
      'mdc-button--outlined': outlined,
      'mdc-button--dense': dense
    });

    this.icon = icon && cloneElement(icon, {
      className: classnames(icon.props.className, 'mdc-button__icon')
    });

    this.htmlElement = createRef();
  }

  componentDidMount() {
    if (!this.props.noRipple) {
      this.ripple = new MDCRipple(this.htmlElement.current);
    }
  }

  componentWillUnmount() {
    if (this.ripple) {
      this.ripple.destroy();
    }
  }

  render() {
    const {
      className,
      raised,
      unelevated,
      outlined,
      dense,
      noRipple,
      icon,
      href,
      children,
      ...otherProps
    } = this.props;

    const SemanticButton = href ? 'a' : 'button';

    return (
      <SemanticButton
        href={href}
        ref={this.htmlElement}
        className={this.classNames}
        {...otherProps}
      >
        {this.icon}
        {children}
      </SemanticButton>
    );
  }
}
