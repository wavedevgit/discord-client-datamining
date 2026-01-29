// components_native/common/TouchableBackground.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot2 = var6;
    var3 = var3.Pressable;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 5;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.INTERACTIVE_BACKGROUND_ACTIVE;
    var8.backgroundColor = var9;
    var3.default = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/common/TouchableBackground.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: TouchableBackground, environment: var1
        _fun90282: for (var _fun90282_ip = 0;;) switch (_fun90282_ip) {
            case 0:
                var5 = arg0;
                var10 = var5.activeBackgroundColor;
                var14 = var5.pressableStyle;
                var9 = var5.style;
                var6 = var5.children;
                var1 = var5.onPressIn;
                var _closure2_slot0 = var1;
                var15 = var5.onPressOut;
                var _closure2_slot1 = var15;
                var4 = {
                    'activeBackgroundColor': 0,
                    'pressableStyle': 0,
                    'style': 0,
                    'children': 0,
                    'onPressIn': 0,
                    'onPressOut': 0
                };
                var12 = null;
                var19 = var4;
                var18 = null;
                var2 = silentSetPrototypeOf(var19, var18);
                var2 = 0;
                var19 = {};
                var18 = var5;
                var17 = var4;
                var5 = copyDataProperties(var19, var18, var17);
                var7 = _closure1_slot5;
                var3 = undefined;
                var11 = var7.bind(var3)();
                var7 = _closure1_slot1;
                var13 = var7.useState;
                var8 = false;
                var16 = var13.bind(var7)(var8);
                var13 = _closure1_slot0;
                var8 = 2;
                var13 = var13.bind(var3)(var16, var8);
                var8 = var13[var2];
                var2 = 1;
                var2 = var13[var2];
                var _closure2_slot2 = var2;
                var13 = var7.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function(arg0) { // Environment: var0
                    _fun90283: for (var _fun90283_ip = 0;;) switch (_fun90283_ip) {
                        case 0:
                            var3 = _closure2_slot2;
                            var0 = undefined;
                            var2 = true;
                            var2 = var3.bind(var0)(var2);
                            var3 = _closure2_slot0;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun90283_ip = 38;
                                continue _fun90283
                            }
                        case 26:
                            var2 = _closure2_slot0;
                            var1 = arg0;
                            var1 = var2.bind(var0)(var1);
                        case 38:
                            return var0;
                    }
                };
                var13 = var13.bind(var7)(var1, var2);
                var2 = var7.useCallback;
                var1 = new Array(1);
                var1[0] = var15;
                var0 = function(arg0) { // Environment: var0
                    _fun90284: for (var _fun90284_ip = 0;;) switch (_fun90284_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun90284_ip = 27;
                                continue _fun90284
                            }
                        case 13:
                            var3 = _closure2_slot1;
                            var2 = undefined;
                            var1 = arg0;
                            var1 = var3.bind(var2)(var1);
                        case 27:
                            var2 = _closure2_slot2;
                            var0 = undefined;
                            var1 = false;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var7 = var2.bind(var7)(var0, var1);
                var2 = _closure1_slot4;
                var1 = _closure1_slot3;
                var0 = {};
                var15 = 'button';
                var0.accessibilityRole = var15;
                var0.style = var14;
                var19 = var0;
                var18 = var5;
                var5 = copyDataProperties(var19, var18);
                var5 = 'onPressIn';
                var0[var5] = var13;
                var5 = 'onPressOut';
                var0[var5] = var7;
                var5 = _closure1_slot2;
                var4 = {};
                var7 = new Array(2);
                var7[0] = var9;
                if (!var8) {
                    _fun90282_ip = 285;
                    continue _fun90282
                }
            case 262:
                var9 = {};
                if (!(var12 == var10)) {
                    _fun90282_ip = 278;
                    continue _fun90282
                }
            case 268:
                var11 = var11.default;
                var10 = var11.backgroundColor;
            case 278:
                var9.backgroundColor = var10;
                var8 = var9;
            case 285:
                var7[1] = var8;
                var4.style = var7;
                var4.children = var6;
                var5 = var2.bind(var3)(var5, var4);
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 2]);