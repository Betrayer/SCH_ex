import React from 'react';
import {withRouter} from "react-router-dom";

import Header from '../../header/Header';
import Content from '../../content/Content';


const FirstPage = () => {

    return (
        <React.Fragment>
            <Header />
            <Content />
        </React.Fragment>
        
    )
}

export default withRouter(FirstPage);