// modules/freeze/native/NativeFreezeScreens.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.StyleSheet;
    var _closure1_slot5 = var7;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var6 = var7.create;
    var3 = {};
    var8 = {
        'flex': 1,
        'overflow': 'hidden'
    };
    var3.screens = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/freeze/native/NativeFreezeScreens.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun101285: for (var _fun101285_ip = 0;;) switch (_fun101285_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.children;
                var9 = var0.activeIndex;
                var _closure2_slot0 = var9;
                var6 = var0.detachInactiveScreens;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun101285_ip = 34;
                    continue _fun101285
                }
            case 32:
                var6 = true;
            case 34:
                var _closure2_slot1 = var6;
                var1 = var0.lazy;
                if (!(var1 === var3)) {
                    _fun101285_ip = 50;
                    continue _fun101285
                }
            case 48:
                var1 = true;
            case 50:
                var _closure2_slot2 = var1;
                var1 = var0.unmountOnBlur;
                if (!(var1 === var3)) {
                    _fun101285_ip = 66;
                    continue _fun101285
                }
            case 64:
                var1 = false;
            case 66:
                var _closure2_slot3 = var1;
                var1 = var0.freezeOnBlur;
                if (!(var1 === var3)) {
                    _fun101285_ip = 82;
                    continue _fun101285
                }
            case 80:
                var1 = true;
            case 82:
                var _closure2_slot4 = var1;
                var0 = var0.preloadIndices;
                if (!(var0 === var3)) {
                    _fun101285_ip = 102;
                    continue _fun101285
                }
            case 98:
                var0 = new Array(0);
            case 102:
                var _closure2_slot5 = var0;
                var _closure2_slot6 = var3;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 4;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var10 = 0;
                var1 = var9 >= var10;
                if (!var1) {
                    _fun101285_ip = 175;
                    continue _fun101285
                }
            case 142:
                var0 = global;
                var8 = var0.Array;
                var0 = var8.isArray;
                var8 = var0.bind(var8)(var7);
                var0 = 1;
                if (!var8) {
                    _fun101285_ip = 171;
                    continue _fun101285
                }
            case 166:
                var0 = var7.length;
            case 171:
                var1 = var9 < var0;
            case 175:
                var0 = 'NativeFreezeScreens: invalid activeIndex';
                var0 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var0 = new Array(1);
                var0[0] = var9;
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot3;
                var0 = 2;
                var0 = var1.bind(var3)(var2, var0);
                var2 = var0[var10];
                _closure2_slot6 = var2;
                var8 = 1;
                var1 = var0[var8];
                var0 = var2.includes;
                var0 = var0.bind(var2)(var9);
                if (var0) {
                    _fun101285_ip = 280;
                    continue _fun101285
                }
            case 250:
                var0 = new Array(1);
                var13 = var0;
                var12 = var2;
                var11 = 0;
                var2 = arraySpread(var13, var12, var11);
                var0[var2] = var9;
                var2 = var2 + var8;
                var0 = var1.bind(var3)(var0);
            case 280:
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 5;
                var0 = var8[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.ScreenContainer;
                var0 = {};
                var0.enabled = var6;
                var6 = true;
                var0.hasTwoStates = var6;
                var5 = _closure1_slot7;
                var5 = var5.screens;
                var0.style = var5;
                var5 = 'native-freeze-screens-container';
                var0.nativeID = var5;
                var5 = global;
                var6 = var5.Array;
                var5 = var6.isArray;
                var5 = var5.bind(var6)(var7);
                var6 = var7;
                if (var5) {
                    _fun101285_ip = 383;
                    continue _fun101285
                }
            case 372:
                var5 = new Array(1);
                var5[0] = var7;
                var6 = var5;
            case 383:
                var5 = var6.map;
                var4 = function(arg0, arg1) { // Environment: var4
                    _fun101286: for (var _fun101286_ip = 0;;) switch (_fun101286_ip) {
                        case 0:
                            var4 = arg1;
                            var0 = _closure2_slot0;
                            var11 = var0 === var4;
                            var0 = _closure2_slot3;
                            if (!var0) {
                                _fun101286_ip = 28;
                                continue _fun101286
                            }
                        case 21:
                            if (var11) {
                                _fun101286_ip = 28;
                                continue _fun101286
                            }
                        case 24:
                            var0 = null;
                            return var0;
                        case 28:
                            var0 = _closure2_slot2;
                            if (!var0) {
                                _fun101286_ip = 76;
                                continue _fun101286
                            }
                        case 35:
                            var1 = _closure2_slot6;
                            var0 = var1.includes;
                            var0 = var0.bind(var1)(var4);
                            if (var0) {
                                _fun101286_ip = 76;
                                continue _fun101286
                            }
                        case 52:
                            if (var11) {
                                _fun101286_ip = 76;
                                continue _fun101286
                            }
                        case 55:
                            var1 = _closure2_slot5;
                            var0 = var1.includes;
                            var0 = var0.bind(var1)(var4);
                            if (var0) {
                                _fun101286_ip = 76;
                                continue _fun101286
                            }
                        case 72:
                            var0 = null;
                            return var0;
                        case 76:
                            var6 = 0;
                            if (!var11) {
                                _fun101286_ip = 84;
                                continue _fun101286
                            }
                        case 81:
                            var6 = 2;
                        case 84:
                            var3 = _closure1_slot6;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 5;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.Screen;
                            var0 = {};
                            var7 = _closure1_slot5;
                            var8 = var7.absoluteFill;
                            var7 = new Array(2);
                            var7[0] = var8;
                            var8 = {};
                            var9 = -1;
                            if (!var11) {
                                _fun101286_ip = 152;
                                continue _fun101286
                            }
                        case 150:
                            var9 = 0;
                        case 152:
                            var8.zIndex = var9;
                            var7[1] = var8;
                            var0.style = var7;
                            var0.activityState = var6;
                            var6 = _closure2_slot1;
                            var0.enabled = var6;
                            var5 = _closure2_slot4;
                            var0.freezeOnBlur = var5;
                            var5 = arg0;
                            var0.children = var5;
                            var0 = var3.bind(var2)(var1, var0, var4);
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.NativeFreezeScreens = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 44, 4031, 2]);