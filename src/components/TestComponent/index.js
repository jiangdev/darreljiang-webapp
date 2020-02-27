import React from 'react';
import styles from './TestComponent.module.scss';

const TestComponent = () => (
  <div className={styles['test-div']}>
    <div className={styles['test-div__title']}>Hello</div>
  </div>
);

export default TestComponent;
