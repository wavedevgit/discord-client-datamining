// modules/user_profile/hooks/useProfileTheme.tsx
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
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useEffectiveThemeOverride;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ThemeTypes;
    var _closure1_slot6 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/hooks/useProfileTheme.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun57803: for (var _fun57803_ip = 0;;) switch (_fun57803_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.user;
                var14 = var0.displayProfile;
                var12 = var0.pendingThemeColors;
                var15 = var0.pendingAvatarSrc;
                var3 = var0.isPreview;
                var4 = var0.forceUserTheme;
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 4;
                var0 = var6[var0];
                var10 = undefined;
                var0 = var2.bind(var10)(var0);
                var9 = var0.bind(var10)();
                var0 = _closure1_slot5;
                var0 = var0.bind(var10)();
                var5 = _closure1_slot0;
                var2 = 5;
                var2 = var6[var2];
                var7 = var5.bind(var10)(var2);
                var6 = var7.useStateFromStores;
                var2 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var2
                    var0 = _closure1_slot4;
                    var0 = var0.syncProfileThemeWithUserTheme;
                    return var0;
                };
                var5 = var6.bind(var7)(var5, var2);
                var7 = null;
                if (!(var7 == var15)) {
                    _fun57803_ip = 170;
                    continue _fun57803
                }
            case 129:
                var6 = var7 == var13;
                var2 = undefined;
                if (var6) {
                    _fun57803_ip = 167;
                    continue _fun57803
                }
            case 138:
                var11 = var13.getAvatarURL;
                var6 = var7 == var14;
                var8 = undefined;
                if (var6) {
                    _fun57803_ip = 158;
                    continue _fun57803
                }
            case 153:
                var8 = var14.guildId;
            case 158:
                var6 = 80;
                var2 = var11.bind(var13)(var8, var6);
            case 167:
                var15 = var2;
            case 170:
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 6;
                var2 = var11[var2];
                var17 = var6.bind(var10)(var2);
                var16 = var17.unsafe_getResolvedRawColor;
                var13 = {};
                var8 = 1;
                var13.saturation = var8;
                var2 = 'PRIMARY_530';
                var13 = var16.bind(var17)(var2, var13);
                var2 = 7;
                var2 = var11[var2];
                var11 = var6.bind(var10)(var2);
                var6 = var11.useAvatarColors;
                var2 = false;
                var11 = var6.bind(var11)(var15, var13, var2);
                var6 = _closure1_slot3;
                var2 = 2;
                var6 = var6.bind(var10)(var11, var2);
                var2 = 0;
                var13 = var6[var2];
                var11 = var6[var8];
                if (!(var7 == var0)) {
                    _fun57803_ip = 621;
                    continue _fun57803
                }
            case 273:
                if (!(var7 != var14)) {
                    _fun57803_ip = 288;
                    continue _fun57803
                }
            case 277:
                var6 = var14.canEditThemes;
                if (var6) {
                    _fun57803_ip = 313;
                    continue _fun57803
                }
            case 288:
                if (var3) {
                    _fun57803_ip = 313;
                    continue _fun57803
                }
            case 291:
                var3 = {
                    'theme': null,
                    'primaryColor': null,
                    'secondaryColor': null
                };
                var3.theme = var9;
                return var3;
            case 313:
                var3 = var7 == var14;
                var6 = undefined;
                if (var3) {
                    _fun57803_ip = 335;
                    continue _fun57803
                }
            case 322:
                var3 = var14.getPreviewThemeColors;
                var6 = var3.bind(var14)(var12);
            case 335:
                var12 = var7 == var6;
                var3 = undefined;
                if (var12) {
                    _fun57803_ip = 348;
                    continue _fun57803
                }
            case 344:
                var3 = var6[var2];
            case 348:
                if (!(var7 == var3)) {
                    _fun57803_ip = 383;
                    continue _fun57803
                }
            case 352:
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var2 = 8;
                var2 = var14[var2];
                var12 = var12.bind(var10)(var2);
                var2 = var12.hex2int;
                var3 = var2.bind(var12)(var13);
            case 383:
                var12 = var7 == var6;
                var2 = undefined;
                if (var12) {
                    _fun57803_ip = 396;
                    continue _fun57803
                }
            case 392:
                var2 = var6[var8];
            case 396:
                if (!(var7 == var2)) {
                    _fun57803_ip = 431;
                    continue _fun57803
                }
            case 400:
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var6 = 8;
                var6 = var12[var6];
                var8 = var8.bind(var10)(var6);
                var6 = var8.hex2int;
                var2 = var6.bind(var8)(var11);
            case 431:
                var6 = var9;
                if (var5) {
                    _fun57803_ip = 487;
                    continue _fun57803
                }
            case 437:
                var6 = var9;
                if (var4) {
                    _fun57803_ip = 487;
                    continue _fun57803
                }
            case 443:
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 9;
                var4 = var8[var4];
                var5 = var5.bind(var10)(var4);
                var4 = var5.getProfileTheme;
                var5 = var4.bind(var5)(var3);
                var4 = var9;
                if (!(var7 != var5)) {
                    _fun57803_ip = 484;
                    continue _fun57803
                }
            case 481:
                var4 = var5;
            case 484:
                var6 = var4;
            case 487:
                var4 = _closure1_slot6;
                var4 = var4.DARK;
                if (!(var6 === var4)) {
                    _fun57803_ip = 538;
                    continue _fun57803
                }
            case 501:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 10;
                var4 = var7[var4];
                var5 = var5.bind(var10)(var4);
                var4 = var5.isThemeDark;
                var5 = var4.bind(var5)(var9);
                var4 = var9;
                if (var5) {
                    _fun57803_ip = 602;
                    continue _fun57803
                }
            case 538:
                var5 = _closure1_slot6;
                var5 = var5.DARK;
                var5 = var6 === var5;
                if (!var5) {
                    _fun57803_ip = 586;
                    continue _fun57803
                }
            case 555:
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 10;
                var7 = var11[var7];
                var8 = var8.bind(var10)(var7);
                var7 = var8.isThemeLight;
                var5 = var7.bind(var8)(var9);
            case 586:
                var4 = var6;
                if (!var5) {
                    _fun57803_ip = 602;
                    continue _fun57803
                }
            case 592:
                var1 = _closure1_slot6;
                var4 = var1.DARKER;
            case 602:
                var1 = {};
                var1.theme = var4;
                var1.primaryColor = var3;
                var1.secondaryColor = var2;
                return var1;
            case 621:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1298, 7052, 660, 3252, 566, 809, 6924, 668, 7053, 3212, 2]);