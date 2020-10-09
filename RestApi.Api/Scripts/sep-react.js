'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReasonsList = function (_React$Component) {
    _inherits(ReasonsList, _React$Component);

    function ReasonsList(props) {
        _classCallCheck(this, ReasonsList);

        var _this = _possibleConstructorReturn(this, (ReasonsList.__proto__ || Object.getPrototypeOf(ReasonsList)).call(this, props));

        _this.state = {
            error: null,
            isLoaded: false,
            reasons: []
        };
        return _this;
    }

    _createClass(ReasonsList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            fetch("http://localhost:49824/api/reasons").then(function (response) {
                return response.json();
            }).then(function (result) {
                _this2.setState({
                    isLoaded: true,
                    reasons: result
                });
            }, function (error) {
                _this2.setState({
                    isLoaded: true,
                    error: error
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                error = _state.error,
                isLoaded = _state.isLoaded,
                reasons = _state.reasons;


            if (error) {
                return React.createElement(
                    'div',
                    null,
                    'Error: ',
                    error.message
                );
            } else if (!isLoaded) {
                return React.createElement(
                    'div',
                    null,
                    'Loading...'
                );
            } else {
                return React.createElement(
                    'ul',
                    null,
                    reasons.map(function (reason) {
                        return React.createElement(
                            'li',
                            { key: reason.Id },
                            reason.Name,
                            ' - ',
                            reason.Value
                        );
                    })
                );
            }
        }
    }]);

    return ReasonsList;
}(React.Component);

var domContainer = document.querySelector('#sepReactContainer');
ReactDOM.render(React.createElement(ReasonsList, null), domContainer);