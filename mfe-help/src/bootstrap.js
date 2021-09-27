import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export const bootstrap = (props = {}) => {

    ReactDOM.render(
        <React.StrictMode>
            <App baseHref={props.baseHref || "/"} />
        </React.StrictMode>,
        document.getElementById('help-root')
    );
}

