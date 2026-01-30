// modules/collectibles/native/VisibilitySensor.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var3 = 0;
    var7 = var5[var3];
    var0 = undefined;
    var7 = var4.bind(var0)(var7);
    var8 = var7.useEffect;
    var _closure1_slot2 = var8;
    var7 = var7.useRef;
    var _closure1_slot3 = var7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/VisibilitySensor.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        var1 = arg0;
        var6 = var1.children;
        var1 = var1.onChange;
        var _closure2_slot0 = var1;
        var10 = _closure1_slot3;
        var3 = undefined;
        var2 = null;
        var4 = var10.bind(var3)(var2);
        var _closure2_slot1 = var4;
        var7 = false;
        var8 = var10.bind(var3)(var7);
        var _closure2_slot2 = var8;
        var9 = _closure1_slot0;
        var11 = _closure1_slot1;
        var8 = 3;
        var8 = var11[var8];
        var8 = var9.bind(var3)(var8);
        var9 = var8.bind(var3)();
        var8 = var9.width;
        var _closure2_slot3 = var8;
        var9 = var9.height;
        var _closure2_slot4 = var9;
        var2 = var10.bind(var3)(var2);
        var _closure2_slot5 = var2;
        var11 = _closure1_slot4;
        var10 = var11.useCallback;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun88085: for (var _fun88085_ip = 0;;) switch (_fun88085_ip) {
                case 0:
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var1 = arg1;
                    var _closure3_slot1 = var1;
                    var2 = _closure2_slot5;
                    var3 = var2.current;
                    var2 = null;
                    if (!(var2 === var3)) {
                        _fun88085_ip = 73;
                        continue _fun88085
                    }
                case 34:
                    var1 = _closure2_slot5;
                    var2 = global;
                    var4 = var2.setInterval;
                    var3 = undefined;
                    var2 = function() { // Environment: var0
                        _fun88086: for (var _fun88086_ip = 0;;) switch (_fun88086_ip) {
                            case 0:
                                var1 = _closure2_slot1;
                                var2 = var1.current;
                                var1 = null;
                                if (!(var1 !== var2)) {
                                    _fun88086_ip = 47;
                                    continue _fun88086
                                }
                            case 18:
                                var0 = _closure2_slot1;
                                var2 = var0.current;
                                var1 = var2.measure;
                                var0 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Environment: var0
                                    _fun88087: for (var _fun88087_ip = 0;;) switch (_fun88087_ip) {
                                        case 0:
                                            var3 = arg4;
                                            var4 = arg5;
                                            var0 = arg3;
                                            var0 = var4 + var0;
                                            var1 = 0;
                                            var2 = var0 > var1;
                                            if (!var2) {
                                                _fun88087_ip = 33;
                                                continue _fun88087
                                            }
                                        case 22:
                                            var0 = _closure3_slot1;
                                            var2 = var4 < var0;
                                        case 33:
                                            if (!var2) {
                                                _fun88087_ip = 47;
                                                continue _fun88087
                                            }
                                        case 36:
                                            var0 = _closure3_slot0;
                                            var2 = var3 < var0;
                                        case 47:
                                            if (!var2) {
                                                _fun88087_ip = 61;
                                                continue _fun88087
                                            }
                                        case 50:
                                            var0 = arg2;
                                            var0 = var3 + var0;
                                            var2 = var0 > var1;
                                        case 61:
                                            var1 = _closure2_slot2;
                                            var1 = var1.current;
                                            if (!(var2 !== var1)) {
                                                _fun88087_ip = 98;
                                                continue _fun88087
                                            }
                                        case 77:
                                            var1 = _closure2_slot2;
                                            var1.current = var2;
                                            var1 = _closure2_slot0;
                                            var0 = undefined;
                                            var0 = var1.bind(var0)(var2);
                                        case 98:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var0 = var1.bind(var2)(var0);
                            case 47:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = 1000;
                    var0 = var4.bind(var3)(var2, var0);
                    var1.current = var0;
                case 73:
                    var0 = undefined;
                    return var0;
            }
        };
        var10 = var10.bind(var11)(var1, var2);
        var _closure2_slot6 = var10;
        var1 = function() { // Original name: stopWatching, environment: var0
            _fun88088: for (var _fun88088_ip = 0;;) switch (_fun88088_ip) {
                case 0:
                    var1 = _closure2_slot5;
                    var2 = var1.current;
                    var1 = null;
                    if (!(var1 !== var2)) {
                        _fun88088_ip = 48;
                        continue _fun88088
                    }
                case 18:
                    var2 = global;
                    var4 = var2.clearInterval;
                    var0 = _closure2_slot5;
                    var3 = var0.current;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var0.current = var1;
                case 48:
                    var0 = undefined;
                    return var0;
            }
        };
        var _closure2_slot7 = var1;
        var2 = _closure1_slot2;
        var1 = new Array(3);
        var1[0] = var10;
        var1[1] = var9;
        var1[2] = var8;
        var0 = function() { // Environment: var0
            var4 = _closure2_slot6;
            var3 = _closure2_slot3;
            var2 = _closure2_slot4;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            var0 = _closure2_slot7;
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        var2 = _closure1_slot7;
        var1 = _closure1_slot5;
        var0 = {};
        var0.collapsable = var7;
        var0.ref = var4;
        var4 = new Array(2);
        var4[0] = var6;
        var6 = _closure1_slot6;
        var5 = {};
        var5 = var6.bind(var3)(var1, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1464, 2]);