import React from 'react';
import ReactDOM from 'react-dom';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import registerServiceWorker from './registerServiceWorker';
import './style/index.css';

import AppDragDrop from './components/AppDragDrop';

library.add(fas)

ReactDOM.render(<AppDragDrop />,document.getElementById("root"));
registerServiceWorker();
