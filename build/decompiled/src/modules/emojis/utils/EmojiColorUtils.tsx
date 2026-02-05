// modules/emojis/utils/EmojiColorUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var4;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var3 = function arg0() {
        _fun55552: for (var _fun55552_ip = 0;;) switch (_fun55552_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.colors;
                var1 = var0.saturationFactor;
                var2 = undefined;
                if (!(var1 === var2)) {
                    _fun55552_ip = 23;
                    continue _fun55552
                }
            case 20:
                var1 = 1;
            case 23:
                var3 = var0.shouldProcessMobileColors;
                if (!(var3 === var2)) {
                    _fun55552_ip = 35;
                    continue _fun55552
                }
            case 33:
                var3 = false;
            case 35:
                var0 = {};
                var0.colors = var4;
                var0.saturationFactor = var1;
                var9 = var0.colors;
                var12 = var0.saturationFactor;
                if (!(var12 === var2)) {
                    _fun55552_ip = 64;
                    continue _fun55552
                }
            case 61:
                var12 = 1;
            case 64:
                var5 = null;
                var0 = var5 == var9;
                var4 = null;
                if (var0) {
                    _fun55552_ip = 943;
                    continue _fun55552
                }
            case 78:
                var0 = var9.length;
                var6 = 1;
                var0 = var0 < var6;
                var4 = null;
                if (var0) {
                    _fun55552_ip = 943;
                    continue _fun55552
                }
            case 98:
                var7 = _closure1_slot0;
                var0 = _closure1_slot2;
                var11 = 0;
                var1 = var0[var11];
                var7 = var7.bind(var2)(var1);
                var1 = var7.findColorByHsv;
                var21 = var1.bind(var7)(var9);
                var1 = _closure1_slot1;
                var0 = var0[var6];
                var1 = var1.bind(var2)(var0);
                var0 = var1.parseString;
                var10 = var0.bind(var1)(var21);
                var0 = var5 == var10;
                var4 = null;
                if (var0) {
                    _fun55552_ip = 943;
                    continue _fun55552
                }
            case 167:
                var16 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = var9[var11];
                var13 = var16.bind(var2)(var0);
                var7 = var13.rawRgbToHsl;
                var6 = var10.red;
                var1 = var10.blue;
                var0 = var10.green;
                var7 = var7.bind(var13)(var6, var1, var0);
                var0 = var9[var11];
                var6 = var16.bind(var2)(var0);
                var1 = var6.getAccessibleForegroundColor;
                var0 = {};
                var13 = _closure1_slot1;
                var19 = 2;
                var14 = var9[var19];
                var15 = var13.bind(var2)(var14);
                var14 = var9[var11];
                var17 = var16.bind(var2)(var14);
                var16 = var17.getColorLightnessAdjusted;
                var22 = 0.6;
                var14 = true;
                var16 = var16.bind(var17)(var10, var22, var14);
                var14 = var16.toHexString;
                var14 = var14.bind(var16)();
                var14 = var15.bind(var2)(var14);
                var0.foreground = var14;
                var9 = var9[var19];
                var9 = var13.bind(var2)(var9);
                var20 = '#ffffff';
                var9 = var9.bind(var2)(var20);
                var0.background = var9;
                var9 = 3;
                var0.ratio = var9;
                var0.saturationFactor = var12;
                var0 = var1.bind(var6)(var0);
                var16 = var10;
                if (!(var5 != var0)) {
                    _fun55552_ip = 355;
                    continue _fun55552
                }
            case 352:
                var16 = var0;
            case 355:
                var17 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = var9[var11];
                var6 = var17.bind(var2)(var0);
                var1 = var6.getAccessibleForegroundColor;
                var0 = {};
                var13 = _closure1_slot1;
                var14 = var9[var19];
                var15 = var13.bind(var2)(var14);
                var14 = var9[var11];
                var18 = var17.bind(var2)(var14);
                var17 = var18.getColorLightnessAdjusted;
                var14 = false;
                var17 = var17.bind(var18)(var10, var22, var14);
                var14 = var17.toHexString;
                var14 = var14.bind(var17)();
                var14 = var15.bind(var2)(var14);
                var0.foreground = var14;
                var9 = var9[var19];
                var9 = var13.bind(var2)(var9);
                var17 = '#36393e';
                var9 = var9.bind(var2)(var17);
                var0.background = var9;
                var9 = 5;
                var0.ratio = var9;
                var0.saturationFactor = var12;
                var0 = var1.bind(var6)(var0);
                var13 = var10;
                if (!(var5 != var0)) {
                    _fun55552_ip = 490;
                    continue _fun55552
                }
            case 487:
                var13 = var0;
            case 490:
                var1 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = var15[var11];
                var14 = var1.bind(var2)(var0);
                var6 = var14.getAccessibleForegroundColor;
                var0 = {};
                var18 = _closure1_slot1;
                var9 = var15[var19];
                var9 = var18.bind(var2)(var9);
                var9 = var9.bind(var2)(var21);
                var0.foreground = var9;
                var9 = var15[var19];
                var9 = var18.bind(var2)(var9);
                var9 = var9.bind(var2)(var20);
                var0.background = var9;
                var9 = 7;
                var0.ratio = var9;
                var0.saturationFactor = var12;
                var14 = var6.bind(var14)(var0);
                var0 = var15[var11];
                var6 = var1.bind(var2)(var0);
                var1 = var6.getAccessibleForegroundColor;
                var0 = {};
                var20 = var15[var19];
                var20 = var18.bind(var2)(var20);
                var20 = var20.bind(var2)(var21);
                var0.foreground = var20;
                var15 = var15[var19];
                var15 = var18.bind(var2)(var15);
                var15 = var15.bind(var2)(var17);
                var0.background = var15;
                var0.ratio = var9;
                var0.saturationFactor = var12;
                var15 = var1.bind(var6)(var0);
                var0 = {};
                var1 = {};
                var9 = var5 == var14;
                var6 = undefined;
                if (var9) {
                    _fun55552_ip = 668;
                    continue _fun55552
                }
            case 658:
                var9 = var14.hex;
                var6 = var9.bind(var14)();
            case 668:
                var1.accentColor = var6;
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var11];
                var14 = var9.bind(var2)(var6);
                var9 = var14.getSaturatedColorHex;
                var6 = {};
                var6.colorRGB = var16;
                var6.saturationFactor = var12;
                var6 = var9.bind(var14)(var6);
                var1.backgroundColor = var6;
                var9 = var5 == var10;
                var6 = undefined;
                if (var9) {
                    _fun55552_ip = 736;
                    continue _fun55552
                }
            case 726:
                var9 = var10.toHexString;
                var6 = var9.bind(var10)();
            case 736:
                var1.highlightColor = var6;
                var6 = var5 == var7;
                var9 = undefined;
                if (var6) {
                    _fun55552_ip = 756;
                    continue _fun55552
                }
            case 750:
                var9 = var7.saturation;
            case 756:
                var6 = 0.1;
                var14 = var9 < var6;
                var9 = var6;
                if (!var14) {
                    _fun55552_ip = 786;
                    continue _fun55552
                }
            case 776:
                var9 = 0.35;
            case 786:
                var1.opacity = var9;
                var0.LIGHT = var1;
                var1 = {};
                var14 = var5 == var15;
                var9 = undefined;
                if (var14) {
                    _fun55552_ip = 816;
                    continue _fun55552
                }
            case 806:
                var14 = var15.hex;
                var9 = var14.bind(var15)();
            case 816:
                var1.accentColor = var9;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var11];
                var11 = var9.bind(var2)(var8);
                var9 = var11.getSaturatedColorHex;
                var8 = {};
                var8.colorRGB = var13;
                var8.saturationFactor = var12;
                var8 = var9.bind(var11)(var8);
                var1.backgroundColor = var8;
                var9 = var5 == var10;
                var8 = undefined;
                if (var9) {
                    _fun55552_ip = 884;
                    continue _fun55552
                }
            case 874:
                var9 = var10.toHexString;
                var8 = var9.bind(var10)();
            case 884:
                var1.highlightColor = var8;
                var8 = var5 == var7;
                var5 = undefined;
                if (var8) {
                    _fun55552_ip = 904;
                    continue _fun55552
                }
            case 898:
                var5 = var7.saturation;
            case 904:
                var6 = var5 < var6;
                var5 = 0.2;
                if (!var6) {
                    _fun55552_ip = 931;
                    continue _fun55552
                }
            case 921:
                var5 = 0.5;
            case 931:
                var1.opacity = var5;
                var0.DARK = var1;
                var4 = var0;
            case 943:
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 3;
                var0 = var5[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.applyPlatformToThemedEmojiColorPalette;
                var0 = {};
                var0.palette = var4;
                var0.shouldProcessMobileColors = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot3 = var3;
    var0 = 4;
    var4 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/emojis/utils/EmojiColorUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.buildPlatformedThemedEmojiColorPalette = var3;
    var1 = function(arg0, arg1, arg2) { // Environment: var1
        _fun55553: for (var _fun55553_ip = 0;;) switch (_fun55553_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun55553_ip = 192;
                    continue _fun55553
                }
            case 12:
                var2 = var3.length;
                var1 = 1;
                if (!(!(var2 < var1))) {
                    _fun55553_ip = 192;
                    continue _fun55553
                }
            case 27:
                var2 = _closure1_slot3;
                var1 = {};
                var1.colors = var3;
                var3 = arg1;
                var1.saturationFactor = var3;
                var3 = undefined;
                var4 = var2.bind(var3)(var1);
                var5 = var0 == var4;
                var1 = arg2;
                if (var1) {
                    _fun55553_ip = 78;
                    continue _fun55553
                }
            case 65:
                var2 = undefined;
                if (var5) {
                    _fun55553_ip = 76;
                    continue _fun55553
                }
            case 70:
                var2 = var4.LIGHT;
            case 76:
                _fun55553_ip = 92;
                continue _fun55553;
            case 78:
                var1 = undefined;
                if (var5) {
                    _fun55553_ip = 89;
                    continue _fun55553
                }
            case 83:
                var1 = var4.DARK;
            case 89:
                var2 = var1;
            case 92:
                var1 = {};
                var5 = var0 == var2;
                var4 = undefined;
                if (var5) {
                    _fun55553_ip = 108;
                    continue _fun55553
                }
            case 103:
                var4 = var2.backgroundColor;
            case 108:
                var1.backgroundColor = var4;
                var5 = var0 == var2;
                var4 = undefined;
                if (var5) {
                    _fun55553_ip = 127;
                    continue _fun55553
                }
            case 121:
                var4 = var2.accentColor;
            case 127:
                var1.accentColor = var4;
                var5 = var0 == var2;
                var4 = undefined;
                if (var5) {
                    _fun55553_ip = 147;
                    continue _fun55553
                }
            case 141:
                var4 = var2.highlightColor;
            case 147:
                var1.highlightColor = var4;
                var4 = var0 == var2;
                var3 = undefined;
                if (var4) {
                    _fun55553_ip = 166;
                    continue _fun55553
                }
            case 161:
                var3 = var2.opacity;
            case 166:
                var4 = var0 != var3;
                var2 = 0.15;
                if (!var4) {
                    _fun55553_ip = 186;
                    continue _fun55553
                }
            case 183:
                var2 = var3;
            case 186:
                var1.opacity = var2;
                return var1;
            case 192:
                return var0;
        }
    };
    var2.buildEmojiColorPalette = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3240, 3241, 669, 6575, 2]);