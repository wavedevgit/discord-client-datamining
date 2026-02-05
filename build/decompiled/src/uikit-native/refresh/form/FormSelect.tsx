// uikit-native/refresh/form/FormSelect.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun48212: for (var _fun48212_ip = 0;;) switch (_fun48212_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.item;
                var _closure2_slot0 = var8;
                var4 = var0.selected;
                var9 = var0.onPress;
                var _closure2_slot1 = var9;
                var2 = _closure1_slot8;
                var3 = undefined;
                var5 = var2.bind(var3)();
                var7 = _closure1_slot3;
                var6 = var7.useCallback;
                var2 = new Array(2);
                var2[0] = var8;
                var2[1] = var9;
                var1 = function() { // Environment: var1
                    _fun48213: for (var _fun48213_ip = 0;;) switch (_fun48213_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun48213_ip = 28;
                                continue _fun48213
                            }
                        case 13:
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 28:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var6.bind(var7)(var1, var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 6;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var9 = var8.descriptiveLabel;
                var7 = null;
                if (!(var7 == var9)) {
                    _fun48212_ip = 117;
                    continue _fun48212
                }
            case 112:
                var9 = var8.label;
            case 117:
                var0.accessibilityLabel = var9;
                var9 = {};
                var9.selected = var4;
                var0.accessibilityState = var9;
                var9 = 'radio';
                var0.accessibilityRole = var9;
                var9 = var8.label;
                var8 = var9.toUpperCase;
                var8 = var8.bind(var9)();
                var0.text = var8;
                var0.onPress = var6;
                var8 = var5.button;
                var6 = new Array(2);
                var6[0] = var8;
                var7 = null;
                if (!var4) {
                    _fun48212_ip = 189;
                    continue _fun48212
                }
            case 183:
                var7 = var5.buttonSelected;
            case 189:
                var6[1] = var7;
                var0.style = var6;
                if (var4) {
                    _fun48212_ip = 207;
                    continue _fun48212
                }
            case 200:
                var4 = var5.label;
                _fun48212_ip = 213;
                continue _fun48212;
            case 207:
                var4 = var5.labelSelected;
            case 213:
                var0.textStyle = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.value;
        var0 = global;
        var0 = var0.HermesInternal;
        var1 = var0.concat;
        var0 = '';
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var _closure1_slot11 = var0;
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
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var9 = var3.StyleSheet;
    var3 = var3.FlatList;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var12 = var3.Fonts;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var6 = var5[var3];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = {};
    var10 = {
        'minWidth': 95,
        'height': 36,
        'margin': 4,
        'borderRadius': 3,
        'justifyContent': 'center',
        'alignItems': 'center',
        'paddingHorizontal': 10,
        'borderWidth': null,
        'shadowColor': null,
        'shadowOffset': null,
        'shadowOpacity': 0.12,
        'shadowRadius': 6
    };
    var9 = var9.hairlineWidth;
    var10.borderWidth = var9;
    var9 = 5;
    var13 = var5[var9];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BLACK;
    var10.shadowColor = var13;
    var13 = {
        'width': 0,
        'height': 2
    };
    var10.shadowOffset = var13;
    var13 = var5[var9];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWEST;
    var10.backgroundColor = var13;
    var6.button = var10;
    var10 = {};
    var13 = var5[var9];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BRAND;
    var10.backgroundColor = var13;
    var6.buttonSelected = var10;
    var10 = {};
    var13 = var12.PRIMARY_SEMIBOLD;
    var10.fontFamily = var13;
    var13 = 14;
    var10.fontSize = var13;
    var13 = var5[var9];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_MUTED;
    var10.color = var13;
    var6.label = var10;
    var10 = {};
    var13 = var5[var9];
    var13 = var11.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.BRAND_100;
    var10.color = var13;
    var6.labelSelected = var10;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot8 = var6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var10 = 12;
    var3 = {
        'paddingVertical': 12,
        'paddingHorizontal': 16
    };
    var6.row = var3;
    var3 = {};
    var12 = var12.PRIMARY_SEMIBOLD;
    var3.fontFamily = var12;
    var12 = 13;
    var3.fontSize = var12;
    var9 = var5[var9];
    var9 = var11.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_MUTED;
    var3.color = var9;
    var6.label = var3;
    var3 = 8;
    var9 = {
        'marginHorizontal': 4294967280,
        'paddingTop': 20,
        'marginTop': 4294967276,
        'paddingBottom': 8,
        'marginBottom': 4294967288
    };
    var6.optionsWrapper = var9;
    var9 = {};
    var9.paddingHorizontal = var10;
    var6.optionsContainer = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot9 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/refresh/form/FormSelect.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun48215: for (var _fun48215_ip = 0;;) switch (_fun48215_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.label;
                var12 = var0.options;
                var11 = var0.value;
                var _closure2_slot0 = var11;
                var1 = var0.onChange;
                var _closure2_slot1 = var1;
                var8 = var0.onScrollBeginDrag;
                var0 = _closure1_slot9;
                var3 = undefined;
                var13 = var0.bind(var3)();
                var2 = _closure1_slot7;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var13.row;
                var0.style = var4;
                var4 = null;
                var5 = var4 != var15;
                if (!var5) {
                    _fun48215_ip = 156;
                    continue _fun48215
                }
            case 82:
                var7 = _closure1_slot6;
                var6 = _closure1_slot0;
                var14 = _closure1_slot2;
                var4 = 7;
                var4 = var14[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.Text;
                var4 = {
                    'style': null,
                    'variant': 'heading-md/medium',
                    'accessibilityRole': 'header'
                };
                var14 = var13.label;
                var4.style = var14;
                var14 = var15.toUpperCase;
                var14 = var14.bind(var15)();
                var4.children = var14;
                var5 = var7.bind(var3)(var6, var4);
            case 156:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot6;
                var6 = _closure1_slot5;
                var5 = {};
                var14 = var13.optionsWrapper;
                var5.style = var14;
                var13 = var13.optionsContainer;
                var5.contentContainerStyle = var13;
                var5.data = var12;
                var5.extraData = var11;
                var10 = _closure1_slot11;
                var5.keyExtractor = var10;
                var9 = function arg0() {
                    var0 = arg0;
                    var0 = var0.item;
                    var3 = _closure1_slot6;
                    var2 = _closure1_slot10;
                    var1 = {};
                    var1.item = var0;
                    var4 = var0.value;
                    var0 = _closure2_slot0;
                    var0 = var4 === var0;
                    var1.selected = var0;
                    var0 = function arg0() {
                        _fun48217: for (var _fun48217_ip = 0;;) switch (_fun48217_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.value;
                                var2 = _closure2_slot1;
                                var0 = null;
                                var4 = var0 == var2;
                                var2 = undefined;
                                var0 = undefined;
                                if (var4) {
                                    _fun48217_ip = 37;
                                    continue _fun48217
                                }
                            case 28:
                                var1 = _closure2_slot1;
                                var0 = var1.bind(var2)(var3);
                            case 37:
                                return var0;
                        }
                    };
                    var1.onPress = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var5.renderItem = var9;
                var9 = false;
                var5.showsHorizontalScrollIndicator = var9;
                var9 = true;
                var5.horizontal = var9;
                var5.onScrollBeginDrag = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 4875, 4878, 2]);