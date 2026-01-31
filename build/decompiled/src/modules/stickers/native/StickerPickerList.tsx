// modules/stickers/native/StickerPickerList.tsx
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
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
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
    var7 = var3.STICKER_SCROLL_LOAD_DELAY_MS;
    var _closure1_slot8 = var7;
    var7 = var3.STICKER_SCROLL_LOAD_DELAY_AFTER_HEIGHT_CHANGE_MS;
    var _closure1_slot9 = var7;
    var3 = var3.STICKER_SIZE;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var12 = var3.ACTION_SHEET_BACKGROUND_COLOR;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot11 = var7;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 9;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_MUTED;
    var9.color = var13;
    var3.listPlaceholder = var9;
    var9 = {
        'justifyContent': 'center',
        'overflow': 'hidden'
    };
    var9.backgroundColor = var12;
    var3.section = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT;
    var9.backgroundColor = var12;
    var3.sectionSticker = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
        'borderRadius': null,
        'marginLeft': 12,
        'marginRight': 12
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9.borderRadius = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_MOD_NORMAL;
    var9.backgroundColor = var10;
    var3.nsfwContainer = var9;
    var9 = {
        'marginLeft': 4,
        'textAlign': 'center'
    };
    var3.nsfwText = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot13 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var7 = var0.height;
        var0 = _closure1_slot13;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var2 = _closure1_slot12;
        var1 = _closure1_slot5;
        var0 = {};
        var6 = var8.nsfwContainer;
        var4 = new Array(2);
        var4[0] = var6;
        var6 = {};
        var6.height = var7;
        var4[1] = var6;
        var0.style = var4;
        var7 = _closure1_slot11;
        var10 = _closure1_slot1;
        var12 = _closure1_slot2;
        var9 = 10;
        var4 = var12[var9];
        var6 = var10.bind(var3)(var4);
        var4 = {};
        var11 = 11;
        var11 = var12[var11];
        var11 = var10.bind(var3)(var11);
        var4.source = var11;
        var9 = var12[var9];
        var9 = var10.bind(var3)(var9);
        var9 = var9.Sizes;
        var9 = var9.SMALL;
        var4.size = var9;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var11 = _closure1_slot0;
        var5 = 12;
        var5 = var12[var5];
        var5 = var11.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'style': null,
            'variant': 'text-sm/normal',
            'color': 'interactive-text-active'
        };
        var8 = var8.nsfwText;
        var5.style = var8;
        var8 = 13;
        var9 = var12[var8];
        var9 = var11.bind(var3)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8.uy25Qz;
        var8 = var9.bind(var10)(var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot14 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var8 = var0.height;
        var6 = var0.label;
        var7 = var0.sectionStyle;
        var0 = _closure1_slot13;
        var3 = undefined;
        var5 = var0.bind(var3)();
        var2 = _closure1_slot11;
        var1 = _closure1_slot5;
        var0 = {};
        var9 = var5.section;
        var5 = new Array(3);
        var5[0] = var9;
        var5[1] = var7;
        var7 = {};
        var7.height = var8;
        var5[2] = var7;
        var0.style = var5;
        var5 = _closure1_slot0;
        var7 = _closure1_slot2;
        var4 = 12;
        var4 = var7[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.Text;
        var4 = {
            'lineClamp': 1,
            'color': 'interactive-text-default',
            'variant': 'heading-sm/semibold'
        };
        var4.children = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot15 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var4 = var0.height;
        var3 = _closure1_slot11;
        var2 = _closure1_slot5;
        var1 = {};
        var0 = {};
        var0.height = var4;
        var1.style = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot16 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun74420: for (var _fun74420_ip = 0;;) switch (_fun74420_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.bottomSheetRef;
                var _closure2_slot0 = var7;
                var30 = var0.bottomSheetIndex;
                var _closure2_slot1 = var30;
                var22 = var0.setCategoryIndex;
                var _closure2_slot2 = var22;
                var3 = var0.searchResults;
                var24 = var0.onPressSticker;
                var _closure2_slot3 = var24;
                var25 = var0.onLongPressStickerDetail;
                var _closure2_slot4 = var25;
                var5 = var0.insetBottom;
                var4 = undefined;
                if (!(var5 === var4)) {
                    _fun74420_ip = 75;
                    continue _fun74420
                }
            case 73:
                var5 = 0;
            case 75:
                var6 = var0.insetTop;
                if (!(var6 === var4)) {
                    _fun74420_ip = 87;
                    continue _fun74420
                }
            case 85:
                var6 = 0;
            case 87:
                var28 = var0.channel;
                var _closure2_slot5 = var28;
                var31 = var0.inPortalKeyboard;
                if (!(var31 === var4)) {
                    _fun74420_ip = 108;
                    continue _fun74420
                }
            case 106:
                var31 = false;
            case 108:
                var _closure2_slot6 = var31;
                var9 = var0.stickerFormats;
                if (!(var9 === var4)) {
                    _fun74420_ip = 246;
                    continue _fun74420
                }
            case 125:
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 14;
                var0 = var8[var1];
                var0 = var2.bind(var4)(var0);
                var0 = var0.StickerFormat;
                var10 = var0.PNG;
                var0 = new Array(4);
                var0[0] = var10;
                var10 = var8[var1];
                var10 = var2.bind(var4)(var10);
                var10 = var10.StickerFormat;
                var10 = var10.APNG;
                var0[1] = var10;
                var10 = var8[var1];
                var10 = var2.bind(var4)(var10);
                var10 = var10.StickerFormat;
                var10 = var10.LOTTIE;
                var0[2] = var10;
                var1 = var8[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.StickerFormat;
                var1 = var1.GIF;
                var0[3] = var1;
                var9 = var0;
            case 246:
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var _closure2_slot12 = var4;
                var _closure2_slot13 = var4;
                var _closure2_slot14 = var4;
                var _closure2_slot15 = var4;
                var _closure2_slot16 = var4;
                var _closure2_slot17 = var4;
                var _closure2_slot18 = var4;
                var _closure2_slot19 = var4;
                var _closure2_slot20 = var4;
                var _closure2_slot21 = var4;
                var _closure2_slot22 = var4;
                var _closure2_slot23 = var4;
                var20 = _closure1_slot4;
                var2 = var20.useRef;
                var0 = null;
                var10 = var2.bind(var20)(var0);
                _closure2_slot7 = var10;
                var2 = _closure1_slot13;
                var23 = var2.bind(var4)();
                _closure2_slot8 = var23;
                var2 = var20.useState;
                var11 = var2.bind(var20)(var0);
                var8 = _closure1_slot3;
                var2 = 2;
                var11 = var8.bind(var4)(var11, var2);
                var2 = 0;
                var26 = var11[var2];
                _closure2_slot9 = var26;
                var8 = 1;
                var8 = var11[var8];
                _closure2_slot10 = var8;
                var8 = _closure1_slot1;
                var11 = _closure1_slot2;
                var12 = 15;
                var12 = var11[var12];
                var12 = var8.bind(var4)(var12);
                var27 = var12.bind(var4)(var31);
                _closure2_slot11 = var27;
                var13 = _closure1_slot0;
                var12 = 16;
                var12 = var11[var12];
                var15 = var13.bind(var4)(var12);
                var14 = var15.useStateFromStores;
                var12 = _closure1_slot6;
                var13 = new Array(1);
                var13[0] = var12;
                var12 = function() { // Environment: var17
                    var0 = _closure1_slot6;
                    var0 = var0.hasLoadedStickerPacks;
                    return var0;
                };
                var29 = var14.bind(var15)(var13, var12);
                _closure2_slot12 = var29;
                var13 = _closure1_slot7;
                var12 = function(arg0) { // Environment: var17
                    var0 = arg0;
                    var0 = var0.setPackToScrollTo;
                    return var0;
                };
                var14 = var13.bind(var4)(var12);
                _closure2_slot13 = var14;
                var13 = var20.useMemo;
                var12 = new Array(3);
                var12[0] = var22;
                var12[1] = var14;
                var12[2] = var7;
                var7 = function() { // Environment: var17
                    var0 = {};
                    var2 = -1;
                    var0.scrollTo = var2;
                    var _closure3_slot0 = var0;
                    var0 = function() {
                        var0 = global;
                        var2 = var0.clearTimeout;
                        var0 = _closure3_slot0;
                        var1 = var0.scrollTo;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var _closure3_slot1 = var0;
                    var0 = {};
                    var2 = function arg0() {
                        _fun74425: for (var _fun74425_ip = 0;;) switch (_fun74425_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.index;
                                var _closure4_slot0 = var2;
                                var5 = var0.delay;
                                var4 = var0.expand;
                                var6 = _closure3_slot1;
                                var0 = undefined;
                                var6 = var6.bind(var0)();
                                if (!var4) {
                                    _fun74425_ip = 70;
                                    continue _fun74425
                                }
                            case 42:
                                var4 = _closure2_slot0;
                                var6 = var4.current;
                                var4 = null;
                                if (!(var4 != var6)) {
                                    _fun74425_ip = 70;
                                    continue _fun74425
                                }
                            case 60:
                                var4 = var6.expandActionSheet;
                                var4 = var4.bind(var6)();
                            case 70:
                                var3 = _closure3_slot0;
                                var4 = global;
                                var4 = var4.setTimeout;
                                var1 = function() { // Environment: var1
                                    _fun74426: for (var _fun74426_ip = 0;;) switch (_fun74426_ip) {
                                        case 0:
                                            var1 = _closure2_slot7;
                                            var4 = var1.current;
                                            var2 = null;
                                            if (!(var2 != var4)) {
                                                _fun74426_ip = 56;
                                                continue _fun74426
                                            }
                                        case 18:
                                            var3 = var4.scrollToLocation;
                                            var1 = {
                                                'section': null,
                                                'item': 0,
                                                'animated': true
                                            };
                                            var5 = _closure4_slot0;
                                            var1.section = var5;
                                            var1 = var3.bind(var4)(var1);
                                        case 56:
                                            var1 = _closure2_slot13;
                                            var0 = undefined;
                                            var1 = var1.bind(var0)(var2);
                                            return var0;
                                    }
                                };
                                var1 = var4.bind(var0)(var1, var5);
                                var3.scrollTo = var1;
                                var1 = _closure2_slot2;
                                var1 = var1.bind(var0)(var2);
                                return var0;
                        }
                    };
                    var0.scroll = var2;
                    var1 = function() {
                        var0 = _closure3_slot1;
                        return var0;
                    };
                    var0.cancel = var1;
                    return var0;
                };
                var21 = var13.bind(var20)(var7, var12);
                _closure2_slot14 = var21;
                var7 = 17;
                var7 = var11[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var7.channel = var28;
                var7.containerWidth = var27;
                var7.searchResults = var3;
                var7.stickerFormats = var9;
                var12 = var8.bind(var4)(var7);
                var9 = var12.sections;
                var15 = var12.sectionHeights;
                _closure2_slot15 = var15;
                var8 = var12.sectionSize;
                _closure2_slot16 = var8;
                var7 = var12.sectionFooterSize;
                _closure2_slot17 = var7;
                var11 = var12.sectionLabels;
                _closure2_slot18 = var11;
                var13 = var12.rowsBySection;
                _closure2_slot19 = var13;
                var16 = var12.rowHeight;
                _closure2_slot20 = var16;
                var14 = var12.rowSize;
                _closure2_slot21 = var14;
                var12 = var12.packToScrollToIndex;
                _closure2_slot22 = var12;
                var19 = var20.useEffect;
                var18 = new Array(5);
                var18[0] = var31;
                var18[1] = var30;
                var18[2] = var29;
                var18[3] = var12;
                var18[4] = var21;
                var12 = function() { // Environment: var17
                    _fun74428: for (var _fun74428_ip = 0;;) switch (_fun74428_ip) {
                        case 0:
                            var1 = _closure2_slot22;
                            var0 = null;
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun74428_ip = 20;
                                continue _fun74428
                            }
                        case 16:
                            var0 = _closure2_slot12;
                        case 20:
                            if (!var0) {
                                _fun74428_ip = 133;
                                continue _fun74428
                            }
                        case 23:
                            var0 = _closure2_slot6;
                            if (!var0) {
                                _fun74428_ip = 50;
                                continue _fun74428
                            }
                        case 30:
                            var1 = _closure2_slot1;
                            var0 = var1.get;
                            var1 = var0.bind(var1)();
                            var0 = 1;
                            if (!(!(var1 < var0))) {
                                _fun74428_ip = 89;
                                continue _fun74428
                            }
                        case 50:
                            var2 = _closure2_slot14;
                            var1 = var2.scroll;
                            var0 = {};
                            var4 = _closure2_slot22;
                            var0.index = var4;
                            var4 = _closure1_slot8;
                            var0.delay = var4;
                            var0 = var1.bind(var2)(var0);
                            _fun74428_ip = 133;
                            continue _fun74428;
                        case 89:
                            var2 = _closure2_slot14;
                            var1 = var2.scroll;
                            var0 = {};
                            var3 = _closure2_slot22;
                            var0.index = var3;
                            var3 = _closure1_slot9;
                            var0.delay = var3;
                            var3 = true;
                            var0.expand = var3;
                            var0 = var1.bind(var2)(var0);
                        case 133:
                            var0 = function() { // Environment: var0
                                var1 = _closure2_slot14;
                                var0 = var1.cancel;
                                var0 = var0.bind(var1)();
                                var0 = undefined;
                                return var0;
                            };
                            return var0;
                    }
                };
                var12 = var19.bind(var20)(var12, var18);
                var18 = var20.useCallback;
                var12 = new Array(3);
                var12[0] = var11;
                var12[1] = var8;
                var11 = var23.sectionSticker;
                var12[2] = var11;
                var11 = function(arg0) { // Environment: var17
                    var2 = _closure2_slot18;
                    var1 = arg0;
                    var4 = var2[var1];
                    var3 = _closure1_slot11;
                    var2 = _closure1_slot15;
                    var1 = {};
                    var1.label = var4;
                    var4 = _closure2_slot8;
                    var4 = var4.sectionSticker;
                    var1.sectionStyle = var4;
                    var0 = _closure2_slot16;
                    var1.height = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var12 = var18.bind(var20)(var11, var12);
                var19 = var20.useCallback;
                var18 = new Array(1);
                var18[0] = var7;
                var11 = function() { // Environment: var17
                    var3 = _closure1_slot11;
                    var2 = _closure1_slot16;
                    var1 = {};
                    var0 = _closure2_slot17;
                    var1.height = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var11 = var19.bind(var20)(var11, var18);
                var19 = var20.useCallback;
                var18 = new Array(8);
                var18[0] = var28;
                var18[1] = var27;
                var18[2] = var26;
                var18[3] = var25;
                var18[4] = var24;
                var18[5] = var16;
                var18[6] = var14;
                var18[7] = var13;
                var13 = function(arg0, arg1) { // Environment: var17
                    _fun74432: for (var _fun74432_ip = 0;;) switch (_fun74432_ip) {
                        case 0:
                            var1 = _closure2_slot19;
                            var0 = arg0;
                            var2 = var1[var0];
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun74432_ip = 244;
                                continue _fun74432
                            }
                        case 23:
                            var6 = var2.type;
                            var7 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var8 = 17;
                            var3 = var3[var8];
                            var4 = undefined;
                            var3 = var7.bind(var4)(var3);
                            var3 = var3.StickerPickerSectionType;
                            var3 = var3.STICKERS;
                            if (!(var3 !== var6)) {
                                _fun74432_ip = 130;
                                continue _fun74432
                            }
                        case 69:
                            var7 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var8];
                            var3 = var7.bind(var4)(var3);
                            var3 = var3.StickerPickerSectionType;
                            var3 = var3.NSFW;
                            if (!(var3 !== var6)) {
                                _fun74432_ip = 104;
                                continue _fun74432
                            }
                        case 102:
                            return var0;
                        case 104:
                            var7 = _closure1_slot11;
                            var6 = _closure1_slot14;
                            var3 = {};
                            var8 = _closure2_slot20;
                            var3.height = var8;
                            var3 = var7.bind(var4)(var6, var3);
                            return var3;
                        case 130:
                            var3 = var2.stickersByRow;
                            var2 = arg1;
                            var6 = var3[var2];
                            var3 = _closure1_slot11;
                            var2 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var1 = 18;
                            var1 = var7[var1];
                            var2 = var2.bind(var4)(var1);
                            var1 = {};
                            var7 = _closure2_slot11;
                            var1.containerWidth = var7;
                            var1.stickers = var6;
                            var6 = _closure2_slot21;
                            var1.rowSize = var6;
                            var6 = _closure2_slot3;
                            var1.onPressSticker = var6;
                            var6 = _closure2_slot4;
                            var1.onLongPressStickerDetail = var6;
                            var6 = _closure2_slot9;
                            var1.focusedSticker = var6;
                            var6 = _closure2_slot10;
                            var1.setFocusedSticker = var6;
                            var5 = _closure2_slot5;
                            var1.channel = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        case 244:
                            return var0;
                    }
                };
                var13 = var19.bind(var20)(var13, var18);
                var19 = var20.useMemo;
                var18 = new Array(2);
                var18[0] = var22;
                var18[1] = var15;
                var15 = function() { // Environment: var17
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 19;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var1);
                    var3 = var4.debounce;
                    var1 = function(arg0) { // Environment: var2
                        _fun74434: for (var _fun74434_ip = 0;;) switch (_fun74434_ip) {
                            case 0:
                                var5 = arg0;
                                var1 = _closure2_slot15;
                                var1 = var1.length;
                                var6 = 0;
                                var1 = var6 < var1;
                                var2 = 0;
                                if (!var1) {
                                    _fun74434_ip = 87;
                                    continue _fun74434
                                }
                            case 26:
                                var1 = _closure2_slot15;
                                var1 = var1[var6];
                                var1 = var5 >= var1;
                                var4 = 0;
                                var3 = 0;
                                var2 = 0;
                                if (!var1) {
                                    _fun74434_ip = 87;
                                    continue _fun74434
                                }
                            case 47:
                                var6 = var4 + 1;
                                var3 = var3 + 1;
                                var1 = _closure2_slot15;
                                var1 = var1.length;
                                var2 = var6;
                                if (!(var3 < var1)) {
                                    _fun74434_ip = 87;
                                    continue _fun74434
                                }
                            case 69:
                                var1 = _closure2_slot15;
                                var1 = var1[var3];
                                var4 = var6;
                                var2 = var4;
                                if (var5 >= var1) {
                                    _fun74434_ip = 47;
                                    continue _fun74434
                                }
                            case 87:
                                var1 = _closure2_slot2;
                                var0 = undefined;
                                var1 = var1.bind(var0)(var2);
                                return var0;
                        }
                    };
                    var0 = 100;
                    var1 = var3.bind(var4)(var1, var0);
                    var _closure3_slot0 = var1;
                    var0 = {};
                    var2 = function arg0() {
                        var1 = arg0;
                        var3 = _closure3_slot0;
                        var0 = var1.nativeEvent;
                        var0 = var0.contentOffset;
                        var2 = var0.y;
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var2 = var1.nativeEvent;
                        var2 = var2.layoutMeasurement;
                        var2 = var2.height;
                        var2 = var1.nativeEvent;
                        var2 = var2.contentOffset;
                        var2 = var2.y;
                        var1 = var1.nativeEvent;
                        var1 = var1.contentSize;
                        var1 = var1.height;
                        return var0;
                    };
                    var0.onScroll = var2;
                    var0.setCategory = var1;
                    return var0;
                };
                var18 = var19.bind(var20)(var15, var18);
                var15 = var18.onScroll;
                var18 = var18.setCategory;
                _closure2_slot23 = var18;
                var22 = var20.useMemo;
                var19 = new Array(2);
                var19[0] = var23;
                var19[1] = var14;
                var14 = function() { // Environment: var17
                    var0 = {};
                    var1 = {};
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 20;
                    var3 = var7[var4];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var3 = var3.FastestListPropsPlaceholderType;
                    var3 = var3.SHAPE;
                    var1.type = var3;
                    var8 = _closure2_slot8;
                    var8 = var8.listPlaceholder;
                    var8 = var8.color;
                    var1.colorHex = var8;
                    var8 = 'rect';
                    var1.shape = var8;
                    var9 = _closure1_slot1;
                    var8 = 9;
                    var10 = var7[var8];
                    var10 = var9.bind(var5)(var10);
                    var10 = var10.radii;
                    var10 = var10.md;
                    var1.borderRadius = var10;
                    var8 = var7[var8];
                    var8 = var9.bind(var5)(var8);
                    var8 = var8.spacing;
                    var8 = var8.PX_4;
                    var1.paddingVertical = var8;
                    var0.sectionHeader = var1;
                    var1 = {};
                    var4 = var7[var4];
                    var4 = var6.bind(var5)(var4);
                    var4 = var4.FastestListPropsPlaceholderType;
                    var4 = var4.SHAPE;
                    var1.type = var4;
                    var4 = _closure2_slot8;
                    var4 = var4.listPlaceholder;
                    var4 = var4.color;
                    var1.colorHex = var4;
                    var4 = 'circle';
                    var1.shape = var4;
                    var3 = _closure2_slot21;
                    var1.shapeCount = var3;
                    var2 = _closure1_slot10;
                    var1.width = var2;
                    var1.height = var2;
                    var0.sectionItem = var1;
                    return var0;
                };
                var14 = var22.bind(var20)(var14, var19);
                var22 = var20.useEffect;
                var19 = new Array(1);
                var19[0] = var18;
                var18 = function() { // Environment: var17
                    var0 = function() { // Environment: var0
                        var1 = _closure2_slot23;
                        var0 = var1.cancel;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    return var0;
                };
                var18 = var22.bind(var20)(var18, var19);
                var19 = var20.useEffect;
                var18 = new Array(1);
                var18[0] = var21;
                var17 = function() { // Environment: var17
                    var0 = function() { // Environment: var0
                        var1 = _closure2_slot14;
                        var0 = var1.cancel;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var17 = var19.bind(var20)(var17, var18);
                var17 = var0 == var3;
                var0 = undefined;
                if (var17) {
                    _fun74420_ip = 958;
                    continue _fun74420
                }
            case 953:
                var0 = var3.length;
            case 958:
                if (!(var2 !== var0)) {
                    _fun74420_ip = 1176;
                    continue _fun74420
                }
            case 965:
                var3 = _closure1_slot11;
                var2 = _closure1_slot1;
                var19 = _closure1_slot2;
                var0 = 22;
                var0 = var19[var0];
                var2 = var2.bind(var4)(var0);
                var0 = {};
                var18 = _closure1_slot0;
                var17 = 13;
                var20 = var19[var17];
                var20 = var18.bind(var4)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var17 = var19[var17];
                var17 = var18.bind(var4)(var17);
                var17 = var17.t;
                var17 = var17.nf1s3u;
                var17 = var20.bind(var21)(var17);
                var0.accessibilityLabel = var17;
                var17 = 23;
                var17 = var19[var17];
                var18 = var18.bind(var4)(var17);
                var17 = var18.getCustomKeyboardHeight;
                var17 = var17.bind(var18)();
                var0.estimatedListSize = var17;
                var17 = true;
                var0.inActionSheet = var17;
                var0.insetEnd = var5;
                var0.insetStart = var6;
                var0.itemSize = var16;
                var16 = 'always';
                var0.keyboardShouldPersistTaps = var16;
                var16 = 'sticker-picker-list';
                var0.listId = var16;
                var0.onScroll = var15;
                var0.placeholderConfig = var14;
                var0.renderItem = var13;
                var0.renderSectionHeader = var12;
                var0.renderSectionFooter = var11;
                var0.ref = var10;
                var10 = 'callbacks';
                var0.scrollReporting = var10;
                var0.sections = var9;
                var0.sectionHeaderSize = var8;
                var0.sectionFooterSize = var7;
                var0 = var3.bind(var4)(var2, var0);
                _fun74420_ip = 1225;
                continue _fun74420;
            case 1176:
                var3 = _closure1_slot11;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 21;
                var1 = var7[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var7 = true;
                var1.inActionSheet = var7;
                var1.insetTop = var6;
                var1.insetBottom = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1225:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 24;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stickers/native/StickerPickerList.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 5556, 9321, 9234, 4895, 33, 1297, 671, 4045, 9345, 3900, 1234, 4183, 9243, 566, 9346, 9330, 22, 7531, 9347, 7524, 4859, 2]);