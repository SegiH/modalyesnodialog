import React from 'react';
import ReactDOM from 'react-dom';

import ModalYesNoDialog from './components/ModalYesNoDialog';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ModalYesNoDialog />, document.getElementById('root'));
registerServiceWorker();