// modules/user_profile/hooks/native/useUserProfileColors.tsx
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
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/hooks/native/useUserProfileColors.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useUserProfileColors, environment: var1
        _fun56912: for (var _fun56912_ip = 0;;) switch (_fun56912_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.theme;
                var5 = var0.primaryColor;
                var14 = var0.secondaryColor;
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 1;
                var0 = var11[var0];
                var8 = undefined;
                var0 = var9.bind(var8)(var0);
                var7 = var0.bind(var8)();
                var6 = _closure1_slot0;
                var0 = 2;
                var0 = var11[var0];
                var1 = var6.bind(var8)(var0);
                var0 = var1.useProfileThemeValues;
                var1 = var0.bind(var1)(var3);
                var0 = 3;
                var0 = var11[var0];
                var10 = var6.bind(var8)(var0);
                var4 = var10.useStateFromStores;
                var0 = _closure1_slot3;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot3;
                    var0 = var0.syncProfileThemeWithUserTheme;
                    return var0;
                };
                var10 = var4.bind(var10)(var3, var0);
                var0 = {};
                var4 = 4;
                var3 = var11[var4];
                var15 = var6.bind(var8)(var3);
                var13 = var15.useToken;
                var3 = 5;
                var12 = var11[var3];
                var12 = var9.bind(var8)(var12);
                var12 = var12.colors;
                var12 = var12.BACKGROUND_BASE_LOWER;
                var12 = var13.bind(var15)(var12, var7);
                var0.gradientFallbackBackground = var12;
                var12 = var11[var4];
                var15 = var6.bind(var8)(var12);
                var13 = var15.useToken;
                var12 = var11[var3];
                var12 = var9.bind(var8)(var12);
                var12 = var12.colors;
                var12 = var12.BACKGROUND_BASE_LOWER;
                var12 = var13.bind(var15)(var12, var7);
                var0.gradientSecondaryBackground = var12;
                var12 = var11[var4];
                var15 = var6.bind(var8)(var12);
                var13 = var15.useToken;
                var12 = var11[var3];
                var12 = var9.bind(var8)(var12);
                var12 = var12.colors;
                var12 = var12.BACKGROUND_SURFACE_HIGH;
                var12 = var13.bind(var15)(var12, var7);
                var0.containerBackground = var12;
                var12 = var11[var4];
                var15 = var6.bind(var8)(var12);
                var13 = var15.useToken;
                var12 = var11[var3];
                var12 = var9.bind(var8)(var12);
                var12 = var12.colors;
                var12 = var12.BACKGROUND_BASE_LOWER;
                var12 = var13.bind(var15)(var12, var7);
                var0.avatarBackground = var12;
                var4 = var11[var4];
                var6 = var6.bind(var8)(var4);
                var4 = var6.useToken;
                var3 = var11[var3];
                var3 = var9.bind(var8)(var3);
                var3 = var3.colors;
                var3 = var3.BACKGROUND_SURFACE_HIGH;
                var3 = var4.bind(var6)(var3, var7);
                var0.statusBackground = var3;
                var3 = null;
                if (!(var3 != var5)) {
                    _fun56912_ip = 602;
                    continue _fun56912
                }
            case 366:
                if (!(var3 != var14)) {
                    _fun56912_ip = 602;
                    continue _fun56912
                }
            case 373:
                if (!(var3 != var1)) {
                    _fun56912_ip = 602;
                    continue _fun56912
                }
            case 380:
                var7 = var1.sectionBox;
                var13 = var1.overlay;
                var6 = var1.overlaySyncedWithUserTheme;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var9 = 6;
                var1 = var1[var9];
                var4 = var3.bind(var8)(var1);
                var3 = var4.calculateOverlayedColor;
                var1 = var13;
                if (!var10) {
                    _fun56912_ip = 433;
                    continue _fun56912
                }
            case 430:
                var1 = var6;
            case 433:
                var6 = var3.bind(var4)(var5, var1);
                var1 = {};
                var17 = var1;
                var16 = var0;
                var3 = copyDataProperties(var17, var16);
                var3 = 'containerBackground';
                var1[var3] = var7;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var3 = 7;
                var4 = var2[var3];
                var11 = var5.bind(var8)(var4);
                var10 = var11.int2hex;
                var4 = var2[var9];
                var12 = var5.bind(var8)(var4);
                var4 = var12.calculateOverlayedColor;
                var4 = var4.bind(var12)(var14, var13);
                var10 = var10.bind(var11)(var4);
                var4 = 'gradientSecondaryBackground';
                var1[var4] = var10;
                var4 = var2[var3];
                var10 = var5.bind(var8)(var4);
                var4 = var10.int2hex;
                var10 = var4.bind(var10)(var6);
                var4 = 'avatarBackground';
                var1[var4] = var10;
                var3 = var2[var3];
                var4 = var5.bind(var8)(var3);
                var3 = var4.int2hex;
                var2 = var2[var9];
                var5 = var5.bind(var8)(var2);
                var2 = var5.calculateOverlayedColor;
                var2 = var2.bind(var5)(var6, var7);
                var3 = var3.bind(var4)(var2);
                var2 = 'statusBackground';
                var1[var2] = var3;
                return var1;
            case 602:
                return var0;
        }
    };
    var2.useUserProfileColors = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1298, 3205, 5342, 566, 3110, 671, 6920, 668, 2]);