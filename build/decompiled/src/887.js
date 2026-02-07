// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function arg0, arg1() {
        _fun9386: for (var _fun9386_ip = 0;;) switch (_fun9386_ip) {
            case 0:
                var0 = arg1;
                var3 = var0.stack;
                if (var3) {
                    _fun9386_ip = 16;
                    continue _fun9386
                }
            case 12:
                var3 = '';
            case 16:
                var2 = arg0;
                var1 = undefined;
                var0 = 1;
                var0 = var2.bind(var1)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot4 = var1;
    var3 = function arg0, arg1() {
        _fun9387: for (var _fun9387_ip = 0;;) switch (_fun9387_ip) {
            case 0:
                var4 = arg1;
                var0 = {};
                var1 = var4.name;
                if (var1) {
                    _fun9387_ip = 23;
                    continue _fun9387
                }
            case 13:
                var2 = var4.constructor;
                var1 = var2.name;
            case 23:
                var0.type = var1;
                var1 = var4.message;
                var0.value = var1;
                var3 = _closure1_slot4;
                var2 = undefined;
                var1 = arg0;
                var2 = var3.bind(var2)(var1, var4);
                var1 = var2.length;
                if (!var1) {
                    _fun9387_ip = 75;
                    continue _fun9387
                }
            case 62:
                var1 = {};
                var1.frames = var2;
                var0.stacktrace = var1;
            case 75:
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = function arg0() {
        _fun9388: for (var _fun9388_ip = 0;;) switch (_fun9388_ip) {
            case 0:
                var3 = arg0;
                var0 = 'name';
                var0 = var0 in var3;
                if (!var0) {
                    _fun9388_ip = 33;
                    continue _fun9388
                }
            case 14:
                var0 = var3.name;
                var6 = 'string';
                var0 = typeof var0;
                if (!(var6 !== var0)) {
                    _fun9388_ip = 288;
                    continue _fun9388
                }
            case 33:
                var0 = 'message';
                var0 = var0 in var3;
                if (!var0) {
                    _fun9388_ip = 63;
                    continue _fun9388
                }
            case 44:
                var0 = var3.message;
                var1 = 'string';
                var0 = typeof var0;
                if (!(var1 !== var0)) {
                    _fun9388_ip = 281;
                    continue _fun9388
                }
            case 63:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 2;
                var1 = var4[var0];
                var0 = undefined;
                var5 = var2.bind(var0)(var1);
                var1 = var5.extractExceptionKeysForMessage;
                var5 = var1.bind(var5)(var3);
                var1 = 3;
                var1 = var4[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.isErrorEvent;
                var1 = var1.bind(var2)(var3);
                if (var1) {
                    _fun9388_ip = 245;
                    continue _fun9388
                }
            case 125:
                var2 = var3;
                var1 = undefined;
            case 130: // try_start_0
                var4 = global;
                var7 = var4.Object;
                var4 = var7.getPrototypeOf;
                var4 = var4.bind(var7)(var2);
                var1 = var4;
                var2 = undefined;
                if (!var4) {
                    _fun9388_ip = 167;
                    continue _fun9388
                }
            case 157:
                var1 = var1.constructor;
                var2 = var1.name;
            case 167: // try_end0
                _fun9388_ip = 173;
                continue _fun9388;
            case 169: // catch_target0
                CatchBlockStart(arg_register = 1);
                var2 = undefined;
            case 173:
                var0 = 'Object';
                var4 = var0;
                if (!var2) {
                    _fun9388_ip = 213;
                    continue _fun9388
                }
            case 183:
                var4 = var0;
                if (!(var4 !== var2)) {
                    _fun9388_ip = 213;
                    continue _fun9388
                }
            case 190:
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = "'";
                var4 = var1.bind(var0)(var2, var0);
            case 213:
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '';
                var0 = ' captured as exception with keys: ';
                var0 = var2.bind(var1)(var4, var0, var5);
                return var0;
            case 245:
                var4 = var3.message;
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = 'Event `ErrorEvent` captured as exception with message `';
                var0 = '`';
                var0 = var2.bind(var1)(var4, var0);
                return var0;
            case 281:
                var0 = var3.message;
                return var0;
            case 288:
                var4 = var3.name;
                var1 = global;
                var0 = var1.HermesInternal;
                var2 = var0.concat;
                var5 = "'";
                var0 = "' captured as exception";
                var2 = var2.bind(var5)(var4, var0);
                var0 = 'message';
                var4 = var0 in var3;
                if (!var4) {
                    _fun9388_ip = 345;
                    continue _fun9388
                }
            case 333:
                var0 = var3.message;
                var0 = typeof var0;
                var4 = var6 === var0;
            case 345:
                var0 = var2;
                if (!var4) {
                    _fun9388_ip = 383;
                    continue _fun9388
                }
            case 351:
                var4 = var3.message;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var1 = " with message '";
                var1 = var3.bind(var1)(var4, var5);
                var0 = var2 + var1;
            case 383:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun9389: for (var _fun9389_ip = 0;;) switch (_fun9389_ip) {
            case 0:
                var4 = arg0;
                var2 = arg2;
                var7 = arg3;
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var6 = 3;
                var3 = var1[var6];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.isError;
                var3 = var3.bind(var5)(var2);
                if (var3) {
                    _fun9389_ip = 438;
                    continue _fun9389
                }
            case 51:
                var5 = true;
                var3 = arg1;
                var3.synthetic = var5;
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var5 = var5.bind(var1)(var3);
                var3 = var5.isPlainObject;
                var3 = var3.bind(var5)(var2);
                var5 = null;
                if (var3) {
                    _fun9389_ip = 186;
                    continue _fun9389
                }
            case 95:
                var3 = var5 == var7;
                var6 = undefined;
                if (var3) {
                    _fun9389_ip = 110;
                    continue _fun9389
                }
            case 104:
                var6 = var7.syntheticException;
            case 110:
                if (var6) {
                    _fun9389_ip = 144;
                    continue _fun9389
                }
            case 113:
                var3 = global;
                var3 = var3.Error;
                var8 = var3.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var3
                    }
                });
                var20 = var8;
                var19 = var2;
                var3 = new var20[var3](var19, var18);
                var6 = var3 instanceof Object ? var3 : var8;
            case 144:
                var3 = global;
                var3 = var3.HermesInternal;
                var8 = var3.concat;
                var3 = '';
                var3 = var8.bind(var3)(var2);
                var6.message = var3;
                var3 = new Array(2);
                var3[0] = var6;
                var3[1] = var1;
                return var3;
            case 186:
                var3 = var5 == var4;
                var6 = undefined;
                if (var3) {
                    _fun9389_ip = 211;
                    continue _fun9389
                }
            case 195:
                var3 = var4.getOptions;
                var3 = var3.bind(var4)();
                var6 = var3.normalizeDepth;
            case 211:
                var8 = _closure1_slot3;
                var4 = _closure1_slot0;
                var9 = _closure1_slot1;
                var3 = 4;
                var3 = var9[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.normalizeToSize;
                var6 = var3.bind(var4)(var2, var6);
                var4 = {};
                var3 = '__serialized__';
                var3 = var8.bind(var1)(var4, var3, var6);
                var13 = var2;
                var6 = global;
                var9 = undefined;
                var4 = undefined;
                for (var10 in var13)
                    case 277: {
                        var4 = undefined;
                        case 288: var8 = var10;
                        var15 = var6.Object;
                        var15 = var15.prototype;
                        var16 = var15.hasOwnProperty;
                        var15 = var16.call;
                        var15 = var15.bind(var16)(var2, var8);
                        if (!var15) {
                            _fun9389_ip = 277;
                            continue _fun9389
                        }
                        case 322: var15 = var2[var8];
                        var8 = var6.Error;
                        var8 = var15 instanceof var8;
                        var9 = var15;
                        var4 = var9;
                        if (!var8) {
                            _fun9389_ip = 277;
                            continue _fun9389
                        }
                    }
            case 345:
                if (var4) {
                    _fun9389_ip = 424;
                    continue _fun9389
                }
            case 348:
                var0 = _closure1_slot6;
                var0 = var0.bind(var1)(var2);
                var8 = var5 == var7;
                var5 = undefined;
                if (var8) {
                    _fun9389_ip = 372;
                    continue _fun9389
                }
            case 366:
                var5 = var7.syntheticException;
            case 372:
                if (var5) {
                    _fun9389_ip = 404;
                    continue _fun9389
                }
            case 375:
                var6 = var6.Error;
                var7 = var6.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var6
                    }
                });
                var20 = var7;
                var19 = var0;
                var6 = new var20[var6](var19, var18);
                var5 = var6 instanceof Object ? var6 : var7;
            case 404:
                var5.message = var0;
                var0 = new Array(2);
                var0[0] = var5;
                var0[1] = var3;
                return var0;
            case 424:
                var0 = new Array(2);
                var0[0] = var4;
                var0[1] = var3;
                return var0;
            case 438:
                var0 = new Array(2);
                var0[0] = var2;
                var0[1] = var1;
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = global;
    var8 = var5.Object;
    var7 = var8.defineProperty;
    var5 = var5.Symbol;
    var6 = var5.toStringTag;
    var5 = {};
    var9 = 'Module';
    var5.value = var9;
    var5 = var7.bind(var8)(var2, var6, var5);
    var5 = function arg0, arg1() {
        _fun9390: for (var _fun9390_ip = 0;;) switch (_fun9390_ip) {
            case 0:
                var1 = arg1;
                var4 = undefined;
                var2 = undefined;
                var3 = arguments.length;
                var0 = 2;
                var3 = var3 > var0;
                var5 = 'info';
                var7 = var5;
                if (!var3) {
                    _fun9390_ip = 42;
                    continue _fun9390
                }
            case 27:
                var3 = arguments[var0];
                var7 = var5;
                if (!(var4 !== var3)) {
                    _fun9390_ip = 42;
                    continue _fun9390
                }
            case 38:
                var7 = arguments[var0];
            case 42:
                var0 = arguments.length;
                var5 = 3;
                var0 = var0 > var5;
                var3 = undefined;
                if (!var0) {
                    _fun9390_ip = 61;
                    continue _fun9390
                }
            case 57:
                var3 = arguments[var5];
            case 61:
                var6 = arguments.length;
                var0 = 4;
                var8 = var6 > var0;
                var6 = undefined;
                if (!var8) {
                    _fun9390_ip = 80;
                    continue _fun9390
                }
            case 76:
                var6 = arguments[var0];
            case 80:
                var0 = {};
                var2 = null;
                var9 = var2 == var3;
                var8 = undefined;
                if (var9) {
                    _fun9390_ip = 99;
                    continue _fun9390
                }
            case 93:
                var8 = var3.event_id;
            case 99:
                var0.event_id = var8;
                var0.level = var7;
                if (!var6) {
                    _fun9390_ip = 237;
                    continue _fun9390
                }
            case 115:
                if (!(var2 != var3)) {
                    _fun9390_ip = 237;
                    continue _fun9390
                }
            case 119:
                var2 = var3.syntheticException;
                if (!var2) {
                    _fun9390_ip = 237;
                    continue _fun9390
                }
            case 128:
                var7 = _closure1_slot4;
                var6 = var3.syntheticException;
                var3 = arg0;
                var8 = var7.bind(var4)(var3, var6);
                var3 = var8.length;
                if (!var3) {
                    _fun9390_ip = 237;
                    continue _fun9390
                }
            case 158:
                var3 = {};
                var7 = {};
                var7.value = var1;
                var6 = {};
                var6.frames = var8;
                var7.stacktrace = var6;
                var6 = new Array(1);
                var6[0] = var7;
                var3.values = var6;
                var0.exception = var3;
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 5;
                var2 = var6[var2];
                var6 = var3.bind(var4)(var2);
                var3 = var6.addExceptionMechanism;
                var2 = {};
                var7 = true;
                var2.synthetic = var7;
                var2 = var3.bind(var6)(var0, var2);
            case 237:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isParameterizedString;
                var2 = var2.bind(var3)(var1);
                if (var2) {
                    _fun9390_ip = 279;
                    continue _fun9390
                }
            case 271:
                var0.message = var1;
                return var0;
            case 279:
                var3 = var1.__sentry_template_string__;
                var2 = var1.__sentry_template_values__;
                var1 = {};
                var1.message = var3;
                var1.params = var2;
                var0.logentry = var1;
                return var0;
        }
    };
    var2.eventFromMessage = var5;
    var4 = function arg0, arg1, arg2, arg3() {
        _fun9391: for (var _fun9391_ip = 0;;) switch (_fun9391_ip) {
            case 0:
                var5 = arg3;
                var6 = null;
                var1 = var6 == var5;
                var0 = undefined;
                var3 = undefined;
                if (var1) {
                    _fun9391_ip = 21;
                    continue _fun9391
                }
            case 16:
                var3 = var5.data;
            case 21:
                if (!var3) {
                    _fun9391_ip = 35;
                    continue _fun9391
                }
            case 24:
                var1 = var5.data;
                var3 = var1.mechanism;
            case 35:
                if (var3) {
                    _fun9391_ip = 48;
                    continue _fun9391
                }
            case 38:
                var3 = {
                    'handled': true,
                    'type': 'generic'
                };
            case 48:
                var7 = _closure1_slot7;
                var14 = arg0;
                var12 = arg2;
                var15 = undefined;
                var13 = var3;
                var11 = var5;
                var7 = var15[var7](var14, var13, var12, var11, var10);
                var4 = _closure1_slot2;
                var2 = 2;
                var4 = var4.bind(var0)(var7, var2);
                var2 = 0;
                var10 = var4[var2];
                var2 = 1;
                var2 = var4[var2];
                var4 = {};
                var7 = {};
                var9 = _closure1_slot5;
                var8 = arg1;
                var9 = var9.bind(var0)(var8, var10);
                var8 = new Array(1);
                var8[0] = var9;
                var7.values = var8;
                var4.exception = var7;
                if (!var2) {
                    _fun9391_ip = 142;
                    continue _fun9391
                }
            case 136:
                var4.extra = var2;
            case 142:
                var2 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 5;
                var8 = var7[var1];
                var9 = var2.bind(var0)(var8);
                var8 = var9.addExceptionTypeValue;
                var8 = var8.bind(var9)(var4, var0, var0);
                var1 = var7[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.addExceptionMechanism;
                var1 = var1.bind(var2)(var4, var3);
                var1 = global;
                var3 = var1.Object;
                var2 = var3.assign;
                var1 = {};
                var6 = var6 == var5;
                var0 = undefined;
                if (var6) {
                    _fun9391_ip = 226;
                    continue _fun9391
                }
            case 220:
                var0 = var5.event_id;
            case 226:
                var1.event_id = var0;
                var0 = {};
                var0 = var2.bind(var3)(var0, var4, var1);
                return var0;
        }
    };
    var2.eventFromUnknownInput = var4;
    var2.exceptionFromError = var3;
    var2.parseStackFrames = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 77, 822, 827, 863, 830]);