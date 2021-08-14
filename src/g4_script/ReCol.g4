grammar ReCol;


input: NEWLINE* name NEWLINE* entityDecl NEWLINE* entityRule NEWLINE*;

name: NEWLINE* 'regulation' ':' ID NEWLINE*;
/* =========================entityDecl==================================== */

entityDecl: 'Entities' NEWLINE* '{' obj* '}'
;

obj: NEWLINE* ID '{' obj* '}'	NEWLINE*					#newObject
| NEWLINE* ID  NEWLINE*										#newAttribute
| NEWLINE* ID ':' value=(DECIMAL|BOOL|STRING) NEWLINE*		#newValue
;



/* =========================entityRule================================== */

entityRule: 'Rules' NEWLINE*  '{' actionStat* '}' NEWLINE*;

actionStat: NEWLINE* ID('.'ID)* '=' NEWLINE*'[' expr ']' NEWLINE*   			# assignValue
|			NEWLINE* ID('.'ID)* '=' NEWLINE*'[' rulerExpr ']' NEWLINE*			# assignRuler
;




rulerExpr:  rulerExpr '&'   rulerExpr									# AndRule
|			rulerExpr 'AND' rulerExpr									# AndRule
|			rulerExpr '|'   rulerExpr									# OrRule
|			rulerExpr 'OR'  rulerExpr									# OrRule
|			rulerExpr '^'   rulerExpr									# XorRule
|			rulerExpr 'XOR' rulerExpr									# XorRule
|			'!' rulerExpr												# NotRule
|			'NOT' rulerExpr												# NotRule
|			rulerExpr 'Follow' rulerExpr								# FollowRule
|			rulerExpr 'Until' rulerExpr									# UntilRule
|			'(' rulerExpr ')'											# ParentsRule
|			boolexpr													# ExprRule
;



/* =================================================================== */

boolexpr: expr '>' expr 	#checkLarger
|		  expr 'GT' expr 	#checkLarger
|		  expr '>=' expr	#checkGE
|		  expr 'GE' expr	#checkGE
|		  expr '<' expr  	#checkLess
|		  expr 'LT' expr  	#checkLess
|		  expr '<=' expr	#checkLE
|		  expr 'LE' expr	#checkLE
|		  expr '==' expr 	#checkequal
|		  expr 'EQ' expr 	#checkequal
|		  expr '!=' expr 	#checkNE
|		  expr 'NE' expr 	#checkNE
|		  expr			 	#checkBoolExpr
;

expr:expr op=('*'|'/'|'+'|'-') expr     # calNum
| expr op=('|'|'&') expr        		# calBool
| '!' expr								# negate
| ID('.'ID)*                            # id
| DECIMAL								# Decimal
| BOOL									# bool
| STRING								# string
| '(' expr ')'                  		# parens
;



/* =================================================================== */

BOOL: 'True' | 'False';
STRING: '"' ~('"')* '"';


NEWLINE:'\r'? '\n' ;
WS : [ \t]+ -> skip ;
COMMENT : '/*' .*? '*/' -> skip;
LINE_COMMENT : '//' ~[\r\n]* -> skip;
PYTHON_COMMENT : '#' ~[\r\n]* -> skip;

MUL : '*' ;
DIV : '/' ;
ADD : '+' ;
SUB : '-' ;
AND : '&' ;
OR  : '|' ;
NOT : '!' ;
GT	: '>' ;
GE	: '>=';
LT	: '<' ;
LE	: '<=';
EQ	: '==';
NE	: '!=';

DECIMAL    : '-'? [0-9]+ ( '.' [0-9]+ )? ;
ID : [a-zA-Z_][a-zA-Z_0-9]* ;

