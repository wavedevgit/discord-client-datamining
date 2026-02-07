// ../discord_common/js/packages/tokens/native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var9;
    var6 = global;
    var4 = var6.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var0 = 0;
    var1 = var9[var0];
    var0 = undefined;
    var1 = var8.bind(var0)(var1);
    var1 = var1._private;
    var5 = var1.Themes;
    var _closure1_slot3 = var5;
    var1 = 1;
    var1 = var9[var1];
    var1 = var8.bind(var0)(var1);
    var1 = var1._private;
    var3 = var1.SemanticColors;
    var _closure1_slot4 = var3;
    var1 = 2;
    var1 = var9[var1];
    var1 = var8.bind(var0)(var1);
    var1 = var1._private;
    var4 = var1.RawColors;
    var _closure1_slot5 = var4;
    var1 = 3;
    var1 = var9[var1];
    var1 = var8.bind(var0)(var1);
    var1 = var1._private;
    var1 = var1.Shadows;
    var7 = 4;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var7 = var7._private;
    var7 = var7.Spacing;
    var11 = var6.Symbol;
    var6 = 'semanticColor';
    var6 = var11.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = {};
    var6.themes = var5;
    var11 = 5;
    var13 = var9[var11];
    var14 = var12.bind(var0)(var13);
    var13 = function(arg0, arg1) { // Environment: var10
        var0 = {};
        var2 = _closure1_slot6;
        var1 = arg1;
        var0[var2] = var1;
        return var0;
    };
    var13 = var14.bind(var0)(var3, var13);
    var6.colors = var13;
    var6.unsafe_rawColors = var4;
    var11 = var9[var11];
    var12 = var12.bind(var0)(var11);
    var11 = function(arg0) { // Environment: var10
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = function arg0() {
            var0 = arg0;
            var _closure3_slot0 = var0;
            var0 = {};
            var1 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var1 = _closure2_slot0;
                var0 = arg0;
                var0 = var1[var0];
                var2 = var0.nativeStyles;
                var1 = undefined;
                var0 = arg1;
                var0 = var3.bind(var1)(var2, var0);
                return var0;
            };
            var0.resolve = var1;
            return var0;
        };
        var0 = {};
        var2 = undefined;
        var4 = function(arg0, arg1) { // Environment: var1
            _fun8218: for (var _fun8218_ip = 0;;) switch (_fun8218_ip) {
                case 0:
                    var1 = arg1;
                    var0 = undefined;
                    if (var1) {
                        _fun8218_ip = 17;
                        continue _fun8218
                    }
                case 8:
                    var1 = arg0;
                    var0 = var1.shadowOffset;
                case 17:
                    return var0;
            }
        };
        var4 = var3.bind(var2)(var4);
        var0.shadowOffset = var4;
        var4 = function(arg0, arg1) { // Environment: var1
            _fun8219: for (var _fun8219_ip = 0;;) switch (_fun8219_ip) {
                case 0:
                    var1 = arg0;
                    var0 = arg1;
                    if (var0) {
                        _fun8219_ip = 17;
                        continue _fun8219
                    }
                case 9:
                    var0 = var1.shadowColor;
                    _fun8219_ip = 23;
                    continue _fun8219;
                case 17:
                    var0 = var1.shadowColorAndroid;
                case 23:
                    return var0;
            }
        };
        var4 = var3.bind(var2)(var4);
        var0.shadowColor = var4;
        var4 = function(arg0) { // Environment: var1
            var0 = arg0;
            var0 = var0.shadowOpacity;
            return var0;
        };
        var4 = var3.bind(var2)(var4);
        var0.shadowOpacity = var4;
        var4 = function(arg0) { // Environment: var1
            var0 = arg0;
            var0 = var0.shadowRadius;
            return var0;
        };
        var4 = var3.bind(var2)(var4);
        var0.shadowRadius = var4;
        var1 = function(arg0) { // Environment: var1
            var0 = arg0;
            var0 = var0.elevation;
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var0.elevation = var1;
        return var0;
    };
    var11 = var12.bind(var0)(var1, var11);
    var6.shadows = var11;
    var11 = 6;
    var11 = var9[var11];
    var11 = var8.bind(var0)(var11);
    var11 = var11.Radius;
    var6.radii = var11;
    var6.spacing = var7;
    var7 = {};
    var11 = function arg0() {
        _fun8223: for (var _fun8223_ip = 0;;) switch (_fun8223_ip) {
            case 0:
                var2 = arg0;
                var1 = 'object';
                var0 = typeof var2;
                var0 = var1 === var0;
                if (!var0) {
                    _fun8223_ip = 23;
                    continue _fun8223
                }
            case 17:
                var1 = null;
                var0 = var1 !== var2;
            case 23:
                if (!var0) {
                    _fun8223_ip = 37;
                    continue _fun8223
                }
            case 26:
                var1 = _closure1_slot6;
                var0 = var1 in var2;
            case 37:
                return var0;
        }
    };
    var7.isSemanticColor = var11;
    var11 = function arg0() {
        var1 = _closure1_slot6;
        var0 = arg0;
        var0 = var0[var1];
        return var0;
    };
    var7.getSemanticColorName = var11;
    var11 = function arg0, arg1, arg2() {
        _fun8225: for (var _fun8225_ip = 0;;) switch (_fun8225_ip) {
            case 0:
                var5 = arg0;
                var6 = arg2;
                var1 = 'string';
                var0 = typeof var5;
                var10 = var5;
                if (!(var1 === var0)) {
                    _fun8225_ip = 104;
                    continue _fun8225
                }
            case 20:
                var0 = var5.toUpperCase;
                var1 = var0.bind(var5)();
                var2 = _closure1_slot3;
                var2 = var1 in var2;
                if (var2) {
                    _fun8225_ip = 96;
                    continue _fun8225
                }
            case 44:
                var2 = global;
                var4 = var2.Error;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = 'Invalid theme: ';
                var17 = var3.bind(var2)(var5);
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var18 = var3;
                var2 = new var18[var4](var17, var16);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
            case 96:
                var0 = _closure1_slot3;
                var10 = var0[var1];
            case 104:
                var2 = _closure1_slot4;
                var3 = _closure1_slot6;
                var0 = arg1;
                var0 = var0[var3];
                var7 = var2[var0];
                var9 = var7.category;
                var0 = var7[var10];
                var3 = _closure1_slot5;
                var2 = var0.raw;
                var5 = var3[var2];
                var0 = var0.opacity;
                var2 = null;
                var3 = var2 == var6;
                var4 = undefined;
                var8 = undefined;
                if (var3) {
                    _fun8225_ip = 173;
                    continue _fun8225
                }
            case 167:
                var8 = var6.gradient;
            case 173:
                var11 = var5;
                var3 = var0;
                if (!(var2 != var8)) {
                    _fun8225_ip = 444;
                    continue _fun8225
                }
            case 186:
                var8 = 'gradient';
                var8 = var8 in var7;
                var11 = var5;
                var3 = var0;
                if (!var8) {
                    _fun8225_ip = 444;
                    continue _fun8225
                }
            case 206:
                var8 = var7.gradient;
                var12 = var2 == var6;
                var7 = undefined;
                if (var12) {
                    _fun8225_ip = 233;
                    continue _fun8225
                }
            case 221:
                var12 = var6.gradient;
                var7 = var12.theme;
            case 233:
                var7 = var8[var7];
                var11 = var5;
                var3 = var0;
                if (!(var2 != var7)) {
                    _fun8225_ip = 444;
                    continue _fun8225
                }
            case 250:
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 7;
                var0 = var8[var0];
                var5 = var5.bind(var4)(var0);
                var8 = var7.color;
                var0 = _closure1_slot5;
                var0 = var8 in var0;
                if (var0) {
                    _fun8225_ip = 317;
                    continue _fun8225
                }
            case 286:
                var8 = var2 == var6;
                var0 = undefined;
                if (var8) {
                    _fun8225_ip = 315;
                    continue _fun8225
                }
            case 295:
                var8 = var6.gradient;
                var12 = var8.colors;
                var8 = var7.color;
                var0 = var12[var8];
            case 315:
                _fun8225_ip = 330;
                continue _fun8225;
            case 317:
                var12 = _closure1_slot5;
                var8 = var7.color;
                var0 = var12[var8];
            case 330:
                var12 = var5.bind(var4)(var0);
                var0 = 'saturation';
                var0 = var0 in var7;
                var13 = var12;
                if (!var0) {
                    _fun8225_ip = 372;
                    continue _fun8225
                }
            case 349:
                var8 = var12.set;
                var5 = var7.saturation;
                var0 = 'hsl.s';
                var13 = var8.bind(var12)(var0, var5);
            case 372:
                var0 = 'lightness';
                var0 = var0 in var7;
                var5 = var13;
                if (!var0) {
                    _fun8225_ip = 409;
                    continue _fun8225
                }
            case 386:
                var12 = var13.set;
                var8 = var7.lightness;
                var0 = 'hsl.l';
                var5 = var12.bind(var13)(var0, var8);
            case 409:
                var0 = var5.hex;
                var5 = var0.bind(var5)();
                var0 = 'opacity';
                var8 = var0 in var7;
                var0 = 1;
                if (!var8) {
                    _fun8225_ip = 438;
                    continue _fun8225
                }
            case 433:
                var0 = var7.opacity;
            case 438:
                var3 = var0;
                var11 = var5;
            case 444:
                var5 = var2 == var6;
                var0 = undefined;
                if (var5) {
                    _fun8225_ip = 459;
                    continue _fun8225
                }
            case 453:
                var0 = var6.contrast;
            case 459:
                var7 = var2 != var0;
                var5 = 1;
                var8 = var5;
                if (!var7) {
                    _fun8225_ip = 475;
                    continue _fun8225
                }
            case 472:
                var8 = var0;
            case 475:
                var7 = var2 == var6;
                var0 = undefined;
                if (var7) {
                    _fun8225_ip = 490;
                    continue _fun8225
                }
            case 484:
                var0 = var6.saturation;
            case 490:
                var2 = var2 != var0;
                var6 = var5;
                if (!var2) {
                    _fun8225_ip = 503;
                    continue _fun8225
                }
            case 500:
                var6 = var0;
            case 503:
                var7 = var11;
                if (!(var6 < var5)) {
                    _fun8225_ip = 543;
                    continue _fun8225
                }
            case 510:
                var2 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 8;
                var0 = var12[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.transformColorForReducedSaturation;
                var7 = var0.bind(var2)(var11, var9, var6);
            case 543:
                var2 = var7;
                if (!(var5 !== var8)) {
                    _fun8225_ip = 595;
                    continue _fun8225
                }
            case 550:
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 8;
                var0 = var11[var0];
                var6 = var6.bind(var4)(var0);
                var0 = var6.transformColorContrast;
                var18 = var6;
                var17 = var7;
                var16 = var9;
                var15 = var10;
                var14 = var8;
                var2 = var18[var0](var17, var16, var15, var14, var13);
            case 595:
                var0 = var2;
                if (!(var5 !== var3)) {
                    _fun8225_ip = 648;
                    continue _fun8225
                }
            case 602:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 7;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var2 = var1.bind(var4)(var2);
                var1 = var2.alpha;
                var2 = var1.bind(var2)(var3);
                var1 = var2.hex;
                var0 = var1.bind(var2)();
            case 648:
                return var0;
        }
    };
    var7.resolveSemanticColor = var11;
    var11 = function arg0, arg1, arg2() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.transformColorForReducedSaturation;
        var2 = arg0;
        var1 = arg2;
        var0 = arg1;
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var7.adjustColorSaturation = var11;
    var10 = function arg0, arg1, arg2, arg3() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.transformColorContrast;
        var9 = arg0;
        var8 = arg2;
        var7 = arg3;
        var6 = arg1;
        var10 = var5;
        var0 = var10[var4](var9, var8, var7, var6, var5);
        return var0;
    };
    var7.adjustColorContrast = var10;
    var6.internal = var7;
    var7 = 9;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = '../discord_common/js/packages/tokens/native.tsx';
    var7 = var8.bind(var9)(var7);
    var2.default = var6;
    var2.Theme = var5;
    var2.RawColor = var4;
    var2.SemanticColor = var3;
    var2.Shadow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [672, 673, 674, 675, 676, 677, 788, 669, 789, 2]);