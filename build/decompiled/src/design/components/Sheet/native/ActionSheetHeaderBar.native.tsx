// design/components/Sheet/native/ActionSheetHeaderBar.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var4 = var6[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.Pressable;
    var _closure1_slot3 = var4;
    var4 = var3.StyleSheet;
    var _closure1_slot4 = var4;
    var4 = var3.TouchableWithoutFeedback;
    var _closure1_slot5 = var4;
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot7 = var4;
    var4 = var3.Fragment;
    var _closure1_slot8 = var4;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = {};
    var4 = 'floating';
    var3.FLOATING = var4;
    var4 = 'overlay';
    var3.OVERLAY = var4;
    var _closure1_slot10 = var3;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = function(arg0, arg1) { // Environment: var1
        _fun46275: for (var _fun46275_ip = 0;;) switch (_fun46275_ip) {
            case 0:
                var7 = arg0;
                var3 = arg1;
                var0 = {};
                var1 = {};
                var2 = 12;
                var1.marginBottom = var2;
                var5 = _closure1_slot10;
                var5 = var5.FLOATING;
                if (!(var5 !== var7)) {
                    _fun46275_ip = 50;
                    continue _fun46275
                }
            case 34:
                var5 = _closure1_slot10;
                var6 = var5.OVERLAY;
                var5 = undefined;
                if (!(var6 === var7)) {
                    _fun46275_ip = 64;
                    continue _fun46275
                }
            case 50:
                var5 = {
                    'left': 0,
                    'right': 0,
                    'position': 'absolute'
                };
            case 64:
                var13 = var1;
                var12 = var5;
                var5 = copyDataProperties(var13, var12);
                var0.header = var1;
                var1 = {
                    'alignSelf': 'center',
                    'width': 32,
                    'height': 4,
                    'borderRadius': null,
                    'backgroundColor': null,
                    'top': 4
                };
                var10 = 4;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var8 = var5[var10];
                var9 = undefined;
                var8 = var6.bind(var9)(var8);
                var8 = var8.radii;
                var8 = var8.sm;
                var1.borderRadius = var8;
                var5 = var5[var10];
                var5 = var6.bind(var9)(var5);
                var5 = var5.colors;
                var5 = var5.BACKGROUND_MOD_STRONG;
                var1.backgroundColor = var5;
                var5 = _closure1_slot10;
                var5 = var5.FLOATING;
                if (!(var5 !== var7)) {
                    _fun46275_ip = 254;
                    continue _fun46275
                }
            case 171:
                var5 = _closure1_slot10;
                var6 = var5.OVERLAY;
                var5 = undefined;
                if (!(var6 === var7)) {
                    _fun46275_ip = 291;
                    continue _fun46275
                }
            case 187:
                var6 = {};
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var11 = var7[var10];
                var11 = var8.bind(var9)(var11);
                var11 = var11.unsafe_rawColors;
                var11 = var11.WHITE;
                var6.backgroundColor = var11;
                var7 = var7[var10];
                var7 = var8.bind(var9)(var7);
                var7 = var7.shadows;
                var12 = var7.SHADOW_LOW;
                var13 = var6;
                var7 = copyDataProperties(var13, var12);
                var5 = var6;
                _fun46275_ip = 291;
                continue _fun46275;
            case 254:
                var6 = {};
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var7 = var7[var10];
                var7 = var8.bind(var9)(var7);
                var7 = var7.colors;
                var7 = var7.BACKGROUND_MOD_MUTED;
                var6.backgroundColor = var7;
                var5 = var6;
            case 291:
                var13 = var1;
                var12 = var5;
                var5 = copyDataProperties(var13, var12);
                var0.indicator = var1;
                var1 = {};
                var4 = _closure1_slot4;
                var12 = var4.absoluteFillObject;
                var13 = var1;
                var4 = copyDataProperties(var13, var12);
                var4 = 'height';
                var1[var4] = var3;
                var3 = var2 - var3;
                var2 = 'marginTop';
                var1[var2] = var3;
                var0.accessibleDismiss = var1;
                return var0;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Sheet/native/ActionSheetHeaderBar.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2.ActionSheetHeaderBarVariants = var3;
    var1 = function arg0() {
        _fun46276: for (var _fun46276_ip = 0;;) switch (_fun46276_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.accessibilityLabel;
                var4 = undefined;
                if (!(var10 === var4)) {
                    _fun46276_ip = 72;
                    continue _fun46276
                }
            case 14:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 5;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.WAI6xu;
                var10 = var2.bind(var3)(var1);
            case 72:
                var13 = var0.style;
                var14 = var0.tabStyle;
                var9 = var0.onPress;
                var3 = var0.variant;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 6;
                var0 = var2[var0];
                var0 = var1.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var1 = var0.height;
                var0 = _closure1_slot11;
                var12 = var0.bind(var4)(var3, var1);
                var1 = _closure1_slot0;
                var0 = 7;
                var0 = var2[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.useIsScreenReaderEnabled;
                var1 = var0.bind(var1)();
                var3 = _closure1_slot7;
                var2 = _closure1_slot5;
                var0 = {};
                var0.onPress = var9;
                var0.onAccessibilityEscape = var9;
                var11 = true;
                var0['aria-hidden'] = var11;
                var7 = _closure1_slot6;
                var6 = {};
                var15 = var12.header;
                var8 = new Array(2);
                var8[0] = var15;
                var8[1] = var13;
                var6.style = var8;
                var8 = {};
                var15 = var12.indicator;
                var13 = new Array(2);
                var13[0] = var15;
                var13[1] = var14;
                var8.style = var13;
                var8 = var3.bind(var4)(var7, var8);
                var6.children = var8;
                var6 = var3.bind(var4)(var7, var6);
                var0.children = var6;
                var6 = var3.bind(var4)(var2, var0);
                var0 = var6;
                if (!var1) {
                    _fun46276_ip = 348;
                    continue _fun46276
                }
            case 270:
                var3 = _closure1_slot9;
                var2 = _closure1_slot8;
                var1 = {};
                var8 = _closure1_slot7;
                var7 = _closure1_slot3;
                var5 = {};
                var12 = var12.accessibleDismiss;
                var5.style = var12;
                var5.accessible = var11;
                var5.accessibilityLabel = var10;
                var10 = 'button';
                var5.accessibilityRole = var10;
                var5.onPress = var9;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 348:
                return var0;
        }
    };
    var2.ActionSheetHeaderBar = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 1234, 1464, 4031, 2]);