// modules/stickers/native/StickerPicker.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
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
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var11 = 1;
    var6 = var5[var11];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot5 = var7;
    var3 = var3.ActivityIndicator;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.STICKER_SEARCH_HEADER_HEIGHT;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AnalyticEvents;
    var _closure1_slot9 = var7;
    var7 = var3.AnalyticsPages;
    var _closure1_slot10 = var7;
    var7 = var3.AnalyticsSections;
    var _closure1_slot11 = var7;
    var7 = var3.UpsellTypes;
    var _closure1_slot12 = var7;
    var3 = var3.ChatInputComponentViewedTypes;
    var _closure1_slot13 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot14 = var7;
    var3 = var3.jsxs;
    var _closure1_slot15 = var3;
    var3 = 8;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.flex = var11;
    var3.container = var9;
    var9 = {};
    var9.flex = var11;
    var3.list = var9;
    var9 = {};
    var11 = 9;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var9.paddingVertical = var11;
    var3.header = var9;
    var9 = {
        'position': 'absolute',
        'bottom': 100
    };
    var3.popoutContainer = var9;
    var9 = {
        'alignItems': 'center',
        'justifyContent': 'center',
        'flex': 1
    };
    var3.loadingIndicator = var9;
    var9 = {
        'marginTop': null,
        'alignItems': 'center',
        'justifyContent': 'center',
        'flex': 1
    };
    var9.marginTop = var10;
    var3.emptyState = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot16 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun74172: for (var _fun74172_ip = 0;;) switch (_fun74172_ip) {
            case 0:
                var0 = arg0;
                var28 = var0.bottomSheetRef;
                var27 = var0.bottomSheetIndex;
                var20 = var0.channel;
                var _closure2_slot0 = var20;
                var21 = var0.paddingTop;
                var6 = var0.onPressSticker;
                var _closure2_slot1 = var6;
                var19 = var0.stickerFormats;
                var16 = var0.inPortalKeyboard;
                var0 = _closure1_slot16;
                var3 = undefined;
                var17 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 11;
                var0 = var5[var0];
                var4 = var1.bind(var3)(var0);
                var0 = var4.useFetchStickerPacks;
                var0 = var0.bind(var4)();
                var0 = 12;
                var0 = var5[var0];
                var4 = var1.bind(var3)(var0);
                var0 = var4.useStickerCategories;
                var13 = var0.bind(var4)(var20);
                var0 = 13;
                var0 = var5[var0];
                var9 = var1.bind(var3)(var0);
                var7 = var9.useStateFromStores;
                var0 = _closure1_slot8;
                var4 = new Array(1);
                var4[0] = var0;
                var0 = function() { // Environment: var2
                    var0 = _closure1_slot8;
                    var0 = var0.hasLoadedStickerPacks;
                    return var0;
                };
                var9 = var7.bind(var9)(var4, var0);
                var15 = _closure1_slot4;
                var0 = var15.useState;
                var14 = 0;
                var0 = var0.bind(var15)(var14);
                var23 = _closure1_slot3;
                var18 = 2;
                var0 = var23.bind(var3)(var0, var18);
                var12 = var0[var14];
                var22 = 1;
                var26 = var0[var22];
                var _closure2_slot2 = var26;
                var7 = _closure1_slot1;
                var0 = 14;
                var4 = var5[var0];
                var10 = var7.bind(var3)(var4);
                var4 = 15;
                var4 = var5[var4];
                var4 = var7.bind(var3)(var4);
                var4 = var4.STICKER_PICKER;
                var4 = var10.bind(var3)(var4);
                var4 = var4.analyticsLocations;
                var _closure2_slot3 = var4;
                var11 = var15.useState;
                var10 = null;
                var11 = var11.bind(var15)(var10);
                var11 = var23.bind(var3)(var11, var18);
                var18 = var11[var14];
                var11 = var11[var22];
                var _closure2_slot4 = var11;
                var11 = 16;
                var11 = var5[var11];
                var22 = var7.bind(var3)(var11);
                var11 = {};
                var32 = true;
                var11.hasCategories = var32;
                var22 = var22.bind(var3)(var11);
                var11 = var22.safeAreaStyle;
                var22 = var22.safeAreaBottomKeyboardAware;
                var25 = var15.useCallback;
                var24 = function(arg0) { // Environment: var2
                    _fun74174: for (var _fun74174_ip = 0;;) switch (_fun74174_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = '';
                            if (!(var0 !== var4)) {
                                _fun74174_ip = 61;
                                continue _fun74174
                            }
                        case 11:
                            var2 = _closure2_slot4;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 18;
                            var0 = var1[var0];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var0);
                            var0 = var3.searchAllStickers;
                            var0 = var0.bind(var3)(var4);
                            var0 = var2.bind(var1)(var0);
                            _fun74174_ip = 106;
                            continue _fun74174;
                        case 61:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 17;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.batchUpdates;
                            var0 = function() { // Environment: var0
                                var3 = _closure2_slot2;
                                var0 = undefined;
                                var2 = 0;
                                var2 = var3.bind(var0)(var2);
                                var2 = _closure2_slot4;
                                var1 = null;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 106:
                            var0 = undefined;
                            return var0;
                    }
                };
                var23 = new Array(0);
                var34 = var25.bind(var15)(var24, var23);
                var25 = var15.useEffect;
                var23 = var20.id;
                var24 = new Array(2);
                var24[0] = var23;
                var23 = var20.guild_id;
                var24[1] = var23;
                var23 = function() { // Environment: var2
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot9;
                    var2 = var1.CHAT_INPUT_COMPONENT_VIEWED;
                    var1 = {};
                    var5 = _closure1_slot13;
                    var5 = var5.STICKER;
                    var1.type = var5;
                    var5 = _closure2_slot0;
                    var6 = var5.id;
                    var1.channel_id = var6;
                    var5 = var5.guild_id;
                    var1.guild_id = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var23 = var25.bind(var15)(var23, var24);
                var24 = var15.useCallback;
                var23 = new Array(3);
                var23[0] = var20;
                var23[1] = var6;
                var23[2] = var4;
                var6 = function(arg0) { // Environment: var2
                    _fun74177: for (var _fun74177_ip = 0;;) switch (_fun74177_ip) {
                        case 0:
                            var2 = arg0;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var7 = 19;
                            var1 = var3[var7];
                            var0 = undefined;
                            var10 = var5.bind(var0)(var1);
                            var9 = var10.getStickerSendability;
                            var4 = _closure1_slot7;
                            var1 = var4.getCurrentUser;
                            var8 = var1.bind(var4)();
                            var4 = _closure2_slot0;
                            var4 = var9.bind(var10)(var2, var8, var4);
                            var3 = var3[var7];
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.StickerSendability;
                            var3 = var3.SENDABLE;
                            if (!(var4 !== var3)) {
                                _fun74177_ip = 465;
                                continue _fun74177
                            }
                        case 89:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var7];
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.StickerSendability;
                            var3 = var3.SENDABLE_WITH_PREMIUM;
                            if (!(var4 === var3)) {
                                _fun74177_ip = 474;
                                continue _fun74177
                            }
                        case 125:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var5 = 20;
                            var3 = var3[var5];
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.isStandardSticker;
                            var3 = var3.bind(var4)(var2);
                            if (var3) {
                                _fun74177_ip = 321;
                                continue _fun74177
                            }
                        case 162:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var5];
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.isGuildSticker;
                            var3 = var3.bind(var4)(var2);
                            if (!var3) {
                                _fun74177_ip = 474;
                                continue _fun74177
                            }
                        case 196:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 22;
                            var3 = var5[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.handleShowUpsellAlert;
                            var3 = {};
                            var7 = _closure1_slot12;
                            var7 = var7.GLOBAL_STICKER;
                            var3.initialUpsellKey = var7;
                            var7 = {};
                            var8 = _closure2_slot0;
                            var9 = var8.guild_id;
                            var8 = null;
                            if (!(var8 == var9)) {
                                _fun74177_ip = 268;
                                continue _fun74177
                            }
                        case 256:
                            var8 = _closure1_slot10;
                            var8 = var8.DM_CHANNEL;
                            _fun74177_ip = 278;
                            continue _fun74177;
                        case 268:
                            var9 = _closure1_slot10;
                            var8 = var9.GUILD_CHANNEL;
                        case 278:
                            var7.page = var8;
                            var8 = _closure1_slot11;
                            var8 = var8.STICKER_PICKER_UPSELL;
                            var7.section = var8;
                            var3.analyticsLocation = var7;
                            var7 = _closure2_slot3;
                            var3.analyticsLocations = var7;
                            var3 = var4.bind(var5)(var3);
                            _fun74177_ip = 474;
                            continue _fun74177;
                        case 321:
                            var5 = _closure1_slot8;
                            var4 = var5.getStickerPack;
                            var3 = var2.pack_id;
                            var5 = var4.bind(var5)(var3);
                            var10 = null;
                            if (!(var10 != var5)) {
                                _fun74177_ip = 463;
                                continue _fun74177
                            }
                        case 348:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var8 = 21;
                            var3 = var3[var8];
                            var4 = var4.bind(var0)(var3);
                            var3 = {};
                            var7 = {};
                            var9 = _closure2_slot0;
                            var9 = var9.guild_id;
                            if (!(var10 == var9)) {
                                _fun74177_ip = 397;
                                continue _fun74177
                            }
                        case 385:
                            var9 = _closure1_slot10;
                            var9 = var9.DM_CHANNEL;
                            _fun74177_ip = 407;
                            continue _fun74177;
                        case 397:
                            var10 = _closure1_slot10;
                            var9 = var10.GUILD_CHANNEL;
                        case 407:
                            var7.page = var9;
                            var3.analyticsLocation = var7;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var8];
                            var6 = var7.bind(var0)(var6);
                            var6 = var6.AnalyticsPopoutType;
                            var6 = var6.STICKER_PACK_DETAIL;
                            var3.analyticsPopoutType = var6;
                            var3.stickerPack = var5;
                            var3 = var4.bind(var0)(var3);
                            _fun74177_ip = 474;
                            continue _fun74177;
                        case 463:
                            return var0;
                        case 465:
                            var1 = _closure2_slot1;
                            var1 = var1.bind(var0)(var2);
                        case 474:
                            return var0;
                    }
                };
                var23 = var24.bind(var15)(var6, var23);
                var25 = var15.useCallback;
                var24 = new Array(1);
                var24[0] = var20;
                var6 = function() { // Environment: var2
                    var5 = _closure2_slot0;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot9;
                    var2 = var1.CHAT_INPUT_COMPONENT_VIEWED;
                    var1 = {};
                    var6 = _closure1_slot13;
                    var6 = var6.STICKER_SEARCH;
                    var1.type = var6;
                    var6 = var5.id;
                    var1.channel_id = var6;
                    var5 = var5.guild_id;
                    var1.guild_id = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var33 = var25.bind(var15)(var6, var24);
                var6 = 23;
                var6 = var5[var6];
                var25 = var7.bind(var3)(var6);
                var24 = var25.useExperiment;
                var7 = {};
                var6 = 'StickerPicker';
                var7.location = var6;
                var6 = {};
                var29 = false;
                var6.autoTrackExposure = var29;
                var6 = var24.bind(var25)(var7, var6);
                var25 = var6.tidaWebformEnabled;
                var7 = var15.useCallback;
                var6 = new Array(1);
                var6[0] = var20;
                var2 = function(arg0) { // Environment: var2
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 24;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.showStickerDetailActionSheet;
                    var1 = {};
                    var4 = arg0;
                    var1.renderableSticker = var4;
                    var4 = _closure2_slot0;
                    var1.channel = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var24 = var7.bind(var15)(var2, var6);
                var2 = _closure1_slot14;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.AnalyticsLocationProvider;
                var0 = {};
                var0.value = var4;
                var6 = _closure1_slot15;
                var5 = _closure1_slot5;
                var4 = {};
                var7 = var17.container;
                var4.style = var7;
                var7 = var13.length;
                if (!(var14 !== var7)) {
                    _fun74172_ip = 718;
                    continue _fun74172
                }
            case 578:
                var29 = _closure1_slot14;
                var15 = _closure1_slot5;
                var7 = {};
                var30 = var17.header;
                var7.style = var30;
                var38 = _closure1_slot0;
                var39 = _closure1_slot2;
                var30 = 25;
                var30 = var39[var30];
                var30 = var38.bind(var3)(var30);
                var31 = var30.SearchField;
                var30 = {};
                var35 = 'md';
                var30.size = var35;
                var35 = 26;
                var36 = var39[var35];
                var36 = var38.bind(var3)(var36);
                var37 = var36.intl;
                var36 = var37.string;
                var35 = var39[var35];
                var35 = var38.bind(var3)(var35);
                var35 = var35.t;
                var35 = var35.dt5h1C;
                var35 = var36.bind(var37)(var35);
                var30.placeholder = var35;
                var30.onChange = var34;
                var30.onFocus = var33;
                var30.isRound = var32;
                var30 = var29.bind(var3)(var31, var30);
                var7.children = var30;
                var10 = var29.bind(var3)(var15, var7);
            case 718:
                var7 = new Array(3);
                var7[0] = var10;
                if (var9) {
                    _fun74172_ip = 772;
                    continue _fun74172
                }
            case 729:
                var15 = _closure1_slot14;
                var10 = _closure1_slot6;
                var9 = {
                    'animating': true,
                    'size': 'large'
                };
                var29 = var17.loadingIndicator;
                var9.style = var29;
                var9 = var15.bind(var3)(var10, var9);
                _fun74172_ip = 938;
                continue _fun74172;
            case 772:
                var10 = var13.length;
                if (!(var14 !== var10)) {
                    _fun74172_ip = 877;
                    continue _fun74172
                }
            case 781:
                var15 = _closure1_slot14;
                var14 = _closure1_slot1;
                var29 = _closure1_slot2;
                var10 = 28;
                var10 = var29[var10];
                var14 = var14.bind(var3)(var10);
                var10 = {};
                var10.bottomSheetRef = var28;
                var10.bottomSheetIndex = var27;
                var10.setCategoryIndex = var26;
                var10.onPressSticker = var23;
                var23 = undefined;
                if (!var25) {
                    _fun74172_ip = 835;
                    continue _fun74172
                }
            case 832:
                var23 = var24;
            case 835:
                var10.onLongPressStickerDetail = var23;
                var10.insetBottom = var22;
                var10.insetTop = var21;
                var10.channel = var20;
                var10.stickerFormats = var19;
                var10.searchResults = var18;
                var10.inPortalKeyboard = var16;
                var10 = var15.bind(var3)(var14, var10);
                _fun74172_ip = 935;
                continue _fun74172;
            case 877:
                var16 = _closure1_slot14;
                var15 = _closure1_slot5;
                var14 = {};
                var17 = var17.emptyState;
                var14.style = var17;
                var18 = _closure1_slot1;
                var19 = _closure1_slot2;
                var17 = 27;
                var17 = var19[var17];
                var18 = var18.bind(var3)(var17);
                var17 = {};
                var17 = var16.bind(var3)(var18, var17);
                var14.children = var17;
                var10 = var16.bind(var3)(var15, var14);
            case 935:
                var9 = var10;
            case 938:
                var7[1] = var9;
                var10 = _closure1_slot14;
                var9 = _closure1_slot1;
                var14 = _closure1_slot2;
                var8 = 29;
                var8 = var14[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var8.categories = var13;
                var8.categoryIndex = var12;
                var8.style = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 30;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stickers/native/StickerPicker.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1613, 5556, 1352, 660, 33, 1297, 671, 795, 9318, 9320, 566, 5688, 5541, 9239, 802, 9323, 5573, 3958, 9324, 7572, 8361, 9333, 6971, 1234, 9343, 9344, 9349, 2]);