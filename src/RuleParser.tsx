import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import {ReColLexer} from './g4_script/ReColLexer'
import {ActionStatContext, AndRuleContext, AssignRulerContext, BoolexprContext, CheckGEContext, DecimalContext, EntityDeclContext, EntityRuleContext, ExprContext, ExprRuleContext, IdContext, NameContext, ReColParser, RulerExprContext} from './g4_script/ReColParser'
import {AbstractParseTreeVisitor} from 'antlr4ts/tree/AbstractParseTreeVisitor'
import {ReColVisitor} from './g4_script/ReColVisitor'
import createEngine, { DiagramModel, DefaultNodeModel, DiagramEngine} from '@projectstorm/react-diagrams';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';


class Direction{
    public up:number = Number.MAX_VALUE;
    public down:number = Number.MIN_VALUE;
    public left:number = Number.MAX_VALUE;
    public right:number = 0;
}

class Position{
    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }
    public x:number = 0;
    public y:number = 0;
}

export default async (engine,model) => {

    // Create the lexer and parser
    // 通过antlr4ts的API创建词法分析和解析器
    let inputStream = new ANTLRInputStream("regulation: HELLOWORLD\nEntities {\nAsset {\n\t\tid\n\t\tname\n\t\tvalue\n\t}\n}\nRules {\n\tRule1=[Asset.value>=100 AND Asset.value>=100 AND Asset.value>=100 AND Asset.value>=100 AND Asset.value>=100]\n\tRule2=[Asset.value>=100]\n\tRule3=[Asset.value>=100]\n\tRule4=[Asset.value>=100]\n\tRule4=[Asset.value>=100]\n}");
    let lexer = new ReColLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new ReColParser(tokenStream);

    //得到完整的语法树
    let tree = parser.input();


    class ruleVisitor extends AbstractParseTreeVisitor<object> implements ReColVisitor<object> {

        constructor(public engine:DiagramEngine,public model: DiagramModel){
            super();
            this.tree_instr = new Array<String>();
            this.instr_arr = new Array<object>();
            this.treeStr = '';
            this.curDepth = -1;
            this.lastTop = 0;
            this.lastInstr = 0;
        }
        //这个指令数组存储所有可能会产生的动作，包括所有的移动方向：左上，左下，左；渲染节点，渲染规则节点等，具体可以看调试信息
        private instr_arr:Array<object>;
        //树指令：发送给后台API的指令，指令的组成方式是(currentNodeName, *Children)
        public tree_instr:Array<String>;
        //树字串：单个的发送给后台API的指令
        private treeStr:String;

        //当前深度
        private curDepth:number;
        //
        private lastTop:number;
        //因为instr_arr中包含着所有的规则(规则1，规则2以及规则3的指令，所以visit这个过程的时候，需要记录上一次访问到的位置)
        private lastInstr:number;



        defaultResult(){
            return {};
        }
        //{regulation,HELLOWORLD}
        visitName(context: NameContext){
            //获取这个规则的ID和Name，例如:Regulation:HelloWorld
            let id = context.getChild(0).toStringTree();
            let name = context.getChild(2).toStringTree();
            return {id:name};
        }
        //{Entity:{{Asset:{id,name,value},Asset:{id,name,value},...}}}
        //获取EntityDecl的部分，详见helloworld预览图像解析
        visitEntityDecl(context: EntityDeclContext){
            let id = context.getChild(0).toStringTree();
            let inBrace_level1 = false;
            let entityList = [];
            for(let i = 1;i < context.childCount;++i){
                if(context.getChild(i).toStringTree()==='{' && !inBrace_level1){
                    inBrace_level1 = true;
                }
                if(context.getChild(i).toStringTree()!=='\n' && inBrace_level1){
                    let tempObj = context.getChild(i);
                    let assetName = '';
                    let inBrace_level2 = false;
                    var assetList=new Array();
                    
                    for(let j = 0;j < tempObj.childCount;++j){
                        if(tempObj.getChild(j).toStringTree()==='Asset'&&!inBrace_level2){
                            assetName = tempObj.getChild(j).toStringTree();
                        }
                        if(tempObj.getChild(j).toStringTree()==='{'&&!inBrace_level2){
                            inBrace_level2 = true;
                        }
                        else if(tempObj.getChild(j).toStringTree()==='}'&&inBrace_level2){
                            entityList.push({assetName,assetList});
                            inBrace_level2 = false;
                        }else if(tempObj.getChild(j).toStringTree()!=='\n'&&inBrace_level2)
                        {
                            assetList.push((tempObj.getChild(j).getChild(0).toStringTree()==='\n')?(tempObj.getChild(j).getChild(1).toStringTree()):
                                (tempObj.getChild(j).getChild(0).toStringTree()));
                        }
                    }
                    entityList.push(assetList);
                }
                if(context.getChild(i).toStringTree()==="}" && inBrace_level1){
                    inBrace_level1 = false;
                }
            }

            return {"Entities":entityList};
        }
        //这里开始解析EntityRule的实例
        visitEntityRule(context: EntityRuleContext){
            console.log("Entity Rule");
            for(let i = 0;i < context.actionStat().length;++i){
                this.visit(context.actionStat(i));
            }
            
            return {};
        }
        //进入了第x个Rule的位置
        visitAssignRuler(context: AssignRulerContext){
            for(let i = 0;i < context.childCount;++i){
                this.visit(context.getChild(i));
            }
            //如果当前的treeStr已经构建出来，并且深度又回到了0(深度优先遍历)
            if(this.treeStr!==''&&this.curDepth===0)
            {
                //把当前的构建树的指令放入tree_instr
                this.tree_instr.push(this.treeStr);
                //将树的字串归为0
                this.treeStr = '';
                //让当前的深度变为-1
                this.curDepth -= 1;
            }
            //往指令栈中推入out(出栈)
            this.instr_arr.push({'instr':'out'});
            return {};
        }
        visitTerminal(context: TerminalNode){
            if(context.text.substr(0,4)==="Rule"){
                this.curDepth+=1;
                //参见树形状，当当前Depth为0的时候，在字符串中加入根节点
                if(this.curDepth===0){
                    this.treeStr += 'Tree(\"root\")';
                }

                //1. 制作rule节点
                var node = new DefaultNodeModel(context.text, 'rgb(192,255,0)');
                node.addInPort("结果汇总");
                this.instr_arr.push({'render_rule':node});
            }
            return {};
        }
        // root
        visitExprRule(context: ExprRuleContext){
            //代表进入ExprRule节点，因为本节点无有用信息，所以不参与制作任何节点信息
            this.visit(context.getChild(0)); 
            return {};
        }
        
        visitAndRule(context: AndRuleContext){
            console.log("And Rule");
            //0. 制作当前节点，打入渲染指令
            var node = new DefaultNodeModel('且', 'rgb(0,192,255)');
            node.addInPort('左值');
            node.addInPort('右值');
            node.addOutPort('结果');
            //1. 将本节点推入instr_arr栈中
            this.instr_arr.push({'render':node});
            //2. 当前深度+=1
            this.curDepth+=1;
            //3. 当前树的子串增加一个新的孩子，命名为m(middle)
            this.treeStr = this.treeStr.slice(0,this.treeStr.length-this.curDepth)
                    +',Tree(\"m\")'
                    +this.treeStr.slice(this.treeStr.length-this.curDepth,this.treeStr.length);
            

            //4. 访问第一个孩子，往栈中打入左上动作
            this.instr_arr.push({'instr':'leftup'});
            this.visit(context.getChild(0));

            //5. 访问第二个孩子，往栈中打入左下动作
            this.instr_arr.push({'instr':'leftdown'})
            this.visit(context.getChild(2));

            //6. 往栈中打入弹出动作
            this.instr_arr.push({'instr':'out'});


            if(this.treeStr!==''&&this.curDepth===0)
            {
                this.tree_instr.push(this.treeStr);
                this.treeStr = '';
            }
            this.curDepth -= 1;

            console.log("And");

            return {};
        }
        // middle
        visitCheckGE(context: CheckGEContext){
            //进入本层，curDepth增加1
            //插入本层的字符
            this.curDepth += 1;
            this.treeStr = this.treeStr.slice(0,this.treeStr.length-this.curDepth)
                                    +',Tree(\"m\")'
                                    +this.treeStr.slice(this.treeStr.length-this.curDepth,this.treeStr.length);


            //up for first child, down for third child, out for end this function
            //对于第一个孩子我们执行"左上"，第三个孩子我们执行"左下"，离开这个函数时我们执行"出"

            //1. 制作当前节点，打入渲染指令
            var node = new DefaultNodeModel('大于等于', 'rgb(0,192,255)');
            node.addInPort('左值');
            node.addInPort('右值');
            node.addOutPort('结果');
            this.instr_arr.push({'render':node});
            

            //2. 访问第一个孩子，往栈中打入左上动作
            this.instr_arr.push({'instr':'leftup'});
            this.visit(context.getChild(0));
            

            //3. 访问第二个孩子，往栈中打入左下动作
            this.instr_arr.push({'instr':'leftdown'})
            this.visit(context.getChild(2));

            //4. 往栈中打入弹出动作
            this.instr_arr.push({'instr':'out'});
            this.curDepth -= 1;
            
            console.log(">=");
            return {};
        }
        visitId(context: IdContext){
            //0. 同上
            this.curDepth += 1;
            this.treeStr = this.treeStr.slice(0,this.treeStr.length-this.curDepth)
                        +',Tree(\"leave\")'
                        +this.treeStr.slice(this.treeStr.length-this.curDepth,this.treeStr.length);

            //1. 制作并渲染并加入渲染动作
            let strTitle = '';
            let strValue = '';
            if(context.childCount>1){
                strTitle = context.getChild(0).text;
                strValue = context.getChild(2).text;
            }else{
                strTitle = context.getChild(0).text;
                strValue = 'value';
            }
            var node = new DefaultNodeModel(strTitle, 'rgb(0,0,255)');
            node.addOutPort('Value');
            this.instr_arr.push({'render':node});

            //2. 打入“出”指令
            this.instr_arr.push({'instr':'out'});
            this.curDepth -= 1;

            console.log("ID");
            return {};
        }

        visitDecimal(context: DecimalContext){
            //0. 同上
            this.curDepth += 1;
            this.treeStr = this.treeStr.slice(0,this.treeStr.length-this.curDepth)
                        +',Tree(\"leave\")'
                        +this.treeStr.slice(this.treeStr.length-this.curDepth,this.treeStr.length);
            //1. 制作节点
            var node = new DefaultNodeModel('Number', 'rgb(0,0,255)');
            node.addOutPort('100');
            node.setPosition(0,300);
            this.instr_arr.push({'render':node});

            //2. 添加out
            this.instr_arr.push({'instr':'out'});
            this.curDepth -= 1;

            console.log("Decimal");

            return {};
        }

        iter_instr(pos)
        {
            //1. 第一次遍历位置，我们所需要的offset
            let tempLeft = Number.MAX_VALUE;
            let tempUp = Number.MAX_VALUE;
            let tempDown = Number.MIN_VALUE;
            let offsetLeft = 100;
            let offsetUp = 60;
            for(let i = 0;i < Object.keys(pos).length;++i)
            {
                tempLeft = Math.min(tempLeft,pos[i][0]);
                tempUp = Math.min(tempUp,pos[i][1]);
                tempDown = Math.max(tempDown,pos[i][1]);
            }
            tempLeft-=offsetLeft;
            tempUp+=offsetUp+this.lastTop;

            //lastTop指的是上一次渲染的位置rule的位置，因为rule的位置需要不断下推，所以lastTop就随着rule的位置不断进行下推
            this.lastTop=tempDown+tempUp;

            let curInstrPos = 0;
            let virtualNodeStack = new Array<DefaultNodeModel>();
            let breakFlag = false;
            for(let i = this.lastInstr;i < this.instr_arr.length;++i){
                for(var j in this.instr_arr[i]){
                    if(j==='instr'){
                        if(this.instr_arr[i][j]==='out')
                        {
                            virtualNodeStack.pop();
                            if(virtualNodeStack.length===0)
                            {
                                this.lastInstr = i+1;
                                breakFlag = true;
                                break;
                            }
                        }
                    }
                    else if(j==='render_rule'){
                        //设置特殊的首位置，其他的位置都根据首位置的相对位置
                        this.instr_arr[i][j].setPosition(pos[curInstrPos][0]-tempLeft,pos[curInstrPos][1]+tempUp)
                        curInstrPos+=1;
                        model.addNode(this.instr_arr[i][j]);
                        virtualNodeStack.push(this.instr_arr[i][j]);
                    }
                    else if(j==='render'){
                        let topNode = virtualNodeStack[virtualNodeStack.length-1];
                        this.instr_arr[i][j].setPosition(pos[curInstrPos][0]-tempLeft,pos[curInstrPos][1]+tempUp);
                        curInstrPos+=1;
                        if(topNode.getInPorts().length==1){
                            var link = this.instr_arr[i][j].getPort('结果').link(topNode.getInPorts()[0]);
                            model.addLink(link);
                        }//如果不是，则先判断左值有没有连线，如果还没，就加上去
                        else if(Object.keys(topNode.getPort('左值').links).length===0){
                            var link = this.instr_arr[i][j].getOutPorts()[0].link(topNode.getPort('左值'));
                            model.addLink(link);
                        }else{//如果有，则连右边
                            var link = this.instr_arr[i][j].getOutPorts()[0].link(topNode.getPort('右值'));
                            model.addLink(link);
                        }
                        model.addNode(this.instr_arr[i][j]);
                        virtualNodeStack.push(this.instr_arr[i][j]);
                    }
                }
                if(breakFlag){break;}
            }
        }
    }
    
    
    let rulevisitor = new ruleVisitor(engine,model);

    let lastTop = 0;

    let lastInstr = 0;

    rulevisitor.visitEntityDecl(tree.entityDecl());

    rulevisitor.visitEntityRule(tree.entityRule());

    /*
    for(let i = 0;i < rulevisitor.tree_instr.length;++i){
        let pos = {};

        const response = await fetch("http://127.0.0.1:8802/get_user",{
            method: 'POST',
            body: JSON.stringify({
                'command':rulevisitor.tree_instr[i]
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(data){
            return data.json();
        }).then(function(data){
            console.log(data);
            pos = data;
        })

        rulevisitor.iter_instr(pos);
    }
    */
    return tree;
};
