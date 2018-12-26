import React, { Fragment } from 'react';
import Header from './components/header';


const Router = ({children}) => (
    <div>
        <Header/>
            {children}
            </div>
);
export default Router;