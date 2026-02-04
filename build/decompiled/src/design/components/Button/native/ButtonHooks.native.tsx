// design/components/Button/native/ButtonHooks.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var10 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var11;
    var7 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var5 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var2 = var3.useThemeContext;
        var2 = var2.bind(var3)();
        var5 = var2.primaryColor;
        var _closure2_slot1 = var5;
        var6 = var2.theme;
        var _closure2_slot2 = var6;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun37589: for (var _fun37589_ip = 0;;) switch (_fun37589_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun37589_ip = 735;
                        continue _fun37589
                    }
                case 16:
                    var2 = _closure2_slot0;
                    var1 = 'primary';
                    if (!(var1 !== var2)) {
                        _fun37589_ip = 562;
                        continue _fun37589
                    }
                case 31:
                    var1 = 'secondary';
                    if (!(var1 !== var2)) {
                        _fun37589_ip = 314;
                        continue _fun37589
                    }
                case 42:
                    var1 = 'tertiary';
                    if (!(var1 !== var2)) {
                        _fun37589_ip = 52;
                        continue _fun37589
                    }
                case 50:
                    return var0;
                case 52:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var8 = 6;
                    var1 = var1[var8];
                    var2 = undefined;
                    var6 = var3.bind(var2)(var1);
                    var3 = var6.isThemeLight;
                    var1 = _closure2_slot2;
                    var1 = var3.bind(var6)(var1);
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var9 = 5;
                    var3 = var3[var9];
                    var7 = var6.bind(var2)(var3);
                    var6 = var7.setColorOpacity;
                    if (var1) {
                        _fun37589_ip = 143;
                        continue _fun37589
                    }
                case 121:
                    var3 = 'white';
                    var1 = 0.1;
                    var10 = var6.bind(var7)(var3, var1);
                    _fun37589_ip = 163;
                    continue _fun37589;
                case 143:
                    var3 = _closure2_slot1;
                    var1 = 0.4;
                    var10 = var6.bind(var7)(var3, var1);
                case 163:
                    var1 = {};
                    var3 = new Array(2);
                    var3[0] = var10;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var8];
                    var8 = var7.bind(var2)(var6);
                    var7 = var8.isThemeLight;
                    var6 = _closure2_slot2;
                    var6 = var7.bind(var8)(var6);
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var9];
                    var9 = var8.bind(var2)(var7);
                    if (var6) {
                        _fun37589_ip = 253;
                        continue _fun37589
                    }
                case 225:
                    var8 = var9.setColorOpacity;
                    var7 = 'white';
                    var6 = 0.2;
                    var6 = var8.bind(var9)(var7, var6);
                    _fun37589_ip = 275;
                    continue _fun37589;
                case 253:
                    var8 = var9.darkenColor;
                    var7 = 0.3;
                    var6 = var8.bind(var9)(var10, var7);
                case 275:
                    var3[1] = var6;
                    var1.backgroundColor = var3;
                    var6 = _closure1_slot4;
                    var3 = new Array(2);
                    var3[0] = var6;
                    var4 = _closure1_slot4;
                    var3[1] = var4;
                    var1.borderColor = var3;
                    var1.color = var2;
                    return var1;
                case 314:
                    var1 = {};
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var8 = 6;
                    var3 = var2[var8];
                    var2 = undefined;
                    var7 = var6.bind(var2)(var3);
                    var6 = var7.isThemeLight;
                    var3 = _closure2_slot2;
                    var3 = var6.bind(var7)(var3);
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var9 = 5;
                    var6 = var6[var9];
                    var11 = var7.bind(var2)(var6);
                    var7 = var11.setColorOpacity;
                    var10 = 'white';
                    if (var3) {
                        _fun37589_ip = 407;
                        continue _fun37589
                    }
                case 389:
                    var3 = 0.24;
                    var6 = var7.bind(var11)(var10, var3);
                    _fun37589_ip = 423;
                    continue _fun37589;
                case 407:
                    var3 = 0.72;
                    var6 = var7.bind(var11)(var10, var3);
                case 423:
                    var3 = new Array(2);
                    var3[0] = var6;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var8];
                    var8 = var7.bind(var2)(var6);
                    var7 = var8.isThemeLight;
                    var6 = _closure2_slot2;
                    var6 = var7.bind(var8)(var6);
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var9];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.setColorOpacity;
                    if (var6) {
                        _fun37589_ip = 507;
                        continue _fun37589
                    }
                case 489:
                    var6 = 0.34;
                    var6 = var8.bind(var9)(var10, var6);
                    _fun37589_ip = 523;
                    continue _fun37589;
                case 507:
                    var7 = 0.62;
                    var6 = var8.bind(var9)(var10, var7);
                case 523:
                    var3[1] = var6;
                    var1.backgroundColor = var3;
                    var6 = _closure1_slot4;
                    var3 = new Array(2);
                    var3[0] = var6;
                    var4 = _closure1_slot4;
                    var3[1] = var4;
                    var1.borderColor = var3;
                    var1.color = var2;
                    return var1;
                case 562:
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 4;
                    var2 = var6[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.unsafe_rawColors;
                    var2 = var2.WHITE;
                    var3 = _closure1_slot0;
                    var1 = 5;
                    var7 = var6[var1];
                    var9 = var3.bind(var4)(var7);
                    var8 = var9.getContrastingColor;
                    var7 = _closure2_slot1;
                    var5 = {};
                    var5.base = var2;
                    var10 = var6[var1];
                    var10 = var3.bind(var4)(var10);
                    var10 = var10.WCAGContrastRatios;
                    var10 = var10.HighContrastText;
                    var5.contrastRatio = var10;
                    var5 = var8.bind(var9)(var7, var5);
                    var1 = var6[var1];
                    var4 = var3.bind(var4)(var1);
                    var3 = var4.darkenColor;
                    var1 = 0.5;
                    var4 = var3.bind(var4)(var5, var1);
                    var1 = {};
                    var3 = new Array(2);
                    var3[0] = var5;
                    var3[1] = var4;
                    var1.backgroundColor = var3;
                    var3 = new Array(2);
                    var3[0] = var5;
                    var3[1] = var4;
                    var1.borderColor = var3;
                    var1.color = var2;
                    return var1;
                case 735:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot12 = var7;
    var4 = function arg0() {
        _fun37590: for (var _fun37590_ip = 0;;) switch (_fun37590_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot12;
                var2 = undefined;
                var4 = var3.bind(var2)(var1);
                var0 = _closure1_slot8;
                var1 = var0.bind(var2)(var1);
                var0 = {};
                var3 = null;
                var5 = var3 == var4;
                if (var5) {
                    _fun37590_ip = 42;
                    continue _fun37590
                }
            case 37:
                var2 = var4.color;
            case 42:
                if (!(var3 != var2)) {
                    _fun37590_ip = 49;
                    continue _fun37590
                }
            case 46:
                var1 = var2;
            case 49:
                var0.color = var1;
                return var0;
        }
    };
    var _closure1_slot13 = var4;
    var3 = function arg0, arg1, arg2() {
        var5 = arg0;
        var11 = arg1;
        var10 = arg2;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var11;
        var _closure2_slot2 = var10;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var9 = 8;
        var1 = var8[var9];
        var6 = undefined;
        var2 = var7.bind(var6)(var1);
        var1 = var2.useAnimatedStyle;
        var0 = function() {
            _fun37592: for (var _fun37592_ip = 0;;) switch (_fun37592_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var0 = var1.get;
                    var1 = var0.bind(var1)();
                    var0 = 0;
                    var0 = var1 > var0;
                    var1 = 1;
                    if (!var0) {
                        _fun37592_ip = 62;
                        continue _fun37592
                    }
                case 28:
                    var3 = _closure2_slot1;
                    var0 = var3.get;
                    var2 = var0.bind(var3)();
                    var0 = _closure2_slot2;
                    var2 = var2 - var0;
                    var0 = var3.get;
                    var0 = var0.bind(var3)();
                    var1 = var2 / var0;
                case 62:
                    var0 = {};
                    var2 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 9;
                    var5 = var8[var3];
                    var3 = undefined;
                    var6 = var7.bind(var3)(var5);
                    var5 = var6.withSpring;
                    var9 = 8;
                    var9 = var8[var9];
                    var11 = var7.bind(var3)(var9);
                    var10 = var11.interpolate;
                    var9 = _closure2_slot0;
                    var4 = var9.get;
                    var9 = var4.bind(var9)();
                    var4 = [1];
                    var4[1] = var1;
                    var1 = [0, 1];
                    var4 = var10.bind(var11)(var9, var1, var4);
                    var1 = 10;
                    var1 = var8[var1];
                    var1 = var7.bind(var3)(var1);
                    var3 = var1.ON_PRESS_SPRING;
                    var1 = 'animate-always';
                    var1 = var5.bind(var6)(var4, var3, var1);
                    var2.scale = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0.transform = var1;
                    return var0;
            }
        };
        var4 = {};
        var4.width = var11;
        var4.scaleAmountInPx = var10;
        var10 = 9;
        var10 = var8[var10];
        var10 = var7.bind(var6)(var10);
        var10 = var10.withSpring;
        var4.withSpring = var10;
        var9 = var8[var9];
        var9 = var7.bind(var6)(var9);
        var9 = var9.interpolate;
        var4.interpolate = var9;
        var4.pressed = var5;
        var5 = 10;
        var5 = var8[var5];
        var5 = var7.bind(var6)(var5);
        var5 = var5.ON_PRESS_SPRING;
        var4.ON_PRESS_SPRING = var5;
        var0.__closure = var4;
        var4 = 17256006845494.0;
        var0.__workletHash = var4;
        var3 = _closure1_slot11;
        var0.__initData = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot14 = var3;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var5);
    var0 = 0;
    var6 = var11[var0];
    var5 = arg3;
    var0 = undefined;
    var5 = var5.bind(var0)(var6);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var11[var5];
    var5 = var10.bind(var0)(var5);
    var5 = var5.Platform;
    var8 = 'rgba(0,0,0,0.01)';
    var _closure1_slot4 = var8;
    var5 = 2;
    var6 = var11[var5];
    var13 = var10.bind(var0)(var6);
    var9 = var13.experimental_createToken;
    var6 = function() { // Environment: var1
        var0 = '#161CBB';
        return var0;
    };
    var6 = var9.bind(var13)(var6);
    var _closure1_slot5 = var6;
    var6 = var11[var5];
    var13 = var10.bind(var0)(var6);
    var9 = var13.experimental_createToken;
    var6 = function() { // Environment: var1
        var0 = '#1318A0';
        return var0;
    };
    var6 = var9.bind(var13)(var6);
    var _closure1_slot6 = var6;
    var6 = {};
    var9 = 4;
    var13 = var11[var9];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.CONTROL_PRIMARY_TEXT_DEFAULT;
    var6.primary = var13;
    var13 = var11[var9];
    var13 = var12.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.WHITE;
    var6['experimental_welcome-secondary'] = var13;
    var13 = var11[var9];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.CONTROL_SECONDARY_TEXT_DEFAULT;
    var6.secondary = var13;
    var13 = var11[var9];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.REDESIGN_BUTTON_TERTIARY_TEXT;
    var6.tertiary = var13;
    var13 = var11[var9];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT;
    var6.destructive = var13;
    var13 = var11[var9];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.CONTROL_CONNECTED_TEXT_DEFAULT;
    var6.active = var13;
    var13 = var11[var9];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT;
    var6['primary-overlay'] = var13;
    var13 = var11[var9];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT;
    var6['secondary-overlay'] = var13;
    var13 = var11[var9];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var6['experimental_premium-primary'] = var13;
    var9 = var11[var9];
    var9 = var12.bind(var0)(var9);
    var9 = var9.unsafe_rawColors;
    var9 = var9.BRAND_500;
    var6['experimental_premium-secondary'] = var9;
    var _closure1_slot7 = var6;
    var6 = function arg0() {
        var2 = _closure1_slot7;
        var1 = arg0;
        var2 = var2[var1];
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var3.bind(var0)(var1);
        var0 = var1.useToken;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var _closure1_slot8 = var6;
    var5 = var11[var5];
    var12 = var10.bind(var0)(var5);
    var9 = var12.createStyleProperties;
    var5 = function(arg0) { // Environment: var1
        _fun37596: for (var _fun37596_ip = 0;;) switch (_fun37596_ip) {
            case 0:
                var1 = arg0;
                var0 = 'primary';
                if (!(var0 !== var1)) {
                    _fun37596_ip = 798;
                    continue _fun37596
                }
            case 14:
                var0 = 'secondary';
                if (!(var0 !== var1)) {
                    _fun37596_ip = 678;
                    continue _fun37596
                }
            case 25:
                var0 = 'tertiary';
                if (!(var0 !== var1)) {
                    _fun37596_ip = 590;
                    continue _fun37596
                }
            case 36:
                var0 = 'destructive';
                if (!(var0 !== var1)) {
                    _fun37596_ip = 502;
                    continue _fun37596
                }
            case 49:
                var0 = 'active';
                if (!(var0 !== var1)) {
                    _fun37596_ip = 414;
                    continue _fun37596
                }
            case 60:
                var0 = 'experimental_premium-secondary';
                if (!(var0 !== var1)) {
                    _fun37596_ip = 326;
                    continue _fun37596
                }
            case 73:
                var0 = 'primary-overlay';
                if (!(var0 !== var1)) {
                    _fun37596_ip = 326;
                    continue _fun37596
                }
            case 86:
                var0 = 'secondary-overlay';
                if (!(var0 !== var1)) {
                    _fun37596_ip = 238;
                    continue _fun37596
                }
            case 99:
                var0 = 'experimental_welcome-secondary';
                if (!(var0 !== var1)) {
                    _fun37596_ip = 195;
                    continue _fun37596
                }
            case 109:
                var0 = 'experimental_premium-primary';
                if (!(var0 !== var1)) {
                    _fun37596_ip = 123;
                    continue _fun37596
                }
            case 119:
                var0 = undefined;
                return var0;
            case 123:
                var0 = {};
                var2 = _closure1_slot4;
                var0.backgroundInactive = var2;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 4;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.colors;
                var2 = var2.REDESIGN_BUTTON_PREMIUM_PRIMARY_PRESSED_BACKGROUND;
                var0.backgroundPressed = var2;
                var2 = _closure1_slot4;
                var0.borderInactive = var2;
                var1 = _closure1_slot4;
                var0.borderPressed = var1;
                return var0;
            case 195:
                var0 = {};
                var2 = _closure1_slot5;
                var0.backgroundInactive = var2;
                var2 = _closure1_slot6;
                var0.backgroundPressed = var2;
                var2 = _closure1_slot4;
                var0.borderInactive = var2;
                var1 = _closure1_slot4;
                var0.borderPressed = var1;
                return var0;
            case 238:
                var0 = {};
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 4;
                var6 = var5[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var6);
                var6 = var6.colors;
                var6 = var6.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
                var0.backgroundInactive = var6;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.colors;
                var2 = var2.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE;
                var0.backgroundPressed = var2;
                var2 = _closure1_slot4;
                var0.borderInactive = var2;
                var1 = _closure1_slot4;
                var0.borderPressed = var1;
                return var0;
            case 326:
                var0 = {};
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 4;
                var6 = var5[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var6);
                var6 = var6.colors;
                var6 = var6.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT;
                var0.backgroundInactive = var6;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.colors;
                var2 = var2.CONTROL_OVERLAY_PRIMARY_BACKGROUND_ACTIVE;
                var0.backgroundPressed = var2;
                var2 = _closure1_slot4;
                var0.borderInactive = var2;
                var1 = _closure1_slot4;
                var0.borderPressed = var1;
                return var0;
            case 414:
                var0 = {};
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 4;
                var6 = var5[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var6);
                var6 = var6.colors;
                var6 = var6.CONTROL_CONNECTED_BACKGROUND_DEFAULT;
                var0.backgroundInactive = var6;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.colors;
                var2 = var2.CONTROL_CONNECTED_BACKGROUND_ACTIVE;
                var0.backgroundPressed = var2;
                var2 = _closure1_slot4;
                var0.borderInactive = var2;
                var1 = _closure1_slot4;
                var0.borderPressed = var1;
                return var0;
            case 502:
                var0 = {};
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 4;
                var6 = var5[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var6);
                var6 = var6.colors;
                var6 = var6.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT;
                var0.backgroundInactive = var6;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.colors;
                var2 = var2.CONTROL_CRITICAL_PRIMARY_BACKGROUND_ACTIVE;
                var0.backgroundPressed = var2;
                var2 = _closure1_slot4;
                var0.borderInactive = var2;
                var1 = _closure1_slot4;
                var0.borderPressed = var1;
                return var0;
            case 590:
                var0 = {};
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 4;
                var6 = var5[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var6);
                var6 = var6.colors;
                var6 = var6.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
                var0.backgroundInactive = var6;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.colors;
                var2 = var2.REDESIGN_BUTTON_TERTIARY_PRESSED_BACKGROUND;
                var0.backgroundPressed = var2;
                var2 = _closure1_slot4;
                var0.borderInactive = var2;
                var1 = _closure1_slot4;
                var0.borderPressed = var1;
                return var0;
            case 678:
                var0 = {};
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 4;
                var5 = var4[var1];
                var2 = undefined;
                var5 = var3.bind(var2)(var5);
                var5 = var5.colors;
                var5 = var5.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
                var0.backgroundInactive = var5;
                var5 = var4[var1];
                var5 = var3.bind(var2)(var5);
                var5 = var5.colors;
                var5 = var5.CONTROL_SECONDARY_BACKGROUND_ACTIVE;
                var0.backgroundPressed = var5;
                var5 = var4[var1];
                var5 = var3.bind(var2)(var5);
                var5 = var5.colors;
                var5 = var5.CONTROL_SECONDARY_BORDER_DEFAULT;
                var0.borderInactive = var5;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var1 = var1.colors;
                var1 = var1.CONTROL_SECONDARY_BORDER_ACTIVE;
                var0.borderPressed = var1;
                return var0;
            case 798:
                var0 = {};
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 4;
                var6 = var5[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var6);
                var6 = var6.colors;
                var6 = var6.CONTROL_PRIMARY_BACKGROUND_DEFAULT;
                var0.backgroundInactive = var6;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.colors;
                var2 = var2.CONTROL_PRIMARY_BACKGROUND_ACTIVE;
                var0.backgroundPressed = var2;
                var2 = _closure1_slot4;
                var0.borderInactive = var2;
                var1 = _closure1_slot4;
                var0.borderPressed = var1;
                return var0;
        }
    };
    var5 = var9.bind(var12)(var5);
    var _closure1_slot9 = var5;
    var9 = {};
    var12 = 'function ButtonHooksNativeTsx1(){const{themedStyles,colors,interpolateColor,pressed}=this.__closure;var _themedStyles$backgro,_themedStyles,_themedStyles$borderC,_themedStyles2;const backgroundColor=(_themedStyles$backgro=(_themedStyles=themedStyles)===null||_themedStyles===void 0?void 0:_themedStyles.backgroundColor)!==null&&_themedStyles$backgro!==void 0?_themedStyles$backgro:[colors.backgroundInactive,colors.backgroundPressed];const borderColor=(_themedStyles$borderC=(_themedStyles2=themedStyles)===null||_themedStyles2===void 0?void 0:_themedStyles2.borderColor)!==null&&_themedStyles$borderC!==void 0?_themedStyles$borderC:[colors.borderInactive,colors.borderPressed];return{backgroundColor:interpolateColor(pressed.get(),[0,1],backgroundColor),borderColor:interpolateColor(pressed.get(),[0,1],borderColor)};}';
    var9.code = var12;
    var _closure1_slot10 = var9;
    var9 = {};
    var12 = "function ButtonHooksNativeTsx2(){const{width,scaleAmountInPx,withSpring,interpolate,pressed,ON_PRESS_SPRING}=this.__closure;const scale=width.get()>0?(width.get()-scaleAmountInPx)/width.get():1;return{transform:[{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING,'animate-always')}]};}";
    var9.code = var12;
    var _closure1_slot11 = var9;
    var9 = 15;
    var9 = var11[var9];
    var11 = var10.bind(var0)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'design/components/Button/native/ButtonHooks.native.tsx';
    var9 = var10.bind(var11)(var9);
    var2.SAFE_TRANSPARENT_COLOR = var8;
    var2.useProfileThemedButtonStyles = var7;
    var2.useForegroundColor = var6;
    var2.useButtonColorStyles = var5;
    var2.useButtonTextColorStyles = var4;
    var4 = function arg0() {
        var0 = {};
        var3 = _closure1_slot13;
        var2 = undefined;
        var1 = arg0;
        var1 = var3.bind(var2)(var1);
        var1 = var1.color;
        var0.tintColor = var1;
        return var0;
    };
    var2.useIconTintStyles = var4;
    var4 = function arg0() {
        var0 = {};
        var3 = _closure1_slot9;
        var2 = undefined;
        var1 = arg0;
        var1 = var3.bind(var2)(var1);
        var1 = var1.borderInactive;
        var0.borderColor = var1;
        return var0;
    };
    var2.useGradientPillStyles = var4;
    var4 = function arg0, arg1() {
        var2 = arg0;
        var5 = arg1;
        var _closure2_slot0 = var5;
        var1 = _closure1_slot12;
        var8 = undefined;
        var11 = var1.bind(var8)(var2);
        var _closure2_slot1 = var11;
        var1 = _closure1_slot9;
        var10 = var1.bind(var8)(var2);
        var _closure2_slot2 = var10;
        var7 = _closure1_slot0;
        var9 = _closure1_slot2;
        var6 = 8;
        var1 = var9[var6];
        var2 = var7.bind(var8)(var1);
        var1 = var2.useAnimatedStyle;
        var0 = function() {
            _fun37600: for (var _fun37600_ip = 0;;) switch (_fun37600_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var0 = null;
                    var1 = var0 == var1;
                    var4 = undefined;
                    var11 = undefined;
                    if (var1) {
                        _fun37600_ip = 29;
                        continue _fun37600
                    }
                case 20:
                    var1 = _closure2_slot1;
                    var11 = var1.backgroundColor;
                case 29:
                    if (!(var0 == var11)) {
                        _fun37600_ip = 64;
                        continue _fun37600
                    }
                case 33:
                    var3 = _closure2_slot2;
                    var5 = var3.backgroundInactive;
                    var1 = new Array(2);
                    var1[0] = var5;
                    var3 = var3.backgroundPressed;
                    var1[1] = var3;
                    var11 = var1;
                case 64:
                    var1 = _closure2_slot1;
                    var1 = var0 == var1;
                    var5 = undefined;
                    if (var1) {
                        _fun37600_ip = 87;
                        continue _fun37600
                    }
                case 77:
                    var1 = _closure2_slot1;
                    var5 = var1.borderColor;
                case 87:
                    if (!(var0 == var5)) {
                        _fun37600_ip = 122;
                        continue _fun37600
                    }
                case 91:
                    var1 = _closure2_slot2;
                    var3 = var1.borderInactive;
                    var0 = new Array(2);
                    var0[0] = var3;
                    var1 = var1.borderPressed;
                    var0[1] = var1;
                    var5 = var0;
                case 122:
                    var0 = {};
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 8;
                    var7 = var6[var1];
                    var10 = var3.bind(var4)(var7);
                    var9 = var10.interpolateColor;
                    var2 = _closure2_slot0;
                    var7 = var2.get;
                    var8 = var7.bind(var2)();
                    var7 = [0, 1];
                    var7 = var9.bind(var10)(var8, var7, var11);
                    var0.backgroundColor = var7;
                    var1 = var6[var1];
                    var4 = var3.bind(var4)(var1);
                    var3 = var4.interpolateColor;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = [0, 1];
                    var1 = var3.bind(var4)(var2, var1, var5);
                    var0.borderColor = var1;
                    return var0;
            }
        };
        var4 = {};
        var4.themedStyles = var11;
        var4.colors = var10;
        var6 = var9[var6];
        var6 = var7.bind(var8)(var6);
        var6 = var6.interpolateColor;
        var4.interpolateColor = var6;
        var4.pressed = var5;
        var0.__closure = var4;
        var4 = 2383933325137.0;
        var0.__workletHash = var4;
        var3 = _closure1_slot10;
        var0.__initData = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.useButtonPillStyles = var4;
    var2.useButtonScaleStyles = var3;
    var3 = function arg0() {
        _fun37601: for (var _fun37601_ip = 0;;) switch (_fun37601_ip) {
            case 0:
                var0 = arg0;
                var5 = arguments[1];
                var10 = arguments[2];
                var8 = arguments[3];
                var7 = arguments[4];
                var4 = undefined;
                if (!(var5 === var4)) {
                    _fun37601_ip = 26;
                    continue _fun37601
                }
            case 23:
                var5 = 8;
            case 26:
                var _closure2_slot0 = var10;
                var _closure2_slot1 = var8;
                var _closure2_slot2 = var7;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var11 = 8;
                var2 = var2[var11];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useSharedValue;
                var9 = 0;
                var3 = var2.bind(var3)(var9);
                var2 = null;
                if (!(var2 != var0)) {
                    _fun37601_ip = 91;
                    continue _fun37601
                }
            case 88:
                var3 = var0;
            case 91:
                _closure2_slot3 = var3;
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var11];
                var2 = var2.bind(var4)(var0);
                var0 = var2.useSharedValue;
                var2 = var0.bind(var2)(var9);
                _closure2_slot4 = var2;
                var0 = {};
                var12 = _closure1_slot3;
                var11 = var12.useCallback;
                var9 = new Array(2);
                var9[0] = var3;
                var9[1] = var8;
                var8 = function(arg0) { // Environment: var6
                    _fun37602: for (var _fun37602_ip = 0;;) switch (_fun37602_ip) {
                        case 0:
                            var3 = _closure2_slot3;
                            var2 = var3.set;
                            var1 = 1;
                            var1 = var2.bind(var3)(var1);
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun37602_ip = 44;
                                continue _fun37602
                            }
                        case 30:
                            var2 = _closure2_slot1;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var1)(var0);
                        case 44:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8 = var11.bind(var12)(var8, var9);
                var0.onPressIn = var8;
                var11 = _closure1_slot3;
                var9 = var11.useCallback;
                var8 = new Array(2);
                var8[0] = var3;
                var8[1] = var7;
                var7 = function(arg0) { // Environment: var6
                    _fun37603: for (var _fun37603_ip = 0;;) switch (_fun37603_ip) {
                        case 0:
                            var3 = _closure2_slot3;
                            var2 = var3.set;
                            var1 = 0;
                            var1 = var2.bind(var3)(var1);
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun37603_ip = 43;
                                continue _fun37603
                            }
                        case 29:
                            var2 = _closure2_slot2;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var1)(var0);
                        case 43:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = var9.bind(var11)(var7, var8);
                var0.onPressOut = var7;
                var9 = _closure1_slot3;
                var8 = var9.useCallback;
                var7 = new Array(2);
                var7[0] = var2;
                var7[1] = var10;
                var6 = function(arg0) { // Environment: var6
                    _fun37604: for (var _fun37604_ip = 0;;) switch (_fun37604_ip) {
                        case 0:
                            var2 = arg0;
                            var4 = _closure2_slot4;
                            var3 = var4.set;
                            var1 = var2.nativeEvent;
                            var1 = var1.layout;
                            var1 = var1.width;
                            var1 = var3.bind(var4)(var1);
                            var3 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun37604_ip = 58;
                                continue _fun37604
                            }
                        case 47:
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 58:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var8.bind(var9)(var6, var7);
                var0.onLayout = var6;
                var1 = _closure1_slot14;
                var1 = var1.bind(var4)(var3, var2, var5);
                var0.style = var1;
                return var0;
        }
    };
    var2.useButtonPressAnimationProps = var3;
    var1 = function(arg0) { // Environment: var1
        _fun37605: for (var _fun37605_ip = 0;;) switch (_fun37605_ip) {
            case 0:
                var7 = arg0;
                var6 = arguments[1];
                var5 = arguments[2];
                var _closure2_slot0 = var7;
                var4 = undefined;
                if (!(var6 === var4)) {
                    _fun37605_ip = 23;
                    continue _fun37605
                }
            case 21:
                var6 = false;
            case 23:
                var _closure2_slot1 = var6;
                if (!(var5 === var4)) {
                    _fun37605_ip = 60;
                    continue _fun37605
                }
            case 31:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 11;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var5 = var1.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
            case 60:
                var _closure2_slot2 = var5;
                var _closure2_slot3 = var4;
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 12;
                var2 = var8[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useFontScale;
                var4 = var2.bind(var3)();
                _closure2_slot3 = var4;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(4);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var5;
                var1[3] = var4;
                var0 = function() { // Environment: var0
                    _fun37606: for (var _fun37606_ip = 0;;) switch (_fun37606_ip) {
                        case 0:
                            var5 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var3 = 13;
                            var1 = var0[var3];
                            var6 = undefined;
                            var4 = var5.bind(var6)(var1);
                            var1 = var4.getIconSize;
                            var7 = 11;
                            var0 = var0[var7];
                            var0 = var5.bind(var6)(var0);
                            var0 = var0.MEDIUM_BUTTON_ICON_SIZE;
                            var4 = var1.bind(var4)(var0);
                            var5 = _closure2_slot0;
                            var1 = 'sm';
                            if (!(var1 !== var5)) {
                                _fun37606_ip = 122;
                                continue _fun37606
                            }
                        case 69:
                            var1 = 'lg';
                            if (!(var1 === var5)) {
                                _fun37606_ip = 165;
                                continue _fun37606
                            }
                        case 77:
                            var9 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var5 = var1[var3];
                            var8 = var9.bind(var6)(var5);
                            var5 = var8.getIconSize;
                            var1 = var1[var7];
                            var1 = var9.bind(var6)(var1);
                            var1 = var1.LARGE_BUTTON_ICON_SIZE;
                            var4 = var5.bind(var8)(var1);
                            _fun37606_ip = 165;
                            continue _fun37606;
                        case 122:
                            var8 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var3 = var1[var3];
                            var5 = var8.bind(var6)(var3);
                            var3 = var5.getIconSize;
                            var1 = var1[var7];
                            var1 = var8.bind(var6)(var1);
                            var1 = var1.SMALL_BUTTON_ICON_SIZE;
                            var4 = var3.bind(var5)(var1);
                        case 165:
                            var3 = _closure2_slot1;
                            var1 = var4;
                            if (!var3) {
                                _fun37606_ip = 319;
                                continue _fun37606
                            }
                        case 178:
                            var5 = _closure2_slot3;
                            var3 = 1;
                            var1 = var4;
                            if (!(var5 > var3)) {
                                _fun37606_ip = 319;
                                continue _fun37606
                            }
                        case 195:
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var3 = 14;
                            var3 = var2[var3];
                            var3 = var5.bind(var6)(var3);
                            var3 = var3.TextStyleSheet;
                            var2 = var2[var7];
                            var6 = var5.bind(var6)(var2);
                            var5 = var6.getButtonDefaultTextVariant;
                            var2 = _closure2_slot0;
                            var2 = var5.bind(var6)(var2);
                            var2 = var3[var2];
                            var5 = var2.fontSize;
                            var2 = null;
                            var1 = var4;
                            if (!(var2 != var1)) {
                                _fun37606_ip = 319;
                                continue _fun37606
                            }
                        case 264:
                            var1 = var4;
                            if (!(var2 != var5)) {
                                _fun37606_ip = 319;
                                continue _fun37606
                            }
                        case 271:
                            var2 = global;
                            var7 = var2.Math;
                            var6 = var7.min;
                            var3 = _closure2_slot3;
                            var0 = _closure2_slot2;
                            var0 = var6.bind(var7)(var3, var0);
                            var3 = var2.Math;
                            var2 = var3.max;
                            var0 = var5 * var0;
                            var1 = var2.bind(var3)(var4, var0);
                        case 319:
                            var0 = {};
                            var0.width = var1;
                            var0.height = var1;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useIconSizeStyles = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1297, 3159, 671, 3208, 3206, 3151, 3720, 4081, 4087, 4088, 4090, 4086, 3941, 2]);