import createEngine, { DiagramModel, DefaultNodeModel, DefaultLinkModel, NodeModelGenerics } from '@projectstorm/react-diagrams';
import * as React from 'react';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import { DemoCanvasWidget } from './DemoCanvasWidget';
import styled from 'styled-components';
import './app.css';

export default () => {
	
	//1) setup the diagram engine
	var engine = createEngine();

	//2) setup the diagram model
	var model = new DiagramModel();

	var entitylist = {};

	var ruleNodes = new Array<DefaultNodeModel>();
	
	
	//3-A) create a default node
	var node1 = new DefaultNodeModel({
		name: 'num',
		color: 'rgb(0,0,255)'
	});
	node1.setPosition(100, 100);
	let port1 = node1.addOutPort('10');
	
	//3-A) create a default node
	var node2 = new DefaultNodeModel({
		name: 'Account',
		color: 'rgb(0,0,255)'
	});
	node2.setPosition(100, 200);
	let port2 = node2.addOutPort('balance');

	var node3 = new DefaultNodeModel({
		name: ">=",
		color: 'rgb(0,192,255)'
	});
	node3.setPosition(200, 100);
	node3.addInPort('左值');
	node3.addInPort('右值');
	node3.addOutPort('结果');

	//4) add the models to the root graph
	model.addAll(node1,node2,node3);

	engine.setModel(model);

	document.addEventListener("keydown",function(){
		var e =  window.event || arguments.callee.caller.arguments[0];
		if(e.keyCode!=null&&e.keyCode==9){
			addNode();
		}
	})

	document.addEventListener("keydown",function(){
		var e =  window.event || arguments.callee.caller.arguments[0];
		if(e.keyCode!=null&&e.keyCode==32){
			generateCode();
		}
	})

	

	//6) render the diagram!
	const FullscreenCanvas = styled(DemoCanvasWidget)`
	  height: 100%;
	  width: 100%;
	`;

	const Container = styled.div`
	  height: 100vh;
	  width: 100vw;
	`;


	function generateCode(){
		var theResponse = window.prompt("请输入你导出的规则文件名","");
		let entitiesContentUp = "entities {";
		let entitiesContent = "";
		let entitiesContentDown = "\n}"
		for(let i = 0;i < Object.keys(entitylist).length;++i){
			let entity = "";
			let entityUp = "\n\tentity "+Object.keys(entitylist)[i];
			let entityDown = "";
			if(entitylist[Object.keys(entitylist)[i]].length!==0){
				entityUp+=" {\n";
				entityDown+="\t}";
				for(let j = 0;j < entitylist[Object.keys(entitylist)[i]].length;++j){
					entity+="\t\t"+entitylist[Object.keys(entitylist)[i]][j]+'\n';
				}
			}
			
			entity = entityUp+entity+entityDown;
			entitiesContent += entity;
		}
		entitiesContent = entitiesContentUp + entitiesContent + entitiesContentDown;
		console.log(entitiesContent);


		let rules = "";
		let ruleOutBraceUp = `rules {
	`;
		let ruleOutBraceDown = `}`;
		for(let i = 0;i < ruleNodes.length;++i){
			rules += backtrackFromRule(ruleNodes[i]);
		}
		rules = ruleOutBraceUp + rules + ruleOutBraceDown;
		console.log(rules);
	}


	function addNode(){
		var theResponse = window.prompt("请输入你要添加的节点（v:变量，op:操作, r: 规则， np: 新建属性, ns: 添加字段）","");
		if(theResponse=='v'){
			var varTitle = window.prompt("请输入变量/常量名（num:变量，string: 字符串，xxx:自定义）","");

			var node = new DefaultNodeModel({
				name: varTitle,
				color: 'rgb(0,0,255)'
			});
			node.setPosition(200, 100);
			var varContent = window.prompt("请输入变量/常量内容","");
			node.addOutPort(varContent);
			model.addNode(node);
		}else if(theResponse=='op'){
			var varTitle = window.prompt("请输入操作名（>=:大于等于，<=:小于等于,in:在...内,not in:不在...内 and: 且,interval: 区间操作符）","");
			if(varTitle === ">="){
				varTitle = ">=";
			}else if(varTitle=== "<="){
				varTitle = "<=";
			}else if(varTitle==="in"){
				varTitle = "in";
			}else if(varTitle==="&"){
				varTitle = "and";
			}else if(varTitle==="interval"){
				varTitle = window.prompt("请输入操作两个区间操作符（例如：<,<=）","");
				var node = new DefaultNodeModel({
					name: "interval",
					color: 'rgb(0,192,255)'
				});
				node.setPosition(200, 100);
				node.addInPort(varTitle.split(',')[0]);
				node.addInPort('中间值');
				node.addInPort(varTitle.split(',')[1]==varTitle.split(',')[0]?varTitle.split(',')[1]+' ':varTitle.split(',')[1]);
				node.addOutPort('结果');
				model.addNode(node);
				return ;
			}
			var node = new DefaultNodeModel({
				name: varTitle,
				color: 'rgb(0,192,255)'
			});
			node.setPosition(200, 100);
			node.addInPort('左值');
			node.addInPort('右值');
			node.addOutPort('结果');
			model.addNode(node);
		}else if(theResponse==='r'){
			var varTitle = window.prompt("请输入规则名","");
			var node = new DefaultNodeModel({
				name: 'rule',
				color: 'rgb(192,255,0)'
			});
			node.setPosition(200, 100);
			node.addInPort(varTitle);
			model.addNode(node);
			ruleNodes.push(node);
		}else if(theResponse==='np'){
			var varTitle = window.prompt("请输入属性名","");
			if(entitylist[varTitle]!==undefined){
				window.alert("属性名已存在");
			}else if(varTitle!==""){
				entitylist[varTitle] = [];
				window.alert("属性名创建成功");
			}
		}else if(theResponse==='ns'){
			var varTitle = window.prompt("请输入隶属的属性名","");
			if(varTitle===""){
				window.alert("属性名为空，直接填入字段名");
				var segment = window.prompt("请输入字段名","");
				var type_segement = window.prompt("请输入字段名类型（如果是set，则填写set[属性名]）","")
				entitylist[type_segement!==""?segment+" is "+type_segement:segment]=[];
			}else if(entitylist[varTitle]!==undefined){
				var segment = window.prompt("请输入字段名","");
				var type_segement = window.prompt("请输入字段名类型（如果是set，则填写set[属性名]）","")
				entitylist[varTitle].push(type_segement!==""?segment+" is "+type_segement:segment);
			}else{
				window.alert("没有这个属性");
			}
		}
		console.log(entitylist);
		console.log("AddNode");
	}

	function backTrackPrevNode(curNode:DefaultNodeModel|any){
		let name = curNode.getOptions()['name'];
		
		if(name===">="||name==="<="||name==="and"||name=="in"||name=="not in"){
			var leftStr = "";
			var rightStr = "";
			let leftlinkObj = curNode.getInPorts()[0].links;
			let leftLinkPropStr = Object.keys(leftlinkObj)[0];
			let leftLinkModel = leftlinkObj[leftLinkPropStr];
			let leftPrevNode = leftLinkModel.getSourcePort().getParent();
			leftStr = backTrackPrevNode(leftPrevNode);

			let rightlinkObj = curNode.getInPorts()[1].links;
			let rightLinkPropStr = Object.keys(rightlinkObj)[0];
			let rightLinkModel = rightlinkObj[rightLinkPropStr];
			let rightPrevNode = rightLinkModel.getSourcePort().getParent();
			rightStr = backTrackPrevNode(rightPrevNode);

			return leftStr+" "+name+" "+rightStr;
		}else if(name==="num"||name==="string"){
			return curNode.getOutPorts()[0].getName();
		}else if(name==="interval"){
			var leftStr = "";
			var rightStr = "";
			var middleStr = "";
			let leftlinkObj = curNode.getInPorts()[0].links;
			let leftLinkPropStr = Object.keys(leftlinkObj)[0];
			let leftLinkModel = leftlinkObj[leftLinkPropStr];
			let leftPrevNode = leftLinkModel.getSourcePort().getParent();
			leftStr = backTrackPrevNode(leftPrevNode);

			let middlelinkObj = curNode.getInPorts()[1].links;
			let middleLinkPropStr = Object.keys(middlelinkObj)[0];
			let middleLinkModel = middlelinkObj[middleLinkPropStr];
			let middlePrevNode = middleLinkModel.getSourcePort().getParent();
			middleStr = backTrackPrevNode(middlePrevNode);

			let rightlinkObj = curNode.getInPorts()[2].links;
			let rightLinkPropStr = Object.keys(rightlinkObj)[0];
			let rightLinkModel = rightlinkObj[rightLinkPropStr];
			let rightPrevNode = rightLinkModel.getSourcePort().getParent();
			rightStr = backTrackPrevNode(rightPrevNode);

			return leftStr+curNode.getInPorts()[0].getName()+middleStr+curNode.getInPorts()[2].getName()+rightStr;
		}
		let result = curNode.getOptions()['name'];
		if(curNode.getOutPorts()[0].getName()!=""){
			result += "."+curNode.getOutPorts()[0].getName();
		}
		return result;	
	}
	function backtrackFromRule(ruleNode:DefaultNodeModel){
		

		let ruleContent = "";
		let linkObj = ruleNode.getInPorts()[0].links;
		if(Object.keys(linkObj).length==0){
			return "";
		}
		for(let i = 0;i < Object.keys(linkObj).length;++i){
			let linkPropStr = Object.keys(linkObj)[i];
			let linkModel = linkObj[linkPropStr];
			let prevNode = linkModel.getSourcePort().getParent();
			ruleContent += backTrackPrevNode(prevNode)+'\n\t\t';
		}
		let ruleAroundUp = `rule `+ruleNode.getInPorts()[0].getName()+` {
		`;
		let ruleAroundDown = "}\n";
		ruleContent = ruleAroundUp + ruleContent + ruleAroundDown;
		return ruleContent;
	}

	return (
        <Container>
            <FullscreenCanvas>
                <CanvasWidget engine={engine}>
                </CanvasWidget>
            </FullscreenCanvas>
        </Container>
	);
};