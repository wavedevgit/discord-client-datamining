// design/components/Card/native/Card.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun44575: for (var _fun44575_ip = 0;;) switch (_fun44575_ip) {
            case 0:
                var1 = arg0;
                var0 = 'primary';
                if (!(var0 !== var1)) {
                    _fun44575_ip = 102;
                    continue _fun44575
                }
            case 11:
                var0 = 'secondary';
                if (!(var0 !== var1)) {
                    _fun44575_ip = 69;
                    continue _fun44575
                }
            case 19:
                var0 = 'transparent';
                if (!(var0 !== var1)) {
                    _fun44575_ip = 31;
                    continue _fun44575
                }
            case 27:
                var0 = undefined;
                return var0;
            case 31:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.unsafe_rawColors;
                var0 = var0.TRANSPARENT;
                return var0;
            case 69:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.CARD_SECONDARY_BG;
                return var0;
            case 102:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.CARD_PRIMARY_BG;
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var1 = function arg0() {
        _fun44576: for (var _fun44576_ip = 0;;) switch (_fun44576_ip) {
            case 0:
                var4 = arg0;
                var8 = var4.start;
                var3 = undefined;
                if (!(var8 === var3)) {
                    _fun44576_ip = 16;
                    continue _fun44576
                }
            case 14:
                var8 = true;
            case 16:
                var7 = var4.end;
                if (!(var7 === var3)) {
                    _fun44576_ip = 27;
                    continue _fun44576
                }
            case 25:
                var7 = true;
            case 27:
                var6 = var4.shadow;
                if (!(var6 === var3)) {
                    _fun44576_ip = 41;
                    continue _fun44576
                }
            case 37:
                var6 = 'none';
            case 41:
                var5 = var4.border;
                if (!(var5 === var3)) {
                    _fun44576_ip = 57;
                    continue _fun44576
                }
            case 51:
                var5 = 'faint';
            case 57:
                var2 = var4.variant;
                if (!(var2 === var3)) {
                    _fun44576_ip = 70;
                    continue _fun44576
                }
            case 66:
                var2 = 'primary';
            case 70:
                var1 = {
                    'start': 0,
                    'end': 0,
                    'shadow': 0,
                    'border': 0,
                    'variant': 0
                };
                var9 = null;
                var16 = var1;
                var15 = null;
                var0 = silentSetPrototypeOf(var16, var15);
                var16 = {};
                var15 = var4;
                var14 = var1;
                var4 = copyDataProperties(var16, var15, var14);
                var1 = _closure1_slot10;
                var17 = undefined;
                var16 = var8;
                var15 = var7;
                var14 = var2;
                var13 = var6;
                var12 = var5;
                var1 = var17[var1](var16, var15, var14, var13, var12, var11);
                var5 = var1.spacing;
                var6 = new Array(3);
                var6[0] = var5;
                var5 = var4.style;
                var6[1] = var5;
                var1 = var1.card;
                var6[2] = var1;
                var1 = 'onPress';
                var1 = var1 in var4;
                var5 = var2;
                if (!var1) {
                    _fun44576_ip = 190;
                    continue _fun44576
                }
            case 181:
                var1 = var4.onPress;
                if (!(var9 == var1)) {
                    _fun44576_ip = 227;
                    continue _fun44576
                }
            case 190:
                var10 = _closure1_slot7;
                var2 = _closure1_slot6;
                var1 = {};
                var16 = var1;
                var15 = var4;
                var11 = copyDataProperties(var16, var15);
                var11 = 'style';
                var1[var11] = var6;
                var1 = var10.bind(var3)(var2, var1);
                return var1;
            case 227:
                var10 = var4.accessibilityRole;
                var2 = _closure1_slot4;
                var1 = _closure1_slot3;
                var4 = var2.bind(var3)(var4, var1);
                var2 = _closure1_slot7;
                var1 = _closure1_slot13;
                var0 = {};
                var11 = var9 != var10;
                var9 = 'button';
                if (!var11) {
                    _fun44576_ip = 270;
                    continue _fun44576
                }
            case 267:
                var9 = var10;
            case 270:
                var0.accessibilityRole = var9;
                var16 = var0;
                var15 = var4;
                var4 = copyDataProperties(var16, var15);
                var4 = 'start';
                var0[var4] = var8;
                var4 = 'end';
                var0[var4] = var7;
                var4 = 'style';
                var0[var4] = var6;
                var4 = 'variant';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var0 = function arg0() {
        _fun44577: for (var _fun44577_ip = 0;;) switch (_fun44577_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 8;
                var0 = var2[var0];
                var2 = undefined;
                var4 = var4.bind(var2)(var0);
                var0 = var4.isAndroid;
                var0 = var0.bind(var4)();
                if (var0) {
                    _fun44577_ip = 55;
                    continue _fun44577
                }
            case 43:
                var0 = function arg0() {
                    var6 = arg0;
                    var5 = var6.children;
                    var7 = var6.style;
                    var4 = var6.variant;
                    var8 = var6.onPressIn;
                    var _closure3_slot0 = var8;
                    var2 = var6.onPressOut;
                    var _closure3_slot1 = var2;
                    var0 = var6.start;
                    var0 = var6.end;
                    var3 = {
                        'children': 0,
                        'style': 0,
                        'variant': 0,
                        'onPressIn': 0,
                        'onPressOut': 0,
                        'start': 0,
                        'end': 0
                    };
                    var19 = null;
                    var20 = var3;
                    var0 = silentSetPrototypeOf(var20, var19);
                    var11 = 0;
                    var20 = {};
                    var19 = var6;
                    var18 = var3;
                    var6 = copyDataProperties(var20, var19, var18);
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var16 = 4;
                    var9 = var13[var16];
                    var3 = undefined;
                    var10 = var12.bind(var3)(var9);
                    var9 = var10.useSharedValue;
                    var15 = var9.bind(var10)(var11);
                    var _closure3_slot2 = var15;
                    var11 = _closure1_slot5;
                    var10 = var11.useCallback;
                    var9 = new Array(2);
                    var9[0] = var15;
                    var9[1] = var8;
                    var8 = function(arg0) { // Environment: var1
                        _fun44581: for (var _fun44581_ip = 0;;) switch (_fun44581_ip) {
                            case 0:
                                var3 = _closure3_slot2;
                                var2 = var3.set;
                                var1 = 1;
                                var1 = var2.bind(var3)(var1);
                                var2 = _closure3_slot0;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun44581_ip = 44;
                                    continue _fun44581
                                }
                            case 30:
                                var2 = _closure3_slot0;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var2.bind(var1)(var0);
                            case 44:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var9 = var10.bind(var11)(var8, var9);
                    var11 = _closure1_slot5;
                    var10 = var11.useCallback;
                    var8 = new Array(2);
                    var8[0] = var15;
                    var8[1] = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun44582: for (var _fun44582_ip = 0;;) switch (_fun44582_ip) {
                            case 0:
                                var3 = _closure3_slot2;
                                var2 = var3.set;
                                var1 = 0;
                                var1 = var2.bind(var3)(var1);
                                var2 = _closure3_slot1;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun44582_ip = 43;
                                    continue _fun44582
                                }
                            case 29:
                                var2 = _closure3_slot1;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var2.bind(var1)(var0);
                            case 43:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var8 = var10.bind(var11)(var2, var8);
                    var2 = _closure1_slot9;
                    var2 = var2.bind(var3)(var4);
                    var14 = var2.backgroundColor;
                    var _closure3_slot3 = var14;
                    var11 = var2.backgroundColorPressed;
                    var _closure3_slot4 = var11;
                    var2 = var13[var16];
                    var4 = var12.bind(var3)(var2);
                    var2 = var4.useAnimatedStyle;
                    var1 = function() {
                        var0 = {};
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 9;
                        var1 = var7[var1];
                        var2 = undefined;
                        var5 = var6.bind(var2)(var1);
                        var4 = var5.withSpring;
                        var1 = 4;
                        var1 = var7[var1];
                        var10 = var6.bind(var2)(var1);
                        var9 = var10.interpolateColor;
                        var8 = _closure3_slot2;
                        var3 = var8.get;
                        var8 = var3.bind(var8)();
                        var11 = _closure3_slot3;
                        var3 = new Array(2);
                        var3[0] = var11;
                        var1 = _closure3_slot4;
                        var3[1] = var1;
                        var1 = [0, 1];
                        var3 = var9.bind(var10)(var8, var1, var3);
                        var1 = 10;
                        var1 = var7[var1];
                        var1 = var6.bind(var2)(var1);
                        var2 = var1.ON_PRESS_SPRING;
                        var1 = 'animate-always';
                        var1 = var4.bind(var5)(var3, var2, var1);
                        var0.backgroundColor = var1;
                        return var0;
                    };
                    var10 = {};
                    var17 = 9;
                    var17 = var13[var17];
                    var17 = var12.bind(var3)(var17);
                    var17 = var17.withSpring;
                    var10.withSpring = var17;
                    var16 = var13[var16];
                    var16 = var12.bind(var3)(var16);
                    var16 = var16.interpolateColor;
                    var10.interpolateColor = var16;
                    var10.pressed = var15;
                    var10.backgroundColor = var14;
                    var10.backgroundColorPressed = var11;
                    var11 = 10;
                    var11 = var13[var11];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.ON_PRESS_SPRING;
                    var10.ON_PRESS_SPRING = var11;
                    var1.__closure = var10;
                    var10 = 14943431549291.0;
                    var1.__workletHash = var10;
                    var10 = _closure1_slot11;
                    var1.__initData = var10;
                    var4 = var2.bind(var4)(var1);
                    var2 = _closure1_slot7;
                    var1 = _closure1_slot8;
                    var0 = {};
                    var20 = var0;
                    var19 = var6;
                    var6 = copyDataProperties(var20, var19);
                    var6 = 'onPressIn';
                    var0[var6] = var9;
                    var6 = 'onPressOut';
                    var0[var6] = var8;
                    var6 = new Array(2);
                    var6[0] = var7;
                    var6[1] = var4;
                    var4 = 'style';
                    var0[var4] = var6;
                    var6 = 130;
                    var4 = 'unstable_pressDelay';
                    var0[var4] = var6;
                    var4 = 'children';
                    var0[var4] = var5;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0 = var0.bind(var2)(var3);
                _fun44577_ip = 65;
                continue _fun44577;
            case 55:
                var1 = function arg0() {
                    var3 = arg0;
                    var5 = var3.children;
                    var8 = var3.start;
                    var _closure3_slot0 = var8;
                    var7 = var3.end;
                    var _closure3_slot1 = var7;
                    var2 = {
                        'children': 0,
                        'start': 0,
                        'end': 0
                    };
                    var10 = null;
                    var11 = var2;
                    var0 = silentSetPrototypeOf(var11, var10);
                    var11 = {};
                    var10 = var3;
                    var9 = var2;
                    var4 = copyDataProperties(var11, var10, var9);
                    var6 = _closure1_slot5;
                    var3 = var6.useMemo;
                    var2 = new Array(2);
                    var2[0] = var8;
                    var2[1] = var7;
                    var1 = function() { // Environment: var1
                        _fun44579: for (var _fun44579_ip = 0;;) switch (_fun44579_ip) {
                            case 0:
                                var0 = {};
                                var2 = _closure3_slot0;
                                if (var2) {
                                    _fun44579_ip = 21;
                                    continue _fun44579
                                }
                            case 12:
                                var2 = _closure3_slot1;
                                var1 = 0;
                                if (!var2) {
                                    _fun44579_ip = 57;
                                    continue _fun44579
                                }
                            case 21:
                                var4 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var2 = 5;
                                var3 = var3[var2];
                                var2 = undefined;
                                var2 = var4.bind(var2)(var3);
                                var2 = var2.radii;
                                var1 = var2.lg;
                            case 57:
                                var0.cornerRadius = var1;
                                return var0;
                        }
                    };
                    var6 = var3.bind(var6)(var1, var2);
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 11;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.AnimatedPressableHighlight;
                    var0 = {};
                    var0.androidRippleConfig = var6;
                    var11 = var0;
                    var10 = var4;
                    var4 = copyDataProperties(var11, var10);
                    var4 = 'children';
                    var0[var4] = var5;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var3);
            case 65:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = ['accessibilityRole'];
    var _closure1_slot3 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var8 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var8);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.View;
    var _closure1_slot6 = var8;
    var8 = var3.Pressable;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var7.bind(var0)(var3);
    var3 = var7.createAnimatedComponent;
    var3 = var3.bind(var7)(var8);
    var _closure1_slot8 = var3;
    var3 = 7;
    var7 = var5[var3];
    var9 = var4.bind(var0)(var7);
    var8 = var9.createStyleProperties;
    var7 = function(arg0) { // Environment: var6
        _fun44584: for (var _fun44584_ip = 0;;) switch (_fun44584_ip) {
            case 0:
                var5 = arg0;
                var1 = _closure1_slot12;
                var4 = undefined;
                var2 = var1.bind(var4)(var5);
                var1 = 'primary';
                if (!(var1 !== var5)) {
                    _fun44584_ip = 104;
                    continue _fun44584
                }
            case 25:
                var1 = 'secondary';
                if (!(var1 !== var5)) {
                    _fun44584_ip = 76;
                    continue _fun44584
                }
            case 33:
                var3 = 'transparent';
                var1 = undefined;
                if (!(var3 === var5)) {
                    _fun44584_ip = 130;
                    continue _fun44584
                }
            case 43:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 5;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.unsafe_rawColors;
                var1 = var3.TRANSPARENT;
                _fun44584_ip = 130;
                continue _fun44584;
            case 76:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 6;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var1 = var3.CARD_SECONDARY_PRESSED_BG;
                _fun44584_ip = 130;
                continue _fun44584;
            case 104:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 6;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var1 = var0.CARD_PRIMARY_PRESSED_BG;
            case 130:
                var0 = {};
                var0.backgroundColor = var2;
                var0.backgroundColorPressed = var1;
                return var0;
        }
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot9 = var7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = function(arg0, arg1, arg2, arg3, arg4) { // Environment: var6
        _fun44585: for (var _fun44585_ip = 0;;) switch (_fun44585_ip) {
            case 0:
                var7 = arg0;
                var8 = arg1;
                var5 = arg4;
                var1 = _closure1_slot12;
                var9 = undefined;
                var0 = arg2;
                var3 = var1.bind(var9)(var0);
                var1 = null;
                var2 = 'none';
                var0 = null;
                if (!(var2 !== var5)) {
                    _fun44585_ip = 170;
                    continue _fun44585
                }
            case 41:
                var6 = 'subtle';
                if (!(var6 !== var5)) {
                    _fun44585_ip = 139;
                    continue _fun44585
                }
            case 51:
                var6 = 'strong';
                if (!(var6 !== var5)) {
                    _fun44585_ip = 106;
                    continue _fun44585
                }
            case 59:
                var6 = 'faint';
                if (!(var6 !== var5)) {
                    _fun44585_ip = 73;
                    continue _fun44585
                }
            case 69:
                var0 = undefined;
                _fun44585_ip = 170;
                continue _fun44585;
            case 73:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 5;
                var6 = var11[var6];
                var6 = var10.bind(var9)(var6);
                var6 = var6.colors;
                var0 = var6.BORDER_MUTED;
                _fun44585_ip = 170;
                continue _fun44585;
            case 106:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 5;
                var6 = var11[var6];
                var6 = var10.bind(var9)(var6);
                var6 = var6.colors;
                var0 = var6.BORDER_STRONG;
                _fun44585_ip = 170;
                continue _fun44585;
            case 139:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 5;
                var6 = var11[var6];
                var6 = var10.bind(var9)(var6);
                var6 = var6.colors;
                var0 = var6.BORDER_SUBTLE;
            case 170:
                var6 = var3;
                if (!(var1 != var0)) {
                    _fun44585_ip = 180;
                    continue _fun44585
                }
            case 177:
                var6 = var0;
            case 180:
                var0 = {};
                var1 = {};
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var10 = 6;
                var10 = var12[var10];
                var12 = var11.bind(var9)(var10);
                var11 = var12.createCardShadowToken;
                var10 = arg3;
                var14 = var11.bind(var12)(var10);
                var15 = var1;
                var10 = copyDataProperties(var15, var14);
                var11 = undefined;
                if (!var7) {
                    _fun44585_ip = 261;
                    continue _fun44585
                }
            case 230:
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var10 = 5;
                var10 = var13[var10];
                var10 = var12.bind(var9)(var10);
                var10 = var10.radii;
                var11 = var10.lg;
            case 261:
                var10 = 'borderTopStartRadius';
                var1[var10] = var11;
                var10 = undefined;
                if (!var7) {
                    _fun44585_ip = 306;
                    continue _fun44585
                }
            case 275:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var7 = 5;
                var7 = var12[var7];
                var7 = var11.bind(var9)(var7);
                var7 = var7.radii;
                var10 = var7.lg;
            case 306:
                var7 = 'borderTopEndRadius';
                var1[var7] = var10;
                var10 = undefined;
                if (!var8) {
                    _fun44585_ip = 351;
                    continue _fun44585
                }
            case 320:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var7 = 5;
                var7 = var12[var7];
                var7 = var11.bind(var9)(var7);
                var7 = var7.radii;
                var10 = var7.lg;
            case 351:
                var7 = 'borderBottomStartRadius';
                var1[var7] = var10;
                var7 = undefined;
                if (!var8) {
                    _fun44585_ip = 396;
                    continue _fun44585
                }
            case 365:
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var4 = 5;
                var4 = var10[var4];
                var4 = var8.bind(var9)(var4);
                var4 = var4.radii;
                var7 = var4.lg;
            case 396:
                var4 = 'borderBottomEndRadius';
                var1[var4] = var7;
                var4 = 'borderColor';
                var1[var4] = var6;
                var4 = 0;
                if (!(var2 !== var5)) {
                    _fun44585_ip = 423;
                    continue _fun44585
                }
            case 420:
                var4 = 1;
            case 423:
                var2 = 'borderWidth';
                var1[var2] = var4;
                var2 = 'backgroundColor';
                var1[var2] = var3;
                var0.card = var1;
                var1 = {};
                var2 = 16;
                var1.padding = var2;
                var0.spacing = var1;
                return var0;
        }
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot10 = var3;
    var3 = {};
    var7 = "function CardNativeTsx1(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;const pressedColor=withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always');return{backgroundColor:pressedColor};}";
    var3.code = var7;
    var _closure1_slot11 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Card/native/Card.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.Card = var1;
    var2.InternalCard = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 27, 33, 3722, 671, 4874, 1297, 478, 4082, 4088, 4904, 2]);