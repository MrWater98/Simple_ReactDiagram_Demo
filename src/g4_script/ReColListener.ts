// Generated from g4_script/ReCol.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { NewObjectContext } from "./ReColParser";
import { NewAttributeContext } from "./ReColParser";
import { NewValueContext } from "./ReColParser";
import { AssignValueContext } from "./ReColParser";
import { AssignRulerContext } from "./ReColParser";
import { CalNumContext } from "./ReColParser";
import { CalBoolContext } from "./ReColParser";
import { NegateContext } from "./ReColParser";
import { IdContext } from "./ReColParser";
import { DecimalContext } from "./ReColParser";
import { BoolContext } from "./ReColParser";
import { StringContext } from "./ReColParser";
import { ParensContext } from "./ReColParser";
import { CheckLargerContext } from "./ReColParser";
import { CheckGEContext } from "./ReColParser";
import { CheckLessContext } from "./ReColParser";
import { CheckLEContext } from "./ReColParser";
import { CheckequalContext } from "./ReColParser";
import { CheckNEContext } from "./ReColParser";
import { CheckBoolExprContext } from "./ReColParser";
import { AndRuleContext } from "./ReColParser";
import { OrRuleContext } from "./ReColParser";
import { XorRuleContext } from "./ReColParser";
import { NotRuleContext } from "./ReColParser";
import { FollowRuleContext } from "./ReColParser";
import { UntilRuleContext } from "./ReColParser";
import { ParentsRuleContext } from "./ReColParser";
import { ExprRuleContext } from "./ReColParser";
import { InputContext } from "./ReColParser";
import { NameContext } from "./ReColParser";
import { EntityDeclContext } from "./ReColParser";
import { ObjContext } from "./ReColParser";
import { EntityRuleContext } from "./ReColParser";
import { ActionStatContext } from "./ReColParser";
import { RulerExprContext } from "./ReColParser";
import { BoolexprContext } from "./ReColParser";
import { ExprContext } from "./ReColParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ReColParser`.
 */
export interface ReColListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `newObject`
	 * labeled alternative in `ReColParser.obj`.
	 * @param ctx the parse tree
	 */
	enterNewObject?: (ctx: NewObjectContext) => void;
	/**
	 * Exit a parse tree produced by the `newObject`
	 * labeled alternative in `ReColParser.obj`.
	 * @param ctx the parse tree
	 */
	exitNewObject?: (ctx: NewObjectContext) => void;

	/**
	 * Enter a parse tree produced by the `newAttribute`
	 * labeled alternative in `ReColParser.obj`.
	 * @param ctx the parse tree
	 */
	enterNewAttribute?: (ctx: NewAttributeContext) => void;
	/**
	 * Exit a parse tree produced by the `newAttribute`
	 * labeled alternative in `ReColParser.obj`.
	 * @param ctx the parse tree
	 */
	exitNewAttribute?: (ctx: NewAttributeContext) => void;

	/**
	 * Enter a parse tree produced by the `newValue`
	 * labeled alternative in `ReColParser.obj`.
	 * @param ctx the parse tree
	 */
	enterNewValue?: (ctx: NewValueContext) => void;
	/**
	 * Exit a parse tree produced by the `newValue`
	 * labeled alternative in `ReColParser.obj`.
	 * @param ctx the parse tree
	 */
	exitNewValue?: (ctx: NewValueContext) => void;

	/**
	 * Enter a parse tree produced by the `assignValue`
	 * labeled alternative in `ReColParser.actionStat`.
	 * @param ctx the parse tree
	 */
	enterAssignValue?: (ctx: AssignValueContext) => void;
	/**
	 * Exit a parse tree produced by the `assignValue`
	 * labeled alternative in `ReColParser.actionStat`.
	 * @param ctx the parse tree
	 */
	exitAssignValue?: (ctx: AssignValueContext) => void;

	/**
	 * Enter a parse tree produced by the `assignRuler`
	 * labeled alternative in `ReColParser.actionStat`.
	 * @param ctx the parse tree
	 */
	enterAssignRuler?: (ctx: AssignRulerContext) => void;
	/**
	 * Exit a parse tree produced by the `assignRuler`
	 * labeled alternative in `ReColParser.actionStat`.
	 * @param ctx the parse tree
	 */
	exitAssignRuler?: (ctx: AssignRulerContext) => void;

	/**
	 * Enter a parse tree produced by the `calNum`
	 * labeled alternative in `ReColParser.expr`.
	 * @param ctx the parse tree
	 */
	enterCalNum?: (ctx: CalNumContext) => void;
	/**
	 * Exit a parse tree produced by the `calNum`
	 * labeled alternative in `ReColParser.expr`.
	 * @param ctx the parse tree
	 */
	exitCalNum?: (ctx: CalNumContext) => void;

	/**
	 * Enter a parse tree produced by the `calBool`
	 * labeled alternative in `ReColParser.expr`.
	 * @param ctx the parse tree
	 */
	enterCalBool?: (ctx: CalBoolContext) => void;
	/**
	 * Exit a parse tree produced by the `calBool`
	 * labeled alternative in `ReColParser.expr`.
	 * @param ctx the parse tree
	 */
	exitCalBool?: (ctx: CalBoolContext) => void;

	/**
	 * Enter a parse tree produced by the `negate`
	 * labeled alternative in `ReColParser.expr`.
	 * @param ctx the parse tree
	 */
	enterNegate?: (ctx: NegateContext) => void;
	/**
	 * Exit a parse tree produced by the `negate`
	 * labeled alternative in `ReColParser.expr`.
	 * @param ctx the parse tree
	 */
	exitNegate?: (ctx: NegateContext) => void;

	/**
	 * Enter a parse tree produced by the `id`
	 * labeled alternative in `ReColParser.expr`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by the `id`
	 * labeled alternative in `ReColParser.expr`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;

	/**
	 * Enter a parse tree produced by the `Decimal`
	 * labeled alternative in `ReColParser.expr`.
	 * @param ctx the parse tree
	 */
	enterDecimal?: (ctx: DecimalContext) => void;
	/**
	 * Exit a parse tree produced by the `Decimal`
	 * labeled alternative in `ReColParser.expr`.
	 * @param ctx the parse tree
	 */
	exitDecimal?: (ctx: DecimalContext) => void;

	/**
	 * Enter a parse tree produced by the `bool`
	 * labeled alternative in `ReColParser.expr`.
	 * @param ctx the parse tree
	 */
	enterBool?: (ctx: BoolContext) => void;
	/**
	 * Exit a parse tree produced by the `bool`
	 * labeled alternative in `ReColParser.expr`.
	 * @param ctx the parse tree
	 */
	exitBool?: (ctx: BoolContext) => void;

	/**
	 * Enter a parse tree produced by the `string`
	 * labeled alternative in `ReColParser.expr`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by the `string`
	 * labeled alternative in `ReColParser.expr`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by the `parens`
	 * labeled alternative in `ReColParser.expr`.
	 * @param ctx the parse tree
	 */
	enterParens?: (ctx: ParensContext) => void;
	/**
	 * Exit a parse tree produced by the `parens`
	 * labeled alternative in `ReColParser.expr`.
	 * @param ctx the parse tree
	 */
	exitParens?: (ctx: ParensContext) => void;

	/**
	 * Enter a parse tree produced by the `checkLarger`
	 * labeled alternative in `ReColParser.boolexpr`.
	 * @param ctx the parse tree
	 */
	enterCheckLarger?: (ctx: CheckLargerContext) => void;
	/**
	 * Exit a parse tree produced by the `checkLarger`
	 * labeled alternative in `ReColParser.boolexpr`.
	 * @param ctx the parse tree
	 */
	exitCheckLarger?: (ctx: CheckLargerContext) => void;

	/**
	 * Enter a parse tree produced by the `checkGE`
	 * labeled alternative in `ReColParser.boolexpr`.
	 * @param ctx the parse tree
	 */
	enterCheckGE?: (ctx: CheckGEContext) => void;
	/**
	 * Exit a parse tree produced by the `checkGE`
	 * labeled alternative in `ReColParser.boolexpr`.
	 * @param ctx the parse tree
	 */
	exitCheckGE?: (ctx: CheckGEContext) => void;

	/**
	 * Enter a parse tree produced by the `checkLess`
	 * labeled alternative in `ReColParser.boolexpr`.
	 * @param ctx the parse tree
	 */
	enterCheckLess?: (ctx: CheckLessContext) => void;
	/**
	 * Exit a parse tree produced by the `checkLess`
	 * labeled alternative in `ReColParser.boolexpr`.
	 * @param ctx the parse tree
	 */
	exitCheckLess?: (ctx: CheckLessContext) => void;

	/**
	 * Enter a parse tree produced by the `checkLE`
	 * labeled alternative in `ReColParser.boolexpr`.
	 * @param ctx the parse tree
	 */
	enterCheckLE?: (ctx: CheckLEContext) => void;
	/**
	 * Exit a parse tree produced by the `checkLE`
	 * labeled alternative in `ReColParser.boolexpr`.
	 * @param ctx the parse tree
	 */
	exitCheckLE?: (ctx: CheckLEContext) => void;

	/**
	 * Enter a parse tree produced by the `checkequal`
	 * labeled alternative in `ReColParser.boolexpr`.
	 * @param ctx the parse tree
	 */
	enterCheckequal?: (ctx: CheckequalContext) => void;
	/**
	 * Exit a parse tree produced by the `checkequal`
	 * labeled alternative in `ReColParser.boolexpr`.
	 * @param ctx the parse tree
	 */
	exitCheckequal?: (ctx: CheckequalContext) => void;

	/**
	 * Enter a parse tree produced by the `checkNE`
	 * labeled alternative in `ReColParser.boolexpr`.
	 * @param ctx the parse tree
	 */
	enterCheckNE?: (ctx: CheckNEContext) => void;
	/**
	 * Exit a parse tree produced by the `checkNE`
	 * labeled alternative in `ReColParser.boolexpr`.
	 * @param ctx the parse tree
	 */
	exitCheckNE?: (ctx: CheckNEContext) => void;

	/**
	 * Enter a parse tree produced by the `checkBoolExpr`
	 * labeled alternative in `ReColParser.boolexpr`.
	 * @param ctx the parse tree
	 */
	enterCheckBoolExpr?: (ctx: CheckBoolExprContext) => void;
	/**
	 * Exit a parse tree produced by the `checkBoolExpr`
	 * labeled alternative in `ReColParser.boolexpr`.
	 * @param ctx the parse tree
	 */
	exitCheckBoolExpr?: (ctx: CheckBoolExprContext) => void;

	/**
	 * Enter a parse tree produced by the `AndRule`
	 * labeled alternative in `ReColParser.rulerExpr`.
	 * @param ctx the parse tree
	 */
	enterAndRule?: (ctx: AndRuleContext) => void;
	/**
	 * Exit a parse tree produced by the `AndRule`
	 * labeled alternative in `ReColParser.rulerExpr`.
	 * @param ctx the parse tree
	 */
	exitAndRule?: (ctx: AndRuleContext) => void;

	/**
	 * Enter a parse tree produced by the `OrRule`
	 * labeled alternative in `ReColParser.rulerExpr`.
	 * @param ctx the parse tree
	 */
	enterOrRule?: (ctx: OrRuleContext) => void;
	/**
	 * Exit a parse tree produced by the `OrRule`
	 * labeled alternative in `ReColParser.rulerExpr`.
	 * @param ctx the parse tree
	 */
	exitOrRule?: (ctx: OrRuleContext) => void;

	/**
	 * Enter a parse tree produced by the `XorRule`
	 * labeled alternative in `ReColParser.rulerExpr`.
	 * @param ctx the parse tree
	 */
	enterXorRule?: (ctx: XorRuleContext) => void;
	/**
	 * Exit a parse tree produced by the `XorRule`
	 * labeled alternative in `ReColParser.rulerExpr`.
	 * @param ctx the parse tree
	 */
	exitXorRule?: (ctx: XorRuleContext) => void;

	/**
	 * Enter a parse tree produced by the `NotRule`
	 * labeled alternative in `ReColParser.rulerExpr`.
	 * @param ctx the parse tree
	 */
	enterNotRule?: (ctx: NotRuleContext) => void;
	/**
	 * Exit a parse tree produced by the `NotRule`
	 * labeled alternative in `ReColParser.rulerExpr`.
	 * @param ctx the parse tree
	 */
	exitNotRule?: (ctx: NotRuleContext) => void;

	/**
	 * Enter a parse tree produced by the `FollowRule`
	 * labeled alternative in `ReColParser.rulerExpr`.
	 * @param ctx the parse tree
	 */
	enterFollowRule?: (ctx: FollowRuleContext) => void;
	/**
	 * Exit a parse tree produced by the `FollowRule`
	 * labeled alternative in `ReColParser.rulerExpr`.
	 * @param ctx the parse tree
	 */
	exitFollowRule?: (ctx: FollowRuleContext) => void;

	/**
	 * Enter a parse tree produced by the `UntilRule`
	 * labeled alternative in `ReColParser.rulerExpr`.
	 * @param ctx the parse tree
	 */
	enterUntilRule?: (ctx: UntilRuleContext) => void;
	/**
	 * Exit a parse tree produced by the `UntilRule`
	 * labeled alternative in `ReColParser.rulerExpr`.
	 * @param ctx the parse tree
	 */
	exitUntilRule?: (ctx: UntilRuleContext) => void;

	/**
	 * Enter a parse tree produced by the `ParentsRule`
	 * labeled alternative in `ReColParser.rulerExpr`.
	 * @param ctx the parse tree
	 */
	enterParentsRule?: (ctx: ParentsRuleContext) => void;
	/**
	 * Exit a parse tree produced by the `ParentsRule`
	 * labeled alternative in `ReColParser.rulerExpr`.
	 * @param ctx the parse tree
	 */
	exitParentsRule?: (ctx: ParentsRuleContext) => void;

	/**
	 * Enter a parse tree produced by the `ExprRule`
	 * labeled alternative in `ReColParser.rulerExpr`.
	 * @param ctx the parse tree
	 */
	enterExprRule?: (ctx: ExprRuleContext) => void;
	/**
	 * Exit a parse tree produced by the `ExprRule`
	 * labeled alternative in `ReColParser.rulerExpr`.
	 * @param ctx the parse tree
	 */
	exitExprRule?: (ctx: ExprRuleContext) => void;

	/**
	 * Enter a parse tree produced by `ReColParser.input`.
	 * @param ctx the parse tree
	 */
	enterInput?: (ctx: InputContext) => void;
	/**
	 * Exit a parse tree produced by `ReColParser.input`.
	 * @param ctx the parse tree
	 */
	exitInput?: (ctx: InputContext) => void;

	/**
	 * Enter a parse tree produced by `ReColParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `ReColParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `ReColParser.entityDecl`.
	 * @param ctx the parse tree
	 */
	enterEntityDecl?: (ctx: EntityDeclContext) => void;
	/**
	 * Exit a parse tree produced by `ReColParser.entityDecl`.
	 * @param ctx the parse tree
	 */
	exitEntityDecl?: (ctx: EntityDeclContext) => void;

	/**
	 * Enter a parse tree produced by `ReColParser.obj`.
	 * @param ctx the parse tree
	 */
	enterObj?: (ctx: ObjContext) => void;
	/**
	 * Exit a parse tree produced by `ReColParser.obj`.
	 * @param ctx the parse tree
	 */
	exitObj?: (ctx: ObjContext) => void;

	/**
	 * Enter a parse tree produced by `ReColParser.entityRule`.
	 * @param ctx the parse tree
	 */
	enterEntityRule?: (ctx: EntityRuleContext) => void;
	/**
	 * Exit a parse tree produced by `ReColParser.entityRule`.
	 * @param ctx the parse tree
	 */
	exitEntityRule?: (ctx: EntityRuleContext) => void;

	/**
	 * Enter a parse tree produced by `ReColParser.actionStat`.
	 * @param ctx the parse tree
	 */
	enterActionStat?: (ctx: ActionStatContext) => void;
	/**
	 * Exit a parse tree produced by `ReColParser.actionStat`.
	 * @param ctx the parse tree
	 */
	exitActionStat?: (ctx: ActionStatContext) => void;

	/**
	 * Enter a parse tree produced by `ReColParser.rulerExpr`.
	 * @param ctx the parse tree
	 */
	enterRulerExpr?: (ctx: RulerExprContext) => void;
	/**
	 * Exit a parse tree produced by `ReColParser.rulerExpr`.
	 * @param ctx the parse tree
	 */
	exitRulerExpr?: (ctx: RulerExprContext) => void;

	/**
	 * Enter a parse tree produced by `ReColParser.boolexpr`.
	 * @param ctx the parse tree
	 */
	enterBoolexpr?: (ctx: BoolexprContext) => void;
	/**
	 * Exit a parse tree produced by `ReColParser.boolexpr`.
	 * @param ctx the parse tree
	 */
	exitBoolexpr?: (ctx: BoolexprContext) => void;

	/**
	 * Enter a parse tree produced by `ReColParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `ReColParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;
}

