// modules/media_keyboard/native/components/MediaKeyboardItem.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var9;
    var1 = function arg0() {
        _fun76033: for (var _fun76033_ip = 0;;) switch (_fun76033_ip) {
            case 0:
                var1 = arg0;
                var0 = 'type';
                var0 = var0 in var1;
                if (!var0) {
                    _fun76033_ip = 39;
                    continue _fun76033
                }
            case 14:
                var3 = ['allphotos', 'attach', 'camera'];
                var2 = var3.includes;
                var1 = var1.type;
                var0 = var2.bind(var3)(var1);
            case 39:
                return var0;
        }
    };
    var _closure1_slot20 = var1;
    var0 = function arg0, arg1, arg2() {
        var6 = arg0;
        var5 = arg1;
        var4 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var _closure2_slot2 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun76035: for (var _fun76035_ip = 0;;) switch (_fun76035_ip) {
                case 0:
                    var0 = _closure2_slot2;
                    var2 = 0;
                    var5 = 0;
                    if (!(var2 !== var0)) {
                        _fun76035_ip = 53;
                        continue _fun76035
                    }
                case 15:
                    var0 = global;
                    var4 = var0.Math;
                    var1 = var4.floor;
                    var6 = _closure2_slot2;
                    var0 = 1;
                    var6 = var6 - var0;
                    var0 = _closure2_slot1;
                    var0 = var6 / var0;
                    var5 = var1.bind(var4)(var0);
                case 53:
                    var0 = global;
                    var4 = var0.Math;
                    var1 = var4.floor;
                    var7 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var0 = var7 / var0;
                    var6 = var1.bind(var4)(var0);
                    var0 = {};
                    var1 = 4;
                    var4 = var1;
                    if (!(var2 === var7)) {
                        _fun76035_ip = 99;
                        continue _fun76035
                    }
                case 96:
                    var4 = 16;
                case 99:
                    var0.borderTopLeftRadius = var4;
                    var7 = _closure2_slot2;
                    var4 = _closure2_slot1;
                    if (!(!(var7 >= var4))) {
                        _fun76035_ip = 137;
                        continue _fun76035
                    }
                case 116:
                    var7 = _closure2_slot0;
                    var8 = _closure2_slot2;
                    var4 = 1;
                    var4 = var8 - var4;
                    var7 = var7 === var4;
                    _fun76035_ip = 156;
                    continue _fun76035;
                case 137:
                    var8 = _closure2_slot0;
                    var9 = _closure2_slot1;
                    var4 = 1;
                    var4 = var9 - var4;
                    var7 = var8 === var4;
                case 156:
                    var4 = var1;
                    if (!var7) {
                        _fun76035_ip = 165;
                        continue _fun76035
                    }
                case 162:
                    var4 = 16;
                case 165:
                    var0.borderTopRightRadius = var4;
                    var4 = var1;
                    if (!(var6 === var5)) {
                        _fun76035_ip = 199;
                        continue _fun76035
                    }
                case 177:
                    var7 = _closure2_slot0;
                    var6 = _closure2_slot1;
                    var6 = var7 % var6;
                    var4 = var1;
                    if (!(var6 == var2)) {
                        _fun76035_ip = 199;
                        continue _fun76035
                    }
                case 196:
                    var4 = 16;
                case 199:
                    var0.borderBottomLeftRadius = var4;
                    var6 = _closure2_slot0;
                    var4 = _closure2_slot2;
                    var7 = 1;
                    var4 = var4 - var7;
                    if (!(var6 !== var4)) {
                        _fun76035_ip = 273;
                        continue _fun76035
                    }
                case 223:
                    var6 = _closure2_slot2;
                    var4 = _closure2_slot1;
                    var6 = var6 % var4;
                    var4 = var1;
                    if (!(var6 != var2)) {
                        _fun76035_ip = 276;
                        continue _fun76035
                    }
                case 242:
                    var6 = _closure2_slot0;
                    var5 = var5 - var7;
                    var8 = _closure2_slot1;
                    var5 = var5 * var8;
                    var5 = var5 + var8;
                    var5 = var5 - var7;
                    var4 = var1;
                    if (!(var6 === var5)) {
                        _fun76035_ip = 276;
                        continue _fun76035
                    }
                case 273:
                    var4 = 16;
                case 276:
                    var0.borderBottomRightRadius = var4;
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var3 = var4 % var3;
                    if (!(var3 == var2)) {
                        _fun76035_ip = 299;
                        continue _fun76035
                    }
                case 297:
                    var1 = 0;
                case 299:
                    var0.marginLeft = var1;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 0;
    var5 = var9[var0];
    var4 = arg3;
    var0 = undefined;
    var10 = var4.bind(var0)(var5);
    var _closure1_slot3 = var10;
    var4 = 1;
    var4 = var9[var4];
    var4 = var8.bind(var0)(var4);
    var5 = var4.View;
    var _closure1_slot4 = var5;
    var7 = var4.Pressable;
    var _closure1_slot5 = var7;
    var17 = var4.StyleSheet;
    var4 = var4.useWindowDimensions;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var9[var4];
    var4 = var13.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var9[var4];
    var4 = var8.bind(var0)(var4);
    var5 = var4.ALAssetsType;
    var _closure1_slot8 = var5;
    var4 = var4.DeviceMediaType;
    var _closure1_slot9 = var4;
    var4 = 4;
    var5 = var9[var4];
    var5 = var8.bind(var0)(var5);
    var6 = var5.jsx;
    var _closure1_slot10 = var6;
    var5 = var5.jsxs;
    var _closure1_slot11 = var5;
    var5 = 5;
    var5 = var9[var5];
    var6 = var13.bind(var0)(var5);
    var5 = var6.createAnimatedComponent;
    var5 = var5.bind(var6)(var7);
    var _closure1_slot12 = var5;
    var6 = 6;
    var5 = var9[var6];
    var14 = var8.bind(var0)(var5);
    var11 = var14.createStyles;
    var7 = {};
    var5 = {
        'flexDirection': 'row',
        'paddingHorizontal': 12,
        'alignItems': 'center'
    };
    var7.container = var5;
    var5 = {};
    var12 = 7;
    var15 = var9[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOWER;
    var5.backgroundColor = var15;
    var7.image = var5;
    var5 = {
        'borderRadius': null,
        'overflow': 'hidden',
        'position': 'relative'
    };
    var15 = var9[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.xs;
    var5.borderRadius = var15;
    var7.imageContainer = var5;
    var5 = {
        'backgroundColor': null,
        'borderRadius': null,
        'paddingHorizontal': 8,
        'paddingVertical': 2,
        'position': 'absolute',
        'right': 6,
        'bottom': 6
    };
    var16 = 8;
    var15 = var9[var16];
    var20 = var8.bind(var0)(var15);
    var19 = var20.hexWithOpacity;
    var15 = var9[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.unsafe_rawColors;
    var18 = var15.PRIMARY_700;
    var15 = 0.5;
    var15 = var19.bind(var20)(var18, var15);
    var5.backgroundColor = var15;
    var15 = var9[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.xs;
    var5.borderRadius = var15;
    var7.labelContainer = var5;
    var5 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'backgroundColor': null,
        'borderRadius': null,
        'paddingHorizontal': 5,
        'paddingVertical': 4,
        'position': 'absolute',
        'left': 8,
        'bottom': 8
    };
    var15 = var9[var16];
    var20 = var8.bind(var0)(var15);
    var19 = var20.hexWithOpacity;
    var15 = var9[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.unsafe_rawColors;
    var18 = var15.PRIMARY_700;
    var15 = 0.6;
    var15 = var19.bind(var20)(var18, var15);
    var5.backgroundColor = var15;
    var15 = var9[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.xs;
    var5.borderRadius = var15;
    var7.newlabelContainer = var5;
    var5 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var7.errorContainer = var5;
    var5 = {};
    var15 = 10;
    var5.right = var15;
    var7.mediaKeyboardItemLabelContainer = var5;
    var5 = {
        'width': 12,
        'height': 12,
        'tintColor': null,
        'marginEnd': 4
    };
    var15 = var9[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.WHITE;
    var5.tintColor = var15;
    var7.icon = var5;
    var5 = {
        'width': 14,
        'height': 14
    };
    var15 = var9[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BRAND;
    var5.color = var15;
    var7.checkIcon = var5;
    var15 = {
        'width': 24,
        'height': 24,
        'position': 'absolute',
        'justifyContent': 'center',
        'alignItems': 'center',
        'right': 6,
        'top': 6,
        'borderRadius': null,
        'backgroundColor': null,
        'borderWidth': 1
    };
    var5 = 24;
    var18 = var9[var12];
    var18 = var13.bind(var0)(var18);
    var18 = var18.radii;
    var18 = var18.round;
    var15.borderRadius = var18;
    var18 = var9[var12];
    var18 = var13.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.WHITE;
    var15.backgroundColor = var18;
    var18 = var9[var16];
    var21 = var8.bind(var0)(var18);
    var20 = var21.hexWithOpacity;
    var18 = var9[var12];
    var18 = var13.bind(var0)(var18);
    var18 = var18.unsafe_rawColors;
    var19 = var18.BLACK;
    var18 = 0.1;
    var18 = var20.bind(var21)(var19, var18);
    var15.borderColor = var18;
    var7.checkIconContainer = var15;
    var15 = {};
    var23 = var17.absoluteFillObject;
    var24 = var15;
    var17 = copyDataProperties(var24, var23);
    var17 = var9[var12];
    var17 = var13.bind(var0)(var17);
    var17 = var17.radii;
    var18 = var17.xs;
    var17 = 'borderRadius';
    var15[var17] = var18;
    var16 = var9[var16];
    var19 = var8.bind(var0)(var16);
    var18 = var19.hexWithOpacity;
    var16 = var9[var12];
    var16 = var13.bind(var0)(var16);
    var16 = var16.unsafe_rawColors;
    var17 = var16.BLACK;
    var16 = 0.3;
    var17 = var18.bind(var19)(var17, var16);
    var16 = 'backgroundColor';
    var15[var16] = var17;
    var7.selectedOverlay = var15;
    var15 = {
        'flexDirection': 'column',
        'justifyContent': 'center',
        'alignItems': 'center',
        'gap': 8
    };
    var7.specialButton = var15;
    var15 = {};
    var16 = 0.4;
    var15.opacity = var16;
    var7.disabled = var15;
    var15 = {};
    var16 = 0.2;
    var15.opacity = var16;
    var7.imageDisabled = var15;
    var7 = var11.bind(var14)(var7);
    var _closure1_slot13 = var7;
    var7 = function arg0() {
        var0 = arg0;
        var8 = var0.label;
        var6 = var0.style;
        var9 = var0.textStyle;
        var0 = _closure1_slot13;
        var3 = undefined;
        var11 = var0.bind(var3)();
        var2 = _closure1_slot11;
        var1 = _closure1_slot4;
        var0 = {};
        var7 = var11.newlabelContainer;
        var4 = new Array(2);
        var4[0] = var7;
        var4[1] = var6;
        var0.style = var4;
        var7 = _closure1_slot10;
        var13 = _closure1_slot1;
        var10 = _closure1_slot2;
        var4 = 9;
        var4 = var10[var4];
        var6 = var13.bind(var3)(var4);
        var4 = {};
        var12 = 10;
        var12 = var10[var12];
        var12 = var13.bind(var3)(var12);
        var4.source = var12;
        var11 = var11.icon;
        var4.style = var11;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var6 = _closure1_slot0;
        var5 = 11;
        var5 = var10[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'style': null,
            'color': 'always-white',
            'variant': 'text-xs/bold'
        };
        var5.style = var9;
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot14 = var7;
    var7 = function arg0() {
        _fun76037: for (var _fun76037_ip = 0;;) switch (_fun76037_ip) {
            case 0:
                var3 = arg0;
                var13 = var3.draftType;
                var _closure2_slot0 = var13;
                var22 = var3.item;
                var _closure2_slot1 = var22;
                var10 = var3.index;
                var2 = var3.totalNumItems;
                var1 = var3.numItemsPerRow;
                var14 = var3.size;
                var23 = var3.channelId;
                var _closure2_slot2 = var23;
                var21 = var3.onPressItem;
                var _closure2_slot3 = var21;
                var17 = var3.onLongPressItem;
                var _closure2_slot4 = var17;
                var6 = var3.disabled;
                var0 = var3.includedUploadIds;
                var _closure2_slot5 = var0;
                var19 = var3.uploadLimit;
                var18 = var3.disableWhenReachedLimit;
                var3 = undefined;
                var _closure2_slot7 = var3;
                var5 = _closure1_slot13;
                var12 = var5.bind(var3)();
                var5 = var22.node;
                var15 = var5.image;
                var _closure2_slot6 = var15;
                var20 = var5.type;
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 12;
                var5 = var11[var5];
                var5 = var8.bind(var3)(var5);
                var16 = var5.MediaKeyboardSkipFullImageLoadingExperiment;
                var7 = var16.useConfig;
                var5 = {};
                var24 = 'MediaKeyboardImage';
                var5.location = var24;
                var5 = var7.bind(var16)(var5);
                var5 = var5.enabled;
                var7 = 13;
                var7 = var11[var7];
                var8 = var8.bind(var3)(var7);
                var7 = var8.isIOS;
                var7 = var7.bind(var8)();
                if (!var7) {
                    _fun76037_ip = 247;
                    continue _fun76037
                }
            case 219:
                if (!var5) {
                    _fun76037_ip = 247;
                    continue _fun76037
                }
            case 222:
                var8 = var15.uri;
                var7 = var8.startsWith;
                var5 = 'ph://';
                var5 = var7.bind(var8)(var5);
                if (var5) {
                    _fun76037_ip = 254;
                    continue _fun76037
                }
            case 247:
                var16 = var15.uri;
                _fun76037_ip = 288;
                continue _fun76037;
            case 254:
                var11 = var15.uri;
                var5 = global;
                var5 = var5.HermesInternal;
                var8 = var5.concat;
                var7 = '';
                var5 = '?skipFullImageLoading=true';
                var16 = var8.bind(var7)(var11, var5);
            case 288:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 14;
                var5 = var8[var5];
                var11 = var7.bind(var3)(var5);
                var8 = var11.useStateFromStoresObject;
                var5 = _closure1_slot7;
                var7 = new Array(1);
                var7[0] = var5;
                var5 = new Array(4);
                var5[0] = var23;
                var5[1] = var13;
                var5[2] = var15;
                var5[3] = var0;
                var0 = function() { // Environment: var4
                    _fun76038: for (var _fun76038_ip = 0;;) switch (_fun76038_ip) {
                        case 0:
                            var0 = {};
                            var7 = _closure1_slot7;
                            var6 = var7.findUpload;
                            var5 = _closure2_slot2;
                            var4 = _closure2_slot0;
                            var1 = function(arg0) { // Environment: var1
                                _fun76039: for (var _fun76039_ip = 0;;) switch (_fun76039_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var3 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 15;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var4 = var3.bind(var0)(var1);
                                        var1 = var4.doesImageMatchUpload;
                                        var0 = _closure2_slot6;
                                        var0 = var1.bind(var4)(var0, var2);
                                        if (!var0) {
                                            _fun76039_ip = 85;
                                            continue _fun76039
                                        }
                                    case 50:
                                        var4 = _closure2_slot5;
                                        var1 = null;
                                        var1 = var1 == var4;
                                        if (var1) {
                                            _fun76039_ip = 82;
                                            continue _fun76039
                                        }
                                    case 63:
                                        var4 = _closure2_slot5;
                                        var3 = var4.includes;
                                        var2 = var2.id;
                                        var1 = var3.bind(var4)(var2);
                                    case 82:
                                        var0 = var1;
                                    case 85:
                                        return var0;
                                }
                            };
                            var1 = var6.bind(var7)(var5, var4, var1);
                            var0.upload = var1;
                            var1 = _closure2_slot5;
                            var4 = null;
                            var5 = var4 == var1;
                            var1 = undefined;
                            if (var5) {
                                _fun76038_ip = 71;
                                continue _fun76038
                            }
                        case 62:
                            var5 = _closure2_slot5;
                            var1 = var5.length;
                        case 71:
                            if (!(var4 == var1)) {
                                _fun76038_ip = 99;
                                continue _fun76038
                            }
                        case 75:
                            var5 = _closure1_slot7;
                            var4 = var5.getUploadCount;
                            var3 = _closure2_slot2;
                            var2 = _closure2_slot0;
                            var1 = var4.bind(var5)(var3, var2);
                        case 99:
                            var0.uploadCount = var1;
                            return var0;
                    }
                };
                var0 = var8.bind(var11)(var7, var0, var5);
                var7 = var0.upload;
                var0 = var0.uploadCount;
                var5 = null;
                var7 = var5 != var7;
                _closure2_slot7 = var7;
                var13 = _closure1_slot3;
                var11 = var13.useMemo;
                var8 = new Array(5);
                var8[0] = var23;
                var8[1] = var22;
                var8[2] = var7;
                var8[3] = var21;
                var8[4] = var17;
                var4 = function() { // Environment: var4
                    var0 = {};
                    var2 = function() {
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 16;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.hideNativeMenu;
                        var1 = var1.bind(var2)();
                        var2 = _closure2_slot3;
                        var1 = {};
                        var4 = _closure2_slot2;
                        var1.channelId = var4;
                        var4 = _closure2_slot1;
                        var1.item = var4;
                        var3 = _closure2_slot7;
                        var1.isIncluded = var3;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0.onPress = var2;
                    var1 = function() {
                        _fun76042: for (var _fun76042_ip = 0;;) switch (_fun76042_ip) {
                            case 0:
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 16;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.hideNativeMenu;
                                var1 = var1.bind(var2)();
                                var2 = _closure2_slot4;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun76042_ip = 84;
                                    continue _fun76042
                                }
                            case 48:
                                var2 = _closure2_slot4;
                                var1 = {};
                                var4 = _closure2_slot2;
                                var1.channelId = var4;
                                var4 = _closure2_slot1;
                                var1.item = var4;
                                var3 = _closure2_slot7;
                                var1.isIncluded = var3;
                                var1 = var2.bind(var0)(var1);
                            case 84:
                                return var0;
                        }
                    };
                    var0.onLongPress = var1;
                    return var0;
                };
                var4 = var11.bind(var13)(var4, var8);
                var11 = var4.onPress;
                var4 = var4.onLongPress;
                var8 = _closure1_slot8;
                var8 = var8.PHOTO;
                if (!(var8 !== var20)) {
                    _fun76037_ip = 554;
                    continue _fun76037
                }
            case 453:
                var8 = _closure1_slot9;
                var8 = var8.IMAGE;
                if (!(var8 !== var20)) {
                    _fun76037_ip = 554;
                    continue _fun76037
                }
            case 467:
                var8 = _closure1_slot8;
                var8 = var8.VIDEO;
                if (!(var8 !== var20)) {
                    _fun76037_ip = 497;
                    continue _fun76037
                }
            case 481:
                var8 = _closure1_slot9;
                var8 = var8.VIDEO;
                var17 = undefined;
                if (!(var8 === var20)) {
                    _fun76037_ip = 611;
                    continue _fun76037
                }
            case 497:
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var8 = 17;
                var13 = var23[var8];
                var13 = var22.bind(var3)(var13);
                var21 = var13.intl;
                var13 = var21.string;
                var8 = var23[var8];
                var8 = var22.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.FlNoSV;
                var17 = var13.bind(var21)(var8);
                _fun76037_ip = 611;
                continue _fun76037;
            case 554:
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var8 = 17;
                var13 = var23[var8];
                var13 = var22.bind(var3)(var13);
                var21 = var13.intl;
                var13 = var21.string;
                var8 = var23[var8];
                var8 = var22.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.SkfkEJ;
                var17 = var13.bind(var21)(var8);
            case 611:
                var8 = _closure1_slot8;
                var8 = var8.VIDEO;
                if (!(var8 !== var20)) {
                    _fun76037_ip = 784;
                    continue _fun76037
                }
            case 628:
                var8 = _closure1_slot9;
                var8 = var8.VIDEO;
                if (!(var8 !== var20)) {
                    _fun76037_ip = 784;
                    continue _fun76037
                }
            case 645:
                var8 = _closure1_slot8;
                var8 = var8.PHOTO;
                if (!(var8 !== var20)) {
                    _fun76037_ip = 678;
                    continue _fun76037
                }
            case 659:
                var8 = _closure1_slot9;
                var13 = var8.IMAGE;
                var8 = null;
                if (!(var13 === var20)) {
                    _fun76037_ip = 841;
                    continue _fun76037
                }
            case 678:
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var13 = 19;
                var13 = var21[var13];
                var21 = var20.bind(var3)(var13);
                var20 = var21.getType;
                var13 = var15.uri;
                var20 = var20.bind(var21)(var13);
                var13 = 'image/gif';
                var8 = null;
                if (!(var13 === var20)) {
                    _fun76037_ip = 841;
                    continue _fun76037
                }
            case 726:
                var21 = _closure1_slot10;
                var20 = _closure1_slot0;
                var22 = _closure1_slot2;
                var13 = 20;
                var13 = var22[var13];
                var13 = var20.bind(var3)(var13);
                var20 = var13.Caption;
                var13 = {};
                var22 = var12.mediaKeyboardItemLabelContainer;
                var13.style = var22;
                var22 = 'GIF';
                var13.label = var22;
                var8 = var21.bind(var3)(var20, var13);
                _fun76037_ip = 841;
                continue _fun76037;
            case 784:
                var21 = _closure1_slot10;
                var20 = _closure1_slot14;
                var13 = {};
                var23 = _closure1_slot0;
                var24 = _closure1_slot2;
                var22 = 18;
                var22 = var24[var22];
                var24 = var23.bind(var3)(var22);
                var23 = var24.getTimeFormat;
                var22 = var15.playableDuration;
                var22 = var23.bind(var24)(var22);
                var13.label = var22;
                var8 = var21.bind(var3)(var20, var13);
            case 841:
                var13 = !var7;
                if (var7) {
                    _fun76037_ip = 866;
                    continue _fun76037
                }
            case 847:
                var0 = var0 >= var19;
                if (!var0) {
                    _fun76037_ip = 857;
                    continue _fun76037
                }
            case 854:
                var0 = var18;
            case 857:
                if (var0) {
                    _fun76037_ip = 863;
                    continue _fun76037
                }
            case 860:
                var0 = var6;
            case 863:
                var13 = var0;
            case 866:
                var19 = _closure1_slot10;
                var22 = _closure1_slot1;
                var23 = _closure1_slot2;
                var0 = 5;
                var0 = var23[var0];
                var0 = var22.bind(var3)(var0);
                var6 = var0.View;
                var0 = {};
                var18 = var12.checkIconContainer;
                var0.style = var18;
                var18 = 9;
                var18 = var23[var18];
                var21 = var22.bind(var3)(var18);
                var20 = {};
                var18 = 21;
                var18 = var23[var18];
                var18 = var22.bind(var3)(var18);
                var20.source = var18;
                var18 = false;
                var20.disableColor = var18;
                var22 = var12.checkIcon;
                var22 = var22.color;
                var20.color = var22;
                var22 = var12.checkIcon;
                var20.style = var22;
                var20 = var19.bind(var3)(var21, var20);
                var0.children = var20;
                var6 = var19.bind(var3)(var6, var0);
                var0 = _closure1_slot21;
                var10 = var0.bind(var3)(var10, var1, var2);
                var2 = _closure1_slot11;
                var1 = _closure1_slot5;
                var0 = {};
                var19 = 'button';
                var0.accessibilityRole = var19;
                var0.accessibilityLabel = var17;
                var17 = {};
                var17.selected = var7;
                var17.disabled = var18;
                var0.accessibilityState = var17;
                var0.onPress = var11;
                var0.onLongPress = var4;
                var0.disabled = var13;
                var11 = var12.imageContainer;
                var4 = new Array(3);
                var4[0] = var11;
                var11 = undefined;
                if (!var13) {
                    _fun76037_ip = 1072;
                    continue _fun76037
                }
            case 1066:
                var11 = var12.imageDisabled;
            case 1072:
                var4[1] = var11;
                var4[2] = var10;
                var0.style = var4;
                var11 = _closure1_slot10;
                var10 = _closure1_slot1;
                var13 = _closure1_slot2;
                var4 = 22;
                var4 = var13[var4];
                var10 = var10.bind(var3)(var4);
                var4 = {
                    'resizeMode': 'cover',
                    'resizeMethod': 'resize'
                };
                var17 = var12.image;
                var13 = new Array(2);
                var13[0] = var17;
                var17 = {};
                var17.height = var14;
                var17.width = var14;
                var13[1] = var17;
                var4.style = var13;
                var13 = {};
                var13.uri = var16;
                var13.width = var14;
                var13.height = var14;
                var16 = 'force-cache';
                var13.cache = var16;
                var4.source = var13;
                var13 = {};
                var15 = var15.uri;
                var13.uri = var15;
                var13.width = var14;
                var13.height = var14;
                var4.localImageSource = var13;
                var10 = var11.bind(var3)(var10, var4);
                var4 = new Array(4);
                var4[0] = var10;
                var4[1] = var8;
                var8 = null;
                if (!var7) {
                    _fun76037_ip = 1278;
                    continue _fun76037
                }
            case 1230:
                var11 = _closure1_slot10;
                var10 = _closure1_slot4;
                var9 = {};
                var13 = var12.selectedOverlay;
                var12 = new Array(2);
                var12[0] = var13;
                var13 = {};
                var13.height = var14;
                var13.width = var14;
                var12[1] = var13;
                var9.style = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 1278:
                var4[2] = var8;
                var5 = null;
                if (!var7) {
                    _fun76037_ip = 1290;
                    continue _fun76037
                }
            case 1287:
                var5 = var6;
            case 1290:
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var7;
    var7 = function arg0() {
        _fun76043: for (var _fun76043_ip = 0;;) switch (_fun76043_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.size;
                var6 = var0.isFirstInRow;
                var0 = _closure1_slot13;
                var3 = undefined;
                var7 = var0.bind(var3)();
                var2 = _closure1_slot10;
                var1 = _closure1_slot4;
                var0 = {};
                var8 = var7.imageContainer;
                var5 = new Array(2);
                var5[0] = var8;
                var6 = !var6;
                if (!var6) {
                    _fun76043_ip = 70;
                    continue _fun76043
                }
            case 57:
                var8 = {};
                var10 = 4;
                var8.marginLeft = var10;
                var6 = var8;
            case 70:
                var5[1] = var6;
                var0.style = var5;
                var6 = _closure1_slot10;
                var5 = _closure1_slot4;
                var4 = {};
                var8 = var7.image;
                var7 = new Array(2);
                var7[0] = var8;
                var8 = {};
                var8.height = var9;
                var8.width = var9;
                var7[1] = var8;
                var4.style = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var7;
    var6 = var9[var6];
    var11 = var8.bind(var0)(var6);
    var7 = var11.createStyleProperties;
    var6 = {};
    var14 = var9[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
    var6.backgroundColor = var14;
    var12 = var9[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.REDESIGN_BUTTON_TERTIARY_PRESSED_BACKGROUND;
    var6.pressedBackgroundColor = var12;
    var6 = var7.bind(var11)(var6);
    var _closure1_slot17 = var6;
    var6 = {};
    var7 = 'function MediaKeyboardItemTsx1(){const{withTiming,interpolateColor,pressed,backgroundColor,pressedBackgroundColor,Easing}=this.__closure;return{backgroundColor:withTiming(interpolateColor(pressed.get(),[0,1],[backgroundColor,pressedBackgroundColor]),{duration:200,easing:Easing.out(Easing.quad)})};}';
    var6.code = var7;
    var _closure1_slot18 = var6;
    var6 = function arg0() {
        _fun76044: for (var _fun76044_ip = 0;;) switch (_fun76044_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.size;
                var5 = var0.onPress;
                var8 = var0.disabled;
                var12 = var0.accessibilityLabel;
                var4 = var0.children;
                var13 = var0.index;
                var6 = var0.totalNumItems;
                var2 = var0.numItemsPerRow;
                var1 = _closure1_slot13;
                var3 = undefined;
                var7 = var1.bind(var3)();
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var16 = 5;
                var1 = var18[var16];
                var14 = var17.bind(var3)(var1);
                var9 = var14.useSharedValue;
                var1 = 0;
                var21 = var9.bind(var14)(var1);
                var _closure2_slot0 = var21;
                var1 = _closure1_slot17;
                var1 = var1.bind(var3)();
                var20 = var1.backgroundColor;
                var _closure2_slot1 = var20;
                var19 = var1.pressedBackgroundColor;
                var _closure2_slot2 = var19;
                var1 = var18[var16];
                var14 = var17.bind(var3)(var1);
                var9 = var14.useAnimatedStyle;
                var1 = function() {
                    var0 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 23;
                    var1 = var10[var1];
                    var8 = undefined;
                    var4 = var9.bind(var8)(var1);
                    var3 = var4.withTiming;
                    var5 = 5;
                    var1 = var10[var5];
                    var11 = var9.bind(var8)(var1);
                    var7 = var11.interpolateColor;
                    var6 = _closure2_slot0;
                    var2 = var6.get;
                    var6 = var2.bind(var6)();
                    var12 = _closure2_slot1;
                    var2 = new Array(2);
                    var2[0] = var12;
                    var1 = _closure2_slot2;
                    var2[1] = var1;
                    var1 = [0, 1];
                    var2 = var7.bind(var11)(var6, var1, var2);
                    var1 = {};
                    var6 = 200;
                    var1.duration = var6;
                    var6 = var10[var5];
                    var6 = var9.bind(var8)(var6);
                    var7 = var6.Easing;
                    var6 = var7.out;
                    var5 = var10[var5];
                    var5 = var9.bind(var8)(var5);
                    var5 = var5.Easing;
                    var5 = var5.quad;
                    var5 = var6.bind(var7)(var5);
                    var1.easing = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.backgroundColor = var1;
                    return var0;
                };
                var15 = {};
                var22 = 23;
                var22 = var18[var22];
                var22 = var17.bind(var3)(var22);
                var22 = var22.withTiming;
                var15.withTiming = var22;
                var22 = var18[var16];
                var22 = var17.bind(var3)(var22);
                var22 = var22.interpolateColor;
                var15.interpolateColor = var22;
                var15.pressed = var21;
                var15.backgroundColor = var20;
                var15.pressedBackgroundColor = var19;
                var16 = var18[var16];
                var16 = var17.bind(var3)(var16);
                var16 = var16.Easing;
                var15.Easing = var16;
                var1.__closure = var15;
                var15 = 15924448581794.0;
                var1.__workletHash = var15;
                var15 = _closure1_slot18;
                var1.__initData = var15;
                var9 = var9.bind(var14)(var1);
                var1 = _closure1_slot21;
                var6 = var1.bind(var3)(var13, var2, var6);
                var2 = _closure1_slot10;
                var1 = _closure1_slot12;
                var0 = {};
                var0.disabled = var8;
                var13 = 'button';
                var0.accessibilityRole = var13;
                var0.accessibilityLabel = var12;
                var12 = function() {
                    var2 = _closure2_slot0;
                    var1 = var2.set;
                    var0 = 1;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0.onPressIn = var12;
                var11 = function() {
                    var2 = _closure2_slot0;
                    var1 = var2.set;
                    var0 = 0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0.onPressOut = var11;
                var0.onPress = var5;
                var5 = new Array(6);
                var5[0] = var9;
                var9 = var7.imageContainer;
                var5[1] = var9;
                var9 = var7.specialButton;
                var5[2] = var9;
                var9 = {};
                var9.width = var10;
                var9.height = var10;
                var5[3] = var9;
                var5[4] = var6;
                var6 = undefined;
                if (!var8) {
                    _fun76044_ip = 381;
                    continue _fun76044
                }
            case 376:
                var6 = var7.disabled;
            case 381:
                var5[5] = var6;
                var0.style = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var6;
    var7 = var10.memo;
    var6 = function(arg0) { // Environment: var3
        var0 = arg0;
        var4 = var0.items;
        var2 = var0.channel;
        var _closure2_slot0 = var2;
        var2 = var0.draftType;
        var _closure2_slot1 = var2;
        var2 = var0.onPressItem;
        var _closure2_slot2 = var2;
        var2 = var0.onLongPressItem;
        var _closure2_slot3 = var2;
        var2 = var0.rowIndex;
        var _closure2_slot4 = var2;
        var2 = var0.totalNumItems;
        var _closure2_slot5 = var2;
        var6 = var0.numPerRow;
        var _closure2_slot6 = var6;
        var2 = var0.includedUploadIds;
        var _closure2_slot7 = var2;
        var2 = var0.uploadLimit;
        var _closure2_slot8 = var2;
        var2 = var0.disableWhenReachedLimit;
        var _closure2_slot9 = var2;
        var13 = var0.handleCameraPress;
        var7 = var0.handleAttachPress;
        var11 = var0.handleViewAllPhotosPress;
        var0 = var0.disabled;
        var _closure2_slot10 = var0;
        var2 = _closure1_slot13;
        var3 = undefined;
        var5 = var2.bind(var3)();
        var2 = _closure1_slot6;
        var2 = var2.bind(var3)();
        var8 = var2.width;
        var2 = 1;
        var9 = var6 - var2;
        var12 = 24;
        var2 = 4;
        var2 = var2 * var9;
        var2 = var12 + var2;
        var2 = var8 - var2;
        var2 = var2 / var6;
        var _closure2_slot11 = var2;
        var2 = {};
        var6 = {};
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var10 = 17;
        var14 = var9[var10];
        var14 = var8.bind(var3)(var14);
        var14 = var14.t;
        var14 = var14.uje3P9;
        var6.text = var14;
        var6.onPress = var13;
        var12 = var9[var12];
        var12 = var8.bind(var3)(var12);
        var12 = var12.CameraIcon;
        var6.Icon = var12;
        var2.camera = var6;
        var6 = {};
        var12 = var9[var10];
        var12 = var8.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.Zmm6dN;
        var6.text = var12;
        var6.onPress = var11;
        var11 = 25;
        var11 = var9[var11];
        var11 = var8.bind(var3)(var11);
        var11 = var11.ImageIcon;
        var6.Icon = var11;
        var2.allphotos = var6;
        var6 = {};
        var10 = var9[var10];
        var10 = var8.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10["8Hvr3+"];
        var6.text = var10;
        var6.onPress = var7;
        var7 = 26;
        var7 = var9[var7];
        var7 = var8.bind(var3)(var7);
        var7 = var7.AttachmentIcon;
        var6.Icon = var7;
        var2.attach = var6;
        var _closure2_slot12 = var2;
        var2 = var4.map;
        var1 = function(arg0, arg1) { // Environment: var1
            _fun76049: for (var _fun76049_ip = 0;;) switch (_fun76049_ip) {
                case 0:
                    var0 = arg0;
                    var4 = arg1;
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun76049_ip = 370;
                        continue _fun76049
                    }
                case 15:
                    var1 = _closure1_slot20;
                    var3 = undefined;
                    var1 = var1.bind(var3)(var0);
                    if (var1) {
                        _fun76049_ip = 178;
                        continue _fun76049
                    }
                case 38:
                    var5 = _closure1_slot10;
                    var2 = _closure1_slot15;
                    var1 = {};
                    var6 = _closure2_slot0;
                    var6 = var6.id;
                    var1.channelId = var6;
                    var6 = _closure2_slot1;
                    var1.draftType = var6;
                    var9 = _closure2_slot4;
                    var6 = _closure2_slot6;
                    var9 = var9 * var6;
                    var9 = var9 + var4;
                    var1.index = var9;
                    var9 = _closure2_slot5;
                    var1.totalNumItems = var9;
                    var1.numItemsPerRow = var6;
                    var1.item = var0;
                    var6 = _closure2_slot7;
                    var1.includedUploadIds = var6;
                    var6 = _closure2_slot8;
                    var1.uploadLimit = var6;
                    var6 = _closure2_slot9;
                    var1.disableWhenReachedLimit = var6;
                    var6 = _closure2_slot11;
                    var1.size = var6;
                    var6 = _closure2_slot2;
                    var1.onPressItem = var6;
                    var6 = _closure2_slot3;
                    var1.onLongPressItem = var6;
                    var6 = _closure2_slot10;
                    var1.disabled = var6;
                    var1 = var5.bind(var3)(var2, var1, var4);
                    return var1;
                case 178:
                    var1 = _closure2_slot12;
                    var0 = var0.type;
                    var5 = var1[var0];
                    var2 = _closure1_slot10;
                    var1 = _closure1_slot19;
                    var0 = {};
                    var6 = _closure2_slot11;
                    var0.size = var6;
                    var6 = var5.onPress;
                    var0.onPress = var6;
                    var6 = _closure2_slot10;
                    var0.disabled = var6;
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 17;
                    var6 = var9[var6];
                    var6 = var10.bind(var3)(var6);
                    var11 = var6.intl;
                    var10 = var11.string;
                    var6 = var5.text;
                    var6 = var10.bind(var11)(var6);
                    var0.accessibilityLabel = var6;
                    var10 = _closure2_slot4;
                    var6 = _closure2_slot6;
                    var10 = var10 * var6;
                    var10 = var10 + var4;
                    var0.index = var10;
                    var8 = _closure2_slot5;
                    var0.totalNumItems = var8;
                    var0.numItemsPerRow = var6;
                    var6 = var5.Icon;
                    var5 = {};
                    var8 = _closure1_slot1;
                    var7 = 7;
                    var7 = var9[var7];
                    var7 = var8.bind(var3)(var7);
                    var7 = var7.colors;
                    var7 = var7.ICON_SUBTLE;
                    var5.color = var7;
                    var7 = 'lg';
                    var5.size = var7;
                    var5 = var2.bind(var3)(var6, var5);
                    var0.children = var5;
                    var0 = var2.bind(var3)(var1, var0, var4);
                    return var0;
                case 370:
                    var3 = _closure1_slot10;
                    var2 = _closure1_slot16;
                    var1 = {};
                    var0 = _closure2_slot11;
                    var1.size = var0;
                    var0 = 0;
                    var0 = var0 === var4;
                    var1.isFirstInRow = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
            }
        };
        var4 = var2.bind(var4)(var1);
        var2 = _closure1_slot10;
        var1 = _closure1_slot4;
        var0 = {};
        var5 = var5.container;
        var0.style = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var6 = var7.bind(var10)(var6);
    var7 = 27;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/media_keyboard/native/components/MediaKeyboardItem.tsx';
    var7 = var8.bind(var9)(var7);
    var2.default = var6;
    var2.PARENT_PADDING = var5;
    var2.CHILD_PADDING = var4;
    var2.SEPARATOR_SIZE = var4;
    var4 = function arg0() {
        _fun76050: for (var _fun76050_ip = 0;;) switch (_fun76050_ip) {
            case 0:
                var1 = arg0;
                var0 = 'type';
                var0 = var0 in var1;
                if (!var0) {
                    _fun76050_ip = 27;
                    continue _fun76050
                }
            case 14:
                var2 = var1.type;
                var1 = 'camera';
                var0 = var1 === var2;
            case 27:
                return var0;
        }
    };
    var2.isMediaCameraNode = var4;
    var4 = function arg0() {
        _fun76051: for (var _fun76051_ip = 0;;) switch (_fun76051_ip) {
            case 0:
                var1 = arg0;
                var0 = 'type';
                var0 = var0 in var1;
                if (!var0) {
                    _fun76051_ip = 27;
                    continue _fun76051
                }
            case 14:
                var2 = var1.type;
                var1 = 'attach';
                var0 = var1 === var2;
            case 27:
                return var0;
        }
    };
    var2.isAttachFilesNode = var4;
    var3 = function arg0() {
        _fun76052: for (var _fun76052_ip = 0;;) switch (_fun76052_ip) {
            case 0:
                var1 = arg0;
                var0 = 'type';
                var0 = var0 in var1;
                if (!var0) {
                    _fun76052_ip = 27;
                    continue _fun76052
                }
            case 14:
                var2 = var1.type;
                var1 = 'allphotos';
                var0 = var1 === var2;
            case 27:
                return var0;
        }
    };
    var2.isViewAllPhotosNode = var3;
    var2.isSpecialMediaGridNode = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3997, 9627, 33, 3719, 1297, 671, 3246, 4094, 9417, 3940, 9628, 478, 566, 4008, 4938, 1235, 4130, 4010, 7058, 9629, 8882, 4105, 9630, 4860, 8826, 2]);