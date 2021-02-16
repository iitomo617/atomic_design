import React from 'react';
import styles from './styles.css';

export const HeadingPresenter = ({
  tag: Tag,
  visualLevel,
  className,
  ...props,
}) => (
  <Tag className={[ styles.h, styles[`h${ visualLevel }`], className].join(' ')} {...props} />
);

export const HeadingUnderlinedPresenter = ({
  tag: Tag,
  visualLevel,
  className,
  ...props,
}) => (
  <Tag className={[ styles.h, styles.underlined, styles[`h${ visualLevel }`], className].join(' ')} {...props} />
);

export const HeadingContainer = ({
  presenter,
  level = 2,
  visualLevel,
  ...props,
}) => {
  level = Math.max(1, Math.min(6,level));
  visualLevel = (typeof visualLevel != 'undefined') ? visualLevel : level;
  const tag = `h${ level }`;

  //()内のobjectがPresenterProps
  return presenter({ tag, visualLevel, ...props });
};

const Heading = props => (
  <HeadingContainer presenter={ presenterProps => <HeadingPresenter {...presenterProps} /> } { ...props } />
);

export default Heading;

export const HeadingUnderlined = props => (
  <HeadingContainer presenter={ presenterProps => <HeadingUnderlinedPresenter {...presenterProps} /> } { ...props } />
);

// export const Heading1 = ({ children, className, ...props }) => <h1 classname={[ tyles.h1, className ].join(' ') }>{children}</h1>;
// export const Heading2 = ({ children, className, ...props }) => <h1 classname={[ tyles.h2, className ].join(' ') }>{children}</h1>;
// export const Heading3 = ({ children, className, ...props }) => <h1 classname={[ tyles.h3, className ].join(' ') }>{children}</h1>;
// export const Heading4 = ({ children, className, ...props }) => <h1 classname={[ tyles.h4, className ].join(' ') }>{children}</h1>;
// export const Heading5 = ({ children, className, ...props }) => <h1 classname={[ tyles.h5, className ].join(' ') }>{children}</h1>;
// export const Heading6 = ({ children, className, ...props }) => <h1 classname={[ tyles.h6, className ].join(' ') }>{children}</h1>;

// const Heading = ({
//   children,
//   level = 2,
//   visualLevel,
//   className,
//   ...props,
// }) => {
//   level = Math.max(0,Math.min(6, level));
//   visualLevel = (typeof visualLevel !== 'undefined') ? visualLevel : level;
//   const Tag = `h${ level }`
//   const tagStyle = `${ styles.h } ${ styles[`h${visualLevel}`] }`;

//   return (
//     <Tag className ={ [tagStyle, className ].join(' ') } { ...props }>
//       { children }
//     </Tag>
//   );
// };
