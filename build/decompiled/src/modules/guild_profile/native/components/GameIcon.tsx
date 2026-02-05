// modules/guild_profile/native/components/GameIcon.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var4 = var6[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.View;
    var _closure1_slot4 = var4;
    var1 = var1.Image;
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot6 = var4;
    var1 = var1.jsxs;
    var _closure1_slot7 = var1;
    var1 = 3;
    var1 = var6[var1];
    var7 = var5.bind(var0)(var1);
    var4 = var7.createStyles;
    var1 = {};
    var8 = {
        'width': 32,
        'height': 32
    };
    var1.gameIcon = var8;
    var8 = {
        'width': 32,
        'height': 32,
        'borderRadius': null,
        'borderWidth': 1,
        'borderStyle': 'solid'
    };
    var9 = 4;
    var11 = var6[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var8.borderRadius = var11;
    var11 = var6[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_STRONG;
    var8.borderColor = var11;
    var1.gameIconImage = var8;
    var8 = {
        'position': 'absolute',
        'top': 4294967292,
        'right': 4294967292,
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'padding': 2,
        'width': 18,
        'height': 18
    };
    var11 = var6[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var11;
    var9 = var6[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.sm;
    var8.borderRadius = var9;
    var1.gameIconMask = var8;
    var8 = {
        'marginTop': 4294967295,
        'width': 14,
        'height': 14
    };
    var1.fireIcon = var8;
    var1 = var4.bind(var7)(var1);
    var _closure1_slot8 = var1;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_profile/native/components/GameIcon.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun59951: for (var _fun59951_ip = 0;;) switch (_fun59951_ip) {
            case 0:
                var2 = arg0;
                var9 = var2.style;
                var7 = var2.game;
                var _closure2_slot0 = var7;
                var0 = var2.activityLevel;
                var2 = var2.onPress;
                var _closure2_slot1 = var2;
                var3 = _closure1_slot8;
                var5 = undefined;
                var14 = var3.bind(var5)();
                var4 = var7.getIconSource;
                var3 = 24;
                var10 = var4.bind(var7)(var3);
                var6 = _closure1_slot3;
                var4 = var6.useCallback;
                var3 = new Array(2);
                var3[0] = var7;
                var3[1] = var2;
                var1 = function() { // Environment: var1
                    _fun59952: for (var _fun59952_ip = 0;;) switch (_fun59952_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun59952_ip = 28;
                                continue _fun59952
                            }
                        case 13:
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 28:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var4.bind(var6)(var1, var3);
                var1 = null;
                var4 = var1 == var0;
                var3 = undefined;
                if (var4) {
                    _fun59951_ip = 111;
                    continue _fun59951
                }
            case 105:
                var3 = var0.level;
            case 111:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 5;
                var0 = var7[var0];
                var0 = var4.bind(var5)(var0);
                var0 = var0.ClanGameplayActivity;
                var0 = var0.HIGH;
                var7 = var3 === var0;
                var3 = var1 == var10;
                var0 = null;
                if (var3) {
                    _fun59951_ip = 587;
                    continue _fun59951
                }
            case 159:
                if (!(var1 == var2)) {
                    _fun59951_ip = 366;
                    continue _fun59951
                }
            case 166:
                var3 = _closure1_slot7;
                var2 = _closure1_slot4;
                var1 = {};
                var4 = new Array(2);
                var4[0] = var9;
                var8 = var14.gameIcon;
                var4[1] = var8;
                var1.style = var4;
                var11 = _closure1_slot6;
                var8 = _closure1_slot5;
                var4 = {};
                var12 = var14.gameIconImage;
                var4.style = var12;
                var4.source = var10;
                var8 = var11.bind(var5)(var8, var4);
                var4 = new Array(2);
                var4[0] = var8;
                var8 = var7;
                if (!var7) {
                    _fun59951_ip = 347;
                    continue _fun59951
                }
            case 242:
                var15 = _closure1_slot6;
                var12 = _closure1_slot4;
                var11 = {};
                var16 = var14.gameIconMask;
                var11.style = var16;
                var17 = _closure1_slot0;
                var20 = _closure1_slot2;
                var16 = 7;
                var16 = var20[var16];
                var16 = var17.bind(var5)(var16);
                var17 = var16.FireIcon;
                var16 = {};
                var18 = var14.fireIcon;
                var16.style = var18;
                var19 = _closure1_slot1;
                var18 = 4;
                var18 = var20[var18];
                var18 = var19.bind(var5)(var18);
                var18 = var18.unsafe_rawColors;
                var18 = var18.ORANGE_330;
                var16.color = var18;
                var16 = var15.bind(var5)(var17, var16);
                var11.children = var16;
                var8 = var15.bind(var5)(var12, var11);
            case 347:
                var4[1] = var8;
                var1.children = var4;
                var1 = var3.bind(var5)(var2, var1);
                _fun59951_ip = 584;
                continue _fun59951;
            case 366:
                var4 = _closure1_slot7;
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 6;
                var2 = var8[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.PressableHighlight;
                var2 = {};
                var8 = new Array(2);
                var8[0] = var9;
                var9 = var14.gameIcon;
                var8[1] = var9;
                var2.style = var8;
                var2.onPress = var6;
                var9 = _closure1_slot6;
                var8 = _closure1_slot5;
                var6 = {};
                var11 = var14.gameIconImage;
                var6.style = var11;
                var6.source = var10;
                var8 = var9.bind(var5)(var8, var6);
                var6 = new Array(2);
                var6[0] = var8;
                if (!var7) {
                    _fun59951_ip = 570;
                    continue _fun59951
                }
            case 465:
                var10 = _closure1_slot6;
                var9 = _closure1_slot4;
                var8 = {};
                var11 = var14.gameIconMask;
                var8.style = var11;
                var12 = _closure1_slot0;
                var15 = _closure1_slot2;
                var11 = 7;
                var11 = var15[var11];
                var11 = var12.bind(var5)(var11);
                var12 = var11.FireIcon;
                var11 = {};
                var14 = var14.fireIcon;
                var11.style = var14;
                var14 = _closure1_slot1;
                var13 = 4;
                var13 = var15[var13];
                var13 = var14.bind(var5)(var13);
                var13 = var13.unsafe_rawColors;
                var13 = var13.ORANGE_260;
                var11.color = var13;
                var11 = var10.bind(var5)(var12, var11);
                var8.children = var11;
                var7 = var10.bind(var5)(var9, var8);
            case 570:
                var6[1] = var7;
                var2.children = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 584:
                var0 = var1;
            case 587:
                return var0;
        }
    };
    var2.default = var3;
    var2.useStyles = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 7429, 4904, 7430, 2]);