// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var4 = function(arg0, arg1, arg2) { // Original name: addNonEnumerableProperty, environment: var0
        _fun8738: for (var _fun8738_ip = 0;;) switch (_fun8738_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var7 = arg2;
            case 9: // try_start_0
                var2 = global;
                var6 = var2.Object;
                var5 = var6.defineProperty;
                var4 = var0;
                var3 = var1;
                var2 = {
                    'value': null,
                    'writable': true,
                    'configurable': true
                };
                var2.value = var7;
                var2 = var5.bind(var6)(var4, var3, var2);
            case 51: // try_end0
                _fun8738_ip = 159;
                continue _fun8738;
            case 53: // catch_target0
                CatchBlockStart(arg_register = 2);
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 0;
                var3 = var4[var3];
                var4 = undefined;
                var3 = var5.bind(var4)(var3);
                var3 = var3.DEBUG_BUILD;
                if (!var3) {
                    _fun8738_ip = 159;
                    continue _fun8738
                }
            case 88:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 1;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.debug;
                var2 = var3.log;
                var6 = var1;
                var1 = global;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var4 = 'Failed to add non-enumerable property "';
                var1 = '" to object';
                var1 = var5.bind(var4)(var6, var1);
                var0 = var2.bind(var3)(var1, var0);
            case 159:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot2 = var4;
    var2 = function(arg0, arg1) { // Original name: markFunctionWrapped, environment: var0
        _fun8739: for (var _fun8739_ip = 0;;) switch (_fun8739_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
            case 6: // try_start_0
                var3 = var1;
                var3 = var3.prototype;
                var0 = var3;
                if (var3) {
                    _fun8739_ip = 22;
                    continue _fun8739
                }
            case 20:
                var0 = {};
            case 22:
                var4 = var2;
                var3 = var1;
                var3.prototype = var0;
                var4.prototype = var0;
                var2 = _closure1_slot2;
                var1 = undefined;
                var0 = '__sentry_original__';
                var0 = var2.bind(var1)(var4, var0, var3);
            case 60: // try_end0
                _fun8739_ip = 64;
                continue _fun8739;
            case 62: // catch_target0
                CatchBlockStart(arg_register = 0);
            case 64:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot3 = var2;
    var3 = function(arg0) { // Original name: convertToPlainObject, environment: var0
        _fun8740: for (var _fun8740_ip = 0;;) switch (_fun8740_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var8 = 2;
                var1 = var1[var8];
                var4 = undefined;
                var2 = var2.bind(var4)(var1);
                var1 = var2.isError;
                var1 = var1.bind(var2)(var5);
                if (var1) {
                    _fun8740_ip = 225;
                    continue _fun8740
                }
            case 45:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var8];
                var2 = var2.bind(var4)(var1);
                var1 = var2.isEvent;
                var1 = var1.bind(var2)(var5);
                if (var1) {
                    _fun8740_ip = 78;
                    continue _fun8740
                }
            case 76:
                return var5;
            case 78:
                var3 = global;
                var7 = var3.Object;
                var6 = var7.assign;
                var2 = {};
                var1 = var5.type;
                var2.type = var1;
                var9 = _closure1_slot5;
                var1 = var5.target;
                var1 = var9.bind(var4)(var1);
                var2.target = var1;
                var1 = var5.currentTarget;
                var1 = var9.bind(var4)(var1);
                var2.currentTarget = var1;
                var1 = _closure1_slot6;
                var1 = var1.bind(var4)(var5);
                var1 = var6.bind(var7)(var2, var1);
                var2 = var3.CustomEvent;
                var6 = 'undefined';
                var2 = typeof var2;
                var2 = var6 !== var2;
                if (!var2) {
                    _fun8740_ip = 208;
                    continue _fun8740
                }
            case 173:
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var8];
                var7 = var7.bind(var4)(var6);
                var6 = var7.isInstanceOf;
                var3 = var3.CustomEvent;
                var2 = var6.bind(var7)(var5, var3);
            case 208:
                if (!var2) {
                    _fun8740_ip = 223;
                    continue _fun8740
                }
            case 211:
                var2 = var5.detail;
                var1.detail = var2;
            case 223:
                return var1;
            case 225:
                var1 = global;
                var3 = var1.Object;
                var2 = var3.assign;
                var1 = {};
                var6 = var5.message;
                var1.message = var6;
                var6 = var5.name;
                var1.name = var6;
                var6 = var5.stack;
                var1.stack = var6;
                var0 = _closure1_slot6;
                var0 = var0.bind(var4)(var5);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var5 = function(arg0) { // Original name: serializeEventTarget, environment: var0
        _fun8741: for (var _fun8741_ip = 0;;) switch (_fun8741_ip) {
            case 0:
                var1 = arg0;
            case 3: // try_start_0
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 2;
                var0 = var4[var0];
                var4 = undefined;
                var5 = var3.bind(var4)(var0);
                var3 = var5.isElement;
                var0 = var1;
                var0 = var3.bind(var5)(var0);
                if (var0) {
                    _fun8741_ip = 78;
                    continue _fun8741
                }
            case 45:
                var0 = global;
                var0 = var0.Object;
                var0 = var0.prototype;
                var5 = var0.toString;
                var3 = var5.call;
                var0 = var1;
                var0 = var3.bind(var5)(var0);
                _fun8741_ip = 109;
                continue _fun8741;
            case 78:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 3;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.htmlTreeAsString;
                var0 = var2.bind(var3)(var1);
            case 109: // try_end0
                return var0;
            case 111: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = '<unknown>';
                return var0;
        }
    };
    var _closure1_slot5 = var5;
    var5 = function(arg0) { // Original name: getOwnProperties, environment: var0
        _fun8742: for (var _fun8742_ip = 0;;) switch (_fun8742_ip) {
            case 0:
                var7 = arg0;
                var1 = 'object';
                var0 = typeof var7;
                if (!(var1 === var0)) {
                    _fun8742_ip = 20;
                    continue _fun8742
                }
            case 14:
                var0 = null;
                if (!(var0 === var7)) {
                    _fun8742_ip = 24;
                    continue _fun8742
                }
            case 20:
                var0 = {};
                return var0;
            case 24:
                var0 = {};
                var5 = var7;
                var1 = global;
                for (var2 in var5)
                    case 39: {
                        case 48: var9 = var2;
                        var8 = var1.Object;
                        var8 = var8.prototype;
                        var10 = var8.hasOwnProperty;
                        var8 = var10.call;
                        var8 = var8.bind(var10)(var7, var9);
                        if (!var8) {
                            _fun8742_ip = 39;
                            continue _fun8742
                        }
                        case 82: var8 = var7[var9];
                        var0[var9] = var8;
                        _fun8742_ip = 39;
                        continue _fun8742;
                    }
            case 92:
                return var0;
        }
    };
    var _closure1_slot6 = var5;
    var5 = function(arg0, arg1) { // Original name: _dropUndefinedKeys, environment: var0
        _fun8743: for (var _fun8743_ip = 0;;) switch (_fun8743_ip) {
            case 0:
                var0 = arg0;
                var5 = arg1;
                var _closure2_slot0 = var0;
                var _closure2_slot1 = var5;
                var1 = null;
                if (!(var1 !== var0)) {
                    _fun8743_ip = 194;
                    continue _fun8743
                }
            case 25:
                var2 = 'object';
                var1 = typeof var0;
                if (!(var2 === var1)) {
                    _fun8743_ip = 194;
                    continue _fun8743
                }
            case 39:
                var1 = var5.get;
                var1 = var1.bind(var5)(var0);
                var7 = undefined;
                if (!(var7 === var1)) {
                    _fun8743_ip = 192;
                    continue _fun8743
                }
            case 58:
                var4 = global;
                var6 = var4.Array;
                var2 = var6.isArray;
                var2 = var2.bind(var6)(var0);
                if (var2) {
                    _fun8743_ip = 156;
                    continue _fun8743
                }
            case 79:
                var6 = var0.constructor;
                var2 = var4.Object;
                var2 = var6 === var2;
                if (var2) {
                    _fun8743_ip = 101;
                    continue _fun8743
                }
            case 97:
                var2 = var7 === var6;
            case 101:
                if (var2) {
                    _fun8743_ip = 106;
                    continue _fun8743
                }
            case 104:
                return var0;
            case 106:
                var2 = {};
                var _closure2_slot3 = var2;
                var6 = var5.set;
                var6 = var6.bind(var5)(var0, var2);
                var6 = var4.Object;
                var4 = var6.keys;
                var7 = var4.bind(var6)(var0);
                var6 = var7.forEach;
                var4 = function(arg0) { // Environment: var3
                    _fun8745: for (var _fun8745_ip = 0;;) switch (_fun8745_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = _closure2_slot0;
                            var5 = var0[var3];
                            var0 = undefined;
                            if (!(var0 !== var5)) {
                                _fun8745_ip = 45;
                                continue _fun8745
                            }
                        case 20:
                            var2 = _closure2_slot3;
                            var4 = _closure1_slot7;
                            var1 = _closure2_slot1;
                            var1 = var4.bind(var0)(var5, var1);
                            var2[var3] = var1;
                        case 45:
                            return var0;
                    }
                };
                var4 = var6.bind(var7)(var4);
                return var2;
            case 156:
                var2 = new Array(0);
                var _closure2_slot2 = var2;
                var4 = var5.set;
                var4 = var4.bind(var5)(var0, var2);
                var4 = var0.forEach;
                var3 = function(arg0) { // Environment: var3
                    var3 = _closure2_slot2;
                    var2 = var3.push;
                    var5 = _closure1_slot7;
                    var4 = _closure2_slot1;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var5.bind(var0)(var1, var4);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var3 = var4.bind(var0)(var3);
                return var2;
            case 192:
                return var1;
            case 194:
                return var0;
        }
    };
    var _closure1_slot7 = var5;
    var5 = global;
    var8 = var5.Object;
    var7 = var8.defineProperty;
    var5 = var5.Symbol;
    var6 = var5.toStringTag;
    var5 = {};
    var9 = 'Module';
    var5.value = var9;
    var5 = var7.bind(var8)(var1, var6, var5);
    var1.addNonEnumerableProperty = var4;
    var1.convertToPlainObject = var3;
    var3 = function(arg0) { // Original name: dropUndefinedKeys, environment: var0
        var3 = _closure1_slot7;
        var0 = global;
        var0 = var0.Map;
        var1 = var0.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var0
            }
        });
        var6 = var1;
        var0 = new var6[var0](var5);
        var2 = var0 instanceof Object ? var0 : var1;
        var1 = undefined;
        var0 = arg0;
        var0 = var3.bind(var1)(var0, var2);
        return var0;
    };
    var1.dropUndefinedKeys = var3;
    var3 = function(arg0) { // Original name: extractExceptionKeysForMessage, environment: var0
        _fun8747: for (var _fun8747_ip = 0;;) switch (_fun8747_ip) {
            case 0:
                var0 = global;
                var2 = var0.Object;
                var1 = var2.keys;
                var4 = _closure1_slot4;
                var3 = undefined;
                var0 = arg0;
                var0 = var4.bind(var3)(var0);
                var3 = var1.bind(var2)(var0);
                var0 = var3.sort;
                var0 = var0.bind(var3)();
                var0 = 0;
                var1 = var3[var0];
                var0 = '[object has no keys]';
                if (!var1) {
                    _fun8747_ip = 76;
                    continue _fun8747
                }
            case 60:
                var2 = var3.join;
                var1 = ', ';
                var0 = var2.bind(var3)(var1);
            case 76:
                return var0;
        }
    };
    var1.extractExceptionKeysForMessage = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: fill, environment: var0
        _fun8748: for (var _fun8748_ip = 0;;) switch (_fun8748_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var1 = var5;
                var2 = var4;
                var0 = undefined;
                var3 = undefined;
                var4 = var4 in var5;
                if (!var4) {
                    _fun8748_ip = 200;
                    continue _fun8748
                }
            case 26:
                var5 = var1;
                var4 = var2;
                var6 = var5[var4];
                var5 = 'function';
                var4 = typeof var6;
                if (!(var5 === var4)) {
                    _fun8748_ip = 200;
                    continue _fun8748
                }
            case 50:
                var4 = arg2;
                var4 = var4.bind(var0)(var6);
                var3 = var4;
                var4 = typeof var4;
                if (!(var5 === var4)) {
                    _fun8748_ip = 84;
                    continue _fun8748
                }
            case 68:
                var5 = _closure1_slot3;
                var4 = var3;
                var4 = var5.bind(var0)(var4, var6);
            case 84: // try_start_0
                var5 = var1;
                var4 = var2;
                var5[var4] = var3;
            case 94: // try_end0
                _fun8748_ip = 200;
                continue _fun8748;
            case 96: // catch_target0
                CatchBlockStart(arg_register = 3);
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 0;
                var4 = var6[var4];
                var4 = var5.bind(var0)(var4);
                var4 = var4.DEBUG_BUILD;
                if (!var4) {
                    _fun8748_ip = 200;
                    continue _fun8748
                }
            case 129:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 1;
                var3 = var5[var3];
                var3 = var4.bind(var0)(var3);
                var4 = var3.debug;
                var3 = var4.log;
                var7 = var2;
                var2 = global;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var5 = 'Failed to replace method "';
                var2 = '" in object';
                var2 = var6.bind(var5)(var7, var2);
                var1 = var3.bind(var4)(var2, var1);
            case 200:
                return var0;
        }
    };
    var1.fill = var3;
    var3 = function(arg0) { // Original name: getOriginalFunction, environment: var0
        var0 = arg0;
        var0 = var0.__sentry_original__;
        return var0;
    };
    var1.getOriginalFunction = var3;
    var1.markFunctionWrapped = var2;
    var0 = function(arg0) { // Original name: objectify, environment: var0
        _fun8750: for (var _fun8750_ip = 0;;) switch (_fun8750_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var0 = var0 == var3;
                var2 = true;
                if (!(var0 !== var2)) {
                    _fun8750_ip = 131;
                    continue _fun8750
                }
            case 15:
                var4 = typeof var3;
                var0 = 'symbol';
                var0 = var0 === var4;
                if (var0) {
                    _fun8750_ip = 37;
                    continue _fun8750
                }
            case 29:
                var1 = 'bigint';
                var0 = var1 === var4;
            case 37:
                if (!(var0 !== var2)) {
                    _fun8750_ip = 114;
                    continue _fun8750
                }
            case 41:
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var4.bind(var0)(var1);
                var0 = var1.isPrimitive;
                var1 = var0.bind(var1)(var3);
                var0 = var3;
                if (!(var1 === var2)) {
                    _fun8750_ip = 162;
                    continue _fun8750
                }
            case 84:
                var1 = var3.constructor;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var6 = var2;
                var5 = var3;
                var1 = new var6[var1](var5, var4);
                var0 = var1 instanceof Object ? var1 : var2;
                _fun8750_ip = 162;
                continue _fun8750;
            case 114:
                var1 = global;
                var2 = var1.Object;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
                _fun8750_ip = 162;
                continue _fun8750;
            case 131:
                var1 = global;
                var1 = var1.String;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var6 = var2;
                var5 = var3;
                var1 = new var6[var1](var5, var4);
                var0 = var1 instanceof Object ? var1 : var2;
            case 162:
                return var0;
        }
    };
    var1.objectify = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [823, 824, 827, 828]);