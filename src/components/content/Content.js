import React from 'react';
import css from './content.module.css';


const Content = () => {

    return (
        <React.Fragment>
            <div className={css.motoWrapper}>
                <div className={css.moto}>Просто.</div>
                <div className={css.moto}>Надiйно.</div>
                <div className={css.moto}>Безпечно.</div>
            </div>
            <div className={css.promo}>
                Захищена операційна система <span>СІЧ</span> створена вітчизняними фахівцями на базі <span>SuSe Linux Enterprice 15</span> для забезпечення інформаційної кібербезпеки в українських комп'ютерних мережах і системах, сертифікована Державою
            </div>
            <div className={css.tabletImage}>
                <img src="./Pic.png" />
            </div>
        </React.Fragment>
    )
}

export default Content;