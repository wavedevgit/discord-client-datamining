// uikit-native/refresh/Pressables.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun44435: for (var _fun44435_ip = 0;;) switch (_fun44435_ip) {
        case 0:
            var5 = require;
            var12 = metroImportDefault;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var12;
            var _closure1_slot2 = var6;
            var0 = function arg0() {
                var6 = arg0;
                var4 = var6.children;
                var10 = var6.androidRippleConfig;
                var _closure2_slot0 = var10;
                var9 = var6.style;
                var _closure2_slot1 = var9;
                var3 = var6.iosPressedStyle;
                var _closure2_slot2 = var3;
                var5 = var6.innerRef;
                var1 = {
                    'children': 0,
                    'androidRippleConfig': 0,
                    'style': 0,
                    'iosPressedStyle': 0,
                    'innerRef': 0
                };
                var12 = null;
                var13 = var1;
                var0 = silentSetPrototypeOf(var13, var12);
                var13 = {};
                var12 = var6;
                var11 = var1;
                var0 = copyDataProperties(var13, var12, var11);
                var8 = _closure1_slot3;
                var7 = var8.useCallback;
                var6 = new Array(2);
                var6[0] = var3;
                var6[1] = var9;
                var3 = function(arg0) { // Environment: var2
                    _fun44437: for (var _fun44437_ip = 0;;) switch (_fun44437_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var0 = var1.isAndroid;
                            var0 = var0.bind(var1)();
                            var1 = _closure2_slot1;
                            if (var0) {
                                _fun44437_ip = 85;
                                continue _fun44437
                            }
                        case 45:
                            var0 = new Array(3);
                            var0[0] = var1;
                            var3 = arg0;
                            var5 = var3.pressed;
                            var3 = null;
                            if (!var5) {
                                _fun44437_ip = 71;
                                continue _fun44437
                            }
                        case 67:
                            var3 = _closure2_slot2;
                        case 71:
                            var0[1] = var3;
                            var2 = _closure1_slot5;
                            var0[2] = var2;
                            _fun44437_ip = 88;
                            continue _fun44437;
                        case 85:
                            var0 = var1;
                        case 88:
                            return var0;
                    }
                };
                var6 = var7.bind(var8)(var3, var6);
                var8 = _closure1_slot3;
                var7 = var8.useMemo;
                var3 = new Array(2);
                var3[0] = var10;
                var3[1] = var9;
                var2 = function() { // Environment: var2
                    _fun44438: for (var _fun44438_ip = 0;;) switch (_fun44438_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var2 = null;
                            if (!(var2 == var1)) {
                                _fun44438_ip = 17;
                                continue _fun44438
                            }
                        case 13:
                            var1 = {};
                            _fun44438_ip = 21;
                            continue _fun44438;
                        case 17:
                            var1 = _closure2_slot0;
                        case 21:
                            var4 = var1.cornerRadius;
                            var3 = var4;
                            if (!(var2 == var3)) {
                                _fun44438_ip = 89;
                                continue _fun44438
                            }
                        case 34:
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var1 = 8;
                            var5 = var5[var1];
                            var1 = undefined;
                            var7 = var6.bind(var1)(var5);
                            var6 = var7.getStyleProp;
                            var5 = _closure2_slot1;
                            var1 = 'borderRadius';
                            var1 = var6.bind(var7)(var5, var1);
                            var3 = var4;
                            if (!(var2 != var1)) {
                                _fun44438_ip = 89;
                                continue _fun44438
                            }
                        case 86:
                            var3 = var1;
                        case 89:
                            var2 = _closure1_slot6;
                            var1 = {};
                            var8 = _closure2_slot0;
                            var9 = var1;
                            var0 = copyDataProperties(var9, var8);
                            var0 = 'cornerRadius';
                            var1[var0] = var3;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var7 = var7.bind(var8)(var2, var3);
                var3 = _closure1_slot7;
                var2 = _closure1_slot4;
                var1 = {};
                var1.android_ripple = var7;
                var1.style = var6;
                var1.ref = var5;
                var13 = var1;
                var12 = var0;
                var0 = copyDataProperties(var13, var12);
                var0 = 'children';
                var1[var0] = var4;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var _closure1_slot9 = var0;
            var0 = global;
            var7 = var0.Object;
            var4 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var7)(var2, var0, var3);
            var0 = 0;
            var4 = var6[var0];
            var3 = arg3;
            var0 = undefined;
            var7 = var3.bind(var0)(var4);
            var _closure1_slot3 = var7;
            var3 = 1;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var3 = var3.Pressable;
            var _closure1_slot4 = var3;
            var3 = 2;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var3 = var3.IOS_POINTER_STYLE;
            var _closure1_slot5 = var3;
            var3 = 3;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var3 = var3.getThemedRippleConfig;
            var _closure1_slot6 = var3;
            var3 = 4;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var3 = var3.jsx;
            var _closure1_slot7 = var3;
            var3 = 5;
            var3 = var6[var3];
            var8 = var5.bind(var0)(var3);
            var4 = var8.createStyles;
            var3 = {};
            var9 = {};
            var10 = 6;
            var10 = var6[var10];
            var11 = var5.bind(var0)(var10);
            var10 = var11.isAndroid;
            var11 = var10.bind(var11)();
            var10 = undefined;
            if (var11) {
                _fun44435_ip = 245;
                continue _fun44435
            }
        case 222:
            var11 = 7;
            var11 = var6[var11];
            var11 = var12.bind(var0)(var11);
            var11 = var11.colors;
            var10 = var11.BACKGROUND_MOD_MUTED;
        case 245:
            var9.backgroundColor = var10;
            var3.pressedHighlight = var9;
            var3 = var4.bind(var8)(var3);
            var _closure1_slot8 = var3;
            var4 = var7.forwardRef;
            var3 = function(arg0, arg1) { // Environment: var1
                _fun44439: for (var _fun44439_ip = 0;;) switch (_fun44439_ip) {
                    case 0:
                        var2 = arg0;
                        var6 = var2.activeOpacity;
                        var3 = undefined;
                        if (!(var6 === var3)) {
                            _fun44439_ip = 25;
                            continue _fun44439
                        }
                    case 15:
                        var6 = 0.2;
                    case 25:
                        var0 = null;
                        var1 = Object.create(var0);
                        var0 = 0;
                        var1.activeOpacity = var0;
                        var9 = {};
                        var8 = var2;
                        var7 = var1;
                        var8 = copyDataProperties(var9, var8, var7);
                        var2 = _closure1_slot7;
                        var1 = _closure1_slot9;
                        var0 = {};
                        var5 = arg1;
                        var0.innerRef = var5;
                        var5 = {};
                        var5.opacity = var6;
                        var0.iosPressedStyle = var5;
                        var9 = var0;
                        var4 = copyDataProperties(var9, var8);
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var3 = var4.bind(var7)(var3);
            var4 = var7.forwardRef;
            var1 = function(arg0, arg1) { // Environment: var1
                _fun44440: for (var _fun44440_ip = 0;;) switch (_fun44440_ip) {
                    case 0:
                        var2 = arg0;
                        var7 = var2.underlayColor;
                        var6 = var2.activeOpacity;
                        var9 = null;
                        var1 = Object.create(var9);
                        var0 = 0;
                        var1.underlayColor = var0;
                        var1.activeOpacity = var0;
                        var12 = {};
                        var11 = var2;
                        var10 = var1;
                        var4 = copyDataProperties(var12, var11, var10);
                        var1 = _closure1_slot8;
                        var3 = undefined;
                        var8 = var1.bind(var3)();
                        var2 = _closure1_slot7;
                        var1 = _closure1_slot9;
                        var0 = {};
                        var5 = arg1;
                        var0.innerRef = var5;
                        var5 = {};
                        if (!(var9 == var7)) {
                            _fun44440_ip = 92;
                            continue _fun44440
                        }
                    case 81:
                        var8 = var8.pressedHighlight;
                        var7 = var8.backgroundColor;
                    case 92:
                        var5.backgroundColor = var7;
                        var5.opacity = var6;
                        var0.iosPressedStyle = var5;
                        var12 = var0;
                        var11 = var4;
                        var4 = copyDataProperties(var12, var11);
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var1 = var4.bind(var7)(var1);
            var4 = 9;
            var4 = var6[var4];
            var6 = var5.bind(var0)(var4);
            var5 = var6.fileFinishedImporting;
            var4 = 'uikit-native/refresh/Pressables.tsx';
            var4 = var5.bind(var6)(var4);
            var2.PressableOpacity = var3;
            var2.PressableHighlight = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4055, 4839, 33, 1297, 478, 671, 4868, 2]);