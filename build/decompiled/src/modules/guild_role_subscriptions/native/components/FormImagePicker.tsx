// modules/guild_role_subscriptions/native/components/FormImagePicker.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun117326: for (var _fun117326_ip = 0;;) switch (_fun117326_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun117326_ip = 94;
                            continue _fun117326
                        }
                    case 7:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 6;
                        var1 = var2[var1];
                        var2 = undefined;
                        var4 = var3.bind(var2)(var1);
                        var3 = var4.openImagePicker;
                        var1 = {};
                        var5 = arg0;
                        var1.size = var5;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 56);
                    case 54:
                        return var1;
                    case 56:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun117326_ip = 91;
                            continue _fun117326
                        }
                    case 62:
                        var3 = var1.base64;
                        var4 = null;
                        if (!(var4 != var3)) {
                            _fun117326_ip = 88;
                            continue _fun117326
                        }
                    case 74:
                        var4 = {};
                        var4.uri = var3;
                        var3 = arg1;
                        var3 = var3.bind(var2)(var4);
                    case 88:
                        return var2;
                    case 91:
                        return var1;
                    case 94:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot11 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var0;
    var1 = function arg0() {
        _fun117327: for (var _fun117327_ip = 0;;) switch (_fun117327_ip) {
            case 0:
                var1 = arg0;
                var18 = var1.style;
                var7 = var1.image;
                var _closure2_slot0 = var7;
                var0 = var1.imageUploadSize;
                var _closure2_slot1 = var0;
                var0 = var1.setImage;
                var _closure2_slot2 = var0;
                var16 = var1.previewResizeMode;
                var2 = var1.previewShape;
                var11 = var1.standalone;
                var0 = var1.size;
                var _closure2_slot3 = var0;
                var6 = var1.disabled;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun117327_ip = 80;
                    continue _fun117327
                }
            case 78:
                var6 = false;
            case 80:
                var1 = _closure1_slot8;
                var12 = var1.bind(var3)();
                var1 = 'center';
                if (!(var1 !== var16)) {
                    _fun117327_ip = 107;
                    continue _fun117327
                }
            case 99:
                var19 = var12.image;
                _fun117327_ip = 113;
                continue _fun117327;
            case 107:
                var19 = var12.imageCentered;
            case 113:
                var1 = _closure1_slot9;
                var1 = var1.CIRCLE;
                if (!(var2 !== var1)) {
                    _fun117327_ip = 135;
                    continue _fun117327
                }
            case 127:
                var17 = var12.imageSquircle;
                _fun117327_ip = 141;
                continue _fun117327;
            case 135:
                var17 = var12.imageCircle;
            case 141:
                var5 = _closure1_slot4;
                var2 = var5.useMemo;
                var1 = new Array(2);
                var1[0] = var7;
                var1[1] = var0;
                var0 = function() { // Environment: var4
                    _fun117328: for (var _fun117328_ip = 0;;) switch (_fun117328_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = null;
                            var3 = var2 == var0;
                            var8 = undefined;
                            var0 = undefined;
                            if (var3) {
                                _fun117328_ip = 29;
                                continue _fun117328
                            }
                        case 20:
                            var3 = _closure2_slot0;
                            var0 = var3.uri;
                        case 29:
                            if (!(var2 == var0)) {
                                _fun117328_ip = 35;
                                continue _fun117328
                            }
                        case 33:
                            return var8;
                        case 35:
                            var0 = _closure2_slot0;
                            var4 = var0.uri;
                            var3 = var4.startsWith;
                            var0 = 'data:';
                            var0 = var3.bind(var4)(var0);
                            if (var0) {
                                _fun117328_ip = 178;
                                continue _fun117328
                            }
                        case 64:
                            var0 = _closure2_slot3;
                            if (!(var2 != var0)) {
                                _fun117328_ip = 178;
                                continue _fun117328
                            }
                        case 72:
                            var2 = _closure2_slot0;
                            var3 = var2.uri;
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var0 = 7;
                            var4 = var9[var0];
                            var5 = var7.bind(var8)(var4);
                            var4 = var5.getBestMediaProxySize;
                            var6 = _closure2_slot3;
                            var0 = var9[var0];
                            var7 = var7.bind(var8)(var0);
                            var0 = var7.getDevicePixelRatio;
                            var0 = var0.bind(var7)();
                            var0 = var6 * var0;
                            var5 = var4.bind(var5)(var0);
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var4 = var0.concat;
                            var0 = '?size=';
                            var0 = var4.bind(var0)(var5);
                            var0 = var3 + var0;
                            var2.uri = var0;
                            _fun117328_ip = 187;
                            continue _fun117328;
                        case 178:
                            var1 = _closure2_slot0;
                            var0 = var1.uri;
                        case 187:
                            return var0;
                    }
                };
                var15 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var14 = _closure1_slot2;
                var0 = 8;
                var0 = var14[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var5 = 'button';
                var0.accessibilityRole = var5;
                var13 = _closure1_slot0;
                var5 = 9;
                var8 = var14[var5];
                var8 = var13.bind(var3)(var8);
                var10 = var8.intl;
                var8 = var10.string;
                var5 = var14[var5];
                var5 = var13.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.HNo5cG;
                var5 = var8.bind(var10)(var5);
                var0.accessibilityLabel = var5;
                var5 = {};
                var5.disabled = var6;
                var0.accessibilityState = var5;
                var4 = function() {
                    var3 = _closure1_slot10;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var0.onPress = var4;
                var5 = var12.image;
                var4 = new Array(5);
                var4[0] = var5;
                var4[1] = var17;
                var5 = var12.imageContainerEmpty;
                var4[2] = var5;
                var5 = var6;
                if (!var5) {
                    _fun117327_ip = 327;
                    continue _fun117327
                }
            case 322:
                var5 = var12.disabled;
            case 327:
                var4[3] = var5;
                var4[4] = var18;
                var0.style = var4;
                var0.disabled = var6;
                var5 = null;
                if (!(var5 == var7)) {
                    _fun117327_ip = 389;
                    continue _fun117327
                }
            case 349:
                var10 = _closure1_slot6;
                var8 = _closure1_slot0;
                var13 = _closure1_slot2;
                var4 = 11;
                var4 = var13[var4];
                var4 = var8.bind(var3)(var4);
                var8 = var4.ImagePlusIcon;
                var4 = {};
                var8 = var10.bind(var3)(var8, var4);
                _fun117327_ip = 469;
                continue _fun117327;
            case 389:
                var13 = _closure1_slot6;
                var10 = _closure1_slot1;
                var14 = _closure1_slot2;
                var4 = 10;
                var4 = var14[var4];
                var10 = var10.bind(var3)(var4);
                var4 = {};
                var14 = new Array(3);
                var14[0] = var19;
                var14[1] = var18;
                var14[2] = var17;
                var4.style = var14;
                var17 = var5 != var16;
                var14 = 'cover';
                if (!var17) {
                    _fun117327_ip = 449;
                    continue _fun117327
                }
            case 446:
                var14 = var16;
            case 449:
                var4.resizeMode = var14;
                var14 = {};
                var14.uri = var15;
                var4.source = var14;
                var8 = var13.bind(var3)(var10, var4);
            case 469:
                var4 = new Array(2);
                var4[0] = var8;
                var5 = var5 != var7;
                if (!var5) {
                    _fun117327_ip = 487;
                    continue _fun117327
                }
            case 484:
                var5 = !var6;
            case 487:
                if (!var5) {
                    _fun117327_ip = 591;
                    continue _fun117327
                }
            case 490:
                var8 = _closure1_slot6;
                var7 = _closure1_slot5;
                var6 = {};
                var13 = var12.editImageIcon;
                var10 = new Array(2);
                var10[0] = var13;
                if (!var11) {
                    _fun117327_ip = 523;
                    continue _fun117327
                }
            case 517:
                var11 = var12.standaloneIcon;
            case 523:
                var10[1] = var11;
                var6.style = var10;
                var11 = _closure1_slot6;
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var9 = 12;
                var9 = var12[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.PencilIcon;
                var9 = {
                    'color': '#292b30',
                    'size': 'sm'
                };
                var9 = var11.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 591:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var1;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var9 = 0;
    var3 = var7[var9];
    var0 = undefined;
    var3 = var13.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var8 = 1;
    var5 = var7[var8];
    var3 = arg3;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var5 = var3.jsx;
    var _closure1_slot6 = var5;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var7[var3];
    var10 = var6.bind(var0)(var3);
    var5 = var10.createStyles;
    var3 = {};
    var11 = {
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'marginHorizontal': 16
    };
    var3.imageSelectionRow = var11;
    var11 = {
        'flex': 1,
        'flexDirection': 'column',
        'marginEnd': 16
    };
    var3.buttonColumn = var11;
    var11 = {
        'flexWrap': 'wrap',
        'marginBottom': 16
    };
    var3.imageDescription = var11;
    var11 = {
        'alignSelf': 'center',
        'width': 84,
        'height': 84
    };
    var3.image = var11;
    var11 = {
        'alignSelf': 'center',
        'width': 20,
        'height': 20
    };
    var3.imageCentered = var11;
    var11 = {};
    var12 = 42;
    var11.borderRadius = var12;
    var3.imageCircle = var11;
    var11 = {};
    var12 = 5;
    var14 = var7[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var11.borderRadius = var14;
    var3.imageSquircle = var11;
    var11 = {};
    var14 = var7[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOWEST;
    var11.backgroundColor = var14;
    var3.imageContainerEmpty = var11;
    var11 = {
        'alignItems': 'center',
        'backgroundColor': null,
        'borderRadius': null,
        'top': 0,
        'height': 24,
        'justifyContent': 'center',
        'right': 0,
        'padding': 4,
        'position': 'absolute',
        'width': 24
    };
    var14 = var7[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_TEXT_DEFAULT;
    var11.backgroundColor = var14;
    var12 = var7[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var11.borderRadius = var12;
    var3.editImageIcon = var11;
    var11 = {
        'top': 4294967292,
        'right': 4294967292
    };
    var3.standaloneIcon = var11;
    var11 = {};
    var12 = 0.3;
    var11.opacity = var12;
    var3.disabled = var11;
    var3 = var5.bind(var10)(var3);
    var _closure1_slot8 = var3;
    var3 = {};
    var3.CIRCLE = var9;
    var5 = 'CIRCLE';
    var3[var9] = var5;
    var3.SQUIRCLE = var8;
    var5 = 'SQUIRCLE';
    var3[var8] = var5;
    var _closure1_slot9 = var3;
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_role_subscriptions/native/components/FormImagePicker.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function arg0() {
        _fun117330: for (var _fun117330_ip = 0;;) switch (_fun117330_ip) {
            case 0:
                var3 = arg0;
                var16 = var3.description;
                var11 = var3.imageUploadSize;
                var _closure2_slot0 = var11;
                var10 = var3.image;
                var9 = var3.setImage;
                var _closure2_slot1 = var9;
                var12 = var3.disabled;
                var2 = {
                    'description': 0,
                    'imageUploadSize': 0,
                    'image': 0,
                    'setImage': 0,
                    'disabled': 0
                };
                var0 = null;
                var24 = var2;
                var23 = null;
                var1 = silentSetPrototypeOf(var24, var23);
                var24 = {};
                var23 = var3;
                var22 = var2;
                var8 = copyDataProperties(var24, var23, var22);
                var1 = _closure1_slot8;
                var3 = undefined;
                var17 = var1.bind(var3)();
                if (!(var0 != var10)) {
                    _fun117330_ip = 154;
                    continue _fun117330
                }
            case 95:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 9;
                var1 = var6[var0];
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var6[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["0KOido"];
                var21 = var1.bind(var2)(var0);
                _fun117330_ip = 211;
                continue _fun117330;
            case 154:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 9;
                var1 = var6[var0];
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var6[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.bGPfSp;
                var21 = var1.bind(var2)(var0);
            case 211:
                var2 = _closure1_slot7;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var17.imageSelectionRow;
                var0.style = var4;
                var7 = _closure1_slot7;
                var6 = _closure1_slot5;
                var4 = {};
                var13 = var17.buttonColumn;
                var4.style = var13;
                var15 = _closure1_slot6;
                var14 = _closure1_slot0;
                var19 = _closure1_slot2;
                var13 = 13;
                var13 = var19[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var17 = var17.imageDescription;
                var13.style = var17;
                var13.children = var16;
                var14 = var15.bind(var3)(var14, var13);
                var13 = new Array(2);
                var13[0] = var14;
                var16 = _closure1_slot6;
                var18 = _closure1_slot1;
                var17 = 14;
                var14 = var19[var17];
                var15 = var18.bind(var3)(var14);
                var14 = {};
                var14.text = var21;
                var21 = var19[var17];
                var21 = var18.bind(var3)(var21);
                var21 = var21.Colors;
                var21 = var21.GREY;
                var14.color = var21;
                var21 = var19[var17];
                var21 = var18.bind(var3)(var21);
                var21 = var21.Looks;
                var21 = var21.FILLED;
                var14.look = var21;
                var20 = function() {
                    var3 = _closure1_slot10;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var14.onPress = var20;
                var17 = var19[var17];
                var17 = var18.bind(var3)(var17);
                var17 = var17.Sizes;
                var17 = var17.MEDIUM;
                var14.size = var17;
                var14.disabled = var12;
                var14 = var16.bind(var3)(var15, var14);
                var13[1] = var14;
                var4.children = var13;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot6;
                var6 = _closure1_slot12;
                var5 = {};
                var24 = var5;
                var23 = var8;
                var8 = copyDataProperties(var24, var23);
                var8 = 'disabled';
                var5[var8] = var12;
                var8 = 'imageUploadSize';
                var5[var8] = var11;
                var8 = 'image';
                var5[var8] = var10;
                var8 = 'setImage';
                var5[var8] = var9;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var4;
    var2.PreviewShape = var3;
    var2.ImagePickerIcon = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 33, 1297, 671, 4012, 1443, 6852, 1234, 4704, 14976, 7584, 3942, 4875, 2]);