"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var react_router_dom_1 = require("react-router-dom");
//views
var Introduction_1 = require("./views/Introduction");
var Registration_1 = require("./views/Registration");
var Login_1 = require("./views/Login");
var Home_1 = require("./views/Home");
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("header", { className: "App-header" },
            react_1["default"].createElement(react_router_dom_1.Route, { path: '/', component: Introduction_1["default"], exact: true }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: '/registration', component: Registration_1["default"] }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: '/login', component: Login_1["default"] }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: '/home', component: Home_1["default"] }))));
}
exports["default"] = App;
