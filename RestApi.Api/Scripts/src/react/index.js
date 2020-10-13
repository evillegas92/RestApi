import React from 'react';
import ReactDOM from 'react-dom';

import { ReasonsList } from "./reasons-list.js";

const domContainer = document.querySelector('#sepReactContainer');
ReactDOM.render(<ReasonsList />, domContainer);