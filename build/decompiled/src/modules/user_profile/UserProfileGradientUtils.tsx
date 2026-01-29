// modules/user_profile/UserProfileGradientUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var10;
    var7 = function(arg0) { // Original name: getProfileTheme, environment: var1
        _fun56899: for (var _fun56899_ip = 0;;) switch (_fun56899_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                var1 = var0 == var4;
                if (var1) {
                    _fun56899_ip = 87;
                    continue _fun56899
                }
            case 12:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 2;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var1 = var3.getDarkness;
                var3 = var1.bind(var3)(var4);
                var1 = 0.5;
                if (!(!(var3 > var1))) {
                    _fun56899_ip = 74;
                    continue _fun56899
                }
            case 62:
                var1 = _closure1_slot4;
                var1 = var1.LIGHT;
                _fun56899_ip = 84;
                continue _fun56899;
            case 74:
                var2 = _closure1_slot4;
                var1 = var2.DARK;
            case 84:
                var0 = var1;
            case 87:
                return var0;
        }
    };
    var _closure1_slot5 = var7;
    var6 = function(arg0, arg1, arg2) { // Original name: getValueInColorGradientByPercentage, environment: var1
        var4 = arg0;
        var6 = arg1;
        var1 = arg2;
        var0 = 100;
        var5 = var1 / var0;
        var2 = 1;
        var7 = var2 - var5;
        var1 = global;
        var8 = var1.Math;
        var3 = var8.round;
        var0 = 0;
        var9 = var4[var0];
        var9 = var9 * var7;
        var0 = var6[var0];
        var0 = var0 * var5;
        var0 = var9 + var0;
        var3 = var3.bind(var8)(var0);
        var0 = new Array(3);
        var0[0] = var3;
        var8 = var1.Math;
        var3 = var8.round;
        var9 = var4[var2];
        var9 = var9 * var7;
        var2 = var6[var2];
        var2 = var2 * var5;
        var2 = var9 + var2;
        var2 = var3.bind(var8)(var2);
        var0[1] = var2;
        var3 = var1.Math;
        var2 = var3.round;
        var1 = 2;
        var4 = var4[var1];
        var4 = var4 * var7;
        var1 = var6[var1];
        var1 = var1 * var5;
        var1 = var4 + var1;
        var1 = var2.bind(var3)(var1);
        var0[2] = var1;
        return var0;
    };
    var _closure1_slot6 = var6;
    var3 = function(arg0, arg1, arg2) { // Original name: getGradientPercentageColorInRgb, environment: var1
        var4 = _closure1_slot6;
        var3 = undefined;
        var2 = arg0;
        var1 = arg1;
        var0 = arg2;
        var1 = var4.bind(var3)(var2, var1, var0);
        var0 = 0;
        var12 = var1[var0];
        var0 = 1;
        var10 = var1[var0];
        var0 = 2;
        var8 = var1[var0];
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var13 = 'rgba(';
        var1 = ', ';
        var7 = ', 1)';
        var11 = var1;
        var9 = var1;
        var0 = var13[var3](var12, var11, var10, var9, var8, var7, var6);
        return var0;
    };
    var _closure1_slot7 = var3;
    var0 = global;
    var11 = var0.Object;
    var8 = var11.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var11)(var2, var0, var4);
    var0 = 0;
    var4 = var10[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var10[var4];
    var4 = var9.bind(var0)(var4);
    var4 = var4.ThemeTypes;
    var _closure1_slot4 = var4;
    var4 = 4;
    var5 = var10[var4];
    var12 = var9.bind(var0)(var5);
    var11 = var12.memoize;
    var8 = function(arg0) { // Environment: var1
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 5;
        var2 = var4[var0];
        var1 = undefined;
        var6 = var3.bind(var1)(var2);
        var5 = var6.getContrastingColor;
        var2 = {};
        var7 = '#ffffff';
        var2.base = var7;
        var0 = var4[var0];
        var0 = var3.bind(var1)(var0);
        var0 = var0.WCAGContrastRatios;
        var0 = var0.HighContrastText;
        var2.contrastRatio = var0;
        var0 = arg0;
        var2 = var5.bind(var6)(var0, var2);
        var0 = 2;
        var0 = var4[var0];
        var1 = var3.bind(var1)(var0);
        var0 = var1.hex2int;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var5 = function(arg0) { // Environment: var1
        var0 = arg0;
        return var0;
    };
    var5 = var11.bind(var12)(var8, var5);
    var4 = var10[var4];
    var12 = var9.bind(var0)(var4);
    var11 = var12.memoize;
    var8 = function(arg0, arg1, arg2) { // Environment: var1
        _fun56904: for (var _fun56904_ip = 0;;) switch (_fun56904_ip) {
            case 0:
                var8 = arg0;
                var5 = arg2;
                var0 = null;
                if (!(var0 == var5)) {
                    _fun56904_ip = 26;
                    continue _fun56904
                }
            case 12:
                var1 = _closure1_slot5;
                var0 = undefined;
                var5 = var1.bind(var0)(var8);
            case 26:
                var1 = _closure1_slot4;
                var2 = var1.LIGHT;
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var6 = 6;
                var7 = var1[var6];
                var4 = undefined;
                var10 = var3.bind(var4)(var7);
                var9 = var10.mix;
                var7 = var1[var6];
                var7 = var3.bind(var4)(var7);
                var8 = var7.bind(var4)(var8);
                var1 = var1[var6];
                var3 = var3.bind(var4)(var1);
                var1 = arg1;
                var13 = var3.bind(var4)(var1);
                var12 = 0.5;
                var11 = 'lab';
                var15 = var10;
                var14 = var8;
                var1 = var15[var9](var14, var13, var12, var11, var10);
                var3 = global;
                var10 = var3.Math;
                var9 = var10.round;
                var7 = var1.get;
                var3 = 'hsl.l';
                var7 = var7.bind(var1)(var3);
                var8 = 100;
                var7 = var8 * var7;
                var7 = var9.bind(var10)(var7);
                var10 = var7 / var8;
                if (!(var5 === var2)) {
                    _fun56904_ip = 219;
                    continue _fun56904
                }
            case 171:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 4;
                var2 = var7[var2];
                var8 = var5.bind(var4)(var2);
                var7 = var8.clamp;
                var5 = 0.8;
                var2 = 1;
                var2 = var7.bind(var8)(var10, var5, var2);
                _fun56904_ip = 264;
                continue _fun56904;
            case 219:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 4;
                var5 = var8[var5];
                var9 = var7.bind(var4)(var5);
                var8 = var9.clamp;
                var7 = 0;
                var5 = 0.1;
                var2 = var8.bind(var9)(var10, var7, var5);
            case 264:
                var5 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var6];
                var0 = var5.bind(var4)(var0);
                var1 = var0.bind(var4)(var1);
                var0 = var1.set;
                var1 = var0.bind(var1)(var3, var2);
                var0 = var1.num;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var4 = function(arg0, arg1, arg2) { // Environment: var1
        var0 = global;
        var0 = var0.HermesInternal;
        var5 = var0.concat;
        var11 = '';
        var10 = arg0;
        var2 = '-';
        var8 = arg1;
        var6 = arg2;
        var9 = var2;
        var7 = var2;
        var0 = var11[var5](var10, var9, var8, var7, var6, var5);
        return var0;
    };
    var4 = var11.bind(var12)(var8, var4);
    var8 = 7;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/user_profile/UserProfileGradientUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var2.getProfileTheme = var7;
    var2.getValueInColorGradientByPercentage = var6;
    var6 = function(arg0, arg1) { // Original name: calculateOverlayedColor, environment: var1
        _fun56906: for (var _fun56906_ip = 0;;) switch (_fun56906_ip) {
            case 0:
                var8 = arg1;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var3 = 2;
                var4 = var2[var3];
                var2 = undefined;
                var6 = var5.bind(var2)(var4);
                var5 = var6.int2rgbArray;
                var4 = arg0;
                var10 = var5.bind(var6)(var4);
                var4 = null;
                if (!(var4 != var8)) {
                    _fun56906_ip = 285;
                    continue _fun56906
                }
            case 53:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var7 = 3;
                var5 = var5[var7];
                var6 = var6.bind(var2)(var5);
                var5 = var6.parseString;
                var6 = var5.bind(var6)(var8);
                if (!(var4 != var6)) {
                    _fun56906_ip = 281;
                    continue _fun56906
                }
            case 91:
                var4 = var6.red;
                var8 = new Array(3);
                var8[0] = var4;
                var4 = var6.green;
                var8[1] = var4;
                var4 = var6.blue;
                var8[2] = var4;
                var5 = 0;
                var4 = var10[var5];
                var9 = new Array(3);
                var9[0] = var4;
                var4 = 1;
                var11 = var10[var4];
                var9[1] = var11;
                var10 = var10[var3];
                var9[2] = var10;
                var _closure2_slot0 = var9;
                var6 = var6.alpha;
                var _closure2_slot1 = var6;
                var6 = var8.map;
                var1 = function(arg0, arg1) { // Environment: var1
                    var0 = global;
                    var2 = var0.Math;
                    var1 = var2.floor;
                    var4 = _closure2_slot1;
                    var3 = arg0;
                    var3 = var4 * var3;
                    var5 = _closure2_slot1;
                    var4 = 1;
                    var4 = var4 - var5;
                    var5 = _closure2_slot0;
                    var0 = arg1;
                    var0 = var5[var0];
                    var0 = var4 * var0;
                    var0 = var3 + var0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var6.bind(var8)(var1);
                var1 = _closure1_slot3;
                var1 = var1.bind(var2)(var6, var7);
                var8 = var1[var5];
                var15 = var1[var4];
                var13 = var1[var3];
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var3];
                var2 = var1.bind(var2)(var0);
                var1 = var2.rgb2int;
                var0 = global;
                var0 = var0.HermesInternal;
                var5 = var0.concat;
                var18 = 'rgba(';
                var3 = ', ';
                var12 = ')';
                var17 = var8;
                var16 = var3;
                var14 = var3;
                var0 = var18[var5](var17, var16, var15, var14, var13, var12, var11);
                var0 = var1.bind(var2)(var0);
                return var0;
            case 281:
                var0 = 0;
                return var0;
            case 285:
                var0 = 0;
                return var0;
        }
    };
    var2.calculateOverlayedColor = var6;
    var2.calculateButtonColor = var5;
    var2.calculateModalV2BackgroundColor = var4;
    var2.getGradientPercentageColorInRgb = var3;
    var3 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: calculateGradientSplitColors, environment: var1
        _fun56908: for (var _fun56908_ip = 0;;) switch (_fun56908_ip) {
            case 0:
                var6 = arg2;
                var0 = 0;
                if (!(var0 !== var6)) {
                    _fun56908_ip = 128;
                    continue _fun56908
                }
            case 9:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 2;
                var4 = var3[var1];
                var5 = undefined;
                var8 = var2.bind(var5)(var4);
                var7 = var8.int2rgbArray;
                var4 = arg0;
                var4 = var7.bind(var8)(var4);
                var1 = var3[var1];
                var3 = var2.bind(var5)(var1);
                var2 = var3.int2rgbArray;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var2 = _closure1_slot7;
                var7 = 100;
                var0 = arg3;
                var0 = var7 * var0;
                var0 = var0 / var6;
                var1 = var2.bind(var5)(var4, var3, var0);
                var0 = new Array(2);
                var0[0] = var1;
                var1 = arg4;
                var1 = var7 * var1;
                var1 = var1 / var6;
                var1 = var2.bind(var5)(var4, var3, var1);
                var0[1] = var1;
                return var0;
            case 128:
                var0 = new Array(0);
                return var0;
        }
    };
    var2.calculateGradientSplitColors = var3;
    var1 = function(arg0, arg1, arg2) { // Original name: getUserProfileGradientContainerColors, environment: var1
        _fun56909: for (var _fun56909_ip = 0;;) switch (_fun56909_ip) {
            case 0:
                var8 = arg0;
                var6 = arg1;
                var2 = arg2;
                var1 = 'string';
                var0 = typeof var2;
                if (!(var1 !== var0)) {
                    _fun56909_ip = 144;
                    continue _fun56909
                }
            case 23:
                var1 = null;
                if (!(var1 == var8)) {
                    _fun56909_ip = 37;
                    continue _fun56909
                }
            case 29:
                var0 = 0;
                var3 = var2[var0];
                _fun56909_ip = 77;
                continue _fun56909;
            case 37:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 2;
                var4 = var4[var0];
                var0 = undefined;
                var5 = var5.bind(var0)(var4);
                var4 = var5.int2rgba;
                var0 = 1;
                var3 = var4.bind(var5)(var8, var0);
            case 77:
                var0 = new Array(2);
                var0[0] = var3;
                if (!(var1 == var6)) {
                    _fun56909_ip = 98;
                    continue _fun56909
                }
            case 89:
                var1 = 1;
                var1 = var2[var1];
                _fun56909_ip = 138;
                continue _fun56909;
            case 98:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 2;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.int2rgba;
                var3 = 1;
                var1 = var4.bind(var5)(var6, var3);
            case 138:
                var0[1] = var1;
                _fun56909_ip = 252;
                continue _fun56909;
            case 144:
                var3 = null;
                var4 = var2;
                if (!(var3 != var8)) {
                    _fun56909_ip = 193;
                    continue _fun56909
                }
            case 153:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 2;
                var5 = var5[var1];
                var1 = undefined;
                var7 = var7.bind(var1)(var5);
                var5 = var7.int2rgba;
                var1 = 1;
                var4 = var5.bind(var7)(var8, var1);
            case 193:
                var1 = new Array(2);
                var1[0] = var4;
                if (!(var3 != var6)) {
                    _fun56909_ip = 245;
                    continue _fun56909
                }
            case 205:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 2;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.int2rgba;
                var3 = 1;
                var2 = var4.bind(var5)(var6, var3);
            case 245:
                var1[1] = var2;
                var0 = var1;
            case 252:
                return var0;
        }
    };
    var2.getUserProfileGradientContainerColors = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 660, 668, 3200, 22, 3165, 669, 2]);