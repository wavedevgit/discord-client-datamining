// modules/media_keyboard/native/components/MediaKeyboardBottomSheetActions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.StyleSheet;
    var _closure1_slot4 = var7;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot6 = var7;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = function(arg0, arg1, arg2) { // Environment: var1
        _fun108473: for (var _fun108473_ip = 0;;) switch (_fun108473_ip) {
            case 0:
                var7 = arg0;
                var2 = arg1;
                var3 = arg2;
                var0 = {};
                var1 = {};
                var4 = _closure1_slot4;
                var11 = var4.absoluteFillObject;
                var12 = var1;
                var4 = copyDataProperties(var12, var11);
                var5 = 'center';
                var4 = 'alignItems';
                var1[var4] = var5;
                var4 = undefined;
                var5 = 'top';
                var1[var5] = var4;
                var0.wrap = var1;
                var1 = {};
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 4;
                var8 = var10[var5];
                var8 = var9.bind(var4)(var8);
                var8 = var8.spacing;
                var8 = var8.PX_8;
                var1.paddingBottom = var8;
                var8 = var10[var5];
                var8 = var9.bind(var4)(var8);
                var8 = var8.spacing;
                var8 = var8.PX_8;
                var1.paddingTop = var8;
                var8 = var10[var5];
                var8 = var9.bind(var4)(var8);
                var8 = var8.spacing;
                var8 = var8.PX_16;
                var1.marginHorizontal = var8;
                var9 = _closure1_slot0;
                var8 = 5;
                var8 = var10[var8];
                var9 = var9.bind(var4)(var8);
                var8 = var9.isIOS;
                var8 = var8.bind(var9)();
                if (!var8) {
                    _fun108473_ip = 206;
                    continue _fun108473
                }
            case 178:
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var8 = var8[var5];
                var8 = var9.bind(var4)(var8);
                var8 = var8.spacing;
                var7 = var8.PX_24;
            case 206:
                var1.marginBottom = var7;
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var9 = var7[var5];
                var9 = var8.bind(var4)(var9);
                var9 = var9.radii;
                var9 = var9.round;
                var1.borderRadius = var9;
                var7 = var7[var5];
                var7 = var8.bind(var4)(var7);
                var7 = var7.colors;
                var7 = var7.BORDER_MUTED;
                var1.borderTopColor = var7;
                var7 = null;
                if (!(var7 != var3)) {
                    _fun108473_ip = 275;
                    continue _fun108473
                }
            case 272:
                var2 = var3;
            case 275:
                var1.backgroundColor = var2;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var7 = var2[var5];
                var7 = var3.bind(var4)(var7);
                var7 = var7.shadows;
                var11 = var7.SHADOW_HIGH;
                var12 = var1;
                var7 = copyDataProperties(var12, var11);
                var0.container = var1;
                var1 = {};
                var7 = var2[var5];
                var7 = var3.bind(var4)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_24;
                var1.marginHorizontal = var7;
                var7 = var2[var5];
                var7 = var3.bind(var4)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_16;
                var1.gap = var7;
                var7 = 'stretch';
                var1.alignItems = var7;
                var7 = 'row';
                var1.flexDirection = var7;
                var0.buttonsContainer = var1;
                var1 = {
                    'flexBasis': 64,
                    'minHeight': 48,
                    'flexGrow': 1,
                    'justifyContent': 'center',
                    'flexDirection': 'column',
                    'alignItems': 'center',
                    'gap': 4
                };
                var0.button = var1;
                var1 = {};
                var6 = _closure1_slot4;
                var11 = var6.absoluteFillObject;
                var12 = var1;
                var6 = copyDataProperties(var12, var11);
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var2 = var2.colors;
                var3 = var2.BACKGROUND_BASE_LOW;
                var2 = 'color';
                var1[var2] = var3;
                var0.gradient = var1;
                return var0;
        }
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot8 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun108474: for (var _fun108474_ip = 0;;) switch (_fun108474_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.onHeightChange;
                var _closure2_slot0 = var0;
                var10 = var1.overflowButtons;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 6;
                var2 = var7[var1];
                var5 = var6.bind(var3)(var2);
                var2 = var5.useGradientValue;
                var1 = var7[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var1.GradientPercentage;
                var1 = var1.END;
                var2 = var2.bind(var5)(var1);
                var7 = null;
                var1 = var7 != var2;
                if (!var1) {
                    _fun108474_ip = 147;
                    continue _fun108474
                }
            case 91:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 7;
                var1 = var6[var1];
                var1 = var5.bind(var3)(var1);
                var5 = var1.bind(var3)(var2);
                var2 = var5.alpha;
                var1 = 0.95;
                var2 = var2.bind(var5)(var1);
                var1 = var2.hex;
                var7 = var1.bind(var2)();
            case 147:
                var2 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 8;
                var1 = var11[var1];
                var6 = var2.bind(var3)(var1);
                var2 = var6.useToken;
                var5 = _closure1_slot1;
                var1 = 4;
                var1 = var11[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var1.colors;
                var1 = var1.CARD_BACKGROUND_DEFAULT;
                var2 = var2.bind(var6)(var1);
                var1 = 7;
                var1 = var11[var1];
                var1 = var5.bind(var3)(var1);
                var6 = var1.bind(var3)(var2);
                var2 = var6.alpha;
                var1 = 0.95;
                var2 = var2.bind(var6)(var1);
                var1 = var2.hex;
                var6 = var1.bind(var2)();
                var1 = 9;
                var1 = var11[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var2 = var1.bottom;
                var1 = _closure1_slot8;
                var9 = var1.bind(var3)(var2, var6, var7);
                _closure2_slot1 = var9;
                var6 = _closure1_slot3;
                var7 = var6.useMemo;
                var1 = var9.gradient;
                var1 = var1.color;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var8
                    var0 = {};
                    var9 = 0;
                    var1 = {
                        'x': 0,
                        'y': 0
                    };
                    var0.start = var1;
                    var4 = 1;
                    var1 = {
                        'x': 0,
                        'y': 1
                    };
                    var0.end = var1;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 7;
                    var1 = var7[var3];
                    var5 = undefined;
                    var8 = var6.bind(var5)(var1);
                    var1 = _closure2_slot1;
                    var1 = var1.gradient;
                    var1 = var1.color;
                    var8 = var8.bind(var5)(var1);
                    var1 = var8.alpha;
                    var8 = var1.bind(var8)(var9);
                    var1 = var8.hex;
                    var8 = var1.bind(var8)();
                    var1 = new Array(2);
                    var1[0] = var8;
                    var3 = var7[var3];
                    var3 = var6.bind(var5)(var3);
                    var2 = _closure2_slot1;
                    var2 = var2.gradient;
                    var2 = var2.color;
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.alpha;
                    var3 = var2.bind(var3)(var4);
                    var2 = var3.hex;
                    var2 = var2.bind(var3)();
                    var1[1] = var2;
                    var0.colors = var1;
                    return var0;
                };
                var7 = var7.bind(var6)(var1, var2);
                var2 = var6.useCallback;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function(arg0) { // Environment: var8
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var2 = _closure2_slot0;
                    var0 = var0.layout;
                    var1 = var0.height;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var6 = var2.bind(var6)(var0, var1);
                var2 = _closure1_slot7;
                var1 = _closure1_slot5;
                var0 = {};
                var12 = var9.wrap;
                var0.style = var12;
                var12 = 'box-none';
                var0.pointerEvents = var12;
                var0.onLayout = var6;
                var6 = _closure1_slot6;
                var4 = 10;
                var4 = var11[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var11 = var9.gradient;
                var4.style = var11;
                var15 = var4;
                var14 = var7;
                var7 = copyDataProperties(var15, var14);
                var11 = 'none';
                var7 = 'pointerEvents';
                var4[var7] = var11;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var7 = var9.container;
                var5.style = var7;
                var7 = {};
                var9 = var9.buttonsContainer;
                var7.style = var9;
                var9 = var10.map;
                var8 = function(arg0, arg1) { // Environment: var8
                    _fun108477: for (var _fun108477_ip = 0;;) switch (_fun108477_ip) {
                        case 0:
                            var8 = arg0;
                            var4 = _closure1_slot7;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 11;
                            var0 = var2[var0];
                            var3 = undefined;
                            var0 = var1.bind(var3)(var0);
                            var2 = var0.PressableOpacity;
                            var1 = {};
                            var0 = var8.disabled;
                            var1.disabled = var0;
                            var0 = _closure2_slot1;
                            var0 = var0.button;
                            var1.style = var0;
                            var0 = var8.onPress;
                            var1.onPress = var0;
                            var7 = _closure1_slot6;
                            var6 = var8.IconComponent;
                            var0 = {};
                            var9 = 'md';
                            var0.size = var9;
                            var11 = var8.disabled;
                            var9 = 'text-default';
                            var10 = var9;
                            if (!var11) {
                                _fun108477_ip = 117;
                                continue _fun108477
                            }
                        case 111:
                            var10 = 'text-muted';
                        case 117:
                            var0.color = var10;
                            var6 = var7.bind(var3)(var6, var0);
                            var0 = new Array(2);
                            var0[0] = var6;
                            var7 = _closure1_slot6;
                            var6 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var5 = 12;
                            var5 = var10[var5];
                            var5 = var6.bind(var3)(var5);
                            var6 = var5.Text;
                            var5 = {
                                'lineClamp': 1,
                                'variant': 'text-xs/semibold'
                            };
                            var10 = var8.disabled;
                            if (!var10) {
                                _fun108477_ip = 192;
                                continue _fun108477
                            }
                        case 186:
                            var9 = 'text-muted';
                        case 192:
                            var5.color = var9;
                            var8 = var8.text;
                            var5.children = var8;
                            var5 = var7.bind(var3)(var6, var5);
                            var0[1] = var5;
                            var1.children = var0;
                            var0 = arg1;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var8 = var9.bind(var10)(var8);
                var7.children = var8;
                var7 = var6.bind(var3)(var1, var7);
                var5.children = var7;
                var5 = var6.bind(var3)(var1, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_keyboard/native/components/MediaKeyboardBottomSheetActions.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 478, 3154, 669, 3110, 1568, 4057, 4865, 3900, 2]);