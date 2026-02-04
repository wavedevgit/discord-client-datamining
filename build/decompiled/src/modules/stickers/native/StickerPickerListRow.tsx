// modules/stickers/native/StickerPickerListRow.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StickerAnimationSettings;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.ROW_HEIGHT;
    var9 = var3.STICKER_SIZE;
    var _closure1_slot7 = var9;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PADDING_VERTICAL;
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'height': null,
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between',
        'overflow': 'hidden'
    };
    var8.height = var10;
    var3.row = var8;
    var8 = {};
    var8.height = var9;
    var8.width = var9;
    var3.stickerImage = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stickers/native/StickerPickerListRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun74561: for (var _fun74561_ip = 0;;) switch (_fun74561_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.containerWidth;
                var15 = var0.stickers;
                var _closure2_slot0 = var15;
                var14 = var0.rowSize;
                var1 = var0.onPressSticker;
                var _closure2_slot1 = var1;
                var1 = var0.onLongPressStickerDetail;
                var _closure2_slot2 = var1;
                var1 = var0.focusedSticker;
                var _closure2_slot3 = var1;
                var1 = var0.setFocusedSticker;
                var _closure2_slot4 = var1;
                var1 = var0.channel;
                var _closure2_slot5 = var1;
                var2 = var0.nativeRow;
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun74561_ip = 121;
                    continue _fun74561
                }
            case 88:
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 9;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.isAndroid;
                var2 = var0.bind(var1)();
            case 121:
                var7 = undefined;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var6 = undefined;
                var0 = _closure1_slot10;
                var0 = var0.bind(var3)();
                var7 = var0;
                _closure2_slot6 = var0;
                var4 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 10;
                var0 = var9[var0];
                var0 = var4.bind(var3)(var0);
                var4 = var0.AnimateStickers;
                var0 = var4.useSetting;
                var0 = var0.bind(var4)();
                _closure2_slot7 = var0;
                var0 = function arg0() {
                    _fun74562: for (var _fun74562_ip = 0;;) switch (_fun74562_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 11;
                            var2 = var5[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.triggerHapticFeedback;
                            var4 = _closure1_slot1;
                            var1 = 12;
                            var1 = var5[var1];
                            var1 = var4.bind(var0)(var1);
                            var1 = var1.IMPACT_LIGHT;
                            var1 = var2.bind(var3)(var1);
                            var3 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun74562_ip = 83;
                                continue _fun74562
                            }
                        case 71:
                            var2 = _closure2_slot1;
                            var1 = arg0;
                            var1 = var2.bind(var0)(var1);
                        case 83:
                            return var0;
                    }
                };
                _closure2_slot8 = var0;
                var0 = function arg0() {
                    _fun74563: for (var _fun74563_ip = 0;;) switch (_fun74563_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot2;
                            var4 = null;
                            if (!(var4 == var1)) {
                                _fun74563_ip = 146;
                                continue _fun74563
                            }
                        case 19:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 10;
                            var5 = var5[var1];
                            var1 = undefined;
                            var5 = var6.bind(var1)(var5);
                            var6 = var5.AnimateStickers;
                            var5 = var6.getSetting;
                            var6 = var5.bind(var6)();
                            var5 = _closure1_slot6;
                            var5 = var5.ANIMATE_ON_INTERACTION;
                            if (!(var6 === var5)) {
                                _fun74563_ip = 144;
                                continue _fun74563
                            }
                        case 74:
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 11;
                            var5 = var8[var5];
                            var6 = var6.bind(var1)(var5);
                            var5 = var6.triggerHapticFeedback;
                            var7 = _closure1_slot1;
                            var3 = 12;
                            var3 = var8[var3];
                            var3 = var7.bind(var1)(var3);
                            var3 = var3.IMPACT_LIGHT;
                            var3 = var5.bind(var6)(var3);
                            var3 = _closure2_slot4;
                            if (!(var4 != var3)) {
                                _fun74563_ip = 144;
                                continue _fun74563
                            }
                        case 135:
                            var3 = _closure2_slot4;
                            var3 = var3.bind(var1)(var2);
                        case 144:
                            return var1;
                        case 146:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 11;
                            var4 = var7[var1];
                            var1 = undefined;
                            var5 = var5.bind(var1)(var4);
                            var4 = var5.triggerHapticFeedback;
                            var6 = _closure1_slot1;
                            var3 = 12;
                            var3 = var7[var3];
                            var3 = var6.bind(var1)(var3);
                            var3 = var3.IMPACT_LIGHT;
                            var3 = var4.bind(var5)(var3);
                            var0 = _closure2_slot2;
                            var0 = var0.bind(var1)(var2);
                            var0 = undefined;
                            return var0;
                    }
                };
                _closure2_slot9 = var0;
                var13 = function arg0() {
                    _fun74564: for (var _fun74564_ip = 0;;) switch (_fun74564_ip) {
                        case 0:
                            var8 = arg0;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 13;
                            var0 = var2[var0];
                            var7 = undefined;
                            var6 = var1.bind(var7)(var0);
                            var5 = var6.shouldAnimateSticker;
                            var3 = _closure2_slot7;
                            var9 = var8.id;
                            var0 = _closure2_slot3;
                            var2 = null;
                            var10 = var2 == var0;
                            var0 = undefined;
                            if (var10) {
                                _fun74564_ip = 70;
                                continue _fun74564
                            }
                        case 61:
                            var10 = _closure2_slot3;
                            var0 = var10.id;
                        case 70:
                            var0 = var9 === var0;
                            var3 = var5.bind(var6)(var3, var0);
                            var0 = new Array(3);
                            var0[0] = var3;
                            var3 = _closure2_slot5;
                            var3 = var2 == var3;
                            if (var3) {
                                _fun74564_ip = 149;
                                continue _fun74564
                            }
                        case 99:
                            var6 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var5 = 14;
                            var5 = var9[var5];
                            var7 = var6.bind(var7)(var5);
                            var6 = var7.isSendableSticker;
                            var5 = _closure1_slot5;
                            var4 = var5.getCurrentUser;
                            var5 = var4.bind(var5)();
                            var4 = _closure2_slot5;
                            var3 = var6.bind(var7)(var8, var5, var4);
                        case 149:
                            var0[1] = var3;
                            var1 = _closure2_slot1;
                            var1 = var2 == var1;
                            var0[2] = var1;
                            return var0;
                    }
                };
                _closure2_slot10 = var13;
                var0 = new Array(0);
                if (var2) {
                    _fun74561_ip = 325;
                    continue _fun74561
                }
            case 251:
                _closure2_slot11 = var0;
                var4 = function() {
                    _fun74565: for (var _fun74565_ip = 0;;) switch (_fun74565_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot12;
                            var1 = var2[var1];
                            var _closure3_slot0 = var1;
                            var6 = undefined;
                            if (!(var6 !== var1)) {
                                _fun74565_ip = 249;
                                continue _fun74565
                            }
                        case 30:
                            var2 = _closure2_slot10;
                            var4 = var2.bind(var6)(var1);
                            var3 = _closure1_slot3;
                            var2 = 3;
                            var3 = var3.bind(var6)(var4, var2);
                            var2 = 0;
                            var11 = var3[var2];
                            var2 = 1;
                            var8 = var3[var2];
                            var2 = 2;
                            var10 = var3[var2];
                            var3 = _closure2_slot11;
                            var2 = var3.push;
                            var7 = _closure1_slot9;
                            var5 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var4 = 19;
                            var4 = var13[var4];
                            var4 = var5.bind(var6)(var4);
                            var5 = var4.PressableOpacity;
                            var4 = {};
                            var14 = 'button';
                            var4.accessibilityRole = var14;
                            var14 = var1.name;
                            var4.accessibilityLabel = var14;
                            var14 = _closure2_slot6;
                            var14 = var14.stickerImage;
                            var4.style = var14;
                            var4.disabled = var10;
                            var10 = function() {
                                var2 = _closure2_slot8;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var4.onPress = var10;
                            var9 = function() {
                                var2 = _closure2_slot9;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var4.onLongPress = var9;
                            var10 = _closure1_slot1;
                            var9 = 16;
                            var9 = var13[var9];
                            var10 = var10.bind(var6)(var9);
                            var9 = {};
                            var9.sticker = var1;
                            var12 = _closure1_slot7;
                            var9.size = var12;
                            var9.animated = var11;
                            var9.opaque = var8;
                            var8 = _closure2_slot12;
                            var8 = var7.bind(var6)(var10, var9, var8);
                            var4.children = var8;
                            var1 = var1.id;
                            var1 = var7.bind(var6)(var5, var4, var1);
                            var1 = var2.bind(var3)(var1);
                            return var6;
                        case 249:
                            var2 = _closure2_slot11;
                            var1 = var2.push;
                            var5 = _closure1_slot9;
                            var4 = _closure1_slot4;
                            var3 = {};
                            var7 = _closure2_slot6;
                            var7 = var7.stickerImage;
                            var3.style = var7;
                            var0 = _closure2_slot12;
                            var0 = var5.bind(var6)(var4, var3, var0);
                            var0 = var1.bind(var2)(var0);
                            var0 = 1;
                            return var0;
                    }
                };
                var2 = 0;
                _closure2_slot12 = var2;
                var9 = var2 < var14;
                if (!var9) {
                    _fun74561_ip = 290;
                    continue _fun74561
                }
            case 275:
                var9 = var4.bind(var3)();
                var2 = var2 + 1;
                _closure2_slot12 = var2;
                if (var2 < var14) {
                    _fun74561_ip = 275;
                    continue _fun74561
                }
            case 290:
                var9 = _closure1_slot9;
                var4 = _closure1_slot4;
                var2 = {};
                var10 = var7;
                var10 = var10.row;
                var2.style = var10;
                var2.children = var0;
                var2 = var9.bind(var3)(var4, var2);
                return var2;
            case 325:
                var6 = var0;
                var12 = 0;
                var16 = var12 < var14;
                var11 = 3;
                var10 = 1;
                var9 = 2;
                var4 = 16;
                var2 = 15;
                var0 = 0;
                if (!var16) {
                    _fun74561_ip = 569;
                    continue _fun74561
                }
            case 357:
                var25 = var15[var0];
                if (!(var3 === var25)) {
                    _fun74561_ip = 432;
                    continue _fun74561
                }
            case 365:
                var18 = var6;
                var17 = var18.push;
                var16 = {
                    'stickerId': null,
                    'stickerName': '',
                    'stickerType': null,
                    'stickerUrl': '',
                    'stickerAnimated': false,
                    'stickerDisabled': true,
                    'stickerOpaque': false
                };
                var20 = _closure1_slot0;
                var19 = _closure1_slot2;
                var19 = var19[var2];
                var19 = var20.bind(var3)(var19);
                var19 = var19.StickerFormat;
                var19 = var19.PNG;
                var16.stickerType = var19;
                var16 = var17.bind(var18)(var16);
                _fun74561_ip = 559;
                continue _fun74561;
            case 432:
                var17 = var13.bind(var3)(var25);
                var16 = _closure1_slot3;
                var16 = var16.bind(var3)(var17, var11);
                var21 = var16[var12];
                var19 = var16[var10];
                var20 = var16[var9];
                var18 = var6;
                var17 = var18.push;
                var16 = {};
                var22 = var25.id;
                var16.stickerId = var22;
                var22 = var25.name;
                var16.stickerName = var22;
                var22 = var25.format_type;
                var16.stickerType = var22;
                var23 = _closure1_slot0;
                var22 = _closure1_slot2;
                var22 = var22[var4];
                var24 = var23.bind(var3)(var22);
                var23 = var24.getStickerAssetUrl;
                var22 = _closure1_slot7;
                var22 = var23.bind(var24)(var25, var22, var21);
                var16.stickerUrl = var22;
                var16.stickerAnimated = var21;
                var16.stickerDisabled = var20;
                var16.stickerOpaque = var19;
                var16 = var17.bind(var18)(var16);
            case 559:
                var0 = var0 + 1;
                if (var0 < var14) {
                    _fun74561_ip = 357;
                    continue _fun74561
                }
            case 569: // try_start_0
                var4 = _closure1_slot9;
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 17;
                var0 = var9[var0];
                var2 = var2.bind(var3)(var0);
                var0 = {};
                var7 = var7.row;
                var0.style = var7;
                var7 = {};
                var7.rowContentWidth = var8;
                var8 = _closure1_slot8;
                var7.rowContentPaddingVertical = var8;
                var8 = _closure1_slot7;
                var7.itemSize = var8;
                var8 = var6;
                var7.items = var8;
                var0.rowData = var7;
                var7 = function arg0() {
                    _fun74568: for (var _fun74568_ip = 0;;) switch (_fun74568_ip) {
                        case 0:
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var3 = _closure2_slot0;
                            var2 = var3.find;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.id;
                                var0 = _closure3_slot0;
                                var0 = var0.nativeEvent;
                                var0 = var0.stickerId;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var2 = var2.bind(var3)(var1);
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun74568_ip = 50;
                                continue _fun74568
                            }
                        case 39:
                            var1 = _closure2_slot8;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 50:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.onPressSticker = var7;
                var7 = function arg0() {
                    _fun74570: for (var _fun74570_ip = 0;;) switch (_fun74570_ip) {
                        case 0:
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var3 = _closure2_slot0;
                            var2 = var3.find;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.id;
                                var0 = _closure3_slot0;
                                var0 = var0.nativeEvent;
                                var0 = var0.stickerId;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var2 = var2.bind(var3)(var1);
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun74570_ip = 50;
                                continue _fun74570
                            }
                        case 39:
                            var1 = _closure2_slot9;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 50:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.onLongPressSticker = var7;
                var0 = var4.bind(var3)(var2, var0);
            case 672: // try_end0
                return var0;
            case 674: // catch_target0
                CatchBlockStart(arg_register = 0);
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 18;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.addBreadcrumb;
                var1 = {
                    'message': 'Error in StickerPickerListRowNativeComponent',
                    'category': 'sticker'
                };
                var4 = {};
                var8 = var6;
                var6 = var8.length;
                var4.itemLength = var6;
                var7 = var8.filter;
                var6 = function(arg0) { // Environment: var5
                    _fun74572: for (var _fun74572_ip = 0;;) switch (_fun74572_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.stickerId;
                            var2 = null;
                            var0 = var2 == var0;
                            if (var0) {
                                _fun74572_ip = 28;
                                continue _fun74572
                            }
                        case 18:
                            var3 = var1.stickerName;
                            var0 = var2 == var3;
                        case 28:
                            if (var0) {
                                _fun74572_ip = 41;
                                continue _fun74572
                            }
                        case 31:
                            var1 = var1.stickerUrl;
                            var0 = var2 == var1;
                        case 41:
                            return var0;
                    }
                };
                var7 = var7.bind(var8)(var6);
                var6 = var7.map;
                var5 = function(arg0) { // Environment: var5
                    var1 = arg0;
                    var0 = {};
                    var2 = var1.stickerId;
                    var0.stickerId = var2;
                    var2 = var1.stickerName;
                    var0.stickerName = var2;
                    var1 = var1.stickerUrl;
                    var0.stickerUrl = var1;
                    return var0;
                };
                var5 = var6.bind(var7)(var5);
                var4.items = var5;
                var1.data = var4;
                var1 = var2.bind(var3)(var1);
                throw var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1621, 1352, 9290, 1565, 33, 1297, 478, 1348, 3279, 3280, 3999, 5611, 4219, 9387, 9388, 1207, 4902, 2]);