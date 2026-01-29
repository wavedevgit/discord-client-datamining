// modules/app_launcher/native/screens/application_view/app/DetailsHeader.tsx
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
    var12 = 1;
    var6 = var5[var12];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot5 = var7;
    var3 = var3.Pressable;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot7 = var7;
    var7 = var3.jsxs;
    var _closure1_slot8 = var7;
    var3 = var3.Fragment;
    var _closure1_slot9 = var3;
    var13 = 4;
    var3 = var5[var13];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 'hidden';
    var9.overflow = var10;
    var3.animatedViewContainer = var9;
    var9 = {
        'position': 'relative',
        'width': '100%'
    };
    var3.container = var9;
    var9 = {
        'width': '100%',
        'position': 'absolute'
    };
    var3.measuringContainer = var9;
    var9 = {};
    var10 = 8;
    var9.marginTop = var10;
    var3.descriptionContainer = var9;
    var9 = {
        'position': 'absolute',
        'top': 0,
        'height': '100%',
        'width': 50,
        'pointerEvents': 'none'
    };
    var3.expandDescriptionCTAGradient = var9;
    var9 = {
        'backgroundColor': null,
        'position': 'absolute',
        'right': 16,
        'bottom': 16,
        'flexDirection': 'row'
    };
    var10 = 5;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.CARD_BACKGROUND_DEFAULT;
    var9.backgroundColor = var14;
    var3.expandDescriptionCTA = var9;
    var9 = {};
    var9.marginTop = var13;
    var3.collapseDescriptionCTA = var9;
    var9 = {
        'display': 'flex',
        'flexDirection': 'row',
        'gap': null,
        'overflow': 'hidden'
    };
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var9.gap = var13;
    var3.nameContainer = var9;
    var9 = {};
    var9.flexShrink = var12;
    var3.nameText = var9;
    var9 = {
        'justifyContent': 'center',
        'paddingVertical': 2
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9.paddingHorizontal = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_BACKGROUND_ACTIVE;
    var9.backgroundColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.lg;
    var9.borderRadius = var10;
    var3.partnerLabelWrapper = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot10 = var3;
    var3 = {};
    var7 = 'function DetailsHeaderTsx1(){const{height}=this.__closure;return{height:height.get()};}';
    var3.code = var7;
    var _closure1_slot11 = var3;
    var3 = {};
    var7 = 'function DetailsHeaderTsx2(){const{runOnJS,setShouldLineClamp}=this.__closure;runOnJS(setShouldLineClamp)(true);}';
    var3.code = var7;
    var _closure1_slot12 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: DetailsHeader, environment: var1
        _fun47737: for (var _fun47737_ip = 0;;) switch (_fun47737_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.application;
                var9 = var0.viewContainerStyle;
                var11 = var0.mainContainerStyle;
                var23 = var0.expandDescriptionCTAStyle;
                var15 = var0.hideName;
                var3 = undefined;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var _closure2_slot14 = var3;
                var _closure2_slot15 = var3;
                var _closure2_slot16 = var3;
                var0 = _closure1_slot10;
                var18 = var0.bind(var3)();
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 7;
                var1 = var5[var0];
                var6 = var2.bind(var3)(var1);
                var1 = var6.isPartnerApplication;
                var25 = var1.bind(var6)(var4);
                var13 = _closure1_slot4;
                var1 = var13.useRef;
                var27 = null;
                var1 = var1.bind(var13)(var27);
                var _closure2_slot0 = var1;
                var6 = var13.useState;
                var21 = false;
                var6 = var6.bind(var13)(var21);
                var10 = _closure1_slot3;
                var19 = 2;
                var7 = var10.bind(var3)(var6, var19);
                var26 = 0;
                var8 = var7[var26];
                var _closure2_slot1 = var8;
                var6 = 1;
                var7 = var7[var6];
                var _closure2_slot2 = var7;
                var7 = var13.useState;
                var7 = var7.bind(var13)(var21);
                var7 = var10.bind(var3)(var7, var19);
                var12 = var7[var26];
                var _closure2_slot3 = var12;
                var7 = var7[var6];
                var _closure2_slot4 = var7;
                var10 = var13.useRef;
                var7 = true;
                var7 = var10.bind(var13)(var7);
                var _closure2_slot5 = var7;
                var7 = function() { // Original name: useContainerAnimation, environment: var20
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 6;
                    var0 = var7[var3];
                    var4 = undefined;
                    var8 = var6.bind(var4)(var0);
                    var1 = var8.useSharedValue;
                    var0 = null;
                    var1 = var1.bind(var8)(var0);
                    var _closure3_slot0 = var1;
                    var0 = {};
                    var3 = var7[var3];
                    var4 = var6.bind(var4)(var3);
                    var3 = var4.useAnimatedStyle;
                    var2 = function() { // Original name: t, environment: var2
                        var0 = {};
                        var2 = _closure3_slot0;
                        var1 = var2.get;
                        var1 = var1.bind(var2)();
                        var0.height = var1;
                        return var0;
                    };
                    var6 = {};
                    var6.height = var1;
                    var2.__closure = var6;
                    var6 = 23826674246.0;
                    var2.__workletHash = var6;
                    var5 = _closure1_slot11;
                    var2.__initData = var5;
                    var2 = var3.bind(var4)(var2);
                    var0.containerStyle = var2;
                    var0.containerHeight = var1;
                    return var0;
                };
                var7 = var7.bind(var3)();
                var13 = var7.containerStyle;
                var7 = var7.containerHeight;
                var _closure2_slot6 = var7;
                var7 = var5[var0];
                var10 = var2.bind(var3)(var7);
                var7 = var10.getSectionName;
                var16 = var7.bind(var10)(var4);
                var0 = var5[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.getSectionDescription;
                var0 = var0.bind(var2)(var4);
                var _closure2_slot7 = var0;
                var10 = var27 != var0;
                if (!var10) {
                    _fun47737_ip = 323;
                    continue _fun47737
                }
            case 304:
                var2 = var0.trim;
                var2 = var2.bind(var0)();
                var2 = var2.length;
                var10 = var2 > var26;
            case 323:
                var4 = _closure1_slot4;
                var2 = var4.useState;
                var4 = var2.bind(var4)(var27);
                var2 = _closure1_slot3;
                var2 = var2.bind(var3)(var4, var19);
                var28 = var2[var26];
                _closure2_slot8 = var28;
                var2 = var2[var6];
                _closure2_slot9 = var2;
                var2 = var18.expandDescriptionCTA;
                var17 = var2.backgroundColor;
                var2 = var27 != var23;
                if (!var2) {
                    _fun47737_ip = 385;
                    continue _fun47737
                }
            case 381:
                var2 = var21 !== var23;
            case 385:
                if (!var2) {
                    _fun47737_ip = 399;
                    continue _fun47737
                }
            case 388:
                var5 = 'object';
                var4 = typeof var23;
                var2 = var5 === var4;
            case 399:
                if (!var2) {
                    _fun47737_ip = 410;
                    continue _fun47737
                }
            case 402:
                var4 = 'backgroundColor';
                var2 = var4 in var23;
            case 410:
                if (!var2) {
                    _fun47737_ip = 429;
                    continue _fun47737
                }
            case 413:
                var4 = var23.backgroundColor;
                var5 = 'string';
                var4 = typeof var4;
                var2 = var5 === var4;
            case 429:
                if (!var2) {
                    _fun47737_ip = 437;
                    continue _fun47737
                }
            case 432:
                var17 = var23.backgroundColor;
            case 437:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 8;
                var5 = var7[var4];
                var22 = var2.bind(var3)(var5);
                var5 = var22.hexOpacityToRgba;
                var5 = var5.bind(var22)(var17, var26);
                var24 = new Array(2);
                var24[0] = var5;
                var4 = var7[var4];
                var5 = var2.bind(var3)(var4);
                var4 = var5.hexOpacityToRgba;
                var4 = var4.bind(var5)(var17, var6);
                var24[1] = var4;
                var17 = _closure1_slot4;
                var4 = var17.useRef;
                var4 = var4.bind(var17)(var26);
                _closure2_slot10 = var4;
                var4 = var17.useRef;
                var4 = var4.bind(var17)(var26);
                _closure2_slot11 = var4;
                var4 = var17.useState;
                var4 = var4.bind(var17)(var21);
                var5 = _closure1_slot3;
                var4 = var5.bind(var3)(var4, var19);
                var35 = var4[var26];
                var4 = var4[var6];
                _closure2_slot12 = var4;
                var4 = var17.useState;
                var4 = var4.bind(var17)(var21);
                var4 = var5.bind(var3)(var4, var19);
                var5 = var4[var26];
                _closure2_slot13 = var5;
                var4 = var4[var6];
                _closure2_slot14 = var4;
                var6 = var17.useMemo;
                var4 = new Array(1);
                var4[0] = var0;
                var0 = function() { // Environment: var20
                    _fun47740: for (var _fun47740_ip = 0;;) switch (_fun47740_ip) {
                        case 0:
                            var2 = _closure2_slot7;
                            var0 = null;
                            var2 = var0 == var2;
                            if (var2) {
                                _fun47740_ip = 56;
                                continue _fun47740
                            }
                        case 16:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 9;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.parseBioReactWithCachedAST;
                            var1 = _closure2_slot7;
                            var0 = var2.bind(var3)(var1);
                        case 56:
                            return var0;
                    }
                };
                var19 = var6.bind(var17)(var0, var4);
                var0 = 10;
                var0 = var7[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.useIsScreenLandscape;
                var21 = var0.bind(var2)();
                _closure2_slot15 = var21;
                var6 = _closure1_slot1;
                var0 = 11;
                var0 = var7[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.bind(var3)(var21);
                _closure2_slot16 = var0;
                var4 = var17.useEffect;
                var2 = new Array(2);
                var2[0] = var21;
                var2[1] = var0;
                var0 = function() { // Environment: var20
                    _fun47741: for (var _fun47741_ip = 0;;) switch (_fun47741_ip) {
                        case 0:
                            var2 = _closure2_slot15;
                            var1 = _closure2_slot16;
                            if (!(var2 !== var1)) {
                                _fun47741_ip = 50;
                                continue _fun47741
                            }
                        case 15:
                            var3 = _closure2_slot14;
                            var2 = undefined;
                            var1 = false;
                            var1 = var3.bind(var2)(var1);
                            var2 = _closure2_slot11;
                            var1 = 0;
                            var2.current = var1;
                            var0 = _closure2_slot10;
                            var0.current = var1;
                        case 50:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var4.bind(var17)(var0, var2);
                var21 = function() { // Original name: handleApplicationDescriptionPress, environment: var20
                    _fun47742: for (var _fun47742_ip = 0;;) switch (_fun47742_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun47742_ip = 304;
                                continue _fun47742
                            }
                        case 13:
                            var1 = _closure2_slot5;
                            var2 = false;
                            var1.current = var2;
                            var1 = _closure2_slot3;
                            if (var1) {
                                _fun47742_ip = 123;
                                continue _fun47742
                            }
                        case 32:
                            var1 = _closure2_slot12;
                            var8 = undefined;
                            var1 = var1.bind(var8)(var2);
                            var3 = _closure2_slot6;
                            var2 = var3.set;
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var1 = 12;
                            var1 = var9[var1];
                            var6 = var7.bind(var8)(var1);
                            var5 = var6.withTiming;
                            var1 = _closure2_slot11;
                            var4 = var1.current;
                            var1 = 13;
                            var1 = var9[var1];
                            var1 = var7.bind(var8)(var1);
                            var1 = var1.timingStandard;
                            var1 = var5.bind(var6)(var4, var1);
                            var1 = var2.bind(var3)(var1);
                            _fun47742_ip = 286;
                            continue _fun47742;
                        case 123:
                            var3 = _closure2_slot6;
                            var2 = var3.set;
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var4 = 12;
                            var4 = var13[var4];
                            var11 = undefined;
                            var8 = var12.bind(var11)(var4);
                            var7 = var8.withTiming;
                            var4 = _closure2_slot10;
                            var6 = var4.current;
                            var4 = 13;
                            var4 = var13[var4];
                            var4 = var12.bind(var11)(var4);
                            var16 = var4.timingStandard;
                            var4 = function() { // Original name: t, environment: var4
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 6;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.runOnJS;
                                var1 = _closure2_slot12;
                                var2 = var2.bind(var3)(var1);
                                var1 = true;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var9 = {};
                            var10 = 6;
                            var10 = var13[var10];
                            var10 = var12.bind(var11)(var10);
                            var10 = var10.runOnJS;
                            var9.runOnJS = var10;
                            var10 = _closure2_slot12;
                            var9.setShouldLineClamp = var10;
                            var4.__closure = var9;
                            var9 = 6050776164847.0;
                            var4.__workletHash = var9;
                            var1 = _closure1_slot12;
                            var4.__initData = var1;
                            var15 = 'respect-motion-settings';
                            var18 = var8;
                            var17 = var6;
                            var14 = var4;
                            var1 = var18[var7](var17, var16, var15, var14, var13);
                            var1 = var2.bind(var3)(var1);
                        case 286:
                            var2 = _closure2_slot4;
                            var0 = _closure2_slot3;
                            var1 = !var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 304:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = 14;
                var0 = var7[var0];
                var0 = var6.bind(var3)(var0);
                var34 = var0.bind(var3)(var1);
                var2 = _closure1_slot8;
                var1 = _closure1_slot9;
                var0 = {};
                var4 = 6;
                var4 = var7[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.View;
                var4 = {};
                var17 = var18.animatedViewContainer;
                var7 = new Array(3);
                var7[0] = var17;
                var7[1] = var13;
                var7[2] = var9;
                var4.style = var7;
                var9 = _closure1_slot5;
                var7 = {};
                var17 = var18.container;
                var13 = new Array(2);
                var13[0] = var17;
                var13[1] = var11;
                var7.style = var13;
                var13 = function(arg0) { // Original name: onLayout, environment: var20
                    _fun47744: for (var _fun47744_ip = 0;;) switch (_fun47744_ip) {
                        case 0:
                            var1 = _closure2_slot13;
                            if (var1) {
                                _fun47744_ip = 110;
                                continue _fun47744
                            }
                        case 10:
                            var1 = arg0;
                            var1 = var1.nativeEvent;
                            var1 = var1.layout;
                            var2 = var1.height;
                            var1 = _closure2_slot10;
                            var1.current = var2;
                            var3 = _closure2_slot6;
                            var2 = var3.set;
                            var1 = _closure2_slot10;
                            var1 = var1.current;
                            var1 = var2.bind(var3)(var1);
                            var1 = _closure2_slot11;
                            var1 = var1.current;
                            var3 = 0;
                            var1 = var1 > var3;
                            if (!var1) {
                                _fun47744_ip = 94;
                                continue _fun47744
                            }
                        case 81:
                            var2 = _closure2_slot10;
                            var2 = var2.current;
                            var1 = var2 > var3;
                        case 94:
                            if (!var1) {
                                _fun47744_ip = 110;
                                continue _fun47744
                            }
                        case 97:
                            var2 = _closure2_slot14;
                            var1 = undefined;
                            var0 = true;
                            var0 = var2.bind(var1)(var0);
                        case 110:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7.onLayout = var13;
                var13 = {};
                var17 = var18.nameContainer;
                var13.style = var17;
                var22 = !var15;
                if (!var22) {
                    _fun47737_ip = 898;
                    continue _fun47737
                }
            case 833:
                var30 = _closure1_slot7;
                var29 = _closure1_slot0;
                var31 = _closure1_slot2;
                var17 = 15;
                var17 = var31[var17];
                var17 = var29.bind(var3)(var17);
                var29 = var17.Text;
                var17 = {
                    'style': null,
                    'variant': 'heading-lg/bold',
                    'color': 'text-default',
                    'lineClamp': 1
                };
                var31 = var18.nameText;
                var17.style = var31;
                var17.children = var16;
                var22 = var30.bind(var3)(var29, var17);
            case 898:
                var17 = new Array(2);
                var17[0] = var22;
                var22 = null;
                if (!var25) {
                    _fun47737_ip = 1042;
                    continue _fun47737
                }
            case 914:
                var30 = _closure1_slot7;
                var29 = _closure1_slot5;
                var25 = {};
                var31 = var18.partnerLabelWrapper;
                var25.style = var31;
                var38 = _closure1_slot0;
                var39 = _closure1_slot2;
                var31 = 15;
                var31 = var39[var31];
                var31 = var38.bind(var3)(var31);
                var32 = var31.Text;
                var31 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var33 = 16;
                var36 = var39[var33];
                var36 = var38.bind(var3)(var36);
                var37 = var36.intl;
                var36 = var37.string;
                var33 = var39[var33];
                var33 = var38.bind(var3)(var33);
                var33 = var33.t;
                var33 = var33.LO4f0P;
                var33 = var36.bind(var37)(var33);
                var31.children = var33;
                var31 = var30.bind(var3)(var32, var31);
                var25.children = var31;
                var22 = var30.bind(var3)(var29, var25);
            case 1042:
                var17[1] = var22;
                var13.children = var17;
                var17 = var2.bind(var3)(var9, var13);
                var13 = new Array(2);
                var13[0] = var17;
                var17 = var10;
                if (!var10) {
                    _fun47737_ip = 1319;
                    continue _fun47737
                }
            case 1073:
                var29 = _closure1_slot8;
                var25 = _closure1_slot6;
                var22 = {};
                var30 = !var15;
                if (!var30) {
                    _fun47737_ip = 1095;
                    continue _fun47737
                }
            case 1089:
                var30 = var18.descriptionContainer;
            case 1095:
                var22.style = var30;
                var22.onPress = var21;
                var32 = _closure1_slot7;
                var31 = _closure1_slot0;
                var30 = _closure1_slot2;
                var33 = 15;
                var30 = var30[var33];
                var30 = var31.bind(var3)(var30);
                var31 = var30.Text;
                var30 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                if (var35) {
                    _fun47737_ip = 1158;
                    continue _fun47737
                }
            case 1149:
                var35 = var27 == var34;
                var34 = undefined;
                if (!var35) {
                    _fun47737_ip = 1161;
                    continue _fun47737
                }
            case 1158:
                var34 = 3;
            case 1161:
                var30.lineClamp = var34;
                var30.children = var19;
                var31 = var32.bind(var3)(var31, var30);
                var30 = new Array(2);
                var30[0] = var31;
                var31 = var8;
                if (!var8) {
                    _fun47737_ip = 1305;
                    continue _fun47737
                }
            case 1190:
                var32 = null;
                if (!var12) {
                    _fun47737_ip = 1302;
                    continue _fun47737
                }
            case 1195:
                var35 = _closure1_slot7;
                var39 = _closure1_slot0;
                var40 = _closure1_slot2;
                var33 = var40[var33];
                var33 = var39.bind(var3)(var33);
                var34 = var33.Text;
                var33 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-brand'
                };
                var36 = var18.collapseDescriptionCTA;
                var33.style = var36;
                var36 = 16;
                var37 = var40[var36];
                var37 = var39.bind(var3)(var37);
                var38 = var37.intl;
                var37 = var38.string;
                var36 = var40[var36];
                var36 = var39.bind(var3)(var36);
                var36 = var36.t;
                var36 = var36.D5xGUK;
                var36 = var37.bind(var38)(var36);
                var33.children = var36;
                var32 = var35.bind(var3)(var34, var33);
            case 1302:
                var31 = var32;
            case 1305:
                var30[1] = var31;
                var22.children = var30;
                var17 = var29.bind(var3)(var25, var22);
            case 1319:
                var13[1] = var17;
                var7.children = var13;
                var9 = var2.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                if (!var8) {
                    _fun47737_ip = 1688;
                    continue _fun47737
                }
            case 1347:
                var9 = null;
                if (var12) {
                    _fun47737_ip = 1685;
                    continue _fun47737
                }
            case 1355:
                var17 = _closure1_slot8;
                var13 = _closure1_slot6;
                var12 = {};
                var25 = var18.expandDescriptionCTA;
                var22 = new Array(2);
                var22[0] = var25;
                var22[1] = var23;
                var12.style = var22;
                var12.onPress = var21;
                var21 = 'button';
                var12.accessibilityRole = var21;
                var23 = _closure1_slot7;
                var22 = _closure1_slot1;
                var30 = _closure1_slot2;
                var21 = 17;
                var21 = var30[var21];
                var22 = var22.bind(var3)(var21);
                var21 = {};
                var29 = _closure1_slot0;
                var25 = 18;
                var31 = var30[var25];
                var31 = var29.bind(var3)(var31);
                var31 = var31.HorizontalGradient;
                var31 = var31.START;
                var21.start = var31;
                var25 = var30[var25];
                var25 = var29.bind(var3)(var25);
                var25 = var25.HorizontalGradient;
                var25 = var25.END;
                var21.end = var25;
                var21.colors = var24;
                var25 = var18.expandDescriptionCTAGradient;
                var24 = new Array(2);
                var24[0] = var25;
                var25 = {};
                var27 = var27 == var28;
                var26 = 0;
                if (var27) {
                    _fun47737_ip = 1518;
                    continue _fun47737
                }
            case 1511:
                var27 = 5;
                var26 = var28 - var27;
            case 1518:
                var25.right = var26;
                var24[1] = var25;
                var21.style = var24;
                var22 = var23.bind(var3)(var22, var21);
                var21 = new Array(2);
                var21[0] = var22;
                var24 = _closure1_slot8;
                var28 = _closure1_slot0;
                var29 = _closure1_slot2;
                var22 = 15;
                var22 = var29[var22];
                var22 = var28.bind(var3)(var22);
                var23 = var22.Text;
                var22 = {
                    'onLayout': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-brand'
                };
                var25 = function(arg0) { // Original name: onLayout, environment: var20
                    _fun47745: for (var _fun47745_ip = 0;;) switch (_fun47745_ip) {
                        case 0:
                            var2 = _closure2_slot8;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun47745_ip = 44;
                                continue _fun47745
                            }
                        case 13:
                            var2 = _closure2_slot9;
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var0 = var0.layout;
                            var1 = var0.width;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 44:
                            var0 = undefined;
                            return var0;
                    }
                };
                var22.onLayout = var25;
                var25 = 16;
                var26 = var29[var25];
                var26 = var28.bind(var3)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var25 = var29[var25];
                var25 = var28.bind(var3)(var25);
                var25 = var25.t;
                var25 = var25["OBCR+p"];
                var26 = var26.bind(var27)(var25);
                var25 = ['… '];
                var25[1] = var26;
                var22.children = var25;
                var22 = var24.bind(var3)(var23, var22);
                var21[1] = var22;
                var12.children = var21;
                var9 = var17.bind(var3)(var13, var12);
            case 1685:
                var8 = var9;
            case 1688:
                var7[1] = var8;
                var4.children = var7;
                var6 = var2.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var5 = !var5;
                if (!var5) {
                    _fun47737_ip = 2072;
                    continue _fun47737
                }
            case 1719:
                var8 = _closure1_slot8;
                var7 = _closure1_slot5;
                var6 = {};
                var9 = new Array(3);
                var9[0] = var11;
                var11 = var18.measuringContainer;
                var9[1] = var11;
                var11 = {
                    'opacity': 0,
                    'pointerEvents': 'none'
                };
                var9[2] = var11;
                var6.style = var9;
                var9 = function(arg0) { // Original name: onLayout, environment: var20
                    _fun47746: for (var _fun47746_ip = 0;;) switch (_fun47746_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var0 = var0.layout;
                            var2 = var0.height;
                            var1 = _closure2_slot11;
                            var1.current = var2;
                            var1 = _closure2_slot11;
                            var1 = var1.current;
                            var3 = 0;
                            var1 = var1 > var3;
                            if (!var1) {
                                _fun47746_ip = 64;
                                continue _fun47746
                            }
                        case 51:
                            var2 = _closure2_slot10;
                            var2 = var2.current;
                            var1 = var2 > var3;
                        case 64:
                            if (!var1) {
                                _fun47746_ip = 80;
                                continue _fun47746
                            }
                        case 67:
                            var2 = _closure2_slot14;
                            var1 = undefined;
                            var0 = true;
                            var0 = var2.bind(var1)(var0);
                        case 80:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6.onLayout = var9;
                var11 = !var15;
                if (!var11) {
                    _fun47737_ip = 1838;
                    continue _fun47737
                }
            case 1785:
                var13 = _closure1_slot7;
                var12 = _closure1_slot0;
                var17 = _closure1_slot2;
                var9 = 15;
                var9 = var17[var9];
                var9 = var12.bind(var3)(var9);
                var12 = var9.Text;
                var9 = {
                    'variant': 'heading-lg/bold',
                    'color': 'text-default'
                };
                var9.children = var16;
                var11 = var13.bind(var3)(var12, var9);
            case 1838:
                var9 = new Array(2);
                var9[0] = var11;
                if (!var10) {
                    _fun47737_ip = 2058;
                    continue _fun47737
                }
            case 1852:
                var13 = _closure1_slot8;
                var12 = _closure1_slot5;
                var11 = {};
                var15 = !var15;
                if (!var15) {
                    _fun47737_ip = 1874;
                    continue _fun47737
                }
            case 1868:
                var15 = var18.descriptionContainer;
            case 1874:
                var11.style = var15;
                var17 = _closure1_slot7;
                var21 = _closure1_slot0;
                var22 = _closure1_slot2;
                var15 = 15;
                var14 = var22[var15];
                var14 = var21.bind(var3)(var14);
                var16 = var14.Text;
                var14 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var20 = function(arg0) { // Original name: onTextLayout, environment: var20
                    _fun47747: for (var _fun47747_ip = 0;;) switch (_fun47747_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var0 = var0.lines;
                            var2 = var0.length;
                            var1 = _closure2_slot0;
                            var3 = var1.current;
                            var1 = null;
                            if (!(var1 == var3)) {
                                _fun47747_ip = 48;
                                continue _fun47747
                            }
                        case 38:
                            var1 = _closure2_slot0;
                            var1.current = var2;
                        case 48:
                            var1 = 3;
                            if (!(var2 > var1)) {
                                _fun47747_ip = 77;
                                continue _fun47747
                            }
                        case 55:
                            var3 = _closure2_slot12;
                            var2 = undefined;
                            var1 = true;
                            var3 = var3.bind(var2)(var1);
                            var0 = _closure2_slot2;
                            var0 = var0.bind(var2)(var1);
                        case 77:
                            var0 = undefined;
                            return var0;
                    }
                };
                var14.onTextLayout = var20;
                var14.children = var19;
                var16 = var17.bind(var3)(var16, var14);
                var14 = new Array(2);
                var14[0] = var16;
                var15 = var22[var15];
                var15 = var21.bind(var3)(var15);
                var16 = var15.Text;
                var15 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-brand'
                };
                var18 = var18.collapseDescriptionCTA;
                var15.style = var18;
                var18 = 16;
                var19 = var22[var18];
                var19 = var21.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var22[var18];
                var18 = var21.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.D5xGUK;
                var18 = var19.bind(var20)(var18);
                var15.children = var18;
                var15 = var17.bind(var3)(var16, var15);
                var14[1] = var15;
                var11.children = var14;
                var10 = var13.bind(var3)(var12, var11);
            case 2058:
                var9[1] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 2072:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/screens/application_view/app/DetailsHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 3677, 4629, 3199, 5318, 5319, 5261, 4050, 4837, 4691, 3895, 1234, 4051, 670, 2]);