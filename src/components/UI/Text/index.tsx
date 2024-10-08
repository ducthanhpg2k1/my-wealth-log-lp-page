import React from 'react';

import classNames from 'classnames';

interface TextProps {
  children: React.ReactNode;
  type?:
    | 'font-18-500'
    | 'font-20-500'
    | 'font-20-700'
    | 'font-14-400'
    | 'font-40-700'
    | 'font-16-400'
    | 'font-50-600'
    | 'font-40-600'
    | 'font-16-500'
    | undefined;
  color?:
    | 'cwhite'
    | 'cblack'
    | 'primary-1'
    | 'primary-2'
    | 'primary-3'
    | 'primary-4'
    | 'primary-5'
    | 'secondary-1'
    | 'secondary-2'
    | 'secondary-3'
    | 'secondary-4'
    | 'secondary-5'
    | 'neutral-1'
    | 'neutral-2'
    | 'neutral-3'
    | 'neutral-4'
    | 'neutral-5'
    | 'neutral-6'
    | 'neutral-7'
    | 'link-1'
    | 'link-2'
    | 'link-3'
    | 'link-4'
    | 'link-5'
    | undefined;
  disabled?: boolean;
  state?: null | 'disable';
  className?: string;
  onClick?: () => void;
  element?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}

const Text: React.FC<TextProps> = ({
  type,
  color,
  disabled = false,
  className = '',
  onClick = () => {},
  children,
  element = 'p',
}) => {
  const classes = classNames(type, color, { 'text-disable': disabled }, className);

  return React.createElement(
    element,
    {
      className: classes,
      onClick,
    },
    React.createElement(React.Fragment, undefined, children),
  );
};

export default Text;
