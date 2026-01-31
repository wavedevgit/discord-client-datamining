// modules/media_uploads/native/UploadPreviewActionSheet.tsx
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
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Image;
    var _closure1_slot5 = var6;
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DraftType;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 16;
    var8.padding = var9;
    var3.contentContainer = var8;
    var8 = {};
    var9 = 6;
    var10 = var5[var9];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var10;
    var10 = var5[var9];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var8.padding = var10;
    var10 = var5[var9];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.md;
    var8.borderRadius = var10;
    var10 = '100%';
    var8.width = var10;
    var3.imageWrap = var8;
    var8 = {
        'overflow': 'hidden',
        'alignSelf': 'center'
    };
    var10 = var5[var9];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.md;
    var9 = var5[var9];
    var9 = var11.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_4;
    var9 = var10 - var9;
    var8.borderRadius = var9;
    var3.imageContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 39;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_uploads/native/UploadPreviewActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: UploadPreviewActionSheet, environment: var1
        _fun74569: for (var _fun74569_ip = 0;;) switch (_fun74569_ip) {
            case 0:
                var2 = arg0;
                var12 = var2.onAdd;
                var _closure2_slot0 = var12;
                var0 = var2.onEdit;
                var _closure2_slot1 = var0;
                var13 = var2.onRemove;
                var _closure2_slot2 = var13;
                var4 = var2.channelId;
                var _closure2_slot3 = var4;
                var1 = var2.onClose;
                var _closure2_slot4 = var1;
                var5 = var2.disableAddDescription;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun74569_ip = 68;
                    continue _fun74569
                }
            case 66:
                var5 = false;
            case 68:
                var1 = var2.disableSpoiler;
                var2 = var2.upload;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var6 = _closure1_slot10;
                var23 = var6.bind(var3)();
                _closure2_slot5 = var23;
                var6 = var2.id;
                _closure2_slot6 = var6;
                var19 = var2.isVideo;
                _closure2_slot7 = var19;
                var22 = var2.isImage;
                var7 = var2.isThumbnail;
                var28 = var3 !== var7;
                if (!var28) {
                    _fun74569_ip = 164;
                    continue _fun74569
                }
            case 161:
                var28 = var7;
            case 164:
                var35 = var2.item;
                _closure2_slot8 = var35;
                var31 = var2.spoiler;
                _closure2_slot9 = var31;
                var10 = _closure1_slot1;
                var14 = _closure1_slot2;
                var7 = 7;
                var7 = var14[var7];
                var9 = var10.bind(var3)(var7);
                var8 = var35.platform;
                var15 = _closure1_slot0;
                var7 = 8;
                var7 = var14[var7];
                var7 = var15.bind(var3)(var7);
                var7 = var7.UploadPlatform;
                var7 = var7.REACT_NATIVE;
                var8 = var8 === var7;
                var7 = 'Upload must be a React Native upload item.';
                var7 = var9.bind(var3)(var8, var7);
                var7 = 9;
                var7 = var14[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.bind(var3)();
                var8 = var7.width;
                _closure2_slot10 = var8;
                var7 = 10;
                var7 = var14[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.bind(var3)();
                var7 = var7.bottom;
                var9 = 11;
                var9 = var14[var9];
                var10 = var10.bind(var3)(var9);
                var9 = function() { // Environment: var32
                    var0 = function() { // Environment: var0
                        _fun74571: for (var _fun74571_ip = 0;;) switch (_fun74571_ip) {
                            case 0:
                                var2 = _closure2_slot4;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun74571_ip = 23;
                                    continue _fun74571
                                }
                            case 13:
                                var1 = _closure2_slot4;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                            case 23:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
                };
                var9 = var10.bind(var3)(var9);
                var10 = _closure1_slot4;
                var14 = var10.useMemo;
                var9 = new Array(3);
                var9[0] = var8;
                var9[1] = var35;
                var9[2] = var23;
                var8 = function() { // Environment: var32
                    _fun74572: for (var _fun74572_ip = 0;;) switch (_fun74572_ip) {
                        case 0:
                            var1 = _closure2_slot8;
                            var2 = var1.height;
                            var1 = _closure2_slot8;
                            var3 = var1.width;
                            var5 = _closure2_slot10;
                            var1 = _closure2_slot5;
                            var1 = var1.contentContainer;
                            var1 = var1.padding;
                            var4 = 2;
                            var1 = var4 * var1;
                            var1 = var5 - var1;
                            var0 = _closure2_slot5;
                            var0 = var0.imageWrap;
                            var0 = var0.padding;
                            var0 = var4 * var0;
                            var1 = var1 - var0;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun74572_ip = 84;
                                continue _fun74572
                            }
                        case 80:
                            if (!(var0 == var3)) {
                                _fun74572_ip = 96;
                                continue _fun74572
                            }
                        case 84:
                            var0 = {};
                            var0.width = var1;
                            var0.height = var1;
                            return var0;
                        case 96:
                            var0 = 0;
                            if (!(var0 !== var2)) {
                                _fun74572_ip = 149;
                                continue _fun74572
                            }
                        case 102:
                            if (!(var0 !== var3)) {
                                _fun74572_ip = 149;
                                continue _fun74572
                            }
                        case 106:
                            var0 = global;
                            var4 = var0.Math;
                            var0 = var4.max;
                            var0 = var0.bind(var4)(var3, var2);
                            var1 = var1 / var0;
                            var0 = {};
                            var3 = var3 * var1;
                            var0.width = var3;
                            var1 = var2 * var1;
                            var0.height = var1;
                            return var0;
                        case 149:
                            var0 = {
                                'width': 300,
                                'height': 300
                            };
                            return var0;
                    }
                };
                var36 = var14.bind(var10)(var8, var9);
                var9 = var10.useCallback;
                var8 = new Array(2);
                var8[0] = var13;
                var8[1] = var6;
                var6 = function() { // Environment: var32
                    _fun74573: for (var _fun74573_ip = 0;;) switch (_fun74573_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 12;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            var3 = _closure2_slot2;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun74573_ip = 61;
                                continue _fun74573
                            }
                        case 48:
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot6;
                            var1 = var2.bind(var0)(var1);
                        case 61:
                            return var0;
                    }
                };
                var14 = var9.bind(var10)(var6, var8);
                var9 = var10.useCallback;
                var8 = new Array(1);
                var8[0] = var12;
                var6 = function() { // Environment: var32
                    _fun74574: for (var _fun74574_ip = 0;;) switch (_fun74574_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 12;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            var3 = _closure2_slot0;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun74574_ip = 56;
                                continue _fun74574
                            }
                        case 48:
                            var1 = _closure2_slot0;
                            var1 = var1.bind(var0)();
                        case 56:
                            return var0;
                    }
                };
                var16 = var9.bind(var10)(var6, var8);
                var9 = var10.useCallback;
                var8 = new Array(2);
                var8[0] = var0;
                var8[1] = var35;
                var6 = function() { // Environment: var32
                    _fun74575: for (var _fun74575_ip = 0;;) switch (_fun74575_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 12;
                            var2 = var4[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var2);
                            var2 = var5.hideActionSheet;
                            var2 = var2.bind(var5)();
                            var5 = _closure2_slot8;
                            var5 = var5.uri;
                            var6 = _closure2_slot8;
                            var8 = var6.width;
                            var2 = _closure2_slot8;
                            var6 = var2.height;
                            var2 = 13;
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.launchCropper;
                            var2 = {};
                            var2.uri = var5;
                            var5 = true;
                            var2.freeStyleCropEnabled = var5;
                            var7 = 0;
                            var5 = undefined;
                            if (!(var7 !== var8)) {
                                _fun74575_ip = 109;
                                continue _fun74575
                            }
                        case 106:
                            var5 = var8;
                        case 109:
                            var2.width = var5;
                            var5 = undefined;
                            if (!(var7 !== var6)) {
                                _fun74575_ip = 122;
                                continue _fun74575
                            }
                        case 119:
                            var5 = var6;
                        case 122:
                            var2.height = var5;
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.then;
                            var2 = function(arg0) { // Environment: var1
                                _fun74576: for (var _fun74576_ip = 0;;) switch (_fun74576_ip) {
                                    case 0:
                                        var2 = _closure2_slot1;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun74576_ip = 61;
                                            continue _fun74576
                                        }
                                    case 13:
                                        var2 = _closure2_slot1;
                                        var3 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 14;
                                        var0 = var1[var0];
                                        var1 = undefined;
                                        var4 = var3.bind(var1)(var0);
                                        var3 = var4.cropResultToUploadItem;
                                        var0 = arg0;
                                        var0 = var3.bind(var4)(var0);
                                        var0 = var2.bind(var1)(var0);
                                    case 61:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.catch;
                            var1 = function(arg0) { // Environment: var1
                                _fun74577: for (var _fun74577_ip = 0;;) switch (_fun74577_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var1 = var3.code;
                                        var0 = 'E_PICKER_CANCELLED';
                                        if (!(var0 !== var1)) {
                                            _fun74577_ip = 101;
                                            continue _fun74577
                                        }
                                    case 18:
                                        var1 = _closure1_slot1;
                                        var7 = _closure1_slot2;
                                        var0 = 15;
                                        var0 = var7[var0];
                                        var6 = undefined;
                                        var2 = var1.bind(var6)(var0);
                                        var1 = var2.open;
                                        var0 = {};
                                        var5 = 'CROP_ERROR';
                                        var0.key = var5;
                                        var5 = _closure1_slot0;
                                        var4 = 16;
                                        var4 = var7[var4];
                                        var4 = var5.bind(var6)(var4);
                                        var4 = var4.CircleErrorIcon;
                                        var0.IconComponent = var4;
                                        var3 = var3.message;
                                        var0.content = var3;
                                        var0 = var1.bind(var2)(var0);
                                    case 101:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var26 = var9.bind(var10)(var6, var8);
                var9 = var10.useMemo;
                var8 = new Array(2);
                var8[0] = var19;
                var8[1] = var35;
                var6 = function() { // Environment: var32
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 17;
                    var3 = var5[var0];
                    var1 = undefined;
                    var4 = var2.bind(var1)(var3);
                    var3 = var4.getCaptionLabel;
                    var0 = var5[var0];
                    var5 = var2.bind(var1)(var0);
                    var2 = var5.getType;
                    var1 = _closure2_slot8;
                    var1 = var1.uri;
                    var2 = var2.bind(var5)(var1);
                    var1 = _closure2_slot7;
                    var0 = _closure2_slot8;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var34 = var9.bind(var10)(var6, var8);
                var20 = var22;
                if (!var22) {
                    _fun74569_ip = 486;
                    continue _fun74569
                }
            case 483:
                var20 = !var5;
            case 486:
                var24 = !var28;
                if (!var24) {
                    _fun74569_ip = 495;
                    continue _fun74569
                }
            case 492:
                var24 = !var1;
            case 495:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 18;
                var1 = var6[var1];
                var1 = var5.bind(var3)(var1);
                var21 = var1.bind(var3)(var4, var2);
                var1 = 19;
                var1 = var6[var1];
                var1 = var5.bind(var3)(var1);
                var29 = var1.bind(var3)(var4, var2);
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var4 = var1.bind(var2)(var3);
                var2 = _closure1_slot3;
                var1 = 2;
                var4 = var2.bind(var3)(var4, var1);
                var1 = 0;
                var1 = var4[var1];
                var2 = 1;
                var2 = var4[var2];
                _closure2_slot11 = var2;
                var10 = null;
                var2 = var10 != var1;
                var4 = undefined;
                if (!var2) {
                    _fun74569_ip = 656;
                    continue _fun74569
                }
            case 594:
                var8 = var1 + var7;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 6;
                var2 = var6[var1];
                var2 = var5.bind(var3)(var2);
                var2 = var2.spacing;
                var2 = var2.PX_32;
                var2 = var8 + var2;
                var1 = var6[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var1.spacing;
                var1 = var1.PX_16;
                var4 = var2 + var1;
            case 656:
                if (!var22) {
                    _fun74569_ip = 663;
                    continue _fun74569
                }
            case 659:
                var22 = var10 != var0;
            case 663:
                var2 = _closure1_slot8;
                var27 = _closure1_slot0;
                var30 = _closure1_slot2;
                var0 = 20;
                var0 = var30[var0];
                var0 = var27.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var25 = true;
                var0.scrollable = var25;
                var0.startHeight = var4;
                var4 = 21;
                var4 = var30[var4];
                var4 = var27.bind(var3)(var4);
                var5 = var4.BottomSheetScrollView;
                var4 = {};
                var6 = {};
                var9 = _closure1_slot1;
                var8 = 6;
                var8 = var30[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.spacing;
                var8 = var8.PX_16;
                var6.padding = var8;
                var6.paddingBottom = var7;
                var4.contentContainerStyle = var6;
                var8 = _closure1_slot9;
                var6 = 22;
                var6 = var30[var6];
                var6 = var27.bind(var3)(var6);
                var7 = var6.Stack;
                var6 = {};
                var9 = 16;
                var6.spacing = var9;
                var9 = function(arg0) { // Original name: onLayout, environment: var32
                    var2 = _closure2_slot11;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var1 = var0.height;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var6.onLayout = var9;
                var9 = 23;
                var9 = var30[var9];
                var9 = var27.bind(var3)(var9);
                var15 = var9.Text;
                var9 = {};
                var17 = 'text-md/semibold';
                var9.variant = var17;
                var17 = var35.filename;
                var9.children = var17;
                var15 = var2.bind(var3)(var15, var9);
                var9 = new Array(4);
                var9[0] = var15;
                var17 = _closure1_slot6;
                var15 = {};
                var18 = var23.imageWrap;
                var15.style = var18;
                var18 = {};
                var33 = var23.imageContainer;
                var23 = new Array(2);
                var23[0] = var33;
                var33 = {};
                var37 = var36.width;
                var33.width = var37;
                var37 = var36.height;
                var33.height = var37;
                var23[1] = var33;
                var18.style = var23;
                var23 = 24;
                var23 = var30[var23];
                var27 = var27.bind(var3)(var23);
                var23 = var27.isIOS;
                var23 = var23.bind(var27)();
                if (!var23) {
                    _fun74569_ip = 976;
                    continue _fun74569
                }
            case 948:
                if (!var19) {
                    _fun74569_ip = 976;
                    continue _fun74569
                }
            case 951:
                var27 = var35.uri;
                var23 = var27.startsWith;
                var19 = 'file://';
                var19 = var23.bind(var27)(var19);
                if (var19) {
                    _fun74569_ip = 1022;
                    continue _fun74569
                }
            case 976:
                var27 = _closure1_slot8;
                var23 = _closure1_slot5;
                var19 = {};
                var30 = {};
                var33 = var36.width;
                var30.width = var33;
                var33 = var36.height;
                var30.height = var33;
                var19.style = var30;
                var19.source = var35;
                var23 = var27.bind(var3)(var23, var19);
                _fun74569_ip = 1115;
                continue _fun74569;
            case 1022:
                var30 = _closure1_slot8;
                var27 = _closure1_slot0;
                var33 = _closure1_slot2;
                var19 = 25;
                var19 = var33[var19];
                var19 = var27.bind(var3)(var19);
                var27 = var19.VideoComponent;
                var19 = {
                    'style': null,
                    'source': null,
                    'muted': true,
                    'paused': true,
                    'preventsDisplaySleepDuringVideoPlayback': false
                };
                var33 = {};
                var37 = var36.width;
                var33.width = var37;
                var36 = var36.height;
                var33.height = var36;
                var19.style = var33;
                var33 = {};
                var35 = var35.uri;
                var33.uri = var35;
                var19.source = var33;
                var23 = var30.bind(var3)(var27, var19);
            case 1115:
                var19 = new Array(2);
                var19[0] = var23;
                var23 = var10 != var34;
                if (!var23) {
                    _fun74569_ip = 1138;
                    continue _fun74569
                }
            case 1130:
                var27 = '';
                var23 = var27 !== var34;
            case 1138:
                if (!var23) {
                    _fun74569_ip = 1183;
                    continue _fun74569
                }
            case 1141:
                var33 = _closure1_slot8;
                var30 = _closure1_slot0;
                var35 = _closure1_slot2;
                var27 = 26;
                var27 = var35[var27];
                var27 = var30.bind(var3)(var27);
                var30 = var27.Caption;
                var27 = {};
                var27.label = var34;
                var23 = var33.bind(var3)(var30, var27);
            case 1183:
                var19[1] = var23;
                var18.children = var19;
                var18 = var8.bind(var3)(var17, var18);
                var15.children = var18;
                var15 = var2.bind(var3)(var17, var15);
                var9[1] = var15;
                if (var20) {
                    _fun74569_ip = 1228;
                    continue _fun74569
                }
            case 1214:
                if (var24) {
                    _fun74569_ip = 1228;
                    continue _fun74569
                }
            case 1217:
                if (var21) {
                    _fun74569_ip = 1228;
                    continue _fun74569
                }
            case 1220:
                var15 = null;
                if (!var22) {
                    _fun74569_ip = 1846;
                    continue _fun74569
                }
            case 1228:
                var19 = _closure1_slot9;
                var18 = _closure1_slot0;
                var23 = _closure1_slot2;
                var17 = 27;
                var17 = var23[var17];
                var17 = var18.bind(var3)(var17);
                var18 = var17.TableRowGroup;
                var17 = {};
                var23 = null;
                if (!var20) {
                    _fun74569_ip = 1403;
                    continue _fun74569
                }
            case 1268:
                var30 = _closure1_slot8;
                var36 = _closure1_slot0;
                var37 = _closure1_slot2;
                var20 = 28;
                var20 = var37[var20];
                var20 = var36.bind(var3)(var20);
                var27 = var20.TableRow;
                var20 = {};
                var33 = 29;
                var33 = var37[var33];
                var33 = var36.bind(var3)(var33);
                var34 = var33.ImageFileIcon;
                var33 = {};
                var33 = var30.bind(var3)(var34, var33);
                var20.icon = var33;
                var33 = function() { // Original name: onPress, environment: var32
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 30;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.open;
                    var0 = {};
                    var4 = _closure2_slot8;
                    var0.source = var4;
                    var4 = _closure2_slot3;
                    var0.channelId = var4;
                    var3 = _closure2_slot6;
                    var0.id = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var20.onPress = var33;
                var33 = 31;
                var34 = var37[var33];
                var34 = var36.bind(var3)(var34);
                var35 = var34.intl;
                var34 = var35.string;
                var33 = var37[var33];
                var33 = var36.bind(var3)(var33);
                var33 = var33.t;
                var33 = var33["5S2AK+"];
                var33 = var34.bind(var35)(var33);
                var20.label = var33;
                var20.arrow = var25;
                var23 = var30.bind(var3)(var27, var20);
            case 1403:
                var20 = new Array(4);
                var20[0] = var23;
                var23 = null;
                if (!var24) {
                    _fun74569_ip = 1554;
                    continue _fun74569
                }
            case 1419:
                var30 = _closure1_slot8;
                var35 = _closure1_slot0;
                var36 = _closure1_slot2;
                var24 = 32;
                var24 = var36[var24];
                var24 = var35.bind(var3)(var24);
                var27 = var24.TableCheckboxRow;
                var24 = {};
                var33 = 33;
                var33 = var36[var33];
                var33 = var35.bind(var3)(var33);
                var34 = var33.SpoilerIcon;
                var33 = {};
                var33 = var30.bind(var3)(var34, var33);
                var24.icon = var33;
                var32 = function() { // Original name: onPress, environment: var32
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 12;
                    var2 = var4[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var2);
                    var2 = var5.hideActionSheet;
                    var2 = var2.bind(var5)();
                    var2 = 34;
                    var2 = var4[var2];
                    var6 = var3.bind(var0)(var2);
                    var5 = var6.update;
                    var11 = _closure2_slot3;
                    var10 = _closure2_slot6;
                    var1 = _closure1_slot7;
                    var9 = var1.ChannelMessage;
                    var1 = {};
                    var7 = _closure2_slot9;
                    var7 = !var7;
                    var1.spoiler = var7;
                    var12 = var6;
                    var8 = var1;
                    var1 = var12[var5](var11, var10, var9, var8, var7);
                    return var0;
                };
                var24.onPress = var32;
                var32 = 31;
                var33 = var36[var32];
                var33 = var35.bind(var3)(var33);
                var34 = var33.intl;
                var33 = var34.string;
                var32 = var36[var32];
                var32 = var35.bind(var3)(var32);
                var32 = var32.t;
                var32 = var32["gsI+xC"];
                var32 = var33.bind(var34)(var32);
                var24.label = var32;
                var24.checked = var31;
                var23 = var30.bind(var3)(var27, var24);
            case 1554:
                var20[1] = var23;
                if (!var21) {
                    _fun74569_ip = 1692;
                    continue _fun74569
                }
            case 1564:
                var27 = _closure1_slot8;
                var33 = _closure1_slot0;
                var34 = _closure1_slot2;
                var23 = 32;
                var23 = var34[var23];
                var23 = var33.bind(var3)(var23);
                var24 = var23.TableCheckboxRow;
                var23 = {};
                var30 = 35;
                var30 = var34[var30];
                var30 = var33.bind(var3)(var30);
                var31 = var30.ImageIcon;
                var30 = {};
                var30 = var27.bind(var3)(var31, var30);
                var23.icon = var30;
                var30 = 31;
                var31 = var34[var30];
                var31 = var33.bind(var3)(var31);
                var32 = var31.intl;
                var31 = var32.string;
                var30 = var34[var30];
                var30 = var33.bind(var3)(var30);
                var30 = var30.t;
                var30 = var30.ews2pj;
                var30 = var31.bind(var32)(var30);
                var23.label = var30;
                var23.onPress = var29;
                var23.checked = var28;
                var21 = var27.bind(var3)(var24, var23);
            case 1692:
                var20[2] = var21;
                var21 = null;
                if (!var22) {
                    _fun74569_ip = 1832;
                    continue _fun74569
                }
            case 1704:
                var24 = _closure1_slot8;
                var29 = _closure1_slot0;
                var30 = _closure1_slot2;
                var22 = 28;
                var22 = var30[var22];
                var22 = var29.bind(var3)(var22);
                var23 = var22.TableRow;
                var22 = {};
                var27 = 36;
                var27 = var30[var27];
                var27 = var29.bind(var3)(var27);
                var28 = var27.PencilSparkleIcon;
                var27 = {};
                var27 = var24.bind(var3)(var28, var27);
                var22.icon = var27;
                var22.onPress = var26;
                var26 = 31;
                var27 = var30[var26];
                var27 = var29.bind(var3)(var27);
                var28 = var27.intl;
                var27 = var28.string;
                var26 = var30[var26];
                var26 = var29.bind(var3)(var26);
                var26 = var26.t;
                var26 = var26.b0y3DL;
                var26 = var27.bind(var28)(var26);
                var22.label = var26;
                var22.arrow = var25;
                var21 = var24.bind(var3)(var23, var22);
            case 1832:
                var20[3] = var21;
                var17.children = var20;
                var15 = var19.bind(var3)(var18, var17);
            case 1846:
                var9[2] = var15;
                if (!(var10 == var13)) {
                    _fun74569_ip = 2011;
                    continue _fun74569
                }
            case 1857:
                var12 = var10 != var12;
                var10 = null;
                if (!var12) {
                    _fun74569_ip = 2006;
                    continue _fun74569
                }
            case 1869:
                var15 = _closure1_slot8;
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var12 = 37;
                var12 = var21[var12];
                var12 = var20.bind(var3)(var12);
                var13 = var12.Button;
                var12 = {};
                var17 = 29;
                var17 = var21[var17];
                var17 = var20.bind(var3)(var17);
                var18 = var17.ImageFileIcon;
                var17 = {
                    'size': 'sm',
                    'color': 'control-primary-text-default'
                };
                var17 = var15.bind(var3)(var18, var17);
                var12.icon = var17;
                var17 = 31;
                var18 = var21[var17];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var21[var17];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.s7oPyG;
                var17 = var18.bind(var19)(var17);
                var12.text = var17;
                var12.onPress = var16;
                var10 = var15.bind(var3)(var13, var12);
            case 2006:
                _fun74569_ip = 2158;
                continue _fun74569;
            case 2011:
                var13 = _closure1_slot8;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var11 = 37;
                var11 = var19[var11];
                var11 = var18.bind(var3)(var11);
                var12 = var11.Button;
                var11 = {};
                var15 = 38;
                var15 = var19[var15];
                var15 = var18.bind(var3)(var15);
                var16 = var15.TrashIcon;
                var15 = {
                    'size': 'sm',
                    'color': 'control-primary-text-default'
                };
                var15 = var13.bind(var3)(var16, var15);
                var11.icon = var15;
                var15 = 31;
                var16 = var19[var15];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var19[var15];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15["40jBO/"];
                var15 = var16.bind(var17)(var15);
                var11.text = var15;
                var11.onPress = var14;
                var14 = 'destructive';
                var11.variant = var14;
                var10 = var13.bind(var3)(var12, var11);
            case 2158:
                var9[3] = var10;
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3960, 33, 1297, 671, 44, 3965, 1464, 1568, 4062, 3237, 4064, 9364, 3107, 5353, 3972, 9553, 9554, 4894, 4896, 4039, 3900, 478, 8800, 6928, 5325, 4861, 9555, 9557, 1234, 8732, 9561, 7569, 4814, 9563, 4043, 3228, 2]);