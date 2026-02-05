// uikit-native/experimental/RoleDot.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = {};
    var3.flexShrink = var9;
    var6.container = var3;
    var3 = {};
    var9 = 'relative';
    var3.position = var9;
    var6.background = var3;
    var3 = {};
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_NORMAL;
    var3.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var3.borderRadius = var11;
    var6.backgroundColor = var3;
    var3 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_DEFAULT;
    var3.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var3.borderRadius = var11;
    var6.borderBase = var3;
    var3 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.md;
    var3.borderRadius = var9;
    var9 = 0.4;
    var3.opacity = var9;
    var6.borderColor = var3;
    var3 = 10;
    var9 = {
        'borderRadius': 10,
        'position': 'absolute'
    };
    var6.dot = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot6 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/experimental/RoleDot.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun66356: for (var _fun66356_ip = 0;;) switch (_fun66356_ip) {
            case 0:
                var0 = arg0;
                var18 = var0.color;
                var15 = var0.colors;
                var3 = var0.size;
                var4 = undefined;
                if (!(var3 === var4)) {
                    _fun66356_ip = 28;
                    continue _fun66356
                }
            case 24:
                var3 = 'normal';
            case 28:
                var10 = var0.background;
                if (!(var10 === var4)) {
                    _fun66356_ip = 40;
                    continue _fun66356
                }
            case 38:
                var10 = true;
            case 40:
                var6 = var0.containerStyles;
                var2 = var0.guildId;
                var0 = _closure1_slot6;
                var12 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 6;
                var0 = var5[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.useFontScale;
                var16 = var0.bind(var1)();
                var1 = _closure1_slot1;
                var0 = 7;
                var0 = var5[var0];
                var1 = var1.bind(var4)(var0);
                var0 = null;
                var8 = var1.bind(var4)(var2, var0);
                if (!(var0 == var18)) {
                    _fun66356_ip = 127;
                    continue _fun66356
                }
            case 120:
                if (!(var0 != var15)) {
                    _fun66356_ip = 765;
                    continue _fun66356
                }
            case 127:
                var1 = 16;
                var2 = 'normal';
                if (!(var2 === var3)) {
                    _fun66356_ip = 141;
                    continue _fun66356
                }
            case 138:
                var1 = 20;
            case 141:
                var7 = var1 * var16;
                var3 = 2;
                var1 = var7 / var3;
                var5 = var1 + var3;
                var2 = var5 - var3;
                var13 = {};
                var1 = {};
                var9 = var3 * var16;
                var1.paddingRight = var9;
                var11 = _closure1_slot0;
                var17 = _closure1_slot2;
                var9 = 5;
                var9 = var17[var9];
                var11 = var11.bind(var4)(var9);
                var9 = var11.isAndroid;
                var9 = var9.bind(var11)();
                if (var9) {
                    _fun66356_ip = 212;
                    continue _fun66356
                }
            case 206:
                var9 = var3 * var16;
                _fun66356_ip = 219;
                continue _fun66356;
            case 212:
                var11 = 3;
                var9 = var11 * var16;
            case 219:
                var1.paddingTop = var9;
                var1.height = var7;
                var13.container = var1;
                var1 = {};
                var1.height = var7;
                var1.width = var7;
                var7 = var7 - var5;
                var7 = var7 / var3;
                var1.padding = var7;
                var13.background = var1;
                var1 = {};
                var1.height = var5;
                var1.width = var5;
                var13.border = var1;
                var1 = {};
                var1.height = var2;
                var1.width = var2;
                var2 = var2 / var3;
                var1.top = var2;
                var1.left = var2;
                var13.dot = var1;
                var3 = _closure1_slot4;
                var2 = _closure1_slot3;
                var1 = {};
                var7 = var12.container;
                var5 = new Array(3);
                var5[0] = var7;
                var7 = var13.container;
                var5[1] = var7;
                var5[2] = var6;
                var1.style = var5;
                var6 = _closure1_slot5;
                var5 = {};
                var9 = var12.background;
                var7 = new Array(3);
                var7[0] = var9;
                var9 = null;
                if (!var10) {
                    _fun66356_ip = 371;
                    continue _fun66356
                }
            case 366:
                var9 = var12.backgroundColor;
            case 371:
                var7[1] = var9;
                var9 = var13.background;
                var7[2] = var9;
                var5.style = var7;
                var10 = _closure1_slot4;
                var9 = _closure1_slot3;
                var7 = {};
                var16 = var12.borderBase;
                var11 = new Array(1);
                var11[0] = var16;
                var7.style = var11;
                var11 = {};
                var17 = var12.borderColor;
                var16 = new Array(3);
                var16[0] = var17;
                var17 = var13.border;
                var16[1] = var17;
                var17 = {};
                var20 = var0 != var18;
                var19 = undefined;
                if (!var20) {
                    _fun66356_ip = 457;
                    continue _fun66356
                }
            case 454:
                var19 = var18;
            case 457:
                var17.backgroundColor = var19;
                var16[2] = var17;
                var11.style = var16;
                var11 = var10.bind(var4)(var9, var11);
                var7.children = var11;
                var9 = var10.bind(var4)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                if (!var8) {
                    _fun66356_ip = 510;
                    continue _fun66356
                }
            case 496:
                if (!(var0 != var15)) {
                    _fun66356_ip = 510;
                    continue _fun66356
                }
            case 500:
                var8 = var15.secondaryColor;
                if (!(var0 == var8)) {
                    _fun66356_ip = 581;
                    continue _fun66356
                }
            case 510:
                var10 = _closure1_slot4;
                var9 = _closure1_slot3;
                var8 = {};
                var16 = var12.dot;
                var11 = new Array(3);
                var11[0] = var16;
                var16 = var13.dot;
                var11[1] = var16;
                var16 = {};
                var19 = var0 != var18;
                var17 = undefined;
                if (!var19) {
                    _fun66356_ip = 558;
                    continue _fun66356
                }
            case 555:
                var17 = var18;
            case 558:
                var16.backgroundColor = var17;
                var11[2] = var16;
                var8.style = var11;
                var8 = var10.bind(var4)(var9, var8);
                _fun66356_ip = 739;
                continue _fun66356;
            case 581:
                var11 = _closure1_slot4;
                var10 = _closure1_slot1;
                var18 = _closure1_slot2;
                var9 = 8;
                var9 = var18[var9];
                var10 = var10.bind(var4)(var9);
                var9 = {};
                var17 = var15.primaryColor;
                var16 = new Array(3);
                var16[0] = var17;
                var17 = var15.secondaryColor;
                var16[1] = var17;
                var15 = var15.tertiaryColor;
                var16[2] = var15;
                var15 = var16.filter;
                var17 = _closure1_slot0;
                var14 = 9;
                var14 = var18[var14];
                var14 = var17.bind(var4)(var14);
                var14 = var14.isNotNullish;
                var14 = var15.bind(var16)(var14);
                var9.colors = var14;
                var14 = {
                    'x': 0,
                    'y': 0
                };
                var9.start = var14;
                var14 = {
                    'x': 1,
                    'y': 0
                };
                var9.end = var14;
                var14 = var12.dot;
                var12 = new Array(2);
                var12[0] = var14;
                var13 = var13.dot;
                var12[1] = var13;
                var9.style = var12;
                var8 = var11.bind(var4)(var10, var9);
            case 739:
                var7[1] = var8;
                var5.children = var7;
                var5 = var6.bind(var4)(var2, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 765:
                return var0;
        }
    };
    var2.RoleDot = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 478, 4090, 4791, 4098, 1304, 2]);