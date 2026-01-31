// uikit-native/Button.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var11 = require;
    var16 = metroImportDefault;
    var2 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var12;
    var0 = function(arg0) { // Original name: getButtonColorsToTextStyles, environment: var10
        var1 = arg0;
        var0 = {};
        var3 = _closure1_slot13;
        var4 = var3.BRAND;
        var3 = var1.textBrand;
        var0[var4] = var3;
        var3 = _closure1_slot13;
        var4 = var3.RED;
        var3 = var1.textRed;
        var0[var4] = var3;
        var3 = _closure1_slot13;
        var4 = var3.GREEN;
        var3 = var1.textGreen;
        var0[var4] = var3;
        var3 = _closure1_slot13;
        var4 = var3.PRIMARY;
        var3 = var1.textPrimary;
        var0[var4] = var3;
        var3 = _closure1_slot13;
        var4 = var3.TRANSPARENT;
        var3 = var1.textTransparent;
        var0[var4] = var3;
        var3 = _closure1_slot13;
        var4 = var3.GREY;
        var3 = var1.textGrey;
        var0[var4] = var3;
        var3 = _closure1_slot13;
        var4 = var3.LIGHTGREY;
        var3 = var1.textLightgrey;
        var0[var4] = var3;
        var3 = _closure1_slot13;
        var4 = var3.WHITE;
        var3 = var1.textWhite;
        var0[var4] = var3;
        var2 = _closure1_slot13;
        var2 = var2.LINK;
        var1 = var1.textLink;
        var0[var2] = var1;
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function(arg0) { // Original name: getButtonSizesToTextStyles, environment: var10
        var1 = arg0;
        var0 = {};
        var3 = _closure1_slot15;
        var4 = var3.XSMALL;
        var3 = var1.textXsmall;
        var0[var4] = var3;
        var3 = _closure1_slot15;
        var4 = var3.SMALL;
        var3 = var1.textSmall;
        var0[var4] = var3;
        var3 = _closure1_slot15;
        var4 = var3.MEDIUM;
        var3 = var1.textMedium;
        var0[var4] = var3;
        var2 = _closure1_slot15;
        var2 = var2.LARGE;
        var1 = var1.textLarge;
        var0[var2] = var1;
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function(arg0) { // Original name: getButtonLooksToTextStyles, environment: var10
        var1 = arg0;
        var0 = {};
        var3 = _closure1_slot12;
        var4 = var3.FILLED;
        var3 = var1.textFilled;
        var0[var4] = var3;
        var3 = _closure1_slot12;
        var4 = var3.LINK;
        var3 = var1.textLink;
        var0[var4] = var3;
        var2 = _closure1_slot12;
        var2 = var2.OUTLINED;
        var1 = var1.textOutlined;
        var0[var2] = var1;
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = function(arg0, arg1) { // Original name: getTextStyles, environment: var10
        _fun44326: for (var _fun44326_ip = 0;;) switch (_fun44326_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var8 = var0.color;
                var7 = var0.look;
                var2 = var0.size;
                var5 = var0.disabled;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun44326_ip = 35;
                    continue _fun44326
                }
            case 33:
                var5 = false;
            case 35:
                var1 = var4.text;
                var0 = new Array(5);
                var0[0] = var1;
                var6 = _closure1_slot16;
                var6 = var6.bind(var3)(var4);
                var6 = var6[var8];
                var0[1] = var6;
                var6 = _closure1_slot18;
                var6 = var6.bind(var3)(var4);
                var6 = var6[var7];
                var0[2] = var6;
                if (var5) {
                    _fun44326_ip = 96;
                    continue _fun44326
                }
            case 88:
                var5 = var4.textDefault;
                _fun44326_ip = 102;
                continue _fun44326;
            case 96:
                var5 = var4.textDisabled;
            case 102:
                var0[3] = var5;
                var1 = _closure1_slot17;
                var1 = var1.bind(var3)(var4);
                var1 = var1[var2];
                var0[4] = var1;
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var3 = function(arg0, arg1) { // Original name: getButtonStyles, environment: var10
        _fun44327: for (var _fun44327_ip = 0;;) switch (_fun44327_ip) {
            case 0:
                var0 = arg0;
                var3 = arg1;
                var11 = var0.color;
                var14 = var0.size;
                var10 = var0.look;
                var2 = var0.disabled;
                var5 = undefined;
                if (!(var2 === var5)) {
                    _fun44327_ip = 35;
                    continue _fun44327
                }
            case 33:
                var2 = false;
            case 35:
                var8 = var0.shrink;
                if (!(var8 === var5)) {
                    _fun44327_ip = 47;
                    continue _fun44327
                }
            case 45:
                var8 = false;
            case 47:
                var4 = var0.pressed;
                if (!(var4 === var5)) {
                    _fun44327_ip = 59;
                    continue _fun44327
                }
            case 57:
                var4 = false;
            case 59:
                var7 = var0.darkenOnPress;
                if (!(var7 === var5)) {
                    _fun44327_ip = 71;
                    continue _fun44327
                }
            case 69:
                var7 = false;
            case 71:
                var1 = var0.style;
                var0 = _closure1_slot14;
                if (var2) {
                    _fun44327_ip = 94;
                    continue _fun44327
                }
            case 86:
                var16 = var0.DEFAULT;
                _fun44327_ip = 100;
                continue _fun44327;
            case 94:
                var16 = var0.DISABLED;
            case 100:
                var15 = var11;
                if (!var4) {
                    _fun44327_ip = 171;
                    continue _fun44327
                }
            case 106:
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 9;
                var0 = var9[var0];
                var2 = var2.bind(var5)(var0);
                var0 = var2.isAndroid;
                var0 = var0.bind(var2)();
                var15 = var11;
                if (var0) {
                    _fun44327_ip = 171;
                    continue _fun44327
                }
            case 142:
                var0 = global;
                var0 = var0.HermesInternal;
                var9 = var0.concat;
                var2 = '';
                var0 = 'Dark';
                var15 = var9.bind(var2)(var11, var0);
            case 171:
                var2 = var3.button;
                var0 = new Array(7);
                var0[0] = var2;
                var2 = null;
                if (!var8) {
                    _fun44327_ip = 196;
                    continue _fun44327
                }
            case 190:
                var2 = var3.buttonShrink;
            case 196:
                var0[1] = var2;
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 10;
                var9 = var11[var2];
                var13 = var8.bind(var5)(var9);
                var12 = var13.getClass;
                var9 = 'button';
                var21 = var13;
                var20 = var3;
                var19 = var9;
                var18 = var15;
                var17 = var16;
                var12 = var21[var12](var20, var19, var18, var17, var16);
                var0[2] = var12;
                var12 = var11[var2];
                var13 = var8.bind(var5)(var12);
                var12 = var13.getClass;
                var12 = var12.bind(var13)(var3, var9, var14);
                var0[3] = var12;
                var2 = var11[var2];
                var8 = var8.bind(var5)(var2);
                var2 = var8.getClass;
                var2 = var2.bind(var8)(var3, var9, var10);
                var0[4] = var2;
                var2 = undefined;
                if (var7) {
                    _fun44327_ip = 356;
                    continue _fun44327
                }
            case 310:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 9;
                var6 = var8[var6];
                var7 = var7.bind(var5)(var6);
                var6 = var7.isAndroid;
                var6 = var6.bind(var7)();
                var2 = undefined;
                if (var6) {
                    _fun44327_ip = 356;
                    continue _fun44327
                }
            case 345:
                var2 = undefined;
                if (!var4) {
                    _fun44327_ip = 356;
                    continue _fun44327
                }
            case 350:
                var2 = var3.faded;
            case 356:
                var0[5] = var2;
                var0[6] = var1;
                return var0;
        }
    };
    var _closure1_slot20 = var3;
    var1 = function(arg0) { // Original name: ButtonText, environment: var10
        _fun44328: for (var _fun44328_ip = 0;;) switch (_fun44328_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.children;
                var13 = var0.color;
                var12 = var0.look;
                var11 = var0.size;
                var10 = var0.disabled;
                var7 = var0.style;
                var0 = _closure1_slot11;
                var4 = undefined;
                var9 = var0.bind(var4)();
                var1 = 'function';
                var0 = typeof var5;
                if (!(var1 === var0)) {
                    _fun44328_ip = 132;
                    continue _fun44328
                }
            case 58:
                var2 = _closure1_slot8;
                var1 = _closure1_slot9;
                var0 = {};
                var3 = {};
                var14 = _closure1_slot19;
                var8 = {};
                var8.color = var13;
                var8.look = var12;
                var8.size = var11;
                var8.disabled = var10;
                var14 = var14.bind(var4)(var8, var9);
                var8 = new Array(2);
                var8[0] = var14;
                var8[1] = var7;
                var3.style = var8;
                var3 = var5.bind(var4)(var3);
                var0.children = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun44328_ip = 231;
                continue _fun44328;
            case 132:
                var3 = _closure1_slot8;
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 11;
                var1 = var8[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.LegacyText;
                var1 = {
                    'maxFontSizeMultiplier': 2,
                    'numberOfLines': 1
                };
                var8 = _closure1_slot19;
                var6 = {};
                var6.color = var13;
                var6.look = var12;
                var6.size = var11;
                var6.disabled = var10;
                var8 = var8.bind(var4)(var6, var9);
                var6 = new Array(2);
                var6[0] = var8;
                var6[1] = var7;
                var1.style = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 231:
                return var0;
        }
    };
    var _closure1_slot21 = var1;
    var0 = function(arg0) { // Original name: getRedesignVariant, environment: var10
        _fun44329: for (var _fun44329_ip = 0;;) switch (_fun44329_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot13;
                var2 = var2.GREEN;
                if (!(var2 !== var1)) {
                    _fun44329_ip = 118;
                    continue _fun44329
                }
            case 20:
                var2 = _closure1_slot13;
                var2 = var2.RED;
                if (!(var2 !== var1)) {
                    _fun44329_ip = 110;
                    continue _fun44329
                }
            case 34:
                var2 = _closure1_slot13;
                var2 = var2.GREY;
                if (!(var2 !== var1)) {
                    _fun44329_ip = 104;
                    continue _fun44329
                }
            case 48:
                var2 = _closure1_slot13;
                var2 = var2.LIGHTGREY;
                if (!(var2 !== var1)) {
                    _fun44329_ip = 104;
                    continue _fun44329
                }
            case 62:
                var2 = _closure1_slot13;
                var2 = var2.TRANSPARENT;
                if (!(var2 !== var1)) {
                    _fun44329_ip = 104;
                    continue _fun44329
                }
            case 76:
                var0 = _closure1_slot13;
                var0 = var0.WHITE;
                if (!(var0 !== var1)) {
                    _fun44329_ip = 96;
                    continue _fun44329
                }
            case 90:
                var0 = 'primary';
                return var0;
            case 96:
                var0 = 'primary-overlay';
                return var0;
            case 104:
                var0 = 'secondary';
                return var0;
            case 110:
                var0 = 'destructive';
                return var0;
            case 118:
                var0 = 'active';
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function(arg0) { // Original name: getRedesignSize, environment: var10
        _fun44330: for (var _fun44330_ip = 0;;) switch (_fun44330_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot15;
                var2 = var2.LARGE;
                if (!(var2 !== var1)) {
                    _fun44330_ip = 78;
                    continue _fun44330
                }
            case 20:
                var2 = _closure1_slot15;
                var2 = var2.MEDIUM;
                if (!(var2 !== var1)) {
                    _fun44330_ip = 72;
                    continue _fun44330
                }
            case 34:
                var2 = _closure1_slot15;
                var2 = var2.SMALL;
                if (!(var2 !== var1)) {
                    _fun44330_ip = 66;
                    continue _fun44330
                }
            case 48:
                var0 = _closure1_slot15;
                var0 = var0.XSMALL;
                if (!(var0 !== var1)) {
                    _fun44330_ip = 66;
                    continue _fun44330
                }
            case 62:
                var0 = undefined;
                return var0;
            case 66:
                var0 = 'sm';
                return var0;
            case 72:
                var0 = 'md';
                return var0;
            case 78:
                var0 = 'lg';
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var9 = function(arg0) { // Original name: Button, environment: var10
        _fun44331: for (var _fun44331_ip = 0;;) switch (_fun44331_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.look;
                var4 = undefined;
                if (!(var1 === var4)) {
                    _fun44331_ip = 30;
                    continue _fun44331
                }
            case 17:
                var3 = _closure1_slot12;
                var1 = var3.FILLED;
            case 30:
                var _closure2_slot0 = var1;
                var24 = var2.color;
                if (!(var24 === var4)) {
                    _fun44331_ip = 56;
                    continue _fun44331
                }
            case 43:
                var3 = _closure1_slot13;
                var24 = var3.BRAND;
            case 56:
                var _closure2_slot1 = var24;
                var22 = var2.size;
                if (!(var22 === var4)) {
                    _fun44331_ip = 82;
                    continue _fun44331
                }
            case 69:
                var3 = _closure1_slot15;
                var22 = var3.MEDIUM;
            case 82:
                var _closure2_slot2 = var22;
                var23 = var2.text;
                var _closure2_slot3 = var23;
                var8 = var2.shrink;
                if (!(var8 === var4)) {
                    _fun44331_ip = 107;
                    continue _fun44331
                }
            case 105:
                var8 = false;
            case 107:
                var _closure2_slot4 = var8;
                var10 = var2.disabled;
                if (!(var10 === var4)) {
                    _fun44331_ip = 122;
                    continue _fun44331
                }
            case 120:
                var10 = false;
            case 122:
                var _closure2_slot5 = var10;
                var12 = var2.loading;
                if (!(var12 === var4)) {
                    _fun44331_ip = 138;
                    continue _fun44331
                }
            case 136:
                var12 = false;
            case 138:
                var _closure2_slot6 = var12;
                var40 = var2.loadingColorDark;
                if (!(var40 === var4)) {
                    _fun44331_ip = 188;
                    continue _fun44331
                }
            case 154:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 6;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.unsafe_rawColors;
                var40 = var3.WHITE;
            case 188:
                var _closure2_slot7 = var40;
                var39 = var2.loadingColorLight;
                if (!(var39 === var4)) {
                    _fun44331_ip = 238;
                    continue _fun44331
                }
            case 204:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 6;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.unsafe_rawColors;
                var39 = var3.PRIMARY_500;
            case 238:
                var _closure2_slot8 = var39;
                var41 = var2.textStyle;
                var _closure2_slot9 = var41;
                var5 = var2.style;
                var _closure2_slot10 = var5;
                var32 = var2.accessibilityRole;
                if (!(var32 === var4)) {
                    _fun44331_ip = 274;
                    continue _fun44331
                }
            case 270:
                var32 = 'button';
            case 274:
                var20 = var2.accessibilityLabel;
                var19 = var2.accessibilityHint;
                var3 = var2.accessibilityState;
                var _closure2_slot11 = var3;
                var18 = var2.accessibilityActions;
                var17 = var2.onAccessibilityAction;
                var30 = var2.accessibilityValue;
                var38 = var2.darkenOnPress;
                var _closure2_slot12 = var38;
                var9 = var2.renderIcon;
                var11 = var2.renderRightIcon;
                var25 = var2.renderShine;
                var26 = var2.renderLinearGradient;
                var6 = var2.testID;
                var16 = var2.onPress;
                var15 = var2.onPressIn;
                var14 = var2.onPressOut;
                var13 = var2.onTouchStart;
                var29 = var2.onTouchEnd;
                var28 = var2.onLongPress;
                var37 = var2.foregroundRipple;
                var _closure2_slot13 = var37;
                var36 = var2.cornerRadius;
                var _closure2_slot14 = var36;
                var _closure2_slot15 = var4;
                var _closure2_slot16 = var4;
                var2 = _closure1_slot11;
                var2 = var2.bind(var4)();
                _closure2_slot15 = var2;
                var34 = _closure1_slot0;
                var35 = _closure1_slot2;
                var7 = 12;
                var7 = var35[var7];
                var27 = var34.bind(var4)(var7);
                var7 = var27.useThemeContext;
                var7 = var7.bind(var27)();
                var7 = var7.theme;
                _closure2_slot16 = var7;
                var33 = _closure1_slot3;
                var31 = var33.useMemo;
                var27 = new Array(10);
                var27[0] = var24;
                var27[1] = var10;
                var27[2] = var12;
                var27[3] = var1;
                var27[4] = var22;
                var27[5] = var23;
                var27[6] = var41;
                var27[7] = var40;
                var27[8] = var39;
                var27[9] = var7;
                var7 = function() { // Environment: var0
                    _fun44332: for (var _fun44332_ip = 0;;) switch (_fun44332_ip) {
                        case 0:
                            var0 = _closure2_slot6;
                            var4 = _closure1_slot8;
                            if (var0) {
                                _fun44332_ip = 82;
                                continue _fun44332
                            }
                        case 17:
                            var3 = _closure1_slot21;
                            var2 = {};
                            var0 = _closure2_slot1;
                            var2.color = var0;
                            var0 = _closure2_slot0;
                            var2.look = var0;
                            var0 = _closure2_slot2;
                            var2.size = var0;
                            var0 = _closure2_slot5;
                            var2.disabled = var0;
                            var0 = _closure2_slot9;
                            var2.style = var0;
                            var0 = _closure2_slot3;
                            var2.children = var0;
                            var0 = undefined;
                            var0 = var4.bind(var0)(var3, var2);
                            _fun44332_ip = 148;
                            continue _fun44332;
                        case 82:
                            var3 = _closure1_slot4;
                            var2 = {};
                            var7 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 12;
                            var5 = var5[var1];
                            var1 = undefined;
                            var8 = var7.bind(var1)(var5);
                            var7 = var8.isThemeDark;
                            var5 = _closure2_slot16;
                            var5 = var7.bind(var8)(var5);
                            if (var5) {
                                _fun44332_ip = 134;
                                continue _fun44332
                            }
                        case 128:
                            var5 = _closure2_slot8;
                            _fun44332_ip = 138;
                            continue _fun44332;
                        case 134:
                            var5 = _closure2_slot7;
                        case 138:
                            var2.color = var5;
                            var0 = var4.bind(var1)(var3, var2);
                        case 148:
                            return var0;
                    }
                };
                var7 = var31.bind(var33)(var7, var27);
                var33 = _closure1_slot3;
                var31 = var33.useMemo;
                var27 = new Array(2);
                var27[0] = var10;
                var27[1] = var3;
                var3 = function() { // Environment: var0
                    var0 = {};
                    var3 = _closure2_slot11;
                    var4 = var0;
                    var2 = copyDataProperties(var4, var3);
                    var2 = _closure2_slot5;
                    var1 = 'disabled';
                    var0[var1] = var2;
                    return var0;
                };
                var31 = var31.bind(var33)(var3, var27);
                var33 = _closure1_slot3;
                var27 = var33.useCallback;
                var3 = new Array(8);
                var3[0] = var24;
                var3[1] = var38;
                var3[2] = var22;
                var3[3] = var1;
                var3[4] = var10;
                var3[5] = var8;
                var3[6] = var5;
                var3[7] = var2;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.pressed;
                    var3 = _closure1_slot20;
                    var2 = {};
                    var4 = _closure2_slot1;
                    var2.color = var4;
                    var4 = _closure2_slot2;
                    var2.size = var4;
                    var4 = _closure2_slot5;
                    var2.disabled = var4;
                    var4 = _closure2_slot0;
                    var2.look = var4;
                    var4 = _closure2_slot4;
                    var2.shrink = var4;
                    var2.pressed = var1;
                    var1 = _closure2_slot12;
                    var2.darkenOnPress = var1;
                    var1 = _closure2_slot10;
                    var2.style = var1;
                    var1 = _closure2_slot15;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var3 = var27.bind(var33)(var2, var3);
                var33 = _closure1_slot3;
                var27 = var33.useMemo;
                var2 = new Array(2);
                var2[0] = var37;
                var2[1] = var36;
                var0 = function() { // Environment: var0
                    _fun44335: for (var _fun44335_ip = 0;;) switch (_fun44335_ip) {
                        case 0:
                            var2 = _closure1_slot7;
                            var1 = {};
                            var0 = _closure2_slot13;
                            var1.foreground = var0;
                            var4 = _closure2_slot14;
                            var0 = null;
                            var4 = var0 != var4;
                            var0 = 3;
                            if (!var4) {
                                _fun44335_ip = 41;
                                continue _fun44335
                            }
                        case 37:
                            var0 = _closure2_slot14;
                        case 41:
                            var1.cornerRadius = var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var27 = var27.bind(var33)(var0, var2);
                var33 = _closure1_slot3;
                var2 = var33.useContext;
                var0 = 13;
                var0 = var35[var0];
                var0 = var34.bind(var4)(var0);
                var0 = var0.RedesignCompatContext;
                var0 = var2.bind(var33)(var0);
                if (!var0) {
                    _fun44331_ip = 710;
                    continue _fun44331
                }
            case 693:
                var0 = _closure1_slot12;
                var0 = var0.LINK;
                if (!(var1 === var0)) {
                    _fun44331_ip = 950;
                    continue _fun44331
                }
            case 710:
                var2 = _closure1_slot10;
                var1 = _closure1_slot5;
                var0 = {};
                var0.accessibilityRole = var32;
                var0.accessibilityState = var31;
                var0.accessibilityLabel = var20;
                var0.accessibilityHint = var19;
                var0.accessibilityActions = var18;
                var0.onAccessibilityAction = var17;
                var0.accessibilityValue = var30;
                var0.onPress = var16;
                var0.onPressIn = var15;
                var0.onPressOut = var14;
                var0.onTouchStart = var13;
                var0.onTouchEnd = var29;
                var0.onLongPress = var28;
                var28 = var10;
                if (var10) {
                    _fun44331_ip = 791;
                    continue _fun44331
                }
            case 788:
                var28 = var12;
            case 791:
                var0.disabled = var28;
                var0.android_ripple = var27;
                var0.testID = var6;
                var0.style = var3;
                var6 = null;
                var27 = var6 == var26;
                var3 = undefined;
                if (var27) {
                    _fun44331_ip = 824;
                    continue _fun44331
                }
            case 820:
                var3 = var26.bind(var4)();
            case 824:
                var27 = var6 != var3;
                var26 = null;
                if (!var27) {
                    _fun44331_ip = 836;
                    continue _fun44331
                }
            case 833:
                var26 = var3;
            case 836:
                var3 = new Array(5);
                var3[0] = var26;
                var26 = var6 == var9;
                var27 = undefined;
                if (var26) {
                    _fun44331_ip = 857;
                    continue _fun44331
                }
            case 853:
                var27 = var9.bind(var4)();
            case 857:
                var28 = var6 != var27;
                var26 = null;
                if (!var28) {
                    _fun44331_ip = 869;
                    continue _fun44331
                }
            case 866:
                var26 = var27;
            case 869:
                var3[1] = var26;
                var3[2] = var7;
                var7 = var6 == var11;
                var26 = undefined;
                if (var7) {
                    _fun44331_ip = 890;
                    continue _fun44331
                }
            case 886:
                var26 = var11.bind(var4)();
            case 890:
                var27 = var6 != var26;
                var7 = null;
                if (!var27) {
                    _fun44331_ip = 902;
                    continue _fun44331
                }
            case 899:
                var7 = var26;
            case 902:
                var3[3] = var7;
                var26 = var6 == var25;
                var7 = undefined;
                if (var26) {
                    _fun44331_ip = 919;
                    continue _fun44331
                }
            case 915:
                var7 = var25.bind(var4)();
            case 919:
                var25 = var6 != var7;
                var6 = null;
                if (!var25) {
                    _fun44331_ip = 931;
                    continue _fun44331
                }
            case 928:
                var6 = var7;
            case 931:
                var3[4] = var6;
                var0.children = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun44331_ip = 1181;
                continue _fun44331;
            case 950:
                var3 = _closure1_slot8;
                var2 = _closure1_slot6;
                var1 = {};
                var1.style = var5;
                var7 = _closure1_slot8;
                var6 = _closure1_slot0;
                var25 = _closure1_slot2;
                var5 = 14;
                var5 = var25[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.Button;
                var5 = {};
                var5.text = var23;
                var23 = _closure1_slot22;
                var23 = var23.bind(var4)(var24);
                var5.variant = var23;
                var21 = _closure1_slot23;
                var21 = var21.bind(var4)(var22);
                var5.size = var21;
                var5.accessibilityLabel = var20;
                var5.accessibilityHint = var19;
                var5.accessibilityActions = var18;
                var5.onAccessibilityAction = var17;
                var5.onPress = var16;
                var5.onPressIn = var15;
                var5.onPressOut = var14;
                var5.onTouchStart = var13;
                if (var10) {
                    _fun44331_ip = 1070;
                    continue _fun44331
                }
            case 1067:
                var10 = var12;
            case 1070:
                var5.disabled = var10;
                var10 = null;
                var12 = var10 == var9;
                var13 = undefined;
                if (var12) {
                    _fun44331_ip = 1089;
                    continue _fun44331
                }
            case 1085:
                var13 = var9.bind(var4)();
            case 1089:
                if (!(var10 == var13)) {
                    _fun44331_ip = 1109;
                    continue _fun44331
                }
            case 1093:
                var14 = var10 == var11;
                var12 = undefined;
                if (var14) {
                    _fun44331_ip = 1106;
                    continue _fun44331
                }
            case 1102:
                var12 = var11.bind(var4)();
            case 1106:
                var13 = var12;
            case 1109:
                var14 = var10 != var13;
                var12 = null;
                if (!var14) {
                    _fun44331_ip = 1121;
                    continue _fun44331
                }
            case 1118:
                var12 = var13;
            case 1121:
                var5.icon = var12;
                var12 = var10 != var9;
                var9 = 'start';
                if (var12) {
                    _fun44331_ip = 1152;
                    continue _fun44331
                }
            case 1136:
                var11 = var10 != var11;
                var10 = undefined;
                if (!var11) {
                    _fun44331_ip = 1149;
                    continue _fun44331
                }
            case 1145:
                var10 = 'end';
            case 1149:
                var9 = var10;
            case 1152:
                var5.iconPosition = var9;
                var8 = !var8;
                var5.grow = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1181:
                return var0;
        }
    };
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 0;
    var5 = var12[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var5);
    var _closure1_slot3 = var4;
    var18 = 1;
    var4 = var12[var18];
    var4 = var11.bind(var0)(var4);
    var5 = var4.ActivityIndicator;
    var _closure1_slot4 = var5;
    var5 = var4.Pressable;
    var _closure1_slot5 = var5;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var12[var4];
    var4 = var11.bind(var0)(var4);
    var4 = var4.getThemedRippleConfig;
    var _closure1_slot7 = var4;
    var8 = 3;
    var4 = var12[var8];
    var4 = var11.bind(var0)(var4);
    var19 = var4.Fonts;
    var4 = 4;
    var4 = var12[var4];
    var4 = var11.bind(var0)(var4);
    var5 = var4.jsx;
    var _closure1_slot8 = var5;
    var5 = var4.Fragment;
    var _closure1_slot9 = var5;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var12[var4];
    var6 = var11.bind(var0)(var4);
    var5 = var6.createStyles;
    var4 = {};
    var7 = {
        'flexDirection': 'row',
        'flexGrow': 1,
        'justifyContent': 'center',
        'alignItems': 'center',
        'alignSelf': 'stretch',
        'borderRadius': 3
    };
    var4.button = var7;
    var7 = {
        'flexGrow': 0,
        'alignSelf': 'flex-start',
        'paddingHorizontal': 10
    };
    var4.buttonShrink = var7;
    var7 = {};
    var15 = 6;
    var13 = var12[var15];
    var13 = var16.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BRAND;
    var7.backgroundColor = var13;
    var4.buttonBrandDefault = var7;
    var7 = {};
    var13 = var12[var15];
    var13 = var16.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.BRAND_600;
    var7.backgroundColor = var13;
    var4.buttonBrandDarkDefault = var7;
    var7 = {};
    var13 = var12[var15];
    var13 = var16.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.RED_400;
    var7.backgroundColor = var13;
    var4.buttonRedDefault = var7;
    var7 = {};
    var13 = var12[var15];
    var13 = var16.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.RED_500;
    var7.backgroundColor = var13;
    var4.buttonRedDarkDefault = var7;
    var7 = {};
    var13 = var12[var15];
    var13 = var16.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.CONTROL_CONNECTED_BACKGROUND_DEFAULT;
    var7.backgroundColor = var13;
    var4.buttonGreenDefault = var7;
    var7 = {};
    var13 = var12[var15];
    var13 = var16.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.GREEN_500;
    var7.backgroundColor = var13;
    var4.buttonGreenDarkDefault = var7;
    var7 = {};
    var13 = var12[var15];
    var13 = var16.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.PRIMARY_500;
    var7.backgroundColor = var13;
    var4.buttonGreyDarkDefault = var7;
    var7 = {};
    var13 = var12[var15];
    var13 = var16.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.PRIMARY_500;
    var7.backgroundColor = var13;
    var4.buttonLightgreyDefault = var7;
    var7 = {};
    var13 = var12[var15];
    var13 = var16.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.PRIMARY_500;
    var7.backgroundColor = var13;
    var4.buttonLightgreyDarkDefault = var7;
    var7 = {};
    var14 = 7;
    var13 = var12[var14];
    var21 = var11.bind(var0)(var13);
    var20 = var21.hexWithOpacity;
    var13 = var12[var15];
    var13 = var16.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.BRAND_500;
    var17 = 0.5;
    var13 = var20.bind(var21)(var13, var17);
    var7.backgroundColor = var13;
    var4.buttonBrandDisabled = var7;
    var7 = {};
    var13 = var12[var14];
    var21 = var11.bind(var0)(var13);
    var20 = var21.hexWithOpacity;
    var13 = var12[var15];
    var13 = var16.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.BRAND_600;
    var13 = var20.bind(var21)(var13, var17);
    var7.backgroundColor = var13;
    var4.buttonBrandDarkDisabled = var7;
    var7 = {};
    var13 = var12[var14];
    var21 = var11.bind(var0)(var13);
    var20 = var21.hexWithOpacity;
    var13 = var12[var15];
    var13 = var16.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.RED_400;
    var13 = var20.bind(var21)(var13, var17);
    var7.backgroundColor = var13;
    var4.buttonRedDisabled = var7;
    var7 = {};
    var13 = var12[var14];
    var21 = var11.bind(var0)(var13);
    var20 = var21.hexWithOpacity;
    var13 = var12[var15];
    var13 = var16.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.RED_500;
    var13 = var20.bind(var21)(var13, var17);
    var7.backgroundColor = var13;
    var4.buttonRedDarkDisabled = var7;
    var7 = {};
    var13 = var12[var14];
    var21 = var11.bind(var0)(var13);
    var20 = var21.hexWithOpacity;
    var13 = var12[var15];
    var13 = var16.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.GREEN_360;
    var13 = var20.bind(var21)(var13, var17);
    var7.backgroundColor = var13;
    var4.buttonGreenDisabled = var7;
    var7 = {};
    var13 = var12[var14];
    var21 = var11.bind(var0)(var13);
    var20 = var21.hexWithOpacity;
    var13 = var12[var15];
    var13 = var16.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.GREEN_500;
    var13 = var20.bind(var21)(var13, var17);
    var7.backgroundColor = var13;
    var4.buttonGreenDarkDisabled = var7;
    var7 = {};
    var13 = var12[var14];
    var21 = var11.bind(var0)(var13);
    var20 = var21.hexWithOpacity;
    var13 = var12[var15];
    var13 = var16.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.PRIMARY_500;
    var13 = var20.bind(var21)(var13, var17);
    var7.backgroundColor = var13;
    var4.buttonGreyDarkDisabled = var7;
    var7 = {};
    var13 = var12[var14];
    var21 = var11.bind(var0)(var13);
    var20 = var21.hexWithOpacity;
    var13 = var12[var15];
    var13 = var16.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.PRIMARY_500;
    var13 = var20.bind(var21)(var13, var17);
    var7.backgroundColor = var13;
    var4.buttonLightgreyDisabled = var7;
    var7 = {};
    var13 = var12[var14];
    var21 = var11.bind(var0)(var13);
    var20 = var21.hexWithOpacity;
    var13 = var12[var15];
    var13 = var16.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.PRIMARY_500;
    var13 = var20.bind(var21)(var13, var17);
    var7.backgroundColor = var13;
    var4.buttonLightgreyDarkDisabled = var7;
    var7 = {};
    var13 = 'transparent';
    var7.backgroundColor = var13;
    var4.buttonTransparentDefault = var7;
    var7 = {};
    var7.backgroundColor = var13;
    var4.buttonTransparentDarkDefault = var7;
    var7 = {};
    var7.backgroundColor = var13;
    var4.buttonTransparentDisabled = var7;
    var7 = {};
    var7.backgroundColor = var13;
    var4.buttonTransparentDarkDisabled = var7;
    var7 = {};
    var20 = var12[var15];
    var20 = var16.bind(var0)(var20);
    var20 = var20.colors;
    var20 = var20.WHITE;
    var7.backgroundColor = var20;
    var4.buttonWhiteDefault = var7;
    var7 = {};
    var14 = var12[var14];
    var21 = var11.bind(var0)(var14);
    var20 = var21.hexWithOpacity;
    var14 = var12[var15];
    var14 = var16.bind(var0)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.WHITE;
    var14 = var20.bind(var21)(var14, var17);
    var7.backgroundColor = var14;
    var4.buttonWhiteDisabled = var7;
    var7 = {};
    var4.buttonFilled = var7;
    var7 = {};
    var4.buttonLink = var7;
    var7 = {};
    var4.buttonLinkDefault = var7;
    var7 = {
        'backgroundColor': 'transparent',
        'borderWidth': 1,
        'borderStyle': 'solid'
    };
    var14 = 8;
    var20 = var12[var14];
    var20 = var11.bind(var0)(var20);
    var20 = var20.BUTTON_OUTLINED_BORDER;
    var7.borderColor = var20;
    var4.buttonOutlined = var7;
    var7 = {};
    var20 = 24;
    var7.minHeight = var20;
    var4.buttonXsmall = var7;
    var7 = {};
    var20 = 32;
    var7.minHeight = var20;
    var4.buttonSmall = var7;
    var7 = {};
    var20 = 40;
    var7.minHeight = var20;
    var4.buttonMedium = var7;
    var7 = {};
    var20 = 46;
    var7.minHeight = var20;
    var4.buttonLarge = var7;
    var7 = {};
    var20 = var12[var15];
    var20 = var16.bind(var0)(var20);
    var20 = var20.colors;
    var20 = var20.WHITE;
    var7.color = var20;
    var19 = var19.PRIMARY_SEMIBOLD;
    var7.fontFamily = var19;
    var7.flexShrink = var18;
    var4.text = var7;
    var7 = {};
    var19 = 12;
    var7.fontSize = var19;
    var4.textXsmall = var7;
    var7 = {};
    var19 = 14;
    var7.fontSize = var19;
    var4.textSmall = var7;
    var7 = {};
    var7.fontSize = var19;
    var4.textMedium = var7;
    var7 = {};
    var19 = 20;
    var7.fontSize = var19;
    var4.textLarge = var7;
    var7 = {};
    var19 = 0.6;
    var7.opacity = var19;
    var4.textDisabled = var7;
    var7 = {};
    var7.opacity = var18;
    var4.textDefault = var7;
    var7 = {};
    var18 = var12[var15];
    var18 = var16.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.WHITE;
    var7.color = var18;
    var4.textBrand = var7;
    var7 = {};
    var18 = var12[var15];
    var18 = var16.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.WHITE;
    var7.color = var18;
    var4.textRed = var7;
    var7 = {};
    var18 = var12[var15];
    var18 = var16.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.WHITE;
    var7.color = var18;
    var4.textGreen = var7;
    var7 = {};
    var18 = var12[var15];
    var18 = var16.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.WHITE;
    var7.color = var18;
    var4.textGrey = var7;
    var7 = {};
    var18 = var12[var15];
    var18 = var16.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.WHITE;
    var7.color = var18;
    var4.textLightgrey = var7;
    var7 = {};
    var18 = var12[var15];
    var18 = var16.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.WHITE;
    var7.color = var18;
    var4.textWhite = var7;
    var7 = {};
    var4.textFilled = var7;
    var7 = {};
    var18 = var12[var14];
    var18 = var11.bind(var0)(var18);
    var18 = var18.DARK_PRIMARY_100_LIGHT_PRIMARY_500;
    var7.color = var18;
    var4.textOutlined = var7;
    var7 = {};
    var7.opacity = var17;
    var4.faded = var7;
    var7 = {};
    var17 = var12[var15];
    var17 = var16.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.WHITE;
    var7.backgroundColor = var17;
    var4.buttonWhiteDarkDefault = var7;
    var7 = {};
    var15 = var12[var15];
    var15 = var16.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.TEXT_LINK;
    var7.color = var15;
    var4.textLink = var7;
    var7 = {};
    var15 = var12[var14];
    var15 = var11.bind(var0)(var15);
    var15 = var15.DARK_PRIMARY_100_LIGHT_PRIMARY_500;
    var7.backgroundColor = var15;
    var4.buttonPrimaryDefault = var7;
    var7 = {};
    var15 = var12[var14];
    var15 = var11.bind(var0)(var15);
    var15 = var15.DARK_PRIMARY_100_LIGHT_PRIMARY_500;
    var7.backgroundColor = var15;
    var4.buttonPrimaryDarkDefault = var7;
    var7 = {};
    var15 = var12[var14];
    var15 = var11.bind(var0)(var15);
    var15 = var15.DARK_PRIMARY_500_LIGHT_PRIMARY_430;
    var7.backgroundColor = var15;
    var4.buttonGreyDefault = var7;
    var7 = {};
    var15 = var12[var14];
    var15 = var11.bind(var0)(var15);
    var15 = var15.DARK_PRIMARY_500_LIGHT_PRIMARY_100;
    var7.color = var15;
    var4.textPrimary = var7;
    var7 = {};
    var15 = var12[var14];
    var15 = var11.bind(var0)(var15);
    var15 = var15.DARK_PRIMARY_100_LIGHT_PRIMARY_500;
    var7.color = var15;
    var4.textTransparent = var7;
    var7 = {};
    var15 = var12[var14];
    var15 = var11.bind(var0)(var15);
    var15 = var15.BUTTON_PRIMARY_DISABLED_BACKGROUND;
    var7.backgroundColor = var15;
    var4.buttonPrimaryDisabled = var7;
    var7 = {};
    var15 = var12[var14];
    var15 = var11.bind(var0)(var15);
    var15 = var15.BUTTON_PRIMARY_DISABLED_BACKGROUND;
    var7.backgroundColor = var15;
    var4.buttonPrimaryDarkDisabled = var7;
    var7 = {};
    var14 = var12[var14];
    var14 = var11.bind(var0)(var14);
    var14 = var14.BUTTON_GREY_DISABLED_BACKGROUND;
    var7.backgroundColor = var14;
    var4.buttonGreyDisabled = var7;
    var7 = var5.bind(var6)(var4);
    var _closure1_slot11 = var7;
    var6 = {};
    var4 = 'filled';
    var6.FILLED = var4;
    var4 = 'link';
    var6.LINK = var4;
    var5 = 'outlined';
    var6.OUTLINED = var5;
    var _closure1_slot12 = var6;
    var5 = {};
    var14 = 'brand';
    var5.BRAND = var14;
    var14 = 'red';
    var5.RED = var14;
    var14 = 'green';
    var5.GREEN = var14;
    var14 = 'primary';
    var5.PRIMARY = var14;
    var5.TRANSPARENT = var13;
    var13 = 'grey';
    var5.GREY = var13;
    var13 = 'lightgrey';
    var5.LIGHTGREY = var13;
    var13 = 'white';
    var5.WHITE = var13;
    var5.LINK = var4;
    var _closure1_slot13 = var5;
    var4 = {};
    var13 = 'Default';
    var4.DEFAULT = var13;
    var13 = 'Disabled';
    var4.DISABLED = var13;
    var _closure1_slot14 = var4;
    var4 = {};
    var13 = 'xsmall';
    var4.XSMALL = var13;
    var13 = 'small';
    var4.SMALL = var13;
    var13 = 'medium';
    var4.MEDIUM = var13;
    var13 = 'large';
    var4.LARGE = var13;
    var _closure1_slot15 = var4;
    var9.Looks = var6;
    var9.Colors = var5;
    var9.Sizes = var4;
    var10 = 15;
    var10 = var12[var10];
    var12 = var11.bind(var0)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'uikit-native/Button.tsx';
    var10 = var11.bind(var12)(var10);
    var2.default = var9;
    var2.BUTTON_CORNER_RADIUS = var8;
    var2.useButtonStyles = var7;
    var2.ButtonLooks = var6;
    var2.ButtonColors = var5;
    var2.ButtonSizes = var4;
    var2.getButtonStyles = var3;
    var2.ButtonText = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4837, 660, 33, 1297, 671, 3199, 4835, 478, 4838, 4839, 3165, 4860, 4043, 2]);