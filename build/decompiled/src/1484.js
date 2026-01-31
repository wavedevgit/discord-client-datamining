// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot1 = var3;
    var3 = {};
    var _closure1_slot2 = var3;
    var1 = function(arg0) { // Original name: useSyncState, environment: var1
        _fun17085: for (var _fun17085_ip = 0;;) switch (_fun17085_ip) {
            case 0:
                var4 = arg0;
                var8 = _closure1_slot1;
                var2 = var8.useRef;
                var3 = _closure1_slot2;
                var5 = var2.bind(var8)(var3);
                var _closure2_slot0 = var5;
                var6 = var8.useRef;
                var2 = false;
                var2 = var6.bind(var8)(var2);
                var _closure2_slot1 = var2;
                var6 = var8.useRef;
                var2 = true;
                var2 = var6.bind(var8)(var2);
                var _closure2_slot2 = var2;
                var7 = var8.useEffect;
                var6 = function() { // Environment: var1
                    var1 = _closure2_slot2;
                    var0 = true;
                    var1.current = var0;
                    var0 = function() { // Environment: var0
                        var1 = _closure2_slot2;
                        var0 = false;
                        var1.current = var0;
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var2 = new Array(0);
                var2 = var7.bind(var8)(var6, var2);
                var2 = var5.current;
                if (!(var2 === var3)) {
                    _fun17085_ip = 117;
                    continue _fun17085
                }
            case 91:
                var6 = 'function';
                var3 = typeof var4;
                var2 = var4;
                if (!(var6 === var3)) {
                    _fun17085_ip = 111;
                    continue _fun17085
                }
            case 105:
                var3 = undefined;
                var2 = var4.bind(var3)();
            case 111:
                var5.current = var2;
            case 117:
                var11 = _closure1_slot1;
                var3 = var11.useState;
                var2 = var5.current;
                var4 = var3.bind(var11)(var2);
                var3 = _closure1_slot0;
                var8 = undefined;
                var2 = 2;
                var3 = var3.bind(var8)(var4, var2);
                var2 = 0;
                var9 = var3[var2];
                var2 = 1;
                var7 = var3[var2];
                var _closure2_slot3 = var7;
                var4 = var11.useCallback;
                var3 = function() { // Environment: var1
                    var0 = _closure2_slot0;
                    var0 = var0.current;
                    return var0;
                };
                var2 = new Array(0);
                var4 = var4.bind(var11)(var3, var2);
                var6 = var11.useCallback;
                var3 = function(arg0) { // Environment: var1
                    _fun17089: for (var _fun17089_ip = 0;;) switch (_fun17089_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot0;
                            var1 = var1.current;
                            var1 = var2 !== var1;
                            if (!var1) {
                                _fun17089_ip = 31;
                                continue _fun17089
                            }
                        case 22:
                            var3 = _closure2_slot2;
                            var1 = var3.current;
                        case 31:
                            if (!var1) {
                                _fun17089_ip = 67;
                                continue _fun17089
                            }
                        case 34:
                            var1 = _closure2_slot0;
                            var1.current = var2;
                            var1 = _closure2_slot1;
                            var1 = var1.current;
                            if (var1) {
                                _fun17089_ip = 67;
                                continue _fun17089
                            }
                        case 56:
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 67:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = new Array(0);
                var3 = var6.bind(var11)(var3, var2);
                var10 = var11.useCallback;
                var6 = function(arg0) { // Environment: var1
                    _fun17090: for (var _fun17090_ip = 0;;) switch (_fun17090_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = _closure2_slot1;
                            var2 = true;
                            var3.current = var2;
                        case 18: // try_start_0
                            var2 = var0;
                            var0 = undefined;
                            var2 = var2.bind(var0)();
                        case 27: // try_end0
                            var3 = _closure2_slot1;
                            var2 = false;
                            var3.current = var2;
                            return var0;
                        case 41: // catch_target0
                            CatchBlockStart(arg_register = 0);
                            var2 = _closure2_slot1;
                            var1 = false;
                            var2.current = var1;
                            throw var0;
                    }
                };
                var2 = new Array(0);
                var2 = var10.bind(var11)(var6, var2);
                var10 = var11.useCallback;
                var6 = function() { // Environment: var1
                    _fun17091: for (var _fun17091_ip = 0;;) switch (_fun17091_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var1 = var1.current;
                            if (!var1) {
                                _fun17091_ip = 35;
                                continue _fun17091
                            }
                        case 15:
                            var2 = _closure2_slot3;
                            var0 = _closure2_slot0;
                            var1 = var0.current;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 35:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = new Array(0);
                var1 = var10.bind(var11)(var6, var1);
                var6 = var5.current;
                if (!(var9 !== var6)) {
                    _fun17085_ip = 267;
                    continue _fun17085
                }
            case 257:
                var6 = var5.current;
                var6 = var7.bind(var8)(var6);
            case 267:
                var5 = var5.current;
                var6 = _closure1_slot1;
                var0 = var6.useDebugValue;
                var0 = var0.bind(var6)(var5);
                var0 = new Array(5);
                var0[0] = var5;
                var0[1] = var4;
                var0[2] = var3;
                var0[3] = var2;
                var0[4] = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31]);