// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var4;
    var0 = ['emit'];
    var _closure1_slot3 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var4 = var4[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot6 = var3;
    var1 = function arg0() {
        var0 = arg0;
        var2 = var0.state;
        var12 = var0.getState;
        var _closure2_slot0 = var12;
        var11 = var0.navigation;
        var _closure2_slot1 = var11;
        var10 = var0.setOptions;
        var _closure2_slot2 = var10;
        var4 = var0.router;
        var0 = var0.emitter;
        var _closure2_slot3 = var0;
        var7 = _closure1_slot6;
        var6 = var7.useContext;
        var13 = _closure1_slot1;
        var9 = _closure1_slot2;
        var5 = 3;
        var5 = var9[var5];
        var8 = undefined;
        var5 = var13.bind(var8)(var5);
        var5 = var6.bind(var7)(var5);
        var5 = var5.stackRef;
        var6 = var7.useMemo;
        var5 = new Array(5);
        var5[0] = var12;
        var5[1] = var11;
        var5[2] = var10;
        var5[3] = var4;
        var5[4] = var0;
        var0 = function() { // Environment: var1
            var0 = {};
            var1 = {};
            var0.current = var1;
            return var0;
        };
        var0 = var6.bind(var7)(var0, var5);
        var _closure2_slot4 = var0;
        var5 = global;
        var7 = var5.Object;
        var6 = var7.assign;
        var5 = var4.actionCreators;
        var4 = _closure1_slot0;
        var3 = 4;
        var3 = var9[var3];
        var3 = var4.bind(var8)(var3);
        var4 = var3.CommonActions;
        var3 = {};
        var3 = var6.bind(var7)(var3, var5, var4);
        var _closure2_slot5 = var3;
        var4 = var2.routes;
        var3 = var4.reduce;
        var2 = function(arg0, arg1) { // Environment: var1
            _fun17426: for (var _fun17426_ip = 0;;) switch (_fun17426_ip) {
                case 0:
                    var0 = arg0;
                    var1 = arg1;
                    var _closure3_slot0 = var0;
                    var _closure3_slot1 = var1;
                    var2 = _closure2_slot4;
                    var4 = var2.current;
                    var2 = var1.key;
                    var2 = var4[var2];
                    if (var2) {
                        _fun17426_ip = 232;
                        continue _fun17426
                    }
                case 43:
                    var8 = _closure2_slot1;
                    var4 = var8.emit;
                    var7 = _closure1_slot5;
                    var6 = _closure1_slot3;
                    var4 = undefined;
                    var10 = var7.bind(var4)(var8, var6);
                    var _closure3_slot2 = var10;
                    var4 = function arg0() {
                        _fun17427: for (var _fun17427_ip = 0;;) switch (_fun17427_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = 'function';
                                var0 = typeof var2;
                                var5 = var2;
                                if (!(var1 === var0)) {
                                    _fun17427_ip = 35;
                                    continue _fun17427
                                }
                            case 17:
                                var0 = _closure2_slot0;
                                var1 = undefined;
                                var0 = var0.bind(var1)();
                                var5 = var2.bind(var1)(var0);
                            case 35:
                                var0 = null;
                                if (!(var0 != var5)) {
                                    _fun17427_ip = 95;
                                    continue _fun17427
                                }
                            case 41:
                                var2 = _closure2_slot1;
                                var1 = var2.dispatch;
                                var0 = global;
                                var4 = var0.Object;
                                var3 = var4.assign;
                                var0 = {};
                                var6 = _closure3_slot1;
                                var6 = var6.key;
                                var0.source = var6;
                                var0 = var3.bind(var4)(var0, var5);
                                var0 = var1.bind(var2)(var0);
                            case 95:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot3 = var4;
                    var4 = function arg0() {
                        _fun17428: for (var _fun17428_ip = 0;;) switch (_fun17428_ip) {
                            case 0:
                                var0 = arg0;
                            case 3: // try_start_0
                                var1 = var0;
                                var0 = undefined;
                                var1 = var1.bind(var0)();
                            case 12: // try_end0
                                return var0;
                            case 14: // catch_target0
                                CatchBlockStart(arg_register = 0);
                                throw var0;
                        }
                    };
                    var _closure3_slot4 = var4;
                    var6 = global;
                    var8 = var6.Object;
                    var7 = var8.keys;
                    var4 = _closure2_slot5;
                    var9 = var7.bind(var8)(var4);
                    var8 = var9.reduce;
                    var7 = function(arg0, arg1) { // Environment: var3
                        var0 = arg0;
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var1 = function() { // Environment: var1
                            _fun17430: for (var _fun17430_ip = 0;;) switch (_fun17430_ip) {
                                case 0:
                                    var2 = undefined;
                                    var5 = undefined;
                                    var4 = arguments.length;
                                    var1 = global;
                                    var1 = var1.Array;
                                    var3 = var1.prototype;
                                    var3 = Object.create(var3, {
                                        constructor: {
                                            value: var1
                                        }
                                    });
                                    var8 = var3;
                                    var7 = var4;
                                    var1 = new var8[var1](var7, var6);
                                    var3 = var1 instanceof Object ? var1 : var3;
                                    var _closure5_slot0 = var3;
                                    var1 = 0;
                                    var6 = var1 < var4;
                                    if (!var6) {
                                        _fun17430_ip = 68;
                                        continue _fun17430
                                    }
                                case 53:
                                    var6 = arguments[var1];
                                    var3[var1] = var6;
                                    var1 = var1 + 1;
                                    if (var1 < var4) {
                                        _fun17430_ip = 53;
                                        continue _fun17430
                                    }
                                case 68:
                                    var1 = _closure3_slot4;
                                    var0 = function() { // Environment: var0
                                        var2 = _closure3_slot3;
                                        var4 = _closure2_slot5;
                                        var0 = _closure4_slot0;
                                        var3 = var4[var0];
                                        var1 = var3.apply;
                                        var0 = _closure5_slot0;
                                        var1 = var1.bind(var3)(var4, var0);
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var0[var2] = var1;
                        return var0;
                    };
                    var4 = {};
                    var14 = var8.bind(var9)(var7, var4);
                    var4 = var1.key;
                    var8 = var6.Object;
                    var7 = var8.assign;
                    var11 = _closure2_slot3;
                    var6 = var11.create;
                    var5 = var1.key;
                    var13 = var6.bind(var11)(var5);
                    var5 = {};
                    var11 = function arg0() {
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var2 = _closure3_slot4;
                        var1 = undefined;
                        var0 = function() { // Environment: var0
                            var2 = _closure3_slot3;
                            var1 = _closure4_slot0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var5.dispatch = var11;
                    var11 = function arg0() {
                        _fun17434: for (var _fun17434_ip = 0;;) switch (_fun17434_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = undefined;
                                if (!(var0 !== var3)) {
                                    _fun17434_ip = 30;
                                    continue _fun17434
                                }
                            case 9:
                                var2 = _closure3_slot2;
                                var0 = var2.getId;
                                var0 = var0.bind(var2)();
                                if (!(var3 !== var0)) {
                                    _fun17434_ip = 50;
                                    continue _fun17434
                                }
                            case 30:
                                var2 = _closure3_slot2;
                                var0 = var2.getParent;
                                var0 = var0.bind(var2)(var3);
                                _fun17434_ip = 67;
                                continue _fun17434;
                            case 50:
                                var2 = _closure3_slot0;
                                var1 = _closure3_slot1;
                                var1 = var1.key;
                                var0 = var2[var1];
                            case 67:
                                return var0;
                        }
                    };
                    var5.getParent = var11;
                    var11 = function arg0() {
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var2 = _closure2_slot2;
                        var1 = undefined;
                        var0 = function(arg0) { // Environment: var0
                            var4 = arg0;
                            var1 = global;
                            var3 = var1.Object;
                            var2 = var3.assign;
                            var7 = _closure1_slot4;
                            var0 = _closure3_slot1;
                            var6 = var0.key;
                            var9 = var1.Object;
                            var8 = var9.assign;
                            var0 = var0.key;
                            var5 = var4[var0];
                            var1 = _closure4_slot0;
                            var0 = {};
                            var5 = var8.bind(var9)(var0, var5, var1);
                            var1 = undefined;
                            var0 = {};
                            var1 = var7.bind(var1)(var0, var6, var5);
                            var0 = {};
                            var0 = var2.bind(var3)(var0, var4, var1);
                            return var0;
                        };
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var5.setOptions = var11;
                    var3 = function() {
                        _fun17437: for (var _fun17437_ip = 0;;) switch (_fun17437_ip) {
                            case 0:
                                var1 = _closure2_slot0;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                                var1 = var0.routes;
                                var0 = var0.index;
                                var0 = var1[var0];
                                var1 = var0.key;
                                var0 = _closure3_slot1;
                                var0 = var0.key;
                                var0 = var1 === var0;
                                if (!var0) {
                                    _fun17437_ip = 79;
                                    continue _fun17437
                                }
                            case 52:
                                var1 = _closure2_slot1;
                                var1 = !var1;
                                if (var1) {
                                    _fun17437_ip = 76;
                                    continue _fun17437
                                }
                            case 62:
                                var3 = _closure2_slot1;
                                var2 = var3.isFocused;
                                var1 = var2.bind(var3)();
                            case 76:
                                var0 = var1;
                            case 79:
                                return var0;
                        }
                    };
                    var5.isFocused = var3;
                    var16 = {};
                    var17 = var8;
                    var15 = var10;
                    var12 = var5;
                    var3 = var17[var7](var16, var15, var14, var13, var12, var11);
                    var0[var4] = var3;
                    _fun17426_ip = 241;
                    continue _fun17426;
                case 232:
                    var1 = var1.key;
                    var0[var1] = var2;
                case 241:
                    return var0;
            }
        };
        var1 = {};
        var1 = var3.bind(var4)(var2, var1);
        var0.current = var1;
        var0 = var0.current;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 29, 31, 1491, 1474]);