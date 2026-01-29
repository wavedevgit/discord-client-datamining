// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = function() { // Original name: instrumentHistory, environment: var2
        _fun10907: for (var _fun10907_ip = 0;;) switch (_fun10907_ip) {
            case 0:
                var5 = function(arg0) { // Original name: historyReplacementFunction, environment: var3
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        _fun10909: for (var _fun10909_ip = 0;;) switch (_fun10909_ip) {
                            case 0:
                                var3 = this;
                                var4 = undefined;
                                var7 = undefined;
                                var5 = arguments.length;
                                var1 = global;
                                var0 = var1.Array;
                                var2 = var0.prototype;
                                var2 = Object.create(var2, {
                                    constructor: {
                                        value: var0
                                    }
                                });
                                var14 = var2;
                                var13 = var5;
                                var0 = new var14[var0](var13, var12);
                                var2 = var0 instanceof Object ? var0 : var2;
                                var6 = 0;
                                var8 = var6 < var5;
                                var0 = 0;
                                if (!var8) {
                                    _fun10909_ip = 66;
                                    continue _fun10909
                                }
                            case 51:
                                var8 = arguments[var0];
                                var2[var0] = var8;
                                var0 = var0 + 1;
                                if (var0 < var5) {
                                    _fun10909_ip = 51;
                                    continue _fun10909
                                }
                            case 66:
                                var5 = var2.length;
                                var0 = 2;
                                var5 = var5 > var0;
                                var8 = undefined;
                                if (!var5) {
                                    _fun10909_ip = 87;
                                    continue _fun10909
                                }
                            case 83:
                                var8 = var2[var0];
                            case 87:
                                if (!var8) {
                                    _fun10909_ip = 250;
                                    continue _fun10909
                                }
                            case 93:
                                var7 = _closure1_slot2;
                                var5 = var1.String;
                                var8 = var5.bind(var4)(var8);
                                var5 = var8;
                            case 114: // try_start_0
                                var10 = var1.URL;
                                var9 = var5;
                                var8 = _closure1_slot0;
                                var11 = _closure1_slot1;
                                var1 = 1;
                                var1 = var11[var1];
                                var1 = var8.bind(var4)(var1);
                                var1 = var1.WINDOW;
                                var1 = var1.location;
                                var12 = var1.origin;
                                var8 = var10.prototype;
                                var8 = Object.create(var8, {
                                    constructor: {
                                        value: var10
                                    }
                                });
                                var14 = var8;
                                var13 = var9;
                                var1 = new var14[var10](var13, var12, var11);
                                var8 = var1 instanceof Object ? var1 : var8;
                                var1 = var8.toString;
                                var1 = var1.bind(var8)();
                            case 192: // try_end0
                                _fun10909_ip = 199;
                                continue _fun10909;
                            case 194: // catch_target0
                                CatchBlockStart(arg_register = 8);
                                var1 = var5;
                            case 199:
                                var _closure1_slot2 = var1;
                                if (!(var7 !== var1)) {
                                    _fun10909_ip = 270;
                                    continue _fun10909
                                }
                            case 207:
                                var5 = {};
                                var5.from = var7;
                                var5.to = var1;
                                var1 = _closure1_slot0;
                                var0 = _closure1_slot1;
                                var0 = var0[var6];
                                var4 = var1.bind(var4)(var0);
                                var1 = var4.triggerHandlers;
                                var0 = 'history';
                                var0 = var1.bind(var4)(var0, var5);
                            case 250:
                                var1 = _closure3_slot0;
                                var0 = var1.apply;
                                var0 = var0.bind(var1)(var3, var2);
                                return var0;
                            case 270:
                                var1 = _closure3_slot0;
                                var0 = var1.apply;
                                var0 = var0.bind(var1)(var3, var2);
                                return var0;
                        }
                    };
                    return var0;
                };
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var6 = 1;
                var7 = var2[var6];
                var0 = undefined;
                var7 = var4.bind(var0)(var7);
                var9 = var7.WINDOW;
                var8 = var9.addEventListener;
                var7 = 'popstate';
                var3 = function() { // Environment: var3
                    _fun10910: for (var _fun10910_ip = 0;;) switch (_fun10910_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 1;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.WINDOW;
                            var2 = var2.location;
                            var2 = var2.href;
                            var3 = _closure1_slot2;
                            _closure1_slot2 = var2;
                            if (!(var3 !== var2)) {
                                _fun10910_ip = 99;
                                continue _fun10910
                            }
                        case 54:
                            var4 = {};
                            var4.from = var3;
                            var4.to = var2;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 0;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.triggerHandlers;
                            var1 = 'history';
                            var1 = var2.bind(var3)(var1, var4);
                        case 99:
                            return var0;
                    }
                };
                var3 = var8.bind(var9)(var7, var3);
                var3 = 0;
                var2 = var2[var3];
                var4 = var4.bind(var0)(var2);
                var2 = var4.supportsHistory;
                var2 = var2.bind(var4)();
                if (!var2) {
                    _fun10907_ip = 187;
                    continue _fun10907
                }
            case 85:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var4 = var1[var3];
                var9 = var2.bind(var0)(var4);
                var8 = var9.fill;
                var4 = var1[var6];
                var4 = var2.bind(var0)(var4);
                var4 = var4.WINDOW;
                var7 = var4.history;
                var4 = 'pushState';
                var4 = var8.bind(var9)(var7, var4, var5);
                var3 = var1[var3];
                var4 = var2.bind(var0)(var3);
                var3 = var4.fill;
                var1 = var1[var6];
                var1 = var2.bind(var0)(var1);
                var1 = var1.WINDOW;
                var2 = var1.history;
                var1 = 'replaceState';
                var1 = var3.bind(var4)(var2, var1, var5);
            case 187:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var1, var4, var3);
    var2 = function(arg0) { // Original name: addHistoryInstrumentationHandler, environment: var2
        var3 = _closure1_slot0;
        var5 = _closure1_slot1;
        var2 = 0;
        var4 = var5[var2];
        var0 = undefined;
        var8 = var3.bind(var0)(var4);
        var7 = var8.addHandler;
        var4 = 'history';
        var6 = arg0;
        var6 = var7.bind(var8)(var4, var6);
        var2 = var5[var2];
        var3 = var3.bind(var0)(var2);
        var2 = var3.maybeInstrument;
        var1 = _closure1_slot3;
        var1 = var2.bind(var3)(var4, var1);
        return var0;
    };
    var1.addHistoryInstrumentationHandler = var2;
    var1.instrumentHistory = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [817, 1036]);