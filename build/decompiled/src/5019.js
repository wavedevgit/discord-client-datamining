// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var4 = 0;
    var3 = var6[var4];
    var0 = undefined;
    var7 = var5.bind(var0)(var3);
    var3 = var7.memo;
    var8 = var7.useMemo;
    var _closure1_slot2 = var8;
    var7 = var7.useRef;
    var _closure1_slot3 = var7;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var0)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.StatusBar;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var1 = function(arg0) { // Original name: BottomSheetHostingContainerComponent, environment: var1
        _fun45286: for (var _fun45286_ip = 0;;) switch (_fun45286_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.containerHeight;
                var _closure2_slot0 = var2;
                var2 = var0.containerOffset;
                var _closure2_slot1 = var2;
                var4 = var0.topInset;
                var3 = undefined;
                var9 = 0;
                if (!(var3 !== var4)) {
                    _fun45286_ip = 42;
                    continue _fun45286
                }
            case 39:
                var9 = var4;
            case 42:
                var _closure2_slot2 = var9;
                var4 = var0.bottomInset;
                var2 = 0;
                if (!(var3 !== var4)) {
                    _fun45286_ip = 61;
                    continue _fun45286
                }
            case 58:
                var2 = var4;
            case 61:
                var _closure2_slot3 = var2;
                var4 = var0.shouldCalculateHeight;
                var8 = var3 === var4;
                if (var8) {
                    _fun45286_ip = 81;
                    continue _fun45286
                }
            case 78:
                var8 = var4;
            case 81:
                var10 = var0.detached;
                var _closure2_slot4 = var10;
                var11 = var0.style;
                var _closure2_slot5 = var11;
                var4 = var0.children;
                var6 = _closure1_slot3;
                var5 = null;
                var6 = var6.bind(var3)(var5);
                var _closure2_slot6 = var6;
                var7 = _closure1_slot2;
                var5 = new Array(4);
                var5[0] = var11;
                var5[1] = var10;
                var5[2] = var9;
                var5[3] = var2;
                var2 = function() { // Environment: var1
                    _fun45287: for (var _fun45287_ip = 0;;) switch (_fun45287_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var0 = new Array(3);
                            var0[0] = var1;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 3;
                            var3 = var3[var1];
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3);
                            var1 = var1.styles;
                            var1 = var1.container;
                            var0[1] = var1;
                            var1 = {};
                            var3 = _closure2_slot2;
                            var1.top = var3;
                            var3 = _closure2_slot3;
                            var1.bottom = var3;
                            var3 = _closure2_slot4;
                            var2 = 'hidden';
                            if (!var3) {
                                _fun45287_ip = 88;
                                continue _fun45287
                            }
                        case 84:
                            var2 = 'visible';
                        case 88:
                            var1.overflow = var2;
                            var0[2] = var1;
                            return var0;
                    }
                };
                var5 = var7.bind(var3)(var2, var5);
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var2 = 4;
                var2 = var9[var2];
                var7 = var7.bind(var3)(var2);
                var2 = var7.useStableCallback;
                var1 = function(arg0) { // Original name: handleLayoutEvent, environment: var1
                    _fun45288: for (var _fun45288_ip = 0;;) switch (_fun45288_ip) {
                        case 0:
                            var1 = arg0;
                            var1 = var1.nativeEvent;
                            var1 = var1.layout;
                            var3 = var1.height;
                            var _closure3_slot0 = var3;
                            var2 = _closure2_slot0;
                            var2.value = var3;
                            var1 = _closure2_slot6;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun45288_ip = 70;
                                continue _fun45288
                            }
                        case 54:
                            var1 = var2.measure;
                            var0 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Environment: var0
                                _fun45289: for (var _fun45289_ip = 0;;) switch (_fun45289_ip) {
                                    case 0:
                                        var7 = arg5;
                                        var1 = _closure2_slot1;
                                        var1 = var1.value;
                                        if (!var1) {
                                            _fun45289_ip = 174;
                                            continue _fun45289
                                        }
                                    case 21:
                                        var1 = _closure2_slot1;
                                        var0 = {
                                            'top': null,
                                            'left': 0,
                                            'right': 0
                                        };
                                        var2 = null;
                                        var4 = var2 != var7;
                                        var5 = 0;
                                        var3 = 0;
                                        if (!var4) {
                                            _fun45289_ip = 55;
                                            continue _fun45289
                                        }
                                    case 52:
                                        var3 = var7;
                                    case 55:
                                        var0.top = var3;
                                        var3 = global;
                                        var4 = var3.Math;
                                        var3 = var4.max;
                                        var10 = _closure1_slot0;
                                        var9 = _closure1_slot1;
                                        var6 = 5;
                                        var9 = var9[var6];
                                        var6 = undefined;
                                        var6 = var10.bind(var6)(var9);
                                        var6 = var6.WINDOW_HEIGHT;
                                        var10 = var2 != var7;
                                        var9 = 0;
                                        if (!var10) {
                                            _fun45289_ip = 117;
                                            continue _fun45289
                                        }
                                    case 114:
                                        var9 = var7;
                                    case 117:
                                        var7 = _closure3_slot0;
                                        var7 = var9 + var7;
                                        var8 = _closure1_slot4;
                                        var8 = var8.currentHeight;
                                        var9 = var2 != var8;
                                        var2 = 0;
                                        if (!var9) {
                                            _fun45289_ip = 150;
                                            continue _fun45289
                                        }
                                    case 147:
                                        var2 = var8;
                                    case 150:
                                        var2 = var7 + var2;
                                        var2 = var6 - var2;
                                        var2 = var3.bind(var4)(var5, var2);
                                        var0.bottom = var2;
                                        var1.value = var0;
                                    case 174:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                        case 70:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = var2.bind(var7)(var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot5;
                var0 = {};
                var0.ref = var6;
                var6 = 'box-none';
                var0.pointerEvents = var6;
                var6 = undefined;
                if (!var8) {
                    _fun45286_ip = 227;
                    continue _fun45286
                }
            case 224:
                var6 = var7;
            case 227:
                var0.onLayout = var6;
                var0.style = var5;
                var5 = true;
                var0.collapsable = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var0)(var1);
    var3 = 'BottomSheetHostingContainer';
    var1.displayName = var3;
    var2.BottomSheetHostingContainer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 5020, 4900, 4896]);