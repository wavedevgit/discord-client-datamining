// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 0;
    var4 = var3[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot2 = var3;
    var1 = function(arg0) { // Original name: useOptionsGetters, environment: var1
        var3 = arg0;
        var0 = var3.key;
        var _closure2_slot0 = var0;
        var1 = var3.options;
        var _closure2_slot1 = var1;
        var8 = var3.navigation;
        var _closure2_slot2 = var8;
        var5 = _closure1_slot2;
        var4 = var5.useRef;
        var4 = var4.bind(var5)(var1);
        var _closure2_slot3 = var4;
        var6 = var5.useRef;
        var4 = {};
        var4 = var6.bind(var5)(var4);
        var _closure2_slot4 = var4;
        var4 = var5.useContext;
        var9 = _closure1_slot0;
        var10 = _closure1_slot1;
        var3 = 1;
        var3 = var10[var3];
        var7 = undefined;
        var3 = var9.bind(var7)(var3);
        var3 = var4.bind(var5)(var3);
        var3 = var3.onOptionsChange;
        var _closure2_slot5 = var3;
        var6 = var5.useContext;
        var4 = 2;
        var4 = var10[var4];
        var4 = var9.bind(var7)(var4);
        var4 = var6.bind(var5)(var4);
        var7 = var4.addOptionsGetter;
        var _closure2_slot6 = var7;
        var6 = var5.useCallback;
        var4 = new Array(2);
        var4[0] = var8;
        var4[1] = var3;
        var3 = function() { // Environment: var2
            _fun17130: for (var _fun17130_ip = 0;;) switch (_fun17130_ip) {
                case 0:
                    var0 = _closure2_slot2;
                    var3 = null;
                    var2 = var3 == var0;
                    var0 = undefined;
                    var4 = undefined;
                    if (var2) {
                        _fun17130_ip = 34;
                        continue _fun17130
                    }
                case 20:
                    var5 = _closure2_slot2;
                    var2 = var5.isFocused;
                    var4 = var2.bind(var5)();
                case 34:
                    var2 = var3 == var4;
                    if (var2) {
                        _fun17130_ip = 44;
                        continue _fun17130
                    }
                case 41:
                    var2 = var4;
                case 44:
                    var4 = global;
                    var6 = var4.Object;
                    var5 = var6.keys;
                    var4 = _closure2_slot4;
                    var4 = var4.current;
                    var4 = var5.bind(var6)(var4);
                    var4 = var4.length;
                    if (!var2) {
                        _fun17130_ip = 82;
                        continue _fun17130
                    }
                case 79:
                    var2 = !var4;
                case 82:
                    if (!var2) {
                        _fun17130_ip = 109;
                        continue _fun17130
                    }
                case 85:
                    var2 = _closure2_slot5;
                    var1 = _closure2_slot3;
                    var1 = var1.current;
                    if (!(var3 == var1)) {
                        _fun17130_ip = 104;
                        continue _fun17130
                    }
                case 102:
                    var1 = {};
                case 104:
                    var1 = var2.bind(var0)(var1);
                case 109:
                    return var0;
            }
        };
        var6 = var6.bind(var5)(var3, var4);
        var _closure2_slot7 = var6;
        var4 = var5.useEffect;
        var3 = new Array(3);
        var3[0] = var8;
        var3[1] = var1;
        var3[2] = var6;
        var1 = function() { // Environment: var2
            _fun17131: for (var _fun17131_ip = 0;;) switch (_fun17131_ip) {
                case 0:
                    var2 = _closure2_slot3;
                    var0 = _closure2_slot1;
                    var2.current = var0;
                    var2 = _closure2_slot7;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var3 = _closure2_slot2;
                    var2 = null;
                    var2 = var2 == var3;
                    if (var2) {
                        _fun17131_ip = 64;
                        continue _fun17131
                    }
                case 40:
                    var4 = _closure2_slot2;
                    var3 = var4.addListener;
                    var2 = _closure2_slot7;
                    var1 = 'focus';
                    var0 = var3.bind(var4)(var1, var2);
                case 64:
                    return var0;
            }
        };
        var1 = var4.bind(var5)(var1, var3);
        var4 = var5.useCallback;
        var3 = function() { // Environment: var2
            _fun17132: for (var _fun17132_ip = 0;;) switch (_fun17132_ip) {
                case 0:
                    var0 = _closure2_slot4;
                    var10 = var0.current;
                    var0 = null;
                    var4 = undefined;
                    var3 = undefined;
                    var2 = undefined;
                    for (var6 in var10)
                        case 28: {
                            case 37: var1 = var6;
                            var12 = _closure2_slot4;
                            var13 = var12.current;
                            var12 = var13.hasOwnProperty;
                            var12 = var12.bind(var13)(var1);
                            if (!var12) {
                                _fun17132_ip = 28;
                                continue _fun17132
                            }
                            case 63: var12 = _closure2_slot4;
                            var12 = var12.current;
                            var13 = var12[var1];
                            var14 = var0 == var13;
                            var1 = undefined;
                            if (var14) {
                                _fun17132_ip = 95;
                                continue _fun17132
                            }
                            case 85: var14 = var13.call;
                            var1 = var14.bind(var13)(var12);
                            case 95: var4 = var13;
                            var3 = var12;
                            var2 = var1;
                            if (var0 === var2) {
                                _fun17132_ip = 28;
                                continue _fun17132
                            }
                            case 108: return var1;
                        }
                case 110:
                    return var0;
            }
        };
        var1 = new Array(0);
        var1 = var4.bind(var5)(var3, var1);
        var _closure2_slot8 = var1;
        var4 = var5.useCallback;
        var3 = new Array(2);
        var3[0] = var8;
        var3[1] = var1;
        var1 = function() { // Environment: var2
            _fun17133: for (var _fun17133_ip = 0;;) switch (_fun17133_ip) {
                case 0:
                    var0 = _closure2_slot2;
                    var2 = null;
                    var4 = var2 == var0;
                    var3 = undefined;
                    var0 = undefined;
                    if (var4) {
                        _fun17133_ip = 34;
                        continue _fun17133
                    }
                case 20:
                    var5 = _closure2_slot2;
                    var4 = var5.isFocused;
                    var0 = var4.bind(var5)();
                case 34:
                    if (!(var2 != var0)) {
                        _fun17133_ip = 43;
                        continue _fun17133
                    }
                case 38:
                    if (var0) {
                        _fun17133_ip = 43;
                        continue _fun17133
                    }
                case 41:
                    return var2;
                case 43:
                    var0 = _closure2_slot8;
                    var0 = var0.bind(var3)();
                    if (!(var2 === var0)) {
                        _fun17133_ip = 64;
                        continue _fun17133
                    }
                case 55:
                    var1 = _closure2_slot3;
                    var0 = var1.current;
                case 64:
                    return var0;
            }
        };
        var1 = var4.bind(var5)(var1, var3);
        var _closure2_slot9 = var1;
        var4 = var5.useEffect;
        var3 = new Array(3);
        var3[0] = var1;
        var3[1] = var7;
        var3[2] = var0;
        var0 = function() { // Environment: var2
            _fun17134: for (var _fun17134_ip = 0;;) switch (_fun17134_ip) {
                case 0:
                    var2 = _closure2_slot6;
                    var0 = null;
                    var2 = var0 == var2;
                    var4 = undefined;
                    var0 = undefined;
                    if (var2) {
                        _fun17134_ip = 38;
                        continue _fun17134
                    }
                case 20:
                    var3 = _closure2_slot6;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot9;
                    var0 = var3.bind(var4)(var2, var1);
                case 38:
                    return var0;
            }
        };
        var0 = var4.bind(var5)(var0, var3);
        var0 = {};
        var4 = var5.useCallback;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function(arg0, arg1) { // Environment: var2
            var4 = arg0;
            var _closure3_slot0 = var4;
            var2 = _closure2_slot4;
            var3 = var2.current;
            var2 = arg1;
            var3[var4] = var2;
            var2 = _closure2_slot7;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var0 = function() { // Environment: var0
                var1 = _closure2_slot4;
                var2 = var1.current;
                var1 = _closure3_slot0;
                var1 = delete var2[var1];
                var1 = _closure2_slot7;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
            };
            return var0;
        };
        var2 = var4.bind(var5)(var2, var3);
        var0.addOptionsGetter = var2;
        var0.getCurrentOptions = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1491, 1483]);