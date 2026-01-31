// modules/premium/native/gifting/PremiumGiftPlanSelect.tsx
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
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot6 = var7;
    var3 = var3.ScrollView;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.PremiumTypes;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VerticalGradient;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot10 = var7;
    var7 = var3.Fragment;
    var _closure1_slot11 = var7;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var7 = var6.TIER_2;
    var3 = new Array(2);
    var3[0] = var7;
    var6 = var6.TIER_0;
    var3[1] = var6;
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0, arg1) { // Environment: var1
        var6 = arg0;
        var8 = arg1;
        var0 = {};
        var1 = {};
        var9 = 'absolute';
        var1.position = var9;
        var1.width = var6;
        var2 = 0.1;
        var3 = var2 * var8;
        var1.height = var3;
        var7 = 1.75;
        var3 = var8 / var7;
        var2 = var2 * var8;
        var2 = var3 - var2;
        var1.top = var2;
        var0.headerBackground = var1;
        var1 = {};
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 9;
        var10 = var5[var2];
        var3 = undefined;
        var10 = var4.bind(var3)(var10);
        var10 = var10.colors;
        var10 = var10.BACKGROUND_BASE_LOW;
        var1.color = var10;
        var0.headerBackgroundColor = var1;
        var1 = {};
        var1.position = var9;
        var1.width = var6;
        var7 = var8 / var7;
        var1.height = var7;
        var0.headerImageContainer = var1;
        var1 = {};
        var1.width = var6;
        var0.headerImage = var1;
        var1 = {};
        var1.width = var6;
        var6 = 10;
        var6 = var5[var6];
        var7 = var4.bind(var3)(var6);
        var6 = '#000000';
        var8 = var7.bind(var3)(var6);
        var7 = var8.alpha;
        var6 = 0.8;
        var7 = var7.bind(var8)(var6);
        var6 = var7.hex;
        var6 = var6.bind(var7)();
        var1.backgroundColor = var6;
        var0.headerOverlay = var1;
        var1 = {};
        var6 = 'center';
        var1.alignSelf = var6;
        var0.avatar = var1;
        var1 = {};
        var1.textAlign = var6;
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_12;
        var1.marginTop = var7;
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_24;
        var1.marginHorizontal = var7;
        var0.title = var1;
        var1 = {};
        var1.textAlign = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_12;
        var1.marginTop = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_24;
        var1.marginHorizontal = var6;
        var0.description = var1;
        var1 = {};
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.spacing;
        var2 = var2.PX_32;
        var1.marginTop = var2;
        var0.carousel = var1;
        var1 = {};
        var2 = 0;
        var1.marginBottom = var2;
        var0.pagination = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = {};
    var6 = 'function PremiumGiftPlanSelectTsx1(){const{STANDARD_EASING,withTiming,carouselVisibility}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:500};return{opacity:withTiming(carouselVisibility.get()?1:0,animationSettings),transform:[{translateY:withTiming(carouselVisibility.get()?0:100,animationSettings)}]};}';
    var3.code = var6;
    var _closure1_slot15 = var3;
    var3 = 33;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/gifting/PremiumGiftPlanSelect.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun74644: for (var _fun74644_ip = 0;;) switch (_fun74644_ip) {
            case 0:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 11;
                var0 = var10[var0];
                var3 = undefined;
                var1 = var9.bind(var3)(var0);
                var0 = var1.useNavigation;
                var18 = var0.bind(var1)();
                var _closure2_slot0 = var18;
                var0 = 12;
                var0 = var10[var0];
                var1 = var9.bind(var3)(var0);
                var0 = var1.useHeaderHeight;
                var16 = var0.bind(var1)();
                var1 = _closure1_slot1;
                var0 = 13;
                var0 = var10[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var27 = var0.width;
                var _closure2_slot1 = var27;
                var2 = var0.height;
                var0 = 14;
                var0 = var10[var0];
                var1 = var9.bind(var3)(var0);
                var0 = var1.useNativeGiftContext;
                var0 = var0.bind(var1)();
                var36 = var0.recipientUser;
                var17 = var0.setPremiumType;
                var _closure2_slot2 = var17;
                var13 = var0.claimableRewards;
                var _closure2_slot3 = var13;
                var6 = var0.recipientUserId;
                var _closure2_slot4 = var6;
                var7 = var0.planInterval;
                var _closure2_slot5 = var7;
                var0 = var0.setOrder;
                var _closure2_slot6 = var0;
                var1 = 15;
                var1 = var10[var1];
                var8 = var9.bind(var3)(var1);
                var5 = var8.useStateFromStores;
                var1 = _closure1_slot8;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var24
                    var1 = _closure1_slot8;
                    var0 = var1.getGiftPromotionRewardSkuIds;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var12 = var5.bind(var8)(var4, var1);
                var1 = 16;
                var1 = var10[var1];
                var5 = var9.bind(var3)(var1);
                var4 = var5.useCreateOrReuseGiftOrder;
                var1 = 'PremiumGiftPlanSelect';
                var8 = var4.bind(var5)(var1);
                var _closure2_slot7 = var8;
                var1 = _closure1_slot14;
                var20 = var1.bind(var3)(var27, var2);
                var _closure2_slot8 = var20;
                var4 = _closure1_slot5;
                var1 = var4.useState;
                var14 = 0;
                var1 = var1.bind(var4)(var14);
                var15 = _closure1_slot4;
                var11 = 2;
                var1 = var15.bind(var3)(var1, var11);
                var21 = var1[var14];
                var _closure2_slot9 = var21;
                var2 = 1;
                var19 = var1[var2];
                var1 = var4.useState;
                var23 = false;
                var1 = var1.bind(var4)(var23);
                var1 = var15.bind(var3)(var1, var11);
                var5 = var1[var14];
                var1 = var1[var2];
                var _closure2_slot10 = var1;
                var26 = var4.useEffect;
                var25 = new Array(1);
                var25[0] = var18;
                var1 = function() { // Environment: var24
                    var4 = _closure2_slot0;
                    var3 = var4.addListener;
                    var2 = 'state';
                    var1 = function() { // Environment: var0
                        var2 = _closure2_slot0;
                        var0 = var2.getState;
                        var0 = var0.bind(var2)();
                        var2 = var0.routes;
                        var0 = var0.index;
                        var0 = var2[var0];
                        var2 = _closure2_slot10;
                        var3 = var0.name;
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 17;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var4.bind(var0)(var1);
                        var1 = var1.PremiumGiftScreens;
                        var1 = var1.PLAN_SELECT;
                        var1 = var3 === var1;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var3 = _closure2_slot0;
                        var2 = var3.removeListener;
                        var1 = _closure3_slot0;
                        var0 = 'state';
                        var0 = var2.bind(var3)(var0, var1);
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var1 = var26.bind(var4)(var1, var25);
                var1 = var4.useState;
                var25 = null;
                var1 = var1.bind(var4)(var25);
                var1 = var15.bind(var3)(var1, var11);
                var26 = var1[var14];
                var _closure2_slot11 = var26;
                var1 = var1[var2];
                var _closure2_slot12 = var1;
                var11 = var4.useRef;
                var2 = new Array(0);
                var15 = var11.bind(var4)(var2);
                var _closure2_slot13 = var15;
                var11 = var4.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var24
                    _fun74649: for (var _fun74649_ip = 0;;) switch (_fun74649_ip) {
                        case 0:
                            var1 = _closure2_slot13;
                            var1 = var1.current;
                            var2 = var1.length;
                            var1 = _closure1_slot13;
                            var1 = var1.length;
                            if (!(var2 >= var1)) {
                                _fun74649_ip = 112;
                                continue _fun74649
                            }
                        case 33:
                            var1 = global;
                            var4 = var1.Math;
                            var3 = var4.max;
                            var2 = _closure2_slot13;
                            var8 = var2.current;
                            var2 = new Array(0);
                            var7 = 0;
                            var9 = var2;
                            var5 = arraySpread(var9, var8, var7);
                            var9 = var3;
                            var8 = var2;
                            var7 = var4;
                            var2 = apply(var9, var8, var7);
                            var3 = var1.Number;
                            var1 = var3.isNaN;
                            var1 = var1.bind(var3)(var2);
                            if (var1) {
                                _fun74649_ip = 112;
                                continue _fun74649
                            }
                        case 101:
                            var1 = _closure2_slot12;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 112:
                            var0 = undefined;
                            return var0;
                    }
                };
                var11 = var11.bind(var4)(var1, var2);
                var _closure2_slot14 = var11;
                var2 = var4.useCallback;
                var1 = new Array(12);
                var1[0] = var18;
                var1[1] = var27;
                var1[2] = var17;
                var1[3] = var15;
                var1[4] = var11;
                var1[5] = var26;
                var1[6] = var21;
                var1[7] = var13;
                var1[8] = var8;
                var1[9] = var7;
                var1[10] = var6;
                var1[11] = var0;
                var0 = function(arg0) { // Environment: var24
                    _fun74650: for (var _fun74650_ip = 0;;) switch (_fun74650_ip) {
                        case 0:
                            var0 = arg0;
                            var10 = var0.item;
                            var _closure3_slot0 = var10;
                            var6 = var0.index;
                            var _closure3_slot1 = var6;
                            var3 = _closure1_slot10;
                            var2 = _closure1_slot6;
                            var1 = {};
                            var0 = _closure2_slot9;
                            var0 = var0 !== var6;
                            var1['aria-hidden'] = var0;
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 18;
                            var4 = var4[var0];
                            var0 = undefined;
                            var5 = var5.bind(var0)(var4);
                            var4 = {};
                            var4.premiumType = var10;
                            var10 = _closure1_slot3;
                            var9 = function*() { // Environment: var8
                                var0 = function*() { // Original name: ?anon_0_, environment: var0
                                    _fun74652: for (var _fun74652_ip = 0;;) switch (_fun74652_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun74652_ip = 317;
                                                continue _fun74652
                                            }
                                        case 10:
                                            var8 = undefined;
                                            var3 = undefined;
                                            var6 = undefined;
                                            var1 = _closure2_slot2;
                                            var9 = _closure3_slot0;
                                            var1 = var1.bind(var8)(var9);
                                            var5 = _closure1_slot0;
                                            var7 = _closure1_slot2;
                                            var1 = 19;
                                            var1 = var7[var1];
                                            var7 = var5.bind(var8)(var1);
                                            var5 = var7.getPlanIdForPremiumType;
                                            var1 = _closure2_slot5;
                                            var6 = var5.bind(var7)(var9, var1);
                                        case 74: // try_start_0
                                            var5 = _closure2_slot7;
                                            var1 = {};
                                            var1.planId = var6;
                                            var6 = _closure2_slot4;
                                            var1.recipientUserId = var6;
                                            var1 = var5.bind(var8)(var1);
                                            SaveGenerator(address = 103);
                                        case 101:
                                            return var1;
                                        case 103:
                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                            if (var5) {
                                                _fun74652_ip = 171;
                                                continue _fun74652
                                            }
                                        case 109:
                                            var3 = var1;
                                        case 112: // try_end0
                                            var5 = _closure2_slot6;
                                            var3 = var5.bind(var8)(var3);
                                            var5 = _closure2_slot0;
                                            var3 = var5.navigate;
                                            var6 = _closure1_slot0;
                                            var7 = _closure1_slot2;
                                            var2 = 17;
                                            var2 = var7[var2];
                                            var2 = var6.bind(var8)(var2);
                                            var2 = var2.PremiumGiftScreens;
                                            var2 = var2.CUSTOMIZATION;
                                            var2 = var3.bind(var5)(var2);
                                            return var8;
                                        case 171:
                                            return var1;
                                        case 174: // catch_target0
                                            CatchBlockStart(arg_register = 1);
                                            var2 = _closure1_slot1;
                                            var9 = _closure1_slot2;
                                            var1 = 20;
                                            var1 = var9[var1];
                                            var3 = var2.bind(var8)(var1);
                                            var2 = var3.show;
                                            var1 = {};
                                            var7 = _closure1_slot0;
                                            var4 = 21;
                                            var5 = var9[var4];
                                            var5 = var7.bind(var8)(var5);
                                            var10 = var5.intl;
                                            var6 = var10.string;
                                            var5 = var9[var4];
                                            var5 = var7.bind(var8)(var5);
                                            var5 = var5.t;
                                            var5 = var5.R0RpRX;
                                            var5 = var6.bind(var10)(var5);
                                            var1.title = var5;
                                            var5 = var9[var4];
                                            var5 = var7.bind(var8)(var5);
                                            var6 = var5.intl;
                                            var5 = var6.string;
                                            var4 = var9[var4];
                                            var4 = var7.bind(var8)(var4);
                                            var4 = var4.t;
                                            var4 = var4.CKsXk3;
                                            var4 = var5.bind(var6)(var4);
                                            var1.body = var4;
                                            var1 = var2.bind(var3)(var1);
                                            var1 = undefined;
                                            return var1;
                                        case 317:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var9 = var10.bind(var0)(var9);
                            var4.onPress = var9;
                            var9 = {};
                            var11 = _closure2_slot11;
                            var10 = null;
                            var11 = var10 != var11;
                            var10 = undefined;
                            if (!var11) {
                                _fun74650_ip = 122;
                                continue _fun74650
                            }
                        case 118:
                            var10 = _closure2_slot11;
                        case 122:
                            var9.height = var10;
                            var10 = 'center';
                            var9.alignSelf = var10;
                            var11 = _closure2_slot1;
                            var10 = 0.86;
                            var10 = var10 * var11;
                            var9.width = var10;
                            var4.style = var9;
                            var8 = function arg0() {
                                _fun74653: for (var _fun74653_ip = 0;;) switch (_fun74653_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var0 = var0.nativeEvent;
                                        var0 = var0.layout;
                                        var6 = var0.height;
                                        var5 = 0;
                                        if (!(var6 > var5)) {
                                            _fun74653_ip = 101;
                                            continue _fun74653
                                        }
                                    case 26:
                                        var7 = _closure2_slot13;
                                        var3 = var7.current;
                                        var2 = _closure3_slot1;
                                        var1 = global;
                                        var4 = var1.Math;
                                        var1 = var4.max;
                                        var7 = var7.current;
                                        var7 = var7[var2];
                                        var8 = null;
                                        var8 = var8 != var7;
                                        var5 = 0;
                                        if (!var8) {
                                            _fun74653_ip = 81;
                                            continue _fun74653
                                        }
                                    case 78:
                                        var5 = var7;
                                    case 81:
                                        var1 = var1.bind(var4)(var6, var5);
                                        var3[var2] = var1;
                                        var1 = _closure2_slot14;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)();
                                    case 101:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var4.onLayout = var8;
                            var8 = _closure2_slot3;
                            var4.claimableRewards = var8;
                            var7 = _closure2_slot9;
                            var7 = var7 === var6;
                            var4.isSelected = var7;
                            var4 = var3.bind(var0)(var5, var4, var6);
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var28 = var2.bind(var4)(var0, var1);
                var0 = 22;
                var1 = var10[var0];
                var2 = var9.bind(var3)(var1);
                var1 = var2.useSharedValue;
                var7 = var1.bind(var2)(var23);
                var _closure2_slot15 = var7;
                var6 = var4.useEffect;
                var2 = new Array(2);
                var2[0] = var7;
                var2[1] = var26;
                var1 = function() { // Environment: var24
                    var2 = _closure2_slot15;
                    var1 = var2.set;
                    var3 = _closure2_slot11;
                    var0 = null;
                    var0 = var0 != var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var4)(var1, var2);
                var0 = var10[var0];
                var2 = var9.bind(var3)(var0);
                var1 = var2.useAnimatedStyle;
                var0 = function() {
                    _fun74655: for (var _fun74655_ip = 0;;) switch (_fun74655_ip) {
                        case 0:
                            var5 = {};
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 23;
                            var0 = var1[var0];
                            var7 = undefined;
                            var0 = var2.bind(var7)(var0);
                            var0 = var0.STANDARD_EASING;
                            var5.easing = var0;
                            var0 = 500;
                            var5.duration = var0;
                            var0 = {};
                            var8 = 24;
                            var1 = var1[var8];
                            var9 = var2.bind(var7)(var1);
                            var4 = var9.withTiming;
                            var6 = _closure2_slot15;
                            var2 = var6.get;
                            var10 = var2.bind(var6)();
                            var2 = 0;
                            if (!var10) {
                                _fun74655_ip = 91;
                                continue _fun74655
                            }
                        case 88:
                            var2 = 1;
                        case 91:
                            var2 = var4.bind(var9)(var2, var5);
                            var0.opacity = var2;
                            var2 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var8];
                            var4 = var4.bind(var7)(var3);
                            var3 = var4.withTiming;
                            var7 = _closure2_slot15;
                            var1 = var7.get;
                            var7 = var1.bind(var7)();
                            var1 = 100;
                            if (!var7) {
                                _fun74655_ip = 146;
                                continue _fun74655
                            }
                        case 144:
                            var1 = 0;
                        case 146:
                            var1 = var3.bind(var4)(var1, var5);
                            var2.translateY = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var6 = {};
                var8 = 23;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.STANDARD_EASING;
                var6.STANDARD_EASING = var8;
                var8 = 24;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.withTiming;
                var6.withTiming = var8;
                var6.carouselVisibility = var7;
                var0.__closure = var6;
                var6 = 2946262965957.0;
                var0.__workletHash = var6;
                var6 = _closure1_slot15;
                var0.__initData = var6;
                var30 = var1.bind(var2)(var0);
                var2 = var4.useMemo;
                var1 = new Array(1);
                var1[0] = var20;
                var0 = function() { // Environment: var24
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 10;
                    var0 = var5[var2];
                    var3 = undefined;
                    var6 = var4.bind(var3)(var0);
                    var1 = _closure2_slot8;
                    var0 = var1.headerBackgroundColor;
                    var0 = var0.color;
                    var7 = var6.bind(var3)(var0);
                    var6 = var7.alpha;
                    var0 = 0;
                    var6 = var6.bind(var7)(var0);
                    var0 = var6.hex;
                    var6 = var0.bind(var6)();
                    var0 = new Array(2);
                    var0[0] = var6;
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var1 = var1.headerBackgroundColor;
                    var1 = var1.color;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.alpha;
                    var1 = 1;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.hex;
                    var1 = var1.bind(var2)();
                    var0[1] = var1;
                    return var0;
                };
                var8 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot12;
                var1 = _closure1_slot11;
                var0 = {};
                if (!var5) {
                    _fun74644_ip = 768;
                    continue _fun74644
                }
            case 724:
                var7 = _closure1_slot10;
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 25;
                var4 = var9[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {
                    'animated': true,
                    'barStyle': 'light-content'
                };
                var5 = var7.bind(var3)(var6, var4);
            case 768:
                var4 = new Array(5);
                var4[0] = var5;
                var7 = _closure1_slot10;
                var17 = _closure1_slot1;
                var18 = _closure1_slot2;
                var5 = 26;
                var5 = var18[var5];
                var6 = var17.bind(var3)(var5);
                var5 = {};
                var9 = 'cover';
                var5.resizeMode = var9;
                var10 = var20.headerImageContainer;
                var9 = new Array(2);
                var9[0] = var10;
                var10 = var20.headerImage;
                var9[1] = var10;
                var5.style = var9;
                var9 = 27;
                var9 = var18[var9];
                var9 = var17.bind(var3)(var9);
                var5.source = var9;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var10 = _closure1_slot6;
                var5 = {};
                var9 = var20.headerImageContainer;
                var6 = new Array(2);
                var6[0] = var9;
                var9 = var20.headerOverlay;
                var6[1] = var9;
                var5.style = var6;
                var5 = var7.bind(var3)(var10, var5);
                var4[2] = var5;
                var5 = 28;
                var5 = var18[var5];
                var6 = var17.bind(var3)(var5);
                var5 = {};
                var9 = var20.headerBackground;
                var5.style = var9;
                var9 = _closure1_slot9;
                var11 = var9.START;
                var5.start = var11;
                var9 = var9.END;
                var5.end = var9;
                var5.colors = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var6 = _closure1_slot7;
                var5 = {};
                var9 = _closure1_slot12;
                var8 = {};
                var15 = {};
                var11 = 9;
                var11 = var18[var11];
                var11 = var17.bind(var3)(var11);
                var11 = var11.spacing;
                var11 = var11.PX_12;
                var11 = var16 + var11;
                var15.paddingTop = var11;
                var11 = new Array(1);
                var11[0] = var15;
                var8.style = var11;
                var15 = var25 != var36;
                if (!var15) {
                    _fun74644_ip = 1114;
                    continue _fun74644
                }
            case 1035:
                var17 = _closure1_slot10;
                var16 = _closure1_slot1;
                var31 = _closure1_slot2;
                var18 = 29;
                var11 = var31[var18];
                var16 = var16.bind(var3)(var11);
                var11 = {};
                var29 = var20.avatar;
                var11.style = var29;
                var11.guildId = var3;
                var29 = _closure1_slot0;
                var18 = var31[var18];
                var18 = var29.bind(var3)(var18);
                var18 = var18.AvatarSizes;
                var18 = var18.XLARGE;
                var11.size = var18;
                var11.user = var36;
                var15 = var17.bind(var3)(var16, var11);
            case 1114:
                var11 = new Array(4);
                var11[0] = var15;
                var18 = _closure1_slot10;
                var17 = _closure1_slot0;
                var16 = _closure1_slot2;
                var15 = 30;
                var16 = var16[var15];
                var16 = var17.bind(var3)(var16);
                var17 = var16.Text;
                var16 = {
                    'style': null,
                    'variant': 'heading-xxl/extrabold',
                    'color': 'always-white'
                };
                var29 = var20.title;
                var16.style = var29;
                if (!(var25 == var36)) {
                    _fun74644_ip = 1239;
                    continue _fun74644
                }
            case 1180:
                var33 = _closure1_slot0;
                var34 = _closure1_slot2;
                var29 = 21;
                var31 = var34[var29];
                var31 = var33.bind(var3)(var31);
                var32 = var31.intl;
                var31 = var32.string;
                var29 = var34[var29];
                var29 = var33.bind(var3)(var29);
                var29 = var29.t;
                var29 = var29.dqQgZv;
                var29 = var31.bind(var32)(var29);
                _fun74644_ip = 1318;
                continue _fun74644;
            case 1239:
                var32 = _closure1_slot0;
                var35 = _closure1_slot2;
                var31 = 21;
                var33 = var35[var31];
                var33 = var32.bind(var3)(var33);
                var34 = var33.intl;
                var33 = var34.formatToPlainString;
                var31 = var35[var31];
                var31 = var32.bind(var3)(var31);
                var31 = var31.t;
                var32 = var31.m5ggvH;
                var31 = {};
                var35 = var36.globalName;
                if (!(var25 == var35)) {
                    _fun74644_ip = 1308;
                    continue _fun74644
                }
            case 1303:
                var35 = var36.username;
            case 1308:
                var31.username = var35;
                var29 = var33.bind(var34)(var32, var31);
            case 1318:
                var16.children = var29;
                var16 = var18.bind(var3)(var17, var16);
                var11[1] = var16;
                var17 = _closure1_slot10;
                var32 = _closure1_slot0;
                var33 = _closure1_slot2;
                var15 = var33[var15];
                var15 = var32.bind(var3)(var15);
                var16 = var15.Text;
                var15 = {
                    'style': null,
                    'variant': 'heading-sm/medium',
                    'color': 'always-white'
                };
                var18 = var20.description;
                var15.style = var18;
                var18 = 21;
                var29 = var33[var18];
                var29 = var32.bind(var3)(var29);
                var31 = var29.intl;
                var29 = var31.string;
                var18 = var33[var18];
                var18 = var32.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18["30qzrd"];
                var18 = var29.bind(var31)(var18);
                var15.children = var18;
                var15 = var17.bind(var3)(var16, var15);
                var11[2] = var15;
                var12 = var12.length;
                if (!(var14 !== var12)) {
                    _fun74644_ip = 1464;
                    continue _fun74644
                }
            case 1455:
                var12 = null;
                if (!(var3 !== var13)) {
                    _fun74644_ip = 1702;
                    continue _fun74644
                }
            case 1464:
                var15 = _closure1_slot12;
                var14 = _closure1_slot11;
                var13 = {};
                var18 = _closure1_slot10;
                var17 = _closure1_slot1;
                var29 = _closure1_slot2;
                var16 = 31;
                var16 = var29[var16];
                var17 = var17.bind(var3)(var16);
                var16 = {};
                var31 = var20.carousel;
                var29 = new Array(2);
                var29[0] = var31;
                var29[1] = var30;
                var16.style = var29;
                var29 = _closure1_slot13;
                var16.data = var29;
                var16.renderItem = var28;
                var16.width = var27;
                var27 = var25 != var26;
                var25 = undefined;
                if (!var27) {
                    _fun74644_ip = 1551;
                    continue _fun74644
                }
            case 1548:
                var25 = var26;
            case 1551:
                var16.height = var25;
                var24 = function arg0() {
                    var2 = arg0;
                    var1 = var2.activeOffsetX;
                    var0 = new Array(2);
                    var3 = -10;
                    var0[0] = var3;
                    var3 = 10;
                    var0[1] = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var16.onConfigurePanGesture = var24;
                var16.loop = var23;
                var23 = 200;
                var16.scrollAnimationDuration = var23;
                var23 = 'parallax';
                var16.mode = var23;
                var23 = {
                    'parallaxScrollingScale': 1,
                    'parallaxScrollingOffset': 40
                };
                var16.modeConfig = var23;
                var16.onSnapToItem = var19;
                var17 = var18.bind(var3)(var17, var16);
                var16 = new Array(2);
                var16[0] = var17;
                var19 = _closure1_slot10;
                var18 = _closure1_slot1;
                var23 = _closure1_slot2;
                var17 = 32;
                var17 = var23[var17];
                var18 = var18.bind(var3)(var17);
                var17 = {};
                var22 = _closure1_slot13;
                var22 = var22.length;
                var17.numberOfItems = var22;
                var17.currentIndex = var21;
                var20 = var20.pagination;
                var17.containerStyle = var20;
                var17 = var19.bind(var3)(var18, var17);
                var16[1] = var17;
                var13.children = var16;
                var12 = var15.bind(var3)(var14, var13);
            case 1702:
                var11[3] = var12;
                var8.children = var11;
                var8 = var9.bind(var3)(var10, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[4] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 7036, 1615, 660, 33, 1297, 671, 669, 1469, 4672, 1464, 9368, 566, 9387, 9366, 9388, 3068, 3895, 1234, 3679, 4847, 4056, 7852, 4667, 9396, 4057, 5414, 3900, 9397, 9431, 2]);