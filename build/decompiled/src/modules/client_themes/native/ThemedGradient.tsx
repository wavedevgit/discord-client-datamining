// modules/client_themes/native/ThemedGradient.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var7;
    var0 = function arg0() {
        _fun69590: for (var _fun69590_ip = 0;;) switch (_fun69590_ip) {
            case 0:
                var1 = arg0;
                var17 = var1.colors;
                var2 = var1.baseMix;
                var3 = var1.gradientAngle;
                var7 = var1.absolute;
                var10 = var1.wide;
                var9 = var1.tall;
                var16 = var1.mix;
                var15 = var1.mixAmount;
                var4 = undefined;
                if (!(var15 === var4)) {
                    _fun69590_ip = 60;
                    continue _fun69590
                }
            case 58:
                var15 = {};
            case 60:
                var14 = var1.mixColorOverride;
                var6 = var1.componentStyles;
                var13 = var1.theme;
                var _closure2_slot0 = var4;
                var _closure2_slot1 = var4;
                var5 = _closure1_slot8;
                var8 = var5.bind(var4)();
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var5 = 5;
                var5 = var12[var5];
                var5 = var11.bind(var4)(var5);
                var5 = var5.bind(var4)();
                var12 = var5.width;
                var11 = var5.height;
                var5 = {};
                var5.colors = var17;
                var5.mix = var16;
                var5.mixAmount = var15;
                var5.mixColorOverride = var14;
                var5.theme = var13;
                var5.baseMix = var2;
                var2 = function arg0() {
                    _fun69591: for (var _fun69591_ip = 0;;) switch (_fun69591_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = var3.colors;
                            var1 = var3.baseMix;
                            var _closure3_slot0 = var1;
                            var1 = var3.mix;
                            var4 = var3.mixAmount;
                            var5 = undefined;
                            if (!(var4 === var5)) {
                                _fun69591_ip = 40;
                                continue _fun69591
                            }
                        case 38:
                            var4 = {};
                        case 40:
                            var _closure3_slot1 = var4;
                            var4 = var3.mixColorOverride;
                            var _closure3_slot2 = var4;
                            var3 = var3.theme;
                            var _closure3_slot3 = var3;
                            var3 = var2;
                            if (!var1) {
                                _fun69591_ip = 87;
                                continue _fun69591
                            }
                        case 70:
                            var1 = var2.map;
                            var0 = function(arg0) { // Environment: var0
                                _fun69592: for (var _fun69592_ip = 0;;) switch (_fun69592_ip) {
                                    case 0:
                                        var0 = _closure3_slot2;
                                        var5 = null;
                                        if (!(var5 == var0)) {
                                            _fun69592_ip = 285;
                                            continue _fun69592
                                        }
                                    case 16:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var1 = 7;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var6 = var3.bind(var1)(var2);
                                        var3 = var6.isThemeDark;
                                        var2 = _closure3_slot3;
                                        var2 = var3.bind(var6)(var2);
                                        var3 = _closure1_slot1;
                                        var6 = _closure1_slot2;
                                        var0 = 8;
                                        var0 = var6[var0];
                                        var3 = var3.bind(var1)(var0);
                                        var0 = _closure3_slot1;
                                        var0 = var5 == var0;
                                        if (var2) {
                                            _fun69592_ip = 189;
                                            continue _fun69592
                                        }
                                    case 87:
                                        var7 = undefined;
                                        if (var0) {
                                            _fun69592_ip = 102;
                                            continue _fun69592
                                        }
                                    case 92:
                                        var2 = _closure3_slot1;
                                        var7 = var2.light;
                                    case 102:
                                        if (!(var5 == var7)) {
                                            _fun69592_ip = 152;
                                            continue _fun69592
                                        }
                                    case 106:
                                        var6 = _closure3_slot0;
                                        var2 = 100;
                                        var9 = var6 / var2;
                                        var6 = 0.5;
                                        var8 = 0.2;
                                        var2 = 1;
                                        var2 = var2 - var9;
                                        var2 = var8 * var2;
                                        var7 = var6 + var2;
                                    case 152:
                                        var2 = var3.prototype;
                                        var6 = Object.create(var2, {
                                            constructor: {
                                                value: var3
                                            }
                                        });
                                        var2 = 255;
                                        var17 = var6;
                                        var16 = var2;
                                        var15 = var2;
                                        var14 = var2;
                                        var13 = var7;
                                        var2 = new var17[var3](var16, var15, var14, var13, var12);
                                        var6 = var2 instanceof Object ? var2 : var6;
                                        _fun69592_ip = 283;
                                        continue _fun69592;
                                    case 189:
                                        var2 = undefined;
                                        if (var0) {
                                            _fun69592_ip = 204;
                                            continue _fun69592
                                        }
                                    case 194:
                                        var0 = _closure3_slot1;
                                        var2 = var0.dark;
                                    case 204:
                                        if (!(var5 == var2)) {
                                            _fun69592_ip = 254;
                                            continue _fun69592
                                        }
                                    case 208:
                                        var1 = _closure3_slot0;
                                        var0 = 100;
                                        var8 = var1 / var0;
                                        var1 = 0.5;
                                        var7 = 0.25;
                                        var0 = 1;
                                        var0 = var0 - var8;
                                        var0 = var7 * var0;
                                        var2 = var1 + var0;
                                    case 254:
                                        var0 = var3.prototype;
                                        var1 = Object.create(var0, {
                                            constructor: {
                                                value: var3
                                            }
                                        });
                                        var17 = var1;
                                        var16 = 0;
                                        var15 = 0;
                                        var14 = 0;
                                        var13 = var2;
                                        var0 = new var17[var3](var16, var15, var14, var13, var12);
                                        var6 = var0 instanceof Object ? var0 : var1;
                                    case 283:
                                        _fun69592_ip = 289;
                                        continue _fun69592;
                                    case 285:
                                        var6 = _closure3_slot2;
                                    case 289:
                                        var7 = _closure1_slot0;
                                        var8 = _closure1_slot2;
                                        var2 = 9;
                                        var1 = var8[var2];
                                        var3 = undefined;
                                        var10 = var7.bind(var3)(var1);
                                        var9 = var10.hexToRgb;
                                        var1 = arg0;
                                        var1 = var9.bind(var10)(var1);
                                        var11 = var1.r;
                                        var10 = var1.g;
                                        var9 = var1.b;
                                        var1 = 7;
                                        var1 = var8[var1];
                                        var8 = var7.bind(var3)(var1);
                                        var7 = var8.isThemeDark;
                                        var1 = _closure3_slot3;
                                        var1 = var7.bind(var8)(var1);
                                        var7 = _closure3_slot1;
                                        var7 = var5 == var7;
                                        if (var1) {
                                            _fun69592_ip = 433;
                                            continue _fun69592
                                        }
                                    case 382:
                                        var1 = undefined;
                                        if (var7) {
                                            _fun69592_ip = 397;
                                            continue _fun69592
                                        }
                                    case 387:
                                        var8 = _closure3_slot1;
                                        var1 = var8.light;
                                    case 397:
                                        var1 = var5 != var1;
                                        var8 = 0.5;
                                        if (!var1) {
                                            _fun69592_ip = 431;
                                            continue _fun69592
                                        }
                                    case 414:
                                        var1 = _closure3_slot1;
                                        var12 = var1.light;
                                        var1 = 1;
                                        var8 = var1 - var12;
                                    case 431:
                                        _fun69592_ip = 485;
                                        continue _fun69592;
                                    case 433:
                                        var1 = undefined;
                                        if (var7) {
                                            _fun69592_ip = 448;
                                            continue _fun69592
                                        }
                                    case 438:
                                        var7 = _closure3_slot1;
                                        var1 = var7.dark;
                                    case 448:
                                        var5 = var5 != var1;
                                        var1 = 0.5;
                                        if (!var5) {
                                            _fun69592_ip = 482;
                                            continue _fun69592
                                        }
                                    case 465:
                                        var4 = _closure3_slot1;
                                        var5 = var4.dark;
                                        var4 = 1;
                                        var1 = var4 - var5;
                                    case 482:
                                        var8 = var1;
                                    case 485:
                                        var1 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var2 = var4[var2];
                                        var5 = var1.bind(var3)(var2);
                                        var2 = var5.mixColors;
                                        var7 = _closure1_slot1;
                                        var0 = 8;
                                        var0 = var4[var0];
                                        var0 = var7.bind(var3)(var0);
                                        var7 = var0.prototype;
                                        var7 = Object.create(var7, {
                                            constructor: {
                                                value: var0
                                            }
                                        });
                                        var17 = var7;
                                        var16 = var11;
                                        var15 = var10;
                                        var14 = var9;
                                        var13 = var8;
                                        var0 = new var17[var0](var16, var15, var14, var13, var12);
                                        var0 = var0 instanceof Object ? var0 : var7;
                                        var2 = var2.bind(var5)(var6, var0);
                                        var0 = 12;
                                        var0 = var4[var0];
                                        var1 = var1.bind(var3)(var0);
                                        var0 = var1.colorToHex;
                                        var0 = var0.bind(var1)(var2);
                                        return var0;
                                }
                            };
                            var3 = var1.bind(var2)(var0);
                        case 87:
                            var2 = var3.length;
                            var1 = 1;
                            var0 = var3;
                            if (!(var1 === var2)) {
                                _fun69591_ip = 127;
                                continue _fun69591
                            }
                        case 102:
                            var2 = 0;
                            var4 = var3[var2];
                            var1 = new Array(2);
                            var1[0] = var4;
                            var2 = var3[var2];
                            var1[1] = var2;
                            var0 = var1;
                        case 127:
                            return var0;
                    }
                };
                var17 = var2.bind(var4)(var5);
                _closure2_slot0 = var17;
                var2 = 90;
                var5 = var3 - var2;
                var2 = global;
                var3 = var2.Math;
                var3 = var3.PI;
                var5 = var5 * var3;
                var3 = 180;
                var5 = var5 / var3;
                var13 = var2.Math;
                var3 = var13.cos;
                var15 = var3.bind(var13)(var5);
                var3 = var2.Math;
                var2 = var3.sin;
                var14 = var2.bind(var3)(var5);
                var2 = {};
                var3 = {};
                var5 = 0.7142857142857143;
                var13 = var5 * var15;
                var16 = 0.6;
                var13 = var16 - var13;
                var3.x = var13;
                var18 = var5 * var14;
                var13 = 0.5;
                var18 = var13 - var18;
                var3.y = var18;
                var2.start = var3;
                var3 = {};
                var15 = var5 * var15;
                var15 = var16 + var15;
                var3.x = var15;
                var5 = var5 * var14;
                var5 = var13 + var5;
                var3.y = var5;
                var2.end = var3;
                var13 = var2.start;
                var5 = var2.end;
                var2 = _closure1_slot10;
                var15 = var2.bind(var4)(var17);
                _closure2_slot1 = var15;
                var2 = function arg0() {
                    _fun69593: for (var _fun69593_ip = 0;;) switch (_fun69593_ip) {
                        case 0:
                            var2 = arg0;
                            var _closure3_slot0 = var2;
                            var3 = var2.length;
                            var1 = 1;
                            if (!(var1 !== var3)) {
                                _fun69593_ip = 40;
                                continue _fun69593
                            }
                        case 21:
                            var1 = var2.map;
                            var0 = function(arg0, arg1) { // Environment: var0
                                var0 = _closure3_slot0;
                                var1 = var0.length;
                                var0 = 1;
                                var1 = var1 - var0;
                                var0 = arg1;
                                var0 = var0 / var1;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            _fun69593_ip = 50;
                            continue _fun69593;
                        case 40:
                            var0 = [0, 1];
                        case 50:
                            return var0;
                    }
                };
                var14 = var2.bind(var4)(var15);
                var16 = _closure1_slot3;
                var3 = var16.useEffect;
                var2 = new Array(2);
                var2[0] = var15;
                var2[1] = var17;
                var0 = function() { // Environment: var0
                    _fun69595: for (var _fun69595_ip = 0;;) switch (_fun69595_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var1 = var0.length;
                            var0 = 2;
                            if (!(var1 < var0)) {
                                _fun69595_ip = 125;
                                continue _fun69595
                            }
                        case 19:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 13;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.captureException;
                            var6 = global;
                            var4 = var6.Error;
                            var0 = var4.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var9 = 'Invalid custom theme gradient colors';
                            var10 = var1;
                            var0 = new var10[var4](var9, var8);
                            var1 = var0 instanceof Object ? var0 : var1;
                            var0 = {};
                            var4 = {};
                            var7 = var6.JSON;
                            var6 = var7.stringify;
                            var5 = _closure2_slot0;
                            var5 = var6.bind(var7)(var5);
                            var4.gradientColors = var5;
                            var0.extra = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 125:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var3.bind(var16)(var0, var2);
                var2 = var15.length;
                var0 = 2;
                var2 = var2 < var0;
                var0 = null;
                if (var2) {
                    _fun69590_ip = 538;
                    continue _fun69590
                }
            case 422:
                var3 = _closure1_slot6;
                var2 = _closure1_slot1;
                var16 = _closure1_slot2;
                var1 = 11;
                var1 = var16[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.colors = var15;
                var1.locations = var14;
                var1.start = var13;
                var1.end = var5;
                if (!var10) {
                    _fun69590_ip = 477;
                    continue _fun69590
                }
            case 468:
                var5 = {};
                var5.width = var12;
                var10 = var5;
            case 477:
                var5 = new Array(5);
                var5[0] = var10;
                if (!var9) {
                    _fun69590_ip = 497;
                    continue _fun69590
                }
            case 488:
                var10 = {};
                var10.height = var11;
                var9 = var10;
            case 497:
                var5[1] = var9;
                var9 = var8.linearGradient;
                var5[2] = var9;
                if (!var7) {
                    _fun69590_ip = 520;
                    continue _fun69590
                }
            case 514:
                var7 = var8.absolute;
            case 520:
                var5[3] = var7;
                var5[4] = var6;
                var1.style = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 538:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var0 = 0;
    var5 = var7[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot3 = var3;
    var9 = 1;
    var3 = var7[var9];
    var3 = var6.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var7[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot6 = var4;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var7[var3];
    var5 = var6.bind(var0)(var3);
    var4 = var5.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var3.softenGradient = var8;
    var8 = {};
    var8.flex = var9;
    var3.linearGradient = var8;
    var8 = {
        'position': 'absolute',
        'top': 0,
        'bottom': 0,
        'left': 0,
        'right': 0
    };
    var3.absolute = var8;
    var3 = var4.bind(var5)(var3);
    var _closure1_slot8 = var3;
    var4 = function arg0() {
        _fun69596: for (var _fun69596_ip = 0;;) switch (_fun69596_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.gradient;
                var6 = var0.absolute;
                var9 = var0.wide;
                var8 = var0.tall;
                var13 = var0.angleOverride;
                var5 = var0.componentStyles;
                var1 = var0.mix;
                var _closure2_slot0 = var1;
                var1 = var0.mixAmount;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun69596_ip = 65;
                    continue _fun69596
                }
            case 63:
                var1 = {};
            case 65:
                var _closure2_slot1 = var1;
                var0 = var0.mixColorOverride;
                var _closure2_slot2 = var0;
                var _closure2_slot3 = var3;
                var1 = _closure1_slot8;
                var7 = var1.bind(var3)();
                var1 = _closure1_slot1;
                var15 = _closure1_slot2;
                var2 = 5;
                var2 = var15[var2];
                var2 = var1.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var11 = var2.width;
                var10 = var2.height;
                var2 = 6;
                var2 = var15[var2];
                var2 = var1.bind(var3)(var2);
                var2 = var2.bind(var3)();
                _closure2_slot3 = var2;
                var16 = var4.colors;
                var14 = var16.map;
                var2 = function(arg0) { // Environment: var12
                    _fun69597: for (var _fun69597_ip = 0;;) switch (_fun69597_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = _closure2_slot0;
                            if (var0) {
                                _fun69597_ip = 55;
                                continue _fun69597
                            }
                        case 13:
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 10;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var3.bind(var0)(var1);
                            var1 = var0.unsafe_rawColors;
                            var0 = var2.token;
                            var0 = var1[var0];
                            return var0;
                        case 55:
                            var0 = _closure2_slot2;
                            var10 = null;
                            if (!(var10 == var0)) {
                                _fun69597_ip = 277;
                                continue _fun69597
                            }
                        case 68:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 7;
                            var3 = var3[var0];
                            var0 = undefined;
                            var6 = var5.bind(var0)(var3);
                            var5 = var6.isThemeDark;
                            var3 = _closure2_slot3;
                            var3 = var5.bind(var6)(var3);
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var1 = 8;
                            var1 = var6[var1];
                            var6 = var5.bind(var0)(var1);
                            var1 = _closure2_slot1;
                            var1 = var10 == var1;
                            if (var3) {
                                _fun69597_ip = 211;
                                continue _fun69597
                            }
                        case 139:
                            var3 = undefined;
                            if (var1) {
                                _fun69597_ip = 154;
                                continue _fun69597
                            }
                        case 144:
                            var5 = _closure2_slot1;
                            var3 = var5.light;
                        case 154:
                            var5 = var10 != var3;
                            var7 = 0.8;
                            if (!var5) {
                                _fun69597_ip = 174;
                                continue _fun69597
                            }
                        case 171:
                            var7 = var3;
                        case 174:
                            var3 = var6.prototype;
                            var5 = Object.create(var3, {
                                constructor: {
                                    value: var6
                                }
                            });
                            var3 = 255;
                            var17 = var5;
                            var16 = var3;
                            var15 = var3;
                            var14 = var3;
                            var13 = var7;
                            var3 = new var17[var6](var16, var15, var14, var13, var12);
                            var3 = var3 instanceof Object ? var3 : var5;
                            _fun69597_ip = 275;
                            continue _fun69597;
                        case 211:
                            var0 = undefined;
                            if (var1) {
                                _fun69597_ip = 226;
                                continue _fun69597
                            }
                        case 216:
                            var1 = _closure2_slot1;
                            var0 = var1.dark;
                        case 226:
                            var1 = var10 != var0;
                            var5 = 0.7;
                            if (!var1) {
                                _fun69597_ip = 246;
                                continue _fun69597
                            }
                        case 243:
                            var5 = var0;
                        case 246:
                            var0 = var6.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var6
                                }
                            });
                            var17 = var1;
                            var16 = 0;
                            var15 = 0;
                            var14 = 0;
                            var13 = var5;
                            var0 = new var17[var6](var16, var15, var14, var13, var12);
                            var3 = var0 instanceof Object ? var0 : var1;
                        case 275:
                            _fun69597_ip = 281;
                            continue _fun69597;
                        case 277:
                            var3 = _closure2_slot2;
                        case 281:
                            var6 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var1 = 9;
                            var5 = var11[var1];
                            var9 = undefined;
                            var6 = var6.bind(var9)(var5);
                            var5 = var6.hexToRgb;
                            var8 = _closure1_slot1;
                            var7 = 10;
                            var7 = var11[var7];
                            var7 = var8.bind(var9)(var7);
                            var7 = var7.unsafe_rawColors;
                            var2 = var2.token;
                            var2 = var7[var2];
                            var2 = var5.bind(var6)(var2);
                            var8 = var2.r;
                            var7 = var2.g;
                            var6 = var2.b;
                            var2 = _closure2_slot1;
                            var5 = var10 == var2;
                            var2 = undefined;
                            if (var5) {
                                _fun69597_ip = 387;
                                continue _fun69597
                            }
                        case 377:
                            var5 = _closure2_slot1;
                            var2 = var5.dark;
                        case 387:
                            var5 = var10 != var2;
                            var2 = 0.3;
                            if (!var5) {
                                _fun69597_ip = 421;
                                continue _fun69597
                            }
                        case 404:
                            var5 = _closure2_slot1;
                            var11 = var5.dark;
                            var5 = 1;
                            var2 = var5 - var11;
                        case 421:
                            var5 = _closure2_slot1;
                            var11 = var10 == var5;
                            var5 = undefined;
                            if (var11) {
                                _fun69597_ip = 444;
                                continue _fun69597
                            }
                        case 434:
                            var11 = _closure2_slot1;
                            var5 = var11.light;
                        case 444:
                            var10 = var10 != var5;
                            var5 = 0.2;
                            if (!var10) {
                                _fun69597_ip = 478;
                                continue _fun69597
                            }
                        case 461:
                            var10 = _closure2_slot1;
                            var11 = var10.light;
                            var10 = 1;
                            var5 = var10 - var11;
                        case 478:
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var10 = 7;
                            var10 = var12[var10];
                            var11 = var11.bind(var9)(var10);
                            var10 = var11.isThemeDark;
                            var4 = _closure2_slot3;
                            var4 = var10.bind(var11)(var4);
                            if (!var4) {
                                _fun69597_ip = 519;
                                continue _fun69597
                            }
                        case 516:
                            var5 = var2;
                        case 519:
                            var2 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var1 = var10[var1];
                            var2 = var2.bind(var9)(var1);
                            var1 = var2.mixColors;
                            var4 = _closure1_slot1;
                            var0 = 8;
                            var0 = var10[var0];
                            var0 = var4.bind(var9)(var0);
                            var4 = var0.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var17 = var4;
                            var16 = var8;
                            var15 = var7;
                            var14 = var6;
                            var13 = var5;
                            var0 = new var17[var0](var16, var15, var14, var13, var12);
                            var0 = var0 instanceof Object ? var0 : var4;
                            var1 = var1.bind(var2)(var3, var0);
                            var0 = var1.toHexString;
                            var0 = var0.bind(var1)();
                            return var0;
                    }
                };
                var14 = var14.bind(var16)(var2);
                var2 = _closure1_slot6;
                var0 = 11;
                var0 = var15[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.colors = var14;
                var15 = var4.colors;
                var14 = var15.map;
                var12 = function(arg0) { // Environment: var12
                    var0 = arg0;
                    var1 = var0.stop;
                    var0 = 100;
                    var0 = var1 / var0;
                    return var0;
                };
                var12 = var14.bind(var15)(var12);
                var0.locations = var12;
                var12 = null;
                if (!(var12 == var13)) {
                    _fun69596_ip = 231;
                    continue _fun69596
                }
            case 225:
                var13 = var4.angle;
            case 231:
                var0.angle = var13;
                var4 = var4.angleCenter;
                if (!(var12 == var4)) {
                    _fun69596_ip = 260;
                    continue _fun69596
                }
            case 246:
                var4 = {
                    'x': 0.5,
                    'y': 0.5
                };
            case 260:
                var0.angleCenter = var4;
                var4 = true;
                var0.useAngle = var4;
                if (!var9) {
                    _fun69596_ip = 284;
                    continue _fun69596
                }
            case 275:
                var4 = {};
                var4.width = var11;
                var9 = var4;
            case 284:
                var4 = new Array(5);
                var4[0] = var9;
                if (!var8) {
                    _fun69596_ip = 304;
                    continue _fun69596
                }
            case 295:
                var9 = {};
                var9.height = var10;
                var8 = var9;
            case 304:
                var4[1] = var8;
                var8 = var7.linearGradient;
                var4[2] = var8;
                if (!var6) {
                    _fun69596_ip = 327;
                    continue _fun69596
                }
            case 321:
                var6 = var7.absolute;
            case 327:
                var4[3] = var6;
                var4[4] = var5;
                var0.style = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var4;
    var3 = function arg0() {
        var2 = arg0;
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            var2 = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
            var1 = var2.test;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot10 = var3;
    var5 = function arg0, arg1, arg2, arg3, arg4() {
        _fun69601: for (var _fun69601_ip = 0;;) switch (_fun69601_ip) {
            case 0:
                var6 = arg0;
                var8 = arg2;
                var1 = arg1;
                var0 = var6;
                if (!var1) {
                    _fun69601_ip = 143;
                    continue _fun69601
                }
            case 18:
                var4 = _closure1_slot7;
                var3 = _closure1_slot4;
                var2 = {};
                var5 = var8.absolute;
                var2.style = var5;
                var5 = new Array(2);
                var5[0] = var6;
                var7 = _closure1_slot6;
                var6 = {};
                var9 = var8.softenGradient;
                var8 = new Array(2);
                var8[0] = var9;
                var9 = {};
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 9;
                var10 = var10[var1];
                var1 = undefined;
                var13 = var11.bind(var1)(var10);
                var12 = var13.hexWithOpacity;
                var11 = arg3;
                var10 = arg4;
                var10 = var12.bind(var13)(var11, var10);
                var9.backgroundColor = var10;
                var8[1] = var9;
                var6.style = var8;
                var6 = var7.bind(var1)(var3, var6);
                var5[1] = var6;
                var2.children = var5;
                var0 = var4.bind(var1)(var3, var2);
            case 143:
                return var0;
        }
    };
    var _closure1_slot11 = var5;
    var5 = function() {
        _fun69602: for (var _fun69602_ip = 0;;) switch (_fun69602_ip) {
            case 0:
                var0 = _closure1_slot8;
                var4 = undefined;
                var1 = var0.bind(var4)();
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 6;
                var0 = var6[var0];
                var0 = var3.bind(var4)(var0);
                var5 = var0.bind(var4)();
                var0 = {};
                var0.styles = var1;
                var3 = _closure1_slot0;
                var1 = 7;
                var1 = var6[var1];
                var3 = var3.bind(var4)(var1);
                var1 = var3.isThemeDark;
                var1 = var1.bind(var3)(var5);
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 10;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.unsafe_rawColors;
                if (var1) {
                    _fun69602_ip = 107;
                    continue _fun69602
                }
            case 99:
                var1 = var2.WHITE;
                _fun69602_ip = 113;
                continue _fun69602;
            case 107:
                var1 = var2.BLACK;
            case 113:
                var0.overlayColor = var1;
                return var0;
        }
    };
    var _closure1_slot12 = var5;
    var5 = 18;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/client_themes/native/ThemedGradient.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function arg0() {
        _fun69603: for (var _fun69603_ip = 0;;) switch (_fun69603_ip) {
            case 0:
                var3 = arg0;
                var6 = var3.overlayOpacity;
                var5 = undefined;
                if (!(var6 === var5)) {
                    _fun69603_ip = 25;
                    continue _fun69603
                }
            case 15:
                var6 = 0.7;
            case 25:
                var9 = var3.gradientOverride;
                var1 = null;
                var2 = Object.create(var1);
                var0 = 0;
                var2.overlayOpacity = var0;
                var2.gradientOverride = var0;
                var20 = {};
                var19 = var3;
                var18 = var2;
                var10 = copyDataProperties(var20, var19, var18);
                var2 = _closure1_slot12;
                var2 = var2.bind(var5)();
                var4 = var2.styles;
                var3 = var2.overlayColor;
                var2 = var10.withOverlay;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = 14;
                var7 = var12[var7];
                var14 = var11.bind(var5)(var7);
                var13 = var14.useStateFromStoresObject;
                var7 = _closure1_slot5;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = function() { // Environment: var7
                    var0 = {};
                    var1 = _closure1_slot5;
                    var1 = var1.gradientPreset;
                    var0.preset = var1;
                    return var0;
                };
                var7 = var13.bind(var14)(var8, var7);
                var15 = var7.preset;
                var8 = _closure1_slot1;
                var7 = 15;
                var7 = var12[var7];
                var7 = var8.bind(var5)(var7);
                var8 = var7.bind(var5)();
                var7 = 16;
                var7 = var12[var7];
                var11 = var11.bind(var5)(var7);
                var7 = var11.useCustomThemeDisplaySettings;
                var13 = var7.bind(var11)();
                var7 = var5 !== var13;
                if (!(var1 == var9)) {
                    _fun69603_ip = 206;
                    continue _fun69603
                }
            case 198:
                if (var8) {
                    _fun69603_ip = 206;
                    continue _fun69603
                }
            case 201:
                if (var7) {
                    _fun69603_ip = 206;
                    continue _fun69603
                }
            case 204:
                return var1;
            case 206:
                if (!(var1 != var9)) {
                    _fun69603_ip = 301;
                    continue _fun69603
                }
            case 210:
                if (!var7) {
                    _fun69603_ip = 257;
                    continue _fun69603
                }
            case 213:
                var11 = var9.type;
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var8 = 17;
                var8 = var14[var8];
                var8 = var12.bind(var5)(var8);
                var8 = var8.ClientThemeType;
                var8 = var8.CUSTOM_BACKGROUND_GRADIENT;
                if (!(var11 !== var8)) {
                    _fun69603_ip = 512;
                    continue _fun69603
                }
            case 257:
                var11 = var9.type;
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var8 = 17;
                var8 = var14[var8];
                var8 = var12.bind(var5)(var8);
                var8 = var8.ClientThemeType;
                var8 = var8.BACKGROUND_GRADIENT_PRESET;
                if (!(var11 !== var8)) {
                    _fun69603_ip = 453;
                    continue _fun69603
                }
            case 301:
                if (!var7) {
                    _fun69603_ip = 307;
                    continue _fun69603
                }
            case 304:
                if (var7) {
                    _fun69603_ip = 375;
                    continue _fun69603
                }
            case 307:
                var7 = var1 != var15;
                var1 = null;
                if (!var7) {
                    _fun69603_ip = 373;
                    continue _fun69603
                }
            case 316:
                var8 = _closure1_slot11;
                var12 = _closure1_slot6;
                var11 = _closure1_slot9;
                var7 = {};
                var20 = var7;
                var19 = var10;
                var14 = copyDataProperties(var20, var19);
                var14 = 'gradient';
                var7[var14] = var15;
                var20 = var12.bind(var5)(var11, var7);
                var21 = undefined;
                var19 = var2;
                var18 = var4;
                var17 = var3;
                var16 = var6;
                var1 = var21[var8](var20, var19, var18, var17, var16, var15);
            case 373:
                _fun69603_ip = 451;
                continue _fun69603;
            case 375:
                var8 = _closure1_slot11;
                var12 = _closure1_slot6;
                var11 = _closure1_slot13;
                var7 = {};
                var20 = var7;
                var19 = var10;
                var14 = copyDataProperties(var20, var19);
                var19 = var13.customTheme;
                var20 = var7;
                var14 = copyDataProperties(var20, var19);
                var14 = var13.baseTheme;
                var13 = 'theme';
                var7[var13] = var14;
                var20 = var12.bind(var5)(var11, var7);
                var21 = undefined;
                var19 = var2;
                var18 = var4;
                var17 = var3;
                var16 = var6;
                var1 = var21[var8](var20, var19, var18, var17, var16, var15);
            case 451:
                return var1;
            case 453:
                var7 = _closure1_slot11;
                var11 = _closure1_slot6;
                var8 = _closure1_slot9;
                var1 = {};
                var20 = var1;
                var19 = var10;
                var12 = copyDataProperties(var20, var19);
                var12 = 'gradient';
                var1[var12] = var9;
                var20 = var11.bind(var5)(var8, var1);
                var21 = undefined;
                var19 = var2;
                var18 = var4;
                var17 = var3;
                var16 = var6;
                var1 = var21[var7](var20, var19, var18, var17, var16, var15);
                return var1;
            case 512:
                var1 = _closure1_slot11;
                var8 = _closure1_slot6;
                var7 = _closure1_slot13;
                var0 = {};
                var20 = var0;
                var19 = var10;
                var10 = copyDataProperties(var20, var19);
                var19 = var9.customThemeSettings;
                var20 = var0;
                var10 = copyDataProperties(var20, var19);
                var10 = var9.theme;
                var9 = 'theme';
                var0[var9] = var10;
                var20 = var8.bind(var5)(var7, var0);
                var21 = undefined;
                var19 = var2;
                var18 = var4;
                var17 = var3;
                var16 = var6;
                var0 = var21[var1](var20, var19, var18, var17, var16, var15);
                return var0;
        }
    };
    var2.default = var5;
    var2.Gradient = var4;
    var2.validateColors = var3;
    var1 = function(arg0) { // Environment: var1
        _fun69605: for (var _fun69605_ip = 0;;) switch (_fun69605_ip) {
            case 0:
                var2 = arg0;
                var6 = var2.overlayOpacity;
                var5 = undefined;
                if (!(var6 === var5)) {
                    _fun69605_ip = 25;
                    continue _fun69605
                }
            case 15:
                var6 = 0.7;
            case 25:
                var9 = var2.customTheme;
                var0 = null;
                var1 = Object.create(var0);
                var0 = 0;
                var1.overlayOpacity = var0;
                var1.customTheme = var0;
                var15 = {};
                var14 = var2;
                var13 = var1;
                var0 = copyDataProperties(var15, var14, var13);
                var2 = _closure1_slot12;
                var2 = var2.bind(var5)();
                var13 = var2.styles;
                var12 = var2.overlayColor;
                var2 = _closure1_slot11;
                var8 = _closure1_slot6;
                var7 = _closure1_slot13;
                var1 = {};
                var15 = var1;
                var14 = var0;
                var10 = copyDataProperties(var15, var14);
                var14 = var9.customThemeSettings;
                var15 = var1;
                var10 = copyDataProperties(var15, var14);
                var10 = var9.theme;
                var9 = 'theme';
                var1[var9] = var10;
                var15 = var8.bind(var5)(var7, var1);
                var14 = var0.withOverlay;
                var16 = undefined;
                var11 = var6;
                var0 = var16[var2](var15, var14, var13, var12, var11, var10);
                return var0;
        }
    };
    var2.CustomThemedGradient = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3200, 33, 1297, 1464, 3237, 3197, 3232, 3231, 671, 4089, 3186, 1207, 632, 8706, 3236, 3202, 2]);