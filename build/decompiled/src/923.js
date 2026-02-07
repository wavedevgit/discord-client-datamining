// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var5 = function arg0() {
        _fun9648: for (var _fun9648_ip = 0;;) switch (_fun9648_ip) {
            case 0:
                var4 = arg0;
                var5 = global;
                var3 = var5.Object;
                var2 = var3.assign;
                var1 = {};
                var0 = 'path';
                var7 = var0 in var4;
                var6 = undefined;
                if (!var7) {
                    _fun9648_ip = 78;
                    continue _fun9648
                }
            case 31:
                var9 = var5.Array;
                var8 = var9.isArray;
                var7 = var4.path;
                var7 = var8.bind(var9)(var7);
                var6 = undefined;
                if (!var7) {
                    _fun9648_ip = 78;
                    continue _fun9648
                }
            case 58:
                var9 = var4.path;
                var8 = var9.join;
                var7 = '.';
                var6 = var8.bind(var9)(var7);
            case 78:
                var1.path = var6;
                var6 = 'keys';
                var7 = var6 in var4;
                var6 = undefined;
                if (!var7) {
                    _fun9648_ip = 118;
                    continue _fun9648
                }
            case 96:
                var9 = var5.JSON;
                var8 = var9.stringify;
                var7 = var4.keys;
                var6 = var8.bind(var9)(var7);
            case 118:
                var1.keys = var6;
                var6 = 'unionErrors';
                var6 = var6 in var4;
                var0 = undefined;
                if (!var6) {
                    _fun9648_ip = 158;
                    continue _fun9648
                }
            case 135:
                var7 = var5.JSON;
                var6 = var7.stringify;
                var5 = var4.unionErrors;
                var0 = var6.bind(var7)(var5);
            case 158:
                var1.unionErrors = var0;
                var0 = {};
                var0 = var2.bind(var3)(var0, var4, var1);
                return var0;
        }
    };
    var _closure1_slot3 = var5;
    var4 = function arg0() {
        var2 = arg0;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            _fun9650: for (var _fun9650_ip = 0;;) switch (_fun9650_ip) {
                case 0:
                    var1 = arg0;
                    var0 = '<array>';
                    var3 = 'number';
                    var2 = typeof var1;
                    if (!(var3 !== var2)) {
                        _fun9650_ip = 23;
                        continue _fun9650
                    }
                case 20:
                    var0 = var1;
                case 23:
                    return var0;
            }
        };
        var2 = var1.bind(var2)(var0);
        var1 = var2.join;
        var0 = '.';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot4 = var4;
    var3 = function arg0() {
        _fun9651: for (var _fun9651_ip = 0;;) switch (_fun9651_ip) {
            case 0:
                var1 = arg0;
                var3 = undefined;
                var4 = undefined;
                var8 = undefined;
                var0 = global;
                var2 = var0.Set;
                var5 = var2.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var2
                    }
                });
                var14 = var5;
                var2 = new var14[var2](var13);
                var4 = var2 instanceof Object ? var2 : var5;
                var2 = var1.issues;
                var6 = var2;
                var7 = var6[Symbol.iterator];
                var6 = var7().next;
                var5 = 0;
            case 54:
                var9 = var6().value;
                var10 = var7;
                if (!(var10 !== var3)) {
                    _fun9651_ip = 117;
                    continue _fun9651
                }
            case 65: // try_start_0
                var10 = _closure1_slot4;
                var9 = var9.path;
                var9 = var10.bind(var3)(var9);
                var8 = var9;
                var9 = var9.length;
                if (!(var9 > var5)) {
                    _fun9651_ip = 108;
                    continue _fun9651
                }
            case 92:
                var11 = var4;
                var10 = var11.add;
                var9 = var8;
                var9 = var10.bind(var11)(var9);
            case 108: // try_end0
                _fun9651_ip = 54;
                continue _fun9651;
            case 110: // catch_target0
                CatchBlockStart(arg_register = 6);
                var7.return();
                throw var6;
            case 117:
                var7 = var0.Array;
                var6 = var7.from;
                var8 = var6.bind(var7)(var4);
                var4 = var8.length;
                if (!(var5 !== var4)) {
                    _fun9651_ip = 217;
                    continue _fun9651
                }
            case 142:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 2;
                var2 = var6[var2];
                var7 = var4.bind(var3)(var2);
                var6 = var7.truncate;
                var4 = var8.join;
                var2 = ', ';
                var4 = var4.bind(var8)(var2);
                var2 = 100;
                var6 = var6.bind(var7)(var4, var2);
                var2 = var0.HermesInternal;
                var4 = var2.concat;
                var2 = 'Failed to validate keys: ';
                var2 = var4.bind(var2)(var6);
                return var2;
            case 217:
                var2 = var1.issues;
                var2 = var2.length;
                var6 = var2 > var5;
                var4 = 'variable';
                var2 = var4;
                if (!var6) {
                    _fun9651_ip = 299;
                    continue _fun9651
                }
            case 242:
                var1 = var1.issues;
                var1 = var1[var5];
                var3 = var3 !== var1;
                if (!var3) {
                    _fun9651_ip = 267;
                    continue _fun9651
                }
            case 259:
                var5 = 'expected';
                var3 = var5 in var1;
            case 267:
                if (!var3) {
                    _fun9651_ip = 287;
                    continue _fun9651
                }
            case 270:
                var5 = var1.expected;
                var6 = 'string';
                var5 = typeof var5;
                var3 = var6 === var5;
            case 287:
                var2 = var4;
                if (!var3) {
                    _fun9651_ip = 299;
                    continue _fun9651
                }
            case 293:
                var2 = var1.expected;
            case 299:
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'Failed to validate ';
                var0 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var6 = function arg0() {
        _fun9652: for (var _fun9652_ip = 0;;) switch (_fun9652_ip) {
            case 0:
                var18 = undefined;
                var5 = undefined;
                var1 = arg0;
                var2 = undefined;
                var0 = undefined;
                var15 = undefined;
                var10 = undefined;
                var3 = arguments.length;
                var20 = 1;
                var3 = var3 > var20;
                if (!var3) {
                    _fun9652_ip = 36;
                    continue _fun9652
                }
            case 28:
                var4 = arguments[var20];
                var3 = var18 !== var4;
            case 36:
                if (!var3) {
                    _fun9652_ip = 43;
                    continue _fun9652
                }
            case 39:
                var3 = arguments[var20];
            case 43:
                var2 = var3;
                var3 = arguments.length;
                var4 = 2;
                var6 = var3 > var4;
                var3 = undefined;
                if (!var6) {
                    _fun9652_ip = 65;
                    continue _fun9652
                }
            case 61:
                var3 = arguments[var4];
            case 65:
                var0 = var3;
                var3 = arguments.length;
                var4 = 3;
                var6 = var3 > var4;
                var3 = undefined;
                if (!var6) {
                    _fun9652_ip = 87;
                    continue _fun9652
                }
            case 83:
                var3 = arguments[var4];
            case 87:
                var15 = var3;
                var3 = var0;
                var3 = var3.exception;
                var4 = null;
                if (!(var4 != var3)) {
                    _fun9652_ip = 789;
                    continue _fun9652
                }
            case 108:
                var3 = var3.values;
                if (!var3) {
                    _fun9652_ip = 789;
                    continue _fun9652
                }
            case 119:
                var3 = var15;
                var3 = var3.originalException;
                if (!var3) {
                    _fun9652_ip = 789;
                    continue _fun9652
                }
            case 134:
                var3 = var15;
                var4 = var3.originalException;
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var20];
                var5 = var5.bind(var18)(var3);
                var3 = var5.isError;
                var3 = var3.bind(var5)(var4);
                if (!var3) {
                    _fun9652_ip = 192;
                    continue _fun9652
                }
            case 177:
                var6 = var4.name;
                var5 = 'ZodError';
                var3 = var5 === var6;
            case 192:
                if (!var3) {
                    _fun9652_ip = 219;
                    continue _fun9652
                }
            case 195:
                var5 = global;
                var6 = var5.Array;
                var5 = var6.isArray;
                var4 = var4.issues;
                var3 = var5.bind(var6)(var4);
            case 219:
                if (!var3) {
                    _fun9652_ip = 789;
                    continue _fun9652
                }
            case 225:
                var3 = var15;
                var3 = var3.originalException;
                var3 = var3.issues;
                var3 = var3.length;
                var13 = 0;
                if (!(var13 !== var3)) {
                    _fun9652_ip = 789;
                    continue _fun9652
                }
            case 254: // try_start_0
                var4 = var2;
                var3 = var15;
                var3 = var3.originalException;
                var3 = var3.issues;
                if (var4) {
                    _fun9652_ip = 291;
                    continue _fun9652
                }
            case 275:
                var5 = var3.slice;
                var4 = var1;
                var5 = var5.bind(var3)(var13, var4);
                _fun9652_ip = 294;
                continue _fun9652;
            case 291:
                var5 = var3;
            case 294:
                var4 = var5.map;
                var3 = _closure1_slot3;
                var10 = var4.bind(var5)(var3);
                if (!var2) {
                    _fun9652_ip = 417;
                    continue _fun9652
                }
            case 311:
                var5 = global;
                var4 = var5.Array;
                var3 = var4.isArray;
                var2 = var15;
                var2 = var2.attachments;
                var2 = var3.bind(var4)(var2);
                if (var2) {
                    _fun9652_ip = 354;
                    continue _fun9652
                }
            case 341:
                var3 = var15;
                var2 = new Array(0);
                var3.attachments = var2;
            case 354:
                var2 = var15;
                var4 = var2.attachments;
                var3 = var4.push;
                var2 = {};
                var6 = 'zod_issues.json';
                var2.filename = var6;
                var8 = var5.JSON;
                var6 = var8.stringify;
                var5 = {};
                var9 = var10;
                var5.issues = var9;
                var5 = var6.bind(var8)(var5);
                var2.data = var5;
                var2 = var3.bind(var4)(var2);
            case 417:
                var6 = global;
                var5 = var6.Object;
                var4 = var5.assign;
                var3 = var0;
                var2 = {};
                var14 = var6.Object;
                var11 = var14.assign;
                var9 = var3.exception;
                var8 = {};
                var21 = var6.Object;
                var19 = var21.assign;
                var16 = var3.exception;
                var16 = var16.values;
                var17 = var16[var13];
                var16 = {};
                var22 = _closure1_slot5;
                var15 = var15.originalException;
                var15 = var22.bind(var18)(var15);
                var16.value = var15;
                var15 = {};
                var15 = var19.bind(var21)(var15, var17, var16);
                var16 = new Array(1);
                var16[0] = var15;
                var15 = var16.concat;
                var17 = _closure1_slot2;
                var7 = var3.exception;
                var19 = var7.values;
                var7 = var19.slice;
                var7 = var7.bind(var19)(var20);
                var7 = var17.bind(var18)(var7);
                var7 = var15.bind(var16)(var7);
                var8.values = var7;
                var7 = {};
                var7 = var11.bind(var14)(var7, var9, var8);
                var2.exception = var7;
                var9 = var6.Object;
                var8 = var9.assign;
                var7 = var3.extra;
                var6 = {};
                var11 = var10;
                var10 = var11.slice;
                var1 = var10.bind(var11)(var13, var1);
                var6['zoderror.issues'] = var1;
                var1 = {};
                var1 = var8.bind(var9)(var1, var7, var6);
                var2.extra = var1;
                var1 = {};
                var1 = var4.bind(var5)(var1, var3, var2);
            case 637: // try_end0
                return var1;
            case 639: // catch_target0
                CatchBlockStart(arg_register = 13);
                var12 = var13;
                var11 = global;
                var5 = var11.Object;
                var4 = var5.assign;
                var3 = var0;
                var2 = {};
                var9 = var11.Object;
                var8 = var9.assign;
                var7 = var3.extra;
                var6 = {};
                var1 = {};
                var10 = 'an exception was thrown while processing ZodError within applyZodErrorsToEvent()';
                var1.message = var10;
                var10 = var11.Error;
                var13 = var13 instanceof var10;
                var10 = 'unknown';
                if (!var13) {
                    _fun9652_ip = 755;
                    continue _fun9652
                }
            case 710:
                var27 = var12.name;
                var25 = var12.message;
                var23 = var12.stack;
                var11 = var11.HermesInternal;
                var14 = var11.concat;
                var28 = '';
                var26 = ': ';
                var24 = '\n';
                var10 = var28[var14](var27, var26, var25, var24, var23, var22);
            case 755:
                var1.error = var10;
                var6['zoderrors sentry integration parse error'] = var1;
                var1 = {};
                var1 = var8.bind(var9)(var1, var7, var6);
                var2.extra = var1;
                var1 = {};
                var1 = var4.bind(var5)(var1, var3, var2);
                return var1;
            case 789:
                return var0;
        }
    };
    var _closure1_slot6 = var6;
    var0 = 0;
    var7 = var9[var0];
    var0 = undefined;
    var7 = var8.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = global;
    var12 = var7.Object;
    var11 = var12.defineProperty;
    var7 = var7.Symbol;
    var10 = var7.toStringTag;
    var7 = {};
    var13 = 'Module';
    var7.value = var13;
    var7 = var11.bind(var12)(var2, var10, var7);
    var7 = 3;
    var7 = var9[var7];
    var8 = var8.bind(var0)(var7);
    var7 = var8.defineIntegration;
    var1 = function() {
        _fun9653: for (var _fun9653_ip = 0;;) switch (_fun9653_ip) {
            case 0:
                var4 = undefined;
                var3 = undefined;
                var0 = arguments.length;
                var2 = 0;
                if (!(var0 > var2)) {
                    _fun9653_ip = 23;
                    continue _fun9653
                }
            case 15:
                var0 = arguments[var2];
                if (!(var4 === var0)) {
                    _fun9653_ip = 27;
                    continue _fun9653
                }
            case 23:
                var0 = {};
                _fun9653_ip = 31;
                continue _fun9653;
            case 27:
                var0 = arguments[var2];
            case 31:
                var _closure2_slot0 = var0;
                var2 = var0.limit;
                var0 = null;
                var3 = var0 != var2;
                var0 = 10;
                if (!var3) {
                    _fun9653_ip = 55;
                    continue _fun9653
                }
            case 52:
                var0 = var2;
            case 55:
                var _closure2_slot1 = var0;
                var0 = {};
                var2 = 'ZodErrors';
                var0.name = var2;
                var1 = function arg0, arg1() {
                    var5 = _closure1_slot6;
                    var9 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var8 = var0.saveZodIssuesAsAttachment;
                    var10 = undefined;
                    var7 = arg0;
                    var6 = arg1;
                    var0 = var10[var5](var9, var8, var7, var6, var5);
                    return var0;
                };
                var0.processEvent = var1;
                return var0;
        }
    };
    var1 = var7.bind(var8)(var1);
    var2.applyZodErrorsToEvent = var6;
    var2.flattenIssue = var5;
    var2.flattenIssuePath = var4;
    var2.formatIssueMessage = var3;
    var2.zodErrorsIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 827, 831, 881]);