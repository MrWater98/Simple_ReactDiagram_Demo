"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_diagrams_1 = require("@projectstorm/react-diagrams");
var React = require("react");
var react_canvas_core_1 = require("@projectstorm/react-canvas-core");
var DemoCanvasWidget_1 = require("./DemoCanvasWidget");
var styled_components_1 = require("styled-components");
require("./app.css");
exports["default"] = (function () {
    //1) setup the diagram engine
    var engine = react_diagrams_1["default"]();
    //2) setup the diagram model
    var model = new react_diagrams_1.DiagramModel();
    //3-A) create a default node
    var node1 = new react_diagrams_1.DefaultNodeModel({
        name: 'Node 1',
        color: 'rgb(0,192,255)'
    });
    node1.setPosition(100, 100);
    var port1 = node1.addOutPort('Out');
    //3-B) create another default node
    var node2 = new react_diagrams_1.DefaultNodeModel('Node 2', 'rgb(192,255,0)');
    var port2 = node2.addInPort('In');
    node2.setPosition(400, 100);
    // link the ports
    var link1 = port1.link(port2);
    link1.getOptions().testName = 'Test';
    link1.addLabel('Hello World!');
    //4) add the models to the root graph
    model.addAll(node1, node2, link1);
    //5) load model into engine
    engine.setModel(model);
    //6) render the diagram!
    var FullscreenCanvas = styled_components_1["default"](DemoCanvasWidget_1.DemoCanvasWidget)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t  height: 100%;\n\t  width: 100%;\n\t"], ["\n\t  height: 100%;\n\t  width: 100%;\n\t"])));
    var Container = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t  height: 100vh;\n\t  width: 100vw;\n\t"], ["\n\t  height: 100vh;\n\t  width: 100vw;\n\t"])));
    return (<Container>
            <FullscreenCanvas>
                <react_canvas_core_1.CanvasWidget engine={engine}>
                </react_canvas_core_1.CanvasWidget>
            </FullscreenCanvas>
        </Container>);
});
var templateObject_1, templateObject_2;
