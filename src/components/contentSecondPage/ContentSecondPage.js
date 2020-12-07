import React from 'react';
import css from './contentSecondPage.module.css';


const ContentSecondPage = () => {


    return (
        <React.Fragment>
            <div className={css.tabletPictureWrapper}>
                <img src="./tablet_second_page.png" className={css.tabletPicture} alt="" />
            </div>
            <div className={css.listWrapper}>
                <div className={css.listElemWrapper}>
                    <div className={css.svgWrapper}>
                        <img src="/Vector_4.svg"></img>
                    </div>
                    <div className={css.listTextWrapper}>
                        <div className={css.listText}>Зрозумiлий</div>
                        <div className={css.listText}>інтерфейс</div>
                    </div>
                </div>
                <div className={css.listElemWrapper}>
                    <div className={css.svgWrapper}>
                        <img src="/Vector_3.svg"></img>
                    </div>
                    <div className={css.listTextWrapper}>
                        <div className={css.listText}>Вбудовані функції</div>
                        <div className={css.listText}>безпеки</div>
                    </div>
                </div>
                <div className={css.listElemWrapper}>
                    <div className={css.svgWrapper}>
                        <img src="/Vector_1.svg"></img>
                    </div>
                    <div className={css.listTextWrapper}>
                        <div className={css.listText}>Державна</div>
                        <div className={css.listText}>експертиза</div>
                    </div>
                </div>
                <div className={css.listElemWrapper}>
                    <div className={css.svgWrapper}>
                        <img src="/Vector_6.svg"></img>
                    </div>
                    <div className={css.listTextWrapper}>
                        <div className={css.listText}>Комплексний</div>
                        <div className={css.listText}>пошук</div>
                    </div>
                </div>
                <div className={css.listElemWrapper}>
                    <div className={css.svgWrapper}>
                        <img src="/Vector_2.svg"></img>
                    </div>
                    <div className={css.listTextWrapper}>
                        <div className={css.listText}>Шифрування</div>
                        <div className={css.listText}>диску</div>
                    </div>
                </div>
                <div className={css.listElemWrapper}>
                    <div className={css.svgWrapper}>
                        <img src="/Vector_5.svg"></img>
                    </div>
                    <div className={css.listTextWrapper}>
                        <div className={css.listText}>Легке</div>
                        <div className={css.listText}>керування</div>
                    </div>
                </div>
            </div>
            <div className={css.defensePromo}>
                <div>Трирівнева</div>
                <div>Система</div>
                <div>Захисту</div>
            </div>
        </React.Fragment>
    )
}

export default ContentSecondPage;

