"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.DemoCanvasWidget = exports.Container = void 0;
var React = require("react");
var styled_1 = require("@emotion/styled");
// eslint-disable-next-line @typescript-eslint/no-namespace
//namespace S {
exports.Container = styled_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\theight: 100%;\n\t\tbackground-color: rgb(60, 60, 60) !important;\n\t\tbackground-size: 50px 50px;\n\t\tdisplay: flex;\n\t\t> * {\n\t\t\theight: 100%;\n\t\t\tmin-height: 100%;\n\t\t\twidth: 100%;\n\t\t}\n\t\tbackground-image: linear-gradient(\n\t\t\t\t0deg,\n\t\t\t\ttransparent 24%,\n\t\t\t\t", " 25%,\n\t\t\t\t", " 26%,\n\t\t\t\ttransparent 27%,\n\t\t\t\ttransparent 74%,\n\t\t\t\t", " 75%,\n\t\t\t\t", " 76%,\n\t\t\t\ttransparent 77%,\n\t\t\t\ttransparent\n\t\t\t),\n\t\t\tlinear-gradient(\n\t\t\t\t90deg,\n\t\t\t\ttransparent 24%,\n\t\t\t\t", " 25%,\n\t\t\t\t", " 26%,\n\t\t\t\ttransparent 27%,\n\t\t\t\ttransparent 74%,\n\t\t\t\t", " 75%,\n\t\t\t\t", " 76%,\n\t\t\t\ttransparent 77%,\n\t\t\t\ttransparent\n\t\t\t);\n\t"], ["\n\t\theight: 100%;\n\t\tbackground-color: rgb(60, 60, 60) !important;\n\t\tbackground-size: 50px 50px;\n\t\tdisplay: flex;\n\t\t> * {\n\t\t\theight: 100%;\n\t\t\tmin-height: 100%;\n\t\t\twidth: 100%;\n\t\t}\n\t\tbackground-image: linear-gradient(\n\t\t\t\t0deg,\n\t\t\t\ttransparent 24%,\n\t\t\t\t", " 25%,\n\t\t\t\t", " 26%,\n\t\t\t\ttransparent 27%,\n\t\t\t\ttransparent 74%,\n\t\t\t\t", " 75%,\n\t\t\t\t", " 76%,\n\t\t\t\ttransparent 77%,\n\t\t\t\ttransparent\n\t\t\t),\n\t\t\tlinear-gradient(\n\t\t\t\t90deg,\n\t\t\t\ttransparent 24%,\n\t\t\t\t", " 25%,\n\t\t\t\t", " 26%,\n\t\t\t\ttransparent 27%,\n\t\t\t\ttransparent 74%,\n\t\t\t\t", " 75%,\n\t\t\t\t", " 76%,\n\t\t\t\ttransparent 77%,\n\t\t\t\ttransparent\n\t\t\t);\n\t"])), function (p) { return p.color; }, function (p) { return p.color; }, function (p) { return p.color; }, function (p) { return p.color; }, function (p) { return p.color; }, function (p) { return p.color; }, function (p) { return p.color; }, function (p) { return p.color; });
//} 
var DemoCanvasWidget = /** @class */ (function (_super) {
    __extends(DemoCanvasWidget, _super);
    function DemoCanvasWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DemoCanvasWidget.prototype.render = function () {
        return (<exports.Container background={'rgb(60, 60, 60)'} color={'rgba(255,255,255, 0.05)'}>
				{this.props.children}
			</exports.Container>);
    };
    return DemoCanvasWidget;
}(React.Component));
exports.DemoCanvasWidget = DemoCanvasWidget;
var templateObject_1;
