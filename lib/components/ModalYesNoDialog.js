'use strict';

Object.defineProperty(exports, "__esModule", {
     value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dialog = require('@material-ui/core/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogActions = require('@material-ui/core/DialogActions');

var _DialogActions2 = _interopRequireDefault(_DialogActions);

var _DialogContent = require('@material-ui/core/DialogContent');

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _DialogContentText = require('@material-ui/core/DialogContentText');

var _DialogContentText2 = _interopRequireDefault(_DialogContentText);

var _DialogTitle = require('@material-ui/core/DialogTitle');

var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalYesNoDialog = function (_Component) {
     _inherits(ModalYesNoDialog, _Component);

     function ModalYesNoDialog(props) {
          _classCallCheck(this, ModalYesNoDialog);

          var _this = _possibleConstructorReturn(this, (ModalYesNoDialog.__proto__ || Object.getPrototypeOf(ModalYesNoDialog)).call(this, props));

          _this.state = {};
          return _this;
     }

     _createClass(ModalYesNoDialog, [{
          key: 'render',
          value: function render() {
               //const firstButton=(this.props.firstButtonText !== null && this.props.firstButtonText !== "" ? <Button onClick={this.props.eventHandler} color="primary">{this.props.firstButtonText}</Button> : null);

               //const secondButton=(this.props.secondButtonText !== null && this.props.secondButtonText !== "" ? <Button onClick={this.props.eventHandler} color="primary">{this.props.secondButtonText}</Button> : null);
               return _react2.default.createElement(
                    _Dialog2.default,
                    { id: 'alert-dialog', open: this.props.isVisible },
                    _react2.default.createElement(
                         _DialogTitle2.default,
                         { id: 'alert-dialog-title' },
                         _react2.default.createElement(
                              'span',
                              null,
                              this.props.title
                         )
                    ),
                    _react2.default.createElement(
                         _DialogContent2.default,
                         null,
                         _react2.default.createElement(
                              _DialogContentText2.default,
                              { id: 'alert-dialog-description' },
                              this.props.description
                         )
                    ),
                    _react2.default.createElement(
                         _DialogActions2.default,
                         null,
                         typeof this.props.firstButtonText !== 'undefined' && _react2.default.createElement(
                              _Button2.default,
                              { onClick: this.props.eventHandler, color: 'primary' },
                              this.props.firstButtonText
                         ),
                         typeof this.props.secondButtonText !== 'undefined' && _react2.default.createElement(
                              _Button2.default,
                              { onClick: this.props.eventHandler, color: 'primary' },
                              this.props.secondButtonText
                         )
                    )
               );
          }
     }]);

     return ModalYesNoDialog;
}(_react.Component);

// Define the type for all of the props


ModalYesNoDialog.propTypes = {
     isVisible: _propTypes2.default.bool,
     title: _propTypes2.default.string,
     description: _propTypes2.default.string,
     eventHandler: _propTypes2.default.func,
     firstButtonText: _propTypes2.default.string,
     secondbuttonText: _propTypes2.default.string
};

ModalYesNoDialog.defaultProps = {
     isVisible: false,
     title: 'title',
     description: 'description'
};

exports.default = ModalYesNoDialog;
//# sourceMappingURL=ModalYesNoDialog.js.map