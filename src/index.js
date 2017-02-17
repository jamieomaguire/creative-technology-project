import React from 'react';
import { render } from 'react-dom';
import './scss/style.scss';
import { App } from './components/App'
import { Error404 } from './components/Error404'
import { Router, Route, hashHistory } from 'react-router'

// Define react in the window
window.React = React;

render(
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/today" component={App}/>
        <Route path="/overview" component={App}/>
        <Route path="/settings" component={App}/>
        <Route path="*" component={Error404}/>
    </Router>,
    document.getElementById('react-container')
)
