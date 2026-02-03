// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PrivateValueStore;
    var1 = function arg0() {
        var1 = arg0;
        var10 = var1.id;
        var _closure2_slot0 = var10;
        var7 = var1.onAction;
        var _closure2_slot1 = var7;
        var8 = var1.getState;
        var _closure2_slot2 = var8;
        var9 = var1.emitter;
        var _closure2_slot3 = var9;
        var4 = var1.router;
        var _closure2_slot4 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useContext;
        var11 = _closure1_slot1;
        var12 = _closure1_slot2;
        var1 = 2;
        var1 = var12[var1];
        var5 = undefined;
        var1 = var11.bind(var5)(var1);
        var6 = var2.bind(var3)(var1);
        var _closure2_slot5 = var6;
        var2 = var3.useContext;
        var1 = 3;
        var1 = var12[var1];
        var1 = var11.bind(var5)(var1);
        var5 = var2.bind(var3)(var1);
        var _closure2_slot6 = var5;
        var2 = var3.useMemo;
        var1 = new Array(7);
        var1[0] = var10;
        var9 = var9.emit;
        var1[1] = var9;
        var1[2] = var8;
        var1[3] = var7;
        var1[4] = var6;
        var1[5] = var5;
        var1[6] = var4;
        var0 = function() { // Environment: var0
            _fun17398: for (var _fun17398_ip = 0;;) switch (_fun17398_ip) {
                case 0:
                    var7 = function arg0() {
                        _fun17399: for (var _fun17399_ip = 0;;) switch (_fun17399_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = 'function';
                                var0 = typeof var3;
                                var2 = var3;
                                if (!(var1 === var0)) {
                                    _fun17399_ip = 35;
                                    continue _fun17399
                                }
                            case 17:
                                var0 = _closure2_slot2;
                                var1 = undefined;
                                var0 = var0.bind(var1)();
                                var2 = var3.bind(var1)(var0);
                            case 35:
                                var3 = _closure2_slot1;
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                if (var3) {
                                    _fun17399_ip = 62;
                                    continue _fun17399
                                }
                            case 52:
                                var5 = _closure2_slot5;
                                var4 = null;
                                var3 = var4 == var5;
                            case 62:
                                if (var3) {
                                    _fun17399_ip = 74;
                                    continue _fun17399
                                }
                            case 65:
                                var1 = _closure2_slot5;
                                var1 = var1.bind(var0)(var2);
                            case 74:
                                return var0;
                        }
                    };
                    var _closure3_slot0 = var7;
                    var2 = global;
                    var8 = var2.Object;
                    var6 = var8.assign;
                    var3 = _closure2_slot4;
                    var5 = var3.actionCreators;
                    var9 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 4;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var9.bind(var3)(var4);
                    var4 = var3.CommonActions;
                    var3 = {};
                    var5 = var6.bind(var8)(var3, var5, var4);
                    var _closure3_slot1 = var5;
                    var4 = var2.Object;
                    var3 = var4.keys;
                    var6 = var3.bind(var4)(var5);
                    var5 = var6.reduce;
                    var4 = function(arg0, arg1) { // Environment: var1
                        var0 = arg0;
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var1 = function() { // Environment: var1
                            var0 = undefined;
                            var1 = undefined;
                            var2 = _closure3_slot0;
                            var5 = _closure3_slot1;
                            var3 = _closure4_slot0;
                            var4 = var5[var3];
                            var3 = var4.apply;
                            var1 = arguments;
                            var1 = var3.bind(var4)(var5, var1);
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var0[var2] = var1;
                        return var0;
                    };
                    var3 = {};
                    var6 = var5.bind(var6)(var4, var3);
                    var5 = var2.Object;
                    var4 = var5.assign;
                    var3 = _closure2_slot6;
                    var2 = {};
                    var2.dispatch = var7;
                    var7 = _closure2_slot3;
                    var7 = var7.emit;
                    var2.emit = var7;
                    if (var3) {
                        _fun17398_ip = 162;
                        continue _fun17398
                    }
                case 155:
                    var7 = function() { // Environment: var1
                        var0 = true;
                        return var0;
                    };
                    _fun17398_ip = 172;
                    continue _fun17398;
                case 162:
                    var8 = _closure2_slot6;
                    var7 = var8.isFocused;
                case 172:
                    var2.isFocused = var7;
                    var7 = function() {
                        _fun17403: for (var _fun17403_ip = 0;;) switch (_fun17403_ip) {
                            case 0:
                                var0 = _closure2_slot2;
                                var1 = undefined;
                                var6 = var0.bind(var1)();
                                var5 = _closure2_slot4;
                                var4 = var5.getStateForAction;
                                var3 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var0 = 4;
                                var0 = var7[var0];
                                var0 = var3.bind(var1)(var0);
                                var3 = var0.CommonActions;
                                var0 = var3.goBack;
                                var3 = var0.bind(var3)();
                                var0 = {};
                                var7 = var6.routeNames;
                                var0.routeNames = var7;
                                var7 = {};
                                var0.routeParamList = var7;
                                var7 = {};
                                var0.routeGetIdList = var7;
                                var0 = var4.bind(var5)(var6, var3, var0);
                                var4 = null;
                                var0 = var4 !== var0;
                                if (var0) {
                                    _fun17403_ip = 135;
                                    continue _fun17403
                                }
                            case 105:
                                var3 = _closure2_slot6;
                                var3 = var4 == var3;
                                var1 = undefined;
                                if (var3) {
                                    _fun17403_ip = 132;
                                    continue _fun17403
                                }
                            case 118:
                                var3 = _closure2_slot6;
                                var2 = var3.canGoBack;
                                var1 = var2.bind(var3)();
                            case 132:
                                var0 = var1;
                            case 135:
                                if (var0) {
                                    _fun17403_ip = 140;
                                    continue _fun17403
                                }
                            case 138:
                                var0 = false;
                            case 140:
                                return var0;
                        }
                    };
                    var2.canGoBack = var7;
                    var7 = function() {
                        var0 = _closure2_slot0;
                        return var0;
                    };
                    var2.getId = var7;
                    var7 = function arg0() {
                        _fun17405: for (var _fun17405_ip = 0;;) switch (_fun17405_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = undefined;
                                if (!(var0 === var3)) {
                                    _fun17405_ip = 18;
                                    continue _fun17405
                                }
                            case 9:
                                var0 = _closure2_slot6;
                                return var0;
                            case 18:
                                var4 = _closure3_slot2;
                                var0 = var4;
                                if (!var4) {
                                    _fun17405_ip = 87;
                                    continue _fun17405
                                }
                            case 31:
                                var1 = var4.getId;
                                var1 = var1.bind(var4)();
                                var2 = var4;
                                var0 = var2;
                                if (!(var3 !== var1)) {
                                    _fun17405_ip = 87;
                                    continue _fun17405
                                }
                            case 51:
                                var1 = var2.getParent;
                                var4 = var1.bind(var2)();
                                var0 = var4;
                                if (!var4) {
                                    _fun17405_ip = 87;
                                    continue _fun17405
                                }
                            case 67:
                                var1 = var4.getId;
                                var1 = var1.bind(var4)();
                                var2 = var4;
                                var0 = var2;
                                if (var3 !== var1) {
                                    _fun17405_ip = 51;
                                    continue _fun17405
                                }
                            case 87:
                                return var0;
                        }
                    };
                    var2.getParent = var7;
                    var0 = _closure2_slot2;
                    var2.getState = var0;
                    var13 = {};
                    var14 = var5;
                    var12 = var3;
                    var11 = var6;
                    var10 = var2;
                    var0 = var14[var4](var13, var12, var11, var10, var9);
                    var _closure3_slot2 = var0;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1473, 1494, 1497, 1474]);