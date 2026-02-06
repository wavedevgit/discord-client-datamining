// modules/stickers/native/StickerPickerCategories.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var10 = 1;
    var6 = var5[var10];
    var3 = metroImportAll;
    var7 = var3.bind(var0)(var6);
    var _closure1_slot4 = var7;
    var13 = 2;
    var3 = var5[var13];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useStickerPickerStore;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot8 = var6;
    var6 = var3.AnalyticsPages;
    var _closure1_slot9 = var6;
    var6 = var3.CATEGORY_ICON_RIPPLE_CONFIG;
    var _closure1_slot10 = var6;
    var12 = var3.CATEGORY_ICON_SIZE;
    var _closure1_slot11 = var12;
    var15 = var3.EXPRESSION_FOOTER_HEIGHT;
    var _closure1_slot12 = var15;
    var14 = var3.NODE_SIZE;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ExpressionPickerViewType;
    var _closure1_slot13 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot14 = var6;
    var3 = var3.jsxs;
    var _closure1_slot15 = var3;
    var3 = 8;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.flex = var10;
    var9.height = var15;
    var3.list = var9;
    var9 = {};
    var9.height = var15;
    var9.width = var15;
    var15 = 'center';
    var9.justifyContent = var15;
    var9.alignItems = var15;
    var3.item = var9;
    var9 = {
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var9.height = var14;
    var9.width = var14;
    var14 = var14 / var13;
    var9.borderRadius = var14;
    var3.itemInner = var9;
    var9 = {};
    var14 = 0.5;
    var9.opacity = var14;
    var3.fadedItem = var9;
    var9 = {};
    var9.opacity = var10;
    var10 = 9;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_BACKGROUND_ACTIVE;
    var9.backgroundColor = var14;
    var3.activeItem = var9;
    var9 = {};
    var9.height = var12;
    var9.width = var12;
    var12 = var12 / var13;
    var9.borderRadius = var12;
    var3.guildIcon = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_MOD_MUTED;
    var9.backgroundColor = var10;
    var3.guildItemPlaceholder = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot16 = var3;
    var6 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun74744: for (var _fun74744_ip = 0;;) switch (_fun74744_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.category;
                var _closure2_slot0 = var11;
                var5 = var1.onPressCategory;
                var _closure2_slot1 = var5;
                var6 = var1.index;
                var _closure2_slot2 = var6;
                var14 = var1.isActive;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var1 = _closure1_slot16;
                var15 = var1.bind(var3)();
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = 10;
                var2 = var1[var2];
                var2 = var4.bind(var3)(var2);
                var7 = var2.AnimateStickers;
                var2 = var7.useSetting;
                var9 = var2.bind(var7)();
                var2 = 11;
                var2 = var1[var2];
                var8 = var4.bind(var3)(var2);
                var7 = var8.shouldAnimateSticker;
                var2 = false;
                var10 = var7.bind(var8)(var9, var2);
                var2 = var11.type;
                var12 = 12;
                var1 = var1[var12];
                var1 = var4.bind(var3)(var1);
                var1 = var1.StickerCategoryTypes;
                var1 = var1.GUILD;
                var19 = null;
                var16 = null;
                if (!(var2 === var1)) {
                    _fun74744_ip = 175;
                    continue _fun74744
                }
            case 156:
                var4 = _closure1_slot6;
                var2 = var4.getGuild;
                var1 = var11.id;
                var16 = var2.bind(var4)(var1);
            case 175:
                _closure2_slot3 = var16;
                var4 = _closure1_slot4;
                var2 = var4.useCallback;
                var1 = new Array(4);
                var1[0] = var11;
                var1[1] = var16;
                var1[2] = var6;
                var1[3] = var5;
                var0 = function() { // Environment: var0
                    _fun74745: for (var _fun74745_ip = 0;;) switch (_fun74745_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = var0.type;
                            var4 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var7 = 12;
                            var0 = var0[var7];
                            var3 = undefined;
                            var0 = var4.bind(var3)(var0);
                            var0 = var0.StickerCategoryTypes;
                            var0 = var0.PACK;
                            var0 = var2 !== var0;
                            if (!var0) {
                                _fun74745_ip = 98;
                                continue _fun74745
                            }
                        case 56:
                            var2 = _closure2_slot0;
                            var4 = var2.type;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var7];
                            var2 = var5.bind(var3)(var2);
                            var2 = var2.StickerCategoryTypes;
                            var2 = var2.GUILD;
                            var0 = var4 !== var2;
                        case 98:
                            if (var0) {
                                _fun74745_ip = 222;
                                continue _fun74745
                            }
                        case 101:
                            var2 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 13;
                            var0 = var4[var0];
                            var5 = var2.bind(var3)(var0);
                            var4 = var5.track;
                            var0 = _closure1_slot8;
                            var2 = var0.EXPRESSION_PICKER_CATEGORY_SELECTED;
                            var0 = {};
                            var7 = {};
                            var8 = _closure1_slot9;
                            var8 = var8.EXPRESSION_PICKER;
                            var7.page = var8;
                            var0.location = var7;
                            var6 = _closure1_slot13;
                            var6 = var6.STICKER;
                            var0.tab = var6;
                            var6 = _closure2_slot0;
                            var6 = var6.id;
                            var0.sticker_pack_id = var6;
                            var7 = _closure2_slot3;
                            var6 = null;
                            var7 = var6 == var7;
                            var6 = undefined;
                            if (var7) {
                                _fun74745_ip = 212;
                                continue _fun74745
                            }
                        case 203:
                            var7 = _closure2_slot3;
                            var6 = var7.id;
                        case 212:
                            var0.guild_id = var6;
                            var0 = var4.bind(var5)(var2, var0);
                        case 222:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 == var2;
                            var0 = undefined;
                            if (var2) {
                                _fun74745_ip = 250;
                                continue _fun74745
                            }
                        case 237:
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot2;
                            var0 = var2.bind(var3)(var1);
                        case 250:
                            return var0;
                    }
                };
                var5 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot14;
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 14;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var4 = _closure1_slot10;
                var0.androidRippleConfig = var4;
                var4 = 'button';
                var0.accessibilityRole = var4;
                var4 = var11.name;
                var0.accessibilityLabel = var4;
                var4 = var11.stickers;
                var4 = var4.length;
                var18 = 0;
                var4 = var18 === var4;
                var0.disabled = var4;
                var4 = var11.stickers;
                var4 = var4.length;
                var6 = var4 > var18;
                var4 = undefined;
                if (!var6) {
                    _fun74744_ip = 323;
                    continue _fun74744
                }
            case 320:
                var4 = var5;
            case 323:
                var0.onPress = var4;
                var4 = var15.item;
                var0.style = var4;
                var6 = _closure1_slot14;
                var5 = _closure1_slot5;
                var4 = {};
                var8 = var15.itemInner;
                var7 = new Array(2);
                var7[0] = var8;
                if (var14) {
                    _fun74744_ip = 371;
                    continue _fun74744
                }
            case 363:
                var8 = var15.fadedItem;
                _fun74744_ip = 377;
                continue _fun74744;
            case 371:
                var8 = var15.activeItem;
            case 377:
                var7[1] = var8;
                var4.style = var7;
                var7 = var11.icon;
                if (!(var19 == var7)) {
                    _fun74744_ip = 620;
                    continue _fun74744
                }
            case 397:
                var8 = var11.type;
                var9 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var12];
                var7 = var9.bind(var3)(var7);
                var7 = var7.StickerCategoryTypes;
                var7 = var7.GUILD;
                if (!(var8 !== var7)) {
                    _fun74744_ip = 532;
                    continue _fun74744
                }
            case 435:
                var9 = _closure1_slot14;
                var8 = _closure1_slot1;
                var17 = _closure1_slot2;
                var7 = 18;
                var7 = var17[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var17 = 'previewSticker';
                var17 = var17 in var11;
                if (!var17) {
                    _fun74744_ip = 482;
                    continue _fun74744
                }
            case 472:
                var17 = var11.previewSticker;
                if (!(var19 == var17)) {
                    _fun74744_ip = 494;
                    continue _fun74744
                }
            case 482:
                var17 = var11.stickers;
                var17 = var17[var18];
                _fun74744_ip = 500;
                continue _fun74744;
            case 494:
                var17 = var11.previewSticker;
            case 500:
                var7.sticker = var17;
                if (!var10) {
                    _fun74744_ip = 511;
                    continue _fun74744
                }
            case 508:
                var10 = var14;
            case 511:
                var7.animated = var10;
                var10 = _closure1_slot11;
                var7.size = var10;
                var7 = var9.bind(var3)(var8, var7);
                _fun74744_ip = 618;
                continue _fun74744;
            case 532:
                var10 = _closure1_slot14;
                var9 = _closure1_slot1;
                var17 = _closure1_slot2;
                var14 = 17;
                var8 = var17[var14];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var8.guild = var16;
                var16 = var15.guildItemPlaceholder;
                var8.loadingStyle = var16;
                var16 = _closure1_slot0;
                var14 = var17[var14];
                var14 = var16.bind(var3)(var14);
                var14 = var14.GuildIconSizes;
                var14 = var14.XSMALL;
                var8.size = var14;
                var14 = var15.guildIcon;
                var8.style = var14;
                var7 = var10.bind(var3)(var9, var8);
            case 618:
                _fun74744_ip = 733;
                continue _fun74744;
            case 620:
                var10 = _closure1_slot14;
                var9 = _closure1_slot1;
                var14 = _closure1_slot2;
                var8 = 15;
                var8 = var14[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var15 = var15.guildIcon;
                var8.style = var15;
                var15 = var11.type;
                var13 = _closure1_slot0;
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.StickerCategoryTypes;
                var12 = var12.PACK;
                var12 = var15 === var12;
                var8.disableColor = var12;
                var12 = 16;
                var12 = var14[var12];
                var13 = var13.bind(var3)(var12);
                var12 = var13.makeSource;
                var11 = var11.icon;
                var11 = var12.bind(var13)(var11);
                var8.source = var11;
                var7 = var10.bind(var3)(var9, var8);
            case 733:
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot17 = var3;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stickers/native/StickerPickerCategories.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun74746: for (var _fun74746_ip = 0;;) switch (_fun74746_ip) {
            case 0:
                var1 = arg0;
                var17 = var1.categories;
                var _closure2_slot0 = var17;
                var14 = var1.categoryIndex;
                var _closure2_slot1 = var14;
                var4 = var1.style;
                var1 = _closure1_slot16;
                var3 = undefined;
                var13 = var1.bind(var3)();
                var8 = _closure1_slot4;
                var1 = var8.useRef;
                var1 = var1.bind(var8)(var3);
                var _closure2_slot2 = var1;
                var1 = var8.useRef;
                var7 = null;
                var16 = var1.bind(var8)(var7);
                var _closure2_slot3 = var16;
                var5 = var8.useMemo;
                var2 = new Array(1);
                var2[0] = var17;
                var1 = function() { // Environment: var0
                    var0 = _closure2_slot0;
                    var1 = var0.length;
                    var0 = new Array(1);
                    var0[0] = var1;
                    return var0;
                };
                var15 = var5.bind(var8)(var1, var2);
                var1 = var8.useState;
                var1 = var1.bind(var8)(var7);
                var10 = _closure1_slot3;
                var9 = 2;
                var1 = var10.bind(var3)(var1, var9);
                var6 = 0;
                var5 = var1[var6];
                var _closure2_slot4 = var5;
                var2 = 1;
                var1 = var1[var2];
                var _closure2_slot5 = var1;
                var1 = var8.useState;
                var12 = false;
                var1 = var1.bind(var8)(var12);
                var1 = var10.bind(var3)(var1, var9);
                var6 = var1[var6];
                var _closure2_slot6 = var6;
                var1 = var1[var2];
                var _closure2_slot7 = var1;
                var2 = _closure1_slot7;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.setPackToScrollTo;
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var _closure2_slot8 = var2;
                var10 = var8.useEffect;
                var9 = new Array(1);
                var9[0] = var17;
                var1 = function() { // Environment: var0
                    _fun74749: for (var _fun74749_ip = 0;;) switch (_fun74749_ip) {
                        case 0:
                            var3 = _closure2_slot0;
                            var2 = var3.findIndex;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.type;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 12;
                                var2 = var2[var0];
                                var0 = undefined;
                                var0 = var3.bind(var0)(var2);
                                var0 = var0.StickerCategoryTypes;
                                var0 = var0.PACK;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var2 = var2.bind(var3)(var1);
                            var1 = 0;
                            if (!(var2 >= var1)) {
                                _fun74749_ip = 44;
                                continue _fun74749
                            }
                        case 33:
                            var1 = _closure2_slot5;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 44:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var10.bind(var8)(var1, var9);
                var10 = var8.useEffect;
                var9 = new Array(1);
                var9[0] = var14;
                var1 = function() { // Environment: var0
                    _fun74751: for (var _fun74751_ip = 0;;) switch (_fun74751_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var0 = var0.current;
                            var1 = null;
                            if (!(var1 != var0)) {
                                _fun74751_ip = 132;
                                continue _fun74751
                            }
                        case 18:
                            var0 = _closure2_slot3;
                            var0 = var0.current;
                            if (!(var1 != var0)) {
                                _fun74751_ip = 132;
                                continue _fun74751
                            }
                        case 31:
                            var1 = _closure2_slot1;
                            var0 = _closure1_slot12;
                            var2 = var1 * var0;
                            var0 = _closure2_slot2;
                            var0 = var0.current;
                            var0 = var0.end;
                            var0 = var2 > var0;
                            if (var0) {
                                _fun74751_ip = 85;
                                continue _fun74751
                            }
                        case 67:
                            var1 = _closure2_slot2;
                            var1 = var1.current;
                            var1 = var1.start;
                            var0 = var2 < var1;
                        case 85:
                            if (!var0) {
                                _fun74751_ip = 132;
                                continue _fun74751
                            }
                        case 88:
                            var0 = _closure2_slot3;
                            var2 = var0.current;
                            var1 = var2.scrollToLocation;
                            var0 = {
                                'section': 0,
                                'item': null,
                                'animated': false
                            };
                            var3 = _closure2_slot1;
                            var0.item = var3;
                            var0 = var1.bind(var2)(var0);
                        case 132:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var10.bind(var8)(var1, var9);
                var10 = var8.useCallback;
                var9 = new Array(2);
                var9[0] = var5;
                var9[1] = var6;
                var1 = function() { // Environment: var0
                    _fun74752: for (var _fun74752_ip = 0;;) switch (_fun74752_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var3 = null;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun74752_ip = 29;
                                continue _fun74752
                            }
                        case 16:
                            var2 = _closure2_slot2;
                            var2 = var2.current;
                            var1 = var3 != var2;
                        case 29:
                            if (!var1) {
                                _fun74752_ip = 93;
                                continue _fun74752
                            }
                        case 32:
                            var2 = _closure2_slot7;
                            var3 = _closure2_slot4;
                            var1 = _closure1_slot12;
                            var3 = var3 * var1;
                            var1 = _closure2_slot2;
                            var1 = var1.current;
                            var1 = var1.end;
                            var5 = _closure2_slot6;
                            var0 = 0;
                            if (var5) {
                                _fun74752_ip = 78;
                                continue _fun74752
                            }
                        case 74:
                            var0 = _closure1_slot12;
                        case 78:
                            var0 = var1 - var0;
                            var1 = undefined;
                            var0 = var3 > var0;
                            var0 = var2.bind(var1)(var0);
                        case 93:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var10.bind(var8)(var1, var9);
                var _closure2_slot9 = var1;
                var18 = var8.useCallback;
                var10 = new Array(1);
                var10[0] = var1;
                var9 = function(arg0) { // Environment: var0
                    var3 = arg0;
                    var2 = _closure2_slot2;
                    var1 = {};
                    var4 = var3.nativeEvent;
                    var4 = var4.contentOffset;
                    var4 = var4.x;
                    var1.start = var4;
                    var4 = var3.nativeEvent;
                    var4 = var4.contentOffset;
                    var4 = var4.x;
                    var3 = var3.nativeEvent;
                    var3 = var3.layoutMeasurement;
                    var3 = var3.width;
                    var3 = var4 + var3;
                    var1.end = var3;
                    var2.current = var1;
                    var1 = _closure2_slot9;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var18 = var18.bind(var8)(var9, var10);
                var10 = var8.useCallback;
                var9 = new Array(2);
                var9[0] = var17;
                var9[1] = var2;
                var2 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = arg0;
                    var1 = var2[var1];
                    var2 = var1.id;
                    var1 = _closure2_slot8;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 19;
                    var2 = var5[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.triggerHapticFeedback;
                    var4 = _closure1_slot1;
                    var1 = 20;
                    var1 = var5[var1];
                    var1 = var4.bind(var0)(var1);
                    var1 = var1.IMPACT_LIGHT;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var10 = var10.bind(var8)(var2, var9);
                var _closure2_slot10 = var10;
                var19 = var8.useCallback;
                var9 = new Array(2);
                var9[0] = var5;
                var9[1] = var10;
                var2 = function() { // Environment: var0
                    _fun74755: for (var _fun74755_ip = 0;;) switch (_fun74755_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun74755_ip = 39;
                                continue _fun74755
                            }
                        case 13:
                            var3 = _closure2_slot10;
                            var1 = _closure2_slot4;
                            var2 = undefined;
                            var1 = var3.bind(var2)(var1);
                            var1 = _closure2_slot7;
                            var0 = false;
                            var0 = var1.bind(var2)(var0);
                        case 39:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9 = var19.bind(var8)(var2, var9);
                var19 = var8.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function(arg0) { // Environment: var0
                    _fun74756: for (var _fun74756_ip = 0;;) switch (_fun74756_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun74756_ip = 70;
                                continue _fun74756
                            }
                        case 18:
                            var2 = _closure2_slot2;
                            var1 = {};
                            var3 = 0;
                            var1.start = var3;
                            var3 = arg0;
                            var3 = var3.nativeEvent;
                            var3 = var3.layout;
                            var3 = var3.width;
                            var1.end = var3;
                            var2.current = var1;
                            var1 = _closure2_slot9;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 70:
                            var0 = undefined;
                            return var0;
                    }
                };
                var19 = var19.bind(var8)(var1, var2);
                var2 = var8.useCallback;
                var1 = new Array(3);
                var1[0] = var17;
                var1[1] = var14;
                var1[2] = var10;
                var0 = function(arg0, arg1) { // Environment: var0
                    var5 = arg1;
                    var3 = _closure1_slot14;
                    var2 = _closure1_slot17;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var4 = var4[var5];
                    var1.category = var4;
                    var1.index = var5;
                    var4 = _closure2_slot1;
                    var4 = var5 === var4;
                    var1.isActive = var4;
                    var0 = _closure2_slot10;
                    var1.onPressCategory = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var14 = var2.bind(var8)(var0, var1);
                var8 = _closure1_slot1;
                var20 = _closure1_slot2;
                var0 = 21;
                var0 = var20[var0];
                var0 = var8.bind(var3)(var0);
                var17 = var0.bind(var3)();
                var2 = _closure1_slot15;
                var0 = 22;
                var0 = var20[var0];
                var1 = var8.bind(var3)(var0);
                var0 = {};
                var10 = 'expression-footer';
                var0.portalHostName = var10;
                var0.style = var4;
                var10 = _closure1_slot14;
                var4 = 23;
                var4 = var20[var4];
                var8 = var8.bind(var3)(var4);
                var4 = {
                    'estimatedListSize': 'windowSize',
                    'horizontal': true,
                    'itemSize': null,
                    'keyboardShouldPersistTaps': 'always'
                };
                var20 = _closure1_slot12;
                var4.itemSize = var20;
                var20 = _closure1_slot13;
                var20 = var20.STICKER;
                var4.listId = var20;
                var4.onLayout = var19;
                var4.onScroll = var18;
                var4.placeholderConfig = var17;
                var4.ref = var16;
                var16 = 'callbacks';
                var4.scrollReporting = var16;
                var4.sections = var15;
                var4.renderItem = var14;
                var4.showsHorizontalScrollIndicator = var12;
                var12 = var13.list;
                var4.style = var12;
                var8 = var10.bind(var3)(var8, var4);
                var4 = new Array(2);
                var4[0] = var8;
                var5 = var7 != var5;
                if (!var5) {
                    _fun74746_ip = 626;
                    continue _fun74746
                }
            case 623:
                var5 = var6;
            case 626:
                if (!var5) {
                    _fun74746_ip = 832;
                    continue _fun74746
                }
            case 632:
                var8 = _closure1_slot14;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var6 = 14;
                var6 = var15[var6];
                var6 = var14.bind(var3)(var6);
                var7 = var6.PressableOpacity;
                var6 = {};
                var6.onPress = var9;
                var9 = 'button';
                var6.accessibilityRole = var9;
                var9 = 24;
                var10 = var15[var9];
                var10 = var14.bind(var3)(var10);
                var12 = var10.intl;
                var10 = var12.string;
                var9 = var15[var9];
                var9 = var14.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.rzCcjK;
                var9 = var10.bind(var12)(var9);
                var6.accessibilityLabel = var9;
                var10 = _closure1_slot5;
                var9 = {};
                var14 = var13.item;
                var12 = new Array(2);
                var12[0] = var14;
                var14 = var13.fadedItem;
                var12[1] = var14;
                var9.style = var12;
                var14 = _closure1_slot1;
                var11 = 15;
                var11 = var15[var11];
                var12 = var14.bind(var3)(var11);
                var11 = {};
                var13 = var13.guildIcon;
                var11.style = var13;
                var13 = 25;
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var11.source = var13;
                var11 = var8.bind(var3)(var12, var11);
                var9.children = var11;
                var9 = var8.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 832:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1410, 9402, 660, 1565, 33, 1297, 671, 1348, 3999, 4220, 795, 4905, 4087, 1417, 7420, 9412, 3281, 3282, 9377, 9378, 7589, 1234, 6784, 2]);