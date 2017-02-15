import React from 'react';
import { render } from 'react-dom';
import './scss/style.scss';
import { App } from './components/App'

// Define react in the window
window.React = React;

render(
    <App />,
    document.getElementById('react-container')
)
