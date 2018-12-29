import React from 'react';
import { string } from 'prop-types';
import classnames from 'classnames';

const ButtonIcon = ({
  className,
  children,
  ...otherProps
}) => (
    <i
      className={classnames(className, 'mdc-button__icon')}
      {...otherProps}
    >
      {children}
    </i>
  );

ButtonIcon.propTypes = {
  className: string
}

ButtonIcon.defaultProps = {
  className: undefined,
};

export default ButtonIcon;