// modules/channel_list_v2/native/items/RedesignCategory.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun102516: for (var _fun102516_ip = 0;;) switch (_fun102516_ip) {
        case 0:
            var6 = require;
            var8 = metroImportDefault;
            var2 = exports;
            var7 = dependencyMap;
            var _closure1_slot0 = var6;
            var _closure1_slot1 = var8;
            var _closure1_slot2 = var7;
            var4 = function arg0() {
                _fun102517: for (var _fun102517_ip = 0;;) switch (_fun102517_ip) {
                    case 0:
                        var0 = arg0;
                        var16 = var0.name;
                        var15 = var0.icon;
                        var11 = var0.note;
                        var18 = var0.muted;
                        var4 = undefined;
                        if (!(var18 === var4)) {
                            _fun102517_ip = 33;
                            continue _fun102517
                        }
                    case 31:
                        var18 = false;
                    case 33:
                        var8 = var0.onPress;
                        var7 = var0.onLongPress;
                        var5 = var0.withMarginTop;
                        var9 = var0.accessibilityState;
                        var0 = _closure1_slot14;
                        var0 = var0.categoryWrapper;
                        var6 = new Array(2);
                        var6[0] = var0;
                        var2 = {};
                        var0 = null;
                        var10 = var0 != var15;
                        var3 = 16;
                        if (!var10) {
                            _fun102517_ip = 94;
                            continue _fun102517
                        }
                    case 91:
                        var3 = 3;
                    case 94:
                        var2.paddingLeft = var3;
                        var3 = 0;
                        if (!var5) {
                            _fun102517_ip = 108;
                            continue _fun102517
                        }
                    case 104:
                        var3 = _closure1_slot9;
                    case 108:
                        var2.marginTop = var3;
                        var3 = _closure1_slot8;
                        var2.marginBottom = var3;
                        var6[1] = var2;
                        var5 = _closure1_slot13;
                        var3 = _closure1_slot12;
                        var2 = {};
                        var10 = var0 != var15;
                        var12 = null;
                        if (!var10) {
                            _fun102517_ip = 177;
                            continue _fun102517
                        }
                    case 143:
                        var14 = _closure1_slot11;
                        var13 = _closure1_slot4;
                        var10 = {};
                        var17 = _closure1_slot14;
                        var17 = var17.iconWrapperStyles;
                        var10.style = var17;
                        var10.children = var15;
                        var12 = var14.bind(var4)(var13, var10);
                    case 177:
                        var10 = new Array(3);
                        var10[0] = var12;
                        var14 = 'string';
                        var13 = typeof var16;
                        var12 = var16;
                        if (!(var14 === var13)) {
                            _fun102517_ip = 296;
                            continue _fun102517
                        }
                    case 199:
                        var15 = _closure1_slot11;
                        var14 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var13 = 8;
                        var13 = var17[var13];
                        var13 = var14.bind(var4)(var13);
                        var14 = var13.Text;
                        var13 = {};
                        var17 = true;
                        var13.experimental_useNativeText = var17;
                        var17 = _closure1_slot10;
                        var13.variant = var17;
                        var17 = 'text-subtle';
                        if (!var18) {
                            _fun102517_ip = 260;
                            continue _fun102517
                        }
                    case 254:
                        var17 = 'text-muted';
                    case 260:
                        var13.color = var17;
                        var17 = 1;
                        var13.lineClamp = var17;
                        var17 = _closure1_slot14;
                        var17 = var17.categoryText;
                        var13.style = var17;
                        var13.children = var16;
                        var12 = var15.bind(var4)(var14, var13);
                    case 296:
                        var10[1] = var12;
                        var10[2] = var11;
                        var2.children = var10;
                        var5 = var5.bind(var4)(var3, var2);
                        if (!(var0 == var8)) {
                            _fun102517_ip = 356;
                            continue _fun102517
                        }
                    case 318:
                        if (!(var0 == var7)) {
                            _fun102517_ip = 356;
                            continue _fun102517
                        }
                    case 322:
                        var3 = _closure1_slot11;
                        var2 = _closure1_slot4;
                        var0 = {};
                        var10 = 'header';
                        var0.accessibilityRole = var10;
                        var0.style = var6;
                        var0.children = var5;
                        var0 = var3.bind(var4)(var2, var0);
                        _fun102517_ip = 424;
                        continue _fun102517;
                    case 356:
                        var3 = _closure1_slot11;
                        var2 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var1 = 9;
                        var1 = var10[var1];
                        var1 = var2.bind(var4)(var1);
                        var2 = var1.PressableHighlight;
                        var1 = {};
                        var10 = 'header';
                        var1.accessibilityRole = var10;
                        var1.accessibilityState = var9;
                        var1.onPress = var8;
                        var1.onLongPress = var7;
                        var1.style = var6;
                        var1.children = var5;
                        var0 = var3.bind(var4)(var2, var1);
                    case 424:
                        return var0;
                }
            };
            var _closure1_slot17 = var4;
            var0 = function arg0() {
                _fun102518: for (var _fun102518_ip = 0;;) switch (_fun102518_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = var2.collapsed;
                        var0 = null;
                        var1 = Object.create(var0);
                        var0 = 0;
                        var1.collapsed = var0;
                        var12 = {};
                        var11 = var2;
                        var10 = var1;
                        var5 = copyDataProperties(var12, var11, var10);
                        var1 = var5.muted;
                        var6 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 10;
                        var0 = var2[var0];
                        var2 = undefined;
                        var0 = var6.bind(var2)(var0);
                        var0 = var0.colors;
                        if (var1) {
                            _fun102518_ip = 80;
                            continue _fun102518
                        }
                    case 72:
                        var8 = var0.TEXT_SUBTLE;
                        _fun102518_ip = 86;
                        continue _fun102518;
                    case 80:
                        var8 = var0.ICON_MUTED;
                    case 86:
                        if (var3) {
                            _fun102518_ip = 95;
                            continue _fun102518
                        }
                    case 89:
                        var7 = _closure1_slot16;
                        _fun102518_ip = 99;
                        continue _fun102518;
                    case 95:
                        var7 = _closure1_slot15;
                    case 99:
                        var1 = _closure1_slot17;
                        var0 = {};
                        var12 = var0;
                        var11 = var5;
                        var5 = copyDataProperties(var12, var11);
                        var6 = _closure1_slot11;
                        var5 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var4 = 11;
                        var4 = var9[var4];
                        var4 = var5.bind(var2)(var4);
                        var5 = var4.ChevronSmallDownIcon;
                        var4 = {};
                        var9 = 'xxs';
                        var4.size = var9;
                        var4.color = var8;
                        var4.style = var7;
                        var5 = var6.bind(var2)(var5, var4);
                        var4 = 'icon';
                        var0[var4] = var5;
                        var4 = {};
                        var3 = !var3;
                        var4.expanded = var3;
                        var3 = 'accessibilityState';
                        var0[var3] = var4;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var _closure1_slot18 = var0;
            var3 = function arg0, arg1() {
                var5 = arg0;
                var3 = arg1;
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var3;
                var0 = {};
                var7 = _closure1_slot3;
                var6 = var7.useCallback;
                var4 = new Array(2);
                var4[0] = var5;
                var4[1] = var3;
                var3 = function() { // Environment: var1
                    _fun102520: for (var _fun102520_ip = 0;;) switch (_fun102520_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 12;
                            var3 = var3[var0];
                            var0 = undefined;
                            var3 = var4.bind(var0)(var3);
                            if (var2) {
                                _fun102520_ip = 52;
                                continue _fun102520
                            }
                        case 35:
                            var4 = var3.categoryCollapse;
                            var2 = _closure2_slot0;
                            var2 = var4.bind(var3)(var2);
                            _fun102520_ip = 67;
                            continue _fun102520;
                        case 52:
                            var2 = var3.categoryExpand;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var3)(var1);
                        case 67:
                            return var0;
                    }
                };
                var3 = var6.bind(var7)(var3, var4);
                var0.onPress = var3;
                var4 = _closure1_slot3;
                var3 = var4.useCallback;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.openChannelLongPressActionSheet;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var3.bind(var4)(var1, var2);
                var0.onLongPress = var1;
                return var0;
            };
            var _closure1_slot19 = var3;
            var0 = global;
            var10 = var0.Object;
            var9 = var10.defineProperty;
            var5 = {};
            var0 = true;
            var5.value = var0;
            var0 = '__esModule';
            var0 = var9.bind(var10)(var2, var0, var5);
            var12 = 0;
            var9 = var7[var12];
            var5 = arg3;
            var0 = undefined;
            var5 = var5.bind(var0)(var9);
            var _closure1_slot3 = var5;
            var13 = 1;
            var5 = var7[var13];
            var5 = var6.bind(var0)(var5);
            var9 = var5.StyleSheet;
            var5 = var5.View;
            var _closure1_slot4 = var5;
            var5 = 2;
            var5 = var7[var5];
            var5 = var8.bind(var0)(var5);
            var _closure1_slot5 = var5;
            var11 = 3;
            var5 = var7[var11];
            var5 = var8.bind(var0)(var5);
            var _closure1_slot6 = var5;
            var5 = 4;
            var5 = var7[var5];
            var5 = var8.bind(var0)(var5);
            var _closure1_slot7 = var5;
            var5 = 5;
            var5 = var7[var5];
            var5 = var6.bind(var0)(var5);
            var8 = var5.CATEGORY_MARGIN_BOTTOM;
            var _closure1_slot8 = var8;
            var8 = var5.CATEGORY_MARGIN_TOP;
            var _closure1_slot9 = var8;
            var8 = var5.CATEGORY_NAME_TEXT_VARIANT;
            var _closure1_slot10 = var8;
            var14 = var5.CATEGORY_VERTICAL_PADDING;
            var5 = 6;
            var5 = var7[var5];
            var5 = var6.bind(var0)(var5);
            var8 = var5.jsx;
            var _closure1_slot11 = var8;
            var8 = var5.Fragment;
            var _closure1_slot12 = var8;
            var5 = var5.jsxs;
            var _closure1_slot13 = var5;
            var8 = var9.create;
            var5 = {};
            var10 = {
                'display': 'flex',
                'flexDirection': 'row',
                'alignItems': 'center',
                'paddingVertical': null,
                'paddingRight': 16
            };
            var10.paddingVertical = var14;
            var5.categoryWrapper = var10;
            var10 = {};
            var10.flex = var13;
            var13 = 7;
            var13 = var7[var13];
            var14 = var6.bind(var0)(var13);
            var13 = var14.isAndroid;
            var13 = var13.bind(var14)();
            if (!var13) {
                _fun102516_ip = 343;
                continue _fun102516
            }
        case 337:
            var12 = -1;
        case 343:
            var10.marginTop = var12;
            var5.categoryText = var10;
            var10 = {};
            var10.marginRight = var11;
            var5.iconWrapperStyles = var10;
            var5 = var8.bind(var9)(var5);
            var _closure1_slot14 = var5;
            var8 = {
                'flexShrink': 0,
                'flexGrow': 0
            };
            var5 = {};
            var17 = var5;
            var16 = var8;
            var9 = copyDataProperties(var17, var16);
            var9 = {};
            var10 = '-90deg';
            var9.rotate = var10;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = 'transform';
            var5[var9] = var10;
            var _closure1_slot15 = var5;
            var5 = {};
            var17 = var5;
            var16 = var8;
            var8 = copyDataProperties(var17, var16);
            var _closure1_slot16 = var5;
            var5 = 20;
            var5 = var7[var5];
            var7 = var6.bind(var0)(var5);
            var6 = var7.fileFinishedImporting;
            var5 = 'modules/channel_list_v2/native/items/RedesignCategory.tsx';
            var5 = var6.bind(var7)(var5);
            var2.renderCategoryItem = var4;
            var2.useCategoryPressEvents = var3;
            var3 = function arg0() {
                var0 = arg0;
                var8 = var0.channel;
                var _closure2_slot0 = var8;
                var3 = var0.withMarginTop;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 14;
                var4 = var4[var2];
                var2 = undefined;
                var6 = var5.bind(var2)(var4);
                var5 = var6.useStateFromStoresObject;
                var7 = _closure1_slot6;
                var4 = new Array(2);
                var4[0] = var7;
                var7 = _closure1_slot7;
                var4[1] = var7;
                var1 = function() { // Environment: var1
                    var0 = {};
                    var5 = _closure1_slot6;
                    var4 = var5.isCollapsed;
                    var1 = _closure2_slot0;
                    var3 = var1.id;
                    var3 = var4.bind(var5)(var3);
                    var0.collapsed = var3;
                    var4 = _closure1_slot7;
                    var3 = var4.isChannelMuted;
                    var2 = var1.getGuildId;
                    var2 = var2.bind(var1)();
                    var1 = var1.id;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.muted = var1;
                    return var0;
                };
                var1 = var5.bind(var6)(var4, var1);
                var6 = var1.collapsed;
                var7 = var1.muted;
                var4 = _closure1_slot19;
                var1 = var8.id;
                var1 = var4.bind(var2)(var1, var6);
                var5 = var1.onPress;
                var4 = var1.onLongPress;
                var1 = _closure1_slot18;
                var0 = {};
                var8 = var8.name;
                var0.name = var8;
                var0.muted = var7;
                var0.collapsed = var6;
                var0.onPress = var5;
                var0.onLongPress = var4;
                var0.withMarginTop = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var2.CategoryChannel = var3;
            var3 = function arg0() {
                var0 = arg0;
                var8 = var0.guildId;
                var _closure2_slot0 = var8;
                var3 = var0.withMarginTop;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 14;
                var4 = var10[var2];
                var2 = undefined;
                var7 = var9.bind(var2)(var4);
                var6 = var7.useStateFromStores;
                var4 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var1
                    var2 = _closure1_slot5;
                    var1 = var2.isCollapsed;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var6.bind(var7)(var5, var4);
                var _closure2_slot1 = var5;
                var7 = _closure1_slot3;
                var6 = var7.useCallback;
                var4 = new Array(2);
                var4[0] = var8;
                var4[1] = var5;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.setRecentlyActiveCollapsed;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var0 = !var0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var4 = var6.bind(var7)(var1, var4);
                var1 = _closure1_slot18;
                var0 = {};
                var6 = 16;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var2)(var6);
                var6 = var6.t;
                var6 = var6.uZyspD;
                var6 = var7.bind(var8)(var6);
                var0.name = var6;
                var0.collapsed = var5;
                var0.onPress = var4;
                var0.withMarginTop = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var2.RecentlyActiveCategory = var3;
            var1 = function arg0() {
                var0 = arg0;
                var7 = var0.guildId;
                var _closure2_slot0 = var7;
                var6 = var0.channelIds;
                var _closure2_slot1 = var6;
                var3 = var0.withMarginTop;
                var5 = _closure1_slot3;
                var4 = var5.useCallback;
                var2 = new Array(2);
                var2[0] = var7;
                var2[1] = var6;
                var1 = function() { // Environment: var1
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 17;
                    var1 = var7[var0];
                    var0 = undefined;
                    var3 = var6.bind(var0)(var1);
                    var2 = var3.showSimpleActionSheet;
                    var1 = {};
                    var4 = 'REDESIGN_SUGGESTED_CHANNELS_CLEAR';
                    var1.key = var4;
                    var5 = {};
                    var4 = 16;
                    var8 = var7[var4];
                    var8 = var6.bind(var0)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var4 = var7[var4];
                    var4 = var6.bind(var0)(var4);
                    var4 = var4.t;
                    var4 = var4.VkKicb;
                    var4 = var8.bind(var9)(var4);
                    var5.label = var4;
                    var4 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 18;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.clearRecentChannels;
                        var2 = _closure2_slot0;
                        var1 = _closure2_slot1;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var5.onPress = var4;
                    var4 = 19;
                    var4 = var7[var4];
                    var4 = var6.bind(var0)(var4);
                    var4 = var4.CircleXIcon;
                    var5.IconComponent = var4;
                    var4 = new Array(1);
                    var4[0] = var5;
                    var1.options = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4 = var4.bind(var5)(var1, var2);
                var2 = _closure1_slot17;
                var1 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 16;
                var6 = var9[var5];
                var0 = undefined;
                var6 = var8.bind(var0)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var0)(var5);
                var5 = var5.t;
                var5 = var5.HbJ7eD;
                var5 = var6.bind(var7)(var5);
                var1.name = var5;
                var1.onPress = var4;
                var1.withMarginTop = var3;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var2.SuggestedCategory = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4572, 4567, 4303, 8871, 33, 478, 3942, 4904, 671, 7438, 9975, 9182, 566, 4694, 1234, 7801, 9976, 5425, 2]);