// modules/application_commands/native/ApplicationCommandsCategories.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var15 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var15;
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
    var7 = var3.bind(var0)(var6);
    var _closure1_slot3 = var7;
    var16 = 1;
    var3 = var5[var16];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var6 = var3.StyleSheet;
    var _closure1_slot5 = var6;
    var3 = var3.FlatList;
    var _closure1_slot6 = var3;
    var12 = 2;
    var3 = var5[var12];
    var3 = var15.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var15.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var17 = var3.ICON_SIZE;
    var11 = var3.NODE_SIZE;
    var13 = var3.NODE_MARGIN;
    var3 = var3.ITEM_WIDTH;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = {
        'backgroundColor': null,
        'paddingHorizontal': 8,
        'paddingVertical': 4,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var14 = 7;
    var10 = var5[var14];
    var10 = var15.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWEST;
    var9.backgroundColor = var10;
    var10 = 'center';
    var3.container = var9;
    var9 = {};
    var9.height = var17;
    var9.width = var17;
    var17 = var17 / var12;
    var9.borderRadius = var17;
    var3.categoryImage = var9;
    var9 = {};
    var17 = 0.5;
    var9.opacity = var17;
    var3.fadedItem = var9;
    var9 = {};
    var9.opacity = var16;
    var14 = var5[var14];
    var14 = var15.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var14;
    var3.activeItem = var9;
    var9 = {};
    var9.marginVertical = var13;
    var9.marginHorizontal = var13;
    var9.height = var11;
    var9.width = var11;
    var11 = var11 / var12;
    var9.borderRadius = var11;
    var9.alignItems = var10;
    var9.justifyContent = var10;
    var3.item = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot12 = var3;
    var6 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun90643: for (var _fun90643_ip = 0;;) switch (_fun90643_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.section;
                var _closure2_slot0 = var0;
                var2 = var1.handlePressCategory;
                var _closure2_slot1 = var2;
                var10 = var1.active;
                var2 = var1.index;
                var _closure2_slot2 = var2;
                var1 = var1.guildId;
                var _closure2_slot3 = var1;
                var1 = _closure1_slot12;
                var4 = undefined;
                var11 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var7 = var2.bind(var4)(var1);
                var3 = var7.useStateFromStores;
                var1 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var6
                    _fun90644: for (var _fun90644_ip = 0;;) switch (_fun90644_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun90644_ip = 40;
                                continue _fun90644
                            }
                        case 13:
                            var1 = _closure2_slot0;
                            var3 = var2 == var1;
                            var1 = undefined;
                            if (var3) {
                                _fun90644_ip = 36;
                                continue _fun90644
                            }
                        case 26:
                            var3 = _closure2_slot0;
                            var1 = var3.botId;
                        case 36:
                            if (!(var2 == var1)) {
                                _fun90644_ip = 44;
                                continue _fun90644
                            }
                        case 40:
                            var1 = undefined;
                            return var1;
                        case 44:
                            var3 = _closure1_slot8;
                            var2 = var3.getMember;
                            var1 = _closure2_slot3;
                            var0 = _closure2_slot0;
                            var0 = var0.botId;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var1 = var3.bind(var7)(var2, var1);
                var _closure2_slot4 = var1;
                var7 = _closure1_slot3;
                var3 = var7.useMemo;
                var2 = new Array(2);
                var2[0] = var0;
                var2[1] = var1;
                var1 = function() { // Environment: var6
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getApplicationCommandsIconSource;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var7 = var3.bind(var7)(var1, var2);
                var1 = null;
                var8 = var1 != var7;
                if (!var8) {
                    _fun90643_ip = 204;
                    continue _fun90643
                }
            case 158:
                var3 = _closure1_slot10;
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 10;
                var1 = var9[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var9 = var11.categoryImage;
                var1.style = var9;
                var1.source = var7;
                var8 = var3.bind(var4)(var2, var1);
            case 204:
                var3 = _closure1_slot10;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 11;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var6 = function() {
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var1.onPress = var6;
                var6 = 'button';
                var1.accessibilityRole = var6;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 12;
                var12 = var9[var6];
                var12 = var7.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.formatToPlainString;
                var6 = var9[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.t;
                if (var10) {
                    _fun90643_ip = 330;
                    continue _fun90643
                }
            case 302:
                var9 = var7["9uqD4O"];
                var6 = {};
                var14 = var0.name;
                var6.applicationName = var14;
                var6 = var12.bind(var13)(var9, var6);
                _fun90643_ip = 356;
                continue _fun90643;
            case 330:
                var9 = var7.yl24Gd;
                var7 = {};
                var14 = var0.name;
                var7.applicationName = var14;
                var6 = var12.bind(var13)(var9, var7);
            case 356:
                var1.accessibilityLabel = var6;
                var7 = _closure1_slot10;
                var6 = _closure1_slot4;
                var5 = {};
                var12 = var11.item;
                var9 = new Array(2);
                var9[0] = var12;
                if (var10) {
                    _fun90643_ip = 394;
                    continue _fun90643
                }
            case 386:
                var10 = var11.fadedItem;
                _fun90643_ip = 400;
                continue _fun90643;
            case 394:
                var10 = var11.activeItem;
            case 400:
                var9[1] = var10;
                var5.style = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var0.name;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/application_commands/native/ApplicationCommandsCategories.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun90647: for (var _fun90647_ip = 0;;) switch (_fun90647_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.style;
                var12 = var0.sections;
                var1 = var0.onPressSection;
                var _closure2_slot0 = var1;
                var15 = var0.selectedIndex;
                var _closure2_slot1 = var15;
                var0 = var0.guildId;
                var _closure2_slot2 = var0;
                var2 = _closure1_slot12;
                var3 = undefined;
                var4 = var2.bind(var3)();
                var7 = _closure1_slot3;
                var2 = var7.useRef;
                var8 = null;
                var2 = var2.bind(var7)(var8);
                var _closure2_slot3 = var2;
                var2 = var7.useRef;
                var2 = var2.bind(var7)(var8);
                var _closure2_slot4 = var2;
                var2 = var7.useRef;
                var2 = var2.bind(var7)(var8);
                var _closure2_slot5 = var2;
                var2 = var7.useRef;
                var14 = var2.bind(var7)(var8);
                var _closure2_slot6 = var14;
                var9 = var7.useEffect;
                var8 = new Array(1);
                var8[0] = var15;
                var2 = function() { // Environment: var11
                    _fun90648: for (var _fun90648_ip = 0;;) switch (_fun90648_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var1 = var1.current;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun90648_ip = 131;
                                continue _fun90648
                            }
                        case 18:
                            var1 = _closure2_slot4;
                            var1 = var1.current;
                            if (!(var2 != var1)) {
                                _fun90648_ip = 131;
                                continue _fun90648
                            }
                        case 31:
                            var1 = _closure2_slot6;
                            var1 = var1.current;
                            if (!(var2 != var1)) {
                                _fun90648_ip = 131;
                                continue _fun90648
                            }
                        case 44:
                            var1 = _closure2_slot5;
                            var1 = var1.current;
                            if (!(var2 != var1)) {
                                _fun90648_ip = 131;
                                continue _fun90648
                            }
                        case 57:
                            var2 = _closure2_slot1;
                            var1 = _closure1_slot9;
                            var3 = var2 * var1;
                            var1 = _closure2_slot4;
                            var1 = var1.current;
                            var1 = var3 > var1;
                            if (var1) {
                                _fun90648_ip = 101;
                                continue _fun90648
                            }
                        case 88:
                            var2 = _closure2_slot3;
                            var2 = var2.current;
                            var1 = var3 < var2;
                        case 101:
                            if (!var1) {
                                _fun90648_ip = 131;
                                continue _fun90648
                            }
                        case 104:
                            var0 = _closure2_slot6;
                            var2 = var0.current;
                            var1 = var2.scrollToOffset;
                            var0 = {};
                            var0.offset = var3;
                            var0 = var1.bind(var2)(var0);
                        case 131:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var9.bind(var7)(var2, var8);
                var8 = var7.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function(arg0) { // Environment: var11
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 13;
                    var2 = var5[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.triggerHapticFeedback;
                    var4 = _closure1_slot1;
                    var1 = 14;
                    var1 = var5[var1];
                    var1 = var4.bind(var0)(var1);
                    var1 = var1.IMPACT_LIGHT;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var10 = var8.bind(var7)(var1, var2);
                var _closure2_slot7 = var10;
                var8 = var7.useCallback;
                var2 = function(arg0) { // Environment: var11
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var2 = var0.contentOffset;
                    var0 = var0.layoutMeasurement;
                    var4 = _closure2_slot3;
                    var3 = var2.x;
                    var4.current = var3;
                    var1 = _closure2_slot4;
                    var2 = var2.x;
                    var0 = var0.width;
                    var0 = var2 + var0;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var1 = new Array(0);
                var9 = var8.bind(var7)(var2, var1);
                var8 = var7.useCallback;
                var2 = function(arg0) { // Environment: var11
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var3 = _closure2_slot3;
                    var2 = 0;
                    var3.current = var2;
                    var3 = _closure2_slot4;
                    var2 = var0.width;
                    var3.current = var2;
                    var1 = _closure2_slot5;
                    var0 = var0.width;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var1 = new Array(0);
                var8 = var8.bind(var7)(var2, var1);
                var13 = var7.useCallback;
                var2 = function(arg0, arg1) { // Environment: var11
                    var1 = arg1;
                    var0 = {};
                    var2 = _closure1_slot9;
                    var0.length = var2;
                    var2 = var2 * var1;
                    var0.offset = var2;
                    var0.index = var1;
                    return var0;
                };
                var1 = new Array(0);
                var13 = var13.bind(var7)(var2, var1);
                var2 = var7.useCallback;
                var1 = new Array(3);
                var1[0] = var15;
                var1[1] = var10;
                var1[2] = var0;
                var0 = function(arg0) { // Environment: var11
                    var0 = arg0;
                    var5 = var0.item;
                    var4 = var0.index;
                    var3 = _closure1_slot10;
                    var2 = _closure1_slot13;
                    var1 = {};
                    var6 = _closure2_slot1;
                    var6 = var4 === var6;
                    var1.active = var6;
                    var1.section = var5;
                    var1.index = var4;
                    var4 = _closure2_slot7;
                    var1.handlePressCategory = var4;
                    var0 = _closure2_slot2;
                    var1.guildId = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var10 = var2.bind(var7)(var0, var1);
                var2 = _closure1_slot11;
                var1 = _closure1_slot4;
                var0 = {};
                var7 = var4.container;
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var6;
                var0.style = var4;
                var7 = _closure1_slot10;
                var6 = _closure1_slot1;
                var17 = _closure1_slot2;
                var4 = 15;
                var4 = var17[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var16 = _closure1_slot0;
                var15 = 16;
                var15 = var17[var15];
                var17 = var16.bind(var3)(var15);
                var16 = var17.isThemeDark;
                var15 = _closure1_slot7;
                var15 = var15.theme;
                var16 = var16.bind(var17)(var15);
                var15 = 'light';
                if (!var16) {
                    _fun90647_ip = 381;
                    continue _fun90647
                }
            case 377:
                var15 = 'dark';
            case 381:
                var4.blurTheme = var15;
                var15 = _closure1_slot5;
                var15 = var15.absoluteFill;
                var4.style = var15;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot10;
                var6 = _closure1_slot6;
                var5 = {};
                var5.ref = var14;
                var5.getItemLayout = var13;
                var5.data = var12;
                var12 = 'always';
                var5.keyboardShouldPersistTaps = var12;
                var12 = true;
                var5.horizontal = var12;
                var11 = function arg0() {
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var5.keyExtractor = var11;
                var5.renderItem = var10;
                var10 = false;
                var5.showsHorizontalScrollIndicator = var10;
                var5.onScroll = var9;
                var5.onLayout = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3198, 1683, 11775, 33, 1297, 671, 566, 9708, 4704, 4904, 1234, 3280, 3281, 4073, 3207, 2]);