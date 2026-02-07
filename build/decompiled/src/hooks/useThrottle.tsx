// hooks/useThrottle.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var4 = var6[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot2 = var1;
    var1 = function arg0() {
        var0 = arg0;
        return var0;
    };
    var _closure1_slot3 = var1;
    var1 = function arg0, arg1() {
        _fun70052: for (var _fun70052_ip = 0;;) switch (_fun70052_ip) {
            case 0:
                var8 = arg0;
                var7 = arg1;
                var6 = arguments[2];
                var5 = arguments[3];
                var _closure2_slot0 = var8;
                var _closure2_slot1 = var7;
                var9 = undefined;
                if (!(var6 === var9)) {
                    _fun70052_ip = 32;
                    continue _fun70052
                }
            case 28:
                var6 = new Array(0);
            case 32:
                var _closure2_slot2 = var5;
                var _closure2_slot3 = var9;
                var4 = _closure1_slot2;
                var2 = var4.useRef;
                var3 = _closure1_slot0;
                var10 = _closure1_slot1;
                var0 = 1;
                var0 = var10[var0];
                var3 = var3.bind(var9)(var0);
                var0 = var3.throttle;
                var0 = var0.bind(var3)(var8, var7, var5);
                var0 = var2.bind(var4)(var0);
                _closure2_slot3 = var0;
                var3 = var4.useEffect;
                var2 = new Array(3);
                var2[0] = var8;
                var2[1] = var7;
                var2[2] = var5;
                var11 = 3;
                var13 = var2;
                var12 = var6;
                var5 = arraySpread(var13, var12, var11);
                var1 = function() { // Environment: var1
                    var1 = _closure2_slot3;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 1;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.throttle;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var0 = _closure2_slot2;
                    var0 = var4.bind(var5)(var3, var2, var0);
                    var1.current = var0;
                    var0 = function() { // Environment: var0
                        _fun70054: for (var _fun70054_ip = 0;;) switch (_fun70054_ip) {
                            case 0:
                                var0 = _closure2_slot3;
                                var1 = var0.current;
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun70054_ip = 28;
                                    continue _fun70054
                                }
                            case 18:
                                var0 = var1.cancel;
                                var0 = var0.bind(var1)();
                            case 28:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var3.bind(var4)(var1, var2);
                var0 = var0.current;
                return var0;
        }
    };
    var _closure1_slot4 = var1;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'hooks/useThrottle.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0, arg1) { // Environment: var3
        _fun70055: for (var _fun70055_ip = 0;;) switch (_fun70055_ip) {
            case 0:
                var0 = arg0;
                var3 = arg1;
                var8 = arguments[2];
                var _closure2_slot0 = var0;
                var7 = undefined;
                if (!(var8 === var7)) {
                    _fun70055_ip = 25;
                    continue _fun70055
                }
            case 21:
                var8 = new Array(0);
            case 25:
                var _closure2_slot1 = var7;
                var _closure2_slot2 = var7;
                var6 = _closure1_slot4;
                var12 = _closure1_slot3;
                var9 = arguments[3];
                var13 = undefined;
                var11 = var3;
                var10 = var8;
                var7 = var13[var6](var12, var11, var10, var9, var8);
                _closure2_slot1 = var7;
                var6 = _closure1_slot2;
                var1 = var6.useRef;
                var1 = var1.bind(var6)(var0);
                _closure2_slot2 = var1;
                var5 = var6.useEffect;
                var4 = new Array(2);
                var4[0] = var0;
                var4[1] = var7;
                var2 = function() { // Environment: var2
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var1 = _closure2_slot2;
                    var1.current = var2;
                    return var0;
                };
                var2 = var5.bind(var6)(var2, var4);
                var2 = 0;
                if (!(var2 !== var3)) {
                    _fun70055_ip = 122;
                    continue _fun70055
                }
            case 117:
                var0 = var1.current;
            case 122:
                return var0;
        }
    };
    var2.useThrottledState = var3;
    var2.useThrottledFunction = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 22, 2]);