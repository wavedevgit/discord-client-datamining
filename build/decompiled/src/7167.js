// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function(arg0, arg1) { // Original name: parseStackFrames, environment: var4
        _fun58845: for (var _fun58845_ip = 0;;) switch (_fun58845_ip) {
            case 0:
                var0 = arg1;
                var3 = var0.stack;
                if (var3) {
                    _fun58845_ip = 16;
                    continue _fun58845
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
    var3 = function(arg0, arg1) { // Original name: exceptionFromError, environment: var4
        _fun58846: for (var _fun58846_ip = 0;;) switch (_fun58846_ip) {
            case 0:
                var4 = arg1;
                var0 = {};
                var1 = var4.name;
                if (var1) {
                    _fun58846_ip = 23;
                    continue _fun58846
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
                    _fun58846_ip = 75;
                    continue _fun58846
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
    var0 = function(arg0) { // Original name: getMessageForObject, environment: var4
        _fun58847: for (var _fun58847_ip = 0;;) switch (_fun58847_ip) {
            case 0:
                var3 = arg0;
                var0 = 'name';
                var0 = var0 in var3;
                if (!var0) {
                    _fun58847_ip = 33;
                    continue _fun58847
                }
            case 14:
                var0 = var3.name;
                var6 = 'string';
                var0 = typeof var0;
                if (!(var6 !== var0)) {
                    _fun58847_ip = 288;
                    continue _fun58847
                }
            case 33:
                var0 = 'message';
                var0 = var0 in var3;
                if (!var0) {
                    _fun58847_ip = 63;
                    continue _fun58847
                }
            case 44:
                var0 = var3.message;
                var1 = 'string';
                var0 = typeof var0;
                if (!(var1 !== var0)) {
                    _fun58847_ip = 281;
                    continue _fun58847
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
                    _fun58847_ip = 245;
                    continue _fun58847
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
                    _fun58847_ip = 167;
                    continue _fun58847
                }
            case 157:
                var1 = var1.constructor;
                var2 = var1.name;
            case 167: // try_end0
                _fun58847_ip = 173;
                continue _fun58847;
            case 169: // catch_target0
                CatchBlockStart(arg_register = 1);
                var2 = undefined;
            case 173:
                var0 = 'Object';
                var4 = var0;
                if (!var2) {
                    _fun58847_ip = 213;
                    continue _fun58847
                }
            case 183:
                var4 = var0;
                if (!(var4 !== var2)) {
                    _fun58847_ip = 213;
                    continue _fun58847
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
                    _fun58847_ip = 345;
                    continue _fun58847
                }
            case 333:
                var0 = var3.message;
                var0 = typeof var0;
                var4 = var6 === var0;
            case 345:
                var0 = var2;
                if (!var4) {
                    _fun58847_ip = 383;
                    continue _fun58847
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
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: getException, environment: var4
        _fun58848: for (var _fun58848_ip = 0;;) switch (_fun58848_ip) {
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
                    _fun58848_ip = 427;
                    continue _fun58848
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
                if (var3) {
                    _fun58848_ip = 181;
                    continue _fun58848
                }
            case 93:
                var5 = var7;
                if (!var7) {
                    _fun58848_ip = 105;
                    continue _fun58848
                }
            case 99:
                var5 = var7.syntheticException;
            case 105:
                if (var5) {
                    _fun58848_ip = 139;
                    continue _fun58848
                }
            case 108:
                var3 = global;
                var3 = var3.Error;
                var6 = var3.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var3
                    }
                });
                var19 = var6;
                var18 = var2;
                var3 = new var19[var3](var18, var17);
                var5 = var3 instanceof Object ? var3 : var6;
            case 139:
                var3 = global;
                var3 = var3.HermesInternal;
                var6 = var3.concat;
                var3 = '';
                var3 = var6.bind(var3)(var2);
                var5.message = var3;
                var3 = new Array(2);
                var3[0] = var5;
                var3[1] = var1;
                return var3;
            case 181:
                var5 = var4;
                if (!var5) {
                    _fun58848_ip = 203;
                    continue _fun58848
                }
            case 187:
                var3 = var4.getOptions;
                var3 = var3.bind(var4)();
                var5 = var3.normalizeDepth;
            case 203:
                var6 = _closure1_slot3;
                var4 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 4;
                var3 = var8[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.normalizeToSize;
                var5 = var3.bind(var4)(var2, var5);
                var4 = {};
                var3 = '__serialized__';
                var3 = var6.bind(var1)(var4, var3, var5);
                var12 = var2;
                var6 = global;
                var8 = undefined;
                var4 = undefined;
                for (var9 in var12)
                    case 269: {
                        var4 = undefined;
                        case 280: var5 = var9;
                        var14 = var6.Object;
                        var14 = var14.prototype;
                        var15 = var14.hasOwnProperty;
                        var14 = var15.call;
                        var14 = var14.bind(var15)(var2, var5);
                        if (!var14) {
                            _fun58848_ip = 269;
                            continue _fun58848
                        }
                        case 314: var14 = var2[var5];
                        var5 = var6.Error;
                        var5 = var14 instanceof var5;
                        var8 = var14;
                        var4 = var8;
                        if (!var5) {
                            _fun58848_ip = 269;
                            continue _fun58848
                        }
                    }
            case 337:
                if (var4) {
                    _fun58848_ip = 413;
                    continue _fun58848
                }
            case 340:
                var0 = _closure1_slot6;
                var0 = var0.bind(var1)(var2);
                var5 = var7;
                if (!var5) {
                    _fun58848_ip = 361;
                    continue _fun58848
                }
            case 355:
                var5 = var7.syntheticException;
            case 361:
                if (var5) {
                    _fun58848_ip = 393;
                    continue _fun58848
                }
            case 364:
                var6 = var6.Error;
                var7 = var6.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var6
                    }
                });
                var19 = var7;
                var18 = var0;
                var6 = new var19[var6](var18, var17);
                var5 = var6 instanceof Object ? var6 : var7;
            case 393:
                var5.message = var0;
                var0 = new Array(2);
                var0[0] = var5;
                var0[1] = var3;
                return var0;
            case 413:
                var0 = new Array(2);
                var0[0] = var4;
                var0[1] = var3;
                return var0;
            case 427:
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
    var6 = {};
    var5 = true;
    var6.value = var5;
    var5 = '__esModule';
    var5 = var7.bind(var8)(var2, var5, var6);
    var5 = function(arg0, arg1) { // Original name: eventFromMessage, environment: var4
        _fun58849: for (var _fun58849_ip = 0;;) switch (_fun58849_ip) {
            case 0:
                var1 = arg1;
                var4 = undefined;
                var7 = undefined;
                var2 = arguments.length;
                var0 = 2;
                var2 = var2 > var0;
                var3 = 'info';
                var6 = var3;
                if (!var2) {
                    _fun58849_ip = 42;
                    continue _fun58849
                }
            case 27:
                var2 = arguments[var0];
                var6 = var3;
                if (!(var4 !== var2)) {
                    _fun58849_ip = 42;
                    continue _fun58849
                }
            case 38:
                var6 = arguments[var0];
            case 42:
                var0 = arguments.length;
                var5 = 3;
                var0 = var0 > var5;
                var2 = undefined;
                if (!var0) {
                    _fun58849_ip = 61;
                    continue _fun58849
                }
            case 57:
                var2 = arguments[var5];
            case 61:
                var3 = arguments.length;
                var0 = 4;
                var8 = var3 > var0;
                var3 = undefined;
                if (!var8) {
                    _fun58849_ip = 80;
                    continue _fun58849
                }
            case 76:
                var3 = arguments[var0];
            case 80:
                var0 = {};
                var7 = var2;
                if (!var7) {
                    _fun58849_ip = 94;
                    continue _fun58849
                }
            case 88:
                var7 = var2.event_id;
            case 94:
                var0.event_id = var7;
                var0.level = var6;
                if (!var3) {
                    _fun58849_ip = 187;
                    continue _fun58849
                }
            case 107:
                if (!var2) {
                    _fun58849_ip = 187;
                    continue _fun58849
                }
            case 110:
                var3 = var2.syntheticException;
                if (!var3) {
                    _fun58849_ip = 187;
                    continue _fun58849
                }
            case 119:
                var6 = _closure1_slot4;
                var3 = var2.syntheticException;
                var2 = arg0;
                var7 = var6.bind(var4)(var2, var3);
                var2 = var7.length;
                if (!var2) {
                    _fun58849_ip = 187;
                    continue _fun58849
                }
            case 149:
                var2 = {};
                var6 = {};
                var6.value = var1;
                var3 = {};
                var3.frames = var7;
                var6.stacktrace = var3;
                var3 = new Array(1);
                var3[0] = var6;
                var2.values = var3;
                var0.exception = var2;
            case 187:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isParameterizedString;
                var2 = var2.bind(var3)(var1);
                if (var2) {
                    _fun58849_ip = 229;
                    continue _fun58849
                }
            case 221:
                var0.message = var1;
                return var0;
            case 229:
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
    var4 = function(arg0, arg1, arg2, arg3) { // Original name: eventFromUnknownInput, environment: var4
        _fun58850: for (var _fun58850_ip = 0;;) switch (_fun58850_ip) {
            case 0:
                var5 = arg3;
                var2 = var5;
                if (!var5) {
                    _fun58850_ip = 14;
                    continue _fun58850
                }
            case 9:
                var2 = var5.data;
            case 14:
                if (!var2) {
                    _fun58850_ip = 28;
                    continue _fun58850
                }
            case 17:
                var0 = var5.data;
                var2 = var0.mechanism;
            case 28:
                if (var2) {
                    _fun58850_ip = 41;
                    continue _fun58850
                }
            case 31:
                var2 = {
                    'handled': true,
                    'type': 'generic'
                };
            case 41:
                var6 = _closure1_slot7;
                var3 = undefined;
                var13 = arg0;
                var11 = arg2;
                var14 = undefined;
                var12 = var2;
                var10 = var5;
                var6 = var14[var6](var13, var12, var11, var10, var9);
                var4 = _closure1_slot2;
                var1 = 2;
                var4 = var4.bind(var3)(var6, var1);
                var1 = 0;
                var9 = var4[var1];
                var1 = 1;
                var1 = var4[var1];
                var4 = {};
                var6 = {};
                var8 = _closure1_slot5;
                var7 = arg1;
                var8 = var8.bind(var3)(var7, var9);
                var7 = new Array(1);
                var7[0] = var8;
                var6.values = var7;
                var4.exception = var6;
                if (!var1) {
                    _fun58850_ip = 137;
                    continue _fun58850
                }
            case 131:
                var4.extra = var1;
            case 137:
                var1 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 5;
                var7 = var6[var0];
                var8 = var1.bind(var3)(var7);
                var7 = var8.addExceptionTypeValue;
                var7 = var7.bind(var8)(var4, var3, var3);
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.addExceptionMechanism;
                var0 = var0.bind(var1)(var4, var2);
                var0 = global;
                var3 = var0.Object;
                var2 = var3.assign;
                var1 = {};
                var0 = var5;
                if (!var0) {
                    _fun58850_ip = 218;
                    continue _fun58850
                }
            case 212:
                var0 = var5.event_id;
            case 218:
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 77, 7141, 7128, 7152, 7151]);