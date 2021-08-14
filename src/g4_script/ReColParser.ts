// Generated from g4_script/ReCol.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ReColListener } from "./ReColListener";
import { ReColVisitor } from "./ReColVisitor";


export class ReColParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly BOOL = 26;
	public static readonly STRING = 27;
	public static readonly NEWLINE = 28;
	public static readonly WS = 29;
	public static readonly COMMENT = 30;
	public static readonly LINE_COMMENT = 31;
	public static readonly PYTHON_COMMENT = 32;
	public static readonly MUL = 33;
	public static readonly DIV = 34;
	public static readonly ADD = 35;
	public static readonly SUB = 36;
	public static readonly AND = 37;
	public static readonly OR = 38;
	public static readonly NOT = 39;
	public static readonly GT = 40;
	public static readonly GE = 41;
	public static readonly LT = 42;
	public static readonly LE = 43;
	public static readonly EQ = 44;
	public static readonly NE = 45;
	public static readonly DECIMAL = 46;
	public static readonly ID = 47;
	public static readonly RULE_input = 0;
	public static readonly RULE_name = 1;
	public static readonly RULE_entityDecl = 2;
	public static readonly RULE_obj = 3;
	public static readonly RULE_entityRule = 4;
	public static readonly RULE_actionStat = 5;
	public static readonly RULE_rulerExpr = 6;
	public static readonly RULE_boolexpr = 7;
	public static readonly RULE_expr = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"input", "name", "entityDecl", "obj", "entityRule", "actionStat", "rulerExpr", 
		"boolexpr", "expr",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'regulation'", "':'", "'Entities'", "'{'", "'}'", "'Rules'", 
		"'.'", "'='", "'['", "']'", "'AND'", "'OR'", "'^'", "'XOR'", "'NOT'", 
		"'Follow'", "'Until'", "'('", "')'", "'GT'", "'GE'", "'LT'", "'LE'", "'EQ'", 
		"'NE'", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'*'", "'/'", "'+'", "'-'", "'&'", "'|'", "'!'", "'>'", "'>='", 
		"'<'", "'<='", "'=='", "'!='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "BOOL", "STRING", 
		"NEWLINE", "WS", "COMMENT", "LINE_COMMENT", "PYTHON_COMMENT", "MUL", "DIV", 
		"ADD", "SUB", "AND", "OR", "NOT", "GT", "GE", "LT", "LE", "EQ", "NE", 
		"DECIMAL", "ID",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ReColParser._LITERAL_NAMES, ReColParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ReColParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ReCol.g4"; }

	// @Override
	public get ruleNames(): string[] { return ReColParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ReColParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ReColParser._ATN, this);
	}
	// @RuleVersion(0)
	public input(): InputContext {
		let _localctx: InputContext = new InputContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ReColParser.RULE_input);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 21;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 18;
					this.match(ReColParser.NEWLINE);
					}
					}
				}
				this.state = 23;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 24;
			this.name();
			this.state = 28;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ReColParser.NEWLINE) {
				{
				{
				this.state = 25;
				this.match(ReColParser.NEWLINE);
				}
				}
				this.state = 30;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 31;
			this.entityDecl();
			this.state = 35;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ReColParser.NEWLINE) {
				{
				{
				this.state = 32;
				this.match(ReColParser.NEWLINE);
				}
				}
				this.state = 37;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 38;
			this.entityRule();
			this.state = 42;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ReColParser.NEWLINE) {
				{
				{
				this.state = 39;
				this.match(ReColParser.NEWLINE);
				}
				}
				this.state = 44;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public name(): NameContext {
		let _localctx: NameContext = new NameContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ReColParser.RULE_name);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 48;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ReColParser.NEWLINE) {
				{
				{
				this.state = 45;
				this.match(ReColParser.NEWLINE);
				}
				}
				this.state = 50;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 51;
			this.match(ReColParser.T__0);
			this.state = 52;
			this.match(ReColParser.T__1);
			this.state = 53;
			this.match(ReColParser.ID);
			this.state = 57;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 54;
					this.match(ReColParser.NEWLINE);
					}
					}
				}
				this.state = 59;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public entityDecl(): EntityDeclContext {
		let _localctx: EntityDeclContext = new EntityDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ReColParser.RULE_entityDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this.match(ReColParser.T__2);
			this.state = 64;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ReColParser.NEWLINE) {
				{
				{
				this.state = 61;
				this.match(ReColParser.NEWLINE);
				}
				}
				this.state = 66;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 67;
			this.match(ReColParser.T__3);
			this.state = 71;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ReColParser.NEWLINE || _la === ReColParser.ID) {
				{
				{
				this.state = 68;
				this.obj();
				}
				}
				this.state = 73;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 74;
			this.match(ReColParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public obj(): ObjContext {
		let _localctx: ObjContext = new ObjContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ReColParser.RULE_obj);
		let _la: number;
		try {
			let _alt: number;
			this.state = 125;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				_localctx = new NewObjectContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 79;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ReColParser.NEWLINE) {
					{
					{
					this.state = 76;
					this.match(ReColParser.NEWLINE);
					}
					}
					this.state = 81;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 82;
				this.match(ReColParser.ID);
				this.state = 83;
				this.match(ReColParser.T__3);
				this.state = 87;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ReColParser.NEWLINE || _la === ReColParser.ID) {
					{
					{
					this.state = 84;
					this.obj();
					}
					}
					this.state = 89;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 90;
				this.match(ReColParser.T__4);
				this.state = 94;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 91;
						this.match(ReColParser.NEWLINE);
						}
						}
					}
					this.state = 96;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
				}
				}
				break;

			case 2:
				_localctx = new NewAttributeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ReColParser.NEWLINE) {
					{
					{
					this.state = 97;
					this.match(ReColParser.NEWLINE);
					}
					}
					this.state = 102;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 103;
				this.match(ReColParser.ID);
				this.state = 107;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 104;
						this.match(ReColParser.NEWLINE);
						}
						}
					}
					this.state = 109;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
				}
				}
				break;

			case 3:
				_localctx = new NewValueContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ReColParser.NEWLINE) {
					{
					{
					this.state = 110;
					this.match(ReColParser.NEWLINE);
					}
					}
					this.state = 115;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 116;
				this.match(ReColParser.ID);
				this.state = 117;
				this.match(ReColParser.T__1);
				this.state = 118;
				(_localctx as NewValueContext)._value = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (ReColParser.BOOL - 26)) | (1 << (ReColParser.STRING - 26)) | (1 << (ReColParser.DECIMAL - 26)))) !== 0))) {
					(_localctx as NewValueContext)._value = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 122;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 119;
						this.match(ReColParser.NEWLINE);
						}
						}
					}
					this.state = 124;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public entityRule(): EntityRuleContext {
		let _localctx: EntityRuleContext = new EntityRuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ReColParser.RULE_entityRule);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 127;
			this.match(ReColParser.T__5);
			this.state = 131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ReColParser.NEWLINE) {
				{
				{
				this.state = 128;
				this.match(ReColParser.NEWLINE);
				}
				}
				this.state = 133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 134;
			this.match(ReColParser.T__3);
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ReColParser.NEWLINE || _la === ReColParser.ID) {
				{
				{
				this.state = 135;
				this.actionStat();
				}
				}
				this.state = 140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 141;
			this.match(ReColParser.T__4);
			this.state = 145;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 142;
					this.match(ReColParser.NEWLINE);
					}
					}
				}
				this.state = 147;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public actionStat(): ActionStatContext {
		let _localctx: ActionStatContext = new ActionStatContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ReColParser.RULE_actionStat);
		let _la: number;
		try {
			let _alt: number;
			this.state = 208;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				_localctx = new AssignValueContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ReColParser.NEWLINE) {
					{
					{
					this.state = 148;
					this.match(ReColParser.NEWLINE);
					}
					}
					this.state = 153;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 154;
				this.match(ReColParser.ID);
				this.state = 159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ReColParser.T__6) {
					{
					{
					this.state = 155;
					this.match(ReColParser.T__6);
					this.state = 156;
					this.match(ReColParser.ID);
					}
					}
					this.state = 161;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 162;
				this.match(ReColParser.T__7);
				this.state = 166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ReColParser.NEWLINE) {
					{
					{
					this.state = 163;
					this.match(ReColParser.NEWLINE);
					}
					}
					this.state = 168;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 169;
				this.match(ReColParser.T__8);
				this.state = 170;
				this.expr(0);
				this.state = 171;
				this.match(ReColParser.T__9);
				this.state = 175;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 172;
						this.match(ReColParser.NEWLINE);
						}
						}
					}
					this.state = 177;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
				}
				}
				break;

			case 2:
				_localctx = new AssignRulerContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ReColParser.NEWLINE) {
					{
					{
					this.state = 178;
					this.match(ReColParser.NEWLINE);
					}
					}
					this.state = 183;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 184;
				this.match(ReColParser.ID);
				this.state = 189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ReColParser.T__6) {
					{
					{
					this.state = 185;
					this.match(ReColParser.T__6);
					this.state = 186;
					this.match(ReColParser.ID);
					}
					}
					this.state = 191;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 192;
				this.match(ReColParser.T__7);
				this.state = 196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ReColParser.NEWLINE) {
					{
					{
					this.state = 193;
					this.match(ReColParser.NEWLINE);
					}
					}
					this.state = 198;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 199;
				this.match(ReColParser.T__8);
				this.state = 200;
				this.rulerExpr(0);
				this.state = 201;
				this.match(ReColParser.T__9);
				this.state = 205;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 202;
						this.match(ReColParser.NEWLINE);
						}
						}
					}
					this.state = 207;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public rulerExpr(): RulerExprContext;
	public rulerExpr(_p: number): RulerExprContext;
	// @RuleVersion(0)
	public rulerExpr(_p?: number): RulerExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: RulerExprContext = new RulerExprContext(this._ctx, _parentState);
		let _prevctx: RulerExprContext = _localctx;
		let _startState: number = 12;
		this.enterRecursionRule(_localctx, 12, ReColParser.RULE_rulerExpr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 220;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				_localctx = new NotRuleContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 211;
				this.match(ReColParser.NOT);
				this.state = 212;
				this.rulerExpr(6);
				}
				break;

			case 2:
				{
				_localctx = new NotRuleContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 213;
				this.match(ReColParser.T__14);
				this.state = 214;
				this.rulerExpr(5);
				}
				break;

			case 3:
				{
				_localctx = new ParentsRuleContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 215;
				this.match(ReColParser.T__17);
				this.state = 216;
				this.rulerExpr(0);
				this.state = 217;
				this.match(ReColParser.T__18);
				}
				break;

			case 4:
				{
				_localctx = new ExprRuleContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 219;
				this.boolexpr();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 248;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 246;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
					case 1:
						{
						_localctx = new AndRuleContext(new RulerExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ReColParser.RULE_rulerExpr);
						this.state = 222;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 223;
						this.match(ReColParser.AND);
						this.state = 224;
						this.rulerExpr(13);
						}
						break;

					case 2:
						{
						_localctx = new AndRuleContext(new RulerExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ReColParser.RULE_rulerExpr);
						this.state = 225;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 226;
						this.match(ReColParser.T__10);
						this.state = 227;
						this.rulerExpr(12);
						}
						break;

					case 3:
						{
						_localctx = new OrRuleContext(new RulerExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ReColParser.RULE_rulerExpr);
						this.state = 228;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 229;
						this.match(ReColParser.OR);
						this.state = 230;
						this.rulerExpr(11);
						}
						break;

					case 4:
						{
						_localctx = new OrRuleContext(new RulerExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ReColParser.RULE_rulerExpr);
						this.state = 231;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 232;
						this.match(ReColParser.T__11);
						this.state = 233;
						this.rulerExpr(10);
						}
						break;

					case 5:
						{
						_localctx = new XorRuleContext(new RulerExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ReColParser.RULE_rulerExpr);
						this.state = 234;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 235;
						this.match(ReColParser.T__12);
						this.state = 236;
						this.rulerExpr(9);
						}
						break;

					case 6:
						{
						_localctx = new XorRuleContext(new RulerExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ReColParser.RULE_rulerExpr);
						this.state = 237;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 238;
						this.match(ReColParser.T__13);
						this.state = 239;
						this.rulerExpr(8);
						}
						break;

					case 7:
						{
						_localctx = new FollowRuleContext(new RulerExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ReColParser.RULE_rulerExpr);
						this.state = 240;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 241;
						this.match(ReColParser.T__15);
						this.state = 242;
						this.rulerExpr(5);
						}
						break;

					case 8:
						{
						_localctx = new UntilRuleContext(new RulerExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ReColParser.RULE_rulerExpr);
						this.state = 243;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 244;
						this.match(ReColParser.T__16);
						this.state = 245;
						this.rulerExpr(4);
						}
						break;
					}
					}
				}
				this.state = 250;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public boolexpr(): BoolexprContext {
		let _localctx: BoolexprContext = new BoolexprContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ReColParser.RULE_boolexpr);
		try {
			this.state = 300;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				_localctx = new CheckLargerContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 251;
				this.expr(0);
				this.state = 252;
				this.match(ReColParser.GT);
				this.state = 253;
				this.expr(0);
				}
				break;

			case 2:
				_localctx = new CheckLargerContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 255;
				this.expr(0);
				this.state = 256;
				this.match(ReColParser.T__19);
				this.state = 257;
				this.expr(0);
				}
				break;

			case 3:
				_localctx = new CheckGEContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 259;
				this.expr(0);
				this.state = 260;
				this.match(ReColParser.GE);
				this.state = 261;
				this.expr(0);
				}
				break;

			case 4:
				_localctx = new CheckGEContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 263;
				this.expr(0);
				this.state = 264;
				this.match(ReColParser.T__20);
				this.state = 265;
				this.expr(0);
				}
				break;

			case 5:
				_localctx = new CheckLessContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 267;
				this.expr(0);
				this.state = 268;
				this.match(ReColParser.LT);
				this.state = 269;
				this.expr(0);
				}
				break;

			case 6:
				_localctx = new CheckLessContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 271;
				this.expr(0);
				this.state = 272;
				this.match(ReColParser.T__21);
				this.state = 273;
				this.expr(0);
				}
				break;

			case 7:
				_localctx = new CheckLEContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 275;
				this.expr(0);
				this.state = 276;
				this.match(ReColParser.LE);
				this.state = 277;
				this.expr(0);
				}
				break;

			case 8:
				_localctx = new CheckLEContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 279;
				this.expr(0);
				this.state = 280;
				this.match(ReColParser.T__22);
				this.state = 281;
				this.expr(0);
				}
				break;

			case 9:
				_localctx = new CheckequalContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 283;
				this.expr(0);
				this.state = 284;
				this.match(ReColParser.EQ);
				this.state = 285;
				this.expr(0);
				}
				break;

			case 10:
				_localctx = new CheckequalContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 287;
				this.expr(0);
				this.state = 288;
				this.match(ReColParser.T__23);
				this.state = 289;
				this.expr(0);
				}
				break;

			case 11:
				_localctx = new CheckNEContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 291;
				this.expr(0);
				this.state = 292;
				this.match(ReColParser.NE);
				this.state = 293;
				this.expr(0);
				}
				break;

			case 12:
				_localctx = new CheckNEContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 295;
				this.expr(0);
				this.state = 296;
				this.match(ReColParser.T__24);
				this.state = 297;
				this.expr(0);
				}
				break;

			case 13:
				_localctx = new CheckBoolExprContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 299;
				this.expr(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 16;
		this.enterRecursionRule(_localctx, 16, ReColParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 320;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ReColParser.NOT:
				{
				_localctx = new NegateContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 303;
				this.match(ReColParser.NOT);
				this.state = 304;
				this.expr(6);
				}
				break;
			case ReColParser.ID:
				{
				_localctx = new IdContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 305;
				this.match(ReColParser.ID);
				this.state = 310;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 306;
						this.match(ReColParser.T__6);
						this.state = 307;
						this.match(ReColParser.ID);
						}
						}
					}
					this.state = 312;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
				}
				}
				break;
			case ReColParser.DECIMAL:
				{
				_localctx = new DecimalContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 313;
				this.match(ReColParser.DECIMAL);
				}
				break;
			case ReColParser.BOOL:
				{
				_localctx = new BoolContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 314;
				this.match(ReColParser.BOOL);
				}
				break;
			case ReColParser.STRING:
				{
				_localctx = new StringContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 315;
				this.match(ReColParser.STRING);
				}
				break;
			case ReColParser.T__17:
				{
				_localctx = new ParensContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 316;
				this.match(ReColParser.T__17);
				this.state = 317;
				this.expr(0);
				this.state = 318;
				this.match(ReColParser.T__18);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 330;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 328;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
					case 1:
						{
						_localctx = new CalNumContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ReColParser.RULE_expr);
						this.state = 322;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 323;
						(_localctx as CalNumContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (ReColParser.MUL - 33)) | (1 << (ReColParser.DIV - 33)) | (1 << (ReColParser.ADD - 33)) | (1 << (ReColParser.SUB - 33)))) !== 0))) {
							(_localctx as CalNumContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 324;
						this.expr(9);
						}
						break;

					case 2:
						{
						_localctx = new CalBoolContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ReColParser.RULE_expr);
						this.state = 325;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 326;
						(_localctx as CalBoolContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === ReColParser.AND || _la === ReColParser.OR)) {
							(_localctx as CalBoolContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 327;
						this.expr(8);
						}
						break;
					}
					}
				}
				this.state = 332;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 6:
			return this.rulerExpr_sempred(_localctx as RulerExprContext, predIndex);

		case 8:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private rulerExpr_sempred(_localctx: RulerExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 12);

		case 1:
			return this.precpred(this._ctx, 11);

		case 2:
			return this.precpred(this._ctx, 10);

		case 3:
			return this.precpred(this._ctx, 9);

		case 4:
			return this.precpred(this._ctx, 8);

		case 5:
			return this.precpred(this._ctx, 7);

		case 6:
			return this.precpred(this._ctx, 4);

		case 7:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 8);

		case 9:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x031\u0150\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x07\x02\x16\n\x02\f\x02\x0E" +
		"\x02\x19\v\x02\x03\x02\x03\x02\x07\x02\x1D\n\x02\f\x02\x0E\x02 \v\x02" +
		"\x03\x02\x03\x02\x07\x02$\n\x02\f\x02\x0E\x02\'\v\x02\x03\x02\x03\x02" +
		"\x07\x02+\n\x02\f\x02\x0E\x02.\v\x02\x03\x03\x07\x031\n\x03\f\x03\x0E" +
		"\x034\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03:\n\x03\f\x03\x0E\x03" +
		"=\v\x03\x03\x04\x03\x04\x07\x04A\n\x04\f\x04\x0E\x04D\v\x04\x03\x04\x03" +
		"\x04\x07\x04H\n\x04\f\x04\x0E\x04K\v\x04\x03\x04\x03\x04\x03\x05\x07\x05" +
		"P\n\x05\f\x05\x0E\x05S\v\x05\x03\x05\x03\x05\x03\x05\x07\x05X\n\x05\f" +
		"\x05\x0E\x05[\v\x05\x03\x05\x03\x05\x07\x05_\n\x05\f\x05\x0E\x05b\v\x05" +
		"\x03\x05\x07\x05e\n\x05\f\x05\x0E\x05h\v\x05\x03\x05\x03\x05\x07\x05l" +
		"\n\x05\f\x05\x0E\x05o\v\x05\x03\x05\x07\x05r\n\x05\f\x05\x0E\x05u\v\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05{\n\x05\f\x05\x0E\x05~\v\x05\x05" +
		"\x05\x80\n\x05\x03\x06\x03\x06\x07\x06\x84\n\x06\f\x06\x0E\x06\x87\v\x06" +
		"\x03\x06\x03\x06\x07\x06\x8B\n\x06\f\x06\x0E\x06\x8E\v\x06\x03\x06\x03" +
		"\x06\x07\x06\x92\n\x06\f\x06\x0E\x06\x95\v\x06\x03\x07\x07\x07\x98\n\x07" +
		"\f\x07\x0E\x07\x9B\v\x07\x03\x07\x03\x07\x03\x07\x07\x07\xA0\n\x07\f\x07" +
		"\x0E\x07\xA3\v\x07\x03\x07\x03\x07\x07\x07\xA7\n\x07\f\x07\x0E\x07\xAA" +
		"\v\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\xB0\n\x07\f\x07\x0E\x07" +
		"\xB3\v\x07\x03\x07\x07\x07\xB6\n\x07\f\x07\x0E\x07\xB9\v\x07\x03\x07\x03" +
		"\x07\x03\x07\x07\x07\xBE\n\x07\f\x07\x0E\x07\xC1\v\x07\x03\x07\x03\x07" +
		"\x07\x07\xC5\n\x07\f\x07\x0E\x07\xC8\v\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x07\x07\xCE\n\x07\f\x07\x0E\x07\xD1\v\x07\x05\x07\xD3\n\x07\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\xDF\n\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07" +
		"\b\xF9\n\b\f\b\x0E\b\xFC\v\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u012F\n\t\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x07\n\u0137\n\n\f\n\x0E\n\u013A\v\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0143\n\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x07\n\u014B\n\n\f\n\x0E\n\u014E\v\n\x03\n\x02\x02\x04\x0E\x12" +
		"\v\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x02" +
		"\x05\x04\x02\x1C\x1D00\x03\x02#&\x03\x02\'(\x02\u0182\x02\x17\x03\x02" +
		"\x02\x02\x042\x03\x02\x02\x02\x06>\x03\x02\x02\x02\b\x7F\x03\x02\x02\x02" +
		"\n\x81\x03\x02\x02\x02\f\xD2\x03\x02\x02\x02\x0E\xDE\x03\x02\x02\x02\x10" +
		"\u012E\x03\x02\x02\x02\x12\u0142\x03\x02\x02\x02\x14\x16\x07\x1E\x02\x02" +
		"\x15\x14\x03\x02\x02\x02\x16\x19\x03\x02\x02\x02\x17\x15\x03\x02\x02\x02" +
		"\x17\x18\x03\x02\x02\x02\x18\x1A\x03\x02\x02\x02\x19\x17\x03\x02\x02\x02" +
		"\x1A\x1E\x05\x04\x03\x02\x1B\x1D\x07\x1E\x02\x02\x1C\x1B\x03\x02\x02\x02" +
		"\x1D \x03\x02\x02\x02\x1E\x1C\x03\x02\x02\x02\x1E\x1F\x03\x02\x02\x02" +
		"\x1F!\x03\x02\x02\x02 \x1E\x03\x02\x02\x02!%\x05\x06\x04\x02\"$\x07\x1E" +
		"\x02\x02#\"\x03\x02\x02\x02$\'\x03\x02\x02\x02%#\x03\x02\x02\x02%&\x03" +
		"\x02\x02\x02&(\x03\x02\x02\x02\'%\x03\x02\x02\x02(,\x05\n\x06\x02)+\x07" +
		"\x1E\x02\x02*)\x03\x02\x02\x02+.\x03\x02\x02\x02,*\x03\x02\x02\x02,-\x03" +
		"\x02\x02\x02-\x03\x03\x02\x02\x02.,\x03\x02\x02\x02/1\x07\x1E\x02\x02" +
		"0/\x03\x02\x02\x0214\x03\x02\x02\x0220\x03\x02\x02\x0223\x03\x02\x02\x02" +
		"35\x03\x02\x02\x0242\x03\x02\x02\x0256\x07\x03\x02\x0267\x07\x04\x02\x02" +
		"7;\x071\x02\x028:\x07\x1E\x02\x0298\x03\x02\x02\x02:=\x03\x02\x02\x02" +
		";9\x03\x02\x02\x02;<\x03\x02\x02\x02<\x05\x03\x02\x02\x02=;\x03\x02\x02" +
		"\x02>B\x07\x05\x02\x02?A\x07\x1E\x02\x02@?\x03\x02\x02\x02AD\x03\x02\x02" +
		"\x02B@\x03\x02\x02\x02BC\x03\x02\x02\x02CE\x03\x02\x02\x02DB\x03\x02\x02" +
		"\x02EI\x07\x06\x02\x02FH\x05\b\x05\x02GF\x03\x02\x02\x02HK\x03\x02\x02" +
		"\x02IG\x03\x02\x02\x02IJ\x03\x02\x02\x02JL\x03\x02\x02\x02KI\x03\x02\x02" +
		"\x02LM\x07\x07\x02\x02M\x07\x03\x02\x02\x02NP\x07\x1E\x02\x02ON\x03\x02" +
		"\x02\x02PS\x03\x02\x02\x02QO\x03\x02\x02\x02QR\x03\x02\x02\x02RT\x03\x02" +
		"\x02\x02SQ\x03\x02\x02\x02TU\x071\x02\x02UY\x07\x06\x02\x02VX\x05\b\x05" +
		"\x02WV\x03\x02\x02\x02X[\x03\x02\x02\x02YW\x03\x02\x02\x02YZ\x03\x02\x02" +
		"\x02Z\\\x03\x02\x02\x02[Y\x03\x02\x02\x02\\`\x07\x07\x02\x02]_\x07\x1E" +
		"\x02\x02^]\x03\x02\x02\x02_b\x03\x02\x02\x02`^\x03\x02\x02\x02`a\x03\x02" +
		"\x02\x02a\x80\x03\x02\x02\x02b`\x03\x02\x02\x02ce\x07\x1E\x02\x02dc\x03" +
		"\x02\x02\x02eh\x03\x02\x02\x02fd\x03\x02\x02\x02fg\x03\x02\x02\x02gi\x03" +
		"\x02\x02\x02hf\x03\x02\x02\x02im\x071\x02\x02jl\x07\x1E\x02\x02kj\x03" +
		"\x02\x02\x02lo\x03\x02\x02\x02mk\x03\x02\x02\x02mn\x03\x02\x02\x02n\x80" +
		"\x03\x02\x02\x02om\x03\x02\x02\x02pr\x07\x1E\x02\x02qp\x03\x02\x02\x02" +
		"ru\x03\x02\x02\x02sq\x03\x02\x02\x02st\x03\x02\x02\x02tv\x03\x02\x02\x02" +
		"us\x03\x02\x02\x02vw\x071\x02\x02wx\x07\x04\x02\x02x|\t\x02\x02\x02y{" +
		"\x07\x1E\x02\x02zy\x03\x02\x02\x02{~\x03\x02\x02\x02|z\x03\x02\x02\x02" +
		"|}\x03\x02\x02\x02}\x80\x03\x02\x02\x02~|\x03\x02\x02\x02\x7FQ\x03\x02" +
		"\x02\x02\x7Ff\x03\x02\x02\x02\x7Fs\x03\x02\x02\x02\x80\t\x03\x02\x02\x02" +
		"\x81\x85\x07\b\x02\x02\x82\x84\x07\x1E\x02\x02\x83\x82\x03\x02\x02\x02" +
		"\x84\x87\x03\x02\x02\x02\x85\x83\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02" +
		"\x86\x88\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x88\x8C\x07\x06\x02\x02" +
		"\x89\x8B\x05\f\x07\x02\x8A\x89\x03\x02\x02\x02\x8B\x8E\x03\x02\x02\x02" +
		"\x8C\x8A\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8F\x03\x02\x02\x02" +
		"\x8E\x8C\x03\x02\x02\x02\x8F\x93\x07\x07\x02\x02\x90\x92\x07\x1E\x02\x02" +
		"\x91\x90\x03\x02\x02\x02\x92\x95\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02" +
		"\x93\x94\x03\x02\x02\x02\x94\v\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02" +
		"\x96\x98\x07\x1E\x02\x02\x97\x96\x03\x02\x02\x02\x98\x9B\x03\x02\x02\x02" +
		"\x99\x97\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9C\x03\x02\x02\x02" +
		"\x9B\x99\x03\x02\x02\x02\x9C\xA1\x071\x02\x02\x9D\x9E\x07\t\x02\x02\x9E" +
		"\xA0\x071\x02\x02\x9F\x9D\x03\x02\x02\x02\xA0\xA3\x03\x02\x02\x02\xA1" +
		"\x9F\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA4\x03\x02\x02\x02\xA3" +
		"\xA1\x03\x02\x02\x02\xA4\xA8\x07\n\x02\x02\xA5\xA7\x07\x1E\x02\x02\xA6" +
		"\xA5\x03\x02\x02\x02\xA7\xAA\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA8" +
		"\xA9\x03\x02\x02\x02\xA9\xAB\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAB" +
		"\xAC\x07\v\x02\x02\xAC\xAD\x05\x12\n\x02\xAD\xB1\x07\f\x02\x02\xAE\xB0" +
		"\x07\x1E\x02\x02\xAF\xAE\x03\x02\x02\x02\xB0\xB3\x03\x02\x02\x02\xB1\xAF" +
		"\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xD3\x03\x02\x02\x02\xB3\xB1" +
		"\x03\x02\x02\x02\xB4\xB6\x07\x1E\x02\x02\xB5\xB4\x03\x02\x02\x02\xB6\xB9" +
		"\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xBA" +
		"\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xBA\xBF\x071\x02\x02\xBB\xBC" +
		"\x07\t\x02\x02\xBC\xBE\x071\x02\x02\xBD\xBB\x03\x02\x02\x02\xBE\xC1\x03" +
		"\x02\x02\x02\xBF\xBD\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC2\x03" +
		"\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC2\xC6\x07\n\x02\x02\xC3\xC5\x07" +
		"\x1E\x02\x02\xC4\xC3\x03\x02\x02\x02\xC5\xC8\x03\x02\x02\x02\xC6\xC4\x03" +
		"\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC9\x03\x02\x02\x02\xC8\xC6\x03" +
		"\x02\x02\x02\xC9\xCA\x07\v\x02\x02\xCA\xCB\x05\x0E\b\x02\xCB\xCF\x07\f" +
		"\x02\x02\xCC\xCE\x07\x1E\x02\x02\xCD\xCC\x03\x02\x02\x02\xCE\xD1\x03\x02" +
		"\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD3\x03\x02" +
		"\x02\x02\xD1\xCF\x03\x02\x02\x02\xD2\x99\x03\x02\x02\x02\xD2\xB7\x03\x02" +
		"\x02\x02\xD3\r\x03\x02\x02\x02\xD4\xD5\b\b\x01\x02\xD5\xD6\x07)\x02\x02" +
		"\xD6\xDF\x05\x0E\b\b\xD7\xD8\x07\x11\x02\x02\xD8\xDF\x05\x0E\b\x07\xD9" +
		"\xDA\x07\x14\x02\x02\xDA\xDB\x05\x0E\b\x02\xDB\xDC\x07\x15\x02\x02\xDC" +
		"\xDF\x03\x02\x02\x02\xDD\xDF\x05\x10\t\x02\xDE\xD4\x03\x02\x02\x02\xDE" +
		"\xD7\x03\x02\x02\x02\xDE\xD9\x03\x02\x02\x02\xDE\xDD\x03\x02\x02\x02\xDF" +
		"\xFA\x03\x02\x02\x02\xE0\xE1\f\x0E\x02\x02\xE1\xE2\x07\'\x02\x02\xE2\xF9" +
		"\x05\x0E\b\x0F\xE3\xE4\f\r\x02\x02\xE4\xE5\x07\r\x02\x02\xE5\xF9\x05\x0E" +
		"\b\x0E\xE6\xE7\f\f\x02\x02\xE7\xE8\x07(\x02\x02\xE8\xF9\x05\x0E\b\r\xE9" +
		"\xEA\f\v\x02\x02\xEA\xEB\x07\x0E\x02\x02\xEB\xF9\x05\x0E\b\f\xEC\xED\f" +
		"\n\x02\x02\xED\xEE\x07\x0F\x02\x02\xEE\xF9\x05\x0E\b\v\xEF\xF0\f\t\x02" +
		"\x02\xF0\xF1\x07\x10\x02\x02\xF1\xF9\x05\x0E\b\n\xF2\xF3\f\x06\x02\x02" +
		"\xF3\xF4\x07\x12\x02\x02\xF4\xF9\x05\x0E\b\x07\xF5\xF6\f\x05\x02\x02\xF6" +
		"\xF7\x07\x13\x02\x02\xF7\xF9\x05\x0E\b\x06\xF8\xE0\x03\x02\x02\x02\xF8" +
		"\xE3\x03\x02\x02\x02\xF8\xE6\x03\x02\x02\x02\xF8\xE9\x03\x02\x02\x02\xF8" +
		"\xEC\x03\x02\x02\x02\xF8\xEF\x03\x02\x02\x02\xF8\xF2\x03\x02\x02\x02\xF8" +
		"\xF5\x03\x02\x02\x02\xF9\xFC\x03\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFA" +
		"\xFB\x03\x02\x02\x02\xFB\x0F\x03\x02\x02\x02\xFC\xFA\x03\x02\x02\x02\xFD" +
		"\xFE\x05\x12\n\x02\xFE\xFF\x07*\x02\x02\xFF\u0100\x05\x12\n\x02\u0100" +
		"\u012F\x03\x02\x02\x02\u0101\u0102\x05\x12\n\x02\u0102\u0103\x07\x16\x02" +
		"\x02\u0103\u0104\x05\x12\n\x02\u0104\u012F\x03\x02\x02\x02\u0105\u0106" +
		"\x05\x12\n\x02\u0106\u0107\x07+\x02\x02\u0107\u0108\x05\x12\n\x02\u0108" +
		"\u012F\x03\x02\x02\x02\u0109\u010A\x05\x12\n\x02\u010A\u010B\x07\x17\x02" +
		"\x02\u010B\u010C\x05\x12\n\x02\u010C\u012F\x03\x02\x02\x02\u010D\u010E" +
		"\x05\x12\n\x02\u010E\u010F\x07,\x02\x02\u010F\u0110\x05\x12\n\x02\u0110" +
		"\u012F\x03\x02\x02\x02\u0111\u0112\x05\x12\n\x02\u0112\u0113\x07\x18\x02" +
		"\x02\u0113\u0114\x05\x12\n\x02\u0114\u012F\x03\x02\x02\x02\u0115\u0116" +
		"\x05\x12\n\x02\u0116\u0117\x07-\x02\x02\u0117\u0118\x05\x12\n\x02\u0118" +
		"\u012F\x03\x02\x02\x02\u0119\u011A\x05\x12\n\x02\u011A\u011B\x07\x19\x02" +
		"\x02\u011B\u011C\x05\x12\n\x02\u011C\u012F\x03\x02\x02\x02\u011D\u011E" +
		"\x05\x12\n\x02\u011E\u011F\x07.\x02\x02\u011F\u0120\x05\x12\n\x02\u0120" +
		"\u012F\x03\x02\x02\x02\u0121\u0122\x05\x12\n\x02\u0122\u0123\x07\x1A\x02" +
		"\x02\u0123\u0124\x05\x12\n\x02\u0124\u012F\x03\x02\x02\x02\u0125\u0126" +
		"\x05\x12\n\x02\u0126\u0127\x07/\x02\x02\u0127\u0128\x05\x12\n\x02\u0128" +
		"\u012F\x03\x02\x02\x02\u0129\u012A\x05\x12\n\x02\u012A\u012B\x07\x1B\x02" +
		"\x02\u012B\u012C\x05\x12\n\x02\u012C\u012F\x03\x02\x02\x02\u012D\u012F" +
		"\x05\x12\n\x02\u012E\xFD\x03\x02\x02\x02\u012E\u0101\x03\x02\x02\x02\u012E" +
		"\u0105\x03\x02\x02\x02\u012E\u0109\x03\x02\x02\x02\u012E\u010D\x03\x02" +
		"\x02\x02\u012E\u0111\x03\x02\x02\x02\u012E\u0115\x03\x02\x02\x02\u012E" +
		"\u0119\x03\x02\x02\x02\u012E\u011D\x03\x02\x02\x02\u012E\u0121\x03\x02" +
		"\x02\x02\u012E\u0125\x03\x02\x02\x02\u012E\u0129\x03\x02\x02\x02\u012E" +
		"\u012D\x03\x02\x02\x02\u012F\x11\x03\x02\x02\x02\u0130\u0131\b\n\x01\x02" +
		"\u0131\u0132\x07)\x02\x02\u0132\u0143\x05\x12\n\b\u0133\u0138\x071\x02" +
		"\x02\u0134\u0135\x07\t\x02\x02\u0135\u0137\x071\x02\x02\u0136\u0134\x03" +
		"\x02\x02\x02\u0137\u013A\x03\x02\x02\x02\u0138\u0136\x03\x02\x02\x02\u0138" +
		"\u0139\x03\x02\x02\x02\u0139\u0143\x03\x02\x02\x02\u013A\u0138\x03\x02" +
		"\x02\x02\u013B\u0143\x070\x02\x02\u013C\u0143\x07\x1C\x02\x02\u013D\u0143" +
		"\x07\x1D\x02\x02\u013E\u013F\x07\x14\x02\x02\u013F\u0140\x05\x12\n\x02" +
		"\u0140\u0141\x07\x15\x02\x02\u0141\u0143\x03\x02\x02\x02\u0142\u0130\x03" +
		"\x02\x02\x02\u0142\u0133\x03\x02\x02\x02\u0142\u013B\x03\x02\x02\x02\u0142" +
		"\u013C\x03\x02\x02\x02\u0142\u013D\x03\x02\x02\x02\u0142\u013E\x03\x02" +
		"\x02\x02\u0143\u014C\x03\x02\x02\x02\u0144\u0145\f\n\x02\x02\u0145\u0146" +
		"\t\x03\x02\x02\u0146\u014B\x05\x12\n\v\u0147\u0148\f\t\x02\x02\u0148\u0149" +
		"\t\x04\x02\x02\u0149\u014B\x05\x12\n\n\u014A\u0144\x03\x02\x02\x02\u014A" +
		"\u0147\x03\x02\x02\x02\u014B\u014E\x03\x02\x02\x02\u014C\u014A\x03\x02" +
		"\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D\x13\x03\x02\x02\x02\u014E\u014C" +
		"\x03\x02\x02\x02&\x17\x1E%,2;BIQY`fms|\x7F\x85\x8C\x93\x99\xA1\xA8\xB1" +
		"\xB7\xBF\xC6\xCF\xD2\xDE\xF8\xFA\u012E\u0138\u0142\u014A\u014C";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ReColParser.__ATN) {
			ReColParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ReColParser._serializedATN));
		}

		return ReColParser.__ATN;
	}

}

export class InputContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public entityDecl(): EntityDeclContext {
		return this.getRuleContext(0, EntityDeclContext);
	}
	public entityRule(): EntityRuleContext {
		return this.getRuleContext(0, EntityRuleContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ReColParser.NEWLINE);
		} else {
			return this.getToken(ReColParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReColParser.RULE_input; }
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterInput) {
			listener.enterInput(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitInput) {
			listener.exitInput(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitInput) {
			return visitor.visitInput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(ReColParser.ID, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ReColParser.NEWLINE);
		} else {
			return this.getToken(ReColParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReColParser.RULE_name; }
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterName) {
			listener.enterName(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitName) {
			listener.exitName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitName) {
			return visitor.visitName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EntityDeclContext extends ParserRuleContext {
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ReColParser.NEWLINE);
		} else {
			return this.getToken(ReColParser.NEWLINE, i);
		}
	}
	public obj(): ObjContext[];
	public obj(i: number): ObjContext;
	public obj(i?: number): ObjContext | ObjContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjContext);
		} else {
			return this.getRuleContext(i, ObjContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReColParser.RULE_entityDecl; }
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterEntityDecl) {
			listener.enterEntityDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitEntityDecl) {
			listener.exitEntityDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitEntityDecl) {
			return visitor.visitEntityDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReColParser.RULE_obj; }
	public copyFrom(ctx: ObjContext): void {
		super.copyFrom(ctx);
	}
}
export class NewObjectContext extends ObjContext {
	public ID(): TerminalNode { return this.getToken(ReColParser.ID, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ReColParser.NEWLINE);
		} else {
			return this.getToken(ReColParser.NEWLINE, i);
		}
	}
	public obj(): ObjContext[];
	public obj(i: number): ObjContext;
	public obj(i?: number): ObjContext | ObjContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjContext);
		} else {
			return this.getRuleContext(i, ObjContext);
		}
	}
	constructor(ctx: ObjContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterNewObject) {
			listener.enterNewObject(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitNewObject) {
			listener.exitNewObject(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitNewObject) {
			return visitor.visitNewObject(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NewAttributeContext extends ObjContext {
	public ID(): TerminalNode { return this.getToken(ReColParser.ID, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ReColParser.NEWLINE);
		} else {
			return this.getToken(ReColParser.NEWLINE, i);
		}
	}
	constructor(ctx: ObjContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterNewAttribute) {
			listener.enterNewAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitNewAttribute) {
			listener.exitNewAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitNewAttribute) {
			return visitor.visitNewAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NewValueContext extends ObjContext {
	public _value!: Token;
	public ID(): TerminalNode { return this.getToken(ReColParser.ID, 0); }
	public DECIMAL(): TerminalNode | undefined { return this.tryGetToken(ReColParser.DECIMAL, 0); }
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(ReColParser.BOOL, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ReColParser.STRING, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ReColParser.NEWLINE);
		} else {
			return this.getToken(ReColParser.NEWLINE, i);
		}
	}
	constructor(ctx: ObjContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterNewValue) {
			listener.enterNewValue(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitNewValue) {
			listener.exitNewValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitNewValue) {
			return visitor.visitNewValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EntityRuleContext extends ParserRuleContext {
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ReColParser.NEWLINE);
		} else {
			return this.getToken(ReColParser.NEWLINE, i);
		}
	}
	public actionStat(): ActionStatContext[];
	public actionStat(i: number): ActionStatContext;
	public actionStat(i?: number): ActionStatContext | ActionStatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ActionStatContext);
		} else {
			return this.getRuleContext(i, ActionStatContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReColParser.RULE_entityRule; }
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterEntityRule) {
			listener.enterEntityRule(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitEntityRule) {
			listener.exitEntityRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitEntityRule) {
			return visitor.visitEntityRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ActionStatContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReColParser.RULE_actionStat; }
	public copyFrom(ctx: ActionStatContext): void {
		super.copyFrom(ctx);
	}
}
export class AssignValueContext extends ActionStatContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ReColParser.ID);
		} else {
			return this.getToken(ReColParser.ID, i);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ReColParser.NEWLINE);
		} else {
			return this.getToken(ReColParser.NEWLINE, i);
		}
	}
	constructor(ctx: ActionStatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterAssignValue) {
			listener.enterAssignValue(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitAssignValue) {
			listener.exitAssignValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitAssignValue) {
			return visitor.visitAssignValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignRulerContext extends ActionStatContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ReColParser.ID);
		} else {
			return this.getToken(ReColParser.ID, i);
		}
	}
	public rulerExpr(): RulerExprContext {
		return this.getRuleContext(0, RulerExprContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ReColParser.NEWLINE);
		} else {
			return this.getToken(ReColParser.NEWLINE, i);
		}
	}
	constructor(ctx: ActionStatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterAssignRuler) {
			listener.enterAssignRuler(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitAssignRuler) {
			listener.exitAssignRuler(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitAssignRuler) {
			return visitor.visitAssignRuler(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RulerExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReColParser.RULE_rulerExpr; }
	public copyFrom(ctx: RulerExprContext): void {
		super.copyFrom(ctx);
	}
}
export class AndRuleContext extends RulerExprContext {
	public rulerExpr(): RulerExprContext[];
	public rulerExpr(i: number): RulerExprContext;
	public rulerExpr(i?: number): RulerExprContext | RulerExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RulerExprContext);
		} else {
			return this.getRuleContext(i, RulerExprContext);
		}
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(ReColParser.AND, 0); }
	constructor(ctx: RulerExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterAndRule) {
			listener.enterAndRule(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitAndRule) {
			listener.exitAndRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitAndRule) {
			return visitor.visitAndRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrRuleContext extends RulerExprContext {
	public rulerExpr(): RulerExprContext[];
	public rulerExpr(i: number): RulerExprContext;
	public rulerExpr(i?: number): RulerExprContext | RulerExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RulerExprContext);
		} else {
			return this.getRuleContext(i, RulerExprContext);
		}
	}
	public OR(): TerminalNode | undefined { return this.tryGetToken(ReColParser.OR, 0); }
	constructor(ctx: RulerExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterOrRule) {
			listener.enterOrRule(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitOrRule) {
			listener.exitOrRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitOrRule) {
			return visitor.visitOrRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class XorRuleContext extends RulerExprContext {
	public rulerExpr(): RulerExprContext[];
	public rulerExpr(i: number): RulerExprContext;
	public rulerExpr(i?: number): RulerExprContext | RulerExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RulerExprContext);
		} else {
			return this.getRuleContext(i, RulerExprContext);
		}
	}
	constructor(ctx: RulerExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterXorRule) {
			listener.enterXorRule(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitXorRule) {
			listener.exitXorRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitXorRule) {
			return visitor.visitXorRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotRuleContext extends RulerExprContext {
	public NOT(): TerminalNode | undefined { return this.tryGetToken(ReColParser.NOT, 0); }
	public rulerExpr(): RulerExprContext {
		return this.getRuleContext(0, RulerExprContext);
	}
	constructor(ctx: RulerExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterNotRule) {
			listener.enterNotRule(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitNotRule) {
			listener.exitNotRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitNotRule) {
			return visitor.visitNotRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FollowRuleContext extends RulerExprContext {
	public rulerExpr(): RulerExprContext[];
	public rulerExpr(i: number): RulerExprContext;
	public rulerExpr(i?: number): RulerExprContext | RulerExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RulerExprContext);
		} else {
			return this.getRuleContext(i, RulerExprContext);
		}
	}
	constructor(ctx: RulerExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterFollowRule) {
			listener.enterFollowRule(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitFollowRule) {
			listener.exitFollowRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitFollowRule) {
			return visitor.visitFollowRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UntilRuleContext extends RulerExprContext {
	public rulerExpr(): RulerExprContext[];
	public rulerExpr(i: number): RulerExprContext;
	public rulerExpr(i?: number): RulerExprContext | RulerExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RulerExprContext);
		} else {
			return this.getRuleContext(i, RulerExprContext);
		}
	}
	constructor(ctx: RulerExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterUntilRule) {
			listener.enterUntilRule(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitUntilRule) {
			listener.exitUntilRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitUntilRule) {
			return visitor.visitUntilRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParentsRuleContext extends RulerExprContext {
	public rulerExpr(): RulerExprContext {
		return this.getRuleContext(0, RulerExprContext);
	}
	constructor(ctx: RulerExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterParentsRule) {
			listener.enterParentsRule(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitParentsRule) {
			listener.exitParentsRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitParentsRule) {
			return visitor.visitParentsRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprRuleContext extends RulerExprContext {
	public boolexpr(): BoolexprContext {
		return this.getRuleContext(0, BoolexprContext);
	}
	constructor(ctx: RulerExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterExprRule) {
			listener.enterExprRule(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitExprRule) {
			listener.exitExprRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitExprRule) {
			return visitor.visitExprRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoolexprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReColParser.RULE_boolexpr; }
	public copyFrom(ctx: BoolexprContext): void {
		super.copyFrom(ctx);
	}
}
export class CheckLargerContext extends BoolexprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public GT(): TerminalNode | undefined { return this.tryGetToken(ReColParser.GT, 0); }
	constructor(ctx: BoolexprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterCheckLarger) {
			listener.enterCheckLarger(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitCheckLarger) {
			listener.exitCheckLarger(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitCheckLarger) {
			return visitor.visitCheckLarger(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CheckGEContext extends BoolexprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public GE(): TerminalNode | undefined { return this.tryGetToken(ReColParser.GE, 0); }
	constructor(ctx: BoolexprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterCheckGE) {
			listener.enterCheckGE(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitCheckGE) {
			listener.exitCheckGE(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitCheckGE) {
			return visitor.visitCheckGE(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CheckLessContext extends BoolexprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public LT(): TerminalNode | undefined { return this.tryGetToken(ReColParser.LT, 0); }
	constructor(ctx: BoolexprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterCheckLess) {
			listener.enterCheckLess(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitCheckLess) {
			listener.exitCheckLess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitCheckLess) {
			return visitor.visitCheckLess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CheckLEContext extends BoolexprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public LE(): TerminalNode | undefined { return this.tryGetToken(ReColParser.LE, 0); }
	constructor(ctx: BoolexprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterCheckLE) {
			listener.enterCheckLE(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitCheckLE) {
			listener.exitCheckLE(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitCheckLE) {
			return visitor.visitCheckLE(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CheckequalContext extends BoolexprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(ReColParser.EQ, 0); }
	constructor(ctx: BoolexprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterCheckequal) {
			listener.enterCheckequal(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitCheckequal) {
			listener.exitCheckequal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitCheckequal) {
			return visitor.visitCheckequal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CheckNEContext extends BoolexprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public NE(): TerminalNode | undefined { return this.tryGetToken(ReColParser.NE, 0); }
	constructor(ctx: BoolexprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterCheckNE) {
			listener.enterCheckNE(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitCheckNE) {
			listener.exitCheckNE(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitCheckNE) {
			return visitor.visitCheckNE(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CheckBoolExprContext extends BoolexprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: BoolexprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterCheckBoolExpr) {
			listener.enterCheckBoolExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitCheckBoolExpr) {
			listener.exitCheckBoolExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitCheckBoolExpr) {
			return visitor.visitCheckBoolExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReColParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class CalNumContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(ReColParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(ReColParser.DIV, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(ReColParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(ReColParser.SUB, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterCalNum) {
			listener.enterCalNum(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitCalNum) {
			listener.exitCalNum(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitCalNum) {
			return visitor.visitCalNum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CalBoolContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public OR(): TerminalNode | undefined { return this.tryGetToken(ReColParser.OR, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(ReColParser.AND, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterCalBool) {
			listener.enterCalBool(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitCalBool) {
			listener.exitCalBool(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitCalBool) {
			return visitor.visitCalBool(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NegateContext extends ExprContext {
	public NOT(): TerminalNode { return this.getToken(ReColParser.NOT, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterNegate) {
			listener.enterNegate(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitNegate) {
			listener.exitNegate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitNegate) {
			return visitor.visitNegate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdContext extends ExprContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ReColParser.ID);
		} else {
			return this.getToken(ReColParser.ID, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterId) {
			listener.enterId(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitId) {
			listener.exitId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitId) {
			return visitor.visitId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DecimalContext extends ExprContext {
	public DECIMAL(): TerminalNode { return this.getToken(ReColParser.DECIMAL, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterDecimal) {
			listener.enterDecimal(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitDecimal) {
			listener.exitDecimal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitDecimal) {
			return visitor.visitDecimal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BoolContext extends ExprContext {
	public BOOL(): TerminalNode { return this.getToken(ReColParser.BOOL, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterBool) {
			listener.enterBool(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitBool) {
			listener.exitBool(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitBool) {
			return visitor.visitBool(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringContext extends ExprContext {
	public STRING(): TerminalNode { return this.getToken(ReColParser.STRING, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParensContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ReColListener): void {
		if (listener.enterParens) {
			listener.enterParens(this);
		}
	}
	// @Override
	public exitRule(listener: ReColListener): void {
		if (listener.exitParens) {
			listener.exitParens(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReColVisitor<Result>): Result {
		if (visitor.visitParens) {
			return visitor.visitParens(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


