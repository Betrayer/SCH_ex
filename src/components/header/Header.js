import React from 'react';
import css from './header.module.css';

const Header = () => {

    return (
        <div className={css.headerWrapper}>
            <img src="/LOGO.png" />
            <button type="button" className={css.downloadButton}>Завантажити</button>
        </div>
    )

}

export default Header;

