// Generated from /Users/zhengziyue/project/react-diagrams-6.2.0/packages/diagrams-demo-gallery/g4_script/ReCol.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ReColParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, BOOL=26, STRING=27, NEWLINE=28, WS=29, COMMENT=30, LINE_COMMENT=31, 
		PYTHON_COMMENT=32, MUL=33, DIV=34, ADD=35, SUB=36, AND=37, OR=38, NOT=39, 
		GT=40, GE=41, LT=42, LE=43, EQ=44, NE=45, DECIMAL=46, ID=47;
	public static final int
		RULE_input = 0, RULE_name = 1, RULE_entityDecl = 2, RULE_obj = 3, RULE_entityRule = 4, 
		RULE_actionStat = 5, RULE_rulerExpr = 6, RULE_boolexpr = 7, RULE_expr = 8;
	private static String[] makeRuleNames() {
		return new String[] {
			"input", "name", "entityDecl", "obj", "entityRule", "actionStat", "rulerExpr", 
			"boolexpr", "expr"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'regulation'", "':'", "'Entities'", "'{'", "'}'", "'Rules'", "'.'", 
			"'='", "'['", "']'", "'AND'", "'OR'", "'^'", "'XOR'", "'NOT'", "'Follow'", 
			"'Until'", "'('", "')'", "'GT'", "'GE'", "'LT'", "'LE'", "'EQ'", "'NE'", 
			null, null, null, null, null, null, null, "'*'", "'/'", "'+'", "'-'", 
			"'&'", "'|'", "'!'", "'>'", "'>='", "'<'", "'<='", "'=='", "'!='"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, "BOOL", "STRING", "NEWLINE", "WS", "COMMENT", "LINE_COMMENT", 
			"PYTHON_COMMENT", "MUL", "DIV", "ADD", "SUB", "AND", "OR", "NOT", "GT", 
			"GE", "LT", "LE", "EQ", "NE", "DECIMAL", "ID"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "ReCol.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ReColParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class InputContext extends ParserRuleContext {
		public NameContext name() {
			return getRuleContext(NameContext.class,0);
		}
		public EntityDeclContext entityDecl() {
			return getRuleContext(EntityDeclContext.class,0);
		}
		public EntityRuleContext entityRule() {
			return getRuleContext(EntityRuleContext.class,0);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(ReColParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(ReColParser.NEWLINE, i);
		}
		public InputContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_input; }
	}

	public final InputContext input() throws RecognitionException {
		InputContext _localctx = new InputContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_input);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(21);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(18);
					match(NEWLINE);
					}
					} 
				}
				setState(23);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			}
			setState(24);
			name();
			setState(28);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NEWLINE) {
				{
				{
				setState(25);
				match(NEWLINE);
				}
				}
				setState(30);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(31);
			entityDecl();
			setState(35);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NEWLINE) {
				{
				{
				setState(32);
				match(NEWLINE);
				}
				}
				setState(37);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(38);
			entityRule();
			setState(42);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NEWLINE) {
				{
				{
				setState(39);
				match(NEWLINE);
				}
				}
				setState(44);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NameContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(ReColParser.ID, 0); }
		public List<TerminalNode> NEWLINE() { return getTokens(ReColParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(ReColParser.NEWLINE, i);
		}
		public NameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_name; }
	}

	public final NameContext name() throws RecognitionException {
		NameContext _localctx = new NameContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_name);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(48);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NEWLINE) {
				{
				{
				setState(45);
				match(NEWLINE);
				}
				}
				setState(50);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(51);
			match(T__0);
			setState(52);
			match(T__1);
			setState(53);
			match(ID);
			setState(57);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(54);
					match(NEWLINE);
					}
					} 
				}
				setState(59);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EntityDeclContext extends ParserRuleContext {
		public List<TerminalNode> NEWLINE() { return getTokens(ReColParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(ReColParser.NEWLINE, i);
		}
		public List<ObjContext> obj() {
			return getRuleContexts(ObjContext.class);
		}
		public ObjContext obj(int i) {
			return getRuleContext(ObjContext.class,i);
		}
		public EntityDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_entityDecl; }
	}

	public final EntityDeclContext entityDecl() throws RecognitionException {
		EntityDeclContext _localctx = new EntityDeclContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_entityDecl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			match(T__2);
			setState(64);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NEWLINE) {
				{
				{
				setState(61);
				match(NEWLINE);
				}
				}
				setState(66);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(67);
			match(T__3);
			setState(71);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NEWLINE || _la==ID) {
				{
				{
				setState(68);
				obj();
				}
				}
				setState(73);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(74);
			match(T__4);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ObjContext extends ParserRuleContext {
		public ObjContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_obj; }
	 
		public ObjContext() { }
		public void copyFrom(ObjContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class NewAttributeContext extends ObjContext {
		public TerminalNode ID() { return getToken(ReColParser.ID, 0); }
		public List<TerminalNode> NEWLINE() { return getTokens(ReColParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(ReColParser.NEWLINE, i);
		}
		public NewAttributeContext(ObjContext ctx) { copyFrom(ctx); }
	}
	public static class NewValueContext extends ObjContext {
		public Token value;
		public TerminalNode ID() { return getToken(ReColParser.ID, 0); }
		public TerminalNode DECIMAL() { return getToken(ReColParser.DECIMAL, 0); }
		public TerminalNode BOOL() { return getToken(ReColParser.BOOL, 0); }
		public TerminalNode STRING() { return getToken(ReColParser.STRING, 0); }
		public List<TerminalNode> NEWLINE() { return getTokens(ReColParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(ReColParser.NEWLINE, i);
		}
		public NewValueContext(ObjContext ctx) { copyFrom(ctx); }
	}
	public static class NewObjectContext extends ObjContext {
		public TerminalNode ID() { return getToken(ReColParser.ID, 0); }
		public List<TerminalNode> NEWLINE() { return getTokens(ReColParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(ReColParser.NEWLINE, i);
		}
		public List<ObjContext> obj() {
			return getRuleContexts(ObjContext.class);
		}
		public ObjContext obj(int i) {
			return getRuleContext(ObjContext.class,i);
		}
		public NewObjectContext(ObjContext ctx) { copyFrom(ctx); }
	}

	public final ObjContext obj() throws RecognitionException {
		ObjContext _localctx = new ObjContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_obj);
		int _la;
		try {
			int _alt;
			setState(125);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				_localctx = new NewObjectContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(79);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==NEWLINE) {
					{
					{
					setState(76);
					match(NEWLINE);
					}
					}
					setState(81);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(82);
				match(ID);
				setState(83);
				match(T__3);
				setState(87);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==NEWLINE || _la==ID) {
					{
					{
					setState(84);
					obj();
					}
					}
					setState(89);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(90);
				match(T__4);
				setState(94);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(91);
						match(NEWLINE);
						}
						} 
					}
					setState(96);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
				}
				}
				break;
			case 2:
				_localctx = new NewAttributeContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(100);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==NEWLINE) {
					{
					{
					setState(97);
					match(NEWLINE);
					}
					}
					setState(102);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(103);
				match(ID);
				setState(107);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(104);
						match(NEWLINE);
						}
						} 
					}
					setState(109);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
				}
				}
				break;
			case 3:
				_localctx = new NewValueContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(113);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==NEWLINE) {
					{
					{
					setState(110);
					match(NEWLINE);
					}
					}
					setState(115);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(116);
				match(ID);
				setState(117);
				match(T__1);
				setState(118);
				((NewValueContext)_localctx).value = _input.LT(1);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOL) | (1L << STRING) | (1L << DECIMAL))) != 0)) ) {
					((NewValueContext)_localctx).value = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(122);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(119);
						match(NEWLINE);
						}
						} 
					}
					setState(124);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EntityRuleContext extends ParserRuleContext {
		public List<TerminalNode> NEWLINE() { return getTokens(ReColParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(ReColParser.NEWLINE, i);
		}
		public List<ActionStatContext> actionStat() {
			return getRuleContexts(ActionStatContext.class);
		}
		public ActionStatContext actionStat(int i) {
			return getRuleContext(ActionStatContext.class,i);
		}
		public EntityRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_entityRule; }
	}

	public final EntityRuleContext entityRule() throws RecognitionException {
		EntityRuleContext _localctx = new EntityRuleContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_entityRule);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(127);
			match(T__5);
			setState(131);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NEWLINE) {
				{
				{
				setState(128);
				match(NEWLINE);
				}
				}
				setState(133);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(134);
			match(T__3);
			setState(138);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NEWLINE || _la==ID) {
				{
				{
				setState(135);
				actionStat();
				}
				}
				setState(140);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(141);
			match(T__4);
			setState(145);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(142);
					match(NEWLINE);
					}
					} 
				}
				setState(147);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ActionStatContext extends ParserRuleContext {
		public ActionStatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_actionStat; }
	 
		public ActionStatContext() { }
		public void copyFrom(ActionStatContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class AssignRulerContext extends ActionStatContext {
		public List<TerminalNode> ID() { return getTokens(ReColParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(ReColParser.ID, i);
		}
		public RulerExprContext rulerExpr() {
			return getRuleContext(RulerExprContext.class,0);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(ReColParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(ReColParser.NEWLINE, i);
		}
		public AssignRulerContext(ActionStatContext ctx) { copyFrom(ctx); }
	}
	public static class AssignValueContext extends ActionStatContext {
		public List<TerminalNode> ID() { return getTokens(ReColParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(ReColParser.ID, i);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(ReColParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(ReColParser.NEWLINE, i);
		}
		public AssignValueContext(ActionStatContext ctx) { copyFrom(ctx); }
	}

	public final ActionStatContext actionStat() throws RecognitionException {
		ActionStatContext _localctx = new ActionStatContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_actionStat);
		int _la;
		try {
			int _alt;
			setState(208);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,27,_ctx) ) {
			case 1:
				_localctx = new AssignValueContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(151);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==NEWLINE) {
					{
					{
					setState(148);
					match(NEWLINE);
					}
					}
					setState(153);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(154);
				match(ID);
				setState(159);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__6) {
					{
					{
					setState(155);
					match(T__6);
					setState(156);
					match(ID);
					}
					}
					setState(161);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(162);
				match(T__7);
				setState(166);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==NEWLINE) {
					{
					{
					setState(163);
					match(NEWLINE);
					}
					}
					setState(168);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(169);
				match(T__8);
				setState(170);
				expr(0);
				setState(171);
				match(T__9);
				setState(175);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(172);
						match(NEWLINE);
						}
						} 
					}
					setState(177);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
				}
				}
				break;
			case 2:
				_localctx = new AssignRulerContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(181);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==NEWLINE) {
					{
					{
					setState(178);
					match(NEWLINE);
					}
					}
					setState(183);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(184);
				match(ID);
				setState(189);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__6) {
					{
					{
					setState(185);
					match(T__6);
					setState(186);
					match(ID);
					}
					}
					setState(191);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(192);
				match(T__7);
				setState(196);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==NEWLINE) {
					{
					{
					setState(193);
					match(NEWLINE);
					}
					}
					setState(198);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(199);
				match(T__8);
				setState(200);
				rulerExpr(0);
				setState(201);
				match(T__9);
				setState(205);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,26,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(202);
						match(NEWLINE);
						}
						} 
					}
					setState(207);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,26,_ctx);
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RulerExprContext extends ParserRuleContext {
		public RulerExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rulerExpr; }
	 
		public RulerExprContext() { }
		public void copyFrom(RulerExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class AndRuleContext extends RulerExprContext {
		public List<RulerExprContext> rulerExpr() {
			return getRuleContexts(RulerExprContext.class);
		}
		public RulerExprContext rulerExpr(int i) {
			return getRuleContext(RulerExprContext.class,i);
		}
		public TerminalNode AND() { return getToken(ReColParser.AND, 0); }
		public AndRuleContext(RulerExprContext ctx) { copyFrom(ctx); }
	}
	public static class ParentsRuleContext extends RulerExprContext {
		public RulerExprContext rulerExpr() {
			return getRuleContext(RulerExprContext.class,0);
		}
		public ParentsRuleContext(RulerExprContext ctx) { copyFrom(ctx); }
	}
	public static class OrRuleContext extends RulerExprContext {
		public List<RulerExprContext> rulerExpr() {
			return getRuleContexts(RulerExprContext.class);
		}
		public RulerExprContext rulerExpr(int i) {
			return getRuleContext(RulerExprContext.class,i);
		}
		public TerminalNode OR() { return getToken(ReColParser.OR, 0); }
		public OrRuleContext(RulerExprContext ctx) { copyFrom(ctx); }
	}
	public static class FollowRuleContext extends RulerExprContext {
		public List<RulerExprContext> rulerExpr() {
			return getRuleContexts(RulerExprContext.class);
		}
		public RulerExprContext rulerExpr(int i) {
			return getRuleContext(RulerExprContext.class,i);
		}
		public FollowRuleContext(RulerExprContext ctx) { copyFrom(ctx); }
	}
	public static class NotRuleContext extends RulerExprContext {
		public TerminalNode NOT() { return getToken(ReColParser.NOT, 0); }
		public RulerExprContext rulerExpr() {
			return getRuleContext(RulerExprContext.class,0);
		}
		public NotRuleContext(RulerExprContext ctx) { copyFrom(ctx); }
	}
	public static class ExprRuleContext extends RulerExprContext {
		public BoolexprContext boolexpr() {
			return getRuleContext(BoolexprContext.class,0);
		}
		public ExprRuleContext(RulerExprContext ctx) { copyFrom(ctx); }
	}
	public static class UntilRuleContext extends RulerExprContext {
		public List<RulerExprContext> rulerExpr() {
			return getRuleContexts(RulerExprContext.class);
		}
		public RulerExprContext rulerExpr(int i) {
			return getRuleContext(RulerExprContext.class,i);
		}
		public UntilRuleContext(RulerExprContext ctx) { copyFrom(ctx); }
	}
	public static class XorRuleContext extends RulerExprContext {
		public List<RulerExprContext> rulerExpr() {
			return getRuleContexts(RulerExprContext.class);
		}
		public RulerExprContext rulerExpr(int i) {
			return getRuleContext(RulerExprContext.class,i);
		}
		public XorRuleContext(RulerExprContext ctx) { copyFrom(ctx); }
	}

	public final RulerExprContext rulerExpr() throws RecognitionException {
		return rulerExpr(0);
	}

	private RulerExprContext rulerExpr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		RulerExprContext _localctx = new RulerExprContext(_ctx, _parentState);
		RulerExprContext _prevctx = _localctx;
		int _startState = 12;
		enterRecursionRule(_localctx, 12, RULE_rulerExpr, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(220);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,28,_ctx) ) {
			case 1:
				{
				_localctx = new NotRuleContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(211);
				match(NOT);
				setState(212);
				rulerExpr(6);
				}
				break;
			case 2:
				{
				_localctx = new NotRuleContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(213);
				match(T__14);
				setState(214);
				rulerExpr(5);
				}
				break;
			case 3:
				{
				_localctx = new ParentsRuleContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(215);
				match(T__17);
				setState(216);
				rulerExpr(0);
				setState(217);
				match(T__18);
				}
				break;
			case 4:
				{
				_localctx = new ExprRuleContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(219);
				boolexpr();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(248);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,30,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(246);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,29,_ctx) ) {
					case 1:
						{
						_localctx = new AndRuleContext(new RulerExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_rulerExpr);
						setState(222);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(223);
						match(AND);
						setState(224);
						rulerExpr(13);
						}
						break;
					case 2:
						{
						_localctx = new AndRuleContext(new RulerExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_rulerExpr);
						setState(225);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(226);
						match(T__10);
						setState(227);
						rulerExpr(12);
						}
						break;
					case 3:
						{
						_localctx = new OrRuleContext(new RulerExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_rulerExpr);
						setState(228);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(229);
						match(OR);
						setState(230);
						rulerExpr(11);
						}
						break;
					case 4:
						{
						_localctx = new OrRuleContext(new RulerExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_rulerExpr);
						setState(231);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(232);
						match(T__11);
						setState(233);
						rulerExpr(10);
						}
						break;
					case 5:
						{
						_localctx = new XorRuleContext(new RulerExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_rulerExpr);
						setState(234);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(235);
						match(T__12);
						setState(236);
						rulerExpr(9);
						}
						break;
					case 6:
						{
						_localctx = new XorRuleContext(new RulerExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_rulerExpr);
						setState(237);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(238);
						match(T__13);
						setState(239);
						rulerExpr(8);
						}
						break;
					case 7:
						{
						_localctx = new FollowRuleContext(new RulerExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_rulerExpr);
						setState(240);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(241);
						match(T__15);
						setState(242);
						rulerExpr(5);
						}
						break;
					case 8:
						{
						_localctx = new UntilRuleContext(new RulerExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_rulerExpr);
						setState(243);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(244);
						match(T__16);
						setState(245);
						rulerExpr(4);
						}
						break;
					}
					} 
				}
				setState(250);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,30,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class BoolexprContext extends ParserRuleContext {
		public BoolexprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_boolexpr; }
	 
		public BoolexprContext() { }
		public void copyFrom(BoolexprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class CheckNEContext extends BoolexprContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode NE() { return getToken(ReColParser.NE, 0); }
		public CheckNEContext(BoolexprContext ctx) { copyFrom(ctx); }
	}
	public static class CheckequalContext extends BoolexprContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode EQ() { return getToken(ReColParser.EQ, 0); }
		public CheckequalContext(BoolexprContext ctx) { copyFrom(ctx); }
	}
	public static class CheckBoolExprContext extends BoolexprContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public CheckBoolExprContext(BoolexprContext ctx) { copyFrom(ctx); }
	}
	public static class CheckGEContext extends BoolexprContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode GE() { return getToken(ReColParser.GE, 0); }
		public CheckGEContext(BoolexprContext ctx) { copyFrom(ctx); }
	}
	public static class CheckLargerContext extends BoolexprContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode GT() { return getToken(ReColParser.GT, 0); }
		public CheckLargerContext(BoolexprContext ctx) { copyFrom(ctx); }
	}
	public static class CheckLessContext extends BoolexprContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode LT() { return getToken(ReColParser.LT, 0); }
		public CheckLessContext(BoolexprContext ctx) { copyFrom(ctx); }
	}
	public static class CheckLEContext extends BoolexprContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode LE() { return getToken(ReColParser.LE, 0); }
		public CheckLEContext(BoolexprContext ctx) { copyFrom(ctx); }
	}

	public final BoolexprContext boolexpr() throws RecognitionException {
		BoolexprContext _localctx = new BoolexprContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_boolexpr);
		try {
			setState(300);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,31,_ctx) ) {
			case 1:
				_localctx = new CheckLargerContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(251);
				expr(0);
				setState(252);
				match(GT);
				setState(253);
				expr(0);
				}
				break;
			case 2:
				_localctx = new CheckLargerContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(255);
				expr(0);
				setState(256);
				match(T__19);
				setState(257);
				expr(0);
				}
				break;
			case 3:
				_localctx = new CheckGEContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(259);
				expr(0);
				setState(260);
				match(GE);
				setState(261);
				expr(0);
				}
				break;
			case 4:
				_localctx = new CheckGEContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(263);
				expr(0);
				setState(264);
				match(T__20);
				setState(265);
				expr(0);
				}
				break;
			case 5:
				_localctx = new CheckLessContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(267);
				expr(0);
				setState(268);
				match(LT);
				setState(269);
				expr(0);
				}
				break;
			case 6:
				_localctx = new CheckLessContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(271);
				expr(0);
				setState(272);
				match(T__21);
				setState(273);
				expr(0);
				}
				break;
			case 7:
				_localctx = new CheckLEContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(275);
				expr(0);
				setState(276);
				match(LE);
				setState(277);
				expr(0);
				}
				break;
			case 8:
				_localctx = new CheckLEContext(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(279);
				expr(0);
				setState(280);
				match(T__22);
				setState(281);
				expr(0);
				}
				break;
			case 9:
				_localctx = new CheckequalContext(_localctx);
				enterOuterAlt(_localctx, 9);
				{
				setState(283);
				expr(0);
				setState(284);
				match(EQ);
				setState(285);
				expr(0);
				}
				break;
			case 10:
				_localctx = new CheckequalContext(_localctx);
				enterOuterAlt(_localctx, 10);
				{
				setState(287);
				expr(0);
				setState(288);
				match(T__23);
				setState(289);
				expr(0);
				}
				break;
			case 11:
				_localctx = new CheckNEContext(_localctx);
				enterOuterAlt(_localctx, 11);
				{
				setState(291);
				expr(0);
				setState(292);
				match(NE);
				setState(293);
				expr(0);
				}
				break;
			case 12:
				_localctx = new CheckNEContext(_localctx);
				enterOuterAlt(_localctx, 12);
				{
				setState(295);
				expr(0);
				setState(296);
				match(T__24);
				setState(297);
				expr(0);
				}
				break;
			case 13:
				_localctx = new CheckBoolExprContext(_localctx);
				enterOuterAlt(_localctx, 13);
				{
				setState(299);
				expr(0);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExprContext extends ParserRuleContext {
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	 
		public ExprContext() { }
		public void copyFrom(ExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class CalNumContext extends ExprContext {
		public Token op;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode MUL() { return getToken(ReColParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(ReColParser.DIV, 0); }
		public TerminalNode ADD() { return getToken(ReColParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(ReColParser.SUB, 0); }
		public CalNumContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class ParensContext extends ExprContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ParensContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class DecimalContext extends ExprContext {
		public TerminalNode DECIMAL() { return getToken(ReColParser.DECIMAL, 0); }
		public DecimalContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class BoolContext extends ExprContext {
		public TerminalNode BOOL() { return getToken(ReColParser.BOOL, 0); }
		public BoolContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class StringContext extends ExprContext {
		public TerminalNode STRING() { return getToken(ReColParser.STRING, 0); }
		public StringContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class NegateContext extends ExprContext {
		public TerminalNode NOT() { return getToken(ReColParser.NOT, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public NegateContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class CalBoolContext extends ExprContext {
		public Token op;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode OR() { return getToken(ReColParser.OR, 0); }
		public TerminalNode AND() { return getToken(ReColParser.AND, 0); }
		public CalBoolContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class IdContext extends ExprContext {
		public List<TerminalNode> ID() { return getTokens(ReColParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(ReColParser.ID, i);
		}
		public IdContext(ExprContext ctx) { copyFrom(ctx); }
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 16;
		enterRecursionRule(_localctx, 16, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(320);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NOT:
				{
				_localctx = new NegateContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(303);
				match(NOT);
				setState(304);
				expr(6);
				}
				break;
			case ID:
				{
				_localctx = new IdContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(305);
				match(ID);
				setState(310);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,32,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(306);
						match(T__6);
						setState(307);
						match(ID);
						}
						} 
					}
					setState(312);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,32,_ctx);
				}
				}
				break;
			case DECIMAL:
				{
				_localctx = new DecimalContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(313);
				match(DECIMAL);
				}
				break;
			case BOOL:
				{
				_localctx = new BoolContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(314);
				match(BOOL);
				}
				break;
			case STRING:
				{
				_localctx = new StringContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(315);
				match(STRING);
				}
				break;
			case T__17:
				{
				_localctx = new ParensContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(316);
				match(T__17);
				setState(317);
				expr(0);
				setState(318);
				match(T__18);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(330);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,35,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(328);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,34,_ctx) ) {
					case 1:
						{
						_localctx = new CalNumContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(322);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(323);
						((CalNumContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MUL) | (1L << DIV) | (1L << ADD) | (1L << SUB))) != 0)) ) {
							((CalNumContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(324);
						expr(9);
						}
						break;
					case 2:
						{
						_localctx = new CalBoolContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(325);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(326);
						((CalBoolContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==AND || _la==OR) ) {
							((CalBoolContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(327);
						expr(8);
						}
						break;
					}
					} 
				}
				setState(332);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,35,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 6:
			return rulerExpr_sempred((RulerExprContext)_localctx, predIndex);
		case 8:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean rulerExpr_sempred(RulerExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 12);
		case 1:
			return precpred(_ctx, 11);
		case 2:
			return precpred(_ctx, 10);
		case 3:
			return precpred(_ctx, 9);
		case 4:
			return precpred(_ctx, 8);
		case 5:
			return precpred(_ctx, 7);
		case 6:
			return precpred(_ctx, 4);
		case 7:
			return precpred(_ctx, 3);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 8:
			return precpred(_ctx, 8);
		case 9:
			return precpred(_ctx, 7);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\61\u0150\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\3\2\7"+
		"\2\26\n\2\f\2\16\2\31\13\2\3\2\3\2\7\2\35\n\2\f\2\16\2 \13\2\3\2\3\2\7"+
		"\2$\n\2\f\2\16\2\'\13\2\3\2\3\2\7\2+\n\2\f\2\16\2.\13\2\3\3\7\3\61\n\3"+
		"\f\3\16\3\64\13\3\3\3\3\3\3\3\3\3\7\3:\n\3\f\3\16\3=\13\3\3\4\3\4\7\4"+
		"A\n\4\f\4\16\4D\13\4\3\4\3\4\7\4H\n\4\f\4\16\4K\13\4\3\4\3\4\3\5\7\5P"+
		"\n\5\f\5\16\5S\13\5\3\5\3\5\3\5\7\5X\n\5\f\5\16\5[\13\5\3\5\3\5\7\5_\n"+
		"\5\f\5\16\5b\13\5\3\5\7\5e\n\5\f\5\16\5h\13\5\3\5\3\5\7\5l\n\5\f\5\16"+
		"\5o\13\5\3\5\7\5r\n\5\f\5\16\5u\13\5\3\5\3\5\3\5\3\5\7\5{\n\5\f\5\16\5"+
		"~\13\5\5\5\u0080\n\5\3\6\3\6\7\6\u0084\n\6\f\6\16\6\u0087\13\6\3\6\3\6"+
		"\7\6\u008b\n\6\f\6\16\6\u008e\13\6\3\6\3\6\7\6\u0092\n\6\f\6\16\6\u0095"+
		"\13\6\3\7\7\7\u0098\n\7\f\7\16\7\u009b\13\7\3\7\3\7\3\7\7\7\u00a0\n\7"+
		"\f\7\16\7\u00a3\13\7\3\7\3\7\7\7\u00a7\n\7\f\7\16\7\u00aa\13\7\3\7\3\7"+
		"\3\7\3\7\7\7\u00b0\n\7\f\7\16\7\u00b3\13\7\3\7\7\7\u00b6\n\7\f\7\16\7"+
		"\u00b9\13\7\3\7\3\7\3\7\7\7\u00be\n\7\f\7\16\7\u00c1\13\7\3\7\3\7\7\7"+
		"\u00c5\n\7\f\7\16\7\u00c8\13\7\3\7\3\7\3\7\3\7\7\7\u00ce\n\7\f\7\16\7"+
		"\u00d1\13\7\5\7\u00d3\n\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b"+
		"\u00df\n\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\7\b\u00f9\n\b\f\b\16\b\u00fc\13\b"+
		"\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3"+
		"\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\5\t\u012f\n\t"+
		"\3\n\3\n\3\n\3\n\3\n\3\n\7\n\u0137\n\n\f\n\16\n\u013a\13\n\3\n\3\n\3\n"+
		"\3\n\3\n\3\n\3\n\5\n\u0143\n\n\3\n\3\n\3\n\3\n\3\n\3\n\7\n\u014b\n\n\f"+
		"\n\16\n\u014e\13\n\3\n\2\4\16\22\13\2\4\6\b\n\f\16\20\22\2\5\4\2\34\35"+
		"\60\60\3\2#&\3\2\'(\2\u0182\2\27\3\2\2\2\4\62\3\2\2\2\6>\3\2\2\2\b\177"+
		"\3\2\2\2\n\u0081\3\2\2\2\f\u00d2\3\2\2\2\16\u00de\3\2\2\2\20\u012e\3\2"+
		"\2\2\22\u0142\3\2\2\2\24\26\7\36\2\2\25\24\3\2\2\2\26\31\3\2\2\2\27\25"+
		"\3\2\2\2\27\30\3\2\2\2\30\32\3\2\2\2\31\27\3\2\2\2\32\36\5\4\3\2\33\35"+
		"\7\36\2\2\34\33\3\2\2\2\35 \3\2\2\2\36\34\3\2\2\2\36\37\3\2\2\2\37!\3"+
		"\2\2\2 \36\3\2\2\2!%\5\6\4\2\"$\7\36\2\2#\"\3\2\2\2$\'\3\2\2\2%#\3\2\2"+
		"\2%&\3\2\2\2&(\3\2\2\2\'%\3\2\2\2(,\5\n\6\2)+\7\36\2\2*)\3\2\2\2+.\3\2"+
		"\2\2,*\3\2\2\2,-\3\2\2\2-\3\3\2\2\2.,\3\2\2\2/\61\7\36\2\2\60/\3\2\2\2"+
		"\61\64\3\2\2\2\62\60\3\2\2\2\62\63\3\2\2\2\63\65\3\2\2\2\64\62\3\2\2\2"+
		"\65\66\7\3\2\2\66\67\7\4\2\2\67;\7\61\2\28:\7\36\2\298\3\2\2\2:=\3\2\2"+
		"\2;9\3\2\2\2;<\3\2\2\2<\5\3\2\2\2=;\3\2\2\2>B\7\5\2\2?A\7\36\2\2@?\3\2"+
		"\2\2AD\3\2\2\2B@\3\2\2\2BC\3\2\2\2CE\3\2\2\2DB\3\2\2\2EI\7\6\2\2FH\5\b"+
		"\5\2GF\3\2\2\2HK\3\2\2\2IG\3\2\2\2IJ\3\2\2\2JL\3\2\2\2KI\3\2\2\2LM\7\7"+
		"\2\2M\7\3\2\2\2NP\7\36\2\2ON\3\2\2\2PS\3\2\2\2QO\3\2\2\2QR\3\2\2\2RT\3"+
		"\2\2\2SQ\3\2\2\2TU\7\61\2\2UY\7\6\2\2VX\5\b\5\2WV\3\2\2\2X[\3\2\2\2YW"+
		"\3\2\2\2YZ\3\2\2\2Z\\\3\2\2\2[Y\3\2\2\2\\`\7\7\2\2]_\7\36\2\2^]\3\2\2"+
		"\2_b\3\2\2\2`^\3\2\2\2`a\3\2\2\2a\u0080\3\2\2\2b`\3\2\2\2ce\7\36\2\2d"+
		"c\3\2\2\2eh\3\2\2\2fd\3\2\2\2fg\3\2\2\2gi\3\2\2\2hf\3\2\2\2im\7\61\2\2"+
		"jl\7\36\2\2kj\3\2\2\2lo\3\2\2\2mk\3\2\2\2mn\3\2\2\2n\u0080\3\2\2\2om\3"+
		"\2\2\2pr\7\36\2\2qp\3\2\2\2ru\3\2\2\2sq\3\2\2\2st\3\2\2\2tv\3\2\2\2us"+
		"\3\2\2\2vw\7\61\2\2wx\7\4\2\2x|\t\2\2\2y{\7\36\2\2zy\3\2\2\2{~\3\2\2\2"+
		"|z\3\2\2\2|}\3\2\2\2}\u0080\3\2\2\2~|\3\2\2\2\177Q\3\2\2\2\177f\3\2\2"+
		"\2\177s\3\2\2\2\u0080\t\3\2\2\2\u0081\u0085\7\b\2\2\u0082\u0084\7\36\2"+
		"\2\u0083\u0082\3\2\2\2\u0084\u0087\3\2\2\2\u0085\u0083\3\2\2\2\u0085\u0086"+
		"\3\2\2\2\u0086\u0088\3\2\2\2\u0087\u0085\3\2\2\2\u0088\u008c\7\6\2\2\u0089"+
		"\u008b\5\f\7\2\u008a\u0089\3\2\2\2\u008b\u008e\3\2\2\2\u008c\u008a\3\2"+
		"\2\2\u008c\u008d\3\2\2\2\u008d\u008f\3\2\2\2\u008e\u008c\3\2\2\2\u008f"+
		"\u0093\7\7\2\2\u0090\u0092\7\36\2\2\u0091\u0090\3\2\2\2\u0092\u0095\3"+
		"\2\2\2\u0093\u0091\3\2\2\2\u0093\u0094\3\2\2\2\u0094\13\3\2\2\2\u0095"+
		"\u0093\3\2\2\2\u0096\u0098\7\36\2\2\u0097\u0096\3\2\2\2\u0098\u009b\3"+
		"\2\2\2\u0099\u0097\3\2\2\2\u0099\u009a\3\2\2\2\u009a\u009c\3\2\2\2\u009b"+
		"\u0099\3\2\2\2\u009c\u00a1\7\61\2\2\u009d\u009e\7\t\2\2\u009e\u00a0\7"+
		"\61\2\2\u009f\u009d\3\2\2\2\u00a0\u00a3\3\2\2\2\u00a1\u009f\3\2\2\2\u00a1"+
		"\u00a2\3\2\2\2\u00a2\u00a4\3\2\2\2\u00a3\u00a1\3\2\2\2\u00a4\u00a8\7\n"+
		"\2\2\u00a5\u00a7\7\36\2\2\u00a6\u00a5\3\2\2\2\u00a7\u00aa\3\2\2\2\u00a8"+
		"\u00a6\3\2\2\2\u00a8\u00a9\3\2\2\2\u00a9\u00ab\3\2\2\2\u00aa\u00a8\3\2"+
		"\2\2\u00ab\u00ac\7\13\2\2\u00ac\u00ad\5\22\n\2\u00ad\u00b1\7\f\2\2\u00ae"+
		"\u00b0\7\36\2\2\u00af\u00ae\3\2\2\2\u00b0\u00b3\3\2\2\2\u00b1\u00af\3"+
		"\2\2\2\u00b1\u00b2\3\2\2\2\u00b2\u00d3\3\2\2\2\u00b3\u00b1\3\2\2\2\u00b4"+
		"\u00b6\7\36\2\2\u00b5\u00b4\3\2\2\2\u00b6\u00b9\3\2\2\2\u00b7\u00b5\3"+
		"\2\2\2\u00b7\u00b8\3\2\2\2\u00b8\u00ba\3\2\2\2\u00b9\u00b7\3\2\2\2\u00ba"+
		"\u00bf\7\61\2\2\u00bb\u00bc\7\t\2\2\u00bc\u00be\7\61\2\2\u00bd\u00bb\3"+
		"\2\2\2\u00be\u00c1\3\2\2\2\u00bf\u00bd\3\2\2\2\u00bf\u00c0\3\2\2\2\u00c0"+
		"\u00c2\3\2\2\2\u00c1\u00bf\3\2\2\2\u00c2\u00c6\7\n\2\2\u00c3\u00c5\7\36"+
		"\2\2\u00c4\u00c3\3\2\2\2\u00c5\u00c8\3\2\2\2\u00c6\u00c4\3\2\2\2\u00c6"+
		"\u00c7\3\2\2\2\u00c7\u00c9\3\2\2\2\u00c8\u00c6\3\2\2\2\u00c9\u00ca\7\13"+
		"\2\2\u00ca\u00cb\5\16\b\2\u00cb\u00cf\7\f\2\2\u00cc\u00ce\7\36\2\2\u00cd"+
		"\u00cc\3\2\2\2\u00ce\u00d1\3\2\2\2\u00cf\u00cd\3\2\2\2\u00cf\u00d0\3\2"+
		"\2\2\u00d0\u00d3\3\2\2\2\u00d1\u00cf\3\2\2\2\u00d2\u0099\3\2\2\2\u00d2"+
		"\u00b7\3\2\2\2\u00d3\r\3\2\2\2\u00d4\u00d5\b\b\1\2\u00d5\u00d6\7)\2\2"+
		"\u00d6\u00df\5\16\b\b\u00d7\u00d8\7\21\2\2\u00d8\u00df\5\16\b\7\u00d9"+
		"\u00da\7\24\2\2\u00da\u00db\5\16\b\2\u00db\u00dc\7\25\2\2\u00dc\u00df"+
		"\3\2\2\2\u00dd\u00df\5\20\t\2\u00de\u00d4\3\2\2\2\u00de\u00d7\3\2\2\2"+
		"\u00de\u00d9\3\2\2\2\u00de\u00dd\3\2\2\2\u00df\u00fa\3\2\2\2\u00e0\u00e1"+
		"\f\16\2\2\u00e1\u00e2\7\'\2\2\u00e2\u00f9\5\16\b\17\u00e3\u00e4\f\r\2"+
		"\2\u00e4\u00e5\7\r\2\2\u00e5\u00f9\5\16\b\16\u00e6\u00e7\f\f\2\2\u00e7"+
		"\u00e8\7(\2\2\u00e8\u00f9\5\16\b\r\u00e9\u00ea\f\13\2\2\u00ea\u00eb\7"+
		"\16\2\2\u00eb\u00f9\5\16\b\f\u00ec\u00ed\f\n\2\2\u00ed\u00ee\7\17\2\2"+
		"\u00ee\u00f9\5\16\b\13\u00ef\u00f0\f\t\2\2\u00f0\u00f1\7\20\2\2\u00f1"+
		"\u00f9\5\16\b\n\u00f2\u00f3\f\6\2\2\u00f3\u00f4\7\22\2\2\u00f4\u00f9\5"+
		"\16\b\7\u00f5\u00f6\f\5\2\2\u00f6\u00f7\7\23\2\2\u00f7\u00f9\5\16\b\6"+
		"\u00f8\u00e0\3\2\2\2\u00f8\u00e3\3\2\2\2\u00f8\u00e6\3\2\2\2\u00f8\u00e9"+
		"\3\2\2\2\u00f8\u00ec\3\2\2\2\u00f8\u00ef\3\2\2\2\u00f8\u00f2\3\2\2\2\u00f8"+
		"\u00f5\3\2\2\2\u00f9\u00fc\3\2\2\2\u00fa\u00f8\3\2\2\2\u00fa\u00fb\3\2"+
		"\2\2\u00fb\17\3\2\2\2\u00fc\u00fa\3\2\2\2\u00fd\u00fe\5\22\n\2\u00fe\u00ff"+
		"\7*\2\2\u00ff\u0100\5\22\n\2\u0100\u012f\3\2\2\2\u0101\u0102\5\22\n\2"+
		"\u0102\u0103\7\26\2\2\u0103\u0104\5\22\n\2\u0104\u012f\3\2\2\2\u0105\u0106"+
		"\5\22\n\2\u0106\u0107\7+\2\2\u0107\u0108\5\22\n\2\u0108\u012f\3\2\2\2"+
		"\u0109\u010a\5\22\n\2\u010a\u010b\7\27\2\2\u010b\u010c\5\22\n\2\u010c"+
		"\u012f\3\2\2\2\u010d\u010e\5\22\n\2\u010e\u010f\7,\2\2\u010f\u0110\5\22"+
		"\n\2\u0110\u012f\3\2\2\2\u0111\u0112\5\22\n\2\u0112\u0113\7\30\2\2\u0113"+
		"\u0114\5\22\n\2\u0114\u012f\3\2\2\2\u0115\u0116\5\22\n\2\u0116\u0117\7"+
		"-\2\2\u0117\u0118\5\22\n\2\u0118\u012f\3\2\2\2\u0119\u011a\5\22\n\2\u011a"+
		"\u011b\7\31\2\2\u011b\u011c\5\22\n\2\u011c\u012f\3\2\2\2\u011d\u011e\5"+
		"\22\n\2\u011e\u011f\7.\2\2\u011f\u0120\5\22\n\2\u0120\u012f\3\2\2\2\u0121"+
		"\u0122\5\22\n\2\u0122\u0123\7\32\2\2\u0123\u0124\5\22\n\2\u0124\u012f"+
		"\3\2\2\2\u0125\u0126\5\22\n\2\u0126\u0127\7/\2\2\u0127\u0128\5\22\n\2"+
		"\u0128\u012f\3\2\2\2\u0129\u012a\5\22\n\2\u012a\u012b\7\33\2\2\u012b\u012c"+
		"\5\22\n\2\u012c\u012f\3\2\2\2\u012d\u012f\5\22\n\2\u012e\u00fd\3\2\2\2"+
		"\u012e\u0101\3\2\2\2\u012e\u0105\3\2\2\2\u012e\u0109\3\2\2\2\u012e\u010d"+
		"\3\2\2\2\u012e\u0111\3\2\2\2\u012e\u0115\3\2\2\2\u012e\u0119\3\2\2\2\u012e"+
		"\u011d\3\2\2\2\u012e\u0121\3\2\2\2\u012e\u0125\3\2\2\2\u012e\u0129\3\2"+
		"\2\2\u012e\u012d\3\2\2\2\u012f\21\3\2\2\2\u0130\u0131\b\n\1\2\u0131\u0132"+
		"\7)\2\2\u0132\u0143\5\22\n\b\u0133\u0138\7\61\2\2\u0134\u0135\7\t\2\2"+
		"\u0135\u0137\7\61\2\2\u0136\u0134\3\2\2\2\u0137\u013a\3\2\2\2\u0138\u0136"+
		"\3\2\2\2\u0138\u0139\3\2\2\2\u0139\u0143\3\2\2\2\u013a\u0138\3\2\2\2\u013b"+
		"\u0143\7\60\2\2\u013c\u0143\7\34\2\2\u013d\u0143\7\35\2\2\u013e\u013f"+
		"\7\24\2\2\u013f\u0140\5\22\n\2\u0140\u0141\7\25\2\2\u0141\u0143\3\2\2"+
		"\2\u0142\u0130\3\2\2\2\u0142\u0133\3\2\2\2\u0142\u013b\3\2\2\2\u0142\u013c"+
		"\3\2\2\2\u0142\u013d\3\2\2\2\u0142\u013e\3\2\2\2\u0143\u014c\3\2\2\2\u0144"+
		"\u0145\f\n\2\2\u0145\u0146\t\3\2\2\u0146\u014b\5\22\n\13\u0147\u0148\f"+
		"\t\2\2\u0148\u0149\t\4\2\2\u0149\u014b\5\22\n\n\u014a\u0144\3\2\2\2\u014a"+
		"\u0147\3\2\2\2\u014b\u014e\3\2\2\2\u014c\u014a\3\2\2\2\u014c\u014d\3\2"+
		"\2\2\u014d\23\3\2\2\2\u014e\u014c\3\2\2\2&\27\36%,\62;BIQY`fms|\177\u0085"+
		"\u008c\u0093\u0099\u00a1\u00a8\u00b1\u00b7\u00bf\u00c6\u00cf\u00d2\u00de"+
		"\u00f8\u00fa\u012e\u0138\u0142\u014a\u014c";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}