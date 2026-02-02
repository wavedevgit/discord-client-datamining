// lib/LimitedMap.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun56229: for (var _fun56229_ip = 0;;) switch (_fun56229_ip) {
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
                _fun56229_ip = 74;
                continue _fun56229;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot6 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var5);
    var0 = 0;
    var5 = var4[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var _closure1_slot0 = var5;
    var5 = 1;
    var5 = var4[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot1 = var5;
    var5 = 2;
    var5 = var4[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var5 = 3;
    var5 = var4[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 4;
    var5 = var4[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 5;
    var5 = var4[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 6;
    var5 = var4[var5];
    var5 = var6.bind(var0)(var5);
    var3 = var3.Map;
    var3 = var5.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun56233: for (var _fun56233_ip = 0;;) switch (_fun56233_ip) {
                case 0:
                    var3 = this;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot6;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun56233_ip = 62;
                        continue _fun56233
                    }
                case 49:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var3, var2);
                    _fun56233_ip = 100;
                    continue _fun56233;
                case 62:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var4 = _closure1_slot3;
                    var4 = var4.bind(var2)(var3);
                    var5 = var4.constructor;
                    var4 = new Array(0);
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 100:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = arg0;
                    var0.maxSize = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot5;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot1;
        var4 = {};
        var5 = 'set';
        var4.key = var5;
        var0 = function arg0, arg1() {
            _fun56234: for (var _fun56234_ip = 0;;) switch (_fun56234_ip) {
                case 0:
                    var5 = this;
                    var1 = var5.size;
                    var0 = var5.maxSize;
                    if (!(var1 >= var0)) {
                        _fun56234_ip = 51;
                        continue _fun56234
                    }
                case 18:
                    var1 = var5.delete;
                    var0 = var5.keys;
                    var2 = var0.bind(var5)();
                    var0 = var2.next;
                    var0 = var0.bind(var2)();
                    var0 = var0.value;
                    var0 = var1.bind(var5)(var0);
                case 51:
                    var9 = _closure2_slot0;
                    var3 = function arg0, arg1, arg2, arg3() {
                        _fun56235: for (var _fun56235_ip = 0;;) switch (_fun56235_ip) {
                            case 0:
                                var4 = arg0;
                                var6 = arg2;
                                var _closure4_slot0 = var6;
                                var5 = _closure1_slot4;
                                var3 = _closure1_slot3;
                                var0 = 1;
                                var2 = 3;
                                var7 = var0 & var2;
                                var0 = var4;
                                if (!var7) {
                                    _fun56235_ip = 44;
                                    continue _fun56235
                                }
                            case 39:
                                var0 = var4.prototype;
                            case 44:
                                var4 = undefined;
                                var3 = var3.bind(var4)(var0);
                                var0 = 'set';
                                var4 = var5.bind(var4)(var3, var0, var6);
                                var _closure4_slot1 = var4;
                                var0 = 2;
                                var2 = var0 & var2;
                                var0 = var4;
                                if (!var2) {
                                    _fun56235_ip = 98;
                                    continue _fun56235
                                }
                            case 79:
                                var3 = 'function';
                                var2 = typeof var4;
                                var0 = var4;
                                if (!(var3 === var2)) {
                                    _fun56235_ip = 98;
                                    continue _fun56235
                                }
                            case 93:
                                var0 = function(arg0) { // Environment: var1
                                    var3 = _closure4_slot1;
                                    var2 = var3.apply;
                                    var1 = _closure4_slot0;
                                    var0 = arg0;
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                                };
                            case 98:
                                return var0;
                        }
                    };
                    var2 = undefined;
                    var8 = 'set';
                    var6 = 3;
                    var10 = undefined;
                    var7 = var5;
                    var1 = var10[var3](var9, var8, var7, var6, var5);
                    var0 = new Array(2);
                    var3 = arg0;
                    var0[0] = var3;
                    var3 = arg1;
                    var0[1] = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 7;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/LimitedMap.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 102, 18, 162, 2]);