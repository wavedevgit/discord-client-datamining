// modules/stickers/native/StickerPackDetailActionSheet.tsx
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
    var7 = var3.MIN_MARGIN;
    var _closure1_slot5 = var7;
    var3 = var3.STICKER_SIZE;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot9 = var7;
    var7 = var3.Fragment;
    var _closure1_slot10 = var7;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'position': 'absolute',
        'left': 0,
        'top': 0,
        'height': '100%',
        'width': '100%',
        'alignItems': 'center',
        'justifyContent': 'center',
        'backgroundColor': 'rgba(0, 0, 0, 0.85)'
    };
    var3.focusedStickerPreviewContainer = var9;
    var9 = {
        'marginHorizontal': 16,
        'marginVertical': 8,
        'backgroundColor': 'transparent'
    };
    var9.height = var0;
    var3.header = var9;
    var9 = {
        'padding': 16,
        'paddingBottom': 16
    };
    var10 = 7;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var10;
    var3.footer = var9;
    var9 = {
        'paddingHorizontal': 16,
        'marginBottom': 16
    };
    var3.stickers = var9;
    var9 = {
        'position': 'absolute',
        'bottom': 50
    };
    var3.popoutContainer = var9;
    var9 = {};
    var10 = 40;
    var9.height = var10;
    var3.upsellButton = var9;
    var9 = {};
    var10 = 32;
    var9.width = var10;
    var3.nitroWheel = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot12 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun74302: for (var _fun74302_ip = 0;;) switch (_fun74302_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.stickerPack;
                var _closure2_slot0 = var11;
                var0 = var1.analyticsPopoutType;
                var _closure2_slot1 = var0;
                var1 = var1.onClose;
                var _closure2_slot2 = var1;
                var2 = _closure1_slot12;
                var3 = undefined;
                var10 = var2.bind(var3)();
                var16 = _closure1_slot1;
                var20 = _closure1_slot2;
                var2 = 8;
                var2 = var20[var2];
                var2 = var16.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var14 = var2.width;
                var4 = _closure1_slot4;
                var2 = var4.useState;
                var7 = null;
                var2 = var2.bind(var4)(var7);
                var12 = _closure1_slot3;
                var9 = 2;
                var2 = var12.bind(var3)(var2, var9);
                var5 = 0;
                var17 = var2[var5];
                var8 = 1;
                var2 = var2[var8];
                var _closure2_slot3 = var2;
                var13 = var4.useState;
                var2 = false;
                var2 = var13.bind(var4)(var2);
                var2 = var12.bind(var3)(var2, var9);
                var5 = var2[var5];
                var _closure2_slot4 = var5;
                var2 = var2[var8];
                var _closure2_slot5 = var2;
                var2 = var4.useRef;
                var2 = var2.bind(var4)(var7);
                var _closure2_slot6 = var2;
                var2 = 9;
                var2 = var20[var2];
                var2 = var16.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var22 = var2.bottom;
                var2 = global;
                var9 = var2.Math;
                var8 = var9.floor;
                var13 = var2.Math;
                var12 = var13.min;
                var2 = _closure1_slot8;
                var12 = var12.bind(var13)(var2, var14);
                var13 = _closure1_slot6;
                var2 = _closure1_slot5;
                var2 = var13 + var2;
                var2 = var12 / var2;
                var12 = var8.bind(var9)(var2);
                var _closure2_slot7 = var12;
                var2 = 10;
                var2 = var20[var2];
                var9 = var16.bind(var3)(var2);
                var8 = var9.chunk;
                var2 = var11.stickers;
                var21 = var8.bind(var9)(var2, var12);
                var2 = var4.useRef;
                var2 = var2.bind(var4)(var1);
                var _closure2_slot8 = var2;
                var2 = function arg0() {
                    var2 = _closure2_slot3;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var _closure2_slot9 = var2;
                var9 = function() {
                    _fun74304: for (var _fun74304_ip = 0;;) switch (_fun74304_ip) {
                        case 0:
                            var0 = _closure2_slot6;
                            var2 = var0.current;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun74304_ip = 42;
                                continue _fun74304
                            }
                        case 18:
                            var0 = global;
                            var3 = var0.clearTimeout;
                            var0 = _closure2_slot6;
                            var2 = var0.current;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2);
                        case 42:
                            var2 = _closure2_slot4;
                            var4 = _closure2_slot5;
                            var3 = !var2;
                            var0 = undefined;
                            var3 = var4.bind(var0)(var3);
                            if (var2) {
                                _fun74304_ip = 102;
                                continue _fun74304
                            }
                        case 63:
                            var2 = _closure2_slot6;
                            var1 = global;
                            var4 = var1.setTimeout;
                            var3 = function() { // Environment: var1
                                var2 = _closure2_slot5;
                                var1 = undefined;
                                var0 = false;
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var1 = 4000;
                            var1 = var4.bind(var0)(var3, var1);
                            var2.current = var1;
                        case 102:
                            return var0;
                    }
                };
                var8 = var4.useEffect;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var15
                    var1 = _closure2_slot8;
                    var0 = _closure2_slot2;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var1 = var8.bind(var4)(var1, var2);
                var8 = var4.useEffect;
                var2 = function() { // Environment: var15
                    var0 = function() { // Environment: var0
                        _fun74308: for (var _fun74308_ip = 0;;) switch (_fun74308_ip) {
                            case 0:
                                var0 = _closure2_slot8;
                                var2 = var0.current;
                                var0 = null;
                                var2 = var0 == var2;
                                var0 = undefined;
                                if (var2) {
                                    _fun74308_ip = 36;
                                    continue _fun74308
                                }
                            case 23:
                                var2 = _closure2_slot8;
                                var1 = var2.current;
                                var0 = var1.bind(var2)();
                            case 36:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = new Array(0);
                var1 = var8.bind(var4)(var2, var1);
                var2 = var4.useEffect;
                var1 = new Array(2);
                var1[0] = var0;
                var0 = var11.id;
                var1[1] = var0;
                var0 = function() { // Environment: var15
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 11;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot7;
                    var2 = var1.OPEN_POPOUT;
                    var1 = {};
                    var6 = _closure2_slot1;
                    var1.type = var6;
                    var5 = _closure2_slot0;
                    var5 = var5.id;
                    var1.sticker_pack_id = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot11;
                var1 = _closure1_slot10;
                var0 = {};
                var13 = _closure1_slot9;
                var23 = _closure1_slot0;
                var4 = 12;
                var4 = var20[var4];
                var4 = var23.bind(var3)(var4);
                var8 = var4.BottomSheet;
                var4 = {
                    'scrollable': true,
                    'startExpanded': true,
                    'handleDisabled': true
                };
                var19 = true;
                var14 = {};
                var12 = 13;
                var12 = var20[var12];
                var18 = var16.bind(var3)(var12);
                var16 = {};
                var16.stickerPack = var11;
                var12 = var10.header;
                var16.style = var12;
                var12 = 14;
                var20 = var20[var12];
                var23 = var23.bind(var3)(var20);
                var20 = var23.doesStickerPackHavePopoutInformation;
                var23 = var20.bind(var23)(var11);
                var20 = undefined;
                if (!var23) {
                    _fun74302_ip = 510;
                    continue _fun74302
                }
            case 507:
                var20 = var9;
            case 510:
                var16.onPress = var20;
                var16.withBanner = var19;
                var16.withDescription = var19;
                var16 = var13.bind(var3)(var18, var16);
                var20 = new Array(2);
                var20[0] = var16;
                var18 = _closure1_slot9;
                var16 = _closure1_slot0;
                var19 = _closure1_slot2;
                var23 = 15;
                var23 = var19[var23];
                var23 = var16.bind(var3)(var23);
                var24 = var23.ActionSheetHeaderBar;
                var23 = {};
                var25 = 16;
                var25 = var19[var25];
                var25 = var16.bind(var3)(var25);
                var25 = var25.ActionSheetHeaderBarVariants;
                var25 = var25.FLOATING;
                var23.variant = var25;
                var23 = var18.bind(var3)(var24, var23);
                var20[1] = var23;
                var14.children = var20;
                var14 = var2.bind(var3)(var1, var14);
                var4.header = var14;
                var14 = 17;
                var14 = var19[var14];
                var14 = var16.bind(var3)(var14);
                var16 = var14.BottomSheetScrollView;
                var14 = {};
                var19 = var10.stickers;
                var14.style = var19;
                var19 = {};
                var20 = 32;
                var20 = var20 + var22;
                var19.paddingBottom = var20;
                var14.contentContainerStyle = var19;
                var20 = var21.map;
                var19 = function(arg0, arg1) { // Environment: var15
                    var4 = _closure1_slot9;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 18;
                    var0 = var2[var0];
                    var3 = undefined;
                    var2 = var1.bind(var3)(var0);
                    var1 = {};
                    var5 = _closure2_slot7;
                    var1.containerWidth = var5;
                    var6 = arg0;
                    var1.stickers = var6;
                    var1.rowSize = var5;
                    var0 = _closure2_slot9;
                    var1.onPressSticker = var0;
                    var0 = false;
                    var1.nativeRow = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var19 = var20.bind(var21)(var19);
                var14.children = var19;
                var14 = var18.bind(var3)(var16, var14);
                var4.children = var14;
                var8 = var13.bind(var3)(var8, var4);
                var4 = new Array(3);
                var4[0] = var8;
                var7 = var7 != var17;
                if (!var7) {
                    _fun74302_ip = 830;
                    continue _fun74302
                }
            case 723:
                var14 = _closure1_slot9;
                var13 = _closure1_slot0;
                var18 = _closure1_slot2;
                var8 = 19;
                var8 = var18[var8];
                var8 = var13.bind(var3)(var8);
                var13 = var8.PressableOpacity;
                var8 = {};
                var16 = 'none';
                var8.accessibilityRole = var16;
                var16 = var10.focusedStickerPreviewContainer;
                var8.style = var16;
                var15 = function() {
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var0 = null;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var8.onPress = var15;
                var16 = _closure1_slot1;
                var15 = 20;
                var15 = var18[var15];
                var16 = var16.bind(var3)(var15);
                var15 = {};
                var15.sticker = var17;
                var17 = 128;
                var15.size = var17;
                var15 = var14.bind(var3)(var16, var15);
                var8.children = var15;
                var7 = var14.bind(var3)(var13, var8);
            case 830:
                var4[1] = var7;
                if (!var5) {
                    _fun74302_ip = 886;
                    continue _fun74302
                }
            case 837:
                var8 = _closure1_slot9;
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var12];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.stickerPack = var11;
                var10 = var10.popoutContainer;
                var6.style = var10;
                var6.onClose = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 886:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stickers/native/StickerPackDetailActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 9236, 660, 4897, 33, 1297, 671, 1464, 1568, 22, 795, 4896, 9328, 9331, 5167, 5167, 4898, 9332, 4867, 9333, 2]);