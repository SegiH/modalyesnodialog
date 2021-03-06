'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ModalYesNoDialog = require('./components/ModalYesNoDialog');

var _ModalYesNoDialog2 = _interopRequireDefault(_ModalYesNoDialog);

var _registerServiceWorker = require('./registerServiceWorker');

var _registerServiceWorker2 = _interopRequireDefault(_registerServiceWorker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_ModalYesNoDialog2.default, null), document.getElementById('root'));
(0, _registerServiceWorker2.default)();
//# sourceMappingURL=index.js.map