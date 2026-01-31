// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function() {
        _fun4807: for (var _fun4807_ip = 0;;) switch (_fun4807_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun4807_ip = 74;
                continue _fun4807;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun4810: for (var _fun4810_ip = 0;;) switch (_fun4810_ip) {
            case 0:
                var4 = arg0;
                var6 = arg2;
                var _closure2_slot0 = var6;
                var5 = _closure1_slot6;
                var3 = _closure1_slot5;
                var0 = 1;
                var2 = 3;
                var7 = var0 & var2;
                var0 = var4;
                if (!var7) {
                    _fun4810_ip = 44;
                    continue _fun4810
                }
            case 39:
                var0 = var4.prototype;
            case 44:
                var4 = undefined;
                var3 = var3.bind(var4)(var0);
                var0 = 'setState';
                var4 = var5.bind(var4)(var3, var0, var6);
                var _closure2_slot1 = var4;
                var0 = 2;
                var2 = var0 & var2;
                var0 = var4;
                if (!var2) {
                    _fun4810_ip = 98;
                    continue _fun4810
                }
            case 79:
                var3 = 'function';
                var2 = typeof var4;
                var0 = var4;
                if (!(var3 === var2)) {
                    _fun4810_ip = 98;
                    continue _fun4810
                }
            case 93:
                var0 = function(arg0) { // Environment: var1
                    var3 = _closure2_slot1;
                    var2 = var3.apply;
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
            case 98:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var4 = var4[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var4);
    var3 = var3.PureComponent;
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun4813: for (var _fun4813_ip = 0;;) switch (_fun4813_ip) {
                case 0:
                    var3 = this;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var0 = var0.bind(var2)(var3, var1);
                    var8 = new Array(1);
                    var0 = arg0;
                    var8[0] = var0;
                    var0 = _closure1_slot5;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun4813_ip = 73;
                        continue _fun4813
                    }
                case 60:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun4813_ip = 107;
                    continue _fun4813;
                case 73:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot5;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 107:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = false;
                    var0._inAsyncStateUpdate = var1;
                    var1 = var0._installSetStateHooks;
                    var1 = var1.bind(var0)();
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'setState';
        var4.key = var0;
        var0 = function arg0, arg1() {
            _fun4814: for (var _fun4814_ip = 0;;) switch (_fun4814_ip) {
                case 0:
                    var5 = arg0;
                    var3 = arg1;
                    var7 = this;
                    var _closure3_slot0 = var5;
                    var _closure3_slot1 = var7;
                    var1 = 'function';
                    var0 = typeof var5;
                    if (!(var1 !== var0)) {
                        _fun4814_ip = 81;
                        continue _fun4814
                    }
                case 30:
                    var8 = _closure1_slot9;
                    var12 = _closure2_slot0;
                    var2 = undefined;
                    var11 = 'setState';
                    var9 = 3;
                    var13 = undefined;
                    var10 = var7;
                    var1 = var13[var8](var12, var11, var10, var9, var8);
                    var0 = new Array(2);
                    var0[0] = var5;
                    var0[1] = var3;
                    var0 = var1.bind(var2)(var0);
                    _fun4814_ip = 135;
                    continue _fun4814;
                case 81:
                    var6 = _closure1_slot9;
                    var12 = _closure2_slot0;
                    var2 = undefined;
                    var11 = 'setState';
                    var9 = 3;
                    var13 = undefined;
                    var10 = var7;
                    var1 = var13[var6](var12, var11, var10, var9, var8);
                    var0 = new Array(2);
                    var4 = function(arg0, arg1) { // Environment: var4
                        _fun4815: for (var _fun4815_ip = 0;;) switch (_fun4815_ip) {
                            case 0:
                                var3 = arg0;
                                var2 = arg1;
                                var5 = undefined;
                                var0 = undefined;
                                var6 = _closure3_slot1;
                                var4 = true;
                                var6._inAsyncStateUpdate = var4;
                            case 25: // try_start_0 // try_start_1
                                var4 = _closure3_slot0;
                                var0 = var4.bind(var5)(var3, var2);
                            case 35: // try_end0 // try_end1
                                var3 = _closure3_slot1;
                                var2 = false;
                                var3._inAsyncStateUpdate = var2;
                                return var0;
                            case 49: // try_start_2 // catch_target0
                                CatchBlockStart(arg_register = 0);
                                throw var0;
                            case 53: // try_end2 // catch_target1 // catch_target2
                                CatchBlockStart(arg_register = 0);
                                var2 = _closure3_slot1;
                                var1 = false;
                                var2._inAsyncStateUpdate = var1;
                                throw var0;
                        }
                    };
                    var0[0] = var4;
                    var0[1] = var3;
                    var0 = var1.bind(var2)(var0);
                case 135:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = '_installSetStateHooks';
        var4.key = var6;
        var5 = function() {
            var4 = this;
            var _closure3_slot0 = var4;
            var1 = var4.props;
            var _closure3_slot1 = var1;
            var1 = var4.state;
            var _closure3_slot2 = var1;
            var1 = global;
            var6 = var1.Object;
            var5 = var6.defineProperty;
            var3 = {};
            var2 = function() {
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 7;
                var0 = var2[var0];
                var4 = undefined;
                var3 = var1.bind(var4)(var0);
                var1 = _closure3_slot0;
                var1 = var1._inAsyncStateUpdate;
                var2 = !var1;
                var1 = '"this.props" should not be accessed during state updates';
                var1 = var3.bind(var4)(var2, var1);
                var0 = _closure3_slot1;
                return var0;
            };
            var3.get = var2;
            var2 = function arg0() {
                var0 = arg0;
                _closure3_slot1 = var0;
                var0 = undefined;
                return var0;
            };
            var3.set = var2;
            var2 = 'props';
            var2 = var5.bind(var6)(var4, var2, var3);
            var3 = var1.Object;
            var2 = var3.defineProperty;
            var1 = {};
            var5 = function() {
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 7;
                var0 = var2[var0];
                var4 = undefined;
                var3 = var1.bind(var4)(var0);
                var1 = _closure3_slot0;
                var1 = var1._inAsyncStateUpdate;
                var2 = !var1;
                var1 = '"this.state" should not be acceessed during state updates';
                var1 = var3.bind(var4)(var2, var1);
                var0 = _closure3_slot2;
                return var0;
            };
            var1.get = var5;
            var0 = function arg0() {
                var0 = arg0;
                _closure3_slot2 = var0;
                var0 = undefined;
                return var0;
            };
            var1.set = var0;
            var0 = 'state';
            var0 = var2.bind(var3)(var4, var0, var1);
            var0 = undefined;
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 102, 18, 31, 44]);