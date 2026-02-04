// design/components/Backdrop/native/Backdrop.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun37525: for (var _fun37525_ip = 0;;) switch (_fun37525_ip) {
            case 0:
                var1 = arg0;
                var0 = 'none';
                if (!(var0 !== var1)) {
                    _fun37525_ip = 57;
                    continue _fun37525
                }
            case 11:
                var0 = 'subtle';
                if (!(var0 !== var1)) {
                    _fun37525_ip = 45;
                    continue _fun37525
                }
            case 21:
                var0 = 'strong';
                if (!(var0 !== var1)) {
                    _fun37525_ip = 33;
                    continue _fun37525
                }
            case 29:
                var0 = undefined;
                return var0;
            case 33:
                var0 = 0.25;
                return var0;
            case 45:
                var0 = 0.05;
                return var0;
            case 57:
                var0 = 0;
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.StyleSheet;
    var3 = var3.Pressable;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = {};
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = var8.absoluteFillObject;
    var3.fill = var8;
    var8 = {};
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SCRIM;
    var8.backgroundColor = var11;
    var3.backdrop = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.MOBILE_BACKGROUND_SCRIM_OPAQUE;
    var8.backgroundColor = var9;
    var3.backdropOpaque = var8;
    var8 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'right': 0,
        'height': 16
    };
    var3.accessibilityDismiss = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Backdrop/native/Backdrop.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun37526: for (var _fun37526_ip = 0;;) switch (_fun37526_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.style;
                var19 = var1.accessibleDismissStyle;
                var4 = var1.animatedProps;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun37526_ip = 35;
                    continue _fun37526
                }
            case 28:
                var4 = _closure1_slot7;
            case 35:
                var8 = var1.opaque;
                if (!(var8 === var3)) {
                    _fun37526_ip = 47;
                    continue _fun37526
                }
            case 45:
                var8 = false;
            case 47:
                var16 = var1.blur;
                if (!(var16 === var3)) {
                    _fun37526_ip = 61;
                    continue _fun37526
                }
            case 57:
                var16 = 'none';
            case 61:
                var17 = var1.onDismiss;
                var11 = var1.accessibilityLabel;
                if (!(var11 === var3)) {
                    _fun37526_ip = 134;
                    continue _fun37526
                }
            case 76:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 5;
                var5 = var10[var2];
                var5 = var9.bind(var3)(var5);
                var7 = var5.intl;
                var5 = var7.string;
                var2 = var10[var2];
                var2 = var9.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.WAI6xu;
                var11 = var5.bind(var7)(var2);
            case 134:
                var10 = var1["aria-hidden"];
                var _closure2_slot0 = var3;
                var1 = _closure1_slot8;
                var12 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 6;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useThemeContext;
                var1 = var1.bind(var2)();
                var14 = var1.theme;
                var1 = _closure1_slot1;
                var2 = 7;
                var2 = var5[var2];
                var2 = var1.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var21 = var2.top;
                var2 = var12.backdrop;
                var13 = var2.backgroundColor;
                _closure2_slot0 = var13;
                var9 = _closure1_slot3;
                var7 = var9.useMemo;
                var2 = new Array(1);
                var2[0] = var13;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hexToRgbaString;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var13 = var7.bind(var9)(var0, var2);
                var9 = {};
                var9.onPress = var17;
                var0 = true;
                var9['aria-hidden'] = var0;
                var2 = _closure1_slot6;
                var0 = 9;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var7 = var12.fill;
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var0.style = var5;
                var5 = 'box-none';
                var0.pointerEvents = var5;
                var0.animatedProps = var4;
                var4 = null;
                var5 = var4 != var17;
                if (!var5) {
                    _fun37526_ip = 411;
                    continue _fun37526
                }
            case 342:
                var7 = _closure1_slot5;
                var6 = _closure1_slot4;
                var4 = {};
                var20 = var12.accessibilityDismiss;
                var18 = new Array(3);
                var18[0] = var20;
                var20 = {};
                var20.top = var21;
                var18[1] = var20;
                var18[2] = var19;
                var4.style = var18;
                var4.onPress = var17;
                var17 = 'button';
                var4.accessibilityRole = var17;
                var4.accessibilityLabel = var11;
                var4['aria-hidden'] = var10;
                var5 = var7.bind(var3)(var6, var4);
            case 411:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot5;
                var6 = _closure1_slot4;
                var5 = 'none';
                if (!(var5 === var16)) {
                    _fun37526_ip = 493;
                    continue _fun37526
                }
            case 435:
                var5 = {};
                var23 = var5;
                var22 = var9;
                var10 = copyDataProperties(var23, var22);
                var11 = var12.fill;
                var10 = new Array(2);
                var10[0] = var11;
                if (var8) {
                    _fun37526_ip = 472;
                    continue _fun37526
                }
            case 464:
                var8 = var12.backdrop;
                _fun37526_ip = 478;
                continue _fun37526;
            case 472:
                var8 = var12.backdropOpaque;
            case 478:
                var10[1] = var8;
                var8 = 'style';
                var5[var8] = var10;
                _fun37526_ip = 614;
                continue _fun37526;
            case 493:
                var8 = {};
                var23 = var8;
                var22 = var9;
                var9 = copyDataProperties(var23, var22);
                var10 = var12.fill;
                var9 = 'style';
                var8[var9] = var10;
                var11 = _closure1_slot5;
                var10 = _closure1_slot1;
                var17 = _closure1_slot2;
                var9 = 10;
                var9 = var17[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var15 = _closure1_slot9;
                var15 = var15.bind(var3)(var16);
                var9.blurAmount = var15;
                var15 = var12.fill;
                var9.style = var15;
                var9.blurTheme = var14;
                var9.blurTintRgba = var13;
                var12 = var12.backdrop;
                var12 = var12.backgroundColor;
                var9.android_fallbackColor = var12;
                var10 = var11.bind(var3)(var10, var9);
                var9 = 'children';
                var8[var9] = var10;
                var5 = var8;
            case 614:
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.Backdrop = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 1234, 3159, 1568, 3240, 3720, 4072, 2]);