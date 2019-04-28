import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/app.jsx';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css'

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
