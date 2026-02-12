// modules/guild_role_subscriptions/native/components/FormImagePicker.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var7;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot13;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun115635: for (var _fun115635_ip = 0;;) switch (_fun115635_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun115635_ip = 94;
                            continue _fun115635
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
                            _fun115635_ip = 91;
                            continue _fun115635
                        }
                    case 62:
                        var3 = var1.base64;
                        var4 = null;
                        if (!(var4 != var3)) {
                            _fun115635_ip = 88;
                            continue _fun115635
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
        _closure1_slot13 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot13 = var0;
    var1 = function arg0() {
        _fun115636: for (var _fun115636_ip = 0;;) switch (_fun115636_ip) {
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
                    _fun115636_ip = 80;
                    continue _fun115636
                }
            case 78:
                var6 = false;
            case 80:
                var1 = _closure1_slot8;
                var12 = var1.bind(var3)();
                var1 = 'center';
                if (!(var1 !== var16)) {
                    _fun115636_ip = 107;
                    continue _fun115636
                }
            case 99:
                var19 = var12.image;
                _fun115636_ip = 113;
                continue _fun115636;
            case 107:
                var19 = var12.imageCentered;
            case 113:
                var1 = _closure1_slot9;
                var1 = var1.CIRCLE;
                if (!(var2 !== var1)) {
                    _fun115636_ip = 135;
                    continue _fun115636
                }
            case 127:
                var17 = var12.imageSquircle;
                _fun115636_ip = 141;
                continue _fun115636;
            case 135:
                var17 = var12.imageCircle;
            case 141:
                var5 = _closure1_slot4;
                var2 = var5.useMemo;
                var1 = new Array(2);
                var1[0] = var7;
                var1[1] = var0;
                var0 = function() { // Environment: var4
                    _fun115637: for (var _fun115637_ip = 0;;) switch (_fun115637_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = null;
                            var3 = var2 == var0;
                            var8 = undefined;
                            var0 = undefined;
                            if (var3) {
                                _fun115637_ip = 29;
                                continue _fun115637
                            }
                        case 20:
                            var3 = _closure2_slot0;
                            var0 = var3.uri;
                        case 29:
                            if (!(var2 == var0)) {
                                _fun115637_ip = 35;
                                continue _fun115637
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
                                _fun115637_ip = 178;
                                continue _fun115637
                            }
                        case 64:
                            var0 = _closure2_slot3;
                            if (!(var2 != var0)) {
                                _fun115637_ip = 178;
                                continue _fun115637
                            }
                        case 72:
                            var2 = _closure2_slot0;
                            var3 = var2.uri;
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var0 = 9;
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
                            _fun115637_ip = 187;
                            continue _fun115637;
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
                var0 = 10;
                var0 = var14[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var5 = 'button';
                var0.accessibilityRole = var5;
                var13 = _closure1_slot0;
                var5 = 11;
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
                    var3 = _closure1_slot12;
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
                    _fun115636_ip = 327;
                    continue _fun115636
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
                    _fun115636_ip = 355;
                    continue _fun115636
                }
            case 349:
                var8 = _closure1_slot10;
                _fun115636_ip = 435;
                continue _fun115636;
            case 355:
                var13 = _closure1_slot6;
                var10 = _closure1_slot1;
                var14 = _closure1_slot2;
                var4 = 12;
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
                    _fun115636_ip = 415;
                    continue _fun115636
                }
            case 412:
                var14 = var16;
            case 415:
                var4.resizeMode = var14;
                var14 = {};
                var14.uri = var15;
                var4.source = var14;
                var8 = var13.bind(var3)(var10, var4);
            case 435:
                var4 = new Array(2);
                var4[0] = var8;
                var5 = var5 != var7;
                if (!var5) {
                    _fun115636_ip = 453;
                    continue _fun115636
                }
            case 450:
                var5 = !var6;
            case 453:
                if (!var5) {
                    _fun115636_ip = 511;
                    continue _fun115636
                }
            case 456:
                var8 = _closure1_slot6;
                var7 = _closure1_slot5;
                var6 = {};
                var13 = var12.editImageIcon;
                var10 = new Array(2);
                var10[0] = var13;
                if (!var11) {
                    _fun115636_ip = 489;
                    continue _fun115636
                }
            case 483:
                var11 = var12.standaloneIcon;
            case 489:
                var10[1] = var11;
                var6.style = var10;
                var9 = _closure1_slot11;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 511:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var1;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var10 = 0;
    var3 = var7[var10];
    var0 = undefined;
    var3 = var14.bind(var0)(var3);
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
    var9 = var3.jsx;
    var _closure1_slot6 = var9;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var7[var3];
    var11 = var6.bind(var0)(var3);
    var5 = var11.createStyles;
    var3 = {};
    var12 = {
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'marginHorizontal': 16
    };
    var3.imageSelectionRow = var12;
    var12 = {
        'flex': 1,
        'flexDirection': 'column',
        'marginEnd': 16
    };
    var3.buttonColumn = var12;
    var12 = {
        'flexWrap': 'wrap',
        'marginBottom': 16
    };
    var3.imageDescription = var12;
    var12 = {
        'alignSelf': 'center',
        'width': 84,
        'height': 84
    };
    var3.image = var12;
    var12 = {
        'alignSelf': 'center',
        'width': 20,
        'height': 20
    };
    var3.imageCentered = var12;
    var12 = {};
    var13 = 42;
    var12.borderRadius = var13;
    var3.imageCircle = var12;
    var12 = {};
    var13 = 5;
    var15 = var7[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var12.borderRadius = var15;
    var3.imageSquircle = var12;
    var12 = {};
    var15 = var7[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOWEST;
    var12.backgroundColor = var15;
    var3.imageContainerEmpty = var12;
    var12 = {
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
    var15 = var7[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.INTERACTIVE_TEXT_DEFAULT;
    var12.backgroundColor = var15;
    var13 = var7[var13];
    var13 = var14.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var12.borderRadius = var13;
    var3.editImageIcon = var12;
    var12 = {
        'top': 4294967292,
        'right': 4294967292
    };
    var3.standaloneIcon = var12;
    var12 = {};
    var13 = 0.3;
    var12.opacity = var13;
    var3.disabled = var12;
    var3 = var5.bind(var11)(var3);
    var _closure1_slot8 = var3;
    var3 = {};
    var3.CIRCLE = var10;
    var5 = 'CIRCLE';
    var3[var10] = var5;
    var3.SQUIRCLE = var8;
    var5 = 'SQUIRCLE';
    var3[var8] = var5;
    var _closure1_slot9 = var3;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.ImagePlusIcon;
    var5 = {};
    var5 = var9.bind(var0)(var8, var5);
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.PencilIcon;
    var5 = {
        'color': '#292b30',
        'size': 'sm'
    };
    var5 = var9.bind(var0)(var8, var5);
    var _closure1_slot11 = var5;
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_role_subscriptions/native/components/FormImagePicker.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function arg0() {
        _fun115639: for (var _fun115639_ip = 0;;) switch (_fun115639_ip) {
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
                    _fun115639_ip = 154;
                    continue _fun115639
                }
            case 95:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 11;
                var1 = var6[var0];
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var6[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["0KOido"];
                var21 = var1.bind(var2)(var0);
                _fun115639_ip = 211;
                continue _fun115639;
            case 154:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 11;
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
                    var3 = _closure1_slot12;
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
                var6 = _closure1_slot14;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 33, 1297, 671, 4008, 14797, 7584, 1443, 6879, 1234, 5426, 3938, 4849, 2]);