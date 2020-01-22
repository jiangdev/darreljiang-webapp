import React from 'react';

import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.textBox}>
      <div className={styles.title}>
        <div className={styles.titleLeft}>Hi,</div>
        <div className={styles.titleRight}>I'm Darrel</div>
      </div>
      <div className={styles.subtitle}>
        <div className={styles.subtitleWithPadding}>Passionate software developer,</div>
        <div>avid adventurer</div>
      </div>
    </div>
  </div>
);

export default Header;
