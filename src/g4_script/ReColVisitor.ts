// Generated from g4_script/ReCol.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ReColParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ReColVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `newObject`
	 * labeled alternative in `ReColParser.obj`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewObject?: (ctx: NewObjectContext) => Result;

	/**
	 * Visit a parse tree produced by the `newAttribute`
	 * labeled alternative in `ReColParser.obj`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewAttribute?: (ctx: NewAttributeContext) => Result;

	/**
	 * Visit a parse tree produced by the `newValue`
	 * labeled alternative in `ReColParser.obj`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewValue?: (ctx: NewValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `assignValue`
	 * labeled alternative in `ReColParser.actionStat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignValue?: (ctx: AssignValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `assignRuler`
	 * labeled alternative in `ReColParser.actionStat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignRuler?: (ctx: AssignRulerContext) => Result;

	/**
	 * Visit a parse tree produced by the `calNum`
	 * labeled alternative in `ReColParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalNum?: (ctx: CalNumContext) => Result;

	/**
	 * Visit a parse tree produced by the `calBool`
	 * labeled alternative in `ReColParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalBool?: (ctx: CalBoolContext) => Result;

	/**
	 * Visit a parse tree produced by the `negate`
	 * labeled alternative in `ReColParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNegate?: (ctx: NegateContext) => Result;

	/**
	 * Visit a parse tree produced by the `id`
	 * labeled alternative in `ReColParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId?: (ctx: IdContext) => Result;

	/**
	 * Visit a parse tree produced by the `Decimal`
	 * labeled alternative in `ReColParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimal?: (ctx: DecimalContext) => Result;

	/**
	 * Visit a parse tree produced by the `bool`
	 * labeled alternative in `ReColParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool?: (ctx: BoolContext) => Result;

	/**
	 * Visit a parse tree produced by the `string`
	 * labeled alternative in `ReColParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by the `parens`
	 * labeled alternative in `ReColParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParens?: (ctx: ParensContext) => Result;

	/**
	 * Visit a parse tree produced by the `checkLarger`
	 * labeled alternative in `ReColParser.boolexpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCheckLarger?: (ctx: CheckLargerContext) => Result;

	/**
	 * Visit a parse tree produced by the `checkGE`
	 * labeled alternative in `ReColParser.boolexpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCheckGE?: (ctx: CheckGEContext) => Result;

	/**
	 * Visit a parse tree produced by the `checkLess`
	 * labeled alternative in `ReColParser.boolexpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCheckLess?: (ctx: CheckLessContext) => Result;

	/**
	 * Visit a parse tree produced by the `checkLE`
	 * labeled alternative in `ReColParser.boolexpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCheckLE?: (ctx: CheckLEContext) => Result;

	/**
	 * Visit a parse tree produced by the `checkequal`
	 * labeled alternative in `ReColParser.boolexpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCheckequal?: (ctx: CheckequalContext) => Result;

	/**
	 * Visit a parse tree produced by the `checkNE`
	 * labeled alternative in `ReColParser.boolexpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCheckNE?: (ctx: CheckNEContext) => Result;

	/**
	 * Visit a parse tree produced by the `checkBoolExpr`
	 * labeled alternative in `ReColParser.boolexpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCheckBoolExpr?: (ctx: CheckBoolExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `AndRule`
	 * labeled alternative in `ReColParser.rulerExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndRule?: (ctx: AndRuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `OrRule`
	 * labeled alternative in `ReColParser.rulerExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrRule?: (ctx: OrRuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `XorRule`
	 * labeled alternative in `ReColParser.rulerExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXorRule?: (ctx: XorRuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `NotRule`
	 * labeled alternative in `ReColParser.rulerExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotRule?: (ctx: NotRuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `FollowRule`
	 * labeled alternative in `ReColParser.rulerExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFollowRule?: (ctx: FollowRuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `UntilRule`
	 * labeled alternative in `ReColParser.rulerExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUntilRule?: (ctx: UntilRuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `ParentsRule`
	 * labeled alternative in `ReColParser.rulerExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParentsRule?: (ctx: ParentsRuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprRule`
	 * labeled alternative in `ReColParser.rulerExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprRule?: (ctx: ExprRuleContext) => Result;

	/**
	 * Visit a parse tree produced by `ReColParser.input`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInput?: (ctx: InputContext) => Result;

	/**
	 * Visit a parse tree produced by `ReColParser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by `ReColParser.entityDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityDecl?: (ctx: EntityDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `ReColParser.obj`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObj?: (ctx: ObjContext) => Result;

	/**
	 * Visit a parse tree produced by `ReColParser.entityRule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityRule?: (ctx: EntityRuleContext) => Result;

	/**
	 * Visit a parse tree produced by `ReColParser.actionStat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActionStat?: (ctx: ActionStatContext) => Result;

	/**
	 * Visit a parse tree produced by `ReColParser.rulerExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRulerExpr?: (ctx: RulerExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ReColParser.boolexpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolexpr?: (ctx: BoolexprContext) => Result;

	/**
	 * Visit a parse tree produced by `ReColParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;
}

