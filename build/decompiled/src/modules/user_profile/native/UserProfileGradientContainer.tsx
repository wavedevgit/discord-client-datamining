// modules/user_profile/native/UserProfileGradientContainer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun57223: for (var _fun57223_ip = 0;;) switch (_fun57223_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.primaryColor;
                var _closure2_slot0 = var11;
                var5 = var1.secondaryColor;
                var _closure2_slot1 = var5;
                var10 = var1.fallbackBackground;
                var _closure2_slot2 = var10;
                var8 = var1.containerStyle;
                var6 = var1.children;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var9 = _closure1_slot4;
                var1 = var9.useState;
                var7 = var1.bind(var9)();
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var3)(var7, var1);
                var1 = 0;
                var14 = var2[var1];
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot3 = var1;
                var7 = var9.useCallback;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var2 = _closure2_slot3;
                    var1 = var0.layout;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = new Array(0);
                var9 = var7.bind(var9)(var2, var1);
                var7 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 4;
                var1 = var13[var1];
                var15 = var7.bind(var3)(var1);
                var12 = var15.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = _closure1_slot5;
                    var0 = var0.syncProfileThemeWithUserTheme;
                    return var0;
                };
                var1 = var12.bind(var15)(var2, var1);
                var2 = 5;
                var2 = var13[var2];
                var12 = var7.bind(var3)(var2);
                var2 = var12.useThemeContext;
                var2 = var2.bind(var12)();
                var12 = var2.theme;
                var2 = 6;
                var2 = var13[var2];
                var7 = var7.bind(var3)(var2);
                var2 = var7.useProfileThemeValues;
                var7 = var2.bind(var7)(var12);
                var2 = null;
                var12 = var2 == var7;
                if (var1) {
                    _fun57223_ip = 247;
                    continue _fun57223
                }
            case 234:
                var1 = undefined;
                if (var12) {
                    _fun57223_ip = 245;
                    continue _fun57223
                }
            case 239:
                var1 = var7.overlay;
            case 245:
                _fun57223_ip = 261;
                continue _fun57223;
            case 247:
                var2 = undefined;
                if (var12) {
                    _fun57223_ip = 258;
                    continue _fun57223
                }
            case 252:
                var2 = var7.overlaySyncedWithUserTheme;
            case 258:
                var1 = var2;
            case 261:
                _closure2_slot4 = var1;
                var7 = _closure1_slot4;
                var13 = var7.useMemo;
                var12 = new Array(2);
                var12[0] = var11;
                var12[1] = var1;
                var2 = function() { // Environment: var0
                    _fun57226: for (var _fun57226_ip = 0;;) switch (_fun57226_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var3 = null;
                            var2 = var3 != var0;
                            var0 = null;
                            if (!var2) {
                                _fun57226_ip = 76;
                                continue _fun57226
                            }
                        case 18:
                            var2 = _closure2_slot4;
                            var2 = var3 != var2;
                            var0 = null;
                            if (!var2) {
                                _fun57226_ip = 76;
                                continue _fun57226
                            }
                        case 31:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 7;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.calculateOverlayedColor;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot4;
                            var0 = var3.bind(var4)(var2, var1);
                        case 76:
                            return var0;
                    }
                };
                var13 = var13.bind(var7)(var2, var12);
                _closure2_slot5 = var13;
                var12 = var7.useMemo;
                var2 = new Array(2);
                var2[0] = var5;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    _fun57227: for (var _fun57227_ip = 0;;) switch (_fun57227_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var3 = null;
                            var2 = var3 != var0;
                            var0 = null;
                            if (!var2) {
                                _fun57227_ip = 76;
                                continue _fun57227
                            }
                        case 18:
                            var2 = _closure2_slot4;
                            var2 = var3 != var2;
                            var0 = null;
                            if (!var2) {
                                _fun57227_ip = 76;
                                continue _fun57227
                            }
                        case 31:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 7;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.calculateOverlayedColor;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot4;
                            var0 = var3.bind(var4)(var2, var1);
                        case 76:
                            return var0;
                    }
                };
                var12 = var12.bind(var7)(var1, var2);
                _closure2_slot6 = var12;
                var2 = var7.useMemo;
                var1 = new Array(3);
                var1[0] = var10;
                var1[1] = var13;
                var1[2] = var12;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.getUserProfileGradientContainerColors;
                    var2 = _closure2_slot5;
                    var1 = _closure2_slot6;
                    var0 = _closure2_slot2;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var7 = var2.bind(var7)(var0, var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 8;
                var0 = var10[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.UserProfileGradientContextProvider;
                var0 = {};
                var0.parentLayout = var14;
                var0.primaryColor = var13;
                var0.secondaryColor = var12;
                var0.borderPrimaryColor = var11;
                var0.borderSecondaryColor = var5;
                var5 = _closure1_slot1;
                var4 = 9;
                var4 = var10[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.onLayout = var9;
                var4.style = var8;
                var4.colors = var7;
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileGradientContainer.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1298, 33, 566, 3159, 5389, 6985, 6994, 4098, 2]);