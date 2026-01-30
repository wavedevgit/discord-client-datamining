// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var4 = function(arg0, arg1, arg2) { // Original name: addNonEnumerableProperty, environment: var0
        _fun99399: for (var _fun99399_ip = 0;;) switch (_fun99399_ip) {
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
                _fun99399_ip = 159;
                continue _fun99399;
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
                    _fun99399_ip = 159;
                    continue _fun99399
                }
            case 88:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 1;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.logger;
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
        _fun99400: for (var _fun99400_ip = 0;;) switch (_fun99400_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
            case 6: // try_start_0
                var3 = var1;
                var3 = var3.prototype;
                var0 = var3;
                if (var3) {
                    _fun99400_ip = 22;
                    continue _fun99400
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
                _fun99400_ip = 64;
                continue _fun99400;
            case 62: // catch_target0
                CatchBlockStart(arg_register = 0);
            case 64:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot3 = var2;
    var3 = function(arg0) { // Original name: convertToPlainObject, environment: var0
        _fun99401: for (var _fun99401_ip = 0;;) switch (_fun99401_ip) {
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
                    _fun99401_ip = 225;
                    continue _fun99401
                }
            case 45:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var8];
                var2 = var2.bind(var4)(var1);
                var1 = var2.isEvent;
                var1 = var1.bind(var2)(var5);
                if (var1) {
                    _fun99401_ip = 78;
                    continue _fun99401
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
                    _fun99401_ip = 208;
                    continue _fun99401
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
                    _fun99401_ip = 223;
                    continue _fun99401
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
        _fun99402: for (var _fun99402_ip = 0;;) switch (_fun99402_ip) {
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
                    _fun99402_ip = 78;
                    continue _fun99402
                }
            case 45:
                var0 = global;
                var0 = var0.Object;
                var0 = var0.prototype;
                var5 = var0.toString;
                var3 = var5.call;
                var0 = var1;
                var0 = var3.bind(var5)(var0);
                _fun99402_ip = 109;
                continue _fun99402;
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
        _fun99403: for (var _fun99403_ip = 0;;) switch (_fun99403_ip) {
            case 0:
                var7 = arg0;
                var1 = 'object';
                var0 = typeof var7;
                if (!(var1 === var0)) {
                    _fun99403_ip = 20;
                    continue _fun99403
                }
            case 14:
                var0 = null;
                if (!(var0 === var7)) {
                    _fun99403_ip = 24;
                    continue _fun99403
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
                            _fun99403_ip = 39;
                            continue _fun99403
                        }
                        case 82: var8 = var7[var9];
                        var0[var9] = var8;
                        _fun99403_ip = 39;
                        continue _fun99403;
                    }
            case 92:
                return var0;
        }
    };
    var _closure1_slot6 = var5;
    var5 = function(arg0, arg1) { // Original name: _dropUndefinedKeys, environment: var0
        _fun99404: for (var _fun99404_ip = 0;;) switch (_fun99404_ip) {
            case 0:
                var11 = arg0;
                var0 = arg1;
                var6 = var11;
                var7 = var0;
                var _closure2_slot0 = var0;
                var5 = undefined;
                var1 = undefined;
                var8 = undefined;
                var2 = var11;
                var9 = undefined;
                var10 = _closure1_slot0;
                var12 = _closure1_slot1;
                var0 = 2;
                var0 = var12[var0];
                var10 = var10.bind(var5)(var0);
                var0 = var10.isPlainObject;
                var10 = var0.bind(var10)(var11);
                var0 = false;
                if (!var10) {
                    _fun99404_ip = 129;
                    continue _fun99404
                }
            case 68: // try_start_0
                var10 = global;
                var11 = var10.Object;
                var10 = var11.getPrototypeOf;
                var2 = var10.bind(var11)(var2);
                var2 = var2.constructor;
                var10 = var2.name;
                var9 = var10;
                var10 = !var10;
                var2 = var10;
                if (var10) {
                    _fun99404_ip = 120;
                    continue _fun99404
                }
            case 109:
                var10 = var9;
                var9 = 'Object';
                var2 = var9 === var10;
            case 120: // try_end0
                var0 = var2;
                _fun99404_ip = 129;
                continue _fun99404;
            case 125: // catch_target0
                CatchBlockStart(arg_register = 2);
                var0 = true;
            case 129:
                if (var0) {
                    _fun99404_ip = 227;
                    continue _fun99404
                }
            case 132:
                var0 = global;
                var9 = var0.Array;
                var2 = var9.isArray;
                var0 = var6;
                var0 = var2.bind(var9)(var0);
                if (var0) {
                    _fun99404_ip = 161;
                    continue _fun99404
                }
            case 156:
                var0 = var6;
                return var0;
            case 161:
                var9 = var7;
                var2 = var9.get;
                var0 = var6;
                var0 = var2.bind(var9)(var0);
                if (!(var5 === var0)) {
                    _fun99404_ip = 225;
                    continue _fun99404
                }
            case 181:
                var2 = new Array(0);
                var _closure2_slot1 = var2;
                var11 = var7;
                var9 = var11.set;
                var10 = var6;
                var9 = var9.bind(var11)(var10, var2);
                var9 = var10.forEach;
                var3 = function(arg0) { // Environment: var3
                    var3 = _closure2_slot1;
                    var2 = var3.push;
                    var5 = _closure1_slot7;
                    var4 = _closure2_slot0;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var5.bind(var0)(var1, var4);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var3 = var9.bind(var10)(var3);
                return var2;
            case 225:
                return var0;
            case 227:
                var3 = var7;
                var2 = var3.get;
                var0 = var6;
                var0 = var2.bind(var3)(var0);
                if (!(var5 === var0)) {
                    _fun99404_ip = 359;
                    continue _fun99404
                }
            case 247:
                var10 = {};
                var1 = var10;
                var3 = var7;
                var2 = var3.set;
                var9 = var6;
                var2 = var2.bind(var3)(var9, var10);
                var2 = global;
                var3 = var2.Object;
                var2 = var3.keys;
                var9 = var2.bind(var3)(var9);
                var2 = var9;
                var3 = var2[Symbol.iterator];
                var2 = var3().next;
            case 293:
                var10 = var2().value;
                var9 = var3;
                if (!(var9 !== var5)) {
                    _fun99404_ip = 357;
                    continue _fun99404
                }
            case 304: // try_start_1
                var8 = var10;
                var9 = var6;
                var9 = var9[var10];
                if (!(var5 !== var9)) {
                    _fun99404_ip = 348;
                    continue _fun99404
                }
            case 318:
                var11 = var1;
                var10 = var8;
                var13 = _closure1_slot7;
                var9 = var6;
                var12 = var9[var10];
                var9 = var7;
                var9 = var13.bind(var5)(var12, var9);
                var11[var10] = var9;
            case 348: // try_end1
                _fun99404_ip = 293;
                continue _fun99404;
            case 350: // catch_target1
                CatchBlockStart(arg_register = 2);
                var3.return();
                throw var2;
            case 357:
                return var1;
            case 359:
                return var0;
        }
    };
    var _closure1_slot7 = var5;
    var5 = global;
    var8 = var5.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var5 = true;
    var6.value = var5;
    var5 = '__esModule';
    var5 = var7.bind(var8)(var1, var5, var6);
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
        _fun99407: for (var _fun99407_ip = 0;;) switch (_fun99407_ip) {
            case 0:
                var4 = undefined;
                var1 = undefined;
                var2 = arguments.length;
                var0 = 1;
                var2 = var2 > var0;
                var5 = 40;
                var3 = var5;
                if (!var2) {
                    _fun99407_ip = 38;
                    continue _fun99407
                }
            case 23:
                var2 = arguments[var0];
                var3 = var5;
                if (!(var4 !== var2)) {
                    _fun99407_ip = 38;
                    continue _fun99407
                }
            case 34:
                var3 = arguments[var0];
            case 38:
                var0 = global;
                var5 = var0.Object;
                var2 = var5.keys;
                var6 = _closure1_slot4;
                var1 = arg0;
                var1 = var6.bind(var4)(var1);
                var7 = var2.bind(var5)(var1);
                var1 = var7.sort;
                var1 = var1.bind(var7)();
                var6 = 0;
                var2 = var7[var6];
                if (var2) {
                    _fun99407_ip = 98;
                    continue _fun99407
                }
            case 90:
                var1 = '[object has no keys]';
                return var1;
            case 98:
                var1 = var2.length;
                if (!(!(var1 >= var3))) {
                    _fun99407_ip = 214;
                    continue _fun99407
                }
            case 107:
                var5 = var7.length;
                var1 = ', ';
                if (!(var5 > var6)) {
                    _fun99407_ip = 208;
                    continue _fun99407
                }
            case 122:
                var8 = var7.slice;
                var9 = var8.bind(var7)(var6, var5);
                var8 = var9.join;
                var12 = var8.bind(var9)(var1);
                var9 = var12.length;
                var8 = var5;
                if (!(!(var9 > var3))) {
                    _fun99407_ip = 201;
                    continue _fun99407
                }
            case 155:
                var10 = var7.length;
                var9 = var12;
                if (!(var8 !== var10)) {
                    _fun99407_ip = 199;
                    continue _fun99407
                }
            case 167:
                var11 = _closure1_slot0;
                var13 = _closure1_slot1;
                var10 = 4;
                var10 = var13[var10];
                var11 = var11.bind(var4)(var10);
                var10 = var11.truncate;
                var9 = var10.bind(var11)(var12, var3);
            case 199:
                return var9;
            case 201:
                var5 = var8 - 1;
                if (var5 > var6) {
                    _fun99407_ip = 122;
                    continue _fun99407
                }
            case 208:
                var1 = '';
                return var1;
            case 214:
                var1 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 4;
                var0 = var5[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.truncate;
                var0 = var0.bind(var1)(var2, var3);
                return var0;
        }
    };
    var1.extractExceptionKeysForMessage = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: fill, environment: var0
        _fun99408: for (var _fun99408_ip = 0;;) switch (_fun99408_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var0 = var1 in var2;
                if (!var0) {
                    _fun99408_ip = 55;
                    continue _fun99408
                }
            case 13:
                var5 = var2[var1];
                var0 = arg2;
                var4 = undefined;
                var0 = var0.bind(var4)(var5);
                var6 = 'function';
                var3 = typeof var0;
                if (!(var6 === var3)) {
                    _fun99408_ip = 51;
                    continue _fun99408
                }
            case 38:
                var3 = _closure1_slot3;
                var3 = var3.bind(var4)(var0, var5);
            case 51:
                var2[var1] = var0;
            case 55:
                var0 = undefined;
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
    var2 = function(arg0) { // Original name: objectify, environment: var0
        _fun99410: for (var _fun99410_ip = 0;;) switch (_fun99410_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var0 = var0 == var3;
                var2 = true;
                if (!(var0 !== var2)) {
                    _fun99410_ip = 131;
                    continue _fun99410
                }
            case 15:
                var4 = typeof var3;
                var0 = 'symbol';
                var0 = var0 === var4;
                if (var0) {
                    _fun99410_ip = 37;
                    continue _fun99410
                }
            case 29:
                var1 = 'bigint';
                var0 = var1 === var4;
            case 37:
                if (!(var0 !== var2)) {
                    _fun99410_ip = 114;
                    continue _fun99410
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
                    _fun99410_ip = 162;
                    continue _fun99410
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
                _fun99410_ip = 162;
                continue _fun99410;
            case 114:
                var1 = global;
                var2 = var1.Object;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
                _fun99410_ip = 162;
                continue _fun99410;
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
    var1.objectify = var2;
    var0 = function(arg0) { // Original name: urlEncode, environment: var0
        var3 = arg0;
        var _closure2_slot0 = var3;
        var1 = global;
        var2 = var1.Object;
        var1 = var2.keys;
        var2 = var1.bind(var2)(var3);
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var5 = arg0;
            var0 = global;
            var1 = var0.encodeURIComponent;
            var3 = undefined;
            var4 = var1.bind(var3)(var5);
            var2 = var0.encodeURIComponent;
            var1 = _closure2_slot0;
            var1 = var1[var5];
            var3 = var2.bind(var3)(var1);
            var0 = var0.HermesInternal;
            var2 = var0.concat;
            var1 = '';
            var0 = '=';
            var0 = var2.bind(var1)(var4, var0, var3);
            return var0;
        };
        var2 = var1.bind(var2)(var0);
        var1 = var2.join;
        var0 = '&';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.urlEncode = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12897, 12896, 12889, 12892, 12890]);