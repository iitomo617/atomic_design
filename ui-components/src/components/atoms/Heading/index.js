import React from 'react';
import styles from './styles.css';

const Heading = ({
  children,
  level = 2,
  visualLevel,
  className,
  ...props,
}) => {
  level = Math.max(0,Math.min(6, level));
  visualLevel = (typeof visualLevel !== 'undefined') ? visualLevel : level;
  const Tag = `h${ level }`
  const tagStyle = `${ styles.h } ${ styles[`h${visualLevel}`] }`;

  return (
    <Tag className ={ [tagStyle, className ].join(' ') } { ...props }>
      { children }
    </Tag>
  );
};

export default Heading;

// export const Heading1 = ({ children, className, ...props }) => <h1 classname={[ tyles.h1, className ].join(' ') }>{children}</h1>;
// export const Heading2 = ({ children, className, ...props }) => <h1 classname={[ tyles.h2, className ].join(' ') }>{children}</h1>;
// export const Heading3 = ({ children, className, ...props }) => <h1 classname={[ tyles.h3, className ].join(' ') }>{children}</h1>;
// export const Heading4 = ({ children, className, ...props }) => <h1 classname={[ tyles.h4, className ].join(' ') }>{children}</h1>;
// export const Heading5 = ({ children, className, ...props }) => <h1 classname={[ tyles.h5, className ].join(' ') }>{children}</h1>;
// export const Heading6 = ({ children, className, ...props }) => <h1 classname={[ tyles.h6, className ].join(' ') }>{children}</h1>;
