// modules/avatar_decorations/native/EditAvatarDecorationSection.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ActivityIndicator;
    var _closure1_slot4 = var7;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isAvatarDecorationRecord;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AVATAR_DECORATION_SIZE;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'marginBottom': 10,
        'gap': 5
    };
    var3.avatarDecorationSection = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between'
    };
    var9 = 7;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.GUTTER_SIZE;
    var8.paddingHorizontal = var9;
    var3.row = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/avatar_decorations/native/EditAvatarDecorationSection.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun50850: for (var _fun50850_ip = 0;;) switch (_fun50850_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.selectedAvatarDecoration;
                var _closure2_slot0 = var17;
                var16 = var0.setSelectedAvatarDecoration;
                var _closure2_slot1 = var16;
                var14 = var0.section;
                var _closure2_slot2 = var14;
                var6 = var0.purchases;
                var _closure2_slot3 = var6;
                var19 = var0.guildId;
                var _closure2_slot4 = var19;
                var12 = var0.scrollToInitialItem;
                var4 = undefined;
                if (!(var12 === var4)) {
                    _fun50850_ip = 67;
                    continue _fun50850
                }
            case 65:
                var12 = false;
            case 67:
                var2 = var0.isTryItOut;
                if (!(var2 === var4)) {
                    _fun50850_ip = 79;
                    continue _fun50850
                }
            case 77:
                var2 = false;
            case 79:
                var _closure2_slot5 = var2;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var0 = _closure1_slot11;
                var3 = var0.bind(var4)();
                _closure2_slot6 = var3;
                var1 = _closure1_slot1;
                var8 = _closure1_slot2;
                var18 = 7;
                var0 = var8[var18];
                var0 = var1.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var15 = var0.size;
                _closure2_slot7 = var15;
                var10 = var0.onLayout;
                var11 = _closure1_slot3;
                var0 = var11.useRef;
                var1 = null;
                var13 = var0.bind(var11)(var1);
                var7 = _closure1_slot0;
                var0 = 8;
                var0 = var8[var0];
                var20 = var7.bind(var4)(var0);
                var8 = var20.useStateFromStores;
                var0 = _closure1_slot7;
                var7 = new Array(1);
                var7[0] = var0;
                var0 = function() { // Environment: var9
                    var1 = _closure1_slot7;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var8.bind(var20)(var7, var0);
                _closure2_slot8 = var0;
                var8 = var11.useMemo;
                var20 = var14.items;
                var7 = new Array(3);
                var7[0] = var20;
                var7[1] = var6;
                var7[2] = var0;
                var6 = function() { // Environment: var9
                    _fun50852: for (var _fun50852_ip = 0;;) switch (_fun50852_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 9;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.canUseCollectibles;
                            var0 = _closure2_slot8;
                            var0 = var2.bind(var3)(var0);
                            var1 = _closure2_slot2;
                            var1 = var1.items;
                            if (var0) {
                                _fun50852_ip = 74;
                                continue _fun50852
                            }
                        case 55:
                            var2 = var1.filter;
                            var0 = function(arg0) { // Environment: var0
                                _fun50853: for (var _fun50853_ip = 0;;) switch (_fun50853_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var1 = _closure1_slot0;
                                        var0 = _closure1_slot2;
                                        var6 = 10;
                                        var0 = var0[var6];
                                        var5 = undefined;
                                        var0 = var1.bind(var5)(var0);
                                        var0 = var0.NONE_ITEM;
                                        var0 = var2 === var0;
                                        if (var0) {
                                            _fun50853_ip = 68;
                                            continue _fun50853
                                        }
                                    case 41:
                                        var4 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var1 = var1[var6];
                                        var1 = var4.bind(var5)(var1);
                                        var1 = var1.SHOP_ITEM;
                                        var0 = var2 === var1;
                                    case 68:
                                        if (var0) {
                                            _fun50853_ip = 143;
                                            continue _fun50853
                                        }
                                    case 71:
                                        var1 = _closure1_slot6;
                                        var1 = var1.bind(var5)(var2);
                                        var1 = !var1;
                                        if (var1) {
                                            _fun50853_ip = 140;
                                            continue _fun50853
                                        }
                                    case 86:
                                        var4 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var3 = 11;
                                        var3 = var6[var3];
                                        var4 = var4.bind(var5)(var3);
                                        var3 = var4.isPremiumCollectiblesPurchase;
                                        var6 = _closure2_slot3;
                                        var5 = var6.get;
                                        var2 = var2.skuId;
                                        var2 = var5.bind(var6)(var2);
                                        var1 = var3.bind(var4)(var2);
                                    case 140:
                                        var0 = !var1;
                                    case 143:
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var1)(var0);
                            _fun50852_ip = 77;
                            continue _fun50852;
                        case 74:
                            var0 = var1;
                        case 77:
                            return var0;
                    }
                };
                var21 = var8.bind(var11)(var6, var7);
                var7 = var21.findIndex;
                var6 = function(arg0) { // Environment: var9
                    _fun50854: for (var _fun50854_ip = 0;;) switch (_fun50854_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = _closure1_slot6;
                            var1 = undefined;
                            var0 = var0.bind(var1)(var2);
                            if (!var0) {
                                _fun50854_ip = 58;
                                continue _fun50854
                            }
                        case 20:
                            var2 = var2.skuId;
                            var5 = _closure2_slot0;
                            var4 = null;
                            var4 = var4 == var5;
                            var1 = undefined;
                            if (var4) {
                                _fun50854_ip = 54;
                                continue _fun50854
                            }
                        case 44:
                            var3 = _closure2_slot0;
                            var1 = var3.skuId;
                        case 54:
                            var0 = var2 === var1;
                        case 58:
                            return var0;
                    }
                };
                var22 = var7.bind(var21)(var6);
                var6 = 0;
                var8 = -1;
                var7 = 0;
                if (!(var8 !== var22)) {
                    _fun50850_ip = 326;
                    continue _fun50850
                }
            case 280:
                var8 = global;
                var20 = var8.Math;
                var11 = var20.floor;
                var23 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var18];
                var8 = var23.bind(var4)(var8);
                var8 = var8.ROW_SIZE;
                var8 = var22 / var8;
                var7 = var11.bind(var20)(var8);
            case 326:
                var22 = _closure1_slot0;
                var8 = _closure1_slot2;
                var11 = 12;
                var11 = var8[var11];
                var20 = var22.bind(var4)(var11);
                var11 = var20.chunk;
                var8 = var8[var18];
                var8 = var22.bind(var4)(var8);
                var8 = var8.ROW_SIZE;
                var11 = var11.bind(var20)(var21, var8);
                var8 = {};
                var8.shouldScroll = var12;
                var8.initialScrollIndex = var7;
                var8.flashListRef = var13;
                var7 = 200;
                var8.afterMs = var7;
                var7 = function arg0() {
                    var1 = arg0;
                    var6 = var1.initialScrollIndex;
                    var _closure3_slot0 = var6;
                    var7 = var1.shouldScroll;
                    var _closure3_slot1 = var7;
                    var4 = var1.flashListRef;
                    var _closure3_slot2 = var4;
                    var5 = var1.afterMs;
                    var _closure3_slot3 = var5;
                    var3 = _closure1_slot3;
                    var2 = var3.useRef;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
                    var _closure3_slot4 = var1;
                    var2 = var3.useEffect;
                    var1 = new Array(4);
                    var1[0] = var7;
                    var1[1] = var6;
                    var1[2] = var5;
                    var1[3] = var4;
                    var0 = function() { // Environment: var0
                        _fun50856: for (var _fun50856_ip = 0;;) switch (_fun50856_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var1 = null;
                                var1 = var1 != var2;
                                if (!var1) {
                                    _fun50856_ip = 20;
                                    continue _fun50856
                                }
                            case 16:
                                var1 = _closure3_slot1;
                            case 20:
                                if (!var1) {
                                    _fun50856_ip = 35;
                                    continue _fun50856
                                }
                            case 23:
                                var2 = _closure3_slot4;
                                var2 = var2.current;
                                var1 = !var2;
                            case 35:
                                if (!var1) {
                                    _fun50856_ip = 77;
                                    continue _fun50856
                                }
                            case 38:
                                var2 = _closure3_slot4;
                                var1 = true;
                                var2.current = var1;
                                var1 = global;
                                var3 = var1.setTimeout;
                                var2 = _closure3_slot3;
                                var1 = undefined;
                                var0 = function() { // Environment: var0
                                    _fun50857: for (var _fun50857_ip = 0;;) switch (_fun50857_ip) {
                                        case 0:
                                            var0 = _closure3_slot2;
                                            var2 = var0.current;
                                            var0 = null;
                                            if (!(var0 != var2)) {
                                                _fun50857_ip = 46;
                                                continue _fun50857
                                            }
                                        case 18:
                                            var1 = var2.scrollToIndex;
                                            var0 = {};
                                            var4 = true;
                                            var0.animated = var4;
                                            var3 = _closure3_slot0;
                                            var0.index = var3;
                                            var0 = var1.bind(var2)(var0);
                                        case 46:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var0 = var3.bind(var1)(var0, var2);
                            case 77:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    var0 = undefined;
                    return var0;
                };
                var7 = var7.bind(var4)(var8);
                var12 = _closure1_slot3;
                var8 = var12.useCallback;
                var7 = new Array(6);
                var7[0] = var19;
                var7[1] = var17;
                var7[2] = var16;
                var7[3] = var15;
                var15 = var3.row;
                var7[4] = var15;
                var7[5] = var2;
                var2 = function(arg0) { // Environment: var9
                    var0 = arg0;
                    var10 = var0.item;
                    var3 = _closure1_slot9;
                    var2 = _closure1_slot5;
                    var1 = {};
                    var5 = _closure2_slot6;
                    var5 = var5.row;
                    var1.style = var5;
                    var7 = new Array(2);
                    var6 = 0;
                    var11 = var7;
                    var9 = 0;
                    var8 = arraySpread(var11, var10, var9);
                    var5 = null;
                    var7[var8] = var5;
                    var4 = 1;
                    var4 = var8 + var4;
                    var7[var4] = var5;
                    var5 = var7.slice;
                    var8 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 7;
                    var4 = var4[var0];
                    var0 = undefined;
                    var4 = var8.bind(var0)(var4);
                    var4 = var4.ROW_SIZE;
                    var6 = var5.bind(var7)(var6, var4);
                    var5 = var6.map;
                    var4 = function(arg0, arg1) { // Environment: var4
                        _fun50859: for (var _fun50859_ip = 0;;) switch (_fun50859_ip) {
                            case 0:
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var6 = 10;
                                var2 = var2[var6];
                                var4 = undefined;
                                var2 = var3.bind(var4)(var2);
                                var2 = var2.NONE_ITEM;
                                if (!(var1 !== var2)) {
                                    _fun50859_ip = 403;
                                    continue _fun50859
                                }
                            case 47:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var2 = var2[var6];
                                var2 = var3.bind(var4)(var2);
                                var2 = var2.SHOP_ITEM;
                                if (!(var1 !== var2)) {
                                    _fun50859_ip = 318;
                                    continue _fun50859
                                }
                            case 77:
                                var2 = _closure1_slot6;
                                var2 = var2.bind(var4)(var1);
                                if (var2) {
                                    _fun50859_ip = 136;
                                    continue _fun50859
                                }
                            case 89:
                                var7 = _closure1_slot9;
                                var6 = _closure1_slot5;
                                var3 = {};
                                var2 = {};
                                var9 = _closure2_slot7;
                                var2.height = var9;
                                var8 = _closure2_slot7;
                                var2.width = var8;
                                var3.style = var2;
                                var2 = arg1;
                                var2 = var7.bind(var4)(var6, var3, var2);
                                return var2;
                            case 136:
                                var3 = _closure2_slot0;
                                var2 = null;
                                var2 = var2 == var3;
                                var3 = undefined;
                                if (var2) {
                                    _fun50859_ip = 164;
                                    continue _fun50859
                                }
                            case 154:
                                var2 = _closure2_slot0;
                                var3 = var2.skuId;
                            case 164:
                                var2 = var1.skuId;
                                var9 = var3 === var2;
                                var6 = _closure1_slot9;
                                var3 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var2 = 13;
                                var2 = var10[var2];
                                var2 = var3.bind(var4)(var2);
                                var3 = var2.EditCollectiblesListItemProduct;
                                var2 = {};
                                var8 = var1.skuId;
                                var2.skuId = var8;
                                var8 = var1.label;
                                var2.accessibilityLabel = var8;
                                var8 = _closure2_slot7;
                                var2.size = var8;
                                var8 = function() {
                                    var2 = _closure2_slot1;
                                    var1 = _closure4_slot0;
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var2.onPress = var8;
                                var2.isSelected = var9;
                                var7 = _closure2_slot5;
                                var2.isTryItOut = var7;
                                var8 = _closure1_slot1;
                                var7 = 15;
                                var7 = var10[var7];
                                var8 = var8.bind(var4)(var7);
                                var7 = {};
                                var7.avatarDecoration = var1;
                                var10 = _closure1_slot8;
                                var7.size = var10;
                                var7.animate = var9;
                                var7 = var6.bind(var4)(var8, var7);
                                var2.children = var7;
                                var1 = var1.skuId;
                                var1 = var6.bind(var4)(var3, var2, var1);
                                return var1;
                            case 318:
                                var6 = _closure1_slot9;
                                var2 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var1 = 13;
                                var1 = var8[var1];
                                var1 = var2.bind(var4)(var1);
                                var3 = var1.EditCollectiblesListItemShop;
                                var2 = {};
                                var1 = _closure2_slot7;
                                var2.size = var1;
                                var7 = _closure1_slot1;
                                var1 = 14;
                                var1 = var8[var1];
                                var1 = var7.bind(var4)(var1);
                                var1 = var1.EDIT_AVATAR_DECORATION_SHEET;
                                var2.analyticsSource = var1;
                                var1 = 'shop';
                                var1 = var6.bind(var4)(var3, var2, var1);
                                return var1;
                            case 403:
                                var3 = _closure1_slot9;
                                var1 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 13;
                                var0 = var2[var0];
                                var0 = var1.bind(var4)(var0);
                                var2 = var0.EditCollectiblesListItemNone;
                                var1 = {};
                                var6 = _closure2_slot7;
                                var1.size = var6;
                                var5 = function() {
                                    var2 = _closure2_slot1;
                                    var1 = undefined;
                                    var0 = null;
                                    var0 = var2.bind(var1)(var0);
                                    return var0;
                                };
                                var1.onPress = var5;
                                var6 = _closure2_slot0;
                                var5 = null;
                                var6 = var5 === var6;
                                var1.isSelected = var6;
                                var0 = _closure2_slot4;
                                var0 = var5 != var0;
                                var1.asDefault = var0;
                                var0 = 'none';
                                var0 = var3.bind(var4)(var2, var1, var0);
                                return var0;
                        }
                    };
                    var4 = var5.bind(var6)(var4);
                    var1.children = var4;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var12 = var8.bind(var12)(var2, var7);
                if (!(var1 != var0)) {
                    _fun50850_ip = 758;
                    continue _fun50850
                }
            case 469:
                var2 = _closure1_slot10;
                var1 = _closure1_slot5;
                var0 = {};
                var3 = var3.avatarDecorationSection;
                var0.style = var3;
                var3 = var11.length;
                var6 = var3 > var6;
                if (!var6) {
                    _fun50850_ip = 584;
                    continue _fun50850
                }
            case 501:
                var8 = _closure1_slot9;
                var17 = _closure1_slot0;
                var16 = _closure1_slot2;
                var3 = 16;
                var3 = var16[var3];
                var3 = var17.bind(var4)(var3);
                var7 = var3.Text;
                var3 = {
                    'variant': 'heading-sm/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var15 = {};
                var16 = var16[var18];
                var16 = var17.bind(var4)(var16);
                var16 = var16.GUTTER_SIZE;
                var15.paddingHorizontal = var16;
                var3.style = var15;
                var14 = var14.header;
                var3.children = var14;
                var6 = var8.bind(var4)(var7, var3);
            case 584:
                var3 = new Array(2);
                var3[0] = var6;
                var8 = _closure1_slot9;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var6 = 17;
                var6 = var17[var6];
                var6 = var16.bind(var4)(var6);
                var7 = var6.FlashList;
                var6 = {};
                var6.ref = var13;
                var13 = 18;
                var14 = var17[var13];
                var14 = var16.bind(var4)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13["w+hNj2"];
                var13 = var14.bind(var15)(var13);
                var6.accessibilityLabel = var13;
                var6.renderItem = var12;
                var6.data = var11;
                var6.onLayout = var10;
                var10 = 'always';
                var6.keyboardShouldPersistTaps = var10;
                var10 = {};
                var11 = 4;
                var10.paddingHorizontal = var11;
                var6.contentContainerStyle = var10;
                var10 = 98;
                var6.estimatedItemSize = var10;
                var9 = function() {
                    var3 = _closure1_slot9;
                    var2 = _closure1_slot5;
                    var1 = {};
                    var4 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var5 = var5[var0];
                    var0 = undefined;
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.GUTTER_SIZE;
                    var4.height = var5;
                    var1.style = var4;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var6.ItemSeparatorComponent = var9;
                var6 = var8.bind(var4)(var7, var6);
                var3[1] = var6;
                var0.children = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun50850_ip = 802;
                continue _fun50850;
            case 758:
                var3 = _closure1_slot9;
                var2 = _closure1_slot5;
                var1 = {};
                var6 = _closure1_slot4;
                var5 = {
                    'animating': true,
                    'size': 'large'
                };
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 802:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4567, 1613, 5539, 33, 1297, 5707, 566, 3070, 5697, 4565, 22, 5708, 5543, 5715, 3902, 5717, 1234, 2]);