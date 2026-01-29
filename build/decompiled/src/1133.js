// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var4 = function(arg0) { // Original name: isAtLeastReact17, environment: var3
        _fun12355: for (var _fun12355_ip = 0;;) switch (_fun12355_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.match;
                var0 = /^([^.]+)/;
                var2 = var1.bind(var2)(var0);
                var0 = null;
                var0 = var0 !== var2;
                if (!var0) {
                    _fun12355_ip = 65;
                    continue _fun12355
                }
            case 37:
                var1 = global;
                var3 = var1.parseInt;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = 17;
                var0 = var2 >= var1;
            case 65:
                return var0;
        }
    };
    var _closure1_slot3 = var4;
    var1 = function(arg0, arg1) { // Original name: setCause, environment: var3
        var1 = global;
        var1 = var1.WeakSet;
        var2 = var1.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var6 = var2;
        var1 = new var6[var1](var5);
        var1 = var1 instanceof Object ? var1 : var2;
        var _closure2_slot0 = var1;
        var3 = function(arg0, arg1) { // Original name: recurse, environment: var0
            _fun12357: for (var _fun12357_ip = 0;;) switch (_fun12357_ip) {
                case 0:
                    var1 = arg0;
                    var4 = arg1;
                    var3 = _closure2_slot0;
                    var0 = var3.has;
                    var0 = var0.bind(var3)(var1);
                    if (var0) {
                        _fun12357_ip = 79;
                        continue _fun12357
                    }
                case 26:
                    var0 = var1.cause;
                    if (var0) {
                        _fun12357_ip = 45;
                        continue _fun12357
                    }
                case 35:
                    var1.cause = var4;
                    var0 = undefined;
                    _fun12357_ip = 77;
                    continue _fun12357;
                case 45:
                    var5 = _closure2_slot0;
                    var3 = var5.add;
                    var3 = var3.bind(var5)(var1);
                    var3 = _closure2_slot1;
                    var2 = var1.cause;
                    var1 = undefined;
                    var0 = var3.bind(var1)(var2, var4);
                case 77:
                    return var0;
                case 79:
                    var0 = undefined;
                    return var0;
            }
        };
        var _closure2_slot1 = var3;
        var0 = undefined;
        var2 = arg0;
        var1 = arg1;
        var1 = var3.bind(var0)(var2, var1);
        var1 = !var1;
        return var0;
    };
    var _closure1_slot4 = var1;
    var5 = function(arg0, arg1, arg2) { // Original name: captureReactException, environment: var3
        _fun12358: for (var _fun12358_ip = 0;;) switch (_fun12358_ip) {
            case 0:
                var5 = arg0;
                var _closure2_slot0 = var5;
                var1 = arg2;
                var _closure2_slot1 = var1;
                var1 = arg1;
                var2 = var1.componentStack;
                var _closure2_slot2 = var2;
                var6 = _closure1_slot3;
                var3 = _closure1_slot2;
                var4 = var3.version;
                var3 = undefined;
                var4 = var6.bind(var3)(var4);
                if (!var4) {
                    _fun12358_ip = 175;
                    continue _fun12358
                }
            case 56:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 1;
                var4 = var7[var4];
                var6 = var6.bind(var3)(var4);
                var4 = var6.isError;
                var4 = var4.bind(var6)(var5);
                if (!var4) {
                    _fun12358_ip = 175;
                    continue _fun12358
                }
            case 90:
                if (!var2) {
                    _fun12358_ip = 175;
                    continue _fun12358
                }
            case 93:
                var6 = global;
                var8 = var6.Error;
                var10 = var5.message;
                var7 = var8.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var8
                    }
                });
                var11 = var7;
                var4 = new var11[var8](var10, var9);
                var4 = var4 instanceof Object ? var4 : var7;
                var8 = var5.name;
                var6 = var6.HermesInternal;
                var7 = var6.concat;
                var6 = 'React ErrorBoundary ';
                var6 = var7.bind(var6)(var8);
                var4.name = var6;
                var4.stack = var2;
                var2 = _closure1_slot4;
                var2 = var2.bind(var3)(var5, var4);
            case 175:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 2;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.withScope;
                var0 = function(arg0) { // Environment: var0
                    var4 = arg0;
                    var3 = var4.setContext;
                    var2 = {};
                    var1 = _closure2_slot2;
                    var2.componentStack = var1;
                    var1 = 'react';
                    var1 = var3.bind(var4)(var1, var2);
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 2;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.captureException;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot5 = var5;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var0 = var0.Symbol;
    var8 = var0.toStringTag;
    var0 = {};
    var11 = 'Module';
    var0.value = var11;
    var0 = var9.bind(var10)(var2, var8, var0);
    var0 = 0;
    var6 = var6[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var2.captureReactException = var5;
    var2.isAtLeastReact17 = var4;
    var3 = function(arg0) { // Original name: reactErrorHandler, environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun12361: for (var _fun12361_ip = 0;;) switch (_fun12361_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var0 = _closure2_slot0;
                    var5 = !var0;
                    var6 = _closure1_slot5;
                    var2 = {};
                    var0 = {};
                    var7 = !var5;
                    var0.handled = var7;
                    var7 = 'auto.function.react.error_handler';
                    var0.type = var7;
                    var2.mechanism = var0;
                    var0 = undefined;
                    var2 = var6.bind(var0)(var4, var3, var2);
                    if (var5) {
                        _fun12361_ip = 73;
                        continue _fun12361
                    }
                case 62:
                    var1 = _closure2_slot0;
                    var1 = var1.bind(var0)(var4, var3, var2);
                case 73:
                    return var0;
            }
        };
        return var0;
    };
    var2.reactErrorHandler = var3;
    var2.setCause = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 817, 1021]);