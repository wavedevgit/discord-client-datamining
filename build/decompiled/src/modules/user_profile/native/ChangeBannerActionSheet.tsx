// modules/user_profile/native/ChangeBannerActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun80768: for (var _fun80768_ip = 0;;) switch (_fun80768_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.user;
                var3 = undefined;
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var0 = _closure1_slot12;
                var15 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 20;
                var0 = var6[var0];
                var8 = var1.bind(var3)(var0);
                var5 = var8.useStateFromStoresObject;
                var0 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var4
                    var1 = _closure1_slot6;
                    var0 = var1.getPendingChanges;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var5.bind(var8)(var2, var0);
                var8 = var0.pendingAvatar;
                var5 = var0.pendingAccentColor;
                var0 = 21;
                var0 = var6[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.getPendingAvatarSrc;
                var0 = {};
                var10 = var7.id;
                var0.userId = var10;
                var0.image = var8;
                var11 = var1.bind(var2)(var0);
                var2 = _closure1_slot1;
                var1 = 22;
                var1 = var6[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var7.id;
                var6 = var2.bind(var3)(var1);
                var2 = null;
                if (!(var2 == var11)) {
                    _fun80768_ip = 184;
                    continue _fun80768
                }
            case 169:
                var1 = var7.getAvatarURL;
                var0 = 80;
                var11 = var1.bind(var7)(var3, var0);
            case 184:
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 23;
                var1 = var12[var0];
                var7 = var8.bind(var3)(var1);
                var1 = var7.memoizedImageSource;
                var10 = var1.bind(var7)(var11);
                var16 = 24;
                var1 = var12[var16];
                var7 = var8.bind(var3)(var1);
                var1 = var7.rgb2int;
                var0 = var12[var0];
                var8 = var8.bind(var3)(var0);
                var0 = var8.useDominantColorFromImage;
                var0 = var0.bind(var8)(var11, var10);
                var0 = var1.bind(var7)(var0);
                _closure2_slot0 = var0;
                if (!(var3 === var5)) {
                    _fun80768_ip = 285;
                    continue _fun80768
                }
            case 267:
                var7 = var2 == var6;
                var1 = undefined;
                if (var7) {
                    _fun80768_ip = 282;
                    continue _fun80768
                }
            case 276:
                var1 = var6.primaryColor;
            case 282:
                var5 = var1;
            case 285:
                var1 = var0;
                if (!(var2 != var5)) {
                    _fun80768_ip = 295;
                    continue _fun80768
                }
            case 292:
                var1 = var5;
            case 295:
                var2 = var2 != var1;
                var18 = 0;
                if (!var2) {
                    _fun80768_ip = 307;
                    continue _fun80768
                }
            case 304:
                var18 = var1;
            case 307:
                _closure2_slot1 = var18;
                var5 = _closure1_slot4;
                var2 = var5.useCallback;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function(arg0) { // Environment: var4
                    _fun80770: for (var _fun80770_ip = 0;;) switch (_fun80770_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = _closure2_slot0;
                            if (!(var3 === var0)) {
                                _fun80770_ip = 16;
                                continue _fun80770
                            }
                        case 14:
                            var3 = null;
                        case 16:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 25;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.setPendingAccentColor;
                            var1 = var1.bind(var2)(var3);
                            return var0;
                    }
                };
                var0 = var2.bind(var5)(var0, var1);
                _closure2_slot2 = var0;
                var2 = _closure1_slot9;
                var17 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 17;
                var0 = var14[var0];
                var0 = var17.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var7 = _closure1_slot9;
                var5 = 18;
                var5 = var14[var5];
                var5 = var17.bind(var3)(var5);
                var6 = var5.FormLabel;
                var5 = {};
                var8 = var15.label;
                var5.style = var8;
                var8 = 14;
                var10 = var14[var8];
                var10 = var17.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var8 = var14[var8];
                var8 = var17.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.xzNfPz;
                var8 = var10.bind(var11)(var8);
                var5.text = var8;
                var5 = var7.bind(var3)(var6, var5);
                var0.label = var5;
                var7 = _closure1_slot10;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = var15.selectedColor;
                var5.style = var8;
                var11 = _closure1_slot9;
                var13 = _closure1_slot1;
                var8 = 26;
                var8 = var14[var8];
                var10 = var13.bind(var3)(var8);
                var8 = {};
                var12 = var15.bannerColor;
                var8.style = var12;
                var8.color = var18;
                var10 = var11.bind(var3)(var10, var8);
                var8 = new Array(3);
                var8[0] = var10;
                var12 = _closure1_slot9;
                var10 = 27;
                var10 = var14[var10];
                var10 = var17.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'interactive-text-default'
                };
                var19 = var15.selectedColorHex;
                var10.style = var19;
                var16 = var14[var16];
                var17 = var17.bind(var3)(var16);
                var16 = var17.int2hex;
                var16 = var16.bind(var17)(var18);
                var10.children = var16;
                var10 = var12.bind(var3)(var11, var10);
                var8[1] = var10;
                var11 = _closure1_slot9;
                var12 = 28;
                var9 = var14[var12];
                var10 = var13.bind(var3)(var9);
                var9 = {};
                var15 = var15.rowArrow;
                var9.style = var15;
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.Sizes;
                var12 = var12.CUSTOM;
                var9.size = var12;
                var12 = 29;
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var9.source = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var0.trailing = var5;
                var4 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 30;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var4 = _closure2_slot1;
                    var1.color = var4;
                    var3 = _closure2_slot2;
                    var1.onSelect = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.onPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var9 = 0;
    var3 = var5[var9];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
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
    var6 = var3.AnalyticsObjects;
    var _closure1_slot7 = var6;
    var3 = var3.UPLOAD_BANNER_SIZE;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var6 = var3.jsxs;
    var _closure1_slot10 = var6;
    var3 = var3.Fragment;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'color': null,
        'alignItems': 'center',
        'flexDirection': 'row'
    };
    var10 = 7;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_TEXT_ACTIVE;
    var8.color = var12;
    var3.label = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_DEFAULT;
    var8.color = var12;
    var3.sublabel = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.marginLeft = var12;
    var3.nitroWheel = var8;
    var8 = {
        'borderColor': null,
        'borderWidth': 1,
        'borderRadius': null,
        'height': 24,
        'minWidth': 24
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_TEXT_DEFAULT;
    var8.borderColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var8.borderRadius = var12;
    var3.bannerColor = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.selectedColor = var8;
    var8 = {};
    var12 = 'uppercase';
    var8.textTransform = var12;
    var3.selectedColorHex = var8;
    var8 = {
        'height': 13,
        'width': 8,
        'marginLeft': 10,
        'marginTop': 2
    };
    var3.rowArrow = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.marginTop = var12;
    var3.upsellButton = var8;
    var8 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_FEEDBACK_CRITICAL;
    var8.color = var10;
    var3.remove = var8;
    var8 = {};
    var8.flex = var9;
    var3.titleWrapper = var8;
    var8 = {};
    var9 = 'flex-start';
    var8.justifyContent = var9;
    var3.titleContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 31;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/ChangeBannerActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun80772: for (var _fun80772_ip = 0;;) switch (_fun80772_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.user;
                var2 = var0.analyticsLocations;
                var1 = var0.onBannerChange;
                var _closure2_slot0 = var1;
                var20 = var0.removeText;
                var12 = var0.showRemoveBanner;
                var3 = undefined;
                if (!(var12 === var3)) {
                    _fun80772_ip = 46;
                    continue _fun80772
                }
            case 44:
                var12 = false;
            case 46:
                var26 = var0.isTryItOut;
                if (!(var26 === var3)) {
                    _fun80772_ip = 58;
                    continue _fun80772
                }
            case 56:
                var26 = false;
            case 58:
                var0 = _closure1_slot12;
                var24 = var0.bind(var3)();
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 8;
                var1 = var1[var0];
                var1 = var4.bind(var3)(var1);
                var1 = var1.bind(var3)(var2);
                var4 = var1.analyticsLocations;
                if (var26) {
                    _fun80772_ip = 134;
                    continue _fun80772
                }
            case 103:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 9;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.canUsePremiumProfileCustomization;
                var26 = var1.bind(var2)(var17);
            case 134:
                var1 = function() { // Environment: var16
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun80775: for (var _fun80775_ip = 0;;) switch (_fun80775_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun80775_ip = 109;
                                        continue _fun80775
                                    }
                                case 7:
                                    var4 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var2 = 10;
                                    var3 = var5[var2];
                                    var2 = undefined;
                                    var6 = var4.bind(var2)(var3);
                                    var3 = var6.hideActionSheet;
                                    var3 = var3.bind(var6)();
                                    var3 = 11;
                                    var3 = var5[var3];
                                    var4 = var4.bind(var2)(var3);
                                    var3 = var4.openImagePicker;
                                    var1 = _closure1_slot8;
                                    var1 = var3.bind(var4)(var1);
                                    SaveGenerator(address = 73);
                                case 71:
                                    return var1;
                                case 73:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun80775_ip = 106;
                                        continue _fun80775
                                    }
                                case 79:
                                    var4 = var1.base64;
                                    var3 = null;
                                    if (!(var3 != var4)) {
                                        _fun80775_ip = 103;
                                        continue _fun80775
                                    }
                                case 91:
                                    var3 = _closure2_slot0;
                                    var3 = var3.bind(var2)(var4);
                                case 103:
                                    return var2;
                                case 106:
                                    return var1;
                                case 109:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var19 = var1.bind(var3)();
                var2 = _closure1_slot9;
                var14 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = var10[var0];
                var0 = var14.bind(var3)(var0);
                var1 = var0.AnalyticsLocationProvider;
                var0 = {};
                var0.value = var4;
                var6 = _closure1_slot10;
                var4 = 12;
                var4 = var10[var4];
                var4 = var14.bind(var3)(var4);
                var5 = var4.ActionSheet;
                var4 = {};
                var9 = _closure1_slot9;
                var7 = 13;
                var7 = var10[var7];
                var7 = var14.bind(var3)(var7);
                var8 = var7.BottomSheetTitleHeader;
                var7 = {};
                var25 = 14;
                var11 = var10[var25];
                var11 = var14.bind(var3)(var11);
                var13 = var11.intl;
                var11 = var13.string;
                var10 = var10[var25];
                var10 = var14.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.Vgdusv;
                var10 = var11.bind(var13)(var10);
                var7.title = var10;
                var10 = var26;
                if (!var10) {
                    _fun80772_ip = 323;
                    continue _fun80772
                }
            case 285:
                var14 = _closure1_slot9;
                var13 = _closure1_slot0;
                var15 = _closure1_slot2;
                var11 = 15;
                var11 = var15[var11];
                var11 = var13.bind(var3)(var11);
                var13 = var11.NitroWheelIcon;
                var11 = {};
                var10 = var14.bind(var3)(var13, var11);
            case 323:
                var7.trailing = var10;
                var10 = var24.titleWrapper;
                var7.titleWrapperStyle = var10;
                var10 = var24.titleContainer;
                var7.titleContainerStyle = var10;
                var8 = var9.bind(var3)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var10 = _closure1_slot10;
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 16;
                var8 = var11[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.TableRowGroup;
                var8 = {};
                var22 = null;
                var13 = null;
                if (var26) {
                    _fun80772_ip = 423;
                    continue _fun80772
                }
            case 403:
                var15 = _closure1_slot9;
                var14 = _closure1_slot13;
                var11 = {};
                var11.user = var17;
                var13 = var15.bind(var3)(var14, var11);
            case 423:
                var11 = new Array(3);
                var11[0] = var13;
                var17 = _closure1_slot9;
                var30 = _closure1_slot0;
                var29 = _closure1_slot2;
                var13 = 17;
                var14 = var29[var13];
                var14 = var30.bind(var3)(var14);
                var15 = var14.TableRow;
                var14 = {};
                var28 = _closure1_slot10;
                var27 = _closure1_slot5;
                var18 = {};
                var23 = var24.label;
                var18.style = var23;
                var31 = _closure1_slot9;
                var23 = 18;
                var29 = var29[var23];
                var29 = var30.bind(var3)(var29);
                var30 = var29.FormLabel;
                var29 = {};
                var33 = _closure1_slot0;
                var32 = _closure1_slot2;
                var34 = var32[var25];
                var34 = var33.bind(var3)(var34);
                var35 = var34.intl;
                var34 = var35.string;
                var32 = var32[var25];
                var32 = var33.bind(var3)(var32);
                var33 = var32.t;
                if (var12) {
                    _fun80772_ip = 565;
                    continue _fun80772
                }
            case 550:
                var32 = var33["70CYsY"];
                var32 = var34.bind(var35)(var32);
                _fun80772_ip = 578;
                continue _fun80772;
            case 565:
                var33 = var33.N0bC3P;
                var32 = var34.bind(var35)(var33);
            case 578:
                var29.text = var32;
                var30 = var31.bind(var3)(var30, var29);
                var29 = new Array(2);
                var29[0] = var30;
                var30 = !var26;
                if (!var30) {
                    _fun80772_ip = 658;
                    continue _fun80772
                }
            case 602:
                var33 = _closure1_slot9;
                var32 = _closure1_slot0;
                var34 = _closure1_slot2;
                var31 = 15;
                var31 = var34[var31];
                var31 = var32.bind(var3)(var31);
                var32 = var31.NitroWheelIcon;
                var31 = {};
                var34 = var24.nitroWheel;
                var31.style = var34;
                var34 = 'sm';
                var31.size = var34;
                var30 = var33.bind(var3)(var32, var31);
            case 658:
                var29[1] = var30;
                var18.children = var29;
                var18 = var28.bind(var3)(var27, var18);
                var14.label = var18;
                var28 = _closure1_slot10;
                var27 = _closure1_slot11;
                var18 = {};
                var31 = _closure1_slot9;
                var30 = _closure1_slot0;
                var29 = _closure1_slot2;
                var29 = var29[var23];
                var29 = var30.bind(var3)(var29);
                var30 = var29.FormSubLabel;
                var29 = {};
                var32 = var24.sublabel;
                var29.style = var32;
                var32 = 2;
                var29.numberOfLines = var32;
                var33 = _closure1_slot0;
                var32 = _closure1_slot2;
                var34 = var32[var25];
                var34 = var33.bind(var3)(var34);
                var35 = var34.intl;
                var34 = var35.string;
                var32 = var32[var25];
                var32 = var33.bind(var3)(var32);
                var33 = var32.t;
                if (var26) {
                    _fun80772_ip = 792;
                    continue _fun80772
                }
            case 777:
                var32 = var33.NSTmdO;
                var32 = var34.bind(var35)(var32);
                _fun80772_ip = 805;
                continue _fun80772;
            case 792:
                var33 = var33.IhzZlo;
                var32 = var34.bind(var35)(var33);
            case 805:
                var29.text = var32;
                var30 = var31.bind(var3)(var30, var29);
                var29 = new Array(2);
                var29[0] = var30;
                var30 = !var26;
                if (!var30) {
                    _fun80772_ip = 906;
                    continue _fun80772
                }
            case 829:
                var33 = _closure1_slot9;
                var32 = _closure1_slot5;
                var31 = {};
                var34 = var24.upsellButton;
                var31.style = var34;
                var36 = _closure1_slot9;
                var35 = _closure1_slot1;
                var37 = _closure1_slot2;
                var34 = 19;
                var34 = var37[var34];
                var35 = var35.bind(var3)(var34);
                var34 = {};
                var37 = _closure1_slot7;
                var37 = var37.EDIT_PROFILE_BANNER;
                var34.analyticsObject = var37;
                var34 = var36.bind(var3)(var35, var34);
                var31.children = var34;
                var30 = var33.bind(var3)(var32, var31);
            case 906:
                var29[1] = var30;
                var18.children = var29;
                var18 = var28.bind(var3)(var27, var18);
                var14.subLabel = var18;
                var18 = undefined;
                if (!var26) {
                    _fun80772_ip = 933;
                    continue _fun80772
                }
            case 930:
                var18 = var19;
            case 933:
                var14.onPress = var18;
                var14 = var17.bind(var3)(var15, var14);
                var11[1] = var14;
                if (!var12) {
                    _fun80772_ip = 1119;
                    continue _fun80772
                }
            case 953:
                var15 = _closure1_slot9;
                var18 = _closure1_slot0;
                var17 = _closure1_slot2;
                var13 = var17[var13];
                var13 = var18.bind(var3)(var13);
                var14 = var13.TableRow;
                var13 = {};
                var19 = _closure1_slot9;
                var17 = var17[var23];
                var17 = var18.bind(var3)(var17);
                var18 = var17.FormLabel;
                var17 = {};
                var26 = var24.label;
                var23 = new Array(2);
                var23[0] = var26;
                var24 = var24.remove;
                var23[1] = var24;
                var17.style = var23;
                if (!(var22 == var20)) {
                    _fun80772_ip = 1088;
                    continue _fun80772
                }
            case 1034:
                var24 = _closure1_slot0;
                var21 = _closure1_slot2;
                var22 = var21[var25];
                var22 = var24.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var21[var25];
                var21 = var24.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21.tT9n7D;
                var20 = var22.bind(var23)(var21);
            case 1088:
                var17.text = var20;
                var17 = var19.bind(var3)(var18, var17);
                var13.label = var17;
                var16 = function() {
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var1 = null;
                    var1 = var2.bind(var0)(var1);
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 10;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var13.onPress = var16;
                var12 = var15.bind(var3)(var14, var13);
            case 1119:
                var11[2] = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 5634, 660, 33, 1297, 671, 5777, 3111, 3279, 4012, 5258, 5261, 1234, 5800, 5415, 4900, 5430, 10275, 566, 5774, 7025, 5789, 668, 5637, 10276, 3942, 4086, 10277, 10278, 2]);