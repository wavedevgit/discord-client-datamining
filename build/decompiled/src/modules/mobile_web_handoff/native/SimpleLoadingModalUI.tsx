// modules/mobile_web_handoff/native/SimpleLoadingModalUI.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var9 = 0;
    var6 = var5[var9];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var8 = 1;
    var3 = var5[var8];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityIndicator;
    var _closure1_slot3 = var6;
    var6 = var3.Modal;
    var _closure1_slot4 = var6;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var7 = 2;
    var3 = var5[var7];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var10 = var4.bind(var0)(var3);
    var6 = var10.createStyles;
    var3 = {};
    var11 = {
        'flex': 1,
        'alignItems': 'center',
        'flexDirection': 'column',
        'justifyContent': 'center'
    };
    var3.modalBackground = var11;
    var3 = var6.bind(var10)(var3);
    var _closure1_slot7 = var3;
    var3 = {};
    var3.OPENING = var9;
    var6 = 'OPENING';
    var3[var9] = var6;
    var3.SHOWN = var8;
    var6 = 'SHOWN';
    var3[var8] = var6;
    var3.DISMISSED = var7;
    var6 = 'DISMISSED';
    var3[var7] = var6;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/mobile_web_handoff/native/SimpleLoadingModalUI.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: SimpleLoadingModal, environment: var1
        _fun50488: for (var _fun50488_ip = 0;;) switch (_fun50488_ip) {
            case 0:
                var2 = arg0;
                var9 = var2.operation;
                var _closure2_slot0 = var9;
                var1 = var2.onResolved;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun50488_ip = 32;
                    continue _fun50488
                }
            case 27:
                var1 = function() { // Original name: f, environment: var4
                    var0 = undefined;
                    return var0;
                };
            case 32:
                var _closure2_slot1 = var1;
                var0 = var2.onRejected;
                if (!(var0 === var3)) {
                    _fun50488_ip = 51;
                    continue _fun50488
                }
            case 46:
                var0 = function() { // Original name: I, environment: var4
                    var0 = undefined;
                    return var0;
                };
            case 51:
                var _closure2_slot2 = var0;
                var5 = var2.cancelable;
                if (!(var5 === var3)) {
                    _fun50488_ip = 67;
                    continue _fun50488
                }
            case 65:
                var5 = false;
            case 67:
                var _closure2_slot3 = var5;
                var2 = var2.onDismissed;
                if (!(var2 === var3)) {
                    _fun50488_ip = 86;
                    continue _fun50488
                }
            case 81:
                var2 = function() { // Original name: N, environment: var4
                    var0 = undefined;
                    return var0;
                };
            case 86:
                var _closure2_slot4 = var2;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var5 = _closure1_slot7;
                var6 = var5.bind(var3)();
                var5 = _closure1_slot2;
                var10 = var5.useRef;
                var7 = _closure1_slot8;
                var7 = var7.OPENING;
                var7 = var10.bind(var5)(var7);
                _closure2_slot5 = var7;
                var10 = var5.useCallback;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() { // Environment: var4
                    _fun50492: for (var _fun50492_ip = 0;;) switch (_fun50492_ip) {
                        case 0:
                            var0 = _closure2_slot5;
                            var3 = var0.current;
                            var2 = _closure1_slot8;
                            var2 = var2.SHOWN;
                            if (!(var3 === var2)) {
                                _fun50492_ip = 39;
                                continue _fun50492
                            }
                        case 29:
                            var3 = _closure2_slot4;
                            var2 = undefined;
                            var2 = var3.bind(var2)();
                        case 39:
                            var1 = _closure2_slot5;
                            var0 = _closure1_slot8;
                            var0 = var0.DISMISSED;
                            var1.current = var0;
                            var0 = undefined;
                            return var0;
                    }
                };
                var10 = var10.bind(var5)(var2, var7);
                _closure2_slot6 = var10;
                var7 = var5.useCallback;
                var2 = new Array(2);
                var2[0] = var10;
                var2[1] = var1;
                var1 = function(arg0) { // Environment: var4
                    var3 = _closure2_slot1;
                    var0 = undefined;
                    var2 = arg0;
                    var2 = var3.bind(var0)(var2);
                    var1 = _closure2_slot6;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var7 = var7.bind(var5)(var1, var2);
                _closure2_slot7 = var7;
                var2 = var5.useCallback;
                var1 = new Array(2);
                var1[0] = var10;
                var1[1] = var0;
                var0 = function(arg0) { // Environment: var4
                    var3 = _closure2_slot2;
                    var0 = undefined;
                    var2 = arg0;
                    var2 = var3.bind(var0)(var2);
                    var1 = _closure2_slot6;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var0 = var2.bind(var5)(var0, var1);
                _closure2_slot8 = var0;
                var2 = var5.useEffect;
                var1 = new Array(3);
                var1[0] = var9;
                var1[1] = var7;
                var1[2] = var0;
                var0 = function() { // Environment: var4
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var4 = var2.bind(var0)();
                    var3 = var4.then;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure2_slot7;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.catch;
                    var1 = function(arg0) { // Environment: var1
                        var2 = _closure2_slot8;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {
                    'transparent': true,
                    'animationType': 'none'
                };
                var5 = function() { // Original name: onShow, environment: var4
                    _fun50498: for (var _fun50498_ip = 0;;) switch (_fun50498_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var3 = var1.current;
                            var2 = _closure1_slot8;
                            var2 = var2.DISMISSED;
                            if (!(var3 !== var2)) {
                                _fun50498_ip = 51;
                                continue _fun50498
                            }
                        case 29:
                            var2 = _closure2_slot5;
                            var1 = _closure1_slot8;
                            var1 = var1.SHOWN;
                            var2.current = var1;
                            _fun50498_ip = 61;
                            continue _fun50498;
                        case 51:
                            var1 = _closure2_slot4;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 61:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.onShow = var5;
                var4 = function() { // Original name: onRequestClose, environment: var4
                    _fun50499: for (var _fun50499_ip = 0;;) switch (_fun50499_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            if (!var1) {
                                _fun50499_ip = 20;
                                continue _fun50499
                            }
                        case 10:
                            var1 = _closure2_slot6;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 20:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.onRequestClose = var4;
                var5 = _closure1_slot5;
                var4 = {};
                var6 = var6.modalBackground;
                var4.style = var6;
                var7 = _closure1_slot3;
                var6 = {
                    'animating': true,
                    'color': null,
                    'size': 'large'
                };
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var8 = 4;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.unsafe_rawColors;
                var8 = var8.BRAND_500;
                var6.color = var8;
                var6 = var2.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 2]);