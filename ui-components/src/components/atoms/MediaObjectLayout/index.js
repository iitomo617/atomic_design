import React from 'react';
import styles from './styles.css';

const MediaObjectLayout = ({ children, className, tag:Tag = 'div' }) => (
  <Tag className={[ styles.container, className ].join(' ')}>
    <div>{ children[0] }</div>
    <div className={ styles.body }>{ Array.from(children).slice(1) }</div>
  </Tag>
  );

  export default MediaObjectLayout