import React from 'react';

import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.textBox}>
      <div className={styles.titleLeft}>Hi,</div>
      <div className={styles.titleRight}>I'm Darrel</div>
      <div className={styles.subtitle}>A passionate software developer, avid adventurer</div>
    </div>
  </div>
);

export default Header;
