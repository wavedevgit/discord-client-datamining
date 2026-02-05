// modules/premium/roadblocks/native/views/PremiumFeatureUpsell.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun68758: for (var _fun68758_ip = 0;;) switch (_fun68758_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = 5;
                var2 = var1[var5];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var2 = var2.EntitlementFeatureNames;
                var2 = var2.SOUNDBOARD_EVERYWHERE;
                if (!(var2 !== var3)) {
                    _fun68758_ip = 184;
                    continue _fun68758
                }
            case 47:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.EntitlementFeatureNames;
                var2 = var2.EMOJIS_EVERYWHERE;
                if (!(var2 !== var3)) {
                    _fun68758_ip = 172;
                    continue _fun68758
                }
            case 80:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.EntitlementFeatureNames;
                var2 = var2.INCREASED_FILE_UPLOAD_SIZE;
                if (!(var2 !== var3)) {
                    _fun68758_ip = 160;
                    continue _fun68758
                }
            case 113:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.EntitlementFeatureNames;
                var2 = var2.APP_ICONS;
                if (!(var2 !== var3)) {
                    _fun68758_ip = 148;
                    continue _fun68758
                }
            case 146:
                return var1;
            case 148:
                var1 = _closure1_slot8;
                var1 = var1.APP_ICON_INLINE_UPSELL;
                return var1;
            case 160:
                var1 = _closure1_slot8;
                var1 = var1.LARGER_FILE_UPLOAD_INLINE_UPSELL;
                return var1;
            case 172:
                var1 = _closure1_slot8;
                var1 = var1.EMOJI_EVERYWHERE_INLINE_UPSELL;
                return var1;
            case 184:
                var0 = _closure1_slot8;
                var0 = var0.SOUNDBOARD_EVERYWHERE_INLINE_UPSELL;
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        _fun68759: for (var _fun68759_ip = 0;;) switch (_fun68759_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.featureName;
                var _closure2_slot0 = var1;
                var6 = var0.showShadow;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun68759_ip = 31;
                    continue _fun68759
                }
            case 29:
                var6 = true;
            case 31:
                var5 = var0.style;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 10;
                var0 = var10[var0];
                var4 = var7.bind(var3)(var0);
                var2 = var4.usePremiumUpsellConfig;
                var0 = 11;
                var0 = var10[var0];
                var7 = var7.bind(var3)(var0);
                var0 = var7.getUpsellType;
                var0 = var0.bind(var7)(var1);
                var0 = var2.bind(var4)(var0);
                var10 = var0.useTier0UpsellContent;
                _closure2_slot1 = var10;
                var2 = var0.onViewAllPerks;
                var0 = _closure1_slot13;
                var11 = var0.bind(var3)(var10);
                _closure2_slot2 = var11;
                var0 = _closure1_slot7;
                if (var10) {
                    _fun68759_ip = 149;
                    continue _fun68759
                }
            case 141:
                var4 = var0.TIER_2;
                _fun68759_ip = 155;
                continue _fun68759;
            case 149:
                var4 = var0.TIER_0;
            case 155:
                var12 = function() { // Environment: var8
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 12;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14 = _closure1_slot0;
                var0 = _closure1_slot2;
                var17 = 6;
                var7 = var0[var17];
                var13 = var14.bind(var3)(var7);
                var7 = var13.getPremiumTypeDisplayName;
                var13 = var7.bind(var13)(var4);
                var7 = 5;
                var0 = var0[var7];
                var0 = var14.bind(var3)(var0);
                var0 = var0.EntitlementFeatureNames;
                var0 = var0.SOUNDBOARD_EVERYWHERE;
                var16 = var4;
                if (!(var0 !== var1)) {
                    _fun68759_ip = 576;
                    continue _fun68759
                }
            case 227:
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var7];
                var0 = var4.bind(var3)(var0);
                var0 = var0.EntitlementFeatureNames;
                var0 = var0.EMOJIS_EVERYWHERE;
                if (!(var0 !== var1)) {
                    _fun68759_ip = 504;
                    continue _fun68759
                }
            case 263:
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var7];
                var0 = var4.bind(var3)(var0);
                var0 = var0.EntitlementFeatureNames;
                var0 = var0.INCREASED_FILE_UPLOAD_SIZE;
                if (!(var0 !== var1)) {
                    _fun68759_ip = 404;
                    continue _fun68759
                }
            case 296:
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var7];
                var0 = var4.bind(var3)(var0);
                var0 = var0.EntitlementFeatureNames;
                var0 = var0.APP_ICONS;
                var20 = undefined;
                if (!(var0 === var1)) {
                    _fun68759_ip = 646;
                    continue _fun68759
                }
            case 334:
                var1 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 7;
                var4 = var14[var0];
                var4 = var1.bind(var3)(var4);
                var7 = var4.intl;
                var4 = var7.format;
                var0 = var14[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.t;
                var1 = var0.x2dQxN;
                var0 = {};
                var0.onClick = var12;
                var20 = var4.bind(var7)(var1, var0);
                _fun68759_ip = 646;
                continue _fun68759;
            case 404:
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 7;
                var1 = var14[var0];
                var1 = var15.bind(var3)(var1);
                var7 = var1.intl;
                var4 = var7.format;
                var0 = var14[var0];
                var0 = var15.bind(var3)(var0);
                var0 = var0.t;
                var1 = var0.zzyLEK;
                var0 = {};
                var14 = var14[var17];
                var15 = var15.bind(var3)(var14);
                var14 = var15.getMaxFileSizeForPremiumType;
                var14 = var14.bind(var15)(var16);
                var0.maxFileSize = var14;
                var0.nitroTierName = var13;
                var0.onClick = var12;
                var20 = var4.bind(var7)(var1, var0);
                _fun68759_ip = 646;
                continue _fun68759;
            case 504:
                var1 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 7;
                var4 = var14[var0];
                var4 = var1.bind(var3)(var4);
                var7 = var4.intl;
                var4 = var7.format;
                var0 = var14[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.t;
                var1 = var0.gMVjeS;
                var0 = {};
                var0.nitroTierName = var13;
                var0.onClick = var12;
                var20 = var4.bind(var7)(var1, var0);
                _fun68759_ip = 646;
                continue _fun68759;
            case 576:
                var1 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 7;
                var4 = var14[var0];
                var4 = var1.bind(var3)(var4);
                var7 = var4.intl;
                var4 = var7.format;
                var0 = var14[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.t;
                var1 = var0["tw/SSq"];
                var0 = {};
                var0.nitroTierName = var13;
                var0.onClick = var12;
                var20 = var4.bind(var7)(var1, var0);
            case 646:
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 13;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = _closure1_slot10;
                var0 = var0.PREMIUM_UPSELL_FILE_UPLOAD;
                var0 = var1.bind(var3)(var10, var2, var0);
                var16 = var0.loading;
                _closure2_slot3 = var16;
                var12 = var0.onPress;
                var2 = _closure1_slot12;
                var1 = _closure1_slot5;
                var0 = {};
                var7 = var11.container;
                var4 = new Array(3);
                var4[0] = var7;
                if (!var6) {
                    _fun68759_ip = 730;
                    continue _fun68759
                }
            case 724:
                var6 = var11.containerShadow;
            case 730:
                var4[1] = var6;
                var4[2] = var5;
                var0.style = var4;
                var6 = _closure1_slot12;
                var5 = _closure1_slot5;
                var4 = {};
                var7 = var11.labelContainer;
                var4.style = var7;
                var14 = _closure1_slot11;
                var17 = _closure1_slot1;
                var13 = _closure1_slot2;
                var7 = 14;
                var7 = var13[var7];
                var13 = var17.bind(var3)(var7);
                var7 = {};
                var19 = _closure1_slot2;
                if (var10) {
                    _fun68759_ip = 804;
                    continue _fun68759
                }
            case 795:
                var15 = 16;
                var15 = var19[var15];
                _fun68759_ip = 811;
                continue _fun68759;
            case 804:
                var18 = 15;
                var15 = var19[var18];
            case 811:
                var15 = var17.bind(var3)(var15);
                var7.source = var15;
                var15 = var11.nitroWheel;
                var7.style = var15;
                var15 = true;
                var7.disableColor = var15;
                var13 = var14.bind(var3)(var13, var7);
                var7 = new Array(2);
                var7[0] = var13;
                var19 = _closure1_slot11;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var17 = 17;
                var17 = var13[var17];
                var17 = var14.bind(var3)(var17);
                var18 = var17.Text;
                var17 = {};
                var21 = var11.text;
                var17.style = var21;
                var21 = 'text-sm/medium';
                var17.variant = var21;
                var17.children = var20;
                var17 = var19.bind(var3)(var18, var17);
                var7[1] = var17;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot11;
                var6 = _closure1_slot1;
                var5 = 18;
                var5 = var13[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.disabled = var16;
                var5.shrink = var15;
                var11 = var11.button;
                var5.style = var11;
                var11 = 19;
                var13 = var13[var11];
                var13 = var14.bind(var3)(var13);
                var13 = var13.ButtonSizes;
                var13 = var13.XSMALL;
                var5.size = var13;
                var5.onPress = var12;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var12 = 7;
                var13 = var16[var12];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                if (var10) {
                    _fun68759_ip = 1064;
                    continue _fun68759
                }
            case 1051:
                var10 = var12["8x0jKT"];
                var10 = var13.bind(var14)(var10);
                _fun68759_ip = 1075;
                continue _fun68759;
            case 1064:
                var12 = var12.cM8bbx;
                var10 = var13.bind(var14)(var12);
            case 1075:
                var5.text = var10;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var11];
                var9 = var10.bind(var3)(var9);
                var9 = var9.ButtonColors;
                var9 = var9.GREEN;
                var5.color = var9;
                var9 = function() {
                    _fun68761: for (var _fun68761_ip = 0;;) switch (_fun68761_ip) {
                        case 0:
                            var3 = _closure1_slot11;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 20;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var4 = _closure2_slot2;
                            var5 = var4.nitroWheelButton;
                            var4 = new Array(2);
                            var4[0] = var5;
                            var5 = _closure2_slot3;
                            if (!var5) {
                                _fun68761_ip = 69;
                                continue _fun68761
                            }
                        case 59:
                            var6 = _closure2_slot2;
                            var5 = var6.nitroWheelDisabled;
                        case 69:
                            var4[1] = var5;
                            var0.style = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var5.renderIcon = var9;
                var8 = function() {
                    _fun68762: for (var _fun68762_ip = 0;;) switch (_fun68762_ip) {
                        case 0:
                            var3 = _closure1_slot11;
                            var1 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var0 = 21;
                            var0 = var6[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var7 = _closure2_slot2;
                            var7 = var7.gradient;
                            var0.style = var7;
                            var8 = _closure1_slot0;
                            var7 = 22;
                            var9 = var6[var7];
                            var9 = var8.bind(var2)(var9);
                            var9 = var9.HorizontalGradient;
                            var9 = var9.START;
                            var0.start = var9;
                            var6 = var6[var7];
                            var6 = var8.bind(var2)(var6);
                            var6 = var6.HorizontalGradient;
                            var6 = var6.END;
                            var0.end = var6;
                            var4 = _closure2_slot1;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var5 = var5[var7];
                            var5 = var6.bind(var2)(var5);
                            var5 = var5.Gradients;
                            if (var4) {
                                _fun68762_ip = 143;
                                continue _fun68762
                            }
                        case 135:
                            var4 = var5.PREMIUM_TIER_2_TRI_COLOR;
                            _fun68762_ip = 149;
                            continue _fun68762;
                        case 143:
                            var4 = var5.PREMIUM_TIER_0;
                        case 149:
                            var0.colors = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var5.renderLinearGradient = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.StyleSheet;
    var _closure1_slot4 = var6;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.PremiumSubscriptionSKUs;
    var _closure1_slot6 = var6;
    var6 = var3.PremiumTypes;
    var _closure1_slot7 = var6;
    var3 = var3.PremiumUpsellTypes;
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot9 = var6;
    var3 = var3.AnalyticsPages;
    var _closure1_slot10 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot11 = var6;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0) { // Environment: var1
        _fun68763: for (var _fun68763_ip = 0;;) switch (_fun68763_ip) {
            case 0:
                var0 = {};
                var1 = {};
                var2 = 'row';
                var1.flexDirection = var2;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var6 = 9;
                var7 = var3[var6];
                var5 = undefined;
                var7 = var4.bind(var5)(var7);
                var7 = var7.colors;
                var7 = var7.BACKGROUND_SURFACE_HIGH;
                var1.backgroundColor = var7;
                var7 = var3[var6];
                var7 = var4.bind(var5)(var7);
                var7 = var7.radii;
                var7 = var7.round;
                var1.borderRadius = var7;
                var7 = var3[var6];
                var7 = var4.bind(var5)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_12;
                var1.padding = var7;
                var7 = 'space-between';
                var1.justifyContent = var7;
                var0.container = var1;
                var1 = {};
                var3 = var3[var6];
                var3 = var4.bind(var5)(var3);
                var3 = var3.shadows;
                var10 = var3.SHADOW_HIGH;
                var11 = var1;
                var3 = copyDataProperties(var11, var10);
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var4.bind(var5)(var3);
                var3 = var3.unsafe_rawColors;
                var4 = arg0;
                if (var4) {
                    _fun68763_ip = 179;
                    continue _fun68763
                }
            case 171:
                var4 = var3.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2;
                _fun68763_ip = 185;
                continue _fun68763;
            case 179:
                var4 = var3.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2;
            case 185:
                var3 = 'shadowColor';
                var1[var3] = var4;
                var8 = 0.6;
                var3 = 'shadowOpacity';
                var1[var3] = var8;
                var0.containerShadow = var1;
                var1 = {
                    'width': 20,
                    'height': 20
                };
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var7 = var3[var6];
                var7 = var4.bind(var5)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_4;
                var1.marginEnd = var7;
                var0.nitroWheel = var1;
                var1 = {
                    'flexDirection': 'row',
                    'flexShrink': 1,
                    'alignItems': 'center'
                };
                var7 = 'center';
                var9 = var3[var6];
                var9 = var4.bind(var5)(var9);
                var9 = var9.spacing;
                var9 = var9.PX_4;
                var1.marginEnd = var9;
                var0.labelContainer = var1;
                var1 = {
                    'flexShrink': 1,
                    'flexWrap': 'wrap'
                };
                var0.text = var1;
                var1 = {
                    'marginStart': 4294967294,
                    'width': 20,
                    'height': 20
                };
                var0.nitroWheelButton = var1;
                var1 = {};
                var1.opacity = var8;
                var0.nitroWheelDisabled = var1;
                var1 = {};
                var1.alignSelf = var7;
                var3 = var3[var6];
                var3 = var4.bind(var5)(var3);
                var3 = var3.radii;
                var3 = var3.round;
                var1.borderRadius = var3;
                var0.button = var1;
                var1 = {};
                var2 = _closure1_slot4;
                var10 = var2.absoluteFillObject;
                var11 = var1;
                var2 = copyDataProperties(var11, var10);
                var0.gradient = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = {};
    var6 = "function animationEnterExit_PremiumFeatureUpsellTsx1(visible,cleanUp){const{withSpring,springStandard}=this.__closure;return{opacity:withSpring(visible,springStandard,'respect-motion-settings',function(finished){cleanUp===null||cleanUp===void 0||cleanUp(finished);})};}";
    var3.code = var6;
    var _closure1_slot14 = var3;
    var3 = {};
    var6 = 'function PremiumFeatureUpsellTsx2(finished){const{cleanUp}=this.__closure;var _cleanUp;(_cleanUp=cleanUp)===null||_cleanUp===void 0||_cleanUp(finished);}';
    var3.code = var6;
    var _closure1_slot15 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1() {
            var7 = arg1;
            var _closure3_slot0 = var7;
            var0 = {};
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 23;
            var3 = var9[var3];
            var4 = undefined;
            var6 = var8.bind(var4)(var3);
            var5 = var6.withSpring;
            var3 = 24;
            var3 = var9[var3];
            var3 = var8.bind(var4)(var3);
            var12 = var3.springStandard;
            var3 = function arg0() {
                _fun68766: for (var _fun68766_ip = 0;;) switch (_fun68766_ip) {
                    case 0:
                        var2 = _closure3_slot0;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun68766_ip = 27;
                            continue _fun68766
                        }
                    case 13:
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0);
                    case 27:
                        var0 = undefined;
                        return var0;
                }
            };
            var2 = {};
            var2.cleanUp = var7;
            var3.__closure = var2;
            var2 = 7812030105128.0;
            var3.__workletHash = var2;
            var1 = _closure1_slot15;
            var3.__initData = var1;
            var13 = arg0;
            var11 = 'respect-motion-settings';
            var14 = var6;
            var10 = var3;
            var1 = var14[var5](var13, var12, var11, var10, var9);
            var0.opacity = var1;
            return var0;
        };
        var2 = {};
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var3 = 23;
        var3 = var6[var3];
        var4 = undefined;
        var3 = var5.bind(var4)(var3);
        var3 = var3.withSpring;
        var2.withSpring = var3;
        var3 = 24;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.springStandard;
        var2.springStandard = var3;
        var0.__closure = var2;
        var2 = 15470414797897.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot14;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot16 = var3;
    var3 = 32;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/roadblocks/native/views/PremiumFeatureUpsell.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun68767: for (var _fun68767_ip = 0;;) switch (_fun68767_ip) {
            case 0:
                var3 = arg0;
                var4 = var3.shouldShow;
                var1 = null;
                var2 = Object.create(var1);
                var1 = 0;
                var2.shouldShow = var1;
                var18 = {};
                var17 = var3;
                var16 = var2;
                var10 = copyDataProperties(var18, var17, var16);
                var _closure2_slot0 = var10;
                var6 = _closure1_slot3;
                var1 = var6.useRef;
                var9 = false;
                var15 = var1.bind(var6)(var9);
                var _closure2_slot1 = var15;
                var5 = _closure1_slot1;
                var12 = _closure1_slot2;
                var1 = 25;
                var1 = var12[var1];
                var3 = undefined;
                var1 = var5.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var13 = var1.analyticsLocations;
                var _closure2_slot2 = var13;
                var1 = _closure1_slot0;
                var2 = 26;
                var2 = var12[var2];
                var7 = var1.bind(var3)(var2);
                var2 = var7.useAnalyticsContext;
                var2 = var2.bind(var7)();
                var14 = var2.location;
                var _closure2_slot3 = var14;
                var2 = 27;
                var2 = var12[var2];
                var2 = var5.bind(var3)(var2);
                var11 = var2.bind(var3)(var4);
                var _closure2_slot4 = var11;
                var7 = var6.useCallback;
                var4 = function(arg0, arg1) { // Environment: var0
                    var3 = _closure1_slot11;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 28;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.View;
                    var0 = {};
                    var5 = arg1;
                    var0.style = var5;
                    var6 = _closure1_slot11;
                    var5 = _closure1_slot18;
                    var4 = {};
                    var8 = arg0;
                    var9 = var4;
                    var7 = copyDataProperties(var9, var8);
                    var4 = var6.bind(var2)(var5, var4);
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var2 = new Array(0);
                var7 = var7.bind(var6)(var4, var2);
                var4 = var6.useEffect;
                var2 = new Array(5);
                var2[0] = var15;
                var2[1] = var14;
                var2[2] = var13;
                var2[3] = var11;
                var13 = var10.featureName;
                var2[4] = var13;
                var0 = function() { // Environment: var0
                    _fun68769: for (var _fun68769_ip = 0;;) switch (_fun68769_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var1 = var1.current;
                            var1 = !var1;
                            if (!var1) {
                                _fun68769_ip = 22;
                                continue _fun68769
                            }
                        case 18:
                            var1 = _closure2_slot4;
                        case 22:
                            if (!var1) {
                                _fun68769_ip = 170;
                                continue _fun68769
                            }
                        case 28:
                            var2 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var1 = 29;
                            var1 = var9[var1];
                            var8 = undefined;
                            var4 = var2.bind(var8)(var1);
                            var3 = var4.track;
                            var1 = _closure1_slot9;
                            var2 = var1.PREMIUM_UPSELL_VIEWED;
                            var1 = {};
                            var7 = _closure1_slot17;
                            var6 = _closure2_slot0;
                            var6 = var6.featureName;
                            var6 = var7.bind(var8)(var6);
                            var1.type = var6;
                            var6 = _closure2_slot3;
                            var1.location = var6;
                            var6 = _closure2_slot2;
                            var1.location_stack = var6;
                            var7 = _closure1_slot0;
                            var6 = 6;
                            var6 = var9[var6];
                            var7 = var7.bind(var8)(var6);
                            var6 = var7.castPremiumSubscriptionAsSkuId;
                            var5 = _closure1_slot6;
                            var5 = var5.TIER_2;
                            var5 = var6.bind(var7)(var5);
                            var1.sku_id = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            var1 = _closure2_slot1;
                            var0 = true;
                            var1.current = var0;
                        case 170:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var4.bind(var6)(var0, var2);
                var2 = _closure1_slot11;
                var0 = 30;
                var0 = var12[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.RedesignCompatContext;
                var1 = var0.Provider;
                var0 = {};
                var0.value = var9;
                var6 = _closure1_slot11;
                var4 = 31;
                var4 = var12[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.useReducedMotion = var9;
                var9 = undefined;
                if (!var11) {
                    _fun68767_ip = 289;
                    continue _fun68767
                }
            case 286:
                var9 = var10;
            case 289:
                var4.item = var9;
                var8 = _closure1_slot16;
                var4.entering = var8;
                var4.exiting = var8;
                var4.renderItem = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1623, 660, 33, 7642, 3109, 1234, 1297, 671, 7632, 7649, 7640, 7652, 4086, 8607, 8608, 3941, 7653, 4875, 6625, 4098, 670, 4081, 4087, 5730, 8064, 8212, 3720, 795, 4899, 4932, 2]);