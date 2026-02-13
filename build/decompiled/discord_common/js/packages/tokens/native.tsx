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
    var0 = function arg0, arg1() {
        _fun8212: for (var _fun8212_ip = 0;;) switch (_fun8212_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun8212_ip = 46;
                    continue _fun8212
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun8212_ip = 55;
                    continue _fun8212
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun8212_ip = 343;
                    continue _fun8212
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun8212_ip = 323;
                    continue _fun8212
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun8212_ip = 283;
                    continue _fun8212
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun8212_ip = 270;
                    continue _fun8212
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun8212_ip = 163;
                    continue _fun8212
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun8212_ip = 179;
                    continue _fun8212
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun8212_ip = 249;
                    continue _fun8212
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun8212_ip = 249;
                    continue _fun8212
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun8212_ip = 234;
                    continue _fun8212
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun8212_ip = 247;
                    continue _fun8212
                }
            case 234:
                var8 = _closure1_slot9;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun8212_ip = 265;
                continue _fun8212;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun8212_ip = 283;
                continue _fun8212;
            case 270:
                var6 = _closure1_slot9;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun8212_ip = 323;
                    continue _fun8212
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun8212_ip = 330;
                    continue _fun8212
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun8213: for (var _fun8213_ip = 0;;) switch (_fun8213_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun8213_ip = 56;
                                continue _fun8213
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun8213_ip = 67;
                            continue _fun8213;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function arg0, arg1() {
        _fun8214: for (var _fun8214_ip = 0;;) switch (_fun8214_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun8214_ip = 23;
                    continue _fun8214
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun8214_ip = 33;
                    continue _fun8214
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun8214_ip = 70;
                    continue _fun8214
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun8214_ip = 55;
                    continue _fun8214
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
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
    var1 = var1.SemanticColorExperiments;
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var9[var1];
    var1 = var8.bind(var0)(var1);
    var1 = var1._private;
    var4 = var1.RawColors;
    var _closure1_slot6 = var4;
    var1 = 4;
    var1 = var9[var1];
    var1 = var8.bind(var0)(var1);
    var1 = var1._private;
    var1 = var1.Shadows;
    var7 = 5;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var7 = var7._private;
    var7 = var7.Spacing;
    var11 = var6.Symbol;
    var6 = 'semanticColor';
    var6 = var11.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = {};
    var6.themes = var5;
    var11 = 6;
    var13 = var9[var11];
    var14 = var12.bind(var0)(var13);
    var13 = function(arg0, arg1) { // Environment: var10
        var0 = {};
        var2 = _closure1_slot7;
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
            _fun8219: for (var _fun8219_ip = 0;;) switch (_fun8219_ip) {
                case 0:
                    var1 = arg1;
                    var0 = undefined;
                    if (var1) {
                        _fun8219_ip = 17;
                        continue _fun8219
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
            _fun8220: for (var _fun8220_ip = 0;;) switch (_fun8220_ip) {
                case 0:
                    var1 = arg0;
                    var0 = arg1;
                    if (var0) {
                        _fun8220_ip = 17;
                        continue _fun8220
                    }
                case 9:
                    var0 = var1.shadowColor;
                    _fun8220_ip = 23;
                    continue _fun8220;
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
    var11 = 7;
    var11 = var9[var11];
    var11 = var8.bind(var0)(var11);
    var11 = var11.Radius;
    var6.radii = var11;
    var6.spacing = var7;
    var7 = {};
    var11 = function arg0() {
        _fun8224: for (var _fun8224_ip = 0;;) switch (_fun8224_ip) {
            case 0:
                var2 = arg0;
                var1 = 'object';
                var0 = typeof var2;
                var0 = var1 === var0;
                if (!var0) {
                    _fun8224_ip = 23;
                    continue _fun8224
                }
            case 17:
                var1 = null;
                var0 = var1 !== var2;
            case 23:
                if (!var0) {
                    _fun8224_ip = 37;
                    continue _fun8224
                }
            case 26:
                var1 = _closure1_slot7;
                var0 = var1 in var2;
            case 37:
                return var0;
        }
    };
    var7.isSemanticColor = var11;
    var11 = function arg0() {
        var1 = _closure1_slot7;
        var0 = arg0;
        var0 = var0[var1];
        return var0;
    };
    var7.getSemanticColorName = var11;
    var11 = function arg0, arg1, arg2() {
        _fun8226: for (var _fun8226_ip = 0;;) switch (_fun8226_ip) {
            case 0:
                var5 = arg0;
                var11 = arg1;
                var6 = arg2;
                var1 = 'string';
                var0 = typeof var5;
                var10 = var5;
                if (!(var1 === var0)) {
                    _fun8226_ip = 107;
                    continue _fun8226
                }
            case 23:
                var0 = var5.toUpperCase;
                var1 = var0.bind(var5)();
                var2 = _closure1_slot3;
                var2 = var1 in var2;
                if (var2) {
                    _fun8226_ip = 99;
                    continue _fun8226
                }
            case 47:
                var2 = global;
                var4 = var2.Error;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = 'Invalid theme: ';
                var21 = var3.bind(var2)(var5);
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var22 = var3;
                var2 = new var22[var4](var21, var20);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
            case 99:
                var0 = _closure1_slot3;
                var10 = var0[var1];
            case 107:
                var2 = _closure1_slot4;
                var0 = _closure1_slot7;
                var0 = var11[var0];
                var7 = var2[var0];
                var9 = var7.category;
                var0 = var7[var10];
                var3 = _closure1_slot6;
                var2 = var0.raw;
                var16 = var3[var2];
                var15 = var0.opacity;
                var2 = null;
                var0 = var2 == var6;
                var4 = undefined;
                var3 = undefined;
                if (var0) {
                    _fun8226_ip = 173;
                    continue _fun8226
                }
            case 167:
                var3 = var6.enabledExperiments;
            case 173:
                var5 = var16;
                var0 = var15;
                if (!(var2 != var3)) {
                    _fun8226_ip = 358;
                    continue _fun8226
                }
            case 186:
                var3 = var6.enabledExperiments;
                var8 = var3.length;
                var3 = 0;
                var5 = var16;
                var0 = var15;
                if (!(var8 > var3)) {
                    _fun8226_ip = 358;
                    continue _fun8226
                }
            case 212:
                var8 = _closure1_slot5;
                var3 = _closure1_slot7;
                var3 = var11[var3];
                var14 = var8[var3];
                var5 = var16;
                var0 = var15;
                if (!(var2 != var14)) {
                    _fun8226_ip = 358;
                    continue _fun8226
                }
            case 238:
                var8 = _closure1_slot8;
                var3 = var6.enabledExperiments;
                var13 = var8.bind(var4)(var3);
                var8 = var13.bind(var4)();
                var3 = var8.done;
                var12 = var8;
                var11 = undefined;
                var5 = var16;
                var0 = var15;
                if (var3) {
                    _fun8226_ip = 358;
                    continue _fun8226
                }
            case 276:
                var8 = var12.value;
                var17 = var2 == var14;
                var3 = undefined;
                if (var17) {
                    _fun8226_ip = 313;
                    continue _fun8226
                }
            case 290:
                var17 = var14[var8];
                var8 = var2 == var17;
                var11 = var17;
                var3 = undefined;
                if (var8) {
                    _fun8226_ip = 313;
                    continue _fun8226
                }
            case 306:
                var3 = var17[var10];
                var11 = var17;
            case 313:
                if (!(var2 == var3)) {
                    _fun8226_ip = 340;
                    continue _fun8226
                }
            case 317:
                var17 = var13.bind(var4)();
                var8 = var17.done;
                var12 = var17;
                var5 = var16;
                var0 = var15;
                if (var8) {
                    _fun8226_ip = 358;
                    continue _fun8226
                }
            case 338:
                _fun8226_ip = 276;
                continue _fun8226;
            case 340:
                var11 = _closure1_slot6;
                var8 = var3.raw;
                var5 = var11[var8];
                var0 = var3.opacity;
            case 358:
                var3 = var2 == var6;
                var8 = undefined;
                if (var3) {
                    _fun8226_ip = 373;
                    continue _fun8226
                }
            case 367:
                var8 = var6.gradient;
            case 373:
                var11 = var5;
                var3 = var0;
                if (!(var2 != var8)) {
                    _fun8226_ip = 644;
                    continue _fun8226
                }
            case 386:
                var8 = 'gradient';
                var8 = var8 in var7;
                var11 = var5;
                var3 = var0;
                if (!var8) {
                    _fun8226_ip = 644;
                    continue _fun8226
                }
            case 406:
                var8 = var7.gradient;
                var12 = var2 == var6;
                var7 = undefined;
                if (var12) {
                    _fun8226_ip = 433;
                    continue _fun8226
                }
            case 421:
                var12 = var6.gradient;
                var7 = var12.theme;
            case 433:
                var7 = var8[var7];
                var11 = var5;
                var3 = var0;
                if (!(var2 != var7)) {
                    _fun8226_ip = 644;
                    continue _fun8226
                }
            case 450:
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 8;
                var0 = var8[var0];
                var5 = var5.bind(var4)(var0);
                var8 = var7.color;
                var0 = _closure1_slot6;
                var0 = var8 in var0;
                if (var0) {
                    _fun8226_ip = 517;
                    continue _fun8226
                }
            case 486:
                var8 = var2 == var6;
                var0 = undefined;
                if (var8) {
                    _fun8226_ip = 515;
                    continue _fun8226
                }
            case 495:
                var8 = var6.gradient;
                var12 = var8.colors;
                var8 = var7.color;
                var0 = var12[var8];
            case 515:
                _fun8226_ip = 530;
                continue _fun8226;
            case 517:
                var12 = _closure1_slot6;
                var8 = var7.color;
                var0 = var12[var8];
            case 530:
                var12 = var5.bind(var4)(var0);
                var0 = 'saturation';
                var0 = var0 in var7;
                var13 = var12;
                if (!var0) {
                    _fun8226_ip = 572;
                    continue _fun8226
                }
            case 549:
                var8 = var12.set;
                var5 = var7.saturation;
                var0 = 'hsl.s';
                var13 = var8.bind(var12)(var0, var5);
            case 572:
                var0 = 'lightness';
                var0 = var0 in var7;
                var5 = var13;
                if (!var0) {
                    _fun8226_ip = 609;
                    continue _fun8226
                }
            case 586:
                var12 = var13.set;
                var8 = var7.lightness;
                var0 = 'hsl.l';
                var5 = var12.bind(var13)(var0, var8);
            case 609:
                var0 = var5.hex;
                var5 = var0.bind(var5)();
                var0 = 'opacity';
                var8 = var0 in var7;
                var0 = 1;
                if (!var8) {
                    _fun8226_ip = 638;
                    continue _fun8226
                }
            case 633:
                var0 = var7.opacity;
            case 638:
                var3 = var0;
                var11 = var5;
            case 644:
                var5 = var2 == var6;
                var0 = undefined;
                if (var5) {
                    _fun8226_ip = 659;
                    continue _fun8226
                }
            case 653:
                var0 = var6.contrast;
            case 659:
                var7 = var2 != var0;
                var5 = 1;
                var8 = var5;
                if (!var7) {
                    _fun8226_ip = 675;
                    continue _fun8226
                }
            case 672:
                var8 = var0;
            case 675:
                var7 = var2 == var6;
                var0 = undefined;
                if (var7) {
                    _fun8226_ip = 690;
                    continue _fun8226
                }
            case 684:
                var0 = var6.saturation;
            case 690:
                var2 = var2 != var0;
                var6 = var5;
                if (!var2) {
                    _fun8226_ip = 703;
                    continue _fun8226
                }
            case 700:
                var6 = var0;
            case 703:
                var7 = var11;
                if (!(var6 < var5)) {
                    _fun8226_ip = 743;
                    continue _fun8226
                }
            case 710:
                var2 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 9;
                var0 = var12[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.transformColorForReducedSaturation;
                var7 = var0.bind(var2)(var11, var9, var6);
            case 743:
                var2 = var7;
                if (!(var5 !== var8)) {
                    _fun8226_ip = 795;
                    continue _fun8226
                }
            case 750:
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 9;
                var0 = var11[var0];
                var6 = var6.bind(var4)(var0);
                var0 = var6.transformColorContrast;
                var22 = var6;
                var21 = var7;
                var20 = var9;
                var19 = var10;
                var18 = var8;
                var2 = var22[var0](var21, var20, var19, var18, var17);
            case 795:
                var0 = var2;
                if (!(var5 !== var3)) {
                    _fun8226_ip = 848;
                    continue _fun8226
                }
            case 802:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 8;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var2 = var1.bind(var4)(var2);
                var1 = var2.alpha;
                var2 = var1.bind(var2)(var3);
                var1 = var2.hex;
                var0 = var1.bind(var2)();
            case 848:
                return var0;
        }
    };
    var7.resolveSemanticColor = var11;
    var11 = function arg0, arg1, arg2() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 9;
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
        var0 = 9;
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
    var7 = 10;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [672, 673, 674, 675, 676, 677, 678, 789, 669, 790, 2]);