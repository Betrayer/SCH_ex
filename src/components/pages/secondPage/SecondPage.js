import React from 'react';
import {withRouter} from "react-router-dom";

import Header from '../../header/Header';
import ContentSecondPage from '../../contentSecondPage/ContentSecondPage';


const SecondPage = () => {

    return (
        <React.Fragment>
            <Header />
            <ContentSecondPage />
        </React.Fragment>
    )
}

export default withRouter(SecondPage);