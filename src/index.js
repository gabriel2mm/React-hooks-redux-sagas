import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter } from 'react-router-dom';
import store from './Store/index';
import Router from './Router/index';

ReactDOM.render(
       <Provider store={store}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>           
       </Provider>
, document.getElementById('root'));
