import React from 'react';

import styles from './Header.module.scss';

const Header = () => (
  <div className={styles['header']}>
    <div className={styles['header__text-box']}>
      <div className={styles['header__title']}>
        <div className={styles['header__title--left']}>Hi,</div>
        <div className={styles['header__title--right']}>I&apos;m Darrel</div>
      </div>
      <div className={styles['header__subtitle']}>
        <div className={styles['header__subtitle--with-padding']}>
          Passionate software developer,
        </div>
        <div>avid adventurer</div>
      </div>
    </div>
  </div>
);

export default Header;
