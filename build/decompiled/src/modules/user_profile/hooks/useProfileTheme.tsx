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
    var3 = var3.ThemeTypes;
    var _closure1_slot5 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/hooks/useProfileTheme.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useProfileTheme, environment: var1
        _fun56952: for (var _fun56952_ip = 0;;) switch (_fun56952_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.user;
                var13 = var0.displayProfile;
                var11 = var0.pendingThemeColors;
                var14 = var0.pendingAvatarSrc;
                var2 = var0.isPreview;
                var3 = var0.forceUserTheme;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 3;
                var1 = var5[var1];
                var9 = undefined;
                var1 = var4.bind(var9)(var1);
                var8 = var1.bind(var9)();
                var4 = _closure1_slot0;
                var1 = 4;
                var1 = var5[var1];
                var6 = var4.bind(var9)(var1);
                var5 = var6.useStateFromStores;
                var1 = _closure1_slot4;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var1
                    var0 = _closure1_slot4;
                    var0 = var0.syncProfileThemeWithUserTheme;
                    return var0;
                };
                var4 = var5.bind(var6)(var4, var1);
                var6 = null;
                if (!(var6 == var14)) {
                    _fun56952_ip = 162;
                    continue _fun56952
                }
            case 121:
                var5 = var6 == var12;
                var1 = undefined;
                if (var5) {
                    _fun56952_ip = 159;
                    continue _fun56952
                }
            case 130:
                var10 = var12.getAvatarURL;
                var5 = var6 == var13;
                var7 = undefined;
                if (var5) {
                    _fun56952_ip = 150;
                    continue _fun56952
                }
            case 145:
                var7 = var13.guildId;
            case 150:
                var5 = 80;
                var1 = var10.bind(var12)(var7, var5);
            case 159:
                var14 = var1;
            case 162:
                var5 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 5;
                var1 = var10[var1];
                var16 = var5.bind(var9)(var1);
                var15 = var16.unsafe_getResolvedRawColor;
                var12 = {};
                var7 = 1;
                var12.saturation = var7;
                var1 = 'PRIMARY_530';
                var12 = var15.bind(var16)(var1, var12);
                var1 = 6;
                var1 = var10[var1];
                var10 = var5.bind(var9)(var1);
                var5 = var10.useAvatarColors;
                var1 = false;
                var10 = var5.bind(var10)(var14, var12, var1);
                var5 = _closure1_slot3;
                var1 = 2;
                var5 = var5.bind(var9)(var10, var1);
                var1 = 0;
                var12 = var5[var1];
                var10 = var5[var7];
                if (!(var6 != var13)) {
                    _fun56952_ip = 273;
                    continue _fun56952
                }
            case 262:
                var5 = var13.canEditThemes;
                if (var5) {
                    _fun56952_ip = 298;
                    continue _fun56952
                }
            case 273:
                if (var2) {
                    _fun56952_ip = 298;
                    continue _fun56952
                }
            case 276:
                var2 = {
                    'theme': null,
                    'primaryColor': null,
                    'secondaryColor': null
                };
                var2.theme = var8;
                return var2;
            case 298:
                var2 = var6 == var13;
                var5 = undefined;
                if (var2) {
                    _fun56952_ip = 320;
                    continue _fun56952
                }
            case 307:
                var2 = var13.getPreviewThemeColors;
                var5 = var2.bind(var13)(var11);
            case 320:
                var11 = var6 == var5;
                var2 = undefined;
                if (var11) {
                    _fun56952_ip = 333;
                    continue _fun56952
                }
            case 329:
                var2 = var5[var1];
            case 333:
                if (!(var6 == var2)) {
                    _fun56952_ip = 368;
                    continue _fun56952
                }
            case 337:
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 7;
                var1 = var13[var1];
                var11 = var11.bind(var9)(var1);
                var1 = var11.hex2int;
                var2 = var1.bind(var11)(var12);
            case 368:
                var11 = var6 == var5;
                var1 = undefined;
                if (var11) {
                    _fun56952_ip = 381;
                    continue _fun56952
                }
            case 377:
                var1 = var5[var7];
            case 381:
                if (!(var6 == var1)) {
                    _fun56952_ip = 416;
                    continue _fun56952
                }
            case 385:
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 7;
                var5 = var11[var5];
                var7 = var7.bind(var9)(var5);
                var5 = var7.hex2int;
                var1 = var5.bind(var7)(var10);
            case 416:
                var5 = var8;
                if (var4) {
                    _fun56952_ip = 472;
                    continue _fun56952
                }
            case 422:
                var5 = var8;
                if (var3) {
                    _fun56952_ip = 472;
                    continue _fun56952
                }
            case 428:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 8;
                var3 = var7[var3];
                var4 = var4.bind(var9)(var3);
                var3 = var4.getProfileTheme;
                var4 = var3.bind(var4)(var2);
                var3 = var8;
                if (!(var6 != var4)) {
                    _fun56952_ip = 469;
                    continue _fun56952
                }
            case 466:
                var3 = var4;
            case 469:
                var5 = var3;
            case 472:
                var3 = _closure1_slot5;
                var3 = var3.DARK;
                if (!(var5 === var3)) {
                    _fun56952_ip = 523;
                    continue _fun56952
                }
            case 486:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 9;
                var3 = var6[var3];
                var4 = var4.bind(var9)(var3);
                var3 = var4.isThemeDark;
                var4 = var3.bind(var4)(var8);
                var3 = var8;
                if (var4) {
                    _fun56952_ip = 587;
                    continue _fun56952
                }
            case 523:
                var4 = _closure1_slot5;
                var4 = var4.DARK;
                var4 = var5 === var4;
                if (!var4) {
                    _fun56952_ip = 571;
                    continue _fun56952
                }
            case 540:
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 9;
                var6 = var10[var6];
                var7 = var7.bind(var9)(var6);
                var6 = var7.isThemeLight;
                var4 = var6.bind(var7)(var8);
            case 571:
                var3 = var5;
                if (!var4) {
                    _fun56952_ip = 587;
                    continue _fun56952
                }
            case 577:
                var0 = _closure1_slot5;
                var3 = var0.DARKER;
            case 587:
                var0 = {};
                var0.theme = var3;
                var0.primaryColor = var2;
                var0.secondaryColor = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1298, 660, 3205, 566, 808, 6799, 668, 6922, 3165, 2]);