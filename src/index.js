import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { rootReducer } from "./reducer";
import 'bulma/css/bulma.css';
import './styles.scss';
import { createStore } from "redux";
import { provider } from "react-redux";

//Creating Redux store
const store = createStore(rootReducer);
const rootElement = document.getElementById('root');

//Providing redux store to all components
ReactDOM.render(
    <provider store={store}>
        <App />
    </provider>

    , rootElement);
